"use client"

import type React from "react"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { CompanyInfo } from "@/components/company-info"
import { EqualHousingBadge } from "@/components/equal-housing-badge"
import { submitToFormspree } from "@/lib/formspree"
import { Loader2 } from "lucide-react"

// Replace with your actual Formspree form ID
const FORMSPREE_FORM_ID = "xvoelkzp"

export default function ApplyNowPage() {
  const searchParams = useSearchParams()
  const officerId = searchParams.get("officer")
  const [officerName, setOfficerName] = useState("a Loan Officer")
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
    officerId: "",
  })
  const [formError, setFormError] = useState<string | null>(null)

  useEffect(() => {
    // Set the officer name based on the ID
    if (officerId === "sam") {
      setOfficerName("Sam Amine")
      setFormData((prev) => ({ ...prev, officerId: "sam" }))
    }
  }, [officerId])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id.replace("first-name", "firstName").replace("last-name", "lastName").replace("message", "message")]: value,
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
        officerName: officerName !== "a Loan Officer" ? officerName : "Not specified",
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

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 font-heading">Apply Now</h1>
          <p className="text-xl text-slate-600">
            {officerId
              ? `Schedule a consultation with ${officerName} or submit your application to get started.`
              : "Schedule a consultation with one of our loan officers or submit your application to get started."}
          </p>
        </div>

        <Tabs defaultValue="schedule" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="schedule">Schedule a Consultation</TabsTrigger>
            <TabsTrigger value="apply">Apply Online</TabsTrigger>
          </TabsList>

          <TabsContent value="schedule">
            <Card className="overflow-hidden border-none shadow-lg">
              <CardHeader>
                <CardTitle>Schedule a Consultation</CardTitle>
                <CardDescription>
                  Choose a convenient time to speak with {officerName} about your mortgage options.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full relative">
                  {!calendarLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                  )}
                  <iframe
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Vd9qXuBBQQJSk-KH5InMhYxm_Iy6s9UwNgLITmTSJQWO2Zj8-LBGj1GQN4Z7gKMXV3oBwXnSS?gv=true"
                    style={{ border: 0 }}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    title="Schedule Appointment"
                    className="w-full h-full"
                    onLoad={() => setCalendarLoaded(true)}
                  ></iframe>
                </div>
                <div className="mt-6 text-center">
                  <p className="mb-4 text-slate-600">
                    Can't find a time that works for you? Contact us directly at {CompanyInfo.phone}.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="apply">
            <Card className="overflow-hidden border-none shadow-lg">
              <CardHeader>
                <CardTitle>Apply Online</CardTitle>
                <CardDescription>Fill out the form below to start your application process.</CardDescription>
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
                        <Select onValueChange={handleSelectChange}>
                          <SelectTrigger>
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

                    {formError && <div className="bg-red-50 text-red-500 p-3 rounded-md">{formError}</div>}

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <EqualHousingBadge size="sm" />
                        <span className="text-sm text-slate-500">Equal Housing Opportunity</span>
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                      </motion.div>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <h3 className="text-2xl font-bold text-primary mb-4">Application Submitted!</h3>
                    <p className="text-lg mb-6">
                      Thank you for your application. One of our loan officers will contact you within 24 hours.
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button
                        onClick={() => setFormSubmitted(false)}
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/5"
                      >
                        Submit Another Application
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  )
}
