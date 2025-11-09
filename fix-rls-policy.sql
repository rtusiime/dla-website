-- Fix RLS policy for contact_submissions table
-- This script will drop and recreate the policies to ensure they work correctly

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous inserts" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated reads" ON contact_submissions;

-- Ensure RLS is enabled
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anonymous inserts (for the contact form)
-- This allows anyone (including server-side API routes with anon key) to insert
CREATE POLICY "Allow anonymous inserts" ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create a policy that allows authenticated users to read all submissions
CREATE POLICY "Allow authenticated reads" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
