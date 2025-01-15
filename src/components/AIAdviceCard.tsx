import React, { useState } from 'react';
import { Brain, ChevronRight, Image, MessageCircle, Target, TrendingUp, AlertCircle, CheckCircle, BarChart } from 'lucide-react';

const AIAdviceCard = () => {
  const [selectedAdvice, setSelectedAdvice] = useState<string | null>(null);

  const adviceCategories = [
    {
      id: 'content',
      title: '投稿内容の改善提案',
      icon: MessageCircle,
      advice: [
        {
          type: 'caption',
          title: 'キャプションの改善',
          description: 'ハッシュタグの使用が少なめです。関連性の高いハッシュタグを5-10個追加することで、リーチが約25%向上する可能性があります。',
          suggestions: [
            '#ファッションコーデ',
            '#春コーデ2024',
            '#大人カジュアル'
          ]
        },
        {
          type: 'image',
          title: '画像の最適化',
          description: '最近の投稿は全体的に暗めです。明るさを15%程度上げることで、エンゲージメント率が向上する傾向があります。',
          tips: [
            '自然光を活用する',
            '明るい背景を選ぶ',
            'コントラストを適度に調整する'
          ]
        }
      ]
    },
    {
      id: 'followers',
      title: 'フォロワー分析とターゲット設定',
      icon: Target,
      advice: [
        {
          title: 'コアターゲット',
          description: 'フォロワーの75%が20-35歳の女性で、ファッションとライフスタイルに関心が高い層です。',
          recommendations: [
            'トレンド感のあるファッションアイテムの紹介',
            'デイリーコーディネートの提案',
            'ライフスタイル関連の情報発信'
          ]
        }
      ]
    },
    {
      id: 'performance',
      title: '投稿パフォーマンス評価',
      icon: BarChart,
      advice: [
        {
          title: 'ベストタイミング',
          description: 'フォロワーの活動が最も活発な18:00〜20:00の時間帯に投稿することで、エンゲージメント率が約15%向上する可能性があります。',
        },
        {
          title: '投稿タイプ分析',
          description: 'リール動画の平均エンゲージメント率が通常の投稿より32%高くなっています。週2-3回のリール投稿を推奨します。',
        }
      ]
    }
  ];

  const renderAdviceDetail = (category: any) => {
    return (
      <div className="space-y-6">
        {category.advice.map((item: any, index: number) => (
          <div key={index} className="bg-purple-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2">{item.title}</h4>
            <p className="text-sm text-gray-600 mb-3">{item.description}</p>
            
            {item.suggestions && (
              <div className="mt-2">
                <p className="text-sm font-medium text-gray-700 mb-2">おすすめハッシュタグ：</p>
                <div className="flex flex-wrap gap-2">
                  {item.suggestions.map((tag: string, i: number) => (
                    <span key={i} className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {item.tips && (
              <div className="mt-2">
                <p className="text-sm font-medium text-gray-700 mb-2">改善のポイント：</p>
                <ul className="space-y-1">
                  {item.tips.map((tip: string, i: number) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {item.recommendations && (
              <div className="mt-2">
                <p className="text-sm font-medium text-gray-700 mb-2">コンテンツ提案：</p>
                <ul className="space-y-1">
                  {item.recommendations.map((rec: string, i: number) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">AIアドバイス</h3>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500">最終更新: 10分前</span>
          <button className="text-purple-600 hover:text-purple-700">
            <Brain className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* アラート */}
        <div className="flex items-start p-4 bg-yellow-50 rounded-lg border border-yellow-100">
          <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div className="ml-3">
            <h4 className="font-medium text-gray-800">最新の分析結果があります</h4>
            <p className="text-sm text-gray-600 mt-1">
              過去7日間のデータを基に、新しいアドバイスが生成されました。
            </p>
          </div>
        </div>

        {/* アドバイスカテゴリー */}
        <div className="grid gap-4">
          {adviceCategories.map((category) => (
            <div key={category.id}>
              <button
                onClick={() => setSelectedAdvice(selectedAdvice === category.id ? null : category.id)}
                className="w-full"
              >
                <div className={`p-4 rounded-lg border transition-colors ${
                  selectedAdvice === category.id
                    ? 'bg-purple-50 border-purple-200'
                    : 'bg-white border-gray-200 hover:bg-purple-50'
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <category.icon className="w-5 h-5 text-purple-600" />
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-800">{category.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {category.id === 'content' && '投稿内容を最適化するためのアドバイス'}
                          {category.id === 'followers' && 'フォロワー層に合わせたコンテンツ提案'}
                          {category.id === 'performance' && '投稿のパフォーマンスを向上させるヒント'}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                      selectedAdvice === category.id ? 'transform rotate-90' : ''
                    }`} />
                  </div>
                </div>
              </button>
              
              {/* 展開時の詳細内容 */}
              {selectedAdvice === category.id && (
                <div className="mt-4 pl-12">
                  {renderAdviceDetail(category)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIAdviceCard;