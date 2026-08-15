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
      <SiteHeader />
      <main className="flex-1 pb-20">{children}</main>
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
