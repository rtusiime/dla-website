"use client"

import { motion } from "framer-motion"
import { Rocket, Users, Building } from "lucide-react"

const timelineItems = [
  {
    phase: "Phase One: Pilot Program",
    icon: <Rocket className="w-6 h-6" />,
    items: [
      "Launch in Próspera, Honduras",
      "Initial cohort of 30 students",
      "Mastery-based curriculum via Khan Schools Network",
      "Hands-on support and mentorship",
    ],
  },
  {
    phase: "Phase Two: Growth",
    icon: <Users className="w-6 h-6" />,
    items: [
      "Expand to 100-200 students",
      "Establish dedicated campus facilities",
      "Build robust support systems",
      "Develop local partnerships",
    ],
  },
  {
    phase: "Phase Three: Full Scale",
    icon: <Building className="w-6 h-6" />,
    items: [
      "One student per ZIP code nationwide",
      "Multiple campus locations",
      "Community development initiatives",
      "Economic impact programs",
    ],
  },
]

export function ApproachTimeline() {
  return (
    <div className="relative max-w-4xl mx-auto px-4">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-[2px] h-full bg-gold-300/50" />

      {/* Timeline Items */}
      <div className="relative space-y-12 md:space-y-24">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
          >
            {/* Icon */}
            <div
              className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-white z-10 ${
                index === 0 ? "top-0" : "-top-5"
              }`}
            >
              {item.icon}
            </div>

            {/* Content Card */}
            <div className={`relative ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 border-l-4 border-gold-500"
              >
                <h3 className="text-xl md:text-2xl font-bold text-navy-800 mb-4">{item.phase}</h3>
                <ul className="space-y-3">
                  {item.items.map((listItem, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 + index * 0.3 }}
                      className={`flex items-center ${index % 2 === 0 ? "md:justify-end" : ""} text-navy-700`}
                    >
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2" />
                      <span>{listItem}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
