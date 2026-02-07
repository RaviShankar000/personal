// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Particle Animation Canvas
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
        }
    }
    
    draw() {
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particlesArray = [];
    const numberOfParticles = (canvas.width * canvas.height) / 15000;
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        
        // Connect particles
        for (let j = i; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 - distance / 500})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

initParticles();
animateParticles();

// GSAP Hero Animations
gsap.from('.hero-title', {
    duration: 1.2,
    y: 100,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.3
});

gsap.from('.hero-subtitle', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.6
});

gsap.from('.hero-cta', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power2.out',
    delay: 0.9
});

gsap.from('.hero-bg-shape', {
    duration: 2,
    scale: 0,
    opacity: 0,
    ease: 'elastic.out(1, 0.5)',
    delay: 0.5
});

// Scroll-triggered animations
ScrollTrigger.batch('.service-card', {
    onEnter: (elements) => {
        gsap.from(elements, {
            duration: 0.8,
            y: 60,
            opacity: 0,
            stagger: 0.15,
            ease: 'power3.out'
        });
    },
    once: true
});

ScrollTrigger.batch('.project-card', {
    onEnter: (elements) => {
        gsap.from(elements, {
            duration: 1,
            y: 80,
            opacity: 0,
            stagger: 0.2,
            ease: 'power4.out',
            rotation: 5
        });
    },
    once: true
});

ScrollTrigger.batch('.skill-item', {
    onEnter: (elements) => {
        gsap.from(elements, {
            duration: 0.6,
            scale: 0,
            opacity: 0,
            stagger: 0.05,
            ease: 'back.out(1.7)'
        });
    },
    once: true
});

ScrollTrigger.batch('.certificate-card', {
    onEnter: (elements) => {
        gsap.from(elements, {
            duration: 0.8,
            x: -100,
            opacity: 0,
            stagger: 0.15,
            ease: 'power3.out'
        });
    },
    once: true
});

ScrollTrigger.batch('.timeline-item', {
    onEnter: (elements) => {
        gsap.from(elements, {
            duration: 1,
            x: -80,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out'
        });
    },
    once: true
});

// Parallax effect for sections
gsap.utils.toArray('.section-title').forEach((title) => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1
        },
        x: -100,
        opacity: 0.3
    });
});

// Magnetic button effect
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(button, {
            duration: 0.3,
            x: x * 0.3,
            y: y * 0.3,
            ease: 'power2.out'
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            duration: 0.5,
            x: 0,
            y: 0,
            ease: 'elastic.out(1, 0.5)'
        });
    });
});

// Smooth scroll with GSAP
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            gsap.to(window, {
                duration: 1.5,
                scrollTo: {
                    y: target,
                    offsetY: 80
                },
                ease: 'power3.inOut'
            });
        }
    });
});

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger with GSAP
    hamburger.classList.toggle('active');
    
    if (navMenu.classList.contains('active')) {
        gsap.from('.nav-menu li', {
            duration: 0.5,
            y: -20,
            opacity: 0,
            stagger: 0.1,
            ease: 'power2.out'
        });
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Text reveal animation
const splitText = (element) => {
    const text = element.textContent;
    element.innerHTML = '';
    
    text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        element.appendChild(span);
    });
};

// Hover effect for cards with 3D tilt
const cards = document.querySelectorAll('.service-card, .project-card, .certificate-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            duration: 0.3,
            y: -10,
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            duration: 0.3,
            y: 0,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        gsap.to(card, {
            duration: 0.5,
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            duration: 0.5,
            rotationX: 0,
            rotationY: 0,
            ease: 'power2.out'
        });
    });
});

// Navbar Background on Scroll with animation
const navbar = document.querySelector('.navbar');

ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {
        className: 'scrolled',
        targets: '.navbar'
    }
});

// Add smooth background transition
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        gsap.to(navbar, {
            duration: 0.3,
            backgroundColor: 'rgba(10, 10, 10, 0.98)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
        });
    } else {
        gsap.to(navbar, {
            duration: 0.3,
            backgroundColor: 'rgba(10, 10, 10, 0.95)',
            boxShadow: 'none'
        });
    }
});

// Animated counter for statistics (if you add them later)
const animateCounter = (element, target, duration = 2000) => {
    gsap.to(element, {
        duration: duration / 1000,
        innerText: target,
        snap: { innerText: 1 },
        ease: 'power1.out',
        onUpdate: function() {
            element.innerText = Math.ceil(element.innerText);
        }
    });
};

// Scroll progress indicator with GSAP
const progressBar = document.querySelector('.scroll-progress');

gsap.to(progressBar, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3
    }
});

// Reveal animation for text on scroll
gsap.utils.toArray('.about-text p, .quote p').forEach(paragraph => {
    gsap.from(paragraph, {
        scrollTrigger: {
            trigger: paragraph,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
    });
});

// Animated background gradient
const heroSection = document.querySelector('.hero');
gsap.to('.hero-bg-shape', {
    duration: 10,
    rotation: 360,
    repeat: -1,
    ease: 'none'
});

// Image reveal animation (when you add images)
gsap.utils.toArray('img').forEach(img => {
    gsap.from(img, {
        scrollTrigger: {
            trigger: img,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.2,
        scale: 0.8,
        opacity: 0,
        ease: 'power3.out'
    });
});

// Custom Cursor Effect with GSAP
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

const cursorFollower = document.createElement('div');
cursorFollower.className = 'cursor-follower';
document.body.appendChild(cursorFollower);

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    gsap.to(cursor, {
        duration: 0.1,
        x: mouseX,
        y: mouseY
    });
    
    gsap.to(cursorFollower, {
        duration: 0.3,
        x: mouseX,
        y: mouseY
    });
});

// Enhanced cursor hover effects
document.querySelectorAll('a, button, .btn-primary, .btn-secondary, .project-card, .service-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            duration: 0.3,
            scale: 1.5,
            backgroundColor: 'rgba(59, 130, 246, 0.5)'
        });
        gsap.to(cursorFollower, {
            duration: 0.3,
            scale: 1.5
        });
    });
    
    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            duration: 0.3,
            scale: 1,
            backgroundColor: 'rgba(59, 130, 246, 1)'
        });
        gsap.to(cursorFollower, {
            duration: 0.3,
            scale: 1
        });
    });
});

// Stagger Animation for Service Cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Stagger Animation for Project Cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Counter Animation for Numbers (if you want to add statistics)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

function updateActiveLink() {
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = '#3b82f6';
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Lazy Loading Images (if you add real images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add Loading Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add smooth entrance for body
const bodyStyle = document.createElement('style');
bodyStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(bodyStyle);

// Scroll Progress Indicator
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

const progressStyle = document.createElement('style');
progressStyle.textContent = `
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        z-index: 10000;
        transition: width 0.1s ease;
    }
`;
document.head.appendChild(progressStyle);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// Add "Back to Top" button functionality
const backToTopBtn = document.querySelector('.back-to-top');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Console Message (Easter Egg)
console.log('%c👋 Hello Developer!', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
console.log('%cLooking at the code? Feel free to reach out if you want to collaborate!', 'font-size: 14px; color: #999;');

// Prevent animations on page load for better performance
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('animations-ready');
    }, 100);
});

// Add tilt effect to cards (3D hover effect)
const cards = document.querySelectorAll('.service-card, .project-card, .certificate-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Add smooth transitions for all cards
cards.forEach(card => {
    card.style.transition = 'transform 0.3s ease';
});

console.log('✅ Portfolio website loaded successfully!');
