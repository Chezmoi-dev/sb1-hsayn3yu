import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, TrendingUp, Brain, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Instagram className="w-8 h-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-purple-600">InstaBuddy</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-purple-600">ログイン</Link>
              <Link
                to="/signup"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                無料で始める
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            AIがあなたの<br className="sm:hidden" />
            Instagram運用を<br className="sm:hidden" />
            サポートします
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            InstaBuddyは、初心者でも簡単にInstagramの運用を改善できるAI搭載の分析ツールです。
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors text-lg"
          >
            14日間無料で試す
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              InstaBuddyの主な機能
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              あなたのInstagramアカウントを成長させるために必要な機能を全て揃えています
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'データ分析',
                description: 'フォロワー数やエンゲージメント率など、重要なメトリクスを簡単に把握できます。',
              },
              {
                icon: Brain,
                title: 'AIアドバイス',
                description: '投稿内容の改善点や最適な投稿時間など、AIが具体的なアドバイスを提供します。',
              },
              {
                icon: Calendar,
                title: '投稿管理',
                description: '効率的な投稿管理で、コンテンツの計画と実行を簡単に行えます。',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-purple-50 rounded-xl p-6">
                <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              シンプルな料金プラン
            </h2>
            <p className="text-gray-600">
              14日間の無料トライアルで、全ての機能をお試しいただけます
            </p>
          </div>

          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">スタンダードプラン</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">¥2,980</span>
                <span className="text-gray-600">/月</span>
              </div>
              <div className="space-y-4">
                {[
                  'アカウント分析',
                  'AIアドバイス',
                  '投稿スケジュール管理',
                  'レポート作成',
                  'メールサポート',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/signup"
                className="mt-8 block w-full bg-purple-600 text-white text-center px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                14日間無料で試す
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Instagram className="w-6 h-6 text-purple-600" />
                <span className="ml-2 text-lg font-bold text-purple-600">InstaBuddy</span>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                InstagramのAIパワード分析ツール
              </p>
            </div>
            {[
              {
                title: '製品',
                links: ['機能', '料金プラン', 'よくある質問'],
              },
              {
                title: 'サポート',
                links: ['ヘルプセンター', 'お問い合わせ', 'ステータス'],
              },
              {
                title: '会社情報',
                links: [
                  { text: '会社概要', href: '#' },
                  { text: 'プライバシーポリシー', href: '/privacy-policy' },
                  { text: '利用規約', href: '#' },
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900 mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {typeof link === 'string' ? (
                        <a href="#" className="text-sm text-gray-600 hover:text-purple-600">
                          {link}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-sm text-gray-600 hover:text-purple-600"
                        >
                          {link.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;