import { getAllBlogPosts } from '@/lib/blog';
import { BlogPostCard } from '@/components/BlogPostCard';

export default function BlogPage() {
    const posts = getAllBlogPosts();

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="mb-16 animate-fadeIn">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Blog Yazıları
                    </h1>
                    <p className="text-xl text-gray-700 max-w-2xl">
                        Yazılım, teknoloji ve web geliştirme üzerine yazılar. En son güncellemeler, ipuçları ve deneyimlerim.
                    </p>
                </div>

                {posts.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">📝</div>
                        <p className="text-gray-500 text-xl mb-4">
                            Henüz blog yazısı yok.
                        </p>
                        <p className="text-gray-400">
                            Yakında harika yazılarla döneceğim...
                        </p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <div
                                key={post.slug}
                                className="animate-fadeIn"
                                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                            >
                                <BlogPostCard post={post} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
