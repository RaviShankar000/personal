// Advanced Animation Effects - Load after main script.js

// Magnetic effect for navigation items
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        gsap.to(this, {
            duration: 0.3,
            scale: 1.1,
            color: '#3b82f6',
            ease: 'power2.out'
        });
    });
    
    link.addEventListener('mouseleave', function() {
        gsap.to(this, {
            duration: 0.3,
            scale: 1,
            color: '',
            ease: 'power2.out'
        });
    });
});

// Text split and reveal animation
function splitTextAnimation(selector) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            element.appendChild(span);
            
            gsap.to(span, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                duration: 0.05,
                opacity: 1,
                y: 0,
                delay: i * 0.02,
                ease: 'power2.out'
            });
        });
    });
}

// Apply to section titles
// splitTextAnimation('.section-title');

// Floating animation for hero image
gsap.to('.hero-bg-shape', {
    y: 30,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

// Skill items bounce on hover
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        gsap.to(this, {
            duration: 0.4,
            y: -10,
            ease: 'bounce.out'
        });
    });
    
    item.addEventListener('mouseleave', function() {
        gsap.to(this, {
            duration: 0.3,
            y: 0,
            ease: 'power2.out'
        });
    });
});

// Parallax effect for backgrounds
gsap.utils.toArray('.service-card, .project-card').forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: i % 2 === 0 ? -50 : 50,
        ease: 'none'
    });
});

// Animated gradient background
function createGradientAnimation() {
    const colors = [
        'rgba(102, 126, 234, 0.1)',
        'rgba(118, 75, 162, 0.1)',
        'rgba(59, 130, 246, 0.1)'
    ];
    
    let colorIndex = 0;
    
    setInterval(() => {
        colorIndex = (colorIndex + 1) % colors.length;
        gsap.to('body', {
            duration: 3,
            backgroundColor: colors[colorIndex],
            ease: 'power1.inOut'
        });
    }, 5000);
}

// createGradientAnimation(); // Uncomment to enable

// Reveal animation on scroll
gsap.utils.toArray('.contact-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        scale: 0.8,
        rotation: -5,
        opacity: 0,
        ease: 'back.out(1.7)'
    });
});

// Marquee speed control on hover
document.querySelectorAll('.marquee, .animated-banner').forEach(marquee => {
    const content = marquee.querySelector('.marquee-content, .banner-content');
    
    marquee.addEventListener('mouseenter', () => {
        gsap.to(content, {
            duration: 0.5,
            animationDuration: '40s'
        });
    });
    
    marquee.addEventListener('mouseleave', () => {
        gsap.to(content, {
            duration: 0.5,
            animationDuration: '20s'
        });
    });
});

// Letter spacing animation on hover for titles
document.querySelectorAll('h1, h2, h3').forEach(heading => {
    heading.addEventListener('mouseenter', function() {
        gsap.to(this, {
            duration: 0.3,
            letterSpacing: '2px',
            ease: 'power2.out'
        });
    });
    
    heading.addEventListener('mouseleave', function() {
        gsap.to(this, {
            duration: 0.3,
            letterSpacing: '',
            ease: 'power2.out'
        });
    });
});

// Ripple effect on click
document.addEventListener('click', (e) => {
    if (!e.target.closest('a, button')) return;
    
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.body.appendChild(ripple);
    
    gsap.to(ripple, {
        duration: 0.6,
        scale: 20,
        opacity: 0,
        ease: 'power2.out',
        onComplete: () => ripple.remove()
    });
});

// Add ripple CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple-effect {
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%);
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
    }
`;
document.head.appendChild(rippleStyle);

// Smooth reveal for images with blur
gsap.utils.toArray('img, .project-placeholder, .profile-placeholder').forEach(img => {
    gsap.from(img, {
        scrollTrigger: {
            trigger: img,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.5,
        scale: 1.2,
        filter: 'blur(10px)',
        opacity: 0,
        ease: 'power3.out'
    });
});

// Quote animation
gsap.utils.toArray('.quote').forEach(quote => {
    gsap.from(quote, {
        scrollTrigger: {
            trigger: quote,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.2,
        scale: 0.9,
        rotationX: -15,
        opacity: 0,
        ease: 'power3.out'
    });
});

// Timeline items slide in from left
gsap.utils.toArray('.timeline-content').forEach((content, i) => {
    gsap.from(content, {
        scrollTrigger: {
            trigger: content,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        ease: 'power3.out'
    });
});

// Footer reveal
gsap.from('.footer', {
    scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom',
        end: 'top center',
        scrub: 1
    },
    y: 100,
    opacity: 0
});

// Animated line drawing effect
function drawLine(element) {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.5,
        scaleX: 0,
        transformOrigin: 'left',
        ease: 'power3.inOut'
    });
}

// Apply to section title underlines
document.querySelectorAll('.section-title::after').forEach(line => {
    drawLine(line);
});

console.log('✨ Advanced animations loaded!');
