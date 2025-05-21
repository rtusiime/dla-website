import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    console.log("API route received form data:", formData)

    // In a real application, you would send this data to your email service
    // or store it in a database. For now, we'll just log it.

    // Return success
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("API route error:", error)
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 })
  }
}
