"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TabIndicatorProps {
  active: boolean
  className?: string
}

export function TabIndicator({ active, className }: TabIndicatorProps) {
  return (
    <motion.div
      className={cn(
        "absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full",
        active ? "opacity-100" : "opacity-0",
        className,
      )}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: active ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  )
}
