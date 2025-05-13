"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { APPLICATION_URL } from "@/lib/constants"

export function ApplyNowPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Check if the popup has been dismissed in this session
    const hasBeenDismissed = sessionStorage.getItem("popupDismissed") === "true"

    if (!hasBeenDismissed) {
      // Show popup after 30 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 30000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    setDismissed(true)
    // Store in session storage so it doesn't show again in this session
    sessionStorage.setItem("popupDismissed", "true")
  }

  if (dismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={(e) => {
            // Close when clicking outside the card
            if (e.target === e.currentTarget) handleDismiss()
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="velocity-card w-full max-w-md relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary rounded-t-lg"></div>

              <button
                onClick={handleDismiss}
                className="absolute top-2 right-2 p-1 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Close popup"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="velocity-card-header pb-2">
                <h2 className="velocity-card-title text-primary">Ready to get started?</h2>
              </div>

              <div className="velocity-card-content">
                <p className="mb-6">
                  Take the first step toward your new home today. Apply now and get pre-approved with one of our
                  mortgage experts.
                </p>

                <div className="flex justify-center">
                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <a href={APPLICATION_URL} target="_blank" rel="noopener noreferrer">
                      Apply Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
