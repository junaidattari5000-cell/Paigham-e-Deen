// 1. Service Worker Registration (Is se App Install hogi)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker Registered!', reg))
      .catch(err => console.log('Service Worker Failed!', err));
  });
}

// Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".nav-menu");
if(toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// Sticky Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.scrollY > 50 ? navbar.classList.add("scrolled") : navbar.classList.remove("scrolled");
  }
});

// Simple Fade In Animation (Hero Section)
window.addEventListener("load", () => {
  const heroText = document.querySelector(".hero-text");
  const heroImage = document.querySelector(".hero-image");

  if(heroText && heroImage) {
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
  }
});

// Intersection Observer for Feature Cards
const featureCards = document.querySelectorAll('.feature-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = 'all 0.8s ease-out';
    }
  });
}, { threshold: 0.2 });

featureCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  observer.observe(card);
});

// Footer Animation
const footer = document.querySelector(".footer");
if(footer) {
  footer.style.opacity = "0";
  footer.style.transform = "translateY(40px)";
  footer.style.transition = "all 0.6s ease";

  window.addEventListener("scroll", () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    if (scrollPosition >= document.body.offsetHeight - 50) {
      footer.style.opacity = "1";
      footer.style.transform = "translateY(0)";
    }
  });
}

// Color Copy Logic
const colorCards = document.querySelectorAll(".color-card");
colorCards.forEach(card => {
  card.addEventListener("click", () => {
    const color = card.getAttribute("data-color");
    navigator.clipboard.writeText(color);
    card.style.borderColor = "#00C896";
    setTimeout(() => card.style.borderColor = "#222", 800);
  });
});

// Button Click Effect
const extraBtns = document.querySelectorAll(".extra-btn");
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


