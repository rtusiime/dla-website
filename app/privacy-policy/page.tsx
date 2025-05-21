"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, Shield, Lock, Eye, FileText, Bell, RefreshCw, Mail } from "lucide-react"

const sections = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Introduction",
    content:
      "At Douglass Leadership Academy (DLA), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Information We Collect",
    content:
      "We collect personal information that you voluntarily provide to us when you express interest in our programs, register for our newsletter, or contact us. This may include your name, email address, phone number, and any other information you choose to provide. We also automatically collect certain information when you visit our website, including your IP address, browser type, referring/exit pages, and operating system.",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "How We Use Your Information",
    content:
      "We use your information to communicate with you, process applications, improve our services, send periodic emails, and better understand your needs. We may also use your information to comply with legal obligations, resolve disputes, and enforce our policies.",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Data Protection",
    content:
      "We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.",
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: "Cookies and Tracking",
    content:
      "We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Third-Party Services",
    content:
      "Our website may contain links to third-party websites or services that are not owned or controlled by DLA. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.",
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Contact Us",
    content:
      "If you have any questions about this Privacy Policy, please contact us through our website contact form or by email at privacy@douglassleadershipacademy.org.",
  },
]

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(0)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B7355] via-[#5D4C39] to-[#2C2416] overflow-hidden">
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
          className="relative z-10 text-center mb-16"
        >
          {/* Enhanced heading with gradient overlay and animation */}
          <div className="relative">
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Privacy Policy
            </motion.h1>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 animate-gradient" />
          </div>

          <motion.p
            className="text-xl md:text-2xl text-white/90 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            How we protect and respect your data
          </motion.p>

          {/* Decorative lines */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full mt-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {sections.map((section, index) => (
              <motion.button
                key={index}
                className={`w-full text-left p-4 rounded-lg backdrop-blur-sm transition-all ${
                  activeSection === index
                    ? "bg-white text-primary shadow-lg shadow-white/10"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
                onClick={() => setActiveSection(index)}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: activeSection === index ? "#fff" : "rgba(255,255,255,0.2)",
                }}
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
                className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-xl"
              >
                <h2 className="text-2xl font-bold text-primary mb-4">{sections[activeSection].title}</h2>
                <p className="text-secondary/80">{sections[activeSection].content}</p>

                {activeSection === 0 && (
                  <div className="mt-4 text-sm text-secondary/70">
                    <p>Last Updated: May 21, 2025</p>
                  </div>
                )}

                {activeSection === 6 && (
                  <div className="mt-6 p-4 bg-navy-50 rounded-lg">
                    <h3 className="font-semibold text-navy-800 mb-2">Contact Information</h3>
                    <p className="text-navy-700">
                      Douglass Leadership Academy
                      <br />
                      Email: privacy@douglassleadershipacademy.org
                      <br />
                      Website: www.douglassleadershipacademy.org
                    </p>
                  </div>
                )}
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
          <div className="relative w-[800px] h-[800px] opacity-5">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/updated-final-dla-logo-SKnkVqqdzB7Z98PrRMMwRlATkL9W1D.png"
              alt="DLA Logo"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
