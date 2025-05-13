"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LoanTypes() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Mortgage Loan Types</CardTitle>
          <CardDescription>Compare different mortgage options to find the best fit for your needs</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="conventional">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="conventional">Conventional</TabsTrigger>
              <TabsTrigger value="fha">FHA</TabsTrigger>
              <TabsTrigger value="va">VA</TabsTrigger>
              <TabsTrigger value="jumbo">Jumbo</TabsTrigger>
            </TabsList>
            <TabsContent value="conventional" className="mt-6">
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">Conventional Loans</h3>
                <p>
                  Conventional loans are mortgage loans that are not insured or guaranteed by the government. They're
                  available through private lenders like banks, credit unions, and mortgage companies.
                </p>
                <div className="grid gap-2">
                  <h4 className="font-medium">Key Features:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Down payments as low as 3% for qualified buyers</li>
                    <li>Typically require good credit (620+ score)</li>
                    <li>Private Mortgage Insurance (PMI) required for down payments less than 20%</li>
                    <li>Available in fixed-rate and adjustable-rate options</li>
                    <li>Loan limits vary by county ($726,200 in most areas for 2023)</li>
                  </ul>
                </div>
                <div className="grid gap-2">
                  <h4 className="font-medium">Best For:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Borrowers with good credit and stable income</li>
                    <li>Those who can afford a larger down payment</li>
                    <li>Purchasing primary residences, second homes, or investment properties</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="fha" className="mt-6">
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">FHA Loans</h3>
                <p>
                  FHA loans are insured by the Federal Housing Administration and designed to help first-time homebuyers
                  and those with lower credit scores or smaller down payments.
                </p>
                <div className="grid gap-2">
                  <h4 className="font-medium">Key Features:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Down payments as low as 3.5% with a 580+ credit score</li>
                    <li>Down payments of 10% with credit scores between 500-579</li>
                    <li>Mortgage Insurance Premium (MIP) required for the life of the loan in most cases</li>
                    <li>More flexible debt-to-income ratio requirements</li>
                    <li>Property must meet FHA minimum standards</li>
                  </ul>
                </div>
                <div className="grid gap-2">
                  <h4 className="font-medium">Best For:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>First-time homebuyers</li>
                    <li>Borrowers with lower credit scores</li>
                    <li>Those with limited funds for down payment</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="va" className="mt-6">
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">VA Loans</h3>
                <p>
                  VA loans are guaranteed by the U.S. Department of Veterans Affairs and offer benefits to service
                  members, veterans, and eligible surviving spouses.
                </p>
                <div className="grid gap-2">
                  <h4 className="font-medium">Key Features:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>No down payment required in most cases</li>
                    <li>No private mortgage insurance</li>
                    <li>Competitive interest rates</li>
                    <li>Limited closing costs</li>
                    <li>No prepayment penalty</li>
                    <li>VA funding fee required (can be rolled into the loan)</li>
                  </ul>
                </div>
                <div className="grid gap-2">
                  <h4 className="font-medium">Best For:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Eligible veterans, active-duty service members, and surviving spouses</li>
                    <li>Those who want to buy with no down payment</li>
                    <li>Borrowers looking to avoid mortgage insurance</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="jumbo" className="mt-6">
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">Jumbo Loans</h3>
                <p>
                  Jumbo loans are mortgages that exceed the conforming loan limits set by the Federal Housing Finance
                  Agency (FHFA).
                </p>
                <div className="grid gap-2">
                  <h4 className="font-medium">Key Features:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Higher loan amounts than conventional loans</li>
                    <li>Typically require larger down payments (10-20%)</li>
                    <li>Stricter credit requirements (usually 700+ score)</li>
                    <li>Lower debt-to-income ratio requirements</li>
                    <li>May have slightly higher interest rates</li>
                    <li>More extensive documentation requirements</li>
                  </ul>
                </div>
                <div className="grid gap-2">
                  <h4 className="font-medium">Best For:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Buyers purchasing high-value properties</li>
                    <li>Those with excellent credit and significant assets</li>
                    <li>Borrowers with high income and low debt</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
