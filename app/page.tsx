"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Users, ChevronDown, Star, MapPin, GraduationCap, Sparkles } from "lucide-react"
import { ApproachTimeline } from "@/components/ApproachTimeline"
import { DelightfulFAQ } from "@/components/DelightfulFAQ"
import { ContactForm } from "@/components/ContactForm"
import { AnimatedLogo } from "@/components/AnimatedLogo"
import { GlowButton } from "@/components/GlowButton"
import { Navigation } from "@/components/Navigation"
import { SubstackEmbed } from "@/components/SubstackEmbed"
import { ZipCodeVision } from "@/components/ZipCodeVision"

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [contactSubject, setContactSubject] = useState("")
  const heroRef = useRef(null)
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting)
      },
      {
        threshold: 0,
        rootMargin: "-80px 0px 0px 0px",
      },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Frederick Douglass background */}
      <section ref={heroRef} className="min-h-screen relative overflow-hidden">
        {/* Frederick Douglass background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/frederick-douglass.jpg"
            alt="Frederick Douglass portrait"
            fill
            className="object-cover object-right"
            priority
          />
          {/* Gold/sepia overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/80 to-navy-900/30" />
          <div className="absolute inset-0 bg-gold-500/20 mix-blend-overlay" />
        </div>

        {/* Background stars */}
        <div className="absolute inset-0 star-bg opacity-30 z-10" />

        {/* Navigation */}
        <Navigation isScrolled={isScrolled} />

        <div className="container mx-auto px-4 h-full flex items-center pt-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="block gold-gradient">Education</span>
                <span className="text-white">is Freedom</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Continuing Frederick Douglass's legacy through world-class education that transcends borders and
                transforms lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/vision">
                  <GlowButton size="lg" className="bg-gold-500 hover:bg-gold-400 text-navy-900">
                    Vision Deck
                  </GlowButton>
                </Link>
                <Link
                  href="https://docs.google.com/document/d/1vbSUzIU7T-b6tNwws_djl22aMxBz45GOVA9D5iTdecs/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlowButton size="lg" variant="outline" className="border-white text-navy-900 hover:bg-white/10">
                    Learn More
                  </GlowButton>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="hidden md:flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative w-[400px] h-[400px]">
                <AnimatedLogo />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <ChevronDown className="text-gold-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* ZIP Code Vision Section - MOVED TO TOP */}
      <ZipCodeVision />

      {/* Quote Section */}
      <section className="bg-navy-50 py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.blockquote
            className="text-2xl md:text-3xl italic text-navy-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="relative">
              <span className="absolute -left-6 -top-6 text-gold-500 text-5xl opacity-30">"</span>
              Once you learn to read, you will be forever free.
              <span className="absolute -right-6 -bottom-6 text-gold-500 text-5xl opacity-30">"</span>
            </span>
            <footer className="text-lg mt-6 text-navy-700 font-semibold">— Frederick Douglass</footer>
          </motion.blockquote>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                className="text-4xl font-bold text-navy-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Your Zip Code Shouldn't Define Your <span className="gold-gradient">Destiny</span>
              </motion.h2>
              <motion.p
                className="text-lg text-navy-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                For promising American students in underserved communities, Douglass Leadership Academy offers a world-class boarding school experience at elite East African institutions—at a cost covered by public education funds. We're not just changing schools; we're changing the trajectory of a lifetime.
              </motion.p>
              <div className="grid grid-cols-2 gap-6">
                <FeatureCard
                  icon={<GraduationCap className="w-8 h-8 text-gold-500" />}
                  title="Elite Institutions"
                  description="Century-old 'Etons of East Africa'"
                  delay={0.3}
                />
                <FeatureCard
                  icon={<MapPin className="w-8 h-8 text-gold-500" />}
                  title="Geographic Arbitrage"
                  description="World-class education, smart economics"
                  delay={0.4}
                />
                <FeatureCard
                  icon={<Users className="w-8 h-8 text-gold-500" />}
                  title="Global Citizenship"
                  description="Build lifelong cross-cultural fluency"
                  delay={0.5}
                />
                <FeatureCard
                  icon={<Sparkles className="w-8 h-8 text-gold-500" />}
                  title="Fully Funded"
                  description="Through ESAs and vouchers"
                  delay={0.6}
                />
              </div>
            </div>
            <motion.div
              className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-13%20at%203.27.15%E2%80%AFPM-IojuRipKhjntfm9FG6nqgnUWsmm5G0.png"
                alt="Global education connecting continents"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />

              {/* Floating stars */}
              {[1, 2, 3, 4, 5].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 15}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <Star className="text-white" size={i % 2 === 0 ? 16 : 12} fill="white" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Model Section - Dual Approach */}
      <section id="model" className="py-24 bg-navy-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-navy-900 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Two <span className="gold-gradient">Pathways</span>, One Mission
          </motion.h2>
          <motion.p
            className="text-lg text-navy-700 max-w-3xl mx-auto mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We're building a self-sustaining ecosystem where American students gain transformative global experiences while directly funding education for thousands in East Africa.
          </motion.p>

          {/* DLA Immersion Model */}
          <div className="mb-16">
            <motion.div
              className="bg-white rounded-xl shadow-xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-5xl font-bold gold-gradient">01</div>
                <h3 className="text-3xl font-bold text-navy-900">The Leadership Immersion</h3>
              </div>
              <p className="text-lg text-navy-700 mb-6">
                A radical reimagining of the semester abroad. We partner with elite, century-old educational institutions in Uganda to provide an unparalleled immersion experience for promising American students.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border-l-4 border-gold-500 pl-4">
                  <h4 className="font-bold text-navy-900 mb-2">Academic Rigor</h4>
                  <p className="text-navy-700 text-sm">Challenging curriculum, small classes, and a peer group of driven, high-achieving students.</p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4">
                  <h4 className="font-bold text-navy-900 mb-2">Safety & Structure</h4>
                  <p className="text-navy-700 text-sm">Secure boarding school campus focused on learning and growth, free from home distractions.</p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4">
                  <h4 className="font-bold text-navy-900 mb-2">Real-World Skills</h4>
                  <p className="text-navy-700 text-sm">Capstone projects in coding, media, and entrepreneurship that build portfolios Ivy League schools crave.</p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-navy-50 rounded-lg border border-gold-100">
                <p className="text-navy-900 font-semibold mb-2">The Financial Engine</p>
                <p className="text-navy-700">
                  Per-pupil funding in many US districts ($15,000-$20,000/year) covers tuition, room, board, healthcare, and flights. Through ESAs and voucher programs, we redirect existing public funds to deliver vastly superior outcomes. Each US student generates a ~$1,200 surplus that funds our Uganda Café Partnership.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Uganda Café Partnership */}
          <div>
            <motion.div
              className="bg-navy-900 text-white rounded-xl shadow-xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-5xl font-bold gold-gradient">02</div>
                <h3 className="text-3xl font-bold text-white">The Uganda Café Partnership</h3>
              </div>
              <p className="text-lg text-white/90 mb-6">
                A scalable, tech-driven "Learn-to-Earn" platform that pays students directly for academic mastery. By partnering with local entrepreneurs and leveraging Uganda's mobile money network, we turn internet cafés into engines of learning and economic opportunity.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-navy-800/50 p-6 rounded-lg border border-gold-500/20">
                  <h4 className="font-bold text-gold-300 mb-3">The Problem</h4>
                  <p className="text-white/80 text-sm">For millions of families in rural Africa, the biggest barrier to education isn't a lack of schools—it's economics. When a child is in a classroom, they're not contributing to the family's daily survival.</p>
                </div>
                <div className="bg-navy-800/50 p-6 rounded-lg border border-gold-500/20">
                  <h4 className="font-bold text-gold-300 mb-3">The Solution</h4>
                  <p className="text-white/80 text-sm">We pay students directly and instantly for learning. When a student masters a concept, a mobile money payment is sent to their family's wallet. School becomes a job.</p>
                </div>
              </div>
              <div className="bg-gold-500/10 p-6 rounded-lg border border-gold-500/30">
                <p className="text-gold-300 font-semibold mb-2">The Economics</p>
                <p className="text-white/90">
                  We're on a path to reduce costs from $150/year to $100/year per learner. With net revenue from each US student covering 8-12 Ugandan learners, we're building a self-perpetuating economic engine that scales to 100,000+ students within five years.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-navy-700 mb-6 text-lg">Explore each pathway in detail:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/global-immersion">
                  <GlowButton className="bg-navy-800 hover:bg-navy-700 text-white">
                    Leadership Immersion →
                  </GlowButton>
                </Link>
                <Link href="/learning-kiosk">
                  <GlowButton className="bg-gold-500 hover:bg-gold-400 text-navy-900">
                    2hr Learning Kiosk →
                  </GlowButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="our-approach" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-navy-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our <span className="gold-gradient">Approach</span>
          </motion.h2>
          <ApproachTimeline />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-navy-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-navy-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked <span className="gold-gradient">Questions</span>
          </motion.h2>
          <DelightfulFAQ />
        </div>
      </section>

      {/* Admissions CTA */}
      <section id="admissions" className="relative py-24 navy-gradient overflow-hidden">
        {/* Star background */}
        <div className="absolute inset-0 star-bg opacity-20" />

        {/* Animated stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute star-animation animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <Star size={Math.random() * 8 + 4} className="text-white" fill="white" />
          </div>
        ))}

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Begin Your <span className="gold-gradient">Journey</span>
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join a community of future leaders. While applications aren't open yet, we're looking for co-conspirators
            and allies to help shape the future of education.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/vision">
              <GlowButton size="lg" className="bg-gold-500 hover:bg-gold-400 text-navy-900">
                Vision Deck
              </GlowButton>
            </Link>
            <Link href="/contact">
              <GlowButton size="lg" variant="outline" className="border-white text-navy-900 hover:bg-white/10">
                Get Involved
              </GlowButton>
            </Link>
          </motion.div>
          {/* Add the Substack embed to the admissions section */}
          <motion.div
            className="mt-12 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <SubstackEmbed className="w-full" />
          </motion.div>
        </div>
      </section>

      <footer className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-[50px] h-[50px] relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final-dla-logo-uRYlx7KejNcZjiOTEiUe2CnD5JwKfD.png"
                  alt="DLA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-semibold">Douglass Leadership Academy</span>
            </div>
            <div className="flex space-x-4">
              <Link href="/terms" className="hover:text-gold-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="hover:text-gold-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-gold-300 transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-white/60 mt-4 md:mt-0">&copy; 2025 DLA. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <AnimatePresence>
        {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} subject={contactSubject} />}
      </AnimatePresence>
    </div>
  )
}

function FeatureCard({ icon, title, description, delay = 0 }: { icon: React.ReactNode; title: string; description: string; delay?: number }) {
  return (
    <motion.div
      className="p-4 rounded-lg bg-navy-50 hover:bg-navy-100 transition-colors border border-gold-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(198, 164, 85, 0.1)" }}
    >
      <div className="mb-3">{icon}</div>
      <h3 className="font-semibold text-navy-900 mb-1">{title}</h3>
      <p className="text-sm text-navy-700">{description}</p>
    </motion.div>
  )
}
