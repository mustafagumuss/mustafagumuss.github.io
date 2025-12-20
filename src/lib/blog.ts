import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    category?: string;
    tags?: string[];
    content: string;
    excerpt?: string;
    image?: string;
}

// Tüm blog yazılarını oku
export function getAllBlogPosts(): BlogPost[] {
    if (!fs.existsSync(BLOG_DIR)) {
        return [];
    }

    const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.mdx'));

    return files.map(file => {
        const slug = file.replace('.mdx', '');
        const fullPath = path.join(BLOG_DIR, file);
        const fileContent = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContent);

        return {
            slug,
            title: data.title || slug,
            date: data.date || new Date().toISOString(),
            category: data.category,
            tags: data.tags || [],
            content,
            excerpt: data.excerpt,
            image: data.image,
        };
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Belirli bir yazı oku
export function getBlogPost(slug: string): BlogPost | null {
    const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        category: data.category,
        tags: data.tags || [],
        content,
        excerpt: data.excerpt,
        image: data.image,
    };
}

// Yazıların sluglarını al (SSG için)
export function getBlogPostSlugs(): string[] {
    if (!fs.existsSync(BLOG_DIR)) {
        return [];
    }

    return fs.readdirSync(BLOG_DIR)
        .filter(file => file.endsWith('.mdx'))
        .map(file => file.replace('.mdx', ''));
}
