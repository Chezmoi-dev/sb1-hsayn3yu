import React from 'react';
import { BarChart3 } from 'lucide-react';

const EngagementChart = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">エンゲージメント分析</h3>
        <button className="text-purple-600 hover:text-purple-700">
          <BarChart3 className="w-5 h-5" />
        </button>
      </div>
      <div className="h-64 flex items-center justify-center text-gray-400">
        グラフ表示エリア
      </div>
    </div>
  );
};

export default EngagementChart;