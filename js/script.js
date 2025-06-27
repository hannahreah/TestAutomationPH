// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

// Services Dropdown Toggle
const servicesBtn = document.getElementById('servicesBtn');
const servicesMenu = document.getElementById('servicesMenu');
const dropdown = servicesBtn.parentElement;

servicesBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('active');
  }
});

// Close mobile menu when clicking on links
const mobileNavLinks = mobileNav.querySelectorAll('a');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    mobileNav.classList.remove('active');
  });
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for scroll animations
const observeOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const element = entry.target;
      
      // Add animation based on element type or position
      if (element.classList.contains('hero-title')) {
        element.classList.add('fade-in-up');
      } else if (element.classList.contains('hero-description')) {
        element.classList.add('fade-in-up');
        element.style.animationDelay = '0.3s';
      } else if (element.classList.contains('hero-buttons')) {
        element.classList.add('fade-in-up');
        element.style.animationDelay = '0.5s';
      } else if (element.classList.contains('section-header')) {
        element.classList.add('fade-in-up');
      } else if (element.classList.contains('testimonial-card')) {
        element.classList.add('scale-in');
        // Stagger animation for multiple cards
        const cards = document.querySelectorAll('.testimonial-card');
        const index = Array.from(cards).indexOf(element);
        element.style.animationDelay = `${index * 0.2}s`;
      } else if (element.classList.contains('blog-card')) {
        element.classList.add('slide-in-bottom');
        // Stagger animation for blog cards
        const cards = document.querySelectorAll('.blog-card');
        const index = Array.from(cards).indexOf(element);
        element.style.animationDelay = `${index * 0.15}s`;
      } else if (element.classList.contains('blog-footer')) {
        element.classList.add('fade-in-up');
        element.style.animationDelay = '0.3s';
      } else if (element.classList.contains('footer')) {
        element.classList.add('fade-in-up');
      } else {
        element.classList.add('fade-in-up');
      }
      
      // Stop observing once animated
      observer.unobserve(element);
    }
  });
}, observeOptions);

// Observe all elements that should animate on scroll
const animateElements = document.querySelectorAll('.animate-on-scroll');
animateElements.forEach(element => {
  observer.observe(element);
});

// Header scroll effect
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Add shadow when scrolled
  if (scrollTop > 10) {
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
  
  lastScrollTop = scrollTop;
});

// Add loading animation to page
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});


// Opens the link in a new tab
function openInNewTab() {
    window.open('https://labs.testautomationph.com/', '_blank');
<<<<<<< HEAD
  }

//Scroll to Services section
 function goToServices() {
      document.getElementById("services").scrollIntoView({ behavior: "smooth" });
    }
=======
  }
>>>>>>> main
