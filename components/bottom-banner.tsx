"use client"

import Image from "next/image"
import { EqualHousingBadge } from "@/components/equal-housing-badge"

interface BottomBannerProps {
  applicationUrl: string
}

export function BottomBanner({ applicationUrl }: BottomBannerProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-navy/10 z-40">
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
            <a
              href={applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="border border-primary text-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/5"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
