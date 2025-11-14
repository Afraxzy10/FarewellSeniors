
import React, { useState, useEffect } from 'react';
import type { Page } from './types';
import LandingPage from './components/LandingPage';
import CarouselPage from './components/CarouselPage';
import SeniorsPage from './components/SeniorsPage';
import TimelinePage from './components/TimelinePage';
import GoodbyePage from './components/GoodbyePage';
import Navbar from './components/Navbar';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('landing');
    const [isFading, setIsFading] = useState(false);

    const navigateTo = (page: Page) => {
        if (page === currentPage) return;
        setIsFading(true);
        setTimeout(() => {
            setCurrentPage(page);
            setIsFading(false);
        }, 500); // Duration of the fade-out animation
    };
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const renderPage = () => {
        switch (currentPage) {
            case 'carousel':
                return <CarouselPage />;
            case 'seniors':
                return <SeniorsPage />;
            case 'timeline':
                return <TimelinePage />;
            case 'goodbye':
                return <GoodbyePage />;
            case 'landing':
            default:
                return <LandingPage onEnter={() => navigateTo('carousel')} />;
        }
    };

    return (
        <div className="bg-blue-900 min-h-screen text-yellow-50 font-sans" style={{fontFamily: "'Poppins', sans-serif"}}>
            {currentPage !== 'landing' && <Navbar currentPage={currentPage} navigateTo={navigateTo} />}
            <main className={`transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                {renderPage()}
            </main>
        </div>
    );
};

export default App;
