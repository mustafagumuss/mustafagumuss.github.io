'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog';

export function BlogPostCard({ post }: { post: BlogPost }) {
    const formattedDate = new Date(post.date).toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <article className="overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 group cursor-pointer h-full flex flex-col">
            {/* Image */}
            {post.image && (
                <div className="relative w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            )}

            <div className="p-6 flex flex-col flex-grow">
                <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                        {post.title}
                    </h2>
                </Link>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <time className="flex items-center gap-1 transition-colors duration-300 group-hover:text-gray-900">
                        📅 {formattedDate}
                    </time>
                    {post.category && (
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs font-semibold transition-all duration-300 group-hover:shadow-md group-hover:from-purple-200 group-hover:to-pink-200">
                            {post.category}
                        </span>
                    )}
                </div>

                {post.excerpt && (
                    <p className="text-gray-700 mb-4 transition-colors duration-300 group-hover:text-gray-900 line-clamp-3 flex-grow">
                        {post.excerpt}
                    </p>
                )}

                {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap mt-4 pt-4 border-t border-gray-100">
                        {post.tags.map((tag, index) => (
                            <span
                                key={tag}
                                className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-purple-200 group-hover:text-gray-900 hover:scale-110"
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}
