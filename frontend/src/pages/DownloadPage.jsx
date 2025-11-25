import React from 'react';
import { Server, Code, Download, Github, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const DownloadPage = () => {
    const handleDownload = (os) => {
        // In Django, this would trigger a file serve or redirect
        alert(`Initiating download for ${os}... (Mock Action)`);
    };

    return (
        <div className="py-16 bg-slate-900 min-h-[80vh] flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
                <SectionHeader title="Choose Your Version" subtitle="Deployment" />

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Option A: Executable */}
                    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-red-500 hover:shadow-2xl hover:shadow-red-900/10 transition-all relative overflow-hidden group">
                        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">RECOMMENDED</div>
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="bg-slate-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-slate-600 group-hover:border-red-500 transition-colors">
                                <Server className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Standalone Binary</h3>
                            <p className="text-slate-400 mb-8 flex-grow">
                                Pre-compiled executable including ADB dependencies.
                                No Python installation required. Best for end-users.
                            </p>

                            <div className="space-y-3 mb-8">
                                {['Portable .exe format', 'Includes ADB binaries', 'No dependencies needed'].map((item, i) => (
                                    <div key={i} className="flex items-center text-sm text-slate-300">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {item}
                                    </div>
                                ))}
                            </div>

                            <Button onClick={() => handleDownload('windows')} icon={Download} className="w-full">
                                Download for Windows
                            </Button>
                        </div>
                        {/* Hover Effect Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    {/* Option B: Source */}
                    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-900/10 transition-all flex flex-col group">
                        <div className="bg-slate-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-slate-600 group-hover:border-blue-500 transition-colors">
                            <Code className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Source Code</h3>
                        <p className="text-slate-400 mb-8 flex-grow">
                            Complete Python 3.13 source. Modify strategies, rebuild UI,
                            or audit the wiping logic yourself.
                        </p>

                        <div className="space-y-3 mb-8">
                            {['Requires Python 3.13+', 'Full customization', 'Build scripts included'].map((item, i) => (
                                <div key={i} className="flex items-center text-sm text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> {item}
                                </div>
                            ))}
                        </div>

                        <Button variant="outline" onClick={() => window.open('https://github.com/tarundeep1608/supershredder', '_blank')} icon={Github} className="w-full">
                            View Repository
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadPage;