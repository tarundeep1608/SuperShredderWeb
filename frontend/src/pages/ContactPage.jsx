import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

export default function ContactPage() {
    const [status, setStatus] = useState('idle'); // idle, sending, sent

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => setStatus('sent'), 1500);
    };

    return (
        <div className="py-20 bg-slate-950 px-4">
            <SectionHeader title="Contact Support" subtitle="Found a bug or have a feature request?" />

            <div className="max-w-xl mx-auto">
                {status === 'sent' ? (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-8 text-center animate-fade-in">
                        <div className="flex justify-center mb-4">
                            <CheckCircle className="w-12 h-12 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Message Sent</h3>
                        <p className="text-slate-400">Thank you for your feedback. We will get back to you shortly.</p>
                        <button onClick={() => setStatus('idle')} className="mt-6 text-green-400 hover:text-green-300 underline">
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                required
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Describe the issue or suggestion..."
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full flex justify-center items-center gap-2"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? (
                                'Sending...'
                            ) : (
                                <>
                                    <Send className="w-4 h-4" /> Send Message
                                </>
                            )}
                        </Button>
                    </form>
                )}
            </div>
        </div>
    );
}