"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ArrowRight } from "lucide-react"
import Image from "next/image"

// Hypothetical stories of future leaders
const leaderStories = [
  {
    name: "Jamal",
    zipCode: "19121",
    location: "North Philadelphia, PA",
    dream: "To bring tech education to his neighborhood",
    quote: "Where I'm from, kids don't see tech as an option. I want to change that narrative.",
    position: { top: "30%", left: "82%" },
  },
  {
    name: "Maria",
    zipCode: "90011",
    location: "South Los Angeles, CA",
    dream: "To create affordable housing solutions",
    quote: "My community deserves safe, dignified homes. I'll build them.",
    position: { top: "42%", left: "15%" },
  },
  {
    name: "DeShawn",
    zipCode: "60621",
    location: "Englewood, Chicago, IL",
    dream: "To reduce violence through youth programs",
    quote: "I've lost friends to the streets. I'm coming back to create alternatives.",
    position: { top: "28%", left: "65%" },
  },
  {
    name: "Aisha",
    zipCode: "29203",
    location: "Columbia, SC",
    dream: "To improve healthcare access",
    quote: "My grandmother couldn't get the care she needed. I'm becoming a doctor to fix that.",
    position: { top: "48%", left: "78%" },
  },
  {
    name: "Miguel",
    zipCode: "78207",
    location: "San Antonio, TX",
    dream: "To start a community-owned business",
    quote: "Economic power stays where it's built. We'll build it here.",
    position: { top: "58%", left: "48%" },
  },
]

// Single premium avatar for all testimonials
const PREMIUM_AVATAR = "/images/avatars/dla-avatar-1.png"

export function ZipCodeImpactMap() {
  const [activeStory, setActiveStory] = useState<number | null>(null)
  const [autoplay, setAutoplay] = useState(true)
  const [showImpact, setShowImpact] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  // Handle autoplay of stories
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveStory((prev) => {
        if (prev === null) return 0
        return (prev + 1) % leaderStories.length
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  // Pause autoplay when user interacts
  const handleStoryClick = (index: number) => {
    setAutoplay(false)
    setActiveStory(index)
  }

  // Show impact visualization after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImpact(true)
    }, 1500)

    const completeTimer = setTimeout(() => {
      setAnimationComplete(true)
    }, 6000)

    return () => {
      clearTimeout(timer)
      clearTimeout(completeTimer)
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-navy-900 rounded-xl shadow-2xl">
      {/* Background map of USA */}
      <div className="relative h-[600px] md:h-[700px]">
        <Image
          src="/placeholder.svg?height=700&width=1200"
          alt="Map of the United States"
          fill
          className="object-cover opacity-20"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy-900/70" />

        {/* Map container */}
        <div ref={mapRef} className="absolute inset-0 overflow-hidden">
          {/* Animated pins for each story */}
          {leaderStories.map((story, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={story.position}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: activeStory === index ? 1.2 : 1,
                opacity: 1,
              }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
              }}
            >
              <button
                onClick={() => handleStoryClick(index)}
                className={`relative group ${activeStory === index ? "z-20" : "z-10"}`}
                aria-label={`View ${story.name}'s story`}
              >
                <motion.div
                  className={`w-4 h-4 rounded-full ${activeStory === index ? "bg-gold-500" : "bg-white/50"}`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: activeStory === index ? 1 : [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />

                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gold-500/30"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{
                    scale: activeStory === index ? [1, 2.5] : 1,
                    opacity: activeStory === index ? [0.3, 0] : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />

                {/* Zip code label */}
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-navy-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {story.zipCode}
                  </div>
                </div>
              </button>
            </motion.div>
          ))}

          {/* Impact visualization - stars spreading across the map */}
          {showImpact && (
            <>
              {Array.from({ length: 150 }).map((_, i) => (
                <motion.div
                  key={`star-${i}`}
                  className="absolute"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: [0, 0.7, 0.3],
                  }}
                  transition={{
                    delay: 1 + i * 0.02,
                    duration: 2,
                  }}
                >
                  <Star size={Math.random() * 4 + 2} className="text-gold-300" fill="currentColor" />
                </motion.div>
              ))}
            </>
          )}
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="gold-gradient">One Leader</span> from{" "}
              <span className="gold-gradient">Every ZIP Code</span>
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Imagine the collective power of thousands of young leaders returning to transform their communities
            </motion.p>
          </div>

          {/* Featured story */}
          <div className="mt-auto">
            <AnimatePresence mode="wait">
              {activeStory !== null && (
                <motion.div
                  key={activeStory}
                  className="bg-navy-800/80 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-start gap-4">
                    {/* Premium avatar image - using the same one for all */}
                    <div className="shrink-0">
                      <div className="relative w-16 h-16 overflow-hidden rounded-full">
                        <Image
                          src={PREMIUM_AVATAR || "/placeholder.svg"}
                          alt={`${leaderStories[activeStory].name}'s avatar`}
                          fill
                          className="object-cover"
                        />
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-white">{leaderStories[activeStory].name}</h3>
                        <div className="text-sm bg-navy-700 text-white/80 px-2 py-0.5 rounded">
                          {leaderStories[activeStory].zipCode}
                        </div>
                      </div>
                      <p className="text-white/70 text-sm mb-2">{leaderStories[activeStory].location}</p>
                      <p className="text-gold-300 font-medium mb-3">Dream: {leaderStories[activeStory].dream}</p>
                      <blockquote className="text-white italic border-l-2 border-gold-500 pl-4">
                        "{leaderStories[activeStory].quote}"
                      </blockquote>

                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex space-x-2">
                          {leaderStories.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => handleStoryClick(index)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                activeStory === index ? "bg-gold-500 w-4" : "bg-white/30"
                              }`}
                              aria-label={`View story ${index + 1}`}
                            />
                          ))}
                        </div>

                        <button
                          onClick={() => {
                            setActiveStory((activeStory + 1) % leaderStories.length)
                            setAutoplay(false)
                          }}
                          className="text-white/80 hover:text-white flex items-center gap-1 text-sm"
                        >
                          Next Story <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Impact statement */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: animationComplete ? 1 : 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <p className="text-xl md:text-2xl text-white font-light">
              <span className="font-bold text-gold-300">41,000</span> ZIP codes.
              <span className="font-bold text-gold-300"> 41,000</span> leaders.
              <span className="font-bold text-gold-300"> One</span> transformed nation.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
