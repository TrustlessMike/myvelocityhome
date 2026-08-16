"use client"

import Image from "next/image"
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
              src="/velocity-logo.png"
              alt="Velocity Home Loans"
              width={97}
              height={40}
            />
            <div className="ml-4 flex items-center">
              <EqualHousingBadge size="sm" />
              <span className="ml-2 text-sm text-slate-600">Equal Housing Opportunity</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href={applicationUrl} target="_blank" rel="noopener noreferrer">
              <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium transition-transform hover:scale-105 active:scale-95">
                Apply Now
              </button>
            </a>
            <a href={applicationUrl} target="_blank" rel="noopener noreferrer">
              <button className="border border-primary text-primary px-4 py-2 rounded-md text-sm font-medium transition-transform hover:scale-105 active:scale-95">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
