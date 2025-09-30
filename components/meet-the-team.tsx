"use client"

import { TeamMember } from "@/components/team-member"
import { motion } from "framer-motion"

export function MeetTheTeam() {
  return (
    <section id="team-section" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our experienced mortgage professionals are here to guide you through every step of your home financing
            journey.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid gap-8">
          <TeamMember
            name="Sam Amine"
            title="President & CEO"
            email="sam@myvelocitymortgage.com"
            phone="(248) 974-8711"
            nmls="161982"
            bio="I'm a seasoned Mortgage Broker with 24 years of experience and a steadfast commitment to dual fiduciary responsibility: delivering the best possible financing solutions for my clients while ensuring my company originates high-quality, high-performing loans. I bring a strategic mindset, deep industry knowledge, and a leadership-driven approach that consistently creates value across my network.

For me, leadership isn't just a title—it's the foundation of everything. I believe organizational success hinges on the ability to lead with clarity, integrity, and vision. I'm constantly reflecting on what could've been done better last month or last year to move the needle today—and more importantly, I'm always thinking forward: What can we do now to drive sustainable success tomorrow?

I lead by example and foster a culture of empowerment, helping my team tap into their strengths and grow into the best versions of themselves. My mission is to extend my influence across the industry by combining experience, strategic thinking, and forward-focused leadership to fuel both individual and organizational growth.

&quot;Build your own dreams, or someone else will hire you to build theirs.&quot;
&quot;The best time to plant a tree was 20 years ago. The second best time is now.&quot;"
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-w3y9bWM7nrw18JBPmqzdy40Qzn8vGi.png"
            id="sam"
            reviewsUrl="https://www.zillow.com/lender-profile/samine186/"
          />

          <TeamMember
            name="Christa Spencer"
            title="Senior Mortgage Consultant"
            email="christa@myvelocitymortgage.com"
            phone="(248) 320-7066"
            nmls="533751"
            bio="Christa Spencer brings over a decade of expertise in the mortgage industry, with a passion for helping clients navigate the complexities of home financing. As a dedicated mortgage professional, she specializes in creating personalized loan solutions that align with her clients' unique financial goals and circumstances. Christa is known for her exceptional communication skills and ability to simplify the mortgage process, making it accessible and stress-free for first-time homebuyers and experienced homeowners alike. Her commitment to client education ensures that borrowers understand every aspect of their mortgage options, empowering them to make confident decisions. With a reputation for responsiveness and attention to detail, Christa consistently delivers a seamless mortgage experience from application to closing."
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dJsLeMoP1kwgLnKW6nxn83eiuEZlZB.png"
            id="christa"
          />

          <TeamMember
            name="Robert Jastrzebski"
            title="Senior Loan Officer"
            email="rob@myvelocitymortgage.com"
            phone="(734) 748-2416"
            nmls="2654571"
            bio="I've been working in client-based solutions for over 15 years, and what drives me is keeping things straightforward, saving my clients money, reducing stress, and being transparent every step of the way. I believe in educating when needed, so you always understand the 'why' behind the decisions we make together.

For me, building relationships is the key to finding the best solutions. I take the time to listen, understand your goals, and then figure out the smartest way forward.

I live here in Brighton with my wife, Bridgette, who teaches in the community, and our three kids—Adalynn, Robby, and Ben. Brighton has been home for the past five years, and it's important to me to serve my clients with the same care and honesty I'd want for my own family."
            imageSrc="/Photo for Rob.JPG"
            id="robert"
          />
        </div>
      </div>
    </section>
  )
}
