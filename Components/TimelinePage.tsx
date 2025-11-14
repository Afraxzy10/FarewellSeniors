import React from 'react';

const timelineEvents = [
    { year: '2021', title: 'The Beginning', description: 'Our journey started. A new chapter filled with fresh faces, dreams, and a lot of caffeine.', image: 'https://via.placeholder.com/400x300/1e3a8a/ffd700?text=Memory+2021' },
    { year: '2022', title: 'Mid-way Madness', description: 'Projects, exams, and late-night study sessions. We learned, we grew, and we made friendships that will last a lifetime.', image: 'https://via.placeholder.com/400x300/1e3a8a/ffd700?text=Memory+2022' },
    { year: '2023', title: 'Finding Our Stride', description: 'We hit our groove. Specializations, internships, and discovering our passions. The future started to look a lot clearer.', image: 'https://via.placeholder.com/400x300/1e3a8a/ffd700?text=Memory+2023' },
    { year: '2024', title: 'The Final Stretch', description: 'The last hurdles. Final year projects, placements, and the bittersweet feeling of an era coming to an end.', image: 'https://via.placeholder.com/400x300/1e3a8a/ffd700?text=Memory+2024' },
    { year: '2025', title: 'A New Dawn', description: 'Graduation. We made it! Ready to take on the world with heads held high and hearts full of memories.', image: 'https://via.placeholder.com/400x300/1e3a8a/ffd700?text=Memory+2025' },
];

const TimelinePage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">Our Shared Timeline</h2>
            <div className="relative p-2 md:p-10">
                <div className="hidden md:block border-l-2 absolute border-opacity-20 border-yellow-400 top-0 bottom-0" style={{ left: '50%', transform: 'translateX(-1px)' }}></div>
                {timelineEvents.map((event, index) => (
                    <div key={index} className={`mb-8 flex justify-center md:justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                         <div className="hidden md:block w-5/12"></div>
                        <div className="z-20 hidden md:flex items-center justify-center bg-yellow-400 shadow-xl w-8 h-8 rounded-full flex-shrink-0">
                            <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
                        </div>
                        <div className="bg-blue-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 border border-yellow-500/30 transform hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="mb-3 font-bold text-yellow-300 text-xl">{event.year} - {event.title}</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-200">{event.description}</p>
                            <img src={event.image} alt={event.title} className="mt-4 rounded-md shadow-md" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimelinePage;