export default function AnimatedGradient() {
    return (
        <>
            {/* Primary animated gradient background */}
            <div className="fixed inset-0 -z-20 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 animate-gradient-shift" />

            {/* Layered gradient orbs */}
            <div className="fixed inset-0 -z-20 overflow-hidden">
                {/* Large blue orb */}
                <div
                    className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full opacity-30 blur-[120px] animate-float-slow"
                    style={{
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                        animationDuration: '20s'
                    }}
                />

                {/* Purple orb */}
                <div
                    className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-25 blur-[100px] animate-float-slow"
                    style={{
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
                        animationDuration: '25s',
                        animationDelay: '5s'
                    }}
                />

                {/* Cyan orb */}
                <div
                    className="absolute bottom-0 left-1/3 w-[700px] h-[700px] rounded-full opacity-20 blur-[110px] animate-float-slow"
                    style={{
                        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
                        animationDuration: '30s',
                        animationDelay: '10s'
                    }}
                />

                {/* Pink accent orb */}
                <div
                    className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full opacity-15 blur-[90px] animate-float-slow"
                    style={{
                        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
                        animationDuration: '22s',
                        animationDelay: '7s'
                    }}
                />
            </div>

            {/* Animated grid overlay */}
            <div
                className="fixed inset-0 -z-20 opacity-10"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '100px 100px',
                    animation: 'grid-move 20s linear infinite'
                }}
            />

            {/* Radial gradient vignette */}
            <div
                className="fixed inset-0 -z-20"
                style={{
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(2, 6, 23, 0.8) 100%)'
                }}
            />

            <style jsx>{`
                @keyframes gradient-shift {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                @keyframes float-slow {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(50px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-30px, 30px) scale(0.9);
                    }
                }

                @keyframes grid-move {
                    0% {
                        transform: translate(0, 0);
                    }
                    100% {
                        transform: translate(100px, 100px);
                    }
                }

                .animate-gradient-shift {
                    background-size: 200% 200%;
                    animation: gradient-shift 15s ease infinite;
                }

                .animate-float-slow {
                    animation: float-slow 20s ease-in-out infinite;
                }
            `}</style>
        </>
    );
}
