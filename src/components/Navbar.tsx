'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-slate-900 to-slate-800 sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-95">
            <div className="max-w-4xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                    >
                        Mustafa'nın Bloğu
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 items-center">
                        <Link
                            href="/"
                            className="text-gray-300 hover:text-white font-medium transition-all duration-300 relative group"
                        >
                            Anasayfa
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link
                            href="/blog"
                            className="text-gray-300 hover:text-white font-medium transition-all duration-300 relative group"
                        >
                            Bloglar
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-300 hover:text-white font-medium transition-all duration-300 relative group"
                        >
                            Hakkında
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-300 hover:text-white font-medium transition-all duration-300 relative group"
                        >
                            İletişim
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2 transition-transform duration-300"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-4 pb-4 animate-fadeIn">
                        <Link
                            href="/"
                            className="text-gray-300 hover:text-white font-medium transition-all duration-300 block hover:translate-x-1"
                            onClick={() => setIsOpen(false)}
                        >
                            Anasayfa
                        </Link>
                        <Link
                            href="/blog"
                            className="text-gray-300 hover:text-white font-medium transition-all duration-300 block hover:translate-x-1"
                            onClick={() => setIsOpen(false)}
                        >
                            Bloglar
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-300 hover:text-white font-medium transition-all duration-300 block hover:translate-x-1"
                            onClick={() => setIsOpen(false)}
                        >
                            Hakkında
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-300 hover:text-white font-medium transition-all duration-300 block hover:translate-x-1"
                            onClick={() => setIsOpen(false)}
                        >
                            İletişim
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
