"use client";

import { MainLayout } from "@/components/main-layout";
import { LandingPage } from "@/components/landing-page";
import { VideoBackground } from "@/components/video-background";
import { PreapprovalButton } from "@/components/preapproval-button";
import { APPLICATION_URL } from "@/lib/constants";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants previously in main-layout.tsx
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero Video Section */}
      <div className="relative">
        <VideoBackground
          src="https://cryhpvwjl9tfc2pb.public.blob.vercel-storage.com/8263308-uhd_3840_2160_24fps-X3glsAmZJJ6IRNOF4TVcmDfyIDQPmz-oNJALMHnzjLR4jdYAeyXE2hp3Ngdhv.mp4"
          priority={true}
          height="80vh"
          className="w-full"
          overlayClassName="bg-black/50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-medium mb-2">
              Velocity Home Loans
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Fast-Track Your Home Loan
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl"
          >
            Competitive rates, personalized service, and a streamlined process
            to help you achieve your homeownership dreams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <PreapprovalButton
                size="lg"
                className="bg-white text-primary hover:bg-blue-50"
              >
                Get Pre-Approved
              </PreapprovalButton>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl"
          >
            {[
              { icon: <CheckCircle className="h-5 w-5" />, text: "Competitive Rates" },
              { icon: <CheckCircle className="h-5 w-5" />, text: "Fast Pre-Approvals" },
              { icon: <CheckCircle className="h-5 w-5" />, text: "Personalized Service" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="flex items-center justify-center space-x-2"
              >
                <div className="text-white">{item.icon}</div>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Home Section */}
        <div className="mb-16">
          <LandingPage applicationUrl={APPLICATION_URL} />
        </div>
      </div>
    </MainLayout>
  );
}
