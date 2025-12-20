'use client';

import { FormEvent, useState } from 'react';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate form submission
        setTimeout(() => {
            setSubmitted(true);
            setIsLoading(false);
        }, 1000);
    };

    if (submitted) {
        return (
            <main className="min-h-screen bg-white">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <div className="text-center">
                        <div className="text-6xl mb-4">✅</div>
                        <h1 className="text-4xl font-bold mb-4 text-gray-900">Teşekkürler!</h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Mesajınız alındı. En kısa sürede size geri dönüş yapacağım.
                        </p>
                        <a
                            href="/"
                            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Anasayfaya Dön
                        </a>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-8 text-gray-900">İletişim</h1>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">Bize Ulaşın</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                                <a
                                    href="mailto:info@example.com"
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    info@example.com
                                </a>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">Sosyal Medya</h3>
                                <div className="flex gap-4">
                                    <a href="#" className="text-blue-600 hover:text-blue-800">
                                        Twitter
                                    </a>
                                    <a href="#" className="text-blue-600 hover:text-blue-800">
                                        GitHub
                                    </a>
                                    <a href="#" className="text-blue-600 hover:text-blue-800">
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">Form Gönder</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">
                                    Adı Soyadı
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Adınız"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">
                                    Mesaj
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Mesajınız..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                            >
                                {isLoading ? 'Gönderiliyor...' : 'Gönder'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
