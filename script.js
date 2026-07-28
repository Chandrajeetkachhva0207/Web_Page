<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    // --- Sticky Header Effect ---
    const header = document.getElementById('header');
    const handleScroll = () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // --- Dark/Light Theme Switcher ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('aura-theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
        body.classList.add('light-theme');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('aura-theme', 'light');
        } else {
            localStorage.setItem('aura-theme', 'dark');
        }
    });

    // --- Mobile Menu Toggle Drawer ---
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a');

    const toggleMenu = () => {
        mobileMenuToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
        // Prevent body scrolling when mobile menu is open
        if (navMenu.classList.contains('open')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    };

    mobileMenuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });

    // --- Active Link Highlight on Scroll ---
    const sections = document.querySelectorAll('section');
    const navObsOptions = {
        root: null,
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, navObsOptions);

    sections.forEach(section => navObserver.observe(section));

    // --- Reveal Scroll Animations ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObsOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, revealObsOptions);

    revealElements.forEach(element => revealObserver.observe(element));

    // --- Contact Form Input Floating and Validations ---
    const contactForm = document.getElementById('contact-form');
    const inputs = contactForm.querySelectorAll('.form-input');
    const submitBtn = document.getElementById('submit-btn');
    const submitMsg = document.getElementById('submit-msg');

    // Float label visual effects
    inputs.forEach(input => {
        // Handle select elements or prefilled values
        if (input.value.trim() !== '') {
            input.parentElement.classList.add('focused');
        }

        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (input.value.trim() === '') {
                input.parentElement.classList.remove('focused');
            }
        });
    });

    // Validations helper
    const validateField = (input) => {
        const value = input.value.trim();
        const parent = input.parentElement;
        const id = input.id;

        if (id === 'name') {
            if (value === '') {
                parent.classList.add('has-error');
                return false;
            } else {
                parent.classList.remove('has-error');
                return true;
            }
        }

        if (id === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                parent.classList.add('has-error');
                return false;
            } else {
                parent.classList.remove('has-error');
                return true;
            }
        }

        if (id === 'message') {
            if (value.length < 10) {
                parent.classList.add('has-error');
                return false;
            } else {
                parent.classList.remove('has-error');
                return true;
            }
        }

        return true;
    };

    // Listen validation triggers on typing/blur
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.parentElement.classList.contains('has-error')) {
                validateField(input);
            }
        });
    });

    // Form submit listener
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isFormValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            // Disable button during mock processing
            submitBtn.disabled = true;
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = `<span>Sending...</span> <svg class="animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="16"></circle></svg>`;

            // Mock AJAX submission
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;

                // Display success banner
                submitMsg.textContent = 'Thank you! Your message was sent successfully. We will connect soon.';
                submitMsg.className = 'submit-status-msg success';
                
                // Reset form fields
                contactForm.reset();
                inputs.forEach(input => {
                    input.parentElement.classList.remove('focused');
                    input.parentElement.classList.remove('has-error');
                });

                // Clear success banner after 5 seconds
                setTimeout(() => {
                    submitMsg.style.display = 'none';
                    submitMsg.className = 'submit-status-msg';
                }, 5000);

            }, 1500);
        }
    });
});
=======
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const revealItems = document.querySelectorAll('.reveal');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const applyTheme = (dark) => {
  document.body.classList.toggle('dark', dark);
  themeToggle.textContent = dark ? '☀️' : '🌙';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
};

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  applyTheme(true);
} else {
  applyTheme(false);
}

themeToggle.addEventListener('click', () => {
  applyTheme(!document.body.classList.contains('dark'));
});

const slides = Array.from(document.querySelectorAll('.slide'));
const dotsContainer = document.querySelector('.slider-dots');
let activeIndex = 0;

slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.className = 'dot' + (index === 0 ? ' active' : '');
  dot.dataset.index = index;
  dot.addEventListener('click', () => showSlide(index));
  dotsContainer.appendChild(dot);
});

function showSlide(index) {
  activeIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === activeIndex));
  Array.from(dotsContainer.children).forEach((dot, i) => dot.classList.toggle('active', i === activeIndex));
}

setInterval(() => showSlide(activeIndex + 1), 4000);

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = 'Please complete all fields before sending.';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    return;
  }

  formMessage.textContent = 'Thanks! Your message has been received.';
  contactForm.reset();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));
>>>>>>> 69d89f4 (Initial commit)
