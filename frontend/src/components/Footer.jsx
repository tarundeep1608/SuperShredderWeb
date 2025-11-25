import React from 'react';
import { Trash2, Github } from 'lucide-react';

const Footer = () => (
    <footer className="bg-slate-950 border-t border-slate-900 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="col-span-1">
                    <div className="flex items-center text-white font-bold text-xl mb-4">
                        <Trash2 className="w-6 h-6 mr-2 text-red-600" /> SuperShredder
                    </div>
                    <p className="text-slate-400 text-sm">
                        Open source data sanitation tool for Windows and Android.
                        Ensuring privacy through algorithmic destruction.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Resources</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li className="hover:text-red-500 cursor-pointer">Documentation</li>
                        <li className="hover:text-red-500 cursor-pointer">GitHub Repo</li>
                        <li className="hover:text-red-500 cursor-pointer">Releases</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li className="hover:text-red-500 cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-red-500 cursor-pointer">Terms of Use</li>
                        <li className="hover:text-red-500 cursor-pointer">Disclaimer</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} SuperShredder Dev Team.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Github className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;