import { useRef, useEffect } from 'react';

export default function useTilt(ref, { rx = 5, ry = 5, scale = 1.05 } = {}) {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const handleMouseMove = (e) => {
            const { left, top, width, height } = el.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;

            const tiltX = (0.5 - y) * rx; // Rotate X based on Y position
            const tiltY = (x - 0.5) * ry; // Rotate Y based on X position

            el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`;
            el.style.transition = 'none'; // Instant update for smoothness
        };

        const handleMouseLeave = () => {
            el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
            el.style.transition = 'transform 0.5s ease-out'; // Smooth exit
        };

        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            el.removeEventListener('mousemove', handleMouseMove);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [rx, ry, scale]);
}
