import React from 'react';
import { Shield, Zap, Lock, RefreshCw, Smartphone, HardDrive } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

export default function FeaturesGrid() {
    const features = [
        {
            icon: <Shield className="w-6 h-6 text-blue-400" />,
            title: "Military Grade",
            description: "Implements DoD 5220.22-M standards for data sanitization, ensuring recovered data is statistically indistinguishable from noise."
        },
        {
            icon: <Smartphone className="w-6 h-6 text-green-400" />,
            title: "Android Support",
            description: "Seamlessly connect to physical Android devices or running emulators via ADB to wipe external storage partitions."
        },
        {
            icon: <HardDrive className="w-6 h-6 text-purple-400" />,
            title: "Windows Integration",
            description: "Native Windows application optimized for NTFS and FAT32 file systems with deep system integration."
        },
        {
            icon: <Lock className="w-6 h-6 text-red-400" />,
            title: "Permanent Deletion",
            description: "Files are not just unlinked; they are overwritten multiple times. Even electron microscopy cannot recover the data."
        },
        {
            icon: <RefreshCw className="w-6 h-6 text-yellow-400" />,
            title: "Auto-Discovery",
            description: "Automatically detects connected drives and ADB devices. No complex configuration files needed."
        },
        {
            icon: <Zap className="w-6 h-6 text-orange-400" />,
            title: "Zero Dependencies",
            description: "Runs standalone. No need to install Java, Python, or the Android SDK on the host machine."
        }
    ];

    return (
        <div className="py-20 bg-slate-950">
            <SectionHeader
                title="Why SuperShredder?"
                subtitle="Built for privacy enthusiasts and security professionals."
            />

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors group">
                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-slate-400 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}