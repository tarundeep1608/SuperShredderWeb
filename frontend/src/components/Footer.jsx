import React from 'react';
import { Trash2, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <Trash2 className="h-6 w-6 text-red-600" />
                        <span className="font-bold text-xl text-white">SuperShredder</span>
                    </div>
                    <div className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Open Source Security.
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>
                        Disclaimer: Data recovered from physically destroyed hardware is impossible to verify.
                        Software wiping is performed to standard specifications but comes with no warranty.
                    </p>
                    <div className="flex items-center gap-1 mt-4 md:mt-0">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Tarundeep
                    </div>
                </div>
            </div>
        </footer>
    );
}