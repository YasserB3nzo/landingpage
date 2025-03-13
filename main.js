// Function to load HTML components
function loadComponent(containerId, componentPath) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
            
            // Initialize components after loading
            if (containerId === 'testimonials-container') {
                initializeTestimonialSwiper();
            }
            
            // Initialize fade animations after all components are loaded
            initializeFadeAnimations();
            
            // Initialize mobile menu if header is loaded
            if (containerId === 'header-container') {
                initializeMobileMenu();
            }
        })
        .catch(error => console.error('Error loading component:', error));
}

// Initialize Swiper for testimonials
function initializeTestimonialSwiper() {
    const testimonialSwiper = new Swiper('.testimonialSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
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
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
}

// Initialize fade-in animations
function initializeFadeAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize mobile menu toggle
function initializeMobileMenu() {
    const mobileMenuButton = document.querySelector('nav button.md\\:hidden');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const mobileMenu = document.querySelector('nav .hidden.md\\:flex');
            if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('flex');
                mobileMenu.classList.toggle('flex-col');
                mobileMenu.classList.toggle('absolute');
                mobileMenu.classList.toggle('top-16');
                mobileMenu.classList.toggle('left-0');
                mobileMenu.classList.toggle('right-0');
                mobileMenu.classList.toggle('bg-light-purple');
                mobileMenu.classList.toggle('p-4');
                mobileMenu.classList.toggle('z-50');
            }
        });
    }
}