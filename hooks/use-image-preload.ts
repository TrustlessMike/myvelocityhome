"use client"

import { useEffect, useState } from "react"

export function useImagePreload(src: string): boolean {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setIsLoaded(true)
    }
    return () => {
      img.onload = null
    }
  }, [src])

  return isLoaded
}
