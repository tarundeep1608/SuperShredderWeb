import React from 'react';
import { Terminal, Server } from 'lucide-react';

const GuidePage = () => {
    const steps = [
        { title: "Environment Setup", cmd: "pip install -r requirements.txt", desc: "Install required libraries including `customtkinter` (if used in GUI) and `adb-shell` wrappers." },
        { title: "Run Application", cmd: "python main.py", desc: "Launches the `orchestrator` which initializes the UI threads defined in `gui/workers.py`." },
        { title: "Build Executable", cmd: "python build.py", desc: "Uses PyInstaller to bundle the `bin/` folder and `wipers/` modules into a single distribution." },
    ];

    return (
        <div className="bg-slate-900 min-h-screen py-16">
            <div className="max-w-4xl mx-auto px-4">
                <div className="mb-12 border-b border-slate-800 pb-8">
                    <h1 className="text-4xl font-bold text-white mb-4">Developer Documentation</h1>
                    <p className="text-xl text-slate-400">
                        How to build, run, and extend SuperShredder.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Quick Start */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <Terminal className="w-6 h-6 mr-3 text-red-500" /> Quick Start
                        </h2>
                        <div className="bg-slate-950 rounded-xl border border-slate-800 divide-y divide-slate-800">
                            {steps.map((step, i) => (
                                <div key={i} className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-medium text-white">{step.title}</h3>
                                    </div>
                                    <div className="bg-slate-900 rounded-md p-3 font-mono text-sm text-green-400 mb-3 border border-slate-800">
                                        $ {step.cmd}
                                    </div>
                                    <p className="text-slate-400 text-sm">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Directory Structure */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <Server className="w-6 h-6 mr-3 text-blue-500" /> Module Map
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-purple-500">
                                <code className="text-purple-300 font-bold block mb-1">/wipers/android</code>
                                <p className="text-sm text-slate-400">Contains `physical_wiper.py` and `emulator_wiper.py`. Implements the `strategies.py` algorithms.</p>
                            </div>
                            <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-yellow-500">
                                <code className="text-yellow-300 font-bold block mb-1">/common/adb_wrapper.py</code>
                                <p className="text-sm text-slate-400">Wraps the `bin/adb.exe` binary. Handles device connection, listing, and shell command execution.</p>
                            </div>
                            <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500">
                                <code className="text-blue-300 font-bold block mb-1">/gui/tabs</code>
                                <p className="text-sm text-slate-400">UI logic separated by platform (`windows_ui.py`, `android_ui.py`). Keeps the main loop clean.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default GuidePage;