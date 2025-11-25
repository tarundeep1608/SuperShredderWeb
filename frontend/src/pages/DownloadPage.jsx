import React from 'react';
import { Download, AlertTriangle } from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

export default function DownloadPage() {
    return (
        <div className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-center px-4">
            <SectionHeader title="Get SuperShredder" subtitle="Available for Windows 10 and 11." />

            <div className="max-w-3xl mx-auto bg-slate-800/30 border border-slate-700 rounded-2xl p-8 md:p-12 mt-8">
                <div className="flex flex-col items-center">
                    <div className="bg-blue-600/10 p-4 rounded-full mb-6">
                        <Download className="w-12 h-12 text-blue-500" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">SuperShredder v2.1.0 (Portable)</h3>
                    <p className="text-slate-400 mb-8">
                        Zip archive includes executable and necessary ADB binaries. <br/>
                        <span className="text-sm font-mono text-slate-500">SHA-256: 8f9d...a1b2</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                        <Button className="w-full flex items-center justify-center gap-2">
                            <Download className="w-4 h-4" /> Direct Download
                        </Button>
                        <Button variant="secondary" className="w-full">
                            View Source Code
                        </Button>
                    </div>

                    <div className="mt-8 flex items-start gap-3 text-left bg-yellow-900/20 p-4 rounded border border-yellow-700/30">
                        <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-yellow-200/80">
                            <strong>Warning:</strong> This software is designed to permanently destroy data.
                            Once wiped, files cannot be recovered. Use with extreme caution.
                            The developer is not responsible for accidental data loss.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}