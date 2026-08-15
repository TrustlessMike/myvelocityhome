"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, CreditCard, ChevronDown, ChevronUp, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { APPLICATION_URL } from "@/lib/site"

interface TeamMemberProps {
  name: string
  title: string
  email: string
  phone: string
  nmls: string
  bio: string
  imageSrc: string
  id: string
  reviewsUrl?: string
  applicationUrl?: string
  headingAs?: "h1" | "h2" | "h3"
  priority?: boolean
}

export function TeamMember({ name, title, email, phone, nmls, bio, imageSrc, id, reviewsUrl, applicationUrl, headingAs = "h2", priority = false }: TeamMemberProps) {
  const [bioExpanded, setBioExpanded] = useState(false)
  const isSam = id === "sam"
  const applyUrl = applicationUrl || APPLICATION_URL
  const Heading = headingAs

  return (
    <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className="velocity-card">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <div className="relative w-full pt-[100%] md:pt-[150%]">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={`Portrait of ${name}, ${title} at Velocity Home Loans`}
                fill
                className={`object-cover ${isSam ? "object-top" : "object-center"}`}
                sizes="(max-width: 768px) 100vw, 340px"
                quality={92}
                priority={priority}
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="velocity-card-content">
              <Heading className="text-2xl font-bold font-heading text-primary mb-1">{name}</Heading>
              <p className="text-slate-600 mb-4">{title}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-primary mr-2 flex-shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${email}`}
                    className="text-sm hover:text-primary transition-colors overflow-hidden text-ellipsis"
                  >
                    <span className="sr-only">Email:</span> {email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-primary mr-2 flex-shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${phone.replace(/[^\d]/g, "")}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    <span className="sr-only">Phone:</span> {phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <CreditCard className="h-4 w-4 text-primary mr-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">NMLS: {nmls}</span>
                </div>
                {reviewsUrl && (
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2 flex-shrink-0" aria-hidden="true" />
                    <a
                      href={reviewsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary transition-colors"
                    >
                      <span className="sr-only">Reviews:</span> View Client Reviews
                    </a>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <AnimatePresence initial={false}>
                  <motion.div
                    initial={{ height: "auto" }}
                    animate={{ height: bioExpanded ? "auto" : "5rem" }}
                    exit={{ height: "5rem" }}
                    className={`relative overflow-hidden ${!bioExpanded ? "mask-bottom" : ""}`}
                  >
                    <p className="text-slate-700 whitespace-pre-line">{bio}</p>
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={() => setBioExpanded(!bioExpanded)}
                  className="flex items-center text-primary mt-2 text-sm font-medium hover:underline"
                  aria-expanded={bioExpanded}
                  aria-controls={`bio-${id}`}
                >
                  {bioExpanded ? (
                    <>
                      <ChevronUp className="h-4 w-4 mr-1" aria-hidden="true" />
                      Show less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4 mr-1" aria-hidden="true" />
                      Read more
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.div className="w-full">
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                    <Link href={`/contact?officer=${id}`}>Contact {name.split(" ")[0]}</Link>
                  </Button>
                </motion.div>
                <motion.div className="w-full">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <a href={applyUrl} target="_blank" rel="noopener noreferrer">
                      Apply Now
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
