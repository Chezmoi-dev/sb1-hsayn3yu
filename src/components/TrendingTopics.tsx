import React, { useEffect, useState } from 'react';
import { TrendingUp, ExternalLink, RefreshCw } from 'lucide-react';
import { fetchTrends } from '../lib/trends';

interface TrendItem {
  keyword: string;
  volume: string;
  url: string;
}

const TrendingTopics = () => {
  const [trends, setTrends] = useState<TrendItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadTrends = async () => {
    setRefreshing(true);
    const data = await fetchTrends();
    setTrends(data);
    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    loadTrends();
  }, []);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h3 className="text-lg font-semibold text-gray-800">トレンドキーワード</h3>
          <span className="ml-2 text-xs text-gray-500">by Google Trends</span>
        </div>
        <button
          onClick={loadTrends}
          disabled={refreshing}
          className="text-purple-600 hover:text-purple-700 disabled:opacity-50"
        >
          <RefreshCw className={`w-5 h-5 ${refreshing ? 'animate-spin' : ''}`} />
        </button>
      </div>
      
      {loading ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {trends.map((trend, index) => (
            <a
              key={index}
              href={trend.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors group"
            >
              <span className="text-gray-700 group-hover:text-purple-600">{trend.keyword}</span>
              <div className="flex items-center">
                <span className="text-sm text-purple-600">{trend.volume}</span>
                <ExternalLink className="w-4 h-4 ml-2 text-gray-400 group-hover:text-purple-600" />
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingTopics;