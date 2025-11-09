"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import Link from "next/link"
import { GlowButton } from "@/components/GlowButton"
import { Smartphone, TrendingUp, Users, Zap, Shield, Globe, CheckCircle, DollarSign } from "lucide-react"

export default function LearningKioskPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={isScrolled} />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0 star-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-gold-500/20 backdrop-blur-sm rounded-full mb-6 border border-gold-500/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-gold-300 text-sm font-medium">2hr Learning Kiosk Network</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Get paid to <span className="gold-gradient">learn</span>.
              <br />
              Build skills in <span className="gold-gradient">two hours</span> a day.
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              A national network of entrepreneur-run learning cafés that rewards mastery with instant mobile-money
              micro-payments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <GlowButton size="lg" className="bg-gold-500 hover:bg-gold-400 text-navy-900">
                  Join the Network
                </GlowButton>
              </Link>
              <a href="#how-it-works">
                <GlowButton size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  How It Works
                </GlowButton>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-navy-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl font-bold gold-gradient mb-2">$100–$150</div>
              <div className="text-navy-700 text-lg">per learner per year</div>
              <div className="text-navy-600 text-sm mt-2">At scale with aligned incentives</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-6xl font-bold gold-gradient mb-2">2 hours</div>
              <div className="text-navy-700 text-lg">daily learning commitment</div>
              <div className="text-navy-600 text-sm mt-2">Build mastery without disrupting daily life</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-6xl font-bold gold-gradient mb-2">100K+</div>
              <div className="text-navy-700 text-lg">learners by Year 5</div>
              <div className="text-navy-600 text-sm mt-2">Scaled through café-native distribution</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Who It's <span className="gold-gradient">For</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <motion.div
              className="bg-navy-50 rounded-2xl p-8 border-t-4 border-blue-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Students & Families</h3>
              <p className="text-navy-700 leading-relaxed">
                Secondary-level learners who can't access quality instruction or must split time with farm/household
                work.
              </p>
            </motion.div>

            <motion.div
              className="bg-navy-50 rounded-2xl p-8 border-t-4 border-gold-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Entrepreneurs</h3>
              <p className="text-navy-700 leading-relaxed">
                Existing internet cafés and mobile-money agents who want a new revenue stream with no upfront
                investment.
              </p>
            </motion.div>

            <motion.div
              className="bg-navy-50 rounded-2xl p-8 border-t-4 border-purple-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Funders</h3>
              <p className="text-navy-700 leading-relaxed">
                Government (per-learner co-pay), philanthropies, and U.S. cross-subsidy via DLA programs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-red-500/20 rounded-lg mb-6">
                <span className="text-red-300 font-semibold">The Problem</span>
              </div>
              <h3 className="text-3xl font-bold mb-6">Education vs. Economics</h3>
              <ul className="space-y-4 text-white/80 text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Public systems underserve rural and low-income learners</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Opportunity cost of school is high—families need near-term cash and clear ROI</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Students need reliable access, structure, and feedback</span>
                </li>
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-block px-4 py-2 bg-green-500/20 rounded-lg mb-6">
                <span className="text-green-300 font-semibold">The Solution</span>
              </div>
              <h3 className="text-3xl font-bold mb-6">Aligned Incentives</h3>
              <div className="space-y-6">
                <div className="bg-navy-800/50 rounded-xl p-6 border-l-4 border-gold-500">
                  <h4 className="font-bold text-gold-300 mb-2">Learn-to-Earn</h4>
                  <p className="text-white/80">
                    Every mastered milestone (≥90%) triggers a fractional mobile-money payout—instantly. School becomes
                    a job.
                  </p>
                </div>
                <div className="bg-navy-800/50 rounded-xl p-6 border-l-4 border-gold-500">
                  <h4 className="font-bold text-gold-300 mb-2">Café-Native Distribution</h4>
                  <p className="text-white/80">
                    No government build-out; we leverage existing cafés as our sales + ops force.
                  </p>
                </div>
                <div className="bg-navy-800/50 rounded-xl p-6 border-l-4 border-gold-500">
                  <h4 className="font-bold text-gold-300 mb-2">Research-Ready</h4>
                  <p className="text-white/80">
                    Clean logs, randomized audits, MAP/NWEA checks create gold-standard evidence of impact.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              How It <span className="gold-gradient">Works</span>
            </h2>
            <p className="text-xl text-navy-700 max-w-3xl mx-auto">
              The payment path from mastery to mobile money in four simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: CheckCircle,
                title: "Master a Milestone",
                description: "Student achieves ≥90% on a learning milestone through the platform",
              },
              {
                step: "02",
                icon: Zap,
                title: "API Trigger",
                description: "Mastery event triggers automated API call to payment system",
              },
              {
                step: "03",
                icon: DollarSign,
                title: "Instant Payout",
                description: "Mobile money payment sent instantly to student/family wallet",
              },
              {
                step: "04",
                icon: TrendingUp,
                title: "Everyone Wins",
                description: "Student (37%), café (56%), and platform (7%) all benefit",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-navy-50 rounded-2xl p-6 h-full border-2 border-transparent hover:border-gold-500 transition-all">
                    <div className="text-6xl font-bold text-gold-200 mb-4">{item.step}</div>
                    <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                    <p className="text-navy-700">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Unit Economics */}
      <section className="py-24 bg-navy-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-12 border-t-4 border-gold-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-8 text-center">
              Unit <span className="gold-gradient">Economics</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Today (Pilot)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-navy-50 rounded-lg">
                    <span className="text-navy-700">Cost per milestone</span>
                    <span className="font-bold text-navy-900">~680 UGX</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-navy-50 rounded-lg">
                    <span className="text-navy-700">Milestones per year</span>
                    <span className="font-bold text-navy-900">~750</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gold-50 rounded-lg border-2 border-gold-500">
                    <span className="text-navy-900 font-semibold">Annual cost per learner</span>
                    <span className="font-bold text-2xl gold-gradient">~$150</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-6">At Scale (24-36 months)</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-700">Scale efficiencies & bulk connectivity</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-700">Cross-subsidy from U.S. programs</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-700">Government expansion & co-funding</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border-2 border-green-500 mt-4">
                    <span className="text-navy-900 font-semibold">Target annual cost</span>
                    <span className="font-bold text-2xl text-green-700">$100</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-gold-50 to-gold-100 rounded-2xl border border-gold-300">
              <h4 className="font-bold text-navy-900 mb-3 text-lg">Payout Split per Milestone</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold gold-gradient mb-1">37%</div>
                  <div className="text-navy-700 text-sm">Student</div>
                  <div className="text-navy-600 text-xs">250 UGX</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gold-gradient mb-1">56%</div>
                  <div className="text-navy-700 text-sm">Café Owner</div>
                  <div className="text-navy-600 text-xs">380 UGX</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gold-gradient mb-1">7%</div>
                  <div className="text-navy-700 text-sm">Platform</div>
                  <div className="text-navy-600 text-xs">50 UGX</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Cafés Say Yes */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-navy-900 mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Cafés Say <span className="gold-gradient">Yes</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "New Revenue Line",
                description: "Adding DLA milestones increases a typical café's weekly revenue to ~707,000 UGX (+9%)",
                color: "green",
              },
              {
                icon: Zap,
                title: "No Capex",
                description: "We don't buy devices or build kiosks; we certify existing shops",
                color: "blue",
              },
              {
                icon: Shield,
                title: "Only Pay on Learning",
                description: "Payouts are milestone-contingent, reducing waste and gaming",
                color: "purple",
              },
            ].map((item, index) => {
              const Icon = item.icon
              const colorMap: any = {
                green: {
                  bg: "bg-green-500",
                  border: "border-green-500",
                  text: "text-green-600",
                },
                blue: {
                  bg: "bg-blue-500",
                  border: "border-blue-500",
                  text: "text-blue-600",
                },
                purple: {
                  bg: "bg-purple-500",
                  border: "border-purple-500",
                  text: "text-purple-600",
                },
              }
              const colors = colorMap[item.color]

              return (
                <motion.div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${colors.border} hover:shadow-2xl transition-all`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${colors.text}`}>{item.title}</h3>
                  <p className="text-navy-700 leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Rollout Plan */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Rollout <span className="gold-gradient">Plan</span>
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                phase: "Phase 1",
                timeline: "0-18 months",
                title: "Premium Proof",
                items: [
                  "50-100 paid licenses across 1-3 elite schools",
                  "2-3 certified cafés",
                  "MAP data room & case studies",
                ],
              },
              {
                phase: "Phase 2",
                timeline: "18-30 months",
                title: "Café Pilot + RCT",
                items: [
                  "8-10 cafés serving 200-500 sponsored learners",
                  "US→Uganda immersion (3 cohorts)",
                  "Drive cost from $120 → $100",
                ],
              },
              {
                phase: "Phase 3",
                timeline: "Year 3+",
                title: "Network Scale",
                items: [
                  "5,000+ learners across ~250 cafés",
                  "Expand to Kenya, Tanzania, Rwanda",
                  "Blended finance model operational",
                ],
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="bg-navy-800 rounded-2xl p-8 border-l-4 border-gold-500"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <div className="text-gold-300 font-semibold mb-2">{phase.phase}</div>
                    <h3 className="text-3xl font-bold text-white">{phase.title}</h3>
                  </div>
                  <div className="mt-4 md:mt-0 px-4 py-2 bg-gold-500/20 rounded-full border border-gold-500/30">
                    <span className="text-gold-300 text-sm font-medium">{phase.timeline}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center bg-gold-500/10 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl font-bold gold-gradient mb-4">100,000+</div>
            <div className="text-xl text-white/90">
              learners by Year 5 through distribution, capex-light ops, and aligned incentives
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8">
              Ready to <span className="gold-gradient">Get Started</span>?
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-navy-50 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 mb-3">Government</h3>
                <p className="text-navy-700 text-sm">Pilot 1-2 districts at $50/learner co-pay with independent evaluation</p>
              </div>
              <div className="bg-navy-50 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 mb-3">Philanthropy</h3>
                <p className="text-navy-700 text-sm">Underwrite first 500 learners and the RCT</p>
              </div>
              <div className="bg-navy-50 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 mb-3">Café Owners</h3>
                <p className="text-navy-700 text-sm">Apply to become a certified learning café</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <GlowButton size="lg" className="bg-gold-500 hover:bg-gold-400 text-navy-900">
                  Get in Touch
                </GlowButton>
              </Link>
              <Link href="/">
                <GlowButton size="lg" variant="outline" className="border-navy-800 text-navy-800 hover:bg-navy-50">
                  Back to Home
                </GlowButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
