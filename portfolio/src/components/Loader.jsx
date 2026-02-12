
import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ loading }) => {
    const [visible, setVisible] = useState(loading);

    useEffect(() => {
        if (!loading) {
            const timer = setTimeout(() => setVisible(false), 500); // Allow fade-out animation to finish
            return () => clearTimeout(timer);
        } else {
            setVisible(true);
        }
    }, [loading]);

    if (!visible) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617] transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

            {/* Bored Hand Animation Container */}
            <div className="relative w-32 h-32 flex items-center justify-center">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-blue-500/20 blur-[50px] rounded-full animate-pulse" />

                {/* Hand SVG */}
                <svg
                    className="w-24 h-24 text-slate-300 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                >
                    {/* Palm (Static Base) */}
                    <path
                        d="M20,60 Q20,50 30,50 L70,50 Q80,50 80,60 L80,90 Q80,100 70,100 L30,100 Q20,100 20,90 Z"
                        className="fill-slate-800 stroke-slate-600 stroke-2"
                    />

                    {/* Finger 1 (Index) - Tapping Animation */}
                    <rect x="22" y="20" width="12" height="35" rx="6" className="fill-slate-400 animate-tap-1 origin-bottom" />

                    {/* Finger 2 (Middle) */}
                    <rect x="38" y="15" width="12" height="40" rx="6" className="fill-slate-400 animate-tap-2 origin-bottom" />

                    {/* Finger 3 (Ring) */}
                    <rect x="54" y="20" width="12" height="35" rx="6" className="fill-slate-400 animate-tap-3 origin-bottom" />

                    {/* Finger 4 (Pinky) */}
                    <rect x="70" y="25" width="12" height="30" rx="6" className="fill-slate-400 animate-tap-4 origin-bottom" />
                </svg>
            </div>

            {/* Loading Text */}
            <h2 className="mt-8 text-xl font-syne font-bold tracking-widest uppercase bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                Loading...
            </h2>
        </div>
    );
};

export default Loader;
