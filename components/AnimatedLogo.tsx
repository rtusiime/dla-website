"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export const AnimatedLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Navy circle background */}
      <motion.div
        className="absolute inset-0 rounded-full bg-navy-900"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Gold border */}
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-gold-500"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Logo image */}
      <motion.div
        className="relative w-full h-full"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final-dla-logo-uRYlx7KejNcZjiOTEiUe2CnD5JwKfD.png"
          alt="Douglass Leadership Academy Logo"
          fill
          className="object-contain p-8"
        />
      </motion.div>

      {/* Animated stars */}
      <StarAnimation top="10%" left="15%" delay={0} size={8} />
      <StarAnimation top="15%" left="85%" delay={0.5} size={10} />
      <StarAnimation top="75%" left="20%" delay={1} size={12} />
      <StarAnimation top="80%" left="80%" delay={1.5} size={8} />
      <StarAnimation top="40%" left="90%" delay={2} size={10} />
      <StarAnimation top="30%" left="5%" delay={2.5} size={12} />
    </div>
  )
}

const StarAnimation = ({ top, left, delay, size }: { top: string; left: string; delay: number; size: number }) => {
  return (
    <motion.div
      className="absolute z-10"
      style={{ top, left }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0.5, 1], scale: [0, 1, 0.8, 1] }}
      transition={{
        delay,
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 2,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          fill="#FFFFFF"
        />
      </svg>
    </motion.div>
  )
}
