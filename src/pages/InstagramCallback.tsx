import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getInstagramAccessToken, getLongLivedAccessToken, getUserProfile, saveInstagramConnection } from '../lib/instagram';
import toast from 'react-hot-toast';

const InstagramCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const code = searchParams.get('code');
        const state = searchParams.get('state');
        const error = searchParams.get('error');
        const errorReason = searchParams.get('error_reason');
        const errorDescription = searchParams.get('error_description');

        if (error || errorReason || errorDescription) {
          throw new Error(errorDescription || 'Instagram認証がキャンセルされました');
        }

        if (!code) {
          throw new Error('認証コードが見つかりません');
        }

        // 短期アクセストークンを取得
        const tokenData = await getInstagramAccessToken(code);
        
        // 長期アクセストークンに交換
        const longLivedToken = await getLongLivedAccessToken(tokenData.access_token);
        
        // ユーザープロフィールを取得
        const profile = await getUserProfile(longLivedToken.access_token);
        
        // 接続情報を保存
        await saveInstagramConnection(profile.username, longLivedToken.access_token);

        toast.success('Instagramアカウントを連携しました');
        navigate('/dashboard');
      } catch (error: any) {
        console.error('Error:', error);
        setError(error.message || 'Instagram連携に失敗しました');
        toast.error(error.message || 'Instagram連携に失敗しました');
        setTimeout(() => navigate('/dashboard'), 3000);
      } finally {
        setLoading(false);
      }
    };

    handleCallback();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-8 shadow-lg">
        {loading ? (
          <div className="flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            <p className="text-gray-600">Instagram連携処理中...</p>
          </div>
        ) : error ? (
          <div className="text-center">
            <p className="text-red-600">{error}</p>
            <p className="text-sm text-gray-500 mt-2">ダッシュボードに戻ります...</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default InstagramCallback;