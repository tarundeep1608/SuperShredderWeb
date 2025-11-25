import React from 'react';
import Button from '../components/Button';
import { Download, ShieldCheck, ChevronRight } from 'lucide-react';

export default function HeroSection() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
                    v2.0 Stable Release Available
                </div>

                <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
                    Permanent Data <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-500">
            Destruction
          </span>
                </h1>

                <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Advanced file shredding for Windows and Android.
                    Recoverability is not an option. Includes DoD-standard wiping algorithms
                    and portable ADB integration.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="primary" className="w-full sm:w-auto flex items-center justify-center gap-2 group" onClick={() => scrollTo('download')}>
                        <Download className="w-5 h-5" />
                        Download for Windows
                        <span className="text-xs opacity-70 font-normal ml-1">(x64)</span>
                    </Button>

                    <Button variant="secondary" className="w-full sm:w-auto flex items-center justify-center gap-2 group" onClick={() => scrollTo('specs')}>
                        <ShieldCheck className="w-5 h-5 text-green-400" />
                        View Safety Audit
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                <div className="mt-12 text-sm text-slate-500">
                    Trusted by security researchers • Open Source • Zero Dependencies
                </div>
            </div>
        </section>
    );
}