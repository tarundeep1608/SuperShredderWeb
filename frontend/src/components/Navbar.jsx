import React, { useState } from 'react';
import { Menu, X, Trash2, Github } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'How it Works', href: '#guide' },
        { name: 'Tech Specs', href: '#specs' },
    ];

    const handleScroll = (id) => {
        const element = document.getElementById(id.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <Trash2 className="h-6 w-6 text-red-500" />
                        <span className="font-bold text-xl tracking-wider text-white">
              SUPER<span className="text-red-500">SHREDDER</span>
            </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleScroll(link.href)}
                                    className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors bg-transparent border-none cursor-pointer"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <a href="https://github.com/tarundeep1608/supershredder" target="_blank" rel="noreferrer">
                                <Github className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
                            </a>
                            <Button variant="danger" className="py-2 px-4 text-sm" onClick={() => handleScroll('#download')}>
                                Download Now
                            </Button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-400 hover:text-white p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleScroll(link.href)}
                                className="text-slate-300 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.name}
                            </button>
                        ))}
                        <div className="pt-4">
                            <Button variant="danger" className="w-full justify-center" onClick={() => handleScroll('#download')}>
                                Download Now
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}