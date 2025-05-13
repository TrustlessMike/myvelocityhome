"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Resources() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Mortgage Resources</CardTitle>
          <CardDescription>Helpful tools and information to guide your mortgage journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <h3 className="text-lg font-semibold">Educational Resources</h3>
              <div className="grid gap-3">
                {[
                  {
                    title: "Understanding Mortgage Terms",
                    description: "A comprehensive glossary of mortgage terminology explained in plain language.",
                    link: "#",
                  },
                  {
                    title: "First-Time Homebuyer's Guide",
                    description:
                      "Everything you need to know about buying your first home, from saving for a down payment to closing.",
                    link: "#",
                  },
                  {
                    title: "Improving Your Credit Score",
                    description:
                      "Tips and strategies to boost your credit score and qualify for better mortgage rates.",
                    link: "#",
                  },
                ].map((resource, index) => (
                  <Link
                    key={index}
                    href={resource.link}
                    className="flex items-start p-4 rounded-lg border hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium">{resource.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{resource.description}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              <h3 className="text-lg font-semibold">Helpful Tools</h3>
              <div className="grid gap-3">
                {[
                  {
                    title: "Affordability Calculator",
                    description:
                      "Determine how much house you can afford based on your income, debts, and down payment.",
                    link: "#",
                  },
                  {
                    title: "Refinance Calculator",
                    description: "See if refinancing your current mortgage could save you money.",
                    link: "#",
                  },
                  {
                    title: "Rent vs. Buy Calculator",
                    description: "Compare the costs of renting versus buying a home to make an informed decision.",
                    link: "#",
                  },
                ].map((tool, index) => (
                  <Link
                    key={index}
                    href={tool.link}
                    className="flex items-start p-4 rounded-lg border hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium">{tool.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{tool.description}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              <h3 className="text-lg font-semibold">Government Resources</h3>
              <div className="grid gap-3">
                {[
                  {
                    title: "Consumer Financial Protection Bureau",
                    description: "Official government resources on mortgages, loan options, and borrower rights.",
                    link: "https://www.consumerfinance.gov/owning-a-home/",
                  },
                  {
                    title: "HUD Housing Counselors",
                    description:
                      "Find a HUD-approved housing counselor to get advice on buying a home, renting, defaults, foreclosures, and credit issues.",
                    link: "https://www.hud.gov/findacounselor",
                  },
                  {
                    title: "FHA Loan Programs",
                    description:
                      "Information on FHA loan programs and requirements from the Federal Housing Administration.",
                    link: "https://www.hud.gov/buying/loans",
                  },
                ].map((resource, index) => (
                  <Link
                    key={index}
                    href={resource.link}
                    className="flex items-start p-4 rounded-lg border hover:bg-slate-50 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium">{resource.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{resource.description}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
