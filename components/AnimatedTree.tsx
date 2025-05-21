"use client"

import { useEffect, useRef } from "react"

export const AnimatedTree = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Draw tree function
    const drawTree = (
      startX: number,
      startY: number,
      length: number,
      angle: number,
      branchWidth: number,
      depth: number,
    ) => {
      ctx.beginPath()
      ctx.save()

      ctx.translate(startX, startY)
      ctx.rotate((angle * Math.PI) / 180)
      ctx.moveTo(0, 0)

      // Create gradient for trunk and branches
      const gradient = ctx.createLinearGradient(0, 0, 0, -length)
      gradient.addColorStop(0, "#C6A455") // Gold at the base
      gradient.addColorStop(1, "#D7B477") // Lighter gold at the tips

      ctx.strokeStyle = gradient
      ctx.lineWidth = branchWidth
      ctx.lineCap = "round"
      ctx.shadowColor = "rgba(198, 164, 85, 0.3)"
      ctx.shadowBlur = 5

      ctx.lineTo(0, -length)
      ctx.stroke()

      if (depth <= 0) {
        // Draw leaf
        ctx.beginPath()
        const leafSize = branchWidth * 2
        ctx.fillStyle = "#D7B477"
        ctx.ellipse(0, -length, leafSize, leafSize * 2, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        return
      }

      // Draw right branch
      drawTree(0, -length, length * 0.75, angle + 20, branchWidth * 0.7, depth - 1)
      // Draw left branch
      drawTree(0, -length, length * 0.75, angle - 20, branchWidth * 0.7, depth - 1)

      ctx.restore()
    }

    // Animation variables
    let time = 0
    const animate = () => {
      time += 0.01

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background circle
      ctx.beginPath()
      ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width * 0.4, 0, Math.PI * 2)
      ctx.fillStyle = "#0A1E3C"
      ctx.fill()

      // Draw gold border
      ctx.beginPath()
      ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width * 0.4, 0, Math.PI * 2)
      ctx.strokeStyle = "#C6A455"
      ctx.lineWidth = 5
      ctx.stroke()

      // Draw tree with slight animation
      const trunkLength = canvas.height * 0.25
      const sway = Math.sin(time) * 2
      drawTree(canvas.width / 2, canvas.height * 0.65, trunkLength, -90 + sway, trunkLength / 10, 4)

      // Draw stars
      const starCount = 12
      const radius = canvas.width * 0.35
      for (let i = 0; i < starCount; i++) {
        const angle = (i * 2 * Math.PI) / starCount
        const x = canvas.width / 2 + radius * Math.cos(angle)
        const y = canvas.height / 2 + radius * Math.sin(angle)

        // Star twinkle effect
        const twinkle = 0.7 + Math.sin(time * 3 + i) * 0.3

        drawStar(ctx, x, y, 5, 10 * twinkle, 5 * twinkle)
      }

      requestAnimationFrame(animate)
    }

    // Function to draw a star
    const drawStar = (
      ctx: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number,
    ) => {
      let rot = (Math.PI / 2) * 3
      let x = cx
      let y = cy
      const step = Math.PI / spikes

      ctx.beginPath()
      ctx.moveTo(cx, cy - outerRadius)

      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius
        y = cy + Math.sin(rot) * outerRadius
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius
        y = cy + Math.sin(rot) * innerRadius
        ctx.lineTo(x, y)
        rot += step
      }

      ctx.lineTo(cx, cy - outerRadius)
      ctx.closePath()
      ctx.fillStyle = "#FFFFFF"
      ctx.fill()
    }

    // Start animation
    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} aria-label="Animated tree logo" />
}
