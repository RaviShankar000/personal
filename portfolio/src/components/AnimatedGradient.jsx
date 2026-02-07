import { useEffect, useRef } from 'react';

const AnimatedGradient = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const drawGradient = () => {
            const gradient1 = ctx.createRadialGradient(
                canvas.width * 0.3 + Math.sin(time * 0.001) * 100,
                canvas.height * 0.3 + Math.cos(time * 0.001) * 100,
                0,
                canvas.width * 0.3,
                canvas.height * 0.3,
                canvas.width * 0.6
            );
            gradient1.addColorStop(0, 'rgba(99, 102, 241, 0.15)');
            gradient1.addColorStop(1, 'rgba(99, 102, 241, 0)');

            const gradient2 = ctx.createRadialGradient(
                canvas.width * 0.7 + Math.cos(time * 0.0015) * 100,
                canvas.height * 0.7 + Math.sin(time * 0.0015) * 100,
                0,
                canvas.width * 0.7,
                canvas.height * 0.7,
                canvas.width * 0.6
            );
            gradient2.addColorStop(0, 'rgba(168, 85, 247, 0.15)');
            gradient2.addColorStop(1, 'rgba(168, 85, 247, 0)');

            const gradient3 = ctx.createRadialGradient(
                canvas.width * 0.5 + Math.sin(time * 0.002) * 150,
                canvas.height * 0.5 + Math.cos(time * 0.002) * 150,
                0,
                canvas.width * 0.5,
                canvas.height * 0.5,
                canvas.width * 0.5
            );
            gradient3.addColorStop(0, 'rgba(236, 72, 153, 0.1)');
            gradient3.addColorStop(1, 'rgba(236, 72, 153, 0)');

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = gradient1;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = gradient2;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = gradient3;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        const animate = () => {
            time++;
            drawGradient();
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.6 }}
        />
    );
};

export default AnimatedGradient;
