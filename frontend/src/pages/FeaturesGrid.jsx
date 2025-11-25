import React from 'react';
import { Smartphone, Monitor, Terminal, Cpu } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const FeaturesGrid = () => {
    const features = [
        { title: "Android Debug Bridge", desc: "Native integration with ADB to detect, mount, and wipe both physical devices and emulators (BlueStacks, AVD).", icon: Smartphone },
        { title: "Smart Strategies", desc: "Choose from multiple algorithms: Zero Fill, Random Overwrite, or DoD 5220.22-M standards defined in `strategies.py`.", icon: Cpu },
        { title: "Windows Core", desc: "Deep system cleaning for Windows environments using low-level file operations handled by `windows/core.py`.", icon: Monitor },
        { title: "Dual Interface", desc: "Run automated headless tasks via `console_ui.py` or use the full PyQt/Tkinter GUI for manual control.", icon: Terminal },
    ];

    return (
        <div className="bg-slate-950 py-24 border-y border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="Under The Hood" subtitle="Architecture" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {features.map((f, i) => (
                        <div key={i} className="flex p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-red-500/50 transition-colors group">
                            <div className="flex-shrink-0 mr-4">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                    <f.icon className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesGrid;