"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Globe,
  BookOpen,
  Users,
  DollarSign,
  Award,
  TrendingUp,
  Heart,
  Rocket,
  GraduationCap,
  Smartphone,
  MapPin,
  Target,
  Zap,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import DLALogo from "@/app/dla-logo.png"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeProgram, setActiveProgram] = useState<"immersion" | "cafe">("immersion")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden relative">
                <Image
                  src={DLALogo || "/placeholder.svg"}
                  alt="Douglass Leadership Academy Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-primary">Douglass Leadership Academy</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#immersion" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                DLA Immersion
              </Link>
              <Link href="#cafe" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Uganda Café
              </Link>
              <Link href="#impact" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Impact
              </Link>
              <Link href="#join" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Get Involved
              </Link>
            </div>
            <Link href="/survey" passHref>
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold">Contact Us</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_50%)]" />

        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            >
              Your Zip Code Shouldn't Define Your Destiny
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl text-white/90 mb-8 leading-relaxed font-light"
            >
              We're offering a <span className="font-bold text-accent">new one</span>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto"
            >
              Two revolutionary programs. One mission: Breaking the cycle of geographic inequality through world-class
              education and economic innovation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 font-semibold"
                onClick={() => document.getElementById("immersion")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore DLA Immersion
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 font-semibold bg-transparent"
                onClick={() => document.getElementById("cafe")?.scrollIntoView({ behavior: "smooth" })}
              >
                Discover Uganda Café
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <blockquote className="text-2xl md:text-4xl italic text-primary font-light">
            "Once you learn to read, you will be forever free."
          </blockquote>
          <footer className="text-xl mt-6 text-foreground font-semibold">— Frederick Douglass</footer>
        </div>
      </section>

      {/* DLA Immersion Section */}
      <section id="immersion" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
              >
                PROGRAM ONE
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">Douglass Leadership Academy</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The High-Touch, High-Impact "Immersion" Model
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-16">
              <Image src="/american-and-ugandan-students-collaborating-on-pro.jpg" alt="Students collaborating" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent flex items-end p-8">
                <p className="text-white text-2xl font-bold">A Global Leadership Accelerator</p>
              </div>
            </div>

            {/* The Problem */}
            <div className="mb-20">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Problem: <span className="text-secondary">The American Opportunity Ceiling</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In America, the greatest predictor of a child's future success isn't their talent, their drive, or their
                intelligence. It's the zip code they were born into. For millions of bright, capable students, this
                means their potential is capped by under-resourced schools, neighborhood violence, and a lack of access
                to the global networks that define 21st-century success.
              </p>
              <p className="text-xl font-semibold text-primary">
                We believe the most powerful way to break this cycle is not just to change the classroom, but to change
                the entire environment.
              </p>
            </div>

            {/* The Solution */}
            <div className="mb-20">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Solution: <span className="text-secondary">A Global Leap Forward</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Douglass Leadership Academy is a radical reimagining of the American semester abroad. We partner with
                elite, century-old educational institutions in Uganda—often called "the Etons of East Africa"—to provide
                an unparalleled immersion experience.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <ImmersionCard
                  icon={<GraduationCap className="w-8 h-8" />}
                  title="Academic Rigor"
                  description="A challenging curriculum, small class sizes, and a peer group of driven, high-achieving Ugandan students."
                  color="primary"
                />
                <ImmersionCard
                  icon={<Heart className="w-8 h-8" />}
                  title="Unmatched Safety & Structure"
                  description="A secure, contained boarding school campus where the focus is on learning and personal growth."
                  color="secondary"
                />
                <ImmersionCard
                  icon={<Globe className="w-8 h-8" />}
                  title="Global Citizenship"
                  description="Students don't just learn about the world; they live in it. Build lifelong friendships and cross-cultural collaboration."
                  color="primary"
                />
                <ImmersionCard
                  icon={<Rocket className="w-8 h-8" />}
                  title="Cutting-Edge Skills"
                  description="Through capstone projects in coding, media, and entrepreneurship, students solve real-world problems."
                  color="secondary"
                />
              </div>
            </div>

            {/* Financial Engine */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 md:p-12 mb-20">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Financial Engine: <span className="text-accent">Smart Geographic Arbitrage</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                How is this possible? We leverage a powerful economic principle: <strong>geographic arbitrage</strong>.
              </p>

              <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-white p-3 rounded-lg">
                    <DollarSign className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">The Math Works</h4>
                    <p className="text-muted-foreground mb-4">
                      The per-pupil funding in many US school districts ($15,000-$20,000 per year) is more than enough
                      to cover tuition, room, board, healthcare, and even round-trip flights for a world-class boarding
                      school experience in East Africa.
                    </p>
                    <p className="text-primary font-semibold">
                      Through Education Savings Accounts (ESAs), voucher programs, and federal Scholarship Tax Credits,
                      we redirect existing public funds to deliver vastly superior outcomes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 rounded-xl p-6 border-2 border-secondary">
                <h4 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" />
                  The Cross-Subsidy Magic
                </h4>
                <p className="text-foreground">
                  Every US student we enroll generates a net surplus of{" "}
                  <strong className="text-secondary">~$1,200</strong>. This surplus directly funds our sister
                  initiative: a scalable "Learn-to-Earn" platform for local Ugandan learners. Your child's life-changing
                  experience directly fuels the education of hundreds of others.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-primary text-white rounded-2xl p-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Give Your Child an Unfair Advantage?</h3>
              <p className="text-xl mb-8 opacity-90">
                An experience that will not only redefine their future but shape their character.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/survey">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                    Join Our Waitlist
                  </Button>
                </Link>
                <Link href="/twenty-year-vision-abridged" target="_blank">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    Read Full Vision
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Uganda Café Partnership Section */}
      <section id="cafe" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4"
              >
                PROGRAM TWO
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">The Uganda Café Partnership</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The Mass-Market, Tech-Driven "Learn-to-Earn" Model
              </p>
            </div>

            {/* Hero Question */}
            <div className="bg-white rounded-2xl p-12 mb-16 shadow-xl text-center">
              <h3 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                What if a child could earn more for their family by learning algebra than by working in a field?
              </h3>
            </div>

            {/* Hero Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-16">
              <Image src="/african-student-looking-at-computer-screen-in-inte.jpg" alt="Student learning in café" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent flex items-end p-8">
                <p className="text-white text-2xl font-bold">A Scalable Platform that Pays Students for Mastery</p>
              </div>
            </div>

            {/* The Problem */}
            <div className="mb-20">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Problem: <span className="text-secondary">The Opportunity Cost of School</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For millions of families in rural Africa, the biggest barrier to education isn't a lack of schools or a
                lack of ambition. It's economics. When a child is in a classroom, they are not on the farm or in the
                market contributing to the family's daily survival.
              </p>
              <p className="text-xl font-semibold text-primary">
                The long-term ROI of education feels abstract when the short-term need for income is concrete.
                Traditional aid models have tried to solve this with infrastructure. We believe the solution lies in
                aligning incentives.
              </p>
            </div>

            {/* The Solution */}
            <div className="mb-20">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Solution: <span className="text-secondary">A "Learn-to-Earn" Ecosystem</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our model is built on a simple but revolutionary premise:{" "}
                <strong>pay students directly and instantly for learning</strong>.
              </p>

              <div className="grid gap-6">
                <CafeStepCard
                  number="1"
                  icon={<BookOpen className="w-8 h-8" />}
                  title="The Platform"
                  description="We license a world-class adaptive learning platform (like 2hr Learning's Timeback) that allows a student to achieve mastery in 2 hours a day."
                />
                <CafeStepCard
                  number="2"
                  icon={<MapPin className="w-8 h-8" />}
                  title="The Venue"
                  description="We don't build schools. We partner with existing internet café entrepreneurs, turning their sunk costs into a new, stable revenue stream. They become our distributed sales and operations force."
                />
                <CafeStepCard
                  number="3"
                  icon={<Target className="w-8 h-8" />}
                  title="The Transaction"
                  description="When a student masters a concept (e.g., completes a math module with ≥90% accuracy), a 'mastery event' is recorded. This triggers an API call."
                />
                <CafeStepCard
                  number="4"
                  icon={<Smartphone className="w-8 h-8" />}
                  title="The Payout"
                  description="An instant, fractional mobile money payment is sent directly to the student or their family's wallet."
                />
              </div>

              <div className="mt-12 bg-gradient-to-r from-secondary to-secondary/80 text-white rounded-2xl p-8 text-center">
                <Zap className="w-16 h-16 mx-auto mb-4" />
                <h4 className="text-2xl md:text-3xl font-bold mb-4">School is No Longer a Cost—It's a Job</h4>
                <p className="text-lg opacity-90">
                  The incentive for every party is perfectly aligned: the student learns, the family earns, the café
                  owner profits, and our platform scales.
                </p>
              </div>
            </div>

            {/* Economic Model */}
            <div className="bg-white rounded-2xl p-8 md:p-12 mb-20 shadow-xl">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Economic Model: <span className="text-accent">A Blended, Sustainable System</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                This isn't just philanthropy; it's a self-perpetuating economic engine.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-primary/5 rounded-xl p-6">
                  <Award className="w-10 h-10 text-primary mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-2">Funding Sources</h4>
                  <p className="text-muted-foreground">
                    Blended finance: elite African private schools, Western donors, and government co-pays.
                  </p>
                </div>
                <div className="bg-secondary/5 rounded-xl p-6">
                  <TrendingUp className="w-10 h-10 text-secondary mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-2">Cross-Subsidy Engine</h4>
                  <p className="text-muted-foreground">
                    Net revenue from each US DLA student covers the full annual cost for 8-12 Ugandan learners.
                  </p>
                </div>
                <div className="bg-accent/5 rounded-xl p-6">
                  <DollarSign className="w-10 h-10 text-accent mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-2">Unit Economics</h4>
                  <p className="text-muted-foreground">
                    On track to reduce cost per learner from $150/year to $100/year with full transparency.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-secondary text-white rounded-2xl p-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Partner with a Proven Model</h3>
              <p className="text-xl mb-8 opacity-90">Research-ready. Scalable. Designed for rigorous evaluation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/survey">
                  <Button size="lg" className="bg-white text-secondary hover:bg-white/90 font-semibold">
                    Discuss Partnership
                  </Button>
                </Link>
                <Link href="/twenty-year-vision-comprehensive" target="_blank">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    Read Technical Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Two Programs. <span className="text-secondary">One Ecosystem.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              The DLA Immersion program and Uganda Café Partnership work together to create a self-sustaining cycle of
              opportunity and impact.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ImpactCard
                number="1,200"
                label="Net revenue per US student"
                icon={<DollarSign className="w-8 h-8" />}
                color="accent"
              />
              <ImpactCard
                number="8-12"
                label="Ugandan learners funded per US student"
                icon={<Users className="w-8 h-8" />}
                color="secondary"
              />
              <ImpactCard
                number="100K"
                label="Learner network goal in 5 years"
                icon={<Target className="w-8 h-8" />}
                color="primary"
              />
            </div>

            <div className="bg-gradient-to-br from-primary via-secondary to-accent text-white rounded-2xl p-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">The Power of Connection</h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Every US family choosing DLA Immersion creates educational opportunities for dozens of Ugandan students.
                Every Ugandan learner mastering skills through the Café Partnership strengthens the local ecosystem that
                makes immersion possible. This is education reimagined as a force multiplier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="join" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">Be Part of the Movement</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Whether you're a parent, educator, philanthropist, or tech partner—there's a place for you in this
              revolution.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <InvolvementCard
                title="For Parents"
                description="Give your child an unfair advantage. Join our waitlist for upcoming cohorts."
                cta="Join Waitlist"
                href="/survey"
              />
              <InvolvementCard
                title="For School Leaders"
                description="Partner with us to offer a transformative global program."
                cta="Explore Partnership"
                href="/survey"
              />
              <InvolvementCard
                title="For Philanthropists"
                description="Provide seed funding to launch our first cohort of Global Builders."
                cta="Discuss Funding"
                href="/survey"
              />
              <InvolvementCard
                title="For Tech Partners"
                description="Help us scale the Learn-to-Earn platform with your technology."
                cta="Partner with Us"
                href="/survey"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-[50px] h-[50px] relative">
                <Image src={DLALogo || "/placeholder.svg"} alt="DLA Logo" fill className="object-contain" />
              </div>
              <span className="font-semibold text-lg">Douglass Leadership Academy</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/evolution" className="hover:text-accent transition-colors">
                DLA Evolution
              </Link>
              <Link href="/twenty-year-vision-abridged" className="hover:text-accent transition-colors">
                20-Year Vision (Abridged)
              </Link>
              <Link href="/twenty-year-vision-comprehensive" className="hover:text-accent transition-colors">
                20-Year Vision (Full)
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms & Conditions
              </Link>
            </div>
            <p className="text-white/60">&copy; 2025 DLA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Component helpers
function ImmersionCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: "primary" | "secondary"
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all ${
        color === "primary" ? "border-l-4 border-primary" : "border-l-4 border-secondary"
      }`}
    >
      <div className={`${color === "primary" ? "text-primary" : "text-secondary"} mb-4`}>{icon}</div>
      <h4 className="text-xl font-bold text-foreground mb-2">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}

function CafeStepCard({
  number,
  icon,
  title,
  description,
}: {
  number: string
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-6"
    >
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold">
          {number}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="text-secondary">{icon}</div>
          <h4 className="text-xl font-bold text-foreground">{title}</h4>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}

function ImpactCard({
  number,
  label,
  icon,
  color,
}: {
  number: string
  label: string
  icon: React.ReactNode
  color: "primary" | "secondary" | "accent"
}) {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`${colorClasses[color]} rounded-xl p-8`}
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <div className="text-5xl font-bold mb-2">{number}</div>
      <div className="text-lg font-medium opacity-80">{label}</div>
    </motion.div>
  )
}

function InvolvementCard({
  title,
  description,
  cta,
  href,
}: {
  title: string
  description: string
  cta: string
  href: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
    >
      <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Link href={href}>
        <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold">
          {cta}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    </motion.div>
  )
}
