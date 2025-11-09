"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import Link from "next/link"
import { GlowButton } from "@/components/GlowButton"
import { Globe, GraduationCap, Shield, DollarSign, Users, TrendingUp, CheckCircle, Calendar, Award } from "lucide-react"

export default function GlobalImmersionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={true} />

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
              <span className="text-gold-300 text-sm font-medium">Global Leadership Immersion</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              A world-class semester <span className="gold-gradient">abroad</span>
              <br />
              at <span className="gold-gradient">public-school</span> prices
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Elite-school culture, rigorous academics, and a life-changing global perspective—delivered at a fraction
              of U.S. costs through geographic arbitrage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <GlowButton size="lg" className="bg-gold-500 hover:bg-gold-400 text-navy-900">
                  Join the Waitlist
                </GlowButton>
              </Link>
              <a href="#program-details">
                <GlowButton size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </GlowButton>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-navy-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl font-bold gold-gradient mb-2">$15k</div>
              <div className="text-navy-700">vs. $70k+ at U.S. boarding schools</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-5xl font-bold gold-gradient mb-2">2-4×</div>
              <div className="text-navy-700">learning velocity vs. traditional school</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl font-bold gold-gradient mb-2">100%</div>
              <div className="text-navy-700">ESA/voucher compatible where permitted</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-5xl font-bold gold-gradient mb-2">24/7</div>
              <div className="text-navy-700">safeguarding & incident support</div>
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
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Students</h3>
              <p className="text-navy-700 leading-relaxed">
                9th-12th grade students from high-poverty ZIP codes; first-gen/low-income; motivated to accelerate
                academically and build global competence.
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
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Schools & Networks</h3>
              <p className="text-navy-700 leading-relaxed">
                Charter, microschool, and district schools with ESA/voucher portability or tax-credit scholarship access
                (state-dependent).
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
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Philanthropy & SGOs</h3>
              <p className="text-navy-700 leading-relaxed">
                Donors seeking measurable learning gains and social-mobility outcomes; scholarship-granting organizations.
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
              <h3 className="text-3xl font-bold mb-6">The Zip Code Lottery</h3>
              <ul className="space-y-4 text-white/80 text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                  <span>U.S. per-pupil spend in struggling districts is $15k-$20k, yet outcomes lag</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Students in high-violence, low-opportunity neighborhoods rarely access elite peer effects or
                    time-on-task
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Families can't afford traditional $70k boarding schools or long international programs</span>
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
                <span className="text-green-300 font-semibold">Our Solution</span>
              </div>
              <h3 className="text-3xl font-bold mb-6">Geographic Arbitrage</h3>
              <div className="space-y-6">
                <div className="bg-navy-800/50 rounded-xl p-6 border-l-4 border-gold-500">
                  <h4 className="font-bold text-gold-300 mb-2">Elite Culture at African Prices</h4>
                  <p className="text-white/80">
                    Phillips-Exeter-level structure, coaching, and mastery-based academics for the cost of a U.S. ESA/voucher.
                  </p>
                </div>
                <div className="bg-navy-800/50 rounded-xl p-6 border-l-4 border-gold-500">
                  <h4 className="font-bold text-gold-300 mb-2">No Learning Loss While Abroad</h4>
                  <p className="text-white/80">
                    Two-hour mastery platform daily; students stay fully on-track with MAP/NWEA assessments.
                  </p>
                </div>
                <div className="bg-navy-800/50 rounded-xl p-6 border-l-4 border-gold-500">
                  <h4 className="font-bold text-gold-300 mb-2">Transformative Environment</h4>
                  <p className="text-white/80">
                    Safer campus life, high-achieving peers, rich project work in entrepreneurship, media, and coding.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Design */}
      <section id="program-details" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Program <span className="gold-gradient">Design</span>
            </h2>
            <p className="text-xl text-navy-700 max-w-3xl mx-auto">
              Boutique cohorts designed for maximum impact and personal attention
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Format & Academics */}
            <motion.div
              className="bg-navy-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Format & Academics</h3>
              </div>
              <ul className="space-y-4 text-navy-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>10-14 days</strong> (immersion) or <strong>6-12 weeks</strong> (semester block)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Small cohorts:</strong> 12-18 students per session
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>2-hour mastery block</strong> daily via proven platform
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>MAP/NWEA</strong> baseline + post assessment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Credit-alignment</strong> to sending school with transcript support
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Projects & Cultural Learning */}
            <motion.div
              className="bg-navy-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Projects & Experiences</h3>
              </div>
              <ul className="space-y-4 text-navy-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Media/storytelling</strong> projects documenting experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Entrepreneurship sprints</strong> solving real problems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Community research</strong> projects with local partners
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Tech capstones</strong> building portfolio pieces
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cultural immersion:</strong> Historic sites, weekend field experiences
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safeguarding */}
      <section className="py-24 bg-navy-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-12 border-t-4 border-purple-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-navy-900">
                Safeguarding & <span className="gold-gradient">Inclusion</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Safety Protocols</h3>
                <ul className="space-y-3 text-navy-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Non-discrimination MOU with host institution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Inclusion-safe international/CIS-style campus near Kampala or Kigali</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>24/7 incident hotline with immediate response protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive medical + evacuation insurance</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Contingency Planning</h3>
                <ul className="space-y-3 text-navy-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Safe-harbor transfer protocol to pre-vetted alternate sites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Early return option with no academic penalty</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Dedicated on-site coordinator for every cohort</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Daily parent communication via secure platform</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-navy-900 mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Outcomes We <span className="gold-gradient">Measure</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Academic Growth",
                items: [
                  "MAP/NWEA pre/post assessments",
                  "Target 2-4× learning velocity",
                  "Comprehensive mastery logs",
                  "Credit transfer documentation",
                ],
                color: "blue",
              },
              {
                icon: Users,
                title: "Character & Exposure",
                items: [
                  "Student reflection portfolios",
                  "Leadership skill badges",
                  "Cross-cultural competence",
                  "Capstone presentations",
                ],
                color: "gold",
              },
              {
                icon: Award,
                title: "College & Career",
                items: [
                  "College essay material",
                  "Faculty recommendations",
                  "Resilience & initiative evidence",
                  "Global citizenship credentials",
                ],
                color: "purple",
              },
            ].map((item, index) => {
              const Icon = item.icon
              const colorMap: any = {
                blue: {
                  bg: "bg-blue-500",
                  border: "border-blue-500",
                },
                gold: {
                  bg: "bg-gold-500",
                  border: "border-gold-500",
                },
                purple: {
                  bg: "bg-purple-500",
                  border: "border-purple-500",
                },
              }
              const colors = colorMap[item.color]

              return (
                <motion.div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${colors.border}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">{item.title}</h3>
                  <ul className="space-y-2 text-navy-700">
                    {item.items.map((subItem, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-navy-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{subItem}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gold-gradient">Pricing</span> & Funding
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Designed to work with existing education funding sources
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-navy-800 rounded-2xl p-8 border-2 border-gold-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-gold-300 font-semibold mb-2">Short Immersion</div>
              <div className="text-5xl font-bold text-white mb-4">$3,500</div>
              <div className="text-white/70 mb-6">10-14 days, all-inclusive (flight-exclusive)</div>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span>Room, board, instruction, and excursions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span>~$1,200 net cross-subsidy per U.S. student</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-navy-800 rounded-2xl p-8 border-2 border-blue-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-blue-300 font-semibold mb-2">Semester Block</div>
              <div className="text-5xl font-bold text-white mb-4">ESA/Voucher</div>
              <div className="text-white/70 mb-6">6-12 weeks, state-dependent eligibility</div>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Priced ≤ typical district per-pupil spend</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Philanthropic bridge scholarships available</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 bg-gold-500/10 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/30 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">How It's Funded</h3>
            <div className="grid md:grid-cols-3 gap-6 text-white/90">
              <div>
                <div className="font-semibold text-gold-300 mb-2">Primary</div>
                <p className="text-sm">ESA/voucher or SGO tax-credit scholarships (state-by-state)</p>
              </div>
              <div>
                <div className="font-semibold text-gold-300 mb-2">Bridge</div>
                <p className="text-sm">Philanthropic scholarships and donor-sponsored seats</p>
              </div>
              <div>
                <div className="font-semibold text-gold-300 mb-2">Cross-Subsidy</div>
                <p className="text-sm">Portion of tuition underwrites local learner stipends</p>
              </div>
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
              Ready for a <span className="gold-gradient">Life-Changing</span> Experience?
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-navy-50 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 mb-3">School Leaders</h3>
                <p className="text-navy-700 text-sm">Request our 6-page Program Dossier and draft MOU</p>
              </div>
              <div className="bg-navy-50 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 mb-3">Families</h3>
                <p className="text-navy-700 text-sm">Join the interest list (ESA/SGO-eligible applicants prioritized)</p>
              </div>
              <div className="bg-navy-50 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 mb-3">Funders</h3>
                <p className="text-navy-700 text-sm">Sponsor 5-20 seats to underwrite local learner stipends</p>
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
