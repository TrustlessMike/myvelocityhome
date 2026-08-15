"use client"

import type React from "react"

import { useSearchParams } from "next/navigation"
import { useMemo, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { EqualHousingBadge } from "@/components/equal-housing-badge"
import { submitToFormspree } from "@/lib/formspree"
import { CompanyInfo, teamMembers } from "@/lib/site"
import { Loader2 } from "lucide-react"

const FORMSPREE_FORM_ID = "xvoelkzp"

export function ApplyNowPage() {
  const searchParams = useSearchParams()
  const officerId = searchParams.get("officer")
  const officer = useMemo(() => teamMembers.find((member) => member.id === officerId), [officerId])
  const officerName = officer?.name || "a loan officer"
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [calendarLoaded, setCalendarLoaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    loanType: "",
    message: "",
    officerId: officerId || "",
  })
  const [formError, setFormError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    const key =
      id === "first-name" ? "firstName" : id === "last-name" ? "lastName" : id
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      loanType: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)

    try {
      const result = await submitToFormspree(FORMSPREE_FORM_ID, {
        ...formData,
        officerId: officer?.id || formData.officerId,
        officerName: officer?.name || "Not specified",
      })

      if (result.success) {
        setFormSubmitted(true)
      } else {
        setFormError("There was an error submitting your application. Please try again.")
      }
    } catch (error) {
      setFormError("There was an error submitting your application. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 font-heading">Apply Now</h1>
          <p className="text-xl text-slate-600">
            {officer
              ? `Schedule a consultation with ${officer.name} or start the 1003 application.`
              : "Schedule a consultation with a named loan officer or start the 1003 application."}
          </p>
        </div>

        <Tabs defaultValue="schedule" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="schedule">Schedule a Consultation</TabsTrigger>
            <TabsTrigger value="apply">Apply Online</TabsTrigger>
          </TabsList>

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
                  <a href={officer ? `tel:${officer.phone.replace(/[^\d]/g, "")}` : CompanyInfo.phoneHref} className="text-primary underline">
                    {officer?.phone || CompanyInfo.phone}
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="apply">
            <Card className="overflow-hidden border border-navy/10">
              <CardHeader>
                <CardTitle>Apply Online</CardTitle>
                <CardDescription>
                  This form notifies the office. For the full 1003 application, use Get Pre-Approved in the header.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" required value={formData.firstName} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" required value={formData.lastName} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required value={formData.email} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" required value={formData.phone} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="loan-type">Loan Type</Label>
                        <Select onValueChange={handleSelectChange} value={formData.loanType || undefined}>
                          <SelectTrigger id="loan-type">
                            <SelectValue placeholder="Select loan type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="conventional">Conventional Loan</SelectItem>
                            <SelectItem value="fha">FHA Loan</SelectItem>
                            <SelectItem value="va">VA Loan</SelectItem>
                            <SelectItem value="jumbo">Jumbo Loan</SelectItem>
                            <SelectItem value="refinance">Refinance</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="message">Additional Information</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your situation and what you're looking for..."
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {formError && (
                      <div className="bg-red-50 text-red-600 p-3 rounded-md" role="alert">
                        {formError}
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <EqualHousingBadge size="sm" />
                        <span className="text-sm text-slate-500">Equal Housing Opportunity</span>
                      </div>
                      <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Application"
                        )}
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <h2 className="text-2xl font-bold text-primary mb-4">Application Submitted!</h2>
                    <p className="text-lg mb-6">
                      Thank you. A loan officer will contact you within one business day.
                    </p>
                    <Button
                      onClick={() => setFormSubmitted(false)}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/5"
                    >
                      Submit Another Application
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
