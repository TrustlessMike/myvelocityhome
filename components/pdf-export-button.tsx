"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileDown, Loader2, X } from "lucide-react"
import { generateMortgagePDF } from "@/app/actions/generate-pdf"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PdfExportButtonProps {
  mortgageData: {
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
  }
}

export function PdfExportButton({ mortgageData }: PdfExportButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [userName, setUserName] = useState("")

  const handleExportPDF = async () => {
    setIsGenerating(true)

    try {
      const result = await generateMortgagePDF({
        ...mortgageData,
        userName: userName.trim() || undefined,
      })

      if (result.success && result.url) {
        toast({
          title: "PDF Generated Successfully",
          description: "Your mortgage calculation PDF is ready to download.",
          action: (
            <ToastAction altText="Download" onClick={() => window.open(result.url, "_blank")}>
              Download
            </ToastAction>
          ),
        })

        // Open the PDF in a new tab
        window.open(result.url, "_blank")
      } else {
        toast({
          title: "PDF Generation Failed",
          description: "There was an error generating your PDF. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error exporting PDF:", error)
      toast({
        title: "PDF Generation Failed",
        description: "There was an error generating your PDF. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
      setIsDialogOpen(false)
    }
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-primary hover:bg-primary/90">
          <FileDown className="mr-2 h-4 w-4" />
          Export as PDF
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Export Mortgage Calculation</DialogTitle>
          <DialogDescription>Enter your name to personalize the PDF report. This is optional.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Your Name (Optional)"
              className="col-span-3"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
            <X className="mr-2 h-4 w-4" />
            Cancel
          </Button>
          <Button onClick={handleExportPDF} disabled={isGenerating} className="bg-primary hover:bg-primary/90">
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating PDF...
              </>
            ) : (
              <>
                <FileDown className="mr-2 h-4 w-4" />
                Generate PDF
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
