"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { EqualHousingBadge } from "@/components/equal-housing-badge"
import { submitToFormspree } from "@/lib/formspree"
import { Loader2 } from "lucide-react"

// Replace with your actual Formspree form ID
const FORMSPREE_CONTACT_ID = "xvoelkzp"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)

    try {
      const result = await submitToFormspree(FORMSPREE_CONTACT_ID, formData)

      if (result.success) {
        setFormSubmitted(true)
      } else {
        setFormError("There was an error submitting your message. Please try again.")
      }
    } catch (error) {
      setFormError("There was an error submitting your message. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="velocity-card">
      <div className="velocity-card-header">
        <h2 className="velocity-card-title">Contact Us</h2>
        <p className="velocity-card-description">Have questions? We're here to help.</p>
      </div>
      <div className="velocity-card-content">
        {!formSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required value={formData.name} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required value={formData.email} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" value={formData.phone} onChange={handleInputChange} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={4}
                  required
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
                      Sending...
                    </>
                  ) : (
                    "Send Message"
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
            <h3 className="text-2xl font-bold text-primary mb-4">Message Sent!</h3>
            <p className="text-lg mb-6">Thank you for reaching out. We'll get back to you as soon as possible.</p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                onClick={() => setFormSubmitted(false)}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Send Another Message
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
