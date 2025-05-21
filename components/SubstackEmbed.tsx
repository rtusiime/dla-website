"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface SubstackEmbedProps {
  className?: string
}

export const SubstackEmbed: React.FC<SubstackEmbedProps> = ({ className = "" }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Ensure iframe is properly sized
    const resizeObserver = new ResizeObserver(() => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.style.height = "320px"
      }
    })

    if (iframeRef.current) {
      resizeObserver.observe(iframeRef.current)
    }

    return () => {
      if (iframeRef.current) {
        resizeObserver.unobserve(iframeRef.current)
      }
    }
  }, [])

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      <div className="p-4 bg-navy-800 text-white">
        <h3 className="text-lg font-semibold">Stay Updated with DLA</h3>
        <p className="text-sm text-white/80">Subscribe to our newsletter for the latest updates</p>
      </div>
      <iframe
        ref={iframeRef}
        src="https://ktusiime.substack.com/embed"
        width="100%"
        height="320"
        style={{ border: "none", background: "white" }}
        frameBorder="0"
        scrolling="no"
        className="w-full"
      ></iframe>
    </div>
  )
}
