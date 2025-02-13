import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, message } = data

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const submission = {
      id: Date.now(),
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    }

    // Get the data directory path
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'contacts.json')

    // Create data directory if it doesn't exist
    try {
      await fs.access(dataDir)
    } catch {
      await fs.mkdir(dataDir)
    }

    // Read existing contacts or create empty array
    let contacts = []
    try {
      const fileContent = await fs.readFile(filePath, 'utf8')
      contacts = JSON.parse(fileContent)
    } catch {
      // File doesn't exist yet, use empty array
    }

    // Add new submission
    contacts.push(submission)

    // Write back to file
    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving contact:', error)
    return NextResponse.json(
      { error: 'Failed to save contact information' },
      { status: 500 }
    )
  }
}
