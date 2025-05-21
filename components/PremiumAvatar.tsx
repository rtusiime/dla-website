"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface PremiumAvatarProps {
  src?: string
  alt: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  animate?: boolean
}

// Default premium avatar
const DEFAULT_AVATAR = "/images/avatars/dla-avatar-1.png"

export function PremiumAvatar({ src, alt, size = "md", className = "", animate = false }: PremiumAvatarProps) {
  // Size mapping
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  }

  const avatarSize = sizeMap[size]
  const avatarSrc = src || DEFAULT_AVATAR

  return (
    <div className={`relative ${avatarSize} overflow-hidden rounded-full ${className}`}>
      {animate ? (
        <motion.div
          className="w-full h-full"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Image src={avatarSrc || "/placeholder.svg"} alt={alt} fill className="object-cover" />
        </motion.div>
      ) : (
        <Image src={avatarSrc || "/placeholder.svg"} alt={alt} fill className="object-cover" />
      )}

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay rounded-full"></div>
    </div>
  )
}
