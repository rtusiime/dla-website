"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, AlertCircle, CheckCircle, Target, Users, Building, Globe } from "lucide-react"

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
      { name: "Primarily Ugandan diaspora kids (US citizens, Christian, conservative families)", critical: false },
      { name: "Collect baseline data: student surveys, parent feedback, academic engagement", critical: true },
      { name: "Document safety protocols and incident response", critical: true },
      { name: "Build relationship with Canon (retiring March 2026) or new HM Sungu/Byaruhanga", critical: true },
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
        mitigation: "Work with Jimmy Rogers (BOG), Chris Luswata (OB Chair), or pivot to different school",
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
      {
        risk: "Political/economic changes",
        mitigation: "Adaptable model; diversified locations; strong local relationships",
      },
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

const PhaseCard = ({ phase, isExpanded, onToggle }: any) => {
  const Icon = phase.icon
  const statusColors = {
    current: "border-blue-500 bg-blue-50",
    upcoming: "border-green-500 bg-green-50",
    future: "border-gray-300 bg-gray-50",
  }

  return (
    <div className={`border-2 rounded-lg p-6 mb-6 ${statusColors[phase.status as keyof typeof statusColors]}`}>
      <div className="flex items-start justify-between cursor-pointer" onClick={onToggle}>
        <div className="flex items-start gap-4 flex-1">
          <div className={`${phase.color} p-3 rounded-full text-white`}>
            <Icon size={24} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold">
                Phase {phase.id}: {phase.name}
              </h3>
              <span className="text-sm px-3 py-1 bg-white rounded-full font-medium">{phase.years}</span>
            </div>
            <p className="text-gray-600 text-sm mb-2">Est. Cost: {phase.estimatedCost}</p>
          </div>
        </div>
        {isExpanded ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
      </div>

      {isExpanded && (
        <div className="mt-6 ml-16 space-y-6">
          <div>
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <CheckCircle size={18} className="text-green-600" />
              Key Milestones
            </h4>
            <ul className="space-y-2">
              {phase.milestones.map((milestone: any, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className={`mt-1 ${milestone.critical ? "text-red-500" : "text-gray-400"}`}>
                    {milestone.critical ? "●" : "○"}
                  </span>
                  <span className={milestone.critical ? "font-medium" : ""}>{milestone.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <AlertCircle size={18} className="text-orange-600" />
              Contingencies & Risk Mitigation
            </h4>
            <div className="space-y-3">
              {phase.contingencies.map((item: any, idx: number) => (
                <div key={idx} className="bg-white p-3 rounded border border-orange-200">
                  <p className="font-medium text-orange-800 mb-1">Risk: {item.risk}</p>
                  <p className="text-sm text-gray-700">→ {item.mitigation}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <Target size={18} className="text-blue-600" />
              Success Metrics
            </h4>
            <div className="flex flex-wrap gap-2">
              {phase.successMetrics.map((metric: string, idx: number) => (
                <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm border border-blue-200">
                  {metric}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function DougglassVisionTimeline() {
  const [expandedPhases, setExpandedPhases] = useState([1])

  const togglePhase = (phaseId: number) => {
    setExpandedPhases((prev) => (prev.includes(phaseId) ? prev.filter((id) => id !== phaseId) : [...prev, phaseId]))
  }

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg p-8 mb-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Douglass Leadership Academy</h1>
        <h2 className="text-2xl text-gray-700 mb-6">20-Year Vision: From Pilot to Charter City</h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="font-bold text-lg mb-3">Core Vision</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Create a world-class boarding school in low-cost-of-living countries (starting with Uganda) that serves
            American students at $15k/year—funded by ESAs, vouchers, and charter dollars—while cross-subsidizing local
            students. Geographic arbitrage enables Brooks-quality education at a fraction of US costs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Why:</strong> Transform outcomes for students from under-resourced communities by removing them from
            high-violence, low-opportunity environments and placing them in academically rigorous, culturally enriching
            settings alongside high-achieving peers.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 p-4 rounded border border-green-200">
            <div className="text-2xl font-bold text-green-700">$15k/year</div>
            <div className="text-sm text-gray-600">
              Target cost per American student (vs $70k+ at US boarding schools)
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded border border-purple-200">
            <div className="text-2xl font-bold text-purple-700">2:1 Model</div>
            <div className="text-sm text-gray-600">2 Americans fund 1 local student's education</div>
          </div>
          <div className="bg-orange-50 p-4 rounded border border-orange-200">
            <div className="text-2xl font-bold text-orange-700">5,000 students</div>
            <div className="text-sm text-gray-600">Ultimate scale anchoring charter city with full infrastructure</div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <p className="text-sm text-gray-700">
            <strong>Timeline Philosophy:</strong> This is a marathon requiring continuous stakeholder buy-in, data
            collection, and adaptation. Each phase builds proof-of-concept for the next. Missing windows (like July
            2026) sets the vision back 1-2 years.
          </p>
        </div>
      </div>

      <div className="mb-6 flex gap-4">
        <button
          onClick={() => setExpandedPhases(phases.map((p) => p.id))}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Expand All
        </button>
        <button
          onClick={() => setExpandedPhases([])}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
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

      <div className="bg-white rounded-lg p-8 mt-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Critical Success Factors (All Phases)</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold mb-2">Relationships & Trust</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Buddo/partner school leadership (Canon, Sungu, Byaruhanga)</li>
              <li>• OB network (Chris Luswata, Jimmy Rogers, Konga Panga)</li>
              <li>• US institutional partners for credibility</li>
              <li>• Parent community (diaspora → Rochester families)</li>
            </ul>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold mb-2">Data & Proof Points</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Student safety (0 incidents)</li>
              <li>• Parent satisfaction (85%+)</li>
              <li>• Academic outcomes vs. control groups</li>
              <li>• College acceptance & graduation rates</li>
            </ul>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-bold mb-2">Regulatory Navigation</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Charter authorization (state-specific)</li>
              <li>• State Dept travel advisories</li>
              <li>• Immigration/visa issues (both directions)</li>
              <li>• Title IX / discrimination law</li>
            </ul>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-bold mb-2">Financial Sustainability</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• ESA/voucher access & portability</li>
              <li>• Charter school per-pupil funding</li>
              <li>• Philanthropic bridge funding (CCI, foundations)</li>
              <li>• Unit economics at scale</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-bold mb-3 text-red-800">Major Decision Points</h3>
        <div className="space-y-3 text-sm">
          <div className="bg-white p-3 rounded">
            <strong>2026:</strong> If Buddo declines or July pilot fails → Pivot to Kenya (Alliance) or wait for new
            Buddo HM
          </div>
          <div className="bg-white p-3 rounded">
            <strong>2028:</strong> If credit transfer proves impossible → Must launch own accredited school or partner
            with charter network
          </div>
          <div className="bg-white p-3 rounded">
            <strong>2030:</strong> If charter authorization denied → Operate as private school or relocate to friendlier
            state (FL, TX, AZ)
          </div>
          <div className="bg-white p-3 rounded">
            <strong>2032:</strong> If LGBTQ+ issues create liability → Move to own campus or partner with explicitly
            Christian network
          </div>
          <div className="bg-white p-3 rounded">
            <strong>2035:</strong> If Uganda becomes unstable → Activate backup locations (Kenya, Botswana, Honduras
            special zone)
          </div>
        </div>
      </div>
    </div>
  )
}
