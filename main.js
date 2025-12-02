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

    // Image lazy loading enhancement
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity for fade-in effect
        heroImage.style.opacity = '0';
        heroImage.style.transition = 'opacity 0.5s ease-in';
    }

    // Mobile menu toggle (for future expansion)
    const handleResize = function() {
        if (window.innerWidth <= 768) {
            // Mobile-specific adjustments can be added here
        }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
});
