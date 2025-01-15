import { supabase } from './supabase';

const INSTAGRAM_API_URL = 'https://api.instagram.com/oauth/authorize';
const INSTAGRAM_TOKEN_URL = 'https://api.instagram.com/oauth/access_token';
const INSTAGRAM_GRAPH_API_URL = 'https://graph.instagram.com';

interface InstagramConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

const config: InstagramConfig = {
  clientId: import.meta.env.VITE_INSTAGRAM_CLIENT_ID,
  clientSecret: import.meta.env.VITE_INSTAGRAM_CLIENT_SECRET,
  redirectUri: import.meta.env.VITE_INSTAGRAM_REDIRECT_URI,
};

export const getInstagramAuthUrl = () => {
  const params = new URLSearchParams({
    client_id: config.clientId,
    redirect_uri: config.redirectUri,
    scope: 'instagram_basic,instagram_content_publish',
    response_type: 'code',
    state: crypto.randomUUID(), // セキュリティ対策として state パラメータを追加
  });

  return `${INSTAGRAM_API_URL}?${params.toString()}`;
};

export const getInstagramAccessToken = async (code: string) => {
  const formData = new URLSearchParams();
  formData.append('client_id', config.clientId);
  formData.append('client_secret', config.clientSecret);
  formData.append('grant_type', 'authorization_code');
  formData.append('redirect_uri', config.redirectUri);
  formData.append('code', code);

  const response = await fetch(INSTAGRAM_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error_message || 'Failed to get Instagram access token');
  }

  return response.json();
};

export const getLongLivedAccessToken = async (shortLivedToken: string) => {
  const params = new URLSearchParams({
    grant_type: 'ig_exchange_token',
    client_secret: config.clientSecret,
    access_token: shortLivedToken,
  });

  const response = await fetch(`${INSTAGRAM_GRAPH_API_URL}/access_token?${params.toString()}`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error_message || 'Failed to get long-lived access token');
  }

  return response.json();
};

export const getUserProfile = async (accessToken: string) => {
  const response = await fetch(
    `${INSTAGRAM_GRAPH_API_URL}/me?fields=id,username,account_type&access_token=${accessToken}`
  );
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error_message || 'Failed to get user profile');
  }

  return response.json();
};

export const saveInstagramConnection = async (username: string, accessToken: string) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('User not authenticated');

  const { error } = await supabase
    .from('instagram_accounts')
    .upsert([
      {
        user_id: user.id,
        instagram_username: username,
        access_token: accessToken,
        connected_at: new Date().toISOString(),
      },
    ], { onConflict: 'user_id, instagram_username' });

  if (error) throw error;
};