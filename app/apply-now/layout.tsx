import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apply or Schedule",
  description: "Schedule a consultation or start a Velocity Home Loans application with a named Brighton loan officer.",
}

export default function ApplyNowLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="min-h-screen bg-slate-50">{children}</div>
}
