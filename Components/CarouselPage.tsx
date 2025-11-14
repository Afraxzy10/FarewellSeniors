import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const images = [
    'https://via.placeholder.com/1200x600/1e3a8a/ffd700?text=Group+Photo+1',
    'https://via.placeholder.com/1200x600/1e3a8a/ffd700?text=Group+Photo+2',
    'https://via.placeholder.com/1200x600/1e3a8a/ffd700?text=Group+Photo+3',
    'https://via.placeholder.com/1200x600/1e3a8a/ffd700?text=Group+Photo+4',
    'https://via.placeholder.com/1200x600/1e3a8a/ffd700?text=Group+Photo+4',
];

const messages = [
    { type: 'Sarcastic', text: 'Congratulations on escaping! Don\'t forget about us when you\'re... you know... employed.' },
    { type: 'Emotional', text: 'It feels like just yesterday we were all starting out. The memories we\'ve made will be cherished forever. We\'ll miss you!' },
    { type: 'Motivational', text: 'The future is an unwritten book. Go fill its pages with adventure, success, and happiness. Your journey is just beginning!' },
];

const CarouselPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-center text-yellow-400 mb-8">Down Memory Lane</h2>
            
            <div className="max-w-4xl mx-auto relative group">
                <div style={{ backgroundImage: `url(${images[currentIndex]})` }} className="w-full h-56 md:h-96 bg-center bg-cover rounded-lg shadow-2xl transition-all duration-500"></div>
                
                <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-5 text-white bg-black/30 rounded-full p-2 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-5 text-white bg-black/30 rounded-full p-2 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                    <ChevronRightIcon className="h-6 w-6" />
                </button>

                <div className='flex top-4 justify-center py-2'>
                    {images.map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => setCurrentIndex(slideIndex)}
                            className={`text-2xl cursor-pointer p-1 transition-colors ${currentIndex === slideIndex ? 'text-yellow-400' : 'text-gray-400'}`}
                        >
                            ●
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                {messages.map((msg, index) => (
                    <div key={index} className="bg-blue-800 p-6 rounded-lg shadow-lg border border-yellow-500/30 transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-yellow-400 mb-3">{msg.type}</h3>
                        <p className="text-gray-200">{msg.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarouselPage;