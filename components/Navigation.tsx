"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { GlowButton } from "./GlowButton"
import { ScrollLink } from "./ScrollLink"

export const Navigation = ({ isScrolled }: { isScrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)

  // Close mobile menu when scrolling
  useEffect(() => {
    if (isOpen) setIsOpen(false)
  }, [isScrolled])

  const navItems = ["About", "Model", "Our Approach", "FAQ"]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 z-20">
            <div
              className={`relative w-[60px] h-[60px] rounded-full overflow-hidden ${
                isScrolled ? "bg-white" : "bg-navy-900/50 backdrop-blur-sm"
              }`}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final-dla-logo-uRYlx7KejNcZjiOTEiUe2CnD5JwKfD.png"
                alt="Douglass Leadership Academy Logo"
                fill
                className={`object-contain transition-opacity duration-500 ${logoLoaded ? "opacity-100" : "opacity-0"}`}
                onLoadingComplete={() => setLogoLoaded(true)}
              />
            </div>
            <motion.span
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-navy-900" : "text-white text-shadow-gold"
              }`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              DLA
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <ScrollLink
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`relative transition-colors duration-300 ${
                    isScrolled ? "text-navy-800 hover:text-navy-900" : "text-white hover:text-gold-300"
                  }`}
                >
                  <span>{item}</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 transform origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </ScrollLink>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/contact">
                <GlowButton
                  className={`transition-all duration-300 ${
                    isScrolled
                      ? "bg-navy-800 hover:bg-navy-700 text-white"
                      : "bg-gold-500 hover:bg-gold-400 text-navy-900"
                  }`}
                  glowColor={isScrolled ? "rgba(10, 30, 60, 0.4)" : "rgba(198, 164, 85, 0.6)"}
                >
                  Contact Us
                </GlowButton>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-20 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className={isScrolled ? "text-navy-900" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-navy-900" : "text-white"} />
            )}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 bg-navy-900 flex flex-col items-center justify-center z-10"
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col items-center space-y-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <ScrollLink
                        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-white text-2xl hover:text-gold-300 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </ScrollLink>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link href="/contact">
                      <GlowButton
                        className="bg-gold-500 hover:bg-gold-400 text-navy-900 mt-4"
                        onClick={() => setIsOpen(false)}
                      >
                        Contact Us
                      </GlowButton>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  )
}
