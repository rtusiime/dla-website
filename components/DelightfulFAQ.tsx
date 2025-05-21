"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    question: "Why 'Douglass' Leadership Academy?",
    answer:
      "Named after Frederick Douglass, one of the most influential African Americans in history, our academy embodies his legacy of education as a path to freedom and opportunity. Like Douglass, we believe in the transformative power of education to break cycles of poverty and create new possibilities.",
  },
  {
    question: "Why Próspera, Honduras?",
    answer:
      "Próspera offers an ideal combination of fast-moving governance, strong infrastructure, legal clarity, and proximity to the United States (just a 7-hour flight from NYC). This location allows us to provide a world-class education at a fraction of U.S. costs while offering students a transformative global experience.",
  },
  {
    question: "How does the community nomination process work?",
    answer:
      "Each ZIP code selects a 'Douglass Leader' (ages 14-17) who receives a transformative education and returns equipped to lead back home. This approach ensures that resources return to communities and creates a network of future leaders across the country.",
  },
  {
    question: "How is the program funded?",
    answer:
      "Our program is fully funded through U.S. school vouchers and Education Savings Accounts (ESAs). By operating in a low-cost region, we can provide a premium education experience at approximately 1/6 of U.S. costs, making it sustainable without requiring additional philanthropy.",
  },
  {
    question: "What curriculum do you use?",
    answer:
      "We use a mastery-based curriculum through the Khan Schools Network, complemented by ASU Prep Global for accreditation. This approach ensures students truly understand concepts before moving forward, while also providing recognized credentials for college admissions.",
  },
  {
    question: "How do you maintain family connections?",
    answer:
      "We facilitate regular video calls, provide real-time updates, and support family visits. Our staff is available 24/7 to address any concerns, and we create a family-like atmosphere through dedicated mentorship and support staff who provide personalized attention to each student.",
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
          className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-gold-500"
        >
          <button
            className="w-full p-4 text-left flex justify-between items-center focus:outline-none"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <span className="text-lg font-semibold text-navy-800">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-gold-500 transition-transform duration-300 ${
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
                <div className="p-4 bg-navy-50">
                  <p className="text-navy-700">{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
