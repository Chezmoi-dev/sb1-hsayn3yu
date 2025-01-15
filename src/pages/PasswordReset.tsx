import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, ArrowLeft, Mail } from 'lucide-react';

const PasswordReset = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/login" className="inline-flex items-center text-gray-600 hover:text-purple-600">
            <ArrowLeft className="w-5 h-5 mr-2" />
            ログインに戻る
          </Link>
        </div>
      </header>

      {/* Password Reset Form */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Instagram className="w-8 h-8 text-purple-600" />
              <span className="ml-2 text-2xl font-bold text-purple-600">InstaBuddy</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">パスワードをリセット</h2>
            <p className="text-gray-600 mt-2">
              登録したメールアドレスを入力してください。<br />
              パスワード再設定用のリンクをお送りします。
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              リセットリンクを送信
            </button>
          </form>

          <div className="mt-8 space-y-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                メールが届かない場合は、迷惑メールフォルダをご確認ください。
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                お困りの場合は
                <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                  カスタマーサポート
                </a>
                までご連絡ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;