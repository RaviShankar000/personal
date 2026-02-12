import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    const sectionRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardsRef.current.children,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
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

    const skillCategories = [
        {
            title: 'Programming Languages',
            icon: '💻',
            borderColor: 'border-pink-500',
            bgColor: 'bg-pink-50/5',
            skills: [
                { name: 'JavaScript', icon: '🟨' },
                { name: 'Python', icon: '🐍' },
                { name: 'Java', icon: '☕' },
                { name: 'C++', icon: '⚙️' },
            ]
        },
        {
            title: 'Frameworks & Libraries',
            icon: '⚛️',
            borderColor: 'border-blue-500',
            bgColor: 'bg-blue-50/5',
            skills: [
                { name: 'React', icon: '⚛️' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'Express', icon: '🚂' },
                { name: 'Next.js', icon: '▲' },
                { name: 'Tailwind CSS', icon: '🎨' },
            ]
        },
        {
            title: 'Databases',
            icon: '🗄️',
            borderColor: 'border-green-500',
            bgColor: 'bg-green-50/5',
            skills: [
                { name: 'MongoDB', icon: '🍃' },
                { name: 'MySQL', icon: '🐬' },
                { name: 'PostgreSQL', icon: '🐘' },
                { name: 'Firebase', icon: '🔥' },
            ]
        },
        {
            title: 'Tools & Technologies',
            icon: '🛠️',
            borderColor: 'border-purple-500',
            bgColor: 'bg-purple-50/5',
            skills: [
                { name: 'Git', icon: '📦' },
                { name: 'GitHub', icon: '🐙' },
                { name: 'VS Code', icon: '💙' },
                { name: 'Docker', icon: '🐳' },
                { name: 'Postman', icon: '📮' },
            ]
        },
        {
            title: 'Web Technologies',
            icon: '🌐',
            borderColor: 'border-orange-500',
            bgColor: 'bg-orange-50/5',
            skills: [
                { name: 'HTML5', icon: '🟧' },
                { name: 'CSS3', icon: '🎨' },
                { name: 'REST APIs', icon: '🔌' },
                { name: 'GraphQL', icon: '◈' },
            ]
        },
        {
            title: 'Other Skills',
            icon: '✨',
            borderColor: 'border-cyan-500',
            bgColor: 'bg-cyan-50/5',
            skills: [
                { name: 'UI/UX Design', icon: '🎨' },
                { name: 'Responsive Design', icon: '📱' },
                { name: 'Problem Solving', icon: '🧩' },
                { name: 'Team Collaboration', icon: '🤝' },
            ]
        },
    ];

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
        >
            {/* Animated background orbs */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-20 px-2">
                    <h2 className="font-syne text-[clamp(1.5rem,3.5vw,5rem)] font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent whitespace-nowrap overflow-visible">
                        Skills & Technologies
                    </h2>
                    <p className="font-manrope text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        My technical toolkit for building amazing digital experiences
                    </p>
                </div>

                {/* Skills Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className={`group relative ${category.bgColor} backdrop-blur-sm border-2 ${category.borderColor} rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]`}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">{category.icon}</span>
                                <h3 className="font-syne text-lg font-bold text-white">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 rounded-lg text-slate-300 text-sm font-manrope hover:bg-slate-700/50 hover:text-white transition-all duration-300"
                                    >
                                        <span>{skill.icon}</span>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
