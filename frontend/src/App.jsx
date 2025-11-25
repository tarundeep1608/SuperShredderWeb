import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HeroSection from './pages/HeroSection';
import FeaturesGrid from './pages/FeaturesGrid';
import DownloadPage from './pages/DownloadPage';
import GuidePage from './pages/GuidePage';
import ContactPage from './pages/ContactPage';

export default function App() {
    const [activePage, setActivePage] = useState('home');

    const renderContent = () => {
        switch (activePage) {
            case 'home':
                return (
                    <>
                        <HeroSection setActivePage={setActivePage} />
                        <FeaturesGrid />
                    </>
                );
            case 'download':
                return <DownloadPage />;
            case 'guide':
                return <GuidePage />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HeroSection setActivePage={setActivePage} />;
        }
    };

    return (
        <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-red-500 selection:text-white flex flex-col">
            <Navbar activePage={activePage} setActivePage={setActivePage} />
            <main className="flex-grow">
                {renderContent()}
            </main>
            <Footer />
        </div>
    );
}