"use client"

import * as React from "react"
import { Calculator, CheckCircle, DollarSign, Shield, Star } from "lucide-react"
import { MeetTheTeam } from "@/components/meet-the-team"
import { motion } from "framer-motion"
import { PreapprovalButton } from "@/components/preapproval-button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface LandingPageProps {
  applicationUrl: string
}

export function LandingPage({ applicationUrl }: LandingPageProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const loanOptions = [
    {
      title: "Conventional Loans",
      description: "Traditional mortgage loans with competitive rates and flexible terms.",
      features: ["Down payments as low as 3%", "Fixed & adjustable rates", "Primary & secondary homes"],
    },
    {
      title: "FHA Loans",
      description: "Government-backed loans with more flexible qualification requirements.",
      features: [
        "Down payments as low as 3.5%",
        "Lower credit score options",
        "Perfect for first-time buyers",
      ],
    },
    {
      title: "VA Loans",
      description: "Exclusive loans for veterans, active military, and eligible spouses.",
      features: ["No down payment required", "No PMI required", "Competitive interest rates"],
    },
    {
      title: "Jumbo Loans",
      description: "Financing options for high-value properties above conforming loan limits.",
      features: ["Higher loan amounts", "Competitive rates", "Various term options"],
    },
    {
      title: "Refinance Options",
      description: "Lower your monthly payment or tap into your home's equity.",
      features: ["Rate and term refinance", "Cash-out refinance", "Streamline options"],
    },
  ];

  return (
    <div>
      {/* Why Choose Us Section (Moved Up) */}
      <motion.section
        id="about-us-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Velocity Home Loans</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're committed to providing exceptional service and finding the perfect mortgage solution for your needs.
            </p>
          </div>

          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-lg text-slate-600 mb-4">
              At Velocity Home Loans, we work hard to secure the best rates and loan programs available. As a licensed
              mortgage broker partnered with several of the nation's top wholesale lenders, we give you access to highly
              competitive interest rates and low closing costs—options for many traditional banks simply can't match.
            </p>
            <p className="text-lg text-slate-600 mb-4">
              We are proud to be an Equal Credit Opportunity lender, fully licensed in both Michigan and Florida, and
              committed to fair and transparent lending practices. Our team strictly adheres to Federal Fair Lending
              guidelines, ensuring every client is treated with integrity, respect, and equal opportunity.
            </p>
            <p className="text-lg text-slate-600 mb-4">
              When you choose Velocity, you're not just getting a mortgage, you're getting a trusted partner dedicated
              to your success.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="card-grid-3"
          >
            {[
              {
                icon: <DollarSign className="h-10 w-10 text-primary" />,
                title: "Competitive Rates",
                description:
                  "We shop multiple lenders to find you the most competitive rates available for your situation.",
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "Trusted Expertise",
                description:
                  "Our experienced loan officers guide you through every step of the mortgage process with confidence.",
              },
              {
                icon: <Calculator className="h-10 w-10 text-primary" />,
                title: "Fast Approvals",
                description:
                  "Our streamlined process helps you get pre-approved quickly so you can start shopping for your dream home.",
              },
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeIn} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <div className="velocity-card equal-height">
                  <div className="velocity-card-content">
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="mb-4"
                      >
                        {feature.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Loan Options Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loan Options for Every Need</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether you're a first-time homebuyer or looking to refinance, we have the perfect loan solution for you.
            </p>
          </div>

          <p className="text-center text-sm text-slate-500 mb-4 md:hidden">Swipe to see more options</p>

          <Carousel
            plugins={[
              Autoplay()
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-1 py-4">
              {loanOptions.map((loan, i) => (
                <CarouselItem key={i} className="pl-1 md:basis-1/2">
                  <div className="p-1">
                    <motion.div variants={fadeIn} whileHover={{ y: -5, transition: { duration: 0.2 } }} className="h-full">
                      <div className="velocity-card equal-height">
                        <div className="velocity-card-content">
                          <h3 className="text-xl font-bold mb-2">{loan.title}</h3>
                          <p className="text-slate-600 mb-4 text-sm min-h-[60px]">{loan.description}</p>
                          <ul className="space-y-2 mb-6 flex-grow">
                            {loan.features.map((feature, j) => (
                              <li key={j} className="flex items-start text-sm">
                                <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <PreapprovalButton
                              className="mt-auto w-full"
                              variant="default"
                            >
                              Learn More
                            </PreapprovalButton>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-[-10px] sm:ml-[-20px] md:ml-[-30px]" />
            <CarouselNext className="mr-[-10px] sm:mr-[-20px] md:mr-[-30px]" />
          </Carousel>
        </div>
      </motion.section>

      {/* Meet the Team Section */}
      <section id="team-section">
        <MeetTheTeam />
      </section>

      {/* Get Started Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="py-16 md:py-24 bg-slate-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started with Velocity Home Loans</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every home buyer has a unique story—and we want to hear yours.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-slate-600 mb-4 text-center">
              Whether you're purchasing your first home, refinancing, or investing in real estate, understanding your
              goals is our first priority. No two loans are the same, which is why we take the time to tailor the right
              solution for you from the very beginning.
            </p>
          </div>

          <div className="flex justify-center max-w-4xl mx-auto">
            <motion.div variants={fadeIn} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <div className="velocity-card equal-height">
                <div className="velocity-card-content text-center">
                  <h3 className="text-xl font-bold mb-4">Schedule a Consultation</h3>
                  <p className="text-slate-600 mb-6">
                    Call us at{" "}
                    <a href="tel:2489748711" className="text-primary font-medium hover:underline">
                      248-974-8711
                    </a>{" "}
                    to schedule a 30-minute phone consultation or an in-person meeting at our office.
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a href="tel:2489748711" className="inline-block">
                      <PreapprovalButton variant="outline" className="border-primary text-primary hover:bg-primary/5">
                        Call Now
                      </PreapprovalButton>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>

          <Carousel
            plugins={[
              Autoplay()
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-1 py-4">
              {[
                {
                  review:
                    "Sam and his team went above and beyond every step of the way. And I do mean EVERY STEP. We found a great home in a hot market area and had just 2 days to get pre-approved so we could make an offer. Sam's team turned it around in nearly 24 hours!",
                  name: "Chantal and Mike S.",
                  location: "Brighton, MI",
                  date: "March 2025",
                  rating: 5,
                },
                {
                  review:
                    "Sam was amazing to work with! He was very responsive and made the process of buying our first home so easy. He was able to get us a great rate and was always available to answer any questions we had.",
                  name: "First-time Homebuyer",
                  location: "Michigan",
                  date: "February 2025",
                  rating: 5,
                },
                {
                  review:
                    "Sam and his team were fantastic to work with. They were very responsive and made the process of refinancing our home so easy. They got us a great rate and were always available to answer any questions we had.",
                  name: "Refinance Client",
                  location: "Michigan",
                  date: "January 2025",
                  rating: 5,
                },
                {
                  review:
                    "Working with Velocity Home Loans was a seamless experience. Their team is knowledgeable, efficient, and genuinely cares about finding the best solution. Highly recommended!",
                  name: "Satisfied Client",
                  location: "Florida",
                  date: "December 2024",
                  rating: 5,
                },
                {
                  review:
                    "As a real estate agent, I confidently refer my clients to Sam and his team. They consistently deliver exceptional service and competitive rates, making the transaction smooth for everyone involved.",
                  name: "Realtor Partner",
                  location: "Michigan",
                  date: "November 2024",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <CarouselItem key={i} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <motion.div variants={fadeIn} whileHover={{ y: -5, transition: { duration: 0.2 } }} className="h-full">
                      <div className="velocity-card equal-height">
                        <div className="velocity-card-content">
                          <div className="flex flex-col h-full">
                            <div className="flex mb-4">
                              {[...Array(testimonial.rating)].map((_, j) => (
                                <Star key={j} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                            <p className="text-slate-600 mb-4 text-sm flex-grow min-h-[100px]">{testimonial.review}</p>
                            <div className="flex items-center mt-auto">
                              <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center mr-3">
                                <span className="text-sm font-medium">
                                  {testimonial.name.split(" ")[0][0]}
                                  {testimonial.name.split(" ")[1] ? testimonial.name.split(" ")[1][0] : ""}
                                </span>
                              </div>
                              <div>
                                <div className="font-semibold text-sm">{testimonial.name}</div>
                                <div className="text-xs text-slate-500">
                                  {testimonial.location} • {testimonial.date}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-[-10px] sm:ml-[-20px] md:ml-[-30px]" />
            <CarouselNext className="mr-[-10px] sm:mr-[-20px] md:mr-[-30px]" />
          </Carousel>

          <div className="text-center mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <a
                href="https://www.zillow.com/lender-profile/samine186/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                <span className="mr-2">View all 111 reviews on Zillow</span>
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
