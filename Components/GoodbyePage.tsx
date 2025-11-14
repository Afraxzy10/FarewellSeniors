
import React from 'react';

const GoodbyePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-b from-blue-900 to-indigo-900 text-center p-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6 drop-shadow-md">
                    One Last Thank You
                </h2>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
                    To the seniors of 2025, thank you. Thank you for the guidance, the laughter, and the inspiration. You've set a high bar and left an indelible mark on all of us. As you step into your futures, know that you carry our best wishes with you.
                </p>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
                    This isn't the end of your story; it's the start of a new, exciting chapter. May your paths be filled with success, happiness, and fulfillment. Go out there and be amazing.
                </p>
                <p className="text-2xl font-semibold text-yellow-300">
                    The world is ready for you. Farewell & All the best!
                </p>
            </div>
        </div>
    );
};

export default GoodbyePage;
