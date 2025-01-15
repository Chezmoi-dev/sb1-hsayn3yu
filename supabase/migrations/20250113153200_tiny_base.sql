/*
  # Create Instagram accounts table

  1. New Tables
    - `instagram_accounts`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `instagram_username` (text)
      - `connected_at` (timestamp)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `instagram_accounts` table
    - Add policies for authenticated users to manage their own accounts
*/

CREATE TABLE IF NOT EXISTS instagram_accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  instagram_username text NOT NULL,
  connected_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, instagram_username)
);

ALTER TABLE instagram_accounts ENABLE ROW LEVEL SECURITY;

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