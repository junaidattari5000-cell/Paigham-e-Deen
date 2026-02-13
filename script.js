

// Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});


// Sticky Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// Simple Fade In Animation
window.addEventListener("load", () => {
  const heroText = document.querySelector(".hero-text");
  const heroImage = document.querySelector(".hero-image");

  heroText.style.opacity = "0";
  heroText.style.transform = "translateY(40px)";

  heroImage.style.opacity = "0";
  heroImage.style.transform = "translateY(40px)";

  setTimeout(() => {
    heroText.style.transition = "1s";
    heroText.style.opacity = "1";
    heroText.style.transform = "translateY(0)";
  }, 200);

  setTimeout(() => {
    heroImage.style.transition = "1s";
    heroImage.style.opacity = "1";
    heroImage.style.transform = "translateY(0)";
  }, 600);
});
// Animate Features Cards on Scroll
const featureCards = document.querySelectorAll('.feature-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = 'all 0.8s ease-out';
    }
  });
}, {
  threshold: 0.2
});

featureCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  observer.observe(card);
});
// Slider Logic
const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

prev.addEventListener('click', () => {
  current--;
  if (current < 0) current = slides.length - 1;
  showSlide(current);
});

next.addEventListener('click', () => {
  current++;
  if (current >= slides.length) current = 0;
  showSlide(current);
});

// Auto Slide every 5 seconds
setInterval(() => {
  current++;
  if (current >= slides.length) current = 0;
  showSlide(current);
}, 5000);

// Initialize
showSlide(current);
// Animate Why Section Image on Scroll
const whyImage = document.querySelector('.why-image img');

const observerWhy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      whyImage.style.opacity = '1';
      whyImage.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.3
});

observerWhy.observe(whyImage);
// Testimonials Slider Logic
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevTestimonial = document.getElementById('prev-testimonial');
const nextTestimonial = document.getElementById('next-testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonialCards.forEach((card, i) => {
    card.classList.remove('active');
    if(i === index) card.classList.add('active');
  });
}

prevTestimonial.addEventListener('click', () => {
  currentTestimonial--;
  if(currentTestimonial < 0) currentTestimonial = testimonialCards.length - 1;
  showTestimonial(currentTestimonial);
});

nextTestimonial.addEventListener('click', () => {
  currentTestimonial++;
  if(currentTestimonial >= testimonialCards.length) currentTestimonial = 0;
  showTestimonial(currentTestimonial);
});

// Auto Slide every 6 seconds
setInterval(() => {
  currentTestimonial++;
  if(currentTestimonial >= testimonialCards.length) currentTestimonial = 0;
  showTestimonial(currentTestimonial);
}, 6000);

// Initialize
showTestimonial(currentTestimonial);
// Counter Animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 200; // speed

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 15);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };

  // Trigger when in view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        updateCounter();
        observer.unobserve(counter);
      }
    });
  }, {threshold: 0.5});

  observer.observe(counter);
});
// Simple Fade-in Animation for CTA
const ctaSection = document.querySelector('.cta');

ctaSection.style.opacity = '0';
ctaSection.style.transform = 'translateY(40px)';

window.addEventListener('scroll', () => {
  const sectionTop = ctaSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if(sectionTop < windowHeight - 100){
    ctaSection.style.transition = 'all 1s ease-out';
    ctaSection.style.opacity = '1';
    ctaSection.style.transform = 'translateY(0)';
  }
});
// Fade in footer when scroll reaches bottom
const footer = document.querySelector(".footer");

window.addEventListener("scroll", () => {
  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.body.offsetHeight;

  if (scrollPosition >= pageHeight - 50) {
    footer.style.opacity = "1";
    footer.style.transform = "translateY(0)";
  }
});

// Initial style
footer.style.opacity = "0";
footer.style.transform = "translateY(40px)";
footer.style.transition = "all 0.6s ease";
const colorCards = document.querySelectorAll(".color-card");

colorCards.forEach(card => {
  card.addEventListener("click", () => {
    const color = card.getAttribute("data-color");

    navigator.clipboard.writeText(color);

    card.style.borderColor = "#00C896";
    card.style.boxShadow = "0 0 15px rgba(0,200,150,0.5)";

    setTimeout(() => {
      card.style.borderColor = "#222";
      card.style.boxShadow = "none";
    }, 800);
  });
});
const tipCards = document.querySelectorAll(".tip-card");

window.addEventListener("scroll", () => {
  tipCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 80) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Initial State
tipCards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";
});
const extraCards = document.querySelectorAll(".extra-card");
const extraBtns = document.querySelectorAll(".extra-btn");

// Card reveal animation
window.addEventListener("scroll", () => {
  extraCards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Initial state
extraCards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.7s ease";
});

// Button click effect
extraBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.innerText = "Coming Soon";
    btn.style.background = "#222";
    btn.style.color = "#fff";
  });
});
const CACHE_NAME = 'paigham-deen-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './image/background.png',
  './image/image1.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
// Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});


// Sticky Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// Simple Fade In Animation
window.addEventListener("load", () => {
  const heroText = document.querySelector(".hero-text");
  const heroImage = document.querySelector(".hero-image");

  heroText.style.opacity = "0";
  heroText.style.transform = "translateY(40px)";

  heroImage.style.opacity = "0";
  heroImage.style.transform = "translateY(40px)";

  setTimeout(() => {
    heroText.style.transition = "1s";
    heroText.style.opacity = "1";
    heroText.style.transform = "translateY(0)";
  }, 200);

  setTimeout(() => {
    heroImage.style.transition = "1s";
    heroImage.style.opacity = "1";
    heroImage.style.transform = "translateY(0)";
  }, 600);
});
// Animate Features Cards on Scroll
const featureCards = document.querySelectorAll('.feature-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = 'all 0.8s ease-out';
    }
  });
}, {
  threshold: 0.2
});

featureCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  observer.observe(card);
});
// Slider Logic
const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

prev.addEventListener('click', () => {
  current--;
  if (current < 0) current = slides.length - 1;
  showSlide(current);
});

next.addEventListener('click', () => {
  current++;
  if (current >= slides.length) current = 0;
  showSlide(current);
});

// Auto Slide every 5 seconds
setInterval(() => {
  current++;
  if (current >= slides.length) current = 0;
  showSlide(current);
}, 5000);

// Initialize
showSlide(current);
// Animate Why Section Image on Scroll
const whyImage = document.querySelector('.why-image img');

const observerWhy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      whyImage.style.opacity = '1';
      whyImage.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.3
});

observerWhy.observe(whyImage);
// Testimonials Slider Logic
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevTestimonial = document.getElementById('prev-testimonial');
const nextTestimonial = document.getElementById('next-testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonialCards.forEach((card, i) => {
    card.classList.remove('active');
    if(i === index) card.classList.add('active');
  });
}

prevTestimonial.addEventListener('click', () => {
  currentTestimonial--;
  if(currentTestimonial < 0) currentTestimonial = testimonialCards.length - 1;
  showTestimonial(currentTestimonial);
});

nextTestimonial.addEventListener('click', () => {
  currentTestimonial++;
  if(currentTestimonial >= testimonialCards.length) currentTestimonial = 0;
  showTestimonial(currentTestimonial);
});

// Auto Slide every 6 seconds
setInterval(() => {
  currentTestimonial++;
  if(currentTestimonial >= testimonialCards.length) currentTestimonial = 0;
  showTestimonial(currentTestimonial);
}, 6000);

// Initialize
showTestimonial(currentTestimonial);
// Counter Animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 200; // speed

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 15);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };

  // Trigger when in view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        updateCounter();
        observer.unobserve(counter);
      }
    });
  }, {threshold: 0.5});

  observer.observe(counter);
});
// Simple Fade-in Animation for CTA
const ctaSection = document.querySelector('.cta');

ctaSection.style.opacity = '0';
ctaSection.style.transform = 'translateY(40px)';

window.addEventListener('scroll', () => {
  const sectionTop = ctaSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if(sectionTop < windowHeight - 100){
    ctaSection.style.transition = 'all 1s ease-out';
    ctaSection.style.opacity = '1';
    ctaSection.style.transform = 'translateY(0)';
  }
});
// Fade in footer when scroll reaches bottom
const footer = document.querySelector(".footer");

window.addEventListener("scroll", () => {
  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.body.offsetHeight;

  if (scrollPosition >= pageHeight - 50) {
    footer.style.opacity = "1";
    footer.style.transform = "translateY(0)";
  }
});

// Initial style
footer.style.opacity = "0";
footer.style.transform = "translateY(40px)";
footer.style.transition = "all 0.6s ease";
const colorCards = document.querySelectorAll(".color-card");

colorCards.forEach(card => {
  card.addEventListener("click", () => {
    const color = card.getAttribute("data-color");

    navigator.clipboard.writeText(color);

    card.style.borderColor = "#00C896";
    card.style.boxShadow = "0 0 15px rgba(0,200,150,0.5)";

    setTimeout(() => {
      card.style.borderColor = "#222";
      card.style.boxShadow = "none";
    }, 800);
  });
});
const tipCards = document.querySelectorAll(".tip-card");

window.addEventListener("scroll", () => {
  tipCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 80) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Initial State
tipCards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";
});
const extraCards = document.querySelectorAll(".extra-card");
const extraBtns = document.querySelectorAll(".extra-btn");

// Card reveal animation
window.addEventListener("scroll", () => {
  extraCards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Initial state
extraCards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.7s ease";
});

// Button click effect
extraBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.innerText = "Coming Soon";
    btn.style.background = "#222";
    btn.style.color = "#fff";
  });
});
const CACHE_NAME = 'paigham-deen-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './image/background.png',
  './image/image1.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

