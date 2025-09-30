"use server"

import { put } from "@vercel/blob"
// NOTE: puppeteer-core and @sparticuz/chromium are heavy; we lazy-load them inside the function

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
  userName?: string // Optional user name
}

export async function generateMortgagePDF(data: MortgageData) {
  try {
    // Lazy-load heavy PDF dependencies to avoid slowing down dev server startup
    const { default: puppeteer } = await import("puppeteer-core")
    const { default: chromium } = await import("@sparticuz/chromium")

    // Format currency for display
    const formatCurrency = (value: number) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value)
    }

    // Format date
    const currentDate = new Date()
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    // Generate HTML content for the PDF
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Mortgage Calculator Results</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
              border-bottom: 2px solid #0052cc;
              padding-bottom: 10px;
              position: relative;
            }
            .logo {
              max-width: 200px;
              margin-bottom: 10px;
            }
            .logo-container {
              text-align: center;
              margin-bottom: 20px;
            }
            h1 {
              color: #0052cc;
              margin: 0;
              font-size: 24px;
            }
            h2 {
              color: #0052cc;
              margin-top: 30px;
              font-size: 20px;
              border-bottom: 1px solid #ddd;
              padding-bottom: 5px;
            }
            .summary {
              background-color: #f5f5f5;
              padding: 15px;
              border-radius: 5px;
              margin: 20px 0;
            }
            .monthly-payment {
              font-size: 24px;
              font-weight: bold;
              color: #0052cc;
              text-align: center;
              margin: 20px 0;
            }
            .details {
              display: flex;
              flex-wrap: wrap;
              gap: 20px;
              margin-bottom: 20px;
            }
            .detail-item {
              flex: 1;
              min-width: 200px;
            }
            .label {
              font-weight: bold;
              margin-bottom: 5px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #f2f2f2;
            }
            tr:nth-child(even) {
              background-color: #f9f9f9;
            }
            .footer {
              margin-top: 30px;
              text-align: center;
              font-size: 12px;
              color: #666;
              border-top: 1px solid #ddd;
              padding-top: 10px;
            }
            .watermark {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0.05;
              pointer-events: none;
              z-index: -1;
              background-repeat: no-repeat;
              background-position: center;
              background-size: 50%;
            }
            .user-info {
              margin-top: 10px;
              font-style: italic;
            }
          </style>
        </head>
        <body>
          <div class="logo-container">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Velocity%20Home%20Loans%20Google%20Logo-vEDhFyrYPWMaPW0Z0IputoBM61v3d5.png" alt="Velocity Home Loans" class="logo">
          </div>
          
          <div class="header">
            <h1>Mortgage Calculator Results</h1>
            <p>Generated on ${formattedDate}</p>
            ${data.userName ? `<p class="user-info">Prepared for: ${data.userName}</p>` : ""}
          </div>
          
          <div class="summary">
            <div class="monthly-payment">
              Monthly Payment: ${formatCurrency(data.monthlyPayment)}
            </div>
            
            <div class="details">
              <div class="detail-item">
                <div class="label">Home Price:</div>
                <div>${formatCurrency(data.homePrice)}</div>
              </div>
              <div class="detail-item">
                <div class="label">Down Payment:</div>
                <div>${formatCurrency(data.downPayment)} (${((data.downPayment / data.homePrice) * 100).toFixed(1)}%)</div>
              </div>
              <div class="detail-item">
                <div class="label">Loan Amount:</div>
                <div>${formatCurrency(data.loanAmount)}</div>
              </div>
            </div>
            
            <div class="details">
              <div class="detail-item">
                <div class="label">Interest Rate:</div>
                <div>${data.interestRate}%</div>
              </div>
              <div class="detail-item">
                <div class="label">Loan Term:</div>
                <div>${data.loanTerm} years</div>
              </div>
              <div class="detail-item">
                <div class="label">Total Interest Paid:</div>
                <div>${formatCurrency(data.totalInterestPaid)}</div>
              </div>
            </div>
          </div>
          
          <h2>Payment Breakdown</h2>
          <div class="details">
            <div class="detail-item">
              <div class="label">Principal & Interest:</div>
              <div>${formatCurrency(data.principalAndInterest)}</div>
            </div>
            ${
              data.monthlyPropertyTax > 0
                ? `
            <div class="detail-item">
              <div class="label">Property Tax:</div>
              <div>${formatCurrency(data.monthlyPropertyTax)}</div>
            </div>
            `
                : ""
            }
            ${
              data.monthlyHomeInsurance > 0
                ? `
            <div class="detail-item">
              <div class="label">Home Insurance:</div>
              <div>${formatCurrency(data.monthlyHomeInsurance)}</div>
            </div>
            `
                : ""
            }
            ${
              data.monthlyHOA > 0
                ? `
            <div class="detail-item">
              <div class="label">HOA Fees:</div>
              <div>${formatCurrency(data.monthlyHOA)}</div>
            </div>
            `
                : ""
            }
          </div>
          
          <h2>Amortization Schedule</h2>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Principal Payment</th>
                <th>Interest Payment</th>
                <th>Remaining Balance</th>
                <th>Total Interest Paid</th>
              </tr>
            </thead>
            <tbody>
              ${data.amortizationSchedule
                .map(
                  (entry) => `
                <tr>
                  <td>${entry.year}</td>
                  <td>${formatCurrency(entry.principalPayment)}</td>
                  <td>${formatCurrency(entry.interestPayment)}</td>
                  <td>${formatCurrency(entry.remainingBalance)}</td>
                  <td>${formatCurrency(entry.totalInterestToDate)}</td>
                </tr>
              `,
                )
                .join("")}
            </tbody>
          </table>
          
          <div class="footer">
            <p>This document is for informational purposes only and does not constitute a loan offer or commitment.</p>
            <p>Velocity Home Loans | (248) 974-8711 | info@myvelocitymortgage.com</p>
            <p>NMLS #2706011</p>
          </div>
          
          <div class="watermark" style="background-image: url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Velocity%20Home%20Loans%20Google%20Logo-vEDhFyrYPWMaPW0Z0IputoBM61v3d5.png');"></div>
        </body>
      </html>
    `

    // Launch a headless browser
    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: true,
    })

    // Create a new page
    const page = await browser.newPage()

    // Set content to our HTML
    await page.setContent(htmlContent, { waitUntil: "networkidle0" })

    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "20px",
        right: "20px",
        bottom: "20px",
        left: "20px",
      },
    })

    // Close browser
    await browser.close()

    // Generate a unique filename
    const timestamp = new Date().getTime()
    const filename = `mortgage-calculation-${timestamp}.pdf`

    // Upload PDF to Vercel Blob
    const blob = await put(filename, pdfBuffer, {
      access: "public",
      addRandomSuffix: true,
    })

    return { success: true, url: blob.url }
  } catch (error) {
    console.error("Error generating PDF:", error)
    return { success: false, error: "Failed to generate PDF" }
  }
}
