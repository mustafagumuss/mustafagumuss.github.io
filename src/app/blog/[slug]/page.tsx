import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPost, getBlogPostSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getBlogPostSlugs();
    return slugs.map(slug => ({
        slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    const formattedDate = new Date(post.date).toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-3xl mx-auto px-4 py-16">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        href="/blog"
                        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
                    >
                        ← Tüm Yazılar
                    </Link>

                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

                    <div className="flex items-center gap-4 text-gray-600">
                        <time>{formattedDate}</time>
                        {post.category && (
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                                {post.category}
                            </span>
                        )}
                    </div>
                </div>

                {/* Content */}
                <article className="max-w-none mb-12 prose-content">
                </article>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <div className="border-t pt-8">
                        <div className="flex gap-2 flex-wrap">
                            {post.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Navigation */}
                <div className="mt-12 border-t pt-8">
                    <Link
                        href="/blog"
                        className="text-blue-600 hover:text-blue-800 inline-block"
                    >
                        ← Tüm Yazılar
                    </Link>
                </div>
            </div>
        </main>
    );
}
