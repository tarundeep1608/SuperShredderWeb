import React from 'react';
import { CheckCircle, Download, Terminal } from 'lucide-react';
import Button from '../components/Button';
import { api } from '../services/api';

const HeroSection = ({ setActivePage }) => (
    <div className="relative overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">

                {/* Text Content */}
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left z-10">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                        <span className="text-xs text-slate-300 font-medium uppercase tracking-wide">v{api.getLatestVersion()} Stable Release</span>
                    </div>

                    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6">
                        Military-Grade <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Data Sanitation</span>
                    </h1>

                    <p className="mt-3 text-base text-slate-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        Securely wipe Android devices and Windows drives beyond recovery.
                        Open-source, modular, and built for developers and security professionals.
                    </p>

                    <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
                        <Button
                            onClick={() => setActivePage('download')}
                            icon={Download}
                            className="w-full sm:w-auto"
                        >
                            Download CLI & GUI
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => setActivePage('guide')}
                            icon={Terminal}
                            className="w-full sm:w-auto"
                        >
                            View Source
                        </Button>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-800 flex items-center justify-center lg:justify-start space-x-6 text-slate-500 text-sm">
                        <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-slate-400" /> Windows 10/11</div>
                        <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-slate-400" /> Android 10+</div>
                        <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-slate-400" /> DoD 5220.22-M</div>
                    </div>
                </div>

                {/* Visual Graphic */}
                <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 flex items-center justify-center">
                    <div className="relative w-full max-w-md">
                        {/* Window Card */}
                        <div className="bg-slate-900 border border-slate-700 rounded-lg shadow-2xl overflow-hidden transform transition-transform hover:scale-105 duration-500">
                            <div className="bg-slate-800 p-3 border-b border-slate-700 flex items-center space-x-2">
                                <div className="flex space-x-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="ml-4 text-xs text-slate-400 font-mono">SuperShredder.exe</div>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-300">Target Device</span>
                                    <span className="text-green-400 font-mono">Pixel_6_Pro [ADB]</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs text-slate-400">
                                        <span>Pass 2 of 3 (DoD Short)</span>
                                        <span>68%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 rounded-full h-2">
                                        <div className="bg-red-600 h-2 rounded-full relative overflow-hidden" style={{ width: '68%' }}>
                                            <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-black/50 rounded p-3 font-mono text-xs text-green-500 h-32 overflow-hidden">
                                    <p>{`> Initializing wiper... OK`}</p>
                                    <p>{`> Mounting partition /data... OK`}</p>
                                    <p>{`> Strategy: RANDOM_OVERWRITE`}</p>
                                    <p>{`> Writing sector 0x4A12F...`}</p>
                                    <p className="animate-pulse">{`> Writing sector 0x4A130...`}</p>
                                </div>
                            </div>
                        </div>

                        {/* Background blobs */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HeroSection;