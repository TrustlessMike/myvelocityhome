"use server"

import { getCloudflareContext } from "@opennextjs/cloudflare"

interface MortgageData {
  homePrice: number
  downPayment: number
  loanAmount: number
  interestRate: number
  loanTerm: number
  monthlyPayment: number
  principalAndInterest: number
  monthlyPropertyTax: number
  monthlyHomeInsurance: number
  monthlyHOA: number
  totalInterestPaid: number
  amortizationSchedule: any[]
  userName?: string
}

type R2BucketBinding = {
  put(
    key: string,
    value: ArrayBuffer | ArrayBufferView | string,
    options?: { httpMetadata?: Record<string, string> },
  ): Promise<unknown>
}

type CloudflareEnv = {
  MORTGAGE_PDFS?: R2BucketBinding
}

const PAGE_WIDTH = 595
const PAGE_HEIGHT = 842
const LEFT = 48
const TOP = 792
const LINE_HEIGHT = 18

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

function pdfEscape(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
}

function normalizeText(value: string) {
  return value.replace(/[^\x20-\x7E]/g, "")
}

function textLine(text: string, x: number, y: number, size = 11) {
  return `BT /F1 ${size} Tf ${x} ${y} Td (${pdfEscape(normalizeText(text))}) Tj ET`
}

function buildPdf(data: MortgageData) {
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const downPct = data.homePrice > 0 ? ((data.downPayment / data.homePrice) * 100).toFixed(1) : "0.0"
  const lines = [
    { text: "Velocity Home Loans", size: 18 },
    { text: "Mortgage Calculator Results", size: 16 },
    { text: `Generated on ${date}`, size: 10 },
    ...(data.userName ? [{ text: `Prepared for: ${data.userName}`, size: 10 }] : []),
    { text: "", size: 10 },
    { text: `Monthly Payment: ${formatCurrency(data.monthlyPayment)}`, size: 16 },
    { text: "", size: 10 },
    { text: "Loan Summary", size: 13 },
    { text: `Home Price: ${formatCurrency(data.homePrice)}`, size: 11 },
    { text: `Down Payment: ${formatCurrency(data.downPayment)} (${downPct}%)`, size: 11 },
    { text: `Loan Amount: ${formatCurrency(data.loanAmount)}`, size: 11 },
    { text: `Interest Rate: ${data.interestRate}%`, size: 11 },
    { text: `Loan Term: ${data.loanTerm} years`, size: 11 },
    { text: `Total Interest Paid: ${formatCurrency(data.totalInterestPaid)}`, size: 11 },
    { text: "", size: 10 },
    { text: "Payment Breakdown", size: 13 },
    { text: `Principal and Interest: ${formatCurrency(data.principalAndInterest)}`, size: 11 },
    { text: `Property Tax: ${formatCurrency(data.monthlyPropertyTax)}`, size: 11 },
    { text: `Home Insurance: ${formatCurrency(data.monthlyHomeInsurance)}`, size: 11 },
    { text: `HOA Fees: ${formatCurrency(data.monthlyHOA)}`, size: 11 },
    { text: "", size: 10 },
    { text: "Amortization Schedule", size: 13 },
    { text: "Year | Principal | Interest | Remaining Balance | Total Interest", size: 10 },
    ...data.amortizationSchedule.slice(0, 30).map((entry) => ({
      text: `${entry.year} | ${formatCurrency(entry.principalPayment)} | ${formatCurrency(entry.interestPayment)} | ${formatCurrency(entry.remainingBalance)} | ${formatCurrency(entry.totalInterestToDate)}`,
      size: 9,
    })),
    { text: "", size: 10 },
    { text: "This document is for informational purposes only and does not constitute a loan offer or commitment.", size: 9 },
    { text: "Velocity Home Loans | (248) 974-8711 | info@myvelocitymortgage.com | NMLS #2706011", size: 9 },
  ]

  const pageStreams: string[] = []
  let current: string[] = []
  let y = TOP

  for (const line of lines) {
    if (y < 60) {
      pageStreams.push(current.join("\n"))
      current = []
      y = TOP
    }
    if (!line.text) {
      y -= LINE_HEIGHT / 2
      continue
    }
    current.push(textLine(line.text, LEFT, y, line.size))
    y -= LINE_HEIGHT
  }
  pageStreams.push(current.join("\n"))

  const objects: string[] = []
  const add = (body: string) => {
    objects.push(body)
    return objects.length
  }

  const catalogId = add("<< /Type /Catalog /Pages 2 0 R >>")
  const pagesId = add("PAGES_PLACEHOLDER")
  const fontId = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
  const pageIds: number[] = []

  for (const stream of pageStreams) {
    const contentId = add(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`)
    const pageId = add(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 ${fontId} 0 R >> >> /Contents ${contentId} 0 R >>`)
    pageIds.push(pageId)
  }

  objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`

  let pdf = "%PDF-1.4\n"
  const offsets = [0]
  objects.forEach((body, index) => {
    offsets.push(pdf.length)
    pdf += `${index + 1} 0 obj\n${body}\nendobj\n`
  })
  const xrefStart = pdf.length
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
  for (let i = 1; i < offsets.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefStart}\n%%EOF`

  return new TextEncoder().encode(pdf)
}

async function getMortgageBucket() {
  const { env } = (await getCloudflareContext({ async: true })) as { env: CloudflareEnv }
  return env.MORTGAGE_PDFS
}

export async function generateMortgagePDF(data: MortgageData) {
  try {
    const pdf = buildPdf(data)
    const timestamp = Date.now()
    const filename = `mortgage-calculation-${timestamp}.pdf`
    const bucket = await getMortgageBucket()

    if (!bucket) {
      const base64 = Buffer.from(pdf).toString("base64")
      return { success: true, url: `data:application/pdf;base64,${base64}` }
    }

    await bucket.put(filename, pdf, {
      httpMetadata: {
        contentType: "application/pdf",
        contentDisposition: `inline; filename="${filename}"`,
      },
    })

    return { success: true, url: `/api/mortgage-pdf/${filename}` }
  } catch (error) {
    console.error("Error generating PDF:", error)
    return { success: false, error: "Failed to generate PDF" }
  }
}
