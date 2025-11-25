import React, { useState } from 'react';
import { Shield, Download, BookOpen, Mail, Trash2, Menu, X } from 'lucide-react';

const Navbar = ({ activePage, setActivePage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Product', icon: Shield },
        { id: 'download', label: 'Download', icon: Download },
        { id: 'guide', label: 'Docs', icon: BookOpen },
        { id: 'contact', label: 'Support', icon: Mail },
    ];

    return (
        <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div
                        className="flex items-center flex-shrink-0 cursor-pointer group"
                        onClick={() => setActivePage('home')}
                    >
                        <div className="bg-gradient-to-br from-red-600 to-red-800 p-1.5 rounded-lg mr-2 group-hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-shadow">
                            <Trash2 className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-xl text-white tracking-tight">
              Super<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Shredder</span>
            </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActivePage(item.id)}
                                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                        activePage === item.id
                                            ? 'bg-slate-800 text-red-400 shadow-inner'
                                            : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                                    }`}
                                >
                                    <item.icon className="w-4 h-4" />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-slate-800 p-2 rounded-md text-slate-400 hover:text-white"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800 animate-in slide-in-from-top-5 duration-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActivePage(item.id);
                                    setIsOpen(false);
                                }}
                                className={`flex items-center space-x-3 w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                                    activePage === item.id
                                        ? 'bg-slate-800 text-red-400'
                                        : 'text-slate-300 hover:bg-slate-700'
                                }`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;