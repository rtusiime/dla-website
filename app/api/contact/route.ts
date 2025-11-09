import { NextResponse } from "next/server"
import { createSupabaseServerClient } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    console.log("API route received form data:", formData)

    // Initialize Supabase server client (bypasses RLS)
    const supabase = createSupabaseServerClient()

    // Insert the form data into Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          role: formData.role || null,
          interest: formData.interest,
          how_heard: formData.howHeard,
          message: formData.message,
          submitted_at: formData.submitted_at || new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    console.log("Successfully saved to Supabase:", data)

    // Return success
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("API route error:", error)
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 })
  }
}
