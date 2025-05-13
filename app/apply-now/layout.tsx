import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apply Now | Velocity Home Loans",
  description: "Apply for a mortgage or schedule a consultation with one of our loan officers.",
}

export default function ApplyNowLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="min-h-screen bg-slate-50">{children}</div>
}
