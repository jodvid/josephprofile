// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbar = document.querySelector('custom-navbar');
                if(navbar) {
                    const shadow = navbar.shadowRoot;
                    const mobileMenu = shadow.querySelector('.mobile-menu');
                    if(mobileMenu.classList.contains('hidden')) return;
                    
                    mobileMenu.classList.add('hidden');
                    shadow.querySelector('.menu-button svg[data-feather="x"]').classList.add('hidden');
                    shadow.querySelector('.menu-button svg[data-feather="menu"]').classList.remove('hidden');
                }
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('#contact form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});