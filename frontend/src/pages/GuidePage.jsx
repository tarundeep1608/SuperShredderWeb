import React from 'react';
import SectionHeader from '../components/SectionHeader';

export default function GuidePage() {
    const steps = [
        {
            num: "01",
            title: "Launch Application",
            desc: "Run SuperShredder.exe as Administrator to ensure full disk access permissions."
        },
        {
            num: "02",
            title: "Select Target",
            desc: "Choose between 'Windows' for local files or 'Android' for connected mobile devices."
        },
        {
            num: "03",
            title: "Choose Algorithm",
            desc: "Select your wiping method. Use 'Quick Zero' for speed or 'DoD' for maximum security."
        },
        {
            num: "04",
            title: "Execute",
            desc: "Click 'Shred'. The worker threads will take over. Do not close the app until the progress bar hits 100%."
        }
    ];

    return (
        <div className="py-20 bg-slate-900">
            <SectionHeader title="How It Works" subtitle="Four simple steps to total data privacy." />

            <div className="max-w-5xl mx-auto px-4 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
                    {/* Vertical Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className={`relative flex items-start gap-6 ${idx % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                            {/* Connector Dot */}
                            <div className="hidden md:block absolute top-0 left-1/2 w-4 h-4 bg-slate-900 border-2 border-blue-500 rounded-full -translate-x-1/2 translate-y-2 z-10"></div>

                            <div className="flex-1">
                                <div className="text-6xl font-bold text-slate-800 mb-2">{step.num}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-slate-400">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}