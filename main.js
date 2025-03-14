// Function to load components
function loadComponent(containerId, componentUrl) {
    fetch(componentUrl)
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
            
            // Initialize animations after loading components
            initAnimations();
            
            // Initialize Swiper if the component contains a swiper
            if (componentUrl === 'component-testimonials.html') {
                initSwiper();
            }
        })
        .catch(error => {
            console.error(`Error loading ${componentUrl}:`, error);
        });
}

// Function to initialize animations
function initAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Function to initialize Swiper
function initSwiper() {
    const swiper = new Swiper('.testimonialSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}

// Function to initialize cosmic elements
function initCosmicElements() {
    const cosmicContainer = document.querySelector('.cosmic-elements');
    if (!cosmicContainer) return;
    
    // Clear any existing elements
    cosmicContainer.innerHTML = '';
    
    // Create floating teal elements
    for (let i = 0; i < 8; i++) {
        const element = document.createElement('div');
        element.className = 'cosmic-element';
        
        // Random size between 100px and 300px
        const size = Math.random() * 200 + 100;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        
        // Random position
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        element.style.animationDelay = `${Math.random() * 10}s`;
        
        // Random animation duration between 15s and 30s
        element.style.animationDuration = `${Math.random() * 15 + 15}s`;
        
        cosmicContainer.appendChild(element);
    }
}

// Initialize stars background
function initStarsBackground() {
    // This function will be called on page load
    // The stars are created with CSS, so we don't need to do anything here
}

// Call this when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initStarsBackground();
});