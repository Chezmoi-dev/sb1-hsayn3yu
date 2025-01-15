import React from 'react';
import { Calendar as CalendarIcon, Plus } from 'lucide-react';

const PostCalendar = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">投稿スケジュール</h3>
        <button className="bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-1" />
          投稿作成
        </button>
      </div>
      <div className="space-y-3">
        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800">新商品のお知らせ</p>
            <p className="text-xs text-gray-500">本日 19:00</p>
          </div>
        </div>
        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800">春の新作コレクション</p>
            <p className="text-xs text-gray-500">明日 12:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCalendar;