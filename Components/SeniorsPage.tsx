import React, { useState } from 'react';
import { SENIORS } from '../constants';
import type { Senior } from '../types';
import { CloseIcon } from './icons';

// Modal Component defined in the same file to avoid unmount/remount issues.
interface ModalProps {
    senior: Senior | null;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ senior, onClose }) => {
    if (!senior) return null;
    const initials = senior.name.split(' ').map(n => n[0]).join('');

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300" onClick={onClose}>
            <div className="bg-gradient-to-br from-blue-800 to-indigo-900 rounded-lg shadow-2xl p-8 max-w-lg w-full text-center relative border-2 border-yellow-500 transform scale-100 animate-modal-in" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-yellow-200 hover:text-white transition-colors">
                    <CloseIcon className="h-8 w-8" />
                </button>
                <img src={`https://via.placeholder.com/150x150/1e3a8a/ffd700?text=${initials}`} alt={senior.name} className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-yellow-400 shadow-lg" />
                <h3 className="text-3xl font-bold text-yellow-400 mb-3">{senior.name}</h3>
                <p className="text-gray-200 text-lg leading-relaxed">{senior.message}</p>
            </div>
        </div>
    );
};

const SeniorsPage: React.FC = () => {
    const [selectedSenior, setSelectedSenior] = useState<Senior | null>(null);

    const handleCardClick = (senior: Senior) => {
        setSelectedSenior(senior);
    };

    const handleCloseModal = () => {
        setSelectedSenior(null);
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">Our Graduating Stars</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {SENIORS.map((senior) => {
                    const initials = senior.name.split(' ').map(n => n[0]).join('');
                    return (
                        <div
                            key={senior.name}
                            onClick={() => handleCardClick(senior)}
                            className="bg-blue-800 p-4 rounded-lg shadow-lg text-center cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 border border-yellow-500/20 hover:border-yellow-400"
                        >
                            <img
                                src={`https://via.placeholder.com/200x200/1e3a8a/ffd700?text=${initials}`}
                                alt={senior.name}
                                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-yellow-500/50"
                            />
                            <h3 className="font-semibold text-yellow-200">{senior.name}</h3>
                        </div>
                    );
                })}
            </div>
            <Modal senior={selectedSenior} onClose={handleCloseModal} />
        </div>
    );
};

const modalAnimation = `
@keyframes modalIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
}
.animate-modal-in {
    animation: modalIn 0.3s ease-out forwards;
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = modalAnimation;
document.head.appendChild(styleSheet);


export default SeniorsPage;