"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight, AlertCircle, CheckCircle, Target, Users, Building, Globe, Rocket } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/Navigation"

const phases = [
  {
    id: 1,
    name: "Foundation Building",
    years: "2025-2026",
    status: "current",
    icon: Target,
    color: "bg-blue-500",
    milestones: [
      { name: "Secure Buddo partnership agreement", critical: true },
      { name: "Establish LLC/organizational structure", critical: true },
      { name: "Create marketing materials & application process", critical: true },
      { name: "Build relationship with Ugandan diaspora community (Boston, Waltham, NJ)", critical: false },
      { name: "Develop insurance & liability framework", critical: true },
    ],
    contingencies: [
      {
        risk: "Buddo declines partnership",
        mitigation: "Pivot to other schools: Alliance (Kenya), St. Mary's Kitende, or Prospera Honduras route",
      },
      {
        risk: "Can't secure institutional credibility",
        mitigation: "Partner with established exchange org in Boston for first cohort",
      },
      {
        risk: "Trump immigration restrictions worsen",
        mitigation: "Focus on Ugandan diaspora kids (US citizens) only for Phase 1",
      },
    ],
    successMetrics: [
      "Signed MOU with host school",
      "5-12 families committed",
      "Legal structure complete",
      "Chaperone/coordinator hired",
    ],
    estimatedCost: "$25,000-50,000",
  },
  {
    id: 2,
    name: "Pilot Program Launch",
    years: "Summer 2026",
    status: "upcoming",
    icon: Users,
    color: "bg-green-500",
    milestones: [
      { name: "Execute first 6-week summer program with 5-12 students", critical: true },
      {
        name: "Primarily Ugandan diaspora kids (US citizens, Christian, conservative families)",
        critical: false,
      },
      { name: "Collect baseline data: student surveys, parent feedback, academic engagement", critical: true },
      { name: "Document safety protocols and incident response", critical: true },
      {
        name: "Build relationship with Canon (retiring March 2026) or new HM Sungu/Byaruhanga",
        critical: true,
      },
    ],
    contingencies: [
      {
        risk: "Low enrollment",
        mitigation: "Expand marketing to private schools in NJ, MA interested in exchange programs",
      },
      {
        risk: "Safety incident",
        mitigation: "SOS insurance, clear medical protocols, immediate communication plan with families",
      },
      { risk: "Parents pull out last minute", mitigation: "Require 50% non-refundable deposit 3 months prior" },
      {
        risk: "Canon leaves, new HM not supportive",
        mitigation: "Work with Board of Governors and Old Boys network leadership, or pivot to different school",
      },
    ],
    successMetrics: [
      "85%+ parent satisfaction",
      "0 major safety incidents",
      "Students want to return",
      "Buddo willing to continue partnership",
    ],
    estimatedCost: "$3,500 per student (airfare, insurance, program fee to Buddo, chaperone costs)",
  },
  {
    id: 3,
    name: "Program Expansion & Iteration",
    years: "2026-2028",
    status: "upcoming",
    icon: Users,
    color: "bg-green-600",
    milestones: [
      { name: "Scale to 20-25 students per year", critical: false },
      { name: "Add fall/spring semester option (3 months) for select students", critical: true },
      { name: "Develop curriculum integration (LMS for credit transfer)", critical: true },
      { name: "Begin data collection on academic outcomes vs. control group", critical: true },
      {
        name: "Expand beyond diaspora to include Rochester School District students on scholarship",
        critical: true,
      },
    ],
    contingencies: [
      {
        risk: "Credit transfer issues with US schools",
        mitigation:
          "Develop partnerships with specific charter schools; use accredited online curriculum (Khan Academy, Socratic Experience)",
      },
      {
        risk: "Buddo resists curriculum changes",
        mitigation:
          "Keep US curriculum separate initially; students attend Buddo classes but earn US credits through parallel LMS",
      },
      {
        risk: "Rochester families can't afford $15k",
        mitigation: "Secure foundation funding from CCI contacts; apply for charter school planning grants",
      },
    ],
    successMetrics: [
      "50+ students served cumulatively",
      "Credit transfer working smoothly",
      "1-2 Rochester students successfully complete program",
      "Academic improvement data showing promise",
    ],
    estimatedCost: "$150,000-300,000/year",
  },
  {
    id: 4,
    name: "Full-Year Program & Charter Authorization",
    years: "2028-2030",
    status: "future",
    icon: Building,
    color: "bg-purple-500",
    milestones: [
      { name: "Launch 4-year high school program at partner campus", critical: true },
      { name: "Secure charter school authorization in US state (MA, NY, or TX)", critical: true },
      { name: "Establish steady funding: $15k/student from ESAs, vouchers, charter funds", critical: true },
      { name: "Enroll 50-75 full-time American students", critical: false },
      { name: "Cross-subsidize 25-35 Ugandan students at $2-3k/year", critical: false },
      { name: "Demonstrate academic outcomes: 95%+ graduation rate, college acceptance", critical: true },
    ],
    contingencies: [
      {
        risk: "Charter authorization denied",
        mitigation:
          "Partner with existing charter network (KIPP, Success Academy); operate as private school initially",
      },
      {
        risk: "LGBTQ+ issues create legal liability",
        mitigation: "Move to own campus with explicit values alignment; partner with Christian charter networks",
      },
      {
        risk: "State Dept raises Uganda to Level 3/4",
        mitigation: "Have backup location ready (Botswana, Ghana, Honduras); diversify across 2-3 countries",
      },
      {
        risk: "Parents uncomfortable sending kids abroad for 4 years",
        mitigation: "Offer 2-year option; robust family communication; annual US visits",
      },
    ],
    successMetrics: [
      "Charter authorized",
      "75+ students enrolled",
      "Break-even financially",
      "Academic outcomes exceed US averages",
      "College acceptance 90%+",
    ],
    estimatedCost: "$1.5-3M/year operating budget",
  },
  {
    id: 5,
    name: "Independent Campus Development",
    years: "2030-2035",
    status: "future",
    icon: Building,
    color: "bg-orange-500",
    milestones: [
      { name: "Secure land in Uganda (or alternative location)", critical: true },
      { name: "Raise $10-20M in capital for campus construction", critical: true },
      { name: "Build facilities: dorms, classrooms, dining, sports, medical, admin", critical: true },
      { name: "Scale to 300-500 students", critical: false },
      { name: "Establish own values/policies independent of host school", critical: true },
      { name: "Develop teacher recruitment pipeline (Ugandan + American educators)", critical: true },
    ],
    contingencies: [
      {
        risk: "Can't raise capital",
        mitigation: "Lease existing facilities; partner with Ugandan developers; phase construction over 5 years",
      },
      {
        risk: "Regulatory challenges in Uganda",
        mitigation: "Work with Ministry of Education; consider Prospera-style special economic zone",
      },
      {
        risk: "Can't recruit quality teachers",
        mitigation: "Partner with Teach for America/Uganda; offer competitive packages; remote teaching hybrid",
      },
      {
        risk: "Political instability in Uganda",
        mitigation: "Have parallel campus in Kenya or Botswana; portable model",
      },
    ],
    successMetrics: [
      "Own campus operational",
      "500+ students",
      "Teacher retention 80%+",
      "Financially sustainable",
      "Industry-leading outcomes",
    ],
    estimatedCost: "$10-20M capital + $5-8M/year operating",
  },
  {
    id: 6,
    name: "Scale to Multi-Campus Network",
    years: "2035-2040",
    status: "future",
    icon: Globe,
    color: "bg-red-500",
    milestones: [
      { name: "Expand to 1,000-2,000 students across 2-3 campuses", critical: false },
      { name: "Open campuses in Kenya, Botswana, or Honduras", critical: false },
      { name: "Develop alumni network & college counseling pipeline", critical: true },
      { name: "Create teacher training institute", critical: false },
      { name: "Launch post-secondary programs (community college, vocational)", critical: false },
    ],
    contingencies: [
      {
        risk: "Quality dilutes with scale",
        mitigation: "Franchise model with strict quality controls; intensive training program",
      },
      {
        risk: "Loses founding mission",
        mitigation: "Maintain 2:1 American:local ratio; keep scholarship access for low-income Americans",
      },
      {
        risk: "Regulatory backlash (cross-border education)",
        mitigation: "Work with US Dept of Ed; establish precedent through success",
      },
    ],
    successMetrics: [
      "2,000+ students",
      "Multiple successful campuses",
      "Alumni attending top colleges",
      "Featured in major media",
      "Influencing education policy",
    ],
    estimatedCost: "$30-50M/year operating",
  },
  {
    id: 7,
    name: "Charter City Vision",
    years: "2040-2045",
    status: "future",
    icon: Globe,
    color: "bg-indigo-500",
    milestones: [
      { name: "Scale to 5,000-student flagship campus", critical: false },
      { name: "Develop surrounding infrastructure: solar plant, farms, housing", critical: false },
      { name: "Create job opportunities for local community", critical: true },
      { name: "Attract other institutions, businesses to location", critical: false },
      { name: "Model becomes proof-of-concept for geographic arbitrage in education", critical: true },
    ],
    contingencies: [
      {
        risk: "Can't reach critical mass",
        mitigation: "5,000 may not be necessary - even 2,000 creates significant impact",
      },
      {
        risk: "Becomes isolated enclave",
        mitigation: "Intentional community integration; hire locally; cultural exchange programs",
      },
      { risk: "Political/economic changes", mitigation: "Adaptable model; diversified locations; strong local relationships" },
    ],
    successMetrics: [
      "Major economic impact on region",
      "Model replicated by others",
      "Industry-standard for international education",
      "Transformed thousands of lives",
    ],
    estimatedCost: "$100M+ total investment",
  },
]

