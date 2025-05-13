"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { MortgageResults } from "@/components/mortgage-results"
import { AmortizationTable } from "@/components/amortization-table"
import { PdfExportButton } from "@/components/pdf-export-button"

export function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(300000)
  const [downPayment, setDownPayment] = useState(60000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [loanTerm, setLoanTerm] = useState(30)
  const [interestRate, setInterestRate] = useState(6.5)
  const [propertyTax, setPropertyTax] = useState(3000)
  const [homeInsurance, setHomeInsurance] = useState(1200)
  const [hoaFees, setHoaFees] = useState(0)
  const [includeAdditionalCosts, setIncludeAdditionalCosts] = useState(true)
  const [loanAmount, setLoanAmount] = useState(homePrice - downPayment)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [principalAndInterest, setPrincipalAndInterest] = useState(0)
  const [monthlyPropertyTax, setMonthlyPropertyTax] = useState(propertyTax / 12)
  const [monthlyHomeInsurance, setMonthlyHomeInsurance] = useState(homeInsurance / 12)
  const [totalInterestPaid, setTotalInterestPaid] = useState(0)
  const [amortizationSchedule, setAmortizationSchedule] = useState<any[]>([])

  // Update loan amount when home price or down payment changes
  useEffect(() => {
    const newLoanAmount = homePrice - downPayment
    setLoanAmount(newLoanAmount)
  }, [homePrice, downPayment])

  // Update down payment percentage when down payment or home price changes
  useEffect(() => {
    const newDownPaymentPercent = (downPayment / homePrice) * 100
    setDownPaymentPercent(Number.parseFloat(newDownPaymentPercent.toFixed(1)))
  }, [downPayment, homePrice])

  // Update down payment when down payment percentage or home price changes
  const handleDownPaymentPercentChange = (value: number[]) => {
    const percent = value[0]
    setDownPaymentPercent(percent)
    const newDownPayment = (percent / 100) * homePrice
    setDownPayment(Math.round(newDownPayment))
  }

  // Calculate monthly payment and amortization schedule
  useEffect(() => {
    // Monthly interest rate
    const monthlyRate = interestRate / 100 / 12

    // Total number of payments
    const numberOfPayments = loanTerm * 12

    // Calculate principal and interest payment
    const monthlyPrincipalAndInterest =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    setPrincipalAndInterest(monthlyPrincipalAndInterest)

    // Calculate monthly property tax and insurance
    const monthlyTax = propertyTax / 12
    const monthlyInsurance = homeInsurance / 12

    setMonthlyPropertyTax(monthlyTax)
    setMonthlyHomeInsurance(monthlyInsurance)

    // Calculate total monthly payment
    let totalMonthly = monthlyPrincipalAndInterest

    if (includeAdditionalCosts) {
      totalMonthly += monthlyTax + monthlyInsurance + (hoaFees || 0)
    }

    setMonthlyPayment(totalMonthly)

    // Generate amortization schedule
    const schedule = []
    let remainingBalance = loanAmount
    let totalInterest = 0

    for (let i = 1; i <= numberOfPayments; i++) {
      const interestPayment = remainingBalance * monthlyRate
      const principalPayment = monthlyPrincipalAndInterest - interestPayment

      remainingBalance -= principalPayment
      totalInterest += interestPayment

      // Only add yearly entries to keep the table manageable
      if (i % 12 === 0) {
        schedule.push({
          year: i / 12,
          principalPayment: principalPayment,
          interestPayment: interestPayment,
          totalPayment: monthlyPrincipalAndInterest,
          remainingBalance: remainingBalance > 0 ? remainingBalance : 0,
          totalInterestToDate: totalInterest,
        })
      }
    }

    setAmortizationSchedule(schedule)
    setTotalInterestPaid(totalInterest)
  }, [loanAmount, interestRate, loanTerm, propertyTax, homeInsurance, hoaFees, includeAdditionalCosts])

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="grid gap-6">
      <div className="velocity-card">
        <div className="velocity-card-header">
          <h2 className="velocity-card-title">Mortgage Details</h2>
          <p className="velocity-card-description">Adjust the values to calculate your mortgage payment</p>
        </div>
        <div className="velocity-card-content grid gap-6">
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="home-price">Home Price</Label>
              <div className="w-[180px]">
                <Input
                  id="home-price"
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="text-right"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="down-payment">Down Payment ({downPaymentPercent}%)</Label>
                <div className="w-[180px]">
                  <Input
                    id="down-payment"
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="text-right"
                  />
                </div>
              </div>
              <Slider
                id="down-payment-slider"
                min={0}
                max={50}
                step={0.5}
                value={[downPaymentPercent]}
                onValueChange={handleDownPaymentPercentChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="loan-amount">Loan Amount</Label>
              <div className="w-[180px]">
                <Input id="loan-amount" type="number" value={loanAmount} readOnly className="text-right bg-slate-50" />
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="interest-rate">Interest Rate ({interestRate}%)</Label>
                <div className="w-[180px]">
                  <Input
                    id="interest-rate"
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    step={0.125}
                    min={0}
                    max={20}
                    className="text-right"
                  />
                </div>
              </div>
              <Slider
                id="interest-rate-slider"
                min={0}
                max={10}
                step={0.125}
                value={[interestRate]}
                onValueChange={(value) => setInterestRate(value[0])}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="loan-term">Loan Term ({loanTerm} years)</Label>
                <div className="w-[180px]">
                  <Input
                    id="loan-term"
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    min={1}
                    max={40}
                    className="text-right"
                  />
                </div>
              </div>
              <Slider
                id="loan-term-slider"
                min={5}
                max={30}
                step={5}
                value={[loanTerm]}
                onValueChange={(value) => setLoanTerm(value[0])}
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="additional-costs"
                checked={includeAdditionalCosts}
                onCheckedChange={setIncludeAdditionalCosts}
              />
              <Label htmlFor="additional-costs">Include taxes, insurance & HOA fees</Label>
            </div>

            {includeAdditionalCosts && (
              <div className="grid gap-4 pl-8">
                <div className="flex items-center justify-between">
                  <Label htmlFor="property-tax">Annual Property Tax</Label>
                  <div className="w-[180px]">
                    <Input
                      id="property-tax"
                      type="number"
                      value={propertyTax}
                      onChange={(e) => setPropertyTax(Number(e.target.value))}
                      className="text-right"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="home-insurance">Annual Home Insurance</Label>
                  <div className="w-[180px]">
                    <Input
                      id="home-insurance"
                      type="number"
                      value={homeInsurance}
                      onChange={(e) => setHomeInsurance(Number(e.target.value))}
                      className="text-right"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="hoa-fees">Monthly HOA Fees</Label>
                  <div className="w-[180px]">
                    <Input
                      id="hoa-fees"
                      type="number"
                      value={hoaFees}
                      onChange={(e) => setHoaFees(Number(e.target.value))}
                      className="text-right"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <MortgageResults
        monthlyPayment={monthlyPayment}
        principalAndInterest={principalAndInterest}
        monthlyPropertyTax={includeAdditionalCosts ? monthlyPropertyTax : 0}
        monthlyHomeInsurance={includeAdditionalCosts ? monthlyHomeInsurance : 0}
        monthlyHOA={includeAdditionalCosts ? hoaFees : 0}
        loanAmount={loanAmount}
        totalInterestPaid={totalInterestPaid}
      />

      <Tabs defaultValue="amortization">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="amortization">Amortization Schedule</TabsTrigger>
        </TabsList>
        <TabsContent value="amortization" className="mt-4">
          <AmortizationTable schedule={amortizationSchedule} />
          <div className="mt-6">
            <PdfExportButton
              mortgageData={{
                homePrice,
                downPayment,
                loanAmount,
                interestRate,
                loanTerm,
                monthlyPayment,
                principalAndInterest,
                monthlyPropertyTax,
                monthlyHomeInsurance,
                monthlyHOA: hoaFees,
                totalInterestPaid,
                amortizationSchedule,
              }}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
