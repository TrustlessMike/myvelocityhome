"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface VideoBackgroundProps {
  src: string
  className?: string
  overlayClassName?: string
  priority?: boolean
  height?: string
  children?: React.ReactNode
}

export function VideoBackground({
  src,
  className,
  overlayClassName,
  priority = false,
  height = "auto",
  children,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Handle video loaded event
    const handleLoadedData = () => {
      setIsLoaded(true)
    }

    // Handle video error event
    const handleError = (e: ErrorEvent) => {
      console.error("Video loading error:", e)
    }

    // Attempt to preload the video
    if (priority) {
      video.preload = "auto"

      // Force load attempt
      const loadVideo = async () => {
        try {
          await video.play()
          video.pause()
          video.currentTime = 0
          setIsLoaded(true)
        } catch (err) {
          console.warn("Video autoplay prevented:", err)
          // Still mark as loaded since we'll show it anyway
          setIsLoaded(true)
        }
      }

      loadVideo()
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("error", handleError as EventListener)

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("error", handleError as EventListener)
    }
  }, [priority])

  // Start playing as soon as possible
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const playVideo = async () => {
      try {
        await video.play()
      } catch (err) {
        console.warn("Video autoplay prevented:", err)
      }
    }

    if (document.readyState === "complete") {
      playVideo()
    } else {
      window.addEventListener("load", playVideo)
      return () => window.removeEventListener("load", playVideo)
    }
  }, [])

  return (
    <div className={cn("relative overflow-hidden w-full", className)} style={{ height }}>
      {/* Fallback background color while video loads */}
      <div className="absolute inset-0 bg-gray-700"></div>

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0",
        )}
        preload={priority ? "auto" : "metadata"}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={cn("absolute inset-0 bg-black/40", overlayClassName)} aria-hidden="true" />
      {children}
    </div>
  )
}
