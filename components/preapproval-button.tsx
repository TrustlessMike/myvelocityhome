"use client"

import type React from "react"
import type { VariantProps } from "class-variance-authority"
import { Button, buttonVariants } from "@/components/ui/button"
import { APPLICATION_URL } from "@/lib/site"

interface ApplyLinkProps extends VariantProps<typeof buttonVariants> {
  className?: string
  children?: React.ReactNode
  href?: string
}

export function ApplyLink({
  className,
  variant = "default",
  size,
  href = APPLICATION_URL,
  children = "Get Pre-Approved",
}: ApplyLinkProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  )
}

/** @deprecated Use ApplyLink. Kept so older imports keep applying instead of throwing. */
export const PreapprovalButton = ApplyLink
