import React, { useState } from 'react';
import { LayoutDashboard, BarChart3, TrendingUp, Brain, Calendar, FileText, LogOut, Users, Eye, MousePointer, Link2, Image, Film, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';
import EngagementChart from '../components/EngagementChart';
import TrendingTopics from '../components/TrendingTopics';
import AIAdviceCard from '../components/AIAdviceCard';
import PostCalendar from '../components/PostCalendar';
import InstagramConnectModal from '../components/InstagramConnect';

const MENU_ITEMS = [
  { icon: LayoutDashboard, label: 'ダッシュボード', id: 'dashboard' },
  { icon: BarChart3, label: 'アナリティクス', id: 'analytics' },
  { icon: TrendingUp, label: 'トレンド', id: 'trends' },
  { icon: Brain, label: 'AIアドバイス', id: 'ai-advice' },
  { icon: Calendar, label: 'スケジュール', id: 'schedule' },
  { icon: FileText, label: 'レポート', id: 'reports' },
  { icon: Link2, label: 'アフィリエイト', id: 'affiliate' },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success('ログアウトしました');
      navigate('/');
    } catch (error) {
      toast.error('ログアウトに失敗しました');
      console.error('Error:', error);
    }
  };

  const renderStats = () => (
    <div className="grid grid-cols-3 gap-6 mb-8">
      {[
        { label: 'フォロワー数', value: '1,234', change: '+5.2%' },
        { label: 'エンゲージメント率', value: '4.8%', change: '+0.3%' },
        { label: '投稿数', value: '156', change: '+2' },
      ].map((stat, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-gray-500 text-sm">{stat.label}</h3>
          <div className="flex items-end mt-2">
            <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
            <span className="ml-2 text-sm text-green-500">{stat.change}</span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-8">
      {/* 期間選択 */}
      <div className="flex justify-end space-x-2">
        {[
          { id: 'week', label: '週間' },
          { id: 'month', label: '月間' },
          { id: 'year', label: '年間' },
        ].map((period) => (
          <button
            key={period.id}
            onClick={() => setSelectedPeriod(period.id)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedPeriod === period.id
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-600 hover:bg-purple-50'
            }`}
          >
            {period.label}
          </button>
        ))}
      </div>

      {/* アカウント概要 */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">アカウント概要</h3>
        <div className="grid grid-cols-5 gap-6">
          {[
            { icon: Users, label: 'フォロワー数', value: '1,234', change: '+5.2%' },
            { icon: Eye, label: 'リーチ数', value: '12,345', change: '+8.7%' },
            { icon: BarChart3, label: 'インプレッション', value: '45,678', change: '+12.3%' },
            { icon: MousePointer, label: 'プロフィール訪問', value: '789', change: '+3.1%' },
            { icon: Link2, label: 'リンククリック', value: '234', change: '+6.8%' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">
                <stat.icon className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-xl font-bold text-gray-800 mt-1">{stat.value}</p>
              <p className="text-sm text-green-500">{stat.change}</p>
            </div>
          ))}
        </div>
      </div>

      {/* フォロワー分析 */}
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">フォロワー属性</h3>
          <div className="space-y-6">
            {/* 性別分布 */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">性別</h4>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-purple-600">
                      女性 65%
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      男性 35%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-100">
                  <div className="w-[65%] bg-purple-500"></div>
                  <div className="w-[35%] bg-blue-500"></div>
                </div>
              </div>
            </div>

            {/* 年齢層分布 */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">年齢層</h4>
              {[
                { age: '18-24', percentage: 30 },
                { age: '25-34', percentage: 45 },
                { age: '35-44', percentage: 15 },
                { age: '45+', percentage: 10 },
              ].map((item) => (
                <div key={item.age} className="mb-2">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>{item.age}歳</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-100">
                    <div
                      style={{ width: `${item.percentage}%` }}
                      className="bg-purple-500"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 地域分布 */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">地域分布</h3>
          <div className="space-y-4">
            {[
              { country: '日本', percentage: 75, count: '925' },
              { country: '米国', percentage: 10, count: '123' },
              { country: '中国', percentage: 8, count: '99' },
              { country: '韓国', percentage: 5, count: '62' },
              { country: 'その他', percentage: 2, count: '25' },
            ].map((item) => (
              <div key={item.country} className="flex items-center">
                <div className="w-24 text-sm text-gray-600">{item.country}</div>
                <div className="flex-1 mx-4">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-100">
                    <div
                      style={{ width: `${item.percentage}%` }}
                      className="bg-purple-500"
                    ></div>
                  </div>
                </div>
                <div className="w-20 text-sm text-gray-600 text-right">
                  {item.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 投稿パフォーマンス */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">投稿パフォーマンス</h3>
        
        {/* 投稿タイプ別分析 */}
        <div className="mb-8">
          <h4 className="text-sm font-medium text-gray-700 mb-4">投稿タイプ別パフォーマンス</h4>
          <div className="grid grid-cols-4 gap-6">
            {[
              { icon: Image, type: '写真投稿', engagement: '5.2%', count: '89' },
              { icon: Film, type: '動画', engagement: '6.8%', count: '34' },
              { icon: Instagram, type: 'リール', engagement: '8.4%', count: '21' },
              { icon: Eye, type: 'ストーリー', engagement: '4.1%', count: '12' },
            ].map((type) => (
              <div key={type.type} className="text-center p-4 bg-gray-50 rounded-lg">
                <type.icon className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-800">{type.type}</p>
                <p className="text-xs text-gray-500 mt-1">
                  エンゲージメント率: {type.engagement}
                </p>
                <p className="text-xs text-gray-500">
                  投稿数: {type.count}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ベストパフォーマンス投稿 */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-4">ベストパフォーマンス投稿</h4>
          <div className="space-y-4">
            {[
              {
                image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
                type: 'リール',
                engagement: '12.5%',
                likes: '2,345',
                comments: '123',
                saves: '456',
                date: '2024/03/15',
              },
              {
                image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
                type: '写真',
                engagement: '10.2%',
                likes: '1,987',
                comments: '98',
                saves: '345',
                date: '2024/03/12',
              },
            ].map((post, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <img
                  src={post.image}
                  alt={`Top performing post ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="ml-4 flex-1">
                  <div className="flex items-center">
                    <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded">
                      {post.type}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">{post.date}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4 mt-2">
                    <div>
                      <p className="text-xs text-gray-500">エンゲージメント率</p>
                      <p className="text-sm font-medium text-gray-800">{post.engagement}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">いいね</p>
                      <p className="text-sm font-medium text-gray-800">{post.likes}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">コメント</p>
                      <p className="text-sm font-medium text-gray-800">{post.comments}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">保存</p>
                      <p className="text-sm font-medium text-gray-800">{post.saves}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            {renderStats()}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-8">
                <EngagementChart />
                <TrendingTopics />
              </div>
              <div className="space-y-8">
                <AIAdviceCard />
                <PostCalendar />
              </div>
            </div>
          </div>
        );
      case 'analytics':
        return renderAnalytics();
      case 'trends':
        return <TrendingTopics />;
      case 'ai-advice':
        return <AIAdviceCard />;
      case 'schedule':
        return <PostCalendar />;
      case 'reports':
        return (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">レポート</h3>
            <p className="text-gray-600">レポート機能は近日公開予定です。</p>
          </div>
        );
      case 'affiliate':
        return (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">アフィリエイト</h3>
            <p className="text-gray-600">アフィリエイト機能は近日公開予定です。</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg flex flex-col">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-purple-600">InstaBuddy</h1>
          <p className="text-sm text-gray-500 mt-2">AIパワード分析ツール</p>
        </div>
        <nav className="flex-1 flex flex-col justify-between overflow-y-auto">
          <div className="py-4">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full px-8 py-4 flex items-center transition-colors ${
                  activeMenu === item.id
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                <item.icon className="w-5 h-5 mr-4" />
                {item.label}
              </button>
            ))}
          </div>
          <div className="p-4">
            <button
              onClick={handleLogout}
              className="w-full px-8 py-4 flex items-center text-red-600 hover:bg-red-50 transition-colors rounded-lg"
            >
              <LogOut className="w-5 h-5 mr-4" />
              ログアウト
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover border-2 border-purple-100"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {MENU_ITEMS.find(item => item.id === activeMenu)?.label}
              </h2>
              <div className="mt-1">
                <div className="text-gray-800 font-medium">山田 花子</div>
                <div className="text-gray-500 text-sm">@yamada_hanako</div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsConnectModalOpen(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
          >
            <Instagram className="w-5 h-5 mr-2" />
            アカウント接続
          </button>
        </header>

        {/* Dynamic Content */}
        {renderContent()}

        {/* Instagram Connect Modal */}
        <InstagramConnectModal
          isOpen={isConnectModalOpen}
          onClose={() => setIsConnectModalOpen(false)}
        />
      </main>
    </div>
  );
};

export default Dashboard;