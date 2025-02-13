import Image from "next/image"
import Link from "next/link"
import { Globe, BookOpen, Users, Plane } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="DLA Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-blue-800">Douglass Leadership Academy</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="#about" className="text-blue-600 hover:text-blue-800">
              About
            </Link>
            <Link href="#program" className="text-blue-600 hover:text-blue-800">
              Program
            </Link>
            <Link href="#admissions" className="text-blue-600 hover:text-blue-800">
              Admissions
            </Link>
            <Link href="#contact" className="text-blue-600 hover:text-blue-800">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">A World-Class Education for All</h1>
          <p className="text-xl md:text-2xl text-blue-700 mb-8">
            Empowering low-income American students through an innovative international boarding school experience.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Learn More
          </Button>
        </section>

        <section id="about" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Why Douglass Leadership Academy?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Globe className="w-12 h-12 text-blue-500" />}
                title="Global Perspective"
                description="Develop cross-cultural fluency and broaden your worldview."
              />
              <FeatureCard
                icon={<BookOpen className="w-12 h-12 text-blue-500" />}
                title="Rigorous Academics"
                description="Experience a world-class IB curriculum that prepares you for top universities."
              />
              <FeatureCard
                icon={<Users className="w-12 h-12 text-blue-500" />}
                title="Supportive Community"
                description="Thrive in a safe, family-like atmosphere with 24/7 mentorship."
              />
              <FeatureCard
                icon={<Plane className="w-12 h-12 text-blue-500" />}
                title="Affordable Excellence"
                description="Access a premium education at a fraction of U.S. private school costs."
              />
            </div>
          </div>
        </section>

        <section id="program" className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Program</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Students in classroom"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">World-Class Education in East Africa</h3>
                <p className="text-lg text-blue-700 mb-4">
                  At Douglass Leadership Academy, we leverage the cost advantages of East African boarding schools to
                  provide a premium educational experience at an affordable price.
                </p>
                <ul className="list-disc list-inside text-blue-600 space-y-2">
                  <li>International Baccalaureate (IB) curriculum</li>
                  <li>Small class sizes and personalized attention</li>
                  <li>Extensive extracurricular activities</li>
                  <li>Cultural immersion and language learning</li>
                  <li>College and career preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="admissions" className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Admissions</h2>
            <p className="text-xl text-blue-700 mb-8">
              We're committed to making our program accessible to talented, motivated students regardless of their
              financial background.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Apply Now
            </Button>
          </div>
        </section>

        <section id="contact" className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="text-xl mb-8">
              Have questions? We'd love to hear from you. Reach out to learn more about Douglass Leadership Academy.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900"
            >
              Get in Touch
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Douglass Leadership Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-blue-600">{description}</p>
    </div>
  )
}

