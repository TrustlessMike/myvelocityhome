"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, RefreshCw, AlertCircle } from "lucide-react"

interface MortgageRate {
  term: string
  rate: string
  apr: string
  updated: string
}

export function LoanSifterRates() {
  const [rates, setRates] = useState<MortgageRate[]>([
    { term: "30-Year Fixed", rate: "6.25%", apr: "6.38%", updated: "Today" },
    { term: "15-Year Fixed", rate: "5.50%", apr: "5.65%", updated: "Today" },
    { term: "5/1 ARM", rate: "5.75%", apr: "5.90%", updated: "Today" },
  ])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<string>("Today at 9:00 AM ET")

  // This would be replaced with an actual API call
  const fetchRates = async () => {
    setLoading(true)
    setError(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // This would be the actual data
      setRates([
        { term: "30-Year Fixed", rate: "6.25%", apr: "6.38%", updated: "Today" },
        { term: "15-Year Fixed", rate: "5.50%", apr: "5.65%", updated: "Today" },
        { term: "5/1 ARM", rate: "5.75%", apr: "5.90%", updated: "Today" },
      ])

      const now = new Date()
      setLastUpdated(
        `Today at ${now.getHours() % 12 || 12}:${now.getMinutes().toString().padStart(2, "0")} ${now.getHours() >= 12 ? "PM" : "AM"} ET`,
      )
    } catch (err) {
      setError("Failed to fetch current rates. Please try again later.")
      console.error("Error fetching rates:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRates()
  }, [])

  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-2xl">Today's Mortgage Rates</CardTitle>
          <CardDescription>Powered by Velocity Home Loans</CardDescription>
        </div>
        <Button variant="outline" size="sm" onClick={fetchRates} disabled={loading} className="flex items-center gap-2">
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground mb-4">Last updated: {lastUpdated}</div>

        <AnimatePresence mode="wait">
          {error ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-red-500 p-4 bg-red-50 rounded-lg"
            >
              <AlertCircle className="h-5 w-5" />
              <p>{error}</p>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-4">
              {rates.map((rate, index) => (
                <motion.div
                  key={rate.term}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg border"
                >
                  <div>
                    <h3 className="font-medium">{rate.term}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>APR: {rate.apr}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary">{rate.rate}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 flex justify-end">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" className="flex items-center gap-2">
              View All Rates
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  )
}
