import { Suspense } from "react"
import { MainLayout } from "@/components/main-layout"

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <MainLayout />
    </Suspense>
  )
}
