"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function LearnMoreDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-stone-800 hover:bg-stone-900 text-white transition-colors">
          Learn More
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">About Douglass Leadership Academy</DialogTitle>
          <DialogDescription className="text-base">
            Transforming lives through innovative international education
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">Our Mission</h4>
            <p className="text-stone-600">
              Douglass Leadership Academy is dedicated to providing world-class education to low-income American students through an innovative international boarding school model. By leveraging the cost advantages of East African boarding schools, we make premium education accessible to all.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Key Benefits</h4>
            <ul className="list-disc list-inside text-stone-600 space-y-2">
              <li>International Baccalaureate (IB) curriculum</li>
              <li>Cultural immersion and global perspective</li>
              <li>Small class sizes with personalized attention</li>
              <li>Comprehensive support system</li>
              <li>Affordable excellence in education</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Our Impact</h4>
            <p className="text-stone-600">
              We're not just providing education – we're creating future leaders who understand global perspectives and can drive positive change in their communities. Our program combines academic excellence with cultural immersion, preparing students for success in an increasingly interconnected world.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
