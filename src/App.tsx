import React from 'react';

// おすすめゲームのデータ
const games = [
  {
    id: 1,
    title: '妖怪ウォッチ',
    category: 'クロスメディアRPG',
    description: '日常に潜む妖怪たちと友達になり、街の事件やトラブルを解決していく大人気RPGシリーズ！',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=60',
    tags: ['レベルファイブ', '育成RPG', 'コレクション'],
  },
  {
    id: 2,
    title: 'モンスターストライク',
    category: 'ひっぱりハンティングRPG',
    description: '味方のモンスターを引っ張って敵に当てて倒す、直感操作で爽快な協力プレイが楽しめるスマホゲーム！',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60',
    tags: ['MIXI', 'マルチプレイ', 'アクション'],
  },
  {
    id: 3,
    title: '原神 (Genshin Impact)',
    category: 'オープンワールドRPG',
    description: '広大なテイワット大陸を舞台に、幻想的な世界を冒険する基本プレイ無料の超本格オープンワールドRPG！',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=60',
    tags: ['HoYoverse', 'オープンワールド', 'アニメ調グラフィック'],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* ヒーローヘッダー */}
      <header className="py-16 text-center bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 border-b border-slate-800">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
          🎮 おすすめゲーム3選
        </h1>
        <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto px-4">
          ハマること間違いなし！個人的にイチオシの名作ゲームタイトルを紹介します。
        </p>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <span className="absolute top-3 right-3 bg-indigo-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                  {game.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-slate-100">{game.title}</h2>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {game.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                  {game.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-700 text-indigo-300 px-2.5 py-1 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* フッター */}
      <footer className="text-center py-8 border-t border-slate-800 text-slate-500 text-sm">
        © 2026 My Recommended Games. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}