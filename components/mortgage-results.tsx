"use client"

import { Progress } from "@/components/ui/progress"

interface MortgageResultsProps {
  monthlyPayment: number
  principalAndInterest: number
  monthlyPropertyTax: number
  monthlyHomeInsurance: number
  monthlyHOA: number
  loanAmount: number
  totalInterestPaid: number
}

export function MortgageResults({
  monthlyPayment,
  principalAndInterest,
  monthlyPropertyTax,
  monthlyHomeInsurance,
  monthlyHOA,
  loanAmount,
  totalInterestPaid,
}: MortgageResultsProps) {
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  // Calculate percentages for the payment breakdown
  const piPercent = (principalAndInterest / monthlyPayment) * 100
  const taxPercent = (monthlyPropertyTax / monthlyPayment) * 100
  const insurancePercent = (monthlyHomeInsurance / monthlyPayment) * 100
  const hoaPercent = (monthlyHOA / monthlyPayment) * 100

  return (
    <div className="velocity-card">
      <div className="velocity-card-header">
        <h2 className="velocity-card-title">Payment Summary</h2>
        <p className="velocity-card-description">Your estimated monthly mortgage payment</p>
      </div>
      <div className="velocity-card-content grid gap-6">
        <div className="flex flex-col items-center justify-center">
          <span className="text-sm text-slate-500">Monthly Payment</span>
          <span className="text-4xl font-bold text-primary">{formatCurrency(monthlyPayment)}</span>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="flex items-center justify-between text-sm">
              <span>Principal & Interest</span>
              <span className="font-medium">{formatCurrency(principalAndInterest)}</span>
            </div>
            <Progress value={piPercent} className="h-2 bg-slate-200">
              <div className="h-full bg-primary rounded-full" />
            </Progress>
          </div>

          {monthlyPropertyTax > 0 && (
            <div className="grid gap-2">
              <div className="flex items-center justify-between text-sm">
                <span>Property Tax</span>
                <span className="font-medium">{formatCurrency(monthlyPropertyTax)}</span>
              </div>
              <Progress value={taxPercent} className="h-2 bg-slate-200">
                <div className="h-full bg-primary rounded-full" />
              </Progress>
            </div>
          )}

          {monthlyHomeInsurance > 0 && (
            <div className="grid gap-2">
              <div className="flex items-center justify-between text-sm">
                <span>Home Insurance</span>
                <span className="font-medium">{formatCurrency(monthlyHomeInsurance)}</span>
              </div>
              <Progress value={insurancePercent} className="h-2 bg-slate-200">
                <div className="h-full bg-primary rounded-full" />
              </Progress>
            </div>
          )}

          {monthlyHOA > 0 && (
            <div className="grid gap-2">
              <div className="flex items-center justify-between text-sm">
                <span>HOA Fees</span>
                <span className="font-medium">{formatCurrency(monthlyHOA)}</span>
              </div>
              <Progress value={hoaPercent} className="h-2 bg-slate-200">
                <div className="h-full bg-primary rounded-full" />
              </Progress>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div>
            <p className="text-sm text-slate-500">Loan Amount</p>
            <p className="text-xl font-semibold">{formatCurrency(loanAmount)}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Total Interest Paid</p>
            <p className="text-xl font-semibold">{formatCurrency(totalInterestPaid)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
