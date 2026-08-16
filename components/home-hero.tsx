"use client"

import { VideoBackground } from "@/components/video-background"
import { ApplyLink } from "@/components/preapproval-button"
import { CompanyInfo } from "@/lib/site"
import { CheckCircle } from "lucide-react"

const HERO_VIDEO_SRC = "/velocity-hero.mp4"
const HERO_VIDEO_POSTER = "/velocity-hero-poster.jpg"

export function HomeHero() {
  return (
    <div className="relative">
      <VideoBackground
        src={HERO_VIDEO_SRC}
        poster={HERO_VIDEO_POSTER}
        priority
        height="80vh"
        className="w-full"
        overlayClassName="bg-navy/55"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <p className="text-sm md:text-base tracking-[0.28em] uppercase mb-4 text-white/80">Velocity Home Loans</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold max-w-4xl">
          Fast-track your home loan
        </h1>
        <p className="text-lg md:text-xl mt-6 mb-8 text-white/90 max-w-2xl">
          Brighton-based mortgage broker licensed in Michigan and Florida. Named loan officers, wholesale rates, and a
          pre-approval you can send to your realtor.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <ApplyLink size="lg" className="bg-white text-primary hover:bg-paper">
            Get Pre-Approved
          </ApplyLink>
          <a
            href={CompanyInfo.phoneHref}
            className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-lg font-medium text-white hover:bg-white/10"
          >
            Call a loan officer
          </a>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full">
          {["Competitive wholesale rates", "Fast pre-approvals", "Licensed in MI and FL"].map((text) => (
            <div key={text} className="flex items-center justify-center gap-2 text-sm md:text-base">
              <CheckCircle className="h-5 w-5" aria-hidden="true" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
