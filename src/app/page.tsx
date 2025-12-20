import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4 animate-fadeIn">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hoş Geldiniz! 👋
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Yazılım, teknoloji ve web geliştirme hakkında yazılar ve fikirler paylaştığım kişisel blog.
            </p>
          </div>

          <div className="animate-scaleUp" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <Link
              href="/blog"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-110 transition-all duration-300 hover:from-purple-600 hover:to-pink-600"
            >
              Blog Yazılarını Oku →
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-20 p-8 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-purple-300 transform hover:scale-105 group">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hakkımda
          </h2>
          <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
            Merhaba! Bu, Next.js, TypeScript ve Tailwind CSS kullanarak yapılmış kişisel blog
            sitelerim. Burada yazılım geliştirme, web teknolojileri ve en iyi uygulamalar
            hakkında yazılar yazıyorum.
          </p>
        </div>
      </div>
    </main>
  );
}
