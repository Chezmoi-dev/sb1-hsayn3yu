import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <Link to="/" className="inline-flex items-center text-gray-600 hover:text-purple-600">
              <ArrowLeft className="w-5 h-5 mr-2" />
              トップページに戻る
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">プライバシーポリシー</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 個人情報の収集について</h2>
              <p className="text-gray-600 leading-relaxed">
                当社は、サービスの提供にあたり、以下の個人情報を収集する場合があります：
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
                <li>氏名</li>
                <li>メールアドレス</li>
                <li>InstagramアカウントID</li>
                <li>利用履歴</li>
                <li>その他サービス提供に必要な情報</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 個人情報の利用目的</h2>
              <p className="text-gray-600 leading-relaxed">
                収集した個人情報は、以下の目的で利用いたします：
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
                <li>サービスの提供・運営</li>
                <li>ユーザーサポート</li>
                <li>サービスの改善・新機能の開発</li>
                <li>お知らせやマーケティング情報の配信</li>
                <li>不正利用の防止</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 個人情報の第三者提供</h2>
              <p className="text-gray-600 leading-relaxed">
                当社は、以下の場合を除き、収集した個人情報を第三者に提供いたしません：
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
                <li>ユーザーの同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために必要がある場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. セキュリティ対策</h2>
              <p className="text-gray-600 leading-relaxed">
                当社は、個人情報の漏洩、滅失、毀損等を防ぐため、適切なセキュリティ対策を実施しています。また、個人情報を取り扱う従業者に対して、個人情報の適切な管理について定期的な教育を行っています。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 個人情報の開示・訂正・削除</h2>
              <p className="text-gray-600 leading-relaxed">
                ユーザーは、当社が保有する個人情報の開示、訂正、削除を請求することができます。請求を行う場合は、当社カスタマーサポートまでお問い合わせください。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. プライバシーポリシーの変更</h2>
              <p className="text-gray-600 leading-relaxed">
                当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、本ページ上で通知いたします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. お問い合わせ</h2>
              <p className="text-gray-600 leading-relaxed">
                本プライバシーポリシーに関するお問い合わせは、下記までご連絡ください：<br />
                メール：support@instabuddy.com
              </p>
            </section>

            <div className="text-sm text-gray-500 mt-8">
              最終更新日：2024年3月1日
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;