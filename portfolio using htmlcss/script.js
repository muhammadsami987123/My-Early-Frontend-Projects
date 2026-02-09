// Remove dark mode toggle button and functionality
const darkModeToggle = document.querySelector('button[aria-label="Dark mode toggle"]');
if (darkModeToggle) {
    darkModeToggle.remove();
}

// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Change icon between bars and times
    const icon = mobileMenuButton.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuButton.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Close mobile menu when resizing to desktop view
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) { // md breakpoint
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuButton.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    }
});

// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80; // Adjust based on your header height
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced form submission handling
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    const formData = {
        name: this.querySelector('input[type="text"]').value,
        email: this.querySelector('input[type="email"]').value,
        message: this.querySelector('textarea').value
    };
    
    try {
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        
        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) throw new Error('Failed to send message');
        
        // Success handling
        submitButton.innerHTML = '<i class="fas fa-check"></i> Sent Successfully';
        submitButton.classList.add('bg-green-500');
        this.reset();
        
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.classList.remove('bg-green-500');
            submitButton.disabled = false;
        }, 3000);
    } catch (error) {
        console.error('Error:', error);
        submitButton.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error';
        submitButton.classList.add('bg-red-500');
        
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.classList.remove('bg-red-500');
            submitButton.disabled = false;
        }, 3000);
    }
});

// Enhanced scroll reveal animations
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if(revealTop < windowHeight - revealPoint) {
            element.classList.add('active');
            element.style.animation = 'fadeInUp 1s ease forwards';
        }
    });
}

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.className = 'fixed inset-0 bg-white flex items-center justify-center z-50';
    loader.innerHTML = '<div class="animate-spin rounded-full h-16 w-16 border-t-4 border-emerald-500"></div>';
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }, 1000);
});

// ... existing scroll event listener ... 