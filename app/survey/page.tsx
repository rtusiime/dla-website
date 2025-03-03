"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import confetti from "canvas-confetti"

const questions = [
  {
    title: "What's your name?",
    name: "name",
    type: "text",
    placeholder: "Enter your full name",
    validation: z.string().min(2, "Name must be at least 2 characters"),
  },
  {
    title: "What's your email address?",
    name: "email",
    type: "email",
    placeholder: "you@example.com",
    validation: z.string().email("Please enter a valid email address"),
  },
  {
    title: "Where are you from?",
    name: "location",
    type: "text",
    placeholder: "City, State",
    validation: z.string().min(2, "Please enter your location"),
  },
  {
    title: "How did you hear about us?",
    name: "source",
    type: "select",
    options: ["Social Media", "Word of Mouth", "News Article", "School/Teacher", "University of Rochester", "Other"],
    validation: z.string().min(1, "Please select an option"),
  },
  {
    title: "What interests you most about our program?",
    name: "interests",
    type: "checkbox",
    options: [
      "Quality of education",
      "Safe learning environment",
      "International experience",
      "College preparation",
      "Cost-effective private education",
      "Boarding school experience",
    ],
    validation: z.array(z.string()).min(1, "Please select at least one option"),
  },
  {
    title: "When would you like your child to start?",
    name: "startDate",
    type: "radio",
    options: ["Fall 2025", "Spring 2026", "Fall 2026", "Just exploring options"],
    validation: z.string().min(1, "Please select an option"),
  },
  {
    title: "Any questions or concerns?",
    name: "questions",
    type: "textarea",
    placeholder: "Feel free to ask us anything!",
    validation: z.string().optional(),
  },
]

const schema = z.object(Object.fromEntries(questions.map((q) => [q.name, q.validation])))

export default function SurveyForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm({
    resolver: zodResolver(schema),
  })

  const watchedFields = watch()

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (type === "change") {
        trigger(name as keyof typeof schema)
      }
    })
    return () => subscription.unsubscribe()
  }, [watch, trigger])

  const onSubmit = async (data: z.infer<typeof schema>) => {
    setIsSubmitting(true)
    try {
      // Send data to the API
      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit survey');
      }
      
      // Show success animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      
      console.log('Survey submitted successfully:', data);
    } catch (error) {
      console.error('Error submitting survey:', error);
      alert('There was a problem submitting your survey. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const currentQuestion = questions[currentStep]

  const handleNext = async () => {
    const isValid = await trigger(currentQuestion.name as keyof typeof schema)
    if (isValid) {
      if (currentStep < questions.length - 1) {
        setCurrentStep((prev) => prev + 1)
      } else {
        await handleSubmit(onSubmit)()
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background image with overlay */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frederick-douglass.jpg-OvXlNB2c5NlHT49PQFQhXIMjGLyzEq.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-[#8B7355]/80 mix-blend-multiply" />
      </div>

      {/* Form container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-2xl w-full"
      >
        <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#8B7355] to-[#6F4E37]">
          Douglas Leadership Academy
        </h1>

        {/* Rest of the form content remains the same */}
        <div className="mb-8 relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#8B7355] bg-[#8B7355]/10">
                Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-[#8B7355]">
                {Math.round((currentStep / (questions.length - 1)) * 100)}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-[#8B7355]/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / (questions.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#8B7355]"
            ></motion.div>
          </div>
        </div>

        {/* Form content remains the same but update button colors */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{currentQuestion.title}</h2>
              <div className="space-y-4">
                {currentQuestion.type === "select" && (
                  <div>
                    <Select
                      onValueChange={(value) => {
                        register(currentQuestion.name).onChange({ target: { name: currentQuestion.name, value } })
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {currentQuestion.options?.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <AnimatePresence>
                      {errors[currentQuestion.name] && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors[currentQuestion.name]?.message as string}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                )}
                {currentQuestion.type === "checkbox" && (
                  <div className="space-y-2">
                    {currentQuestion.options?.map((option) => (
                      <div key={option} className="flex items-center">
                        <Checkbox
                          id={`${currentQuestion.name}-${option}`}
                          onCheckedChange={(checked) => {
                            const currentValues = watchedFields[currentQuestion.name] || []
                            let newValues

                            if (checked) {
                              newValues = [...currentValues, option]
                            } else {
                              newValues = currentValues.filter((value: string) => value !== option)
                            }

                            register(currentQuestion.name).onChange({
                              target: { name: currentQuestion.name, value: newValues },
                            })
                          }}
                          checked={(watchedFields[currentQuestion.name] || []).includes(option)}
                        />
                        <label htmlFor={`${currentQuestion.name}-${option}`} className="ml-2 text-sm text-gray-700">
                          {option}
                        </label>
                      </div>
                    ))}
                    {errors[currentQuestion.name] && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors[currentQuestion.name]?.message as string}
                      </motion.p>
                    )}
                  </div>
                )}
                {currentQuestion.type === "radio" && (
                  <RadioGroup
                    onValueChange={(value) => {
                      register(currentQuestion.name).onChange({ target: { value } })
                    }}
                  >
                    {currentQuestion.options?.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`${currentQuestion.name}-${option}`} />
                        <Label htmlFor={`${currentQuestion.name}-${option}`}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
                {currentQuestion.type === "textarea" && (
                  <Textarea
                    id={currentQuestion.name}
                    placeholder={currentQuestion.placeholder}
                    {...register(currentQuestion.name)}
                  />
                )}
                {["text", "email"].includes(currentQuestion.type) && (
                  <Input
                    type={currentQuestion.type}
                    id={currentQuestion.name}
                    placeholder={currentQuestion.placeholder}
                    {...register(currentQuestion.name)}
                  />
                )}
                {errors[currentQuestion.name] && (
                  <p className="text-red-500 text-sm mt-1">{errors[currentQuestion.name]?.message as string}</p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex justify-between">
            <Button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              variant="outline"
              className="border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355]/10"
            >
              Previous
            </Button>
            {currentStep < questions.length - 1 ? (
              <Button type="button" onClick={handleNext} className="bg-[#8B7355] hover:bg-[#8B7355]/90">
                Next
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting} className="bg-[#8B7355] hover:bg-[#8B7355]/90">
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  )
}
