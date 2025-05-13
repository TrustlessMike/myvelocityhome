"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface TabItem {
  id: string
  label: string
  icon: React.ReactNode
  description?: string
}

interface EnhancedTabsProps {
  tabs: TabItem[]
  defaultValue: string
  onChange?: (value: string) => void
  className?: string
}

export function EnhancedTabs({ tabs, defaultValue, onChange, className }: EnhancedTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [indicatorWidth, setIndicatorWidth] = useState(0)
  const [indicatorLeft, setIndicatorLeft] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Update the indicator position when the active tab changes
  useEffect(() => {
    const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab)
    if (activeTabIndex !== -1 && tabRefs.current[activeTabIndex]) {
      const tabElement = tabRefs.current[activeTabIndex]
      if (tabElement) {
        setIndicatorWidth(tabElement.offsetWidth)
        setIndicatorLeft(tabElement.offsetLeft)
      }
    }
  }, [activeTab, tabs])

  // Handle window resize to update indicator position
  useEffect(() => {
    const handleResize = () => {
      const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab)
      if (activeTabIndex !== -1 && tabRefs.current[activeTabIndex]) {
        const tabElement = tabRefs.current[activeTabIndex]
        if (tabElement) {
          setIndicatorWidth(tabElement.offsetWidth)
          setIndicatorLeft(tabElement.offsetLeft)
        }
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [activeTab, tabs])

  const handleTabClick = (value: string) => {
    setActiveTab(value)
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative flex items-center rounded-lg bg-slate-100 p-1 overflow-hidden">
        {/* Animated background for active tab */}
        <motion.div
          className="absolute h-[calc(100%-8px)] bg-white rounded-md shadow-sm z-0"
          initial={false}
          animate={{
            width: indicatorWidth,
            x: indicatorLeft,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />

        {/* Tab buttons */}
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={() => handleTabClick(tab.id)}
            onMouseEnter={() => setHoveredTab(tab.id)}
            onMouseLeave={() => setHoveredTab(null)}
            className={cn(
              "relative z-10 flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 w-full",
              activeTab === tab.id ? "text-primary" : "text-slate-600 hover:text-primary",
            )}
          >
            <div className="flex items-center space-x-2">
              {tab.icon}
              <span>{tab.label}</span>
            </div>

            {/* Show arrow on hover if not active */}
            <AnimatePresence>
              {hoveredTab === tab.id && activeTab !== tab.id && (
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -5 }}
                  className="absolute right-2"
                >
                  <ChevronRight className="h-4 w-4 text-primary" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>

      {/* Tab descriptions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="mt-2 text-sm text-slate-500 text-center"
        >
          {tabs.find((tab) => tab.id === activeTab)?.description}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
