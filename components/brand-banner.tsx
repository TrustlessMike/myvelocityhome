"use client"

import { Zap } from "lucide-react"

export function BrandBanner() {
  return (
    <div className="bg-primary py-2 text-white text-center">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <Zap className="h-4 w-4 mr-2" />
        <span className="text-sm font-medium">Experience the Velocity difference in home financing</span>
      </div>
    </div>
  )
}
