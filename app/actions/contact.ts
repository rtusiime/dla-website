"use server"

import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client with environment variables
const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY!

// Create a more resilient Supabase client
const getSupabaseClient = () => {
  try {
    return createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false },
      db: { schema: "public" },
    })
  } catch (error) {
    console.error("Error creating Supabase client:", error)
    return null
  }
}

export async function submitContactForm(formData: {
  name: string
  email: string
  message: string
  interest_type?: string
  how_heard?: string
  role?: string
}) {
  console.log("Server action called with data:", formData)

  try {
    const supabase = getSupabaseClient()

    if (!supabase) {
      console.error("Failed to initialize Supabase client")
      return { success: false, error: "Database connection failed" }
    }

    // First, try to create the table if it doesn't exist
    try {
      await supabase.rpc("create_contacts_table").maybeSingle()
    } catch (error) {
      console.log("RPC call failed, trying direct SQL:", error)

      // If RPC fails, try direct SQL (this might fail too, but we'll continue anyway)
      try {
        await supabase.from("_schema").select("*").limit(1)
      } catch (schemaError) {
        console.error("Schema check failed:", schemaError)
      }
    }

    // Try to insert the data
    try {
      const { data, error } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          interest_type: formData.interest_type || null,
          how_heard: formData.how_heard || null,
          role: formData.role || null,
        },
      ])

      if (error) {
        console.error("Error inserting data:", error)
        return { success: false, error: error.message }
      }

      return { success: true, data }
    } catch (insertError) {
      console.error("Insert operation failed:", insertError)
      return { success: false, error: "Failed to save your information" }
    }
  } catch (error) {
    console.error("Unexpected error in submitContactForm:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}
