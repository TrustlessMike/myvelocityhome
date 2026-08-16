import { MeetTheTeam } from "@/components/meet-the-team"
import { pageMetadata } from "@/lib/seo"
import { JsonLd, breadcrumbSchema } from "@/components/json-ld"

export const metadata = pageMetadata({
  title: "Our Team",
  description:
    "Meet Sam Amine, Christa Spencer, and Robert Jastrzebski — the Velocity Home Loans officers who will work your Michigan or Florida file.",
  path: "/team",
})

export default function TeamPage() {
  return (
    <div className="py-12">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Our Team", path: "/team" }])} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our team</h1>
          <p className="text-xl text-slate-600">
            You get a named officer with an NMLS number, a direct phone line, and a 1003 application that actually
            reaches that person.
          </p>
        </div>
      </div>
      <MeetTheTeam nameHeading="h2" showHeading={false} />
    </div>
  )
}
