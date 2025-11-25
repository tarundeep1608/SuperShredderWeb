import React from 'react';
import { ShieldAlert, FileCode, Cpu, Layers, Terminal } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

export default function TechSpecs() {
    return (
        <div className="py-20 bg-slate-900">
            <SectionHeader
                title="Technical Specifications"
                subtitle="Under the hood of the wiping engine."
            />

            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">

                {/* Algorithms Section */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                        <ShieldAlert className="w-8 h-8 text-red-500" />
                        <h3 className="text-2xl font-bold text-white">Destruction Algorithms</h3>
                    </div>

                    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                        <h4 className="text-lg font-semibold text-blue-400 mb-2">DoD 5220.22-M</h4>
                        <p className="text-slate-400 text-sm">
                            The US Department of Defense standard. It performs three passes:
                            overwriting with zeros, then ones, then a random character.
                            This makes magnetic recovery practically impossible.
                        </p>
                    </div>

                    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                        <h4 className="text-lg font-semibold text-green-400 mb-2">Zero Fill (Quick)</h4>
                        <p className="text-slate-400 text-sm">
                            A single pass of zeros. Faster, suitable for general privacy before selling a device or drive.
                            Efficient for SSDs where multiple overwrites can degrade lifespan.
                        </p>
                    </div>

                    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                        <h4 className="text-lg font-semibold text-purple-400 mb-2">Random Pass</h4>
                        <p className="text-slate-400 text-sm">
                            Overwrites sectors with cryptographically secure pseudo-random data.
                            This confuses pattern-based recovery tools.
                        </p>
                    </div>
                </div>

                {/* Architecture Section */}
                <div className="space-y-8">
                    <div className="flex items-center gap-3">
                        <Cpu className="w-8 h-8 text-blue-500" />
                        <h3 className="text-2xl font-bold text-white">Core Architecture</h3>
                    </div>

                    <ul className="space-y-4">
                        <li className="flex gap-4">
                            <div className="bg-slate-800 p-3 rounded-lg h-fit">
                                <FileCode className="w-6 h-6 text-yellow-400" />
                            </div>
                            <div>
                                <h5 className="text-white font-bold">Python 3.13 Core</h5>
                                <p className="text-slate-400 text-sm">Built on the latest stable Python release for maximum I/O efficiency and modern threading support.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="bg-slate-800 p-3 rounded-lg h-fit">
                                <Layers className="w-6 h-6 text-teal-400" />
                            </div>
                            <div>
                                <h5 className="text-white font-bold">Portable ADB Stack</h5>
                                <p className="text-slate-400 text-sm">Includes pre-compiled <code>adb.exe</code> and <code>AdbWinApi.dll</code>. No Android Studio or SDK installation required.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="bg-slate-800 p-3 rounded-lg h-fit">
                                <Terminal className="w-6 h-6 text-pink-400" />
                            </div>
                            <div>
                                <h5 className="text-white font-bold">Threaded Workers</h5>
                                <p className="text-slate-400 text-sm">UI remains responsive during heavy I/O operations thanks to a decoupled worker-thread architecture.</p>
                            </div>
                        </li>
                    </ul>

                    <div className="mt-8 p-4 border border-yellow-500/20 bg-yellow-900/10 rounded-lg">
                        <h6 className="text-yellow-500 font-bold mb-1">Safety Protocols</h6>
                        <p className="text-xs text-yellow-200/70">
                            The application includes safeguards against wiping the critical system partition (C:/Windows) to prevent accidental OS destruction.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}