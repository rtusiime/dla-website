"use client"

import { motion } from "framer-motion"
import { Rocket, Users, Building } from "lucide-react"

const timelineItems = [
  {
    phase: "Phase One: Pilot Program",
    icon: <Rocket className="w-6 h-6" />,
    items: [
      "Partner with established IB schools",
      "Initial cohort of 10 students",
      "Focus on University of Rochester community",
      "Hands-on support and mentorship",
    ],
  },
  {
    phase: "Phase Two: Growth",
    icon: <Users className="w-6 h-6" />,
    items: [
      "Expand to 50-100 students",
      "Establish dedicated facilities",
      "Build robust support systems",
      "Develop local partnerships",
    ],
  },
  {
    phase: "Phase Three: Full Scale",
    icon: <Building className="w-6 h-6" />,
    items: [
      "Own campus development",
      "Local student scholarships",
      "Community development",
      "Economic impact initiatives",
    ],
  },
]

export function ApproachTimeline() {
  return (
    <div className="relative max-w-4xl mx-auto px-4">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-[2px] h-full bg-primary/20" />

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
              className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white z-10 ${
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
                className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105"
              >
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">{item.phase}</h3>
                <ul className="space-y-3">
                  {item.items.map((listItem, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 + index * 0.3 }}
                      className={`flex items-center ${index % 2 === 0 ? "md:justify-end" : ""} text-secondary/80`}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
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

