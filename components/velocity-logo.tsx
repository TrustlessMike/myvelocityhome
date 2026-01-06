"use client"

import Image from "next/image"
import { useState } from "react"

interface VelocityLogoProps {
  width?: number
  height?: number
  className?: string
  variant?: "default" | "white" | "footer"
}

export function VelocityLogo({ width = 180, height = 60, className = "", variant = "default" }: VelocityLogoProps) {
  const [imgLoaded, setImgLoaded] = useState(false)

  // Use the provided logo
  const logoUrl = "/velocity-logo.png"

  return (
    <div
      className={`relative ${variant === "footer" ? "bg-white p-2 rounded" : ""} ${className}`}
      style={{
        width: width,
        height: height,
        opacity: imgLoaded ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <Image
        src={logoUrl || "/placeholder.svg"}
        alt="Velocity Home Loans"
        fill
        sizes={`${Math.max(width, 180)}px`}
        priority
        onLoad={() => setImgLoaded(true)}
        style={{
          objectFit: "contain",
          objectPosition: "left center",
        }}
      />
    </div>
  )
}
