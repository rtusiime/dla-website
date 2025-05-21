CREATE OR REPLACE FUNCTION create_contacts_table()
RETURNS void AS $$
BEGIN
  -- Check if the table exists
  IF NOT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public'
    AND table_name = 'contacts'
  ) THEN
    -- Create the contacts table
    CREATE TABLE contacts (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT,
      subject TEXT,
      interest_type TEXT,
      how_heard TEXT,
      role TEXT,
      status TEXT DEFAULT 'new',
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  END IF;
END;
$$ LANGUAGE plpgsql;
