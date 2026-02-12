import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
    const sectionRef = useRef(null);
    const cardsRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardsRef.current.children,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="achievements"
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
        >
            {/* Animated background orbs */}
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="relative z-10 max-w-5xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-20 px-2">
                    <h2 className="font-syne text-[clamp(1.5rem,4.5vw,6rem)] font-black mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent tracking-tighter w-full whitespace-nowrap overflow-visible">
                        ACHIEVEMENTS
                    </h2>
                    <p className="font-manrope text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Recognition and milestones in my learning journey
                    </p>
                </div>

                {/* Achievement Cards Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Achievement 1: Smart Coder Program */}
                    <div className="relative group">
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-800 hover:border-slate-600 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]">
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-full h-full">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-3 mb-2">
                                        <h4 className="font-syne text-lg md:text-xl font-bold text-white">
                                            Smart Coder Program
                                        </h4>
                                        {/* Rank Badge */}
                                        <div className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-syne text-xs font-bold whitespace-nowrap">
                                            Rank 12873/52612
                                        </div>
                                    </div>
                                    <p className="font-manrope text-sm text-slate-400 mb-2">
                                        Smart Interviews
                                    </p>
                                    <p className="font-manrope text-sm md:text-base text-slate-300 leading-relaxed">
                                        Achieved Gold-level performance in the Smart Coder DSA program by demonstrating strong problem-solving and algorithmic skills.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Achievement 2: Top Performer */}
                    <div className="relative group">
                        <div
                            onClick={() => setShowModal(true)}
                            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-800 hover:border-slate-600 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] cursor-pointer"
                        >
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-full h-full">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-3 mb-2">
                                        <h4 className="font-syne text-lg md:text-xl font-bold text-white">
                                            Top Performer
                                        </h4>
                                        {/* Badge */}
                                        <div className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white font-syne text-xs font-bold whitespace-nowrap">
                                            Excellence
                                        </div>
                                    </div>
                                    <p className="font-manrope text-sm text-slate-400 mb-2">
                                        Smart Interviews
                                    </p>
                                    <p className="font-manrope text-sm md:text-base text-slate-300 leading-relaxed">
                                        Issued for being the top performer. Excited to be continuing my learning journey.
                                    </p>
                                    {/* Click to view indicator */}
                                    <p className="font-manrope text-xs text-purple-400 mt-3 flex items-center gap-1">
                                        <span>📸</span> Click to view certificate photo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="mt-32">
                    <h3 className="font-syne text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                        Certifications
                    </h3>

                    {/* Certifications Grid */}
                    <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Oracle Cloud Infrastructure */}
                        <div className="relative group">
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-800 hover:border-slate-600 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)]">
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-lg p-2">
                                        <img src="/oracle-logo.png" alt="Oracle" className="w-full h-full object-contain" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h4 className="font-syne text-lg md:text-xl font-bold text-white mb-1">
                                            Oracle Cloud Infrastructure Certified AI Foundations Associate
                                        </h4>
                                        <p className="font-manrope text-sm text-slate-400 mb-2">
                                            Oracle • Issued September 2024
                                        </p>
                                        <div className="flex gap-2 mt-3">
                                            <span className="px-3 py-1 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 font-manrope text-xs">
                                                Cloud Computing
                                            </span>
                                            <span className="px-3 py-1 rounded-lg bg-orange-500/20 border border-orange-500/30 text-orange-400 font-manrope text-xs">
                                                AI Foundations
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Aviatrix */}
                        <div className="relative group">
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-800 hover:border-slate-600 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-lg p-2">
                                        <img src="/aviatrix-logo.png" alt="Aviatrix" className="w-full h-full object-contain" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h4 className="font-syne text-lg md:text-xl font-bold text-white mb-1">
                                            Aviatrix Certified Engineer
                                        </h4>
                                        <p className="font-manrope text-sm text-slate-400 mb-2">
                                            Aviatrix • Multi-Cloud Networking
                                        </p>
                                        <div className="flex gap-2 mt-3">
                                            <span className="px-3 py-1 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400 font-manrope text-xs">
                                                Cloud Networking
                                            </span>
                                            <span className="px-3 py-1 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 font-manrope text-xs">
                                                Multi-Cloud
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Linguaskill */}
                        <div className="relative group">
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-800 hover:border-slate-600 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]">
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-lg p-2">
                                        <img src="/cambridge-logo.png" alt="Cambridge" className="w-full h-full object-contain" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h4 className="font-syne text-lg md:text-xl font-bold text-white mb-1">
                                            Linguaskill Certificate
                                        </h4>
                                        <p className="font-manrope text-sm text-slate-400 mb-2">
                                            Cambridge • Issued October 2024
                                        </p>
                                        <div className="flex gap-2 mt-3">
                                            <span className="px-3 py-1 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-400 font-manrope text-xs">
                                                English Proficiency
                                            </span>
                                            <span className="px-3 py-1 rounded-lg bg-violet-500/20 border border-violet-500/30 text-violet-400 font-manrope text-xs">
                                                Cambridge
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Smart Coder Certificate */}
                        <div className="relative group">
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-800 hover:border-slate-600 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-lg p-2">
                                        <img src="/smart-interviews-logo.png" alt="Smart Interviews" className="w-full h-full object-contain" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h4 className="font-syne text-lg md:text-xl font-bold text-white mb-1">
                                            Smart Coder Certificate
                                        </h4>
                                        <p className="font-manrope text-sm text-slate-400 mb-2">
                                            Smart Interviews • DSA Program
                                        </p>
                                        <div className="flex gap-2 mt-3">
                                            <span className="px-3 py-1 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 font-manrope text-xs">
                                                Data Structures
                                            </span>
                                            <span className="px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-manrope text-xs">
                                                Algorithms
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Top Performer Photo */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300"
                        >
                            ✕
                        </button>

                        {/* Header */}
                        <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6">
                            <h3 className="font-syne text-2xl md:text-3xl font-bold text-white text-center">
                                🎉 Top Performer Award - Smart Interviews
                            </h3>
                        </div>

                        {/* Image */}
                        <div className="p-6 bg-slate-900">
                            <img
                                src="/top-performer-certificate.jpg"
                                alt="Top Performer Award Ceremony"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        {/* Footer */}
                        <div className="bg-slate-800/50 p-4 text-center">
                            <p className="font-manrope text-sm text-slate-400">
                                Receiving the Top Performer recognition from Smart Interviews
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
