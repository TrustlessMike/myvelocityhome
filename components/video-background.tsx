"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface VideoBackgroundProps {
  src: string
  poster?: string
  className?: string
  overlayClassName?: string
  priority?: boolean
  height?: string
  children?: React.ReactNode
}

export function VideoBackground({
  src,
  poster,
  className,
  overlayClassName,
  priority = false,
  height = "auto",
  children,
}: VideoBackgroundProps) {
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isNarrow = window.matchMedia("(max-width: 768px)").matches
    if (!prefersReducedMotion && !isNarrow) {
      setShouldPlayVideo(true)
    }
  }, [])

  return (
    <div className={cn("relative overflow-hidden w-full", className)} style={{ height }}>
      {poster ? (
        <Image
          src={poster}
          alt=""
          fill
          priority={priority}
          fetchPriority={priority ? "high" : "auto"}
          sizes="100vw"
          quality={75}
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-navy" />
      )}

      {shouldPlayVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      <div className={cn("absolute inset-0 bg-black/40", overlayClassName)} aria-hidden="true" />
      {children}
    </div>
  )
}
