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
import { ContactSheet } from "./contact-sheet"

export function ApplyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-stone-800 hover:bg-stone-900 text-white transition-colors">
          Apply Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Applications Opening Soon</DialogTitle>
          <DialogDescription>
            We're currently finalizing our application process. Leave your contact information to receive updates about admissions.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 pt-4">
          <p className="text-center text-stone-600">
            Be among the first to know when applications open. We'll notify you about important dates, requirements, and scholarship opportunities.
          </p>
          <ContactSheet />
        </div>
      </DialogContent>
    </Dialog>
  )
}
