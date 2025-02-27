"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Globe, BookOpen, Users, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ApproachTimeline } from "@/components/ApproachTimeLine"
import { DelightfulFAQ } from "@/components/DelightfulFAQ"
import { ContactForm } from "@/components/ContactForm"
import { AnimatePresence } from "framer-motion"
import DLALogo from '@/public/dla-logo.png'

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false)

  const handleBeginJourney = () => {
    // Here you can implement the logic for beginning the journey
    // For now, let's just show an alert
    alert(
      "Welcome to your journey with Douglass Leadership Academy! Our admissions team will be in touch with you shortly to guide you through the next steps.",
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/10">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative">
                <Image
                  src={DLALogo}
                  alt="Douglass Leadership Academy Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-primary">DLA</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-primary/80 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#academics" className="text-primary/80 hover:text-primary transition-colors">
                Academics
              </Link>
              <Link href="#approach" className="text-primary/80 hover:text-primary transition-colors">
                Our Approach
              </Link>
              <Link href="#faq" className="text-primary/80 hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white" onClick={() => setShowContactForm(true)}>
              Contact Us
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frederick-douglass.jpg-720FqwMUTdfMggXOdcae5WsBEg3e45.jpeg"
            alt="Frederick Douglass Portrait"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
              Education is Freedom
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
              Continuing Frederick Douglass's legacy through world-class education that transcends borders and
              transforms lives.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 animate-fade-in-up animation-delay-400"
              onClick={handleBeginJourney}
            >
              Begin Your Journey
            </Button>
          </div>
          <div className="hidden md:block">
            <div className="w-[400px] h-[400px] relative mx-auto animate-float">
              <Image
                src={DLALogo}
                alt="DLA Logo Large"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gradient-to-r from-accent to-accent-light py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <blockquote className="text-2xl md:text-3xl italic text-primary animate-fade-in">
            "Once you learn to read, you will be forever free."
            <footer className="text-lg mt-4 text-secondary font-semibold">— Frederick Douglass</footer>
          </blockquote>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in-left">
                Why Douglass Leadership Academy?
              </h2>
              <p className="text-lg text-secondary/80 mb-8 animate-fade-in-left animation-delay-200">
                We're revolutionizing education by combining American excellence with East African affordability,
                creating unprecedented opportunities for talented students.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <FeatureCard
                  icon={<Globe className="w-8 h-8 text-primary" />}
                  title="Global Perspective"
                  description="Cross-cultural fluency"
                />
                <FeatureCard
                  icon={<BookOpen className="w-8 h-8 text-primary" />}
                  title="IB Curriculum"
                  description="World-class education"
                />
                <FeatureCard
                  icon={<Users className="w-8 h-8 text-primary" />}
                  title="Community"
                  description="24/7 mentorship"
                />
                <FeatureCard
                  icon={<Plane className="w-8 h-8 text-primary" />}
                  title="Affordable"
                  description="Premium education"
                />
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl animate-float">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-13%20at%203.27.15%E2%80%AFPM-IojuRipKhjntfm9FG6nqgnUWsmm5G0.png"
                alt="Globe showing Africa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="py-24 bg-gradient-to-b from-accent to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl animate-float">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-13%20at%203.26.52%E2%80%AFPM-YsB5jEtjOMwwQ55d5NZGVpNanVRslQ.png"
                alt="Library"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in-right">Academic Excellence</h2>
              <p className="text-lg text-secondary/80 mb-6 animate-fade-in-right animation-delay-200">
                Our rigorous International Baccalaureate curriculum prepares students for success at top universities
                worldwide while fostering critical thinking and global awareness.
              </p>
              <ul className="space-y-4">
                {[
                  "International Baccalaureate Diploma Programme",
                  "Small class sizes for personalized attention",
                  "Expert faculty from around the world",
                  "State-of-the-art learning facilities",
                  "Comprehensive college preparation",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-3 animate-fade-in-right"
                    style={{ animationDelay: `${(i + 3) * 200}ms` }}
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-secondary/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 bg-primary hover:bg-primary/90 text-white animate-fade-in-up animation-delay-1000">
                Explore Curriculum
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center animate-fade-in">Our Approach</h2>
          <ApproachTimeline />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gradient-to-b from-accent to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center animate-fade-in">
            Frequently Asked Questions
          </h2>
          <DelightfulFAQ />
        </div>
      </section>

      {/* Admissions CTA */}
      <section id="admissions" className="relative py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">Begin Your Journey</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Join a community of future leaders. Applications are now open for the 2025-2026 academic year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 animate-fade-in-up animation-delay-400"
              onClick={handleBeginJourney}
            >
              Begin Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 animate-fade-in-up animation-delay-600"
              style={{ textShadow: "0 0 5px rgba(0,0,0,0.5)" }}
            >
              Request Information
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-[50px] h-[50px] relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/updated-final-dla-logo-SKnkVqqdzB7Z98PrRMMwRlATkL9W1D.png"
                  alt="DLA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-semibold">Douglass Leadership Academy</span>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-white/60 mt-4 md:mt-0">&copy; 2025 DLA. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <AnimatePresence>{showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}</AnimatePresence>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-4 rounded-lg bg-accent hover:bg-accent-light transition-colors animate-fade-in-up">
      <div className="mb-3">{icon}</div>
      <h3 className="font-semibold text-primary mb-1">{title}</h3>
      <p className="text-sm text-secondary/70">{description}</p>
    </div>
  )
}

