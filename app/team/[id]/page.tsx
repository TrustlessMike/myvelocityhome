import { TeamMember } from "@/components/team-member"
import { teamMembers } from "@/lib/site"
import { notFound } from "next/navigation"
import { pageMetadata } from "@/lib/seo"
import { JsonLd, breadcrumbSchema } from "@/components/json-ld"

export function generateStaticParams() {
  return teamMembers.map((member) => ({ id: member.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const member = teamMembers.find((item) => item.id === id)
  if (!member) return {}
  return pageMetadata({
    title: member.name,
    description: `${member.name}, ${member.title} at Velocity Home Loans. NMLS #${member.nmls}. Call ${member.phone}.`,
    path: `/team/${member.id}`,
  })
}

export default async function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const member = teamMembers.find((item) => item.id === id)
  if (!member) notFound()

  return (
    <div className="py-12">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Our Team", path: "/team" },
          { name: member.name, path: `/team/${member.id}` },
        ])}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <TeamMember {...member} headingAs="h1" priority />
        </div>
      </div>
    </div>
  )
}
