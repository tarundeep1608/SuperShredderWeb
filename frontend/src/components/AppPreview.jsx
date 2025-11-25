import React, { useState } from 'react';
import { Monitor, Smartphone, Trash2, HardDrive } from 'lucide-react';

export default function AppPreview() {
    const [activeTab, setActiveTab] = useState('windows');
    const [progress, setProgress] = useState(0);
    const [isWiping, setIsWiping] = useState(false);
    const [logs, setLogs] = useState([
        "> System initialized...",
        "> Ready to shred."
    ]);

    const runSimulation = () => {
        if (isWiping) return;
        setIsWiping(true);
        setProgress(0);
        setLogs(["> Initializing secure wipe protocol..."]);

        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += Math.random() * 15;
            if (currentProgress > 100) {
                currentProgress = 100;
                clearInterval(interval);
                setIsWiping(false);
                setLogs(prev => [...prev, "> Wiping complete.", "> 0 sectors recoverable."]);
            } else {
                setProgress(currentProgress);
                setLogs(prev => [...prev, `> Overwriting sector ${Math.floor(Math.random() * 99999)}...`]);
            }
        }, 800);
    };

    return (
        <div className="w-full max-w-4xl mx-auto my-16 px-4">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Interactive Preview</h2>
                <p className="text-slate-400">Experience the interface directly in your browser.</p>
            </div>

            {/* Mock Window Frame */}
            <div className="bg-slate-900 rounded-lg border border-slate-700 shadow-2xl overflow-hidden font-sans">

                {/* Title Bar */}
                <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                    <div className="flex items-center gap-2">
                        <Trash2 className="w-4 h-4 text-red-500" />
                        <span className="text-xs font-bold text-slate-300 tracking-wider">SUPERSHREDDER v1.0.0</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row h-[400px]">
                    {/* Sidebar / Tabs */}
                    <div className="w-full md:w-48 bg-slate-900 border-r border-slate-700 flex flex-col">
                        <button
                            onClick={() => setActiveTab('windows')}
                            className={`flex items-center gap-3 px-4 py-4 text-sm font-medium transition-colors ${activeTab === 'windows' ? 'bg-slate-800 text-blue-400 border-l-2 border-blue-400' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
                        >
                            <Monitor className="w-4 h-4" /> Windows Wiper
                        </button>
                        <button
                            onClick={() => setActiveTab('android')}
                            className={`flex items-center gap-3 px-4 py-4 text-sm font-medium transition-colors ${activeTab === 'android' ? 'bg-slate-800 text-green-400 border-l-2 border-green-400' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
                        >
                            <Smartphone className="w-4 h-4" /> Android Wiper
                        </button>
                        <div className="mt-auto p-4 border-t border-slate-800">
                            <div className="text-xs text-slate-500">Device Status:</div>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-xs text-slate-300">Connected</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 bg-slate-950 p-6 flex flex-col relative">

                        {activeTab === 'windows' ? (
                            <div className="space-y-4">
                                <h3 className="text-xl font-light text-white flex items-center gap-2">
                                    <HardDrive className="text-blue-500" /> Drive Sanitization
                                </h3>
                                <div className="p-4 border border-blue-500/20 bg-blue-500/5 rounded text-sm text-blue-200">
                                    Select a drive partition or specific directory to securely erase. Supports NTFS and FAT32 file systems.
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="bg-slate-800 p-3 rounded border border-slate-700 hover:border-blue-500 cursor-pointer transition-colors">
                                        <div className="text-xs text-slate-400">Target</div>
                                        <div className="text-white font-mono">C:/Users/Admin/Temp</div>
                                    </div>
                                    <div className="bg-slate-800 p-3 rounded border border-slate-700 hover:border-blue-500 cursor-pointer transition-colors">
                                        <div className="text-xs text-slate-400">Algorithm</div>
                                        <div className="text-white font-mono">DoD 5220.22-M</div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <h3 className="text-xl font-light text-white flex items-center gap-2">
                                    <Smartphone className="text-green-500" /> Android Bridge (ADB)
                                </h3>
                                <div className="p-4 border border-green-500/20 bg-green-500/5 rounded text-sm text-green-200">
                                    Detects connected physical devices and running emulators. Uses bundled ADB binaries.
                                </div>
                                <div className="grid grid-cols-1 gap-4 mt-4">
                                    <div className="bg-slate-800 p-3 rounded border border-slate-700 flex justify-between items-center">
                                        <div>
                                            <div className="text-white font-mono">Pixel_6_API_33</div>
                                            <div className="text-xs text-green-500">Emulator • Online</div>
                                        </div>
                                        <button className="text-xs bg-slate-700 hover:bg-slate-600 text-white px-2 py-1 rounded">Select</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Simulated Terminal Output */}
                        <div className="mt-auto">
                            <div className="bg-black rounded border border-slate-800 p-3 h-32 overflow-y-auto font-mono text-xs mb-4">
                                {logs.map((log, i) => (
                                    <div key={i} className="text-green-500 mb-1">{log}</div>
                                ))}
                            </div>

                            {isWiping && (
                                <div className="w-full bg-slate-800 rounded-full h-2 mb-4">
                                    <div className="bg-red-500 h-2 rounded-full transition-all duration-300" style={{width: `${progress}%`}}></div>
                                </div>
                            )}

                            <button
                                onClick={runSimulation}
                                disabled={isWiping}
                                className={`w-full py-3 rounded font-bold uppercase tracking-widest transition-all ${isWiping ? 'bg-slate-700 cursor-not-allowed text-slate-500' : 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/50'}`}
                            >
                                {isWiping ? 'SHREDDING IN PROGRESS...' : 'START SHREDDING SEQUENCE'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}