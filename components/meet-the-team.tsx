"use client"

import { TeamMember } from "@/components/team-member"
import { motion } from "framer-motion"
import { teamMembers } from "@/lib/site"

export function MeetTheTeam({
  nameHeading = "h3",
  showHeading = true,
}: {
  nameHeading?: "h2" | "h3"
  showHeading?: boolean
}) {
  return (
    <section id="team-section" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Named loan officers, not a call center. Call, email, or apply with the person who will work your file.
            </p>
          </motion.div>
        )}

        <div className="max-w-5xl mx-auto grid gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.id}
              {...member}
              headingAs={nameHeading}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
