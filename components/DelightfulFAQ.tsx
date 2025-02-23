"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    question: "Why 'Douglass' Leadership Academy?",
    answer:
      "Named after Frederick Douglass, one of the most influential African Americans in history and a Rochester icon, our academy embodies his legacy of education as a path to freedom and opportunity. Like Douglass, we believe in the transformative power of education to break cycles of poverty and create new possibilities.",
  },
  {
    question: "How do you ensure student safety?",
    answer:
      "Safety is our top priority. Our partner schools are located in secure, established areas with 24/7 security and supervision. East African international schools have a long history of providing safe, nurturing environments for students from around the world.",
  },
  {
    question: "How do you maintain family connections?",
    answer:
      "We facilitate regular video calls, provide real-time updates, and support parent visits. Our staff is available 24/7 to address any concerns. We create a family-like atmosphere through dedicated mentorship and support staff who provide personalized attention to each student.",
  },
  {
    question: "What about medical care?",
    answer:
      "Our partner schools have on-site medical facilities and established relationships with top hospitals in their respective cities. We provide comprehensive health insurance coverage and ensure access to quality healthcare at a fraction of U.S. costs.",
  },
  {
    question: "How does the funding work?",
    answer:
      "We work with families to utilize school choice vouchers, Education Savings Accounts (ESAs), and private scholarships. The total cost, including tuition, room and board, and flights, is significantly lower than comparable U.S. private schools.",
  },
  {
    question: "What about college preparation?",
    answer:
      "Our International Baccalaureate curriculum is recognized worldwide. We provide comprehensive college counseling, SAT/ACT preparation, and support throughout the university application process. Our students are well-prepared for top universities globally.",
  },
]

export const DelightfulFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <button
            className="w-full p-4 text-left flex justify-between items-center focus:outline-none"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <span className="text-lg font-semibold text-primary">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-primary transition-transform duration-300 ${
                activeIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 bg-accent/10">
                  <p className="text-secondary">{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

