import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    // Validate that we have some data
    if (!data || Object.keys(data).length === 0) {
      return NextResponse.json(
        { error: 'Missing form data' },
        { status: 400 }
      )
    }

    const submission = {
      id: Date.now(),
      ...data,
      timestamp: new Date().toISOString(),
    }

    // Get the data directory path
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'surveys.json')

    // Create data directory if it doesn't exist
    try {
      await fs.access(dataDir)
    } catch {
      await fs.mkdir(dataDir)
    }

    // Read existing surveys or create empty array
    let surveys = []
    try {
      const fileContent = await fs.readFile(filePath, 'utf8')
      surveys = JSON.parse(fileContent)
    } catch {
      // File doesn't exist yet, use empty array
    }

    // Add new submission
    surveys.push(submission)

    // Write back to file
    await fs.writeFile(filePath, JSON.stringify(surveys, null, 2))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving survey:', error)
    return NextResponse.json(
      { error: 'Failed to save survey information' },
      { status: 500 }
    )
  }
}
