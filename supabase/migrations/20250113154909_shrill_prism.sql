/*
  # Add Instagram access token

  1. Changes
    - Add `access_token` column to `instagram_accounts` table
    
  2. Security
    - Maintain existing RLS policies
*/

ALTER TABLE instagram_accounts
ADD COLUMN IF NOT EXISTS access_token text;