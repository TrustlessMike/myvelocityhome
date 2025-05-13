"use client"

import type React from "react"
import { type VariantProps } from "class-variance-authority"

import { useState } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import { ConfettiEffect } from "@/components/confetti-effect"
import { APPLICATION_URL } from "@/lib/constants"

interface PreapprovalButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string
  children?: React.ReactNode
}

export function PreapprovalButton({
  className,
  variant = "default",
  size,
  children = "Get Preapproved",
  ...props
}: PreapprovalButtonProps) {
  const [triggerConfetti, setTriggerConfetti] = useState(false)

  const handleClick = () => {
    setTriggerConfetti(true)

    // After a short delay, navigate to the application URL
    setTimeout(() => {
      window.open(APPLICATION_URL, "_blank", "noopener,noreferrer")
    }, 500)
  }

  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={handleClick} {...props}>
        {children}
      </Button>
      <ConfettiEffect trigger={triggerConfetti} onComplete={() => setTriggerConfetti(false)} />
    </>
  )
}
