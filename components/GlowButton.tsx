"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface GlowButtonProps extends ButtonProps {
  glowColor?: string
}

export const GlowButton = ({
  children,
  glowColor = "rgba(198, 164, 85, 0.6)",
  className = "",
  ...props
}: GlowButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative">
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-md blur-md"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{ backgroundColor: glowColor }}
      />

      {/* Button with shine effect */}
      <Button
        className={`relative overflow-hidden ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-gold-shine"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Button content */}
        <span className="relative z-10">{children}</span>
      </Button>
    </div>
  )
}
