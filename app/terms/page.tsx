"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, Book, Glasses, Globe, Users, Shield, Scale, Newspaper, Plane, Heart, MessageCircle, AlertCircle, XCircle } from "lucide-react"

const sections = [
  {
    icon: <Book className="w-8 h-8" />,
    title: "Introduction",
    content: `Welcome to Douglass Leadership Academy ("DLA," "we," "our," or "us"). These Terms and Conditions govern your access to and use of douglassleadershipacademy.org and all services provided by DLA, including educational placement, travel arrangements, and student support services. By accessing or using our Services, you agree to be bound by these Terms.`
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Services",
    content: `DLA facilitates educational opportunities for eligible American students at partner schools in East Africa. Our Services include educational placement services, assistance with visa and travel documentation, student orientation programs, ongoing support services, parent communication services, health insurance coordination, and travel arrangements.`
  },
  {
    icon: <Glasses className="w-8 h-8" />,
    title: "Eligibility",
    content: `To be eligible for our Services, students must be legal residents of the United States, meet age requirements (typically 13-16 years old), have guardian approval, meet partner school admission requirements, qualify for applicable school vouchers or ESAs, pass required medical examinations, and obtain necessary travel documents.`
  },
  {
    icon: <Newspaper className="w-8 h-8" />,
    title: "Application",
    content: `All applications must be submitted through our official channels with complete and accurate information. Submission of an application does not guarantee acceptance into the program. DLA reserves the right to reject any application at our discretion.`
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Travel & Documentation",
    content: `Families are responsible for obtaining and maintaining valid passports, completing visa applications accurately, meeting immunization requirements, obtaining required travel insurance, and following all travel guidelines. DLA will assist with documentation but cannot guarantee visa approval.`
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Health & Safety",
    content: `Families must disclose all relevant medical information. Students must maintain required health insurance coverage. Families must agree to emergency medical procedures when necessary. DLA follows standard safety protocols but cannot guarantee against all risks.`
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Code of Conduct",
    content: `Students must follow all partner school rules, respect local customs and laws, maintain appropriate behavior, and follow DLA policies and guidelines. Failure to meet academic standards or behavioral expectations may result in program termination.`
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Communication",
    content: `Families must maintain current contact information, respond to official communications, participate in scheduled check-ins, and report any concerns promptly. DLA will provide regular updates and maintain emergency contact systems.`
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Privacy",
    content: `We collect and use personal information as outlined in our Privacy Policy. By using our Services, you consent to our data practices. We maintain strict confidentiality standards for all student and family information.`
  },
  {
    icon: <AlertCircle className="w-8 h-8" />,
    title: "Liability",
    content: `DLA is not liable for actions of partner schools, visa denials, travel disruptions, force majeure events, personal injuries, property damage, or academic outcomes. Maximum liability is limited to fees paid for Services.`
  },
  {
    icon: <XCircle className="w-8 h-8" />,
    title: "Termination",
    content: `DLA may terminate services for policy violations, non-payment, false information, behavioral issues, academic failure, or safety concerns. Termination procedures will follow program guidelines as outlined in enrollment agreements.`
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Legal",
    content: `These Terms are governed by the laws of the State of New York, United States. DLA may modify these Terms at any time, with changes posted on the Website. Continued use of Services constitutes acceptance of changes.`
  }
]

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState(0)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
      <Link
        href="/"
        className="fixed top-4 left-4 z-50 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </Link>

      <div className="container mx-auto px-4 py-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Terms and Conditions</h1>
          <p className="text-xl text-white/80">Last Updated: February 23, 2025</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 md:h-[600px] overflow-y-auto pr-4 styled-scrollbar">
            {sections.map((section, index) => (
              <motion.button
                key={index}
                className={`w-full text-left p-4 rounded-lg transition-colors ${
                  activeSection === index ? "bg-white text-primary" : "bg-white/10 text-white hover:bg-white/20"
                }`}
                onClick={() => setActiveSection(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  {section.icon}
                  <span className="text-lg font-semibold">{section.title}</span>
                </div>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {showContent && (
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg p-6 shadow-xl md:h-[600px] overflow-y-auto styled-scrollbar"
              >
                <div className="flex items-center space-x-4 mb-6">
                  {sections[activeSection].icon}
                  <h2 className="text-2xl font-bold text-primary">{sections[activeSection].title}</h2>
                </div>
                <p className="text-secondary/80 leading-relaxed">{sections[activeSection].content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
        >
          <div className="relative w-[600px] h-[600px] opacity-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/updated-final-dla-logo-SKnkVqqdzB7Z98PrRMMwRlATkL9W1D.png"
              alt="DLA Logo"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .styled-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .styled-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .styled-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        .styled-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  )
}
