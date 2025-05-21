"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Send, Star, CheckCircle2 } from "lucide-react"
import { GlowButton } from "@/components/GlowButton"
import { SubstackEmbed } from "@/components/SubstackEmbed"

// Define the steps in our contact form
const formSteps = [
  {
    id: "personal",
    title: "Let's get to know you",
    description: "We're excited to connect! Tell us a bit about yourself.",
  },
  {
    id: "interest",
    title: "What brings you here?",
    description: "Help us understand how we can best assist you.",
  },
  {
    id: "message",
    title: "Your message",
    description: "Share any additional thoughts or questions you have.",
  },
  {
    id: "thanks",
    title: "Thank you!",
    description: "We appreciate your interest in Douglass Leadership Academy.",
  },
]

// Interest options
const interestOptions = [
  { id: "parent", label: "I'm a parent interested in DLA for my child" },
  { id: "educator", label: "I'm an educator interested in DLA's model" },
  { id: "donor", label: "I'm interested in supporting DLA financially" },
  { id: "partner", label: "I'm interested in partnering with DLA" },
  { id: "volunteer", label: "I'd like to volunteer or work with DLA" },
  { id: "other", label: "Other" },
]

// How did you hear about us options
const hearAboutOptions = [
  { id: "social", label: "Social Media" },
  { id: "friend", label: "Friend or Colleague" },
  { id: "search", label: "Search Engine" },
  { id: "event", label: "Event or Conference" },
  { id: "press", label: "Press or News Article" },
  { id: "other", label: "Other" },
]

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    howHeard: "",
    role: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  // Add a timeout effect to prevent the form from getting stuck
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (isSubmitting) {
      // Set a 5-second timeout to move to the next step even if there's an error
      timeoutId = setTimeout(() => {
        if (isSubmitting) {
          console.log("Submission timeout reached, moving to next step")
          setIsSubmitting(false)
          nextStep()
        }
      }, 5000)
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [isSubmitting])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      console.log("Submitting form data:", formData)

      // Store the form data in localStorage as a backup
      const submissionData = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        interest: formData.interest,
        howHeard: formData.howHeard,
        role: formData.role,
        submitted_at: new Date().toISOString(),
      }

      localStorage.setItem("contactFormData", JSON.stringify(submissionData))

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

      // Always move to the next step after a short delay
      setTimeout(() => {
        nextStep()
      }, 1000)
    } catch (err) {
      console.error("Error submitting form:", err)
      setError(
        "There was an error submitting your form, but we've saved your information. Please try again later or contact us directly.",
      )

      // Move to the next step anyway after a short delay
      setTimeout(() => {
        nextStep()
      }, 2000)
    } finally {
      // Ensure isSubmitting is set to false after a reasonable time
      setTimeout(() => {
        setIsSubmitting(false)
      }, 3000)
    }
  }

  const isStepValid = () => {
    if (currentStep === 0) {
      return formData.name.trim() !== "" && formData.email.trim() !== ""
    }
    if (currentStep === 1) {
      return formData.interest !== ""
    }
    if (currentStep === 2) {
      return formData.message.trim() !== ""
    }
    return true
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 to-navy-800 relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 star-bg opacity-30" />

      {/* Animated stars */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute star-animation animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <Star size={Math.random() * 8 + 4} className="text-white" fill="white" />
        </div>
      ))}

      {/* Back button */}
      <Link
        href="/"
        className="fixed top-4 left-4 z-50 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </Link>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden bg-navy-900/50 backdrop-blur-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final-dla-logo-uRYlx7KejNcZjiOTEiUe2CnD5JwKfD.png"
                alt="Douglass Leadership Academy Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white text-shadow-gold">DLA</span>
          </Link>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress indicator */}
          {currentStep < formSteps.length - 1 && (
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {formSteps.slice(0, -1).map((step, index) => (
                  <div
                    key={step.id}
                    className={`flex items-center ${index > currentStep ? "text-white/30" : "text-white"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        index < currentStep
                          ? "bg-gold-500 text-navy-900"
                          : index === currentStep
                            ? "bg-white text-navy-900"
                            : "bg-white/20 text-white/50"
                      }`}
                    >
                      {index < currentStep ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                    </div>
                    {index < formSteps.length - 2 && (
                      <div
                        className={`h-1 w-full ${
                          index < currentStep ? "bg-gold-500" : "bg-white/20"
                        } mx-2 hidden sm:block`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Form container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-2">{formSteps[currentStep].title}</h2>
                <p className="text-navy-600 mb-6">{formSteps[currentStep].description}</p>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Information */}
                  {currentStep === 0 && (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-sm font-medium text-navy-700 mb-1">
                          Your Role (Optional)
                        </label>
                        <input
                          type="text"
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                          placeholder="Teacher, Parent, Student, etc."
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Interest */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-3">
                          What brings you to Douglass Leadership Academy?
                        </label>
                        <div className="space-y-3">
                          {interestOptions.map((option) => (
                            <label
                              key={option.id}
                              className={`flex items-center p-3 border rounded-md cursor-pointer transition-colors ${
                                formData.interest === option.id
                                  ? "border-gold-500 bg-gold-50"
                                  : "border-gray-300 hover:bg-navy-50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="interest"
                                value={option.id}
                                checked={formData.interest === option.id}
                                onChange={() => handleRadioChange("interest", option.id)}
                                className="sr-only"
                              />
                              <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                                  formData.interest === option.id ? "border-gold-500 bg-gold-500" : "border-gray-400"
                                }`}
                              >
                                {formData.interest === option.id && (
                                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                                )}
                              </div>
                              <span>{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-3">
                          How did you hear about us?
                        </label>
                        <div className="space-y-3">
                          {hearAboutOptions.map((option) => (
                            <label
                              key={option.id}
                              className={`flex items-center p-3 border rounded-md cursor-pointer transition-colors ${
                                formData.howHeard === option.id
                                  ? "border-gold-500 bg-gold-50"
                                  : "border-gray-300 hover:bg-navy-50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="howHeard"
                                value={option.id}
                                checked={formData.howHeard === option.id}
                                onChange={() => handleRadioChange("howHeard", option.id)}
                                className="sr-only"
                              />
                              <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                                  formData.howHeard === option.id ? "border-gold-500 bg-gold-500" : "border-gray-400"
                                }`}
                              >
                                {formData.howHeard === option.id && (
                                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                                )}
                              </div>
                              <span>{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Message */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                          placeholder="Share your thoughts, questions, or how you'd like to get involved..."
                          required
                        ></textarea>
                      </div>

                      {error && <p className="text-red-500 text-sm">{error}</p>}
                    </div>
                  )}

                  {/* Step 4: Thank You */}
                  {currentStep === 3 && (
                    <div className="text-center py-8">
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-10 h-10 text-gold-500" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900 mb-4">Message Received!</h3>
                      <p className="text-navy-700 mb-6">
                        Thank you for reaching out to Douglass Leadership Academy. We'll get back to you as soon as
                        possible.
                      </p>
                      <p className="text-navy-700 mb-8">
                        In the meantime, stay updated with our latest news by subscribing to our newsletter.
                      </p>

                      <div className="bg-navy-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-navy-900 mb-4">Subscribe to Our Newsletter</h4>
                        <div className="flex justify-center">
                          <SubstackEmbed className="max-w-md w-full" />
                        </div>
                      </div>

                      <div className="mt-8">
                        <Link href="/">
                          <GlowButton className="bg-navy-800 hover:bg-navy-700 text-white">
                            Return to Homepage
                          </GlowButton>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Navigation buttons */}
                  {currentStep < 3 && (
                    <div className="flex justify-between mt-8">
                      {currentStep > 0 ? (
                        <button
                          type="button"
                          onClick={prevStep}
                          className="px-4 py-2 border border-navy-300 rounded-md text-navy-700 hover:bg-navy-50"
                        >
                          Back
                        </button>
                      ) : (
                        <div></div>
                      )}

                      {currentStep < 2 ? (
                        <GlowButton
                          type="button"
                          onClick={nextStep}
                          disabled={!isStepValid()}
                          className={`${
                            isStepValid() ? "bg-navy-800 hover:bg-navy-700" : "bg-navy-400 cursor-not-allowed"
                          } text-white`}
                        >
                          Continue
                        </GlowButton>
                      ) : (
                        currentStep === 2 && (
                          <GlowButton
                            type="submit"
                            disabled={isSubmitting || !isStepValid()}
                            className={`${
                              isStepValid() && !isSubmitting
                                ? "bg-navy-800 hover:bg-navy-700"
                                : "bg-navy-400 cursor-not-allowed"
                            } text-white`}
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send className="w-4 h-4 ml-2" />
                          </GlowButton>
                        )
                      )}
                    </div>
                  )}
                </form>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
