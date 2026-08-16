"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { PreapprovalButton } from "./preapproval-button"

export function AboutUs() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>About Velocity Home Loans</CardTitle>
          <CardDescription>Your trusted partner in home financing</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-slate-600 mb-4">
                At Velocity Home Loans, we don't just do mortgages—we build lifelong relationships rooted in trust,
                expertise, and results.
              </p>
              <p className="text-slate-600 mb-4">
                With over 24 years of experience, Sam Amine, President of Velocity, has helped thousands of homeowners
                turn their dreams into reality. Whether you're buying your first home, upgrading, or refinancing, we're
                here to make it happen—smoothly, quickly, and with a personal touch.
              </p>
              <p className="text-slate-600 mb-4">
                When you call us, you're not routed through a call center. You're talking to Sam or a seasoned member of
                our expert team. We believe every client matters, and that's why we treat your goals like our own.
                You'll get straightforward advice, unbeatable service, and access to competitive rates and loan programs
                tailored to you.
              </p>
            </div>
            <div className="relative h-64 md:h-full min-h-[250px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?key=3rzud"
                alt="Our team of mortgage professionals"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="pt-6 border-t">
            <p className="text-slate-600 mb-4">
              Proudly licensed in Michigan and Florida, Velocity Home Loans have grown through referrals from happy
              clients who confidently send their friends and family our way. And for six years straight (2019–2024), Sam
              has been named one of Michigan's Top Mortgage Loan Officers by Hour Detroit magazine.
            </p>
            <p className="text-slate-600 mb-4">
              We go above and beyond because we want to be your go-to mortgage team for life. From first call to final
              closing, we're here to make your home financing experience something you'll rave about.
            </p>
            <p className="text-slate-600 mb-4">
              Ready to get started? Apply online today—it's fast, secure, and easy. Or give us a call for a free,
              personalized consultation. Let's make your home dreams a reality—with speed, care, and confidence.
            </p>
            <div className="mt-6 flex justify-center">
              <PreapprovalButton variant="default" className="px-8">
                Apply Online Today
              </PreapprovalButton>
            </div>
          </div>

          <div className="pt-6 border-t">
            <h3 className="text-xl font-semibold mb-4">Why Choose Velocity Home Loans?</h3>
            <p className="text-slate-600 mb-4">
              At Velocity Home Loans, we work hard to secure the best rates and loan programs available. As a licensed
              mortgage broker partnered with several of the nation's top wholesale lenders, we give you access to highly
              competitive interest rates and low closing costs—options for many traditional banks simply can't match.
            </p>
            <p className="text-slate-600 mb-4">
              We are proud to be an Equal Credit Opportunity lender, fully licensed in both Michigan and Florida, and
              committed to fair and transparent lending practices. Our team strictly adheres to Federal Fair Lending
              guidelines, ensuring every client is treated with integrity, respect, and equal opportunity.
            </p>
            <p className="text-slate-600 mb-4">
              When you choose Velocity, you're not just getting a mortgage, you're getting a trusted partner dedicated
              to your success.
            </p>
          </div>

          <div className="pt-6 border-t">
            <h3 className="text-xl font-semibold mb-4">Get Started with Velocity Home Loans</h3>
            <p className="text-slate-600 mb-4">
              Every home buyer has a unique story—and we want to hear yours. Whether you're purchasing your first home,
              refinancing, or investing in real estate, understanding your goals is our first priority. No two loans are
              the same, which is why we take the time to tailor the right solution for you from the very beginning.
            </p>
            <p className="text-slate-600 mb-4">Let's connect:</p>
            <p className="text-slate-600 mb-4">
              Call us at{" "}
              <a href="tel:2489748711" className="text-primary font-medium hover:underline">
                248-974-8711
              </a>{" "}
              to schedule a 30-minute phone consultation or an in-person meeting at our office.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg">
                <h4 className="font-semibold mb-2">Schedule a Consultation</h4>
                <p className="text-slate-600 mb-4">Speak with our mortgage experts to discuss your options</p>
                <a href="tel:2489748711" className="text-primary font-medium hover:underline">
                  Call 248-974-8711
                </a>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg">
                <h4 className="font-semibold mb-2">Apply Online</h4>
                <p className="text-slate-600 mb-4">Start your application process quickly and securely</p>
                <PreapprovalButton variant="default">Get Started Now</PreapprovalButton>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
