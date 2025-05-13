"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function HomeGuide() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Home Buying Guide</CardTitle>
          <CardDescription>A step-by-step guide to help you through the home buying process</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="step-1">
              <AccordionTrigger>Step 1: Determine Your Budget</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4">
                  <p>
                    Before you start looking at homes, it's important to understand how much you can afford. Consider:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your income and existing debts</li>
                    <li>Your credit score (which affects your interest rate)</li>
                    <li>Down payment amount you've saved</li>
                    <li>Additional costs like property taxes, insurance, and maintenance</li>
                  </ul>
                  <p>
                    Financial experts often recommend that your monthly housing costs (including mortgage, taxes, and
                    insurance) should not exceed 28% of your gross monthly income.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-2">
              <AccordionTrigger>Step 2: Get Pre-Approved for a Mortgage</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4">
                  <p>
                    A mortgage pre-approval gives you a clear idea of how much you can borrow and shows sellers you're a
                    serious buyer.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Shop around with different lenders to compare rates and terms</li>
                    <li>Gather necessary documents (pay stubs, tax returns, bank statements)</li>
                    <li>Submit your application and wait for pre-approval</li>
                  </ul>
                  <p>Pre-approval typically lasts 60-90 days, so time your application with your home search.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-3">
              <AccordionTrigger>Step 3: Find a Real Estate Agent</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4">
                  <p>A good real estate agent can be invaluable in navigating the home buying process.</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ask friends and family for recommendations</li>
                    <li>Interview multiple agents to find the right fit</li>
                    <li>Look for someone with experience in your desired neighborhoods</li>
                    <li>Ensure they understand your needs and budget</li>
                  </ul>
                  <p>
                    As a buyer, the seller typically pays your agent's commission, so there's usually no direct cost to
                    you.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-4">
              <AccordionTrigger>Step 4: Start House Hunting</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4">
                  <p>Now comes the exciting part - looking at potential homes!</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Create a list of must-haves and nice-to-haves</li>
                    <li>Research neighborhoods for amenities, schools, and commute times</li>
                    <li>Attend open houses and schedule private viewings</li>
                    <li>Take notes and photos to help remember each property</li>
                  </ul>
                  <p>
                    Don't rush this process. Finding the right home takes time, and it's one of the biggest purchases
                    you'll make.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-5">
              <AccordionTrigger>Step 5: Make an Offer and Negotiate</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4">
                  <p>When you find the right home, it's time to make an offer.</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Work with your agent to determine a competitive offer price</li>
                    <li>Include contingencies to protect yourself (inspection, financing, appraisal)</li>
                    <li>Be prepared for counteroffers and negotiations</li>
                    <li>Once accepted, submit your earnest money deposit</li>
                  </ul>
                  <p>Your agent will guide you through this process and help you navigate any negotiations.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-6">
              <AccordionTrigger>Step 6: Close on Your New Home</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4">
                  <p>The closing process typically takes 30-45 days from accepted offer to final signing.</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Complete a home inspection and address any issues</li>
                    <li>Finalize your mortgage application</li>
                    <li>Review closing disclosure and prepare closing costs</li>
                    <li>Conduct a final walkthrough before closing</li>
                    <li>Sign paperwork and get your keys!</li>
                  </ul>
                  <p>Congratulations! You're now a homeowner.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
