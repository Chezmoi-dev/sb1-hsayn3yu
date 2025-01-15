/*
  # Fix Instagram accounts policies

  1. Changes
    - Add existence checks for policies before creation
    - Ensure idempotent policy creation
*/

-- Drop existing policies if they exist
DO $$ BEGIN
  DROP POLICY IF EXISTS "Users can insert their own instagram accounts" ON instagram_accounts;
  DROP POLICY IF EXISTS "Users can view their own instagram accounts" ON instagram_accounts;
  DROP POLICY IF EXISTS "Users can update their own instagram accounts" ON instagram_accounts;
  DROP POLICY IF EXISTS "Users can delete their own instagram accounts" ON instagram_accounts;
EXCEPTION
  WHEN undefined_table THEN
    NULL;
END $$;

-- Create table if it doesn't exist
CREATE TABLE IF NOT EXISTS instagram_accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  instagram_username text NOT NULL,
  connected_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, instagram_username)
);

-- Enable RLS
ALTER TABLE instagram_accounts ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can insert their own instagram accounts"
  ON instagram_accounts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own instagram accounts"
  ON instagram_accounts
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own instagram accounts"
  ON instagram_accounts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own instagram accounts"
  ON instagram_accounts
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);