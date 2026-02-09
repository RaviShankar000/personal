import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ActivityGraph() {
    const sectionRef = useRef(null);
    const graphRef = useRef(null);

    // Generate activity data (you can replace this with real GitHub API data)
    const generateActivityData = () => {
        const weeks = 52;
        const days = 7;
        const data = [];

        for (let week = 0; week < weeks; week++) {
            const weekData = [];
            for (let day = 0; day < days; day++) {
                // Generate random activity level (0-4)
                // Replace this with actual GitHub API data
                const level = Math.random() > 0.3 ? Math.floor(Math.random() * 5) : 0;
                weekData.push(level);
            }
            data.push(weekData);
        }
        return data;
    };

    const activityData = generateActivityData();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Mon', 'Wed', 'Fri'];

    // Calculate stats
    const totalContributions = activityData.flat().reduce((sum, level) => sum + level, 0);
    const currentStreak = 15; // Calculate from data
    const longestStreak = 42; // Calculate from data

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate cells
            gsap.from('.activity-cell', {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                stagger: {
                    amount: 1.5,
                    from: 'start',
                    grid: 'auto'
                },
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: graphRef.current,
                    start: 'top 80%',
                }
            });

            // Animate stats
            gsap.from('.stat-card', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const getColorClass = (level) => {
        const colors = [
            'bg-slate-800/30',           // Level 0 - no activity
            'bg-emerald-500/20',         // Level 1 - low
            'bg-emerald-500/40',         // Level 2 - medium
            'bg-emerald-500/70',         // Level 3 - high
            'bg-emerald-500'             // Level 4 - very high
        ];
        return colors[level] || colors[0];
    };

    return (
        <section
            id="activity"
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
        >
            {/* Animated background orbs */}
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-syne text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                        CODING ACTIVITY
                    </h2>
                    <p className="font-manrope text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        My journey in code, one commit at a time
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="stat-card bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-800 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-2xl">
                                🔥
                            </div>
                            <div>
                                <p className="font-manrope text-sm text-slate-400 mb-1">Current Streak</p>
                                <p className="font-syne text-3xl font-bold text-white">{currentStreak} days</p>
                            </div>
                        </div>
                    </div>

                    <div className="stat-card bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-800 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-2xl">
                                📊
                            </div>
                            <div>
                                <p className="font-manrope text-sm text-slate-400 mb-1">Total Contributions</p>
                                <p className="font-syne text-3xl font-bold text-white">{totalContributions}</p>
                            </div>
                        </div>
                    </div>

                    <div className="stat-card bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-800 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-2xl">
                                🏆
                            </div>
                            <div>
                                <p className="font-manrope text-sm text-slate-400 mb-1">Longest Streak</p>
                                <p className="font-syne text-3xl font-bold text-white">{longestStreak} days</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Activity Graph */}
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 overflow-x-auto">
                    <div className="min-w-[800px]" ref={graphRef}>
                        {/* Month labels */}
                        <div className="flex gap-[3px] mb-2 ml-12">
                            {months.map((month, i) => (
                                <div
                                    key={month}
                                    className="font-manrope text-xs text-slate-500"
                                    style={{ width: `${100 / 12}%` }}
                                >
                                    {month}
                                </div>
                            ))}
                        </div>

                        {/* Graph grid */}
                        <div className="flex gap-[3px]">
                            {/* Day labels */}
                            <div className="flex flex-col gap-[3px] justify-around mr-2">
                                {days.map((day) => (
                                    <div key={day} className="font-manrope text-xs text-slate-500 h-3 flex items-center">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* Activity cells */}
                            <div className="flex gap-[3px]">
                                {activityData.map((week, weekIndex) => (
                                    <div key={weekIndex} className="flex flex-col gap-[3px]">
                                        {week.map((level, dayIndex) => (
                                            <div
                                                key={`${weekIndex}-${dayIndex}`}
                                                className={`activity-cell w-3 h-3 rounded-sm ${getColorClass(level)} hover:ring-2 hover:ring-emerald-400 transition-all duration-200 cursor-pointer`}
                                                title={`${level} contributions`}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="flex items-center gap-3 mt-6 justify-end">
                            <span className="font-manrope text-xs text-slate-500">Less</span>
                            {[0, 1, 2, 3, 4].map((level) => (
                                <div
                                    key={level}
                                    className={`w-3 h-3 rounded-sm ${getColorClass(level)}`}
                                />
                            ))}
                            <span className="font-manrope text-xs text-slate-500">More</span>
                        </div>
                    </div>
                </div>

                {/* GitHub Link */}
                <div className="text-center mt-8">
                    <a
                        href="https://github.com/RaviShankar000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:border-emerald-500 transition-all duration-300 group"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span className="font-syne font-semibold">View on GitHub</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
