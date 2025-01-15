import toast from 'react-hot-toast';

interface TrendItem {
  keyword: string;
  volume: string;
  url: string;
}

export async function fetchTrends(): Promise<TrendItem[]> {
  try {
    // Google Trends APIのエンドポイント（CORSプロキシを使用）
    const response = await fetch('https://trends.google.com/trends/api/dailytrends?hl=ja&tz=-540&geo=JP');
    
    if (!response.ok) {
      throw new Error('トレンドの取得に失敗しました');
    }

    const data = await response.json();
    
    // APIレスポンスを整形
    return data.default.trendingSearchesDays[0].trendingSearches.map((trend: any) => ({
      keyword: trend.title.query,
      volume: `${trend.formattedTraffic}+`,
      url: trend.shareUrl
    })).slice(0, 10); // 上位10件のみ取得

  } catch (error) {
    console.error('Error fetching trends:', error);
    toast.error('トレンドの取得に失敗しました');
    return [
      { keyword: '#春コーデ', volume: '125K', url: 'https://trends.google.com/trends/explore?q=%23%E6%98%A5%E3%82%B3%E3%83%BC%E3%83%87' },
      { keyword: '#カフェ巡り', volume: '89K', url: 'https://trends.google.com/trends/explore?q=%23%E3%82%AB%E3%83%95%E3%82%A7%E5%B7%A1%E3%82%8A' },
      { keyword: '#インテリア', volume: '76K', url: 'https://trends.google.com/trends/explore?q=%23%E3%82%A4%E3%83%B3%E3%83%86%E3%83%AA%E3%82%A2' },
    ];
  }
}