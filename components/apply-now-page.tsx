"use client"

import { useSearchParams } from "next/navigation"
import { useMemo, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EqualHousingBadge } from "@/components/equal-housing-badge"
import { ApplyLink } from "@/components/preapproval-button"
import { APPLICATION_URL, CompanyInfo, teamMembers } from "@/lib/site"

export function ApplyNowPage() {
  const searchParams = useSearchParams()
  const officerId = searchParams.get("officer")
  const officer = useMemo(() => teamMembers.find((member) => member.id === officerId), [officerId])
  const officerName = officer?.name || "a loan officer"
  const applyUrl = officer?.applicationUrl || APPLICATION_URL
  const [calendarLoaded, setCalendarLoaded] = useState(false)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 font-heading">Apply Now</h1>
          <p className="text-xl text-slate-600">
            {officer
              ? `Start ${officer.name}'s 1003 application, or schedule a consult first.`
              : "Start the official 1003 application, or schedule a consult first."}
          </p>
        </div>

        <Tabs defaultValue="apply" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="apply">Apply Online</TabsTrigger>
            <TabsTrigger value="schedule">Schedule a Consultation</TabsTrigger>
          </TabsList>

          <TabsContent value="apply">
            <Card className="overflow-hidden border border-navy/10">
              <CardHeader>
                <CardTitle>Official application</CardTitle>
                <CardDescription>
                  Applications run in Velocity's 1003 software
                  {officer ? ` with ${officer.name} (NMLS #${officer.nmls})` : ""}. That is the file underwriters see.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600">
                  Do not use a website contact form to apply. The proprietary application collects the disclosures,
                  employment, and asset information required for a pre-approval.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-2">
                    <EqualHousingBadge size="sm" />
                    <span className="text-sm text-slate-500">Equal Housing Opportunity</span>
                  </div>
                  <ApplyLink href={applyUrl} size="lg">
                    {officer ? `Apply with ${officer.name.split(" ")[0]}` : "Start the 1003 application"}
                  </ApplyLink>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card className="overflow-hidden border border-navy/10">
              <CardHeader>
                <CardTitle>Schedule a Consultation</CardTitle>
                <CardDescription>
                  Choose a time to speak with {officerName} about purchase, refinance, or pre-approval.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full relative">
                  {!calendarLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                      <div
                        className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
                        aria-label="Loading calendar"
                      />
                    </div>
                  )}
                  <iframe
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Vd9qXuBBQQJSk-KH5InMhYxm_Iy6s9UwNgLITmTSJQWO2Zj8-LBGj1GQN4Z7gKMXV3oBwXnSS?gv=true"
                    style={{ border: 0 }}
                    width="100%"
                    height="100%"
                    title="Schedule a Velocity Home Loans consultation"
                    className="w-full h-full"
                    onLoad={() => setCalendarLoaded(true)}
                  />
                </div>
                <p className="mt-6 text-center text-slate-600">
                  No time that works? Call{" "}
                  <a
                    href={officer ? `tel:${officer.phone.replace(/[^\d]/g, "")}` : CompanyInfo.phoneHref}
                    className="text-primary underline"
                  >
                    {officer?.phone || CompanyInfo.phone}
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
