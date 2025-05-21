"use client"

import type React from "react"

import { forwardRef } from "react"

interface ScrollLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  className?: string
  activeClass?: string
  onClick?: () => void
}

export const ScrollLink = forwardRef<HTMLAnchorElement, ScrollLinkProps>(
  ({ href, children, className = "", activeClass = "", onClick, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()

      // Check if the href is a hash link
      if (href.startsWith("#")) {
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          // Get the height of the navbar (assuming it's fixed)
          const navbarHeight = 80 // Adjust this value based on your navbar height

          // Calculate the target position with offset
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight

          // Scroll to the target position
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      } else {
        // For non-hash links, navigate normally
        window.location.href = href
      }

      // Call the original onClick if provided
      if (onClick) onClick()
    }

    return (
      <a ref={ref} href={href} className={className} onClick={handleClick} {...props}>
        {children}
      </a>
    )
  },
)

ScrollLink.displayName = "ScrollLink"
