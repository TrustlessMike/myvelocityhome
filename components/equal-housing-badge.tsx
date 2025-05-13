"use client"
import Image from "next/image"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface EqualHousingBadgeProps {
  size?: "sm" | "md" | "lg"
  className?: string
  variant?: "dark" | "light"
}

export function EqualHousingBadge({ size = "md", className = "", variant = "dark" }: EqualHousingBadgeProps) {
  const dimensions = {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 48, height: 48 },
  }

  const { width, height } = dimensions[size]

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={`relative ${className}`} style={{ width, height }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Au4jfEYrZ0CNBuJ1EUz9xXX8uxtZ0L.png"
              alt="Equal Housing Opportunity"
              width={width}
              height={height}
              className={variant === "light" ? "brightness-0 invert" : ""}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">Equal Housing Opportunity</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
