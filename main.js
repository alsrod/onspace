// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-left a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
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
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        }
    });

    // Simple Slideshow
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const totalSlides = slides.length;

    console.log('Slideshow initialized with ' + totalSlides + ' slides');

    if (totalSlides > 1) {
        setInterval(function() {
            // Remove active from current slide
            slides[currentIndex].classList.remove('active');
            
            // Move to next slide
            currentIndex = (currentIndex + 1) % totalSlides;
            
            // Add active to new slide
            slides[currentIndex].classList.add('active');
            
            console.log('Showing slide ' + (currentIndex + 1));
        }, 1500);
    }
});
