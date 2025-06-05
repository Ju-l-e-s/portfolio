// Smooth scrolling
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(anchor => {
    anchor.addEventListener("click", event => {
        event.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    window.scrollY > 50
        ? navbar.classList.add("scrolled")
        : navbar.classList.remove("scrolled");
});

// Fade-in on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// Mobile menu toggle with animation and scroll lock
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('show');
    // Prevent body scroll when menu is open
    if (navLinks.classList.contains('show')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('show');
        body.style.overflow = '';
    });
});

// Close menu when clicking outside (burger + panel)
document.addEventListener('click', e => {
    if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('show');
        body.style.overflow = '';
    }
});

// Handle window resize (close menu on desktop)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('show');
        body.style.overflow = '';
    }
});

// Typing effect for hero title (optionnel)
const typeWriter = (element, text, speed = 80) => {
    let i = 0;
    element.textContent = "";
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i += 1;
            setTimeout(type, speed);
        }
    };
    type();
};

window.addEventListener("load", () => {
    const heroTitle = document.querySelector(".hero h1");
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText);
    }
});