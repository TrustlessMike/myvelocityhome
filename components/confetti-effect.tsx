"use client"

import { useEffect, useState } from "react"
import confetti from "canvas-confetti"

interface ConfettiEffectProps {
  trigger: boolean
  onComplete?: () => void
}

export function ConfettiEffect({ trigger, onComplete }: ConfettiEffectProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (trigger && !isPlaying) {
      setIsPlaying(true)

      // Create a more elaborate confetti effect
      const duration = 3000
      const end = Date.now() + duration

      // First burst with blue and white colors (Velocity brand colors)
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0052cc", "#ffffff"],
        disableForReducedMotion: true,
      })

      // Create a confetti cannon effect
      const interval = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(interval)
          setIsPlaying(false)
          onComplete?.()
          return
        }

        confetti({
          particleCount: 30,
          angle: Math.random() * 60 + 60,
          spread: 70,
          origin: { x: 0 },
          colors: ["#0052cc", "#ffffff", "#003399"],
          disableForReducedMotion: true,
        })

        confetti({
          particleCount: 30,
          angle: Math.random() * 60 + 240,
          spread: 70,
          origin: { x: 1 },
          colors: ["#0052cc", "#ffffff", "#003399"],
          disableForReducedMotion: true,
        })
      }, 250)

      return () => clearInterval(interval)
    }
  }, [trigger, isPlaying, onComplete])

  return null
}