function PhaseCard({ phase, isExpanded, onToggle }: any) {
  const Icon = phase.icon
  const statusColors = {
    current: "border-gold-500 bg-gold-50",
    upcoming: "border-blue-500 bg-blue-50",
    future: "border-navy-300 bg-navy-50",
  }

  return (
    <motion.div
      className={`border-2 rounded-xl p-6 mb-6 ${statusColors[phase.status]} backdrop-blur-sm`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start justify-between cursor-pointer" onClick={onToggle}>
        <div className="flex items-start gap-4 flex-1">
          <motion.div
            className={`${phase.color} p-3 rounded-full text-white`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Icon size={24} />
          </motion.div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h3 className="text-xl font-bold text-navy-900">
                Phase {phase.id}: {phase.name}
              </h3>
              <span className="text-sm px-3 py-1 bg-white rounded-full font-medium text-navy-700 border border-gold-200">
                {phase.years}
              </span>
            </div>
            <p className="text-navy-600 text-sm mb-2">Est. Cost: {phase.estimatedCost}</p>
          </div>
        </div>
        <motion.div animate={{ rotate: isExpanded ? 0 : -90 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={24} className="text-navy-700" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="mt-6 ml-16 space-y-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2 text-navy-900">
                <CheckCircle size={18} className="text-green-600" />
                Key Milestones
              </h4>
              <ul className="space-y-2">
                {phase.milestones.map((milestone: any, idx: number) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <span className={`mt-1 ${milestone.critical ? "text-gold-500" : "text-navy-400"}`}>
                      {milestone.critical ? "●" : "○"}
                    </span>
                    <span className={milestone.critical ? "font-medium text-navy-900" : "text-navy-700"}>
                      {milestone.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2 text-navy-900">
                <AlertCircle size={18} className="text-orange-600" />
                Contingencies & Risk Mitigation
              </h4>
              <div className="space-y-3">
                {phase.contingencies.map((item: any, idx: number) => (
                  <motion.div
                    key={idx}
                    className="bg-white p-4 rounded-lg border border-orange-200 shadow-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <p className="font-medium text-orange-800 mb-1">Risk: {item.risk}</p>
                    <p className="text-sm text-navy-700">→ {item.mitigation}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2 text-navy-900">
                <Target size={18} className="text-blue-600" />
                Success Metrics
              </h4>
              <div className="flex flex-wrap gap-2">
                {phase.successMetrics.map((metric: string, idx: number) => (
                  <motion.span
                    key={idx}
                    className="bg-white px-3 py-1 rounded-full text-sm border border-gold-200 text-navy-700"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {metric}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function VisionPage() {
  const [expandedPhases, setExpandedPhases] = useState([1])

  const togglePhase = (phaseId: number) => {
    setExpandedPhases((prev) => (prev.includes(phaseId) ? prev.filter((id) => id !== phaseId) : [...prev, phaseId]))
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={true} />

      {/* Hero Section */}
      <section className="relative py-24 navy-gradient overflow-hidden">
        <div className="absolute inset-0 star-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="gold-gradient">20-Year Vision</span>
            </h1>
            <h2 className="text-3xl md:text-4xl text-white/90 mb-6">From Pilot to Charter City</h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              A comprehensive roadmap for building a world-class boarding school network that transforms education
              through geographic arbitrage
            </p>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-md border-l-4 border-gold-500 rounded-lg p-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-bold text-2xl mb-4 text-white">Core Vision</h3>
            <p className="text-white/90 leading-relaxed mb-4">
              Create a world-class boarding school in low-cost-of-living countries (starting with Uganda) that serves
              American students at $15k/year—funded by ESAs, vouchers, and charter dollars—while cross-subsidizing
              local students. Geographic arbitrage enables Phillips-Exeter-quality education at a fraction of US costs.
            </p>
            <p className="text-white/90 leading-relaxed">
              <strong className="text-gold-300">Why:</strong> Transform outcomes for students from under-resourced
              communities by removing them from high-violence, low-opportunity environments and placing them in
              academically rigorous, culturally enriching settings alongside high-achieving peers.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-xl border-t-4 border-green-500">
              <div className="text-4xl font-bold gold-gradient mb-2">$15k/year</div>
              <div className="text-sm text-navy-700">
                Target cost per American student (vs $70k+ at US boarding schools)
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-xl border-t-4 border-purple-500">
              <div className="text-4xl font-bold gold-gradient mb-2">2:1 Model</div>
              <div className="text-sm text-navy-700">2 Americans fund 1 local student's education</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-xl border-t-4 border-orange-500">
              <div className="text-4xl font-bold gold-gradient mb-2">5,000 students</div>
              <div className="text-sm text-navy-700">Ultimate scale anchoring charter city with full infrastructure</div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gold-500/20 backdrop-blur-md border-l-4 border-gold-500 rounded-lg p-6 max-w-5xl mx-auto mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-white/90">
              <strong className="text-gold-300">Timeline Philosophy:</strong> This is a marathon requiring continuous
              stakeholder buy-in, data collection, and adaptation. Each phase builds proof-of-concept for the next.
              Missing windows (like July 2026) sets the vision back 1-2 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-navy-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8 flex gap-4 justify-center">
            <button
              onClick={() => setExpandedPhases(phases.map((p) => p.id))}
              className="px-6 py-3 bg-navy-800 text-white rounded-lg hover:bg-navy-700 transition font-medium shadow-lg"
            >
              Expand All
            </button>
            <button
              onClick={() => setExpandedPhases([])}
              className="px-6 py-3 bg-navy-600 text-white rounded-lg hover:bg-navy-500 transition font-medium shadow-lg"
            >
              Collapse All
            </button>
          </div>

          <div className="space-y-4">
            {phases.map((phase) => (
              <PhaseCard
                key={phase.id}
                phase={phase}
                isExpanded={expandedPhases.includes(phase.id)}
                onToggle={() => togglePhase(phase.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Critical Success Factors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="bg-white rounded-xl shadow-2xl p-8 border-t-4 border-gold-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 text-navy-900 text-center">Critical Success Factors (All Phases)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-6 rounded-r-lg">
                <h4 className="font-bold mb-4 text-navy-900 text-xl">Relationships & Trust</h4>
                <ul className="space-y-2 text-navy-700">
                  <li>• Buddo/partner school leadership (Canon, Sungu, Byaruhanga)</li>
                  <li>• Old Boys network and Board of Governors leadership</li>
                  <li>• US institutional partners for credibility</li>
                  <li>• Parent community (diaspora → Rochester families)</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-6 bg-green-50 p-6 rounded-r-lg">
                <h4 className="font-bold mb-4 text-navy-900 text-xl">Data & Proof Points</h4>
                <ul className="space-y-2 text-navy-700">
                  <li>• Student safety (0 incidents)</li>
                  <li>• Parent satisfaction (85%+)</li>
                  <li>• Academic outcomes vs. control groups</li>
                  <li>• College acceptance & graduation rates</li>
                </ul>
              </div>
              <div className="border-l-4 border-purple-500 pl-6 bg-purple-50 p-6 rounded-r-lg">
                <h4 className="font-bold mb-4 text-navy-900 text-xl">Regulatory Navigation</h4>
                <ul className="space-y-2 text-navy-700">
                  <li>• Charter authorization (state-specific)</li>
                  <li>• State Dept travel advisories</li>
                  <li>• Immigration/visa issues (both directions)</li>
                  <li>• Title IX / discrimination law</li>
                </ul>
              </div>
              <div className="border-l-4 border-orange-500 pl-6 bg-orange-50 p-6 rounded-r-lg">
                <h4 className="font-bold mb-4 text-navy-900 text-xl">Financial Sustainability</h4>
                <ul className="space-y-2 text-navy-700">
                  <li>• ESA/voucher access & portability</li>
                  <li>• Charter school per-pupil funding</li>
                  <li>• Philanthropic bridge funding (CCI, foundations)</li>
                  <li>• Unit economics at scale</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Major Decision Points */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="bg-navy-800 border-2 border-gold-500 rounded-xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 gold-gradient text-center">Major Decision Points</h3>
            <div className="space-y-4">
              <div className="bg-navy-700 p-4 rounded-lg border-l-4 border-gold-500">
                <strong className="text-gold-300">2026:</strong>{" "}
                <span className="text-white/90">
                  If Buddo declines or July pilot fails → Pivot to Kenya (Alliance) or wait for new Buddo HM
                </span>
              </div>
              <div className="bg-navy-700 p-4 rounded-lg border-l-4 border-gold-500">
                <strong className="text-gold-300">2028:</strong>{" "}
                <span className="text-white/90">
                  If credit transfer proves impossible → Must launch own accredited school or partner with charter
                  network
                </span>
              </div>
              <div className="bg-navy-700 p-4 rounded-lg border-l-4 border-gold-500">
                <strong className="text-gold-300">2030:</strong>{" "}
                <span className="text-white/90">
                  If charter authorization denied → Operate as private school or relocate to friendlier state (FL, TX,
                  AZ)
                </span>
              </div>
              <div className="bg-navy-700 p-4 rounded-lg border-l-4 border-gold-500">
                <strong className="text-gold-300">2032:</strong>{" "}
                <span className="text-white/90">
                  If LGBTQ+ issues create liability → Move to own campus or partner with explicitly Christian network
                </span>
              </div>
              <div className="bg-navy-700 p-4 rounded-lg border-l-4 border-gold-500">
                <strong className="text-gold-300">2035:</strong>{" "}
                <span className="text-white/90">
                  If Uganda becomes unstable → Activate backup locations (Kenya, Botswana, Honduras special zone)
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-navy-900 mb-6">Ready to Be Part of This Vision?</h3>
            <p className="text-lg text-navy-700 mb-8">
              Join us in transforming education and creating opportunities for the next generation of leaders.
            </p>
            <Link href="/">
              <button className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold rounded-lg shadow-xl transition-all hover:scale-105">
                Return to Homepage
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
