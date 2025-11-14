
import React from 'react';
import type { Page } from '../types';

interface NavbarProps {
    currentPage: Page;
    navigateTo: (page: Page) => void;
}

const navLinks: { page: Page; label: string }[] = [
    { page: 'carousel', label: 'Gallery' },
    { page: 'seniors', label: 'Our Stars' },
    { page: 'timeline', label: 'Timeline' },
    { page: 'goodbye', label: 'Goodbye' },
];

const Navbar: React.FC<NavbarProps> = ({ currentPage, navigateTo }) => {
    return (
        <nav className="sticky top-0 z-50 bg-blue-900/80 backdrop-blur-sm shadow-lg shadow-yellow-500/10">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="text-2xl font-bold text-yellow-400">
                        Batch of 2025
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.page}
                                onClick={() => navigateTo(link.page)}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                                    currentPage === link.page
                                        ? 'bg-yellow-400 text-blue-900'
                                        : 'text-yellow-100 hover:bg-yellow-400/20'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                    <div className="md:hidden">
                       <select 
                            onChange={(e) => navigateTo(e.target.value as Page)} 
                            value={currentPage}
                            className="bg-blue-800 text-yellow-200 border border-yellow-500 rounded-md p-2">
                            {navLinks.map(link => (
                                <option key={link.page} value={link.page}>{link.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
