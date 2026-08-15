"use client"

import type { ReactNode } from "react"
import dynamic from "next/dynamic"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BottomBanner } from "@/components/bottom-banner"
import { APPLICATION_URL } from "@/lib/site"

const ApplyNowPopup = dynamic(
  () => import("@/components/apply-now-popup").then((module) => module.ApplyNowPopup),
  { ssr: false },
)

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1 pb-20">
        {children}
      </main>
      <SiteFooter />
      <BottomBanner applicationUrl={APPLICATION_URL} />
      <ApplyNowPopup />
    </div>
  )
}

/** @deprecated Site chrome now lives in the root layout. */
export function MainLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
