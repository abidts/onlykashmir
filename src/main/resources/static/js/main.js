// Main JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider functionality
    const heroSlides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        // Handle wrap-around
        if (index >= heroSlides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = heroSlides.length - 1;
        } else {
            currentSlide = index;
        }

        // Update slides
        heroSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === currentSlide) {
                slide.classList.add('active');
            }
        });

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === currentSlide) {
                dot.classList.add('active');
            }
        });

        // Update plan forms visibility (only on desktop)
        if (window.innerWidth > 768) {
            document.querySelectorAll('.hero-plan-form').forEach((form, i) => {
                if (i === currentSlide) {
                    form.style.display = 'block';
                } else {
                    form.style.display = 'none';
                }
            });
        }
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Auto-advance slides every 5 seconds
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Make functions globally available
    window.changeSlide = function(direction) {
        stopAutoSlide();
        if (direction === 1) {
            nextSlide();
        } else {
            prevSlide();
        }
        startAutoSlide();
    };

    window.currentSlide = function(index) {
        stopAutoSlide();
        showSlide(index);
        startAutoSlide();
    };

    // Start auto-slide if slides exist
    if (heroSlides.length > 0) {
        // Add missing dots if needed
        if (dots.length < heroSlides.length) {
            const dotsContainer = document.querySelector('.slider-dots');
            if (dotsContainer) {
                for (let i = dots.length; i < heroSlides.length; i++) {
                    const dot = document.createElement('span');
                    dot.className = 'dot';
                    dot.onclick = function() { window.currentSlide(i); };
                    dotsContainer.appendChild(dot);
                }
            }
        }
        
        // Initialize plan forms visibility
        const planForms = document.querySelectorAll('.hero-plan-form');
        if (window.innerWidth > 768) {
            planForms.forEach((form, i) => {
                if (i === 0) {
                    form.style.display = 'block';
                } else {
                    form.style.display = 'none';
                }
            });
        }
        
        startAutoSlide();
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Callback button functionality
    const callbackButtons = document.querySelectorAll('.callback-btn, .callback-btn-large');
    callbackButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Show callback modal or redirect to contact page
            window.location.href = '/contact';
        });
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements with reveal class
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Mobile menu toggle (if needed)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Enquiry form handling
    const tripEnquiryForm = document.getElementById('trip-enquiry-form');
    if (tripEnquiryForm) {
        tripEnquiryForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(tripEnquiryForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            try {
                const response = await fetch('/api/enquiry', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (result.status === 'success') {
                    alert(result.message);
                    tripEnquiryForm.reset();
                } else {
                    alert('There was an error submitting your enquiry. Please try again.');
                }
            } catch (error) {
                console.error('Error submitting enquiry:', error);
                alert('Thank you for your enquiry! We will contact you shortly.');
                tripEnquiryForm.reset();
            }
        });
    }

    // Package enquiry form handling
    const packageEnquiryForm = document.getElementById('package-enquiry-form');
    if (packageEnquiryForm) {
        packageEnquiryForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(packageEnquiryForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            try {
                const response = await fetch('/api/package-enquiry', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (result.status === 'success') {
                    alert(result.message);
                    packageEnquiryForm.reset();
                } else {
                    alert('There was an error submitting your enquiry. Please try again.');
                }
            } catch (error) {
                console.error('Error submitting package enquiry:', error);
                alert('Thank you for your enquiry! We will contact you shortly to finalize your booking.');
                packageEnquiryForm.reset();
            }
        });
    }

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (result.status === 'success') {
                    showThankYou();
                    contactForm.reset();
                } else {
                    alert('There was an error submitting your message. Please try again.');
                }
            } catch (error) {
                console.error('Error submitting contact form:', error);
                showThankYou();
                contactForm.reset();
            }
        });
    }

    // Hero plan forms handling
    const heroPlanForms = document.querySelectorAll('.hero-plan-form-submit');
    heroPlanForms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            try {
                const response = await fetch('/api/plan-trip', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (result.status === 'success') {
                    showThankYou();
                    form.reset();
                } else {
                    alert('There was an error submitting your request. Please try again.');
                }
            } catch (error) {
                console.error('Error submitting plan trip request:', error);
                showThankYou();
                form.reset();
            }
        });
    });

    // Callback page form handling
    const callbackPageForm = document.getElementById('callback-page-form');
    if (callbackPageForm) {
        callbackPageForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(callbackPageForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            try {
                const response = await fetch('/api/callback', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (result.status === 'success') {
                    showThankYou();
                    callbackPageForm.reset();
                } else {
                    alert('There was an error submitting your request. Please try again.');
                }
            } catch (error) {
                console.error('Error submitting callback request:', error);
                showThankYou();
                callbackPageForm.reset();
            }
        });
    }
});

// Utility functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Form validation (for contact forms)
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (input.required && !input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// WhatsApp functionality
function openWhatsApp(phoneNumber, message) {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Thank You Message Functions
function showThankYou() {
    document.getElementById('thank-you-message').style.display = 'flex';
}

function closeThankYou() {
    document.getElementById('thank-you-message').style.display = 'none';
}