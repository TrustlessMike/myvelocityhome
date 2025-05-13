"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { EqualHousingBadge } from "@/components/equal-housing-badge"

interface BottomBannerProps {
  applicationUrl: string
}

export function BottomBanner({ applicationUrl }: BottomBannerProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Velocity%20Home%20Loans%20Google%20Logo-vEDhFyrYPWMaPW0Z0IputoBM61v3d5.png"
              alt="Velocity Home Loans"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <div className="ml-4 flex items-center">
              <EqualHousingBadge size="sm" />
              <span className="ml-2 text-sm text-slate-600">Equal Housing Opportunity</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href={applicationUrl} target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium">Apply Now</button>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href={applicationUrl} target="_blank" rel="noopener noreferrer">
                <button className="border border-primary text-primary px-4 py-2 rounded-md text-sm font-medium">
                  Contact Us
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
