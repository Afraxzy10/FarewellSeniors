
import React from 'react';

interface LandingPageProps {
    onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-center p-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 drop-shadow-lg mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                Farewell Seniors
            </h1>
            <p className="text-2xl md:text-4xl text-yellow-300 font-semibold mb-8">Batch of 2025</p>
            <div className="max-w-2xl mx-auto">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-12">
                    As you stand at the threshold of a new beginning, we look back at the moments we've shared. The laughter, the challenges, the growth. This is not a goodbye, but a 'see you later'. Here's to the memories we've made and the amazing futures that await you.
                </p>
            </div>
            <button
                onClick={onEnter}
                className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 ease-in-out text-xl"
            >
                Enter
            </button>
        </div>
    );
};

const fadeInAnimation = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
    animation: fadeIn 1.5s ease-out forwards;
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = fadeInAnimation;
document.head.appendChild(styleSheet);


export default LandingPage;
