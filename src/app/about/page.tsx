export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-8 text-gray-900">Hakkımda</h1>

                <div className="prose-content max-w-3xl">
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        Merhaba! Ben yazılım geliştirici ve teknoloji meraklısıyım. Bu blog'ta yazılım geliştirme,
                        web teknolojileri ve en iyi uygulamalar hakkında yazılar yazıyorum.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Ilgi Alanlarım</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                        <li>Next.js ve React.js</li>
                        <li>TypeScript</li>
                        <li>Web tasarımı ve UX</li>
                        <li>API geliştirme</li>
                        <li>Veritabanı tasarımı</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Bu Blog</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Bu blog, Next.js 16, TypeScript ve Tailwind CSS kullanarak oluşturulmuştur.
                        Blog yazıları MDX formatında yazılıyor ve statik HTML'ye dönüştürülüyor.
                        GitHub Pages üzerinde barındırılıyor.
                    </p>
                </div>
            </div>
        </main>
    );
}
