"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ZipCodeImpactMap } from "./ZipCodeImpactMap"
import { GlowButton } from "./GlowButton"
import Link from "next/link"

export function ZipCodeVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20 bg-gradient-to-b from-navy-800 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ y: 20 }}
              animate={isInView ? { y: 0 } : { y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <span className="gold-gradient">41,000</span> ZIP Codes. <span className="gold-gradient">One</span>{" "}
              Nation.
            </motion.h2>

            <motion.p
              className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
              initial={{ y: 20 }}
              animate={isInView ? { y: 0 } : { y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We're building a nationwide network of transformative leaders, one from every ZIP code in America. Each
              returns home equipped to create lasting change.
            </motion.p>

            <motion.div
              className="w-24 h-1 bg-gold-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          {/* Impact Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <ZipCodeImpactMap />
          </motion.div>

          {/* Impact statements */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Community Transformation",
                description:
                  "Each leader returns with the skills, network, and vision to address their community's unique challenges.",
              },
              {
                title: "Nationwide Network",
                description:
                  "Leaders form lifelong bonds, creating a powerful support system that spans every corner of America.",
              },
              {
                title: "Generational Impact",
                description:
                  "The ripple effect continues as each leader inspires others, creating lasting change for generations to come.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-gold-500"
              >
                <h3 className="text-xl font-bold text-navy-800 mb-3">{item.title}</h3>
                <p className="text-navy-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center mt-16"
          >
            <Link href="/contact">
              <GlowButton size="lg" className="bg-navy-800 hover:bg-navy-700 text-white">
                Be Part of the Movement
              </GlowButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
