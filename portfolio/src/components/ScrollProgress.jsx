import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollProgress = () => {
    const progressRef = useRef(null);

    useEffect(() => {
        const progressBar = progressRef.current;

        // Ensure initial width is 0
        gsap.set(progressBar, { width: 0 });

        const animation = gsap.to(progressBar, {
            width: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: document.body,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0,
            }
        });

        return () => {
            animation.kill();
            ScrollTrigger.getAll().forEach(t => t.kill()); // Be careful not to kill other triggers? 
            // Better to kill just this one if possible, but ScrollTrigger logic is usually global.
            // Actually, animation.scrollTrigger.kill() is better.
            if (animation.scrollTrigger) animation.scrollTrigger.kill();
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full z-[100] pointer-events-none hidden md:block">
            <div
                ref={progressRef}
                className="h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] origin-left"
            />
        </div>
    );
};

export default ScrollProgress;
