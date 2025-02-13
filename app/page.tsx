import Image from "next/image"
import Link from "next/link"
import { Globe, BookOpen, Users, Plane } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LearnMoreDialog } from "@/components/learn-more-dialog"
import { ContactSheet } from "@/components/contact-sheet"
import { ApplyDialog } from "@/components/apply-dialog"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/dla-logo.webp"
              alt="DLA Logo"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <span className="text-2xl font-bold text-stone-800">Douglass Leadership Academy</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="#features" className="text-stone-600 hover:text-stone-900 transition-colors">
              Features
            </Link>
            <Link href="#program" className="text-stone-600 hover:text-stone-900 transition-colors">
              Program
            </Link>
            <Link href="#admissions" className="text-stone-600 hover:text-stone-900 transition-colors">
              Admissions
            </Link>
            <Link href="#faq" className="text-stone-600 hover:text-stone-900 transition-colors">
              FAQ
            </Link>
            <Link href="#vision" className="text-stone-600 hover:text-stone-900 transition-colors">
              Vision
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6">A World-Class Education for All</h1>
              <p className="text-xl md:text-2xl text-stone-700 mb-8">
                Empowering low-income American students through an innovative international boarding school experience.
              </p>
              <LearnMoreDialog />
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/frederick-douglass.jpg"
                alt="Portrait of Frederick Douglass, our inspiration for academic excellence and leadership"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </div>
        </section>

        <section id="features" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Why Douglass Leadership Academy?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Globe className="w-12 h-12 text-stone-700" />}
                title="Global Perspective"
                description="Develop cross-cultural fluency and broaden your worldview."
              />
              <FeatureCard
                icon={<BookOpen className="w-12 h-12 text-stone-700" />}
                title="Rigorous Academics"
                description="Experience a world-class IB curriculum that prepares you for top universities."
              />
              <FeatureCard
                icon={<Users className="w-12 h-12 text-stone-700" />}
                title="Supportive Community"
                description="Thrive in a safe, family-like atmosphere with 24/7 mentorship."
              />
              <FeatureCard
                icon={<Plane className="w-12 h-12 text-stone-700" />}
                title="Affordable Excellence"
                description="Access a premium education at a fraction of U.S. private school costs."
              />
            </div>
          </div>
        </section>

        <section id="program" className="bg-stone-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Our Program</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div id="classroom-image-container" className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  key="classroom-image"
                  src="/kyle-glenn-nXt5HtLmlgE-unsplash.jpg"
                  alt="Students engaged in classroom learning"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-stone-800 mb-4">World-Class Education in East Africa</h3>
                <p className="text-lg text-stone-700 mb-4">
                  At Douglass Leadership Academy, we leverage the cost advantages of East African boarding schools to
                  provide a premium educational experience at an affordable price.
                </p>
                <ul className="list-disc list-inside text-stone-600 space-y-2">
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
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg"
                    alt="Students engaged in discussion"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2 text-center md:text-left">
                <h2 className="text-3xl font-bold text-stone-900 mb-8">Admissions</h2>
                <p className="text-xl text-stone-700 mb-8">
                  We're committed to making our program accessible to talented, motivated students regardless of their
                  financial background.
                </p>
                <ApplyDialog />
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-stone-800 mb-4">Why "Douglass" Leadership Academy?</h3>
                <p className="text-stone-600 mb-8">
                  Named after Frederick Douglass, one of the most influential African Americans in history and a Rochester native, 
                  our academy embodies his spirit of educational empowerment and social transformation.
                </p>
                
                <h3 className="text-xl font-semibold text-stone-800 mb-4">How do you ensure student safety?</h3>
                <p className="text-stone-600 mb-8">
                  Our partner schools are located in secure, upscale areas and provide round-the-clock supervision. East African 
                  boarding schools have a long-standing reputation for safety and security, often exceeding what students experience 
                  in challenging urban environments.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-800 mb-4">What about medical care?</h3>
                <p className="text-stone-600 mb-8">
                  Students have access to quality healthcare facilities in major East African cities, often at more affordable rates 
                  than in the U.S. Our comprehensive health insurance coverage ensures students receive excellent medical care when needed.
                </p>

                <h3 className="text-xl font-semibold text-stone-800 mb-4">How do you maintain family connections?</h3>
                <p className="text-stone-600 mb-8">
                  We facilitate regular virtual check-ins between parents and students, provide 24/7 staff support, and create a 
                  family-like atmosphere through our dedicated mentorship program. Parents also have the opportunity for annual visits.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="vision" className="bg-stone-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Our Vision</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-stone-800 mb-4">Building Sustainable Development</h3>
                <p className="text-lg text-stone-700 mb-4">
                  Douglass Leadership Academy is more than a school—it's a blueprint for sustainable development through 
                  educational arbitrage. By leveraging cost advantages in East Africa, we provide world-class education 
                  while creating positive economic impact in local communities.
                </p>
                <ul className="list-disc list-inside text-stone-600 space-y-2">
                  <li>Creating local employment opportunities</li>
                  <li>Developing infrastructure in host communities</li>
                  <li>Fostering international cultural exchange</li>
                  <li>Supporting local student scholarships</li>
                </ul>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg"
                  alt="Students engaged in discussion"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-stone-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="text-xl mb-8">
              Have questions? We'd love to hear from you. Reach out to learn more about Douglass Leadership Academy.
            </p>
            <ContactSheet />
          </div>
        </section>
      </main>

      <footer className="bg-stone-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Douglass Leadership Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-stone-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-stone-800 mb-2">{title}</h3>
      <p className="text-stone-600">{description}</p>
    </div>
  )
}
