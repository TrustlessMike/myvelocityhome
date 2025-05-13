import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Team Member Not Found</h2>
      <p className="text-xl text-slate-600 mb-8">Sorry, we couldn't find the team member you're looking for.</p>
      <Button asChild>
        <Link href="/team">View All Team Members</Link>
      </Button>
    </div>
  )
}
