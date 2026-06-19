// Angela's Daycare - Interactive features

document.addEventListener('DOMContentLoaded', function() {
    // 1. Mobile menu toggle for small screens
    const nav = document.querySelector('nav');
    const toggleBtn = document.createElement('button');
    toggleBtn.innerHTML = '☰ Menu';
    toggleBtn.className = 'menu-toggle';
    toggleBtn.style.display = 'none';
    
    // Insert toggle button before nav links
    if (nav) {
        nav.parentNode.insertBefore(toggleBtn, nav);
        
        toggleBtn.addEventListener('click', function() {
            nav.classList.toggle('nav-open');
            toggleBtn.innerHTML = nav.classList.contains('nav-open') ? '✕ Close' : '☰ Menu';
        });
    }

    // 2. Highlight current page button
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 3. Smooth scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑ Top';
    scrollBtn.className = 'scroll-top';
    scrollBtn.style.display = 'none';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 4. Contact form validation - if you add a form later
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const email = contactForm.querySelector('input[type="email"]');
            if (email && !email.value.includes('@')) {
                e.preventDefault();
                alert('Please enter a valid email address');
            }
        });
    }

    // 5. Animate hero image on load
    const heroImg = document.querySelector('.hero img');
    if (heroImg) {
        heroImg.style.opacity = '0';
        heroImg.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroImg.style.transition = 'all 0.8s ease';
            heroImg.style.opacity = '1';
            heroImg.style.transform = 'translateY(0)';
        }, 200);
    }
});
