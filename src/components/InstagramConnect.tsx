import React from 'react';
import { Instagram, X } from 'lucide-react';
import { getInstagramAuthUrl } from '../lib/instagram';
import toast from 'react-hot-toast';

interface InstagramConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstagramConnectModal: React.FC<InstagramConnectModalProps> = ({ isOpen, onClose }) => {
  const handleConnect = () => {
    try {
      const authUrl = getInstagramAuthUrl();
      window.location.href = authUrl;
    } catch (error) {
      console.error('Error:', error);
      toast.error('Instagram連携の開始に失敗しました');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
            <Instagram className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Instagramアカウントを連携</h3>
          <p className="text-sm text-gray-500 mt-2">
            アカウントを連携して、分析機能を有効化しましょう
          </p>
        </div>

        <button
          onClick={handleConnect}
          className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
        >
          <Instagram className="w-5 h-5 mr-2" />
          Instagramで続ける
        </button>

        <p className="text-xs text-gray-500 mt-4 text-center">
          ※ アカウントの連携には、Instagramの認証が必要です
        </p>
      </div>
    </div>
  );
};

export default InstagramConnectModal;