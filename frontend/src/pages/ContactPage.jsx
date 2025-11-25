import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { api } from '../services/api';

const ContactPage = () => {
    const [formState, setFormState] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState('loading');

        // Simulate Django Backend Call
        try {
            await api.submitContactForm({});
            setFormState('success');
        } catch (err) {
            setFormState('error');
        }
    };

    if (formState === 'success') {
        return (
            <div className="min-h-[60vh] flex items-center justify-center bg-slate-900 px-4">
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-900 mb-6">
                        <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-white">Message Received!</h2>
                    <p className="mt-4 text-lg text-slate-400">Our support team will review your request shortly.</p>
                    <Button onClick={() => setFormState('idle')} className="mt-8" variant="secondary">
                        Send Another
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-slate-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <SectionHeader title="Get in Touch" subtitle="Support" />

                <div className="bg-slate-800 py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-slate-700">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-slate-300">First name</label>
                                <input type="text" required className="mt-1 block w-full bg-slate-900 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-red-500 focus:border-red-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300">Last name</label>
                                <input type="text" required className="mt-1 block w-full bg-slate-900 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-red-500 focus:border-red-500" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300">Email address</label>
                            <input type="email" required className="mt-1 block w-full bg-slate-900 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-red-500 focus:border-red-500" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300">Issue Type</label>
                            <select className="mt-1 block w-full bg-slate-900 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-red-500 focus:border-red-500">
                                <option>Bug Report</option>
                                <option>Feature Request</option>
                                <option>Wiping Strategy Question</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300">Message</label>
                            <textarea rows={4} required className="mt-1 block w-full bg-slate-900 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-red-500 focus:border-red-500" />
                        </div>

                        <div>
                            <Button type="submit" isLoading={formState === 'loading'} className="w-full">
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;