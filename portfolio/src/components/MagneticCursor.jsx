import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MagneticCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });

            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'power2.out'
            });
        };

        const handleMouseEnter = () => {
            gsap.to(cursor, {
                scale: 0.5,
                duration: 0.3
            });
            gsap.to(follower, {
                scale: 2,
                duration: 0.3
            });
        };

        const handleMouseLeave = () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.3
            });
            gsap.to(follower, {
                scale: 1,
                duration: 0.3
            });
        };

        window.addEventListener('mousemove', moveCursor);

        // Add magnetic effect to interactive elements
        const magneticElements = document.querySelectorAll('button, a, .magnetic');
        magneticElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            magneticElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="hidden md:block fixed w-3 h-3 bg-purple-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
            <div
                ref={followerRef}
                className="hidden md:block fixed w-8 h-8 border-2 border-purple-400 rounded-full pointer-events-none z-[9998] mix-blend-difference"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
        </>
    );
};

export default MagneticCursor;
