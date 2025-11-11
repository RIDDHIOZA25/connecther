// Smooth scroll to waitlist section
function scrollToWaitlist() {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
        waitlistSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add scroll effect to navbar with smooth transitions
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.scrollY;
    
    if (currentScroll > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
}, { passive: true });

// Enhanced scroll animations with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
};

const fadeInObserver = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger animation for multiple elements
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    // Benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach(card => {
        fadeInObserver.observe(card);
    });
    
    // Value proposition sections
    const valuePropTitle = document.querySelector('.value-prop .section-title');
    const valuePropDesc = document.querySelector('.value-prop .section-description');
    if (valuePropTitle) fadeInObserver.observe(valuePropTitle);
    if (valuePropDesc) {
        setTimeout(() => fadeInObserver.observe(valuePropDesc), 200);
    }
    
    // Founder quote
    const quoteContent = document.querySelector('.quote-content');
    if (quoteContent) fadeInObserver.observe(quoteContent);
    
    // Add smooth reveal animation to hero on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
    }
});

