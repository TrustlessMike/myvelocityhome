import { MeetTheTeam } from "@/components/meet-the-team"

export default function TeamPage() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our Team</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet the dedicated professionals behind Velocity Home Loans who are committed to helping you achieve your
            homeownership dreams.
          </p>
        </div>
      </div>

      <MeetTheTeam />
    </div>
  )
}
