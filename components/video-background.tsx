"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
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
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const markLoaded = () => {
      setIsLoaded(true)
    }

    const handleError = (event: Event) => {
      console.error("Video loading error:", event)
    }

    const playVideo = async () => {
      try {
        await video.play()
      } catch (err) {
        console.warn("Video autoplay prevented:", err)
      }
    }

    setIsLoaded(video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA)
    video.preload = priority ? "auto" : "metadata"
    video.addEventListener("loadeddata", markLoaded)
    video.addEventListener("canplay", playVideo)
    video.addEventListener("error", handleError as EventListener)
    video.load()
    playVideo()

    return () => {
      video.removeEventListener("loadeddata", markLoaded)
      video.removeEventListener("canplay", playVideo)
      video.removeEventListener("error", handleError as EventListener)
    }
  }, [priority, src])

  return (
    <div className={cn("relative overflow-hidden w-full", className)} style={{ height }}>
      {/* Fallback background color while video loads */}
      <div
        className="absolute inset-0 bg-gray-700 bg-cover bg-center"
        style={poster ? { backgroundImage: `url(${poster})` } : undefined}
      ></div>

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        aria-hidden="true"
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
