// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for projects
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.project-item').forEach(item => {
    projectObserver.observe(item);
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroHeight = hero ? hero.offsetHeight : 0;
    
    if (hero && scrolled < heroHeight) {
        const parallaxAmount = Math.min(scrolled * 0.5, heroHeight * 0.3);
        hero.style.transform = `translateY(${parallaxAmount}px)`;
        
        const fadeStart = heroHeight * 0.4;
        if (scrolled > fadeStart) {
            const fadeProgress = (scrolled - fadeStart) / (heroHeight * 0.3);
            hero.style.opacity = Math.max(0, 1 - fadeProgress);
        } else {
            hero.style.opacity = 1;
        }
    }
});

// Animate hobby cards on hover
document.querySelectorAll('.hobby-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)';
    });
});

// Interactive elements hover effect
document.addEventListener('mousemove', (e) => {
    const interactiveElements = document.querySelectorAll('.btn, .project-link, .social-icon, .skill-tag');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        el.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});