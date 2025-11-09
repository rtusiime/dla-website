-- Create the contact_submissions table in Supabase
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT,
  interest TEXT NOT NULL,
  how_heard TEXT,
  message TEXT NOT NULL,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_submitted_at ON contact_submissions(submitted_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anonymous inserts (for the contact form)
CREATE POLICY "Allow anonymous inserts" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create a policy that allows authenticated users to read all submissions
CREATE POLICY "Allow authenticated reads" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Comments for documentation
COMMENT ON TABLE contact_submissions IS 'Stores contact form submissions from the DLA website';
COMMENT ON COLUMN contact_submissions.name IS 'Full name of the person submitting the form';
COMMENT ON COLUMN contact_submissions.email IS 'Email address of the submitter';
COMMENT ON COLUMN contact_submissions.role IS 'Optional role (e.g., Parent, Teacher, etc.)';
COMMENT ON COLUMN contact_submissions.interest IS 'Type of interest (parent, educator, donor, etc.)';
COMMENT ON COLUMN contact_submissions.how_heard IS 'How they heard about DLA';
COMMENT ON COLUMN contact_submissions.message IS 'The message/inquiry from the submitter';
COMMENT ON COLUMN contact_submissions.submitted_at IS 'Timestamp when the form was submitted';
