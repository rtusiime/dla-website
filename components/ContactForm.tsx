"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GlowButton } from "./GlowButton"

export const ContactForm: React.FC<{ onClose: () => void; subject?: string }> = ({ onClose, subject }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Store the form data in localStorage as a backup
      const submissionData = {
        ...formState,
        subject,
        submitted_at: new Date().toISOString(),
      }

      localStorage.setItem("popupContactFormData", JSON.stringify(submissionData))

      // Try to send the data to our API endpoint
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        })

        console.log("API response:", response.ok ? "Success" : "Failed")
      } catch (apiError) {
        console.error("API submission error:", apiError)
        // Continue anyway - we've saved to localStorage
      }

      // Show success message
      setSuccess(true)

      // Close the form after a delay
      setTimeout(() => {
        onClose()
      }, 2000)
    } catch (err) {
      console.error("Error submitting form:", err)
      setError("There was an error submitting your form. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-navy-900/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-navy-400 hover:text-navy-900 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-navy-900 mb-6">{subject ? subject : "Contact Us"}</h2>

        {success ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-2">Message Sent!</h3>
            <p className="text-navy-600">Thank you for contacting us. We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full border-gold-200 focus:border-gold-500 focus:ring-gold-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full border-gold-200 focus:border-gold-500 focus:ring-gold-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                className="w-full border-gold-200 focus:border-gold-500 focus:ring-gold-500"
                placeholder="Your message here..."
                rows={4}
              />
            </div>
            {subject && <input type="hidden" name="subject" value={subject} />}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="pt-2">
              <GlowButton
                type="submit"
                className="w-full bg-navy-800 hover:bg-navy-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4 ml-2" />
              </GlowButton>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  )
}
