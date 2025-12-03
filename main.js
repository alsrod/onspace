// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-left a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // If it's a hash link, prevent default and scroll smoothly
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        }
        
        lastScroll = currentScroll;
    });

    // Image slideshow
    window.addEventListener('load', function() {
        const slideshow = document.querySelector('.slideshow');
        if (!slideshow) return;
        
        const slides = slideshow.querySelectorAll('.slide');
        if (slides.length === 0) return;
        
        let currentSlide = 0;
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        // Initialize first slide
        showSlide(0);
        
        // Auto-advance slides every 1.5 seconds
        if (slides.length > 1) {
            setInterval(nextSlide, 1500);
        }
    });

    // Mobile menu toggle (for future expansion)
    const handleResize = function() {
        if (window.innerWidth <= 768) {
            // Mobile-specific adjustments can be added here
        }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
});
