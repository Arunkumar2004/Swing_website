// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.display = open ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '64px';
  navLinks.style.right = '4vw';
  navLinks.style.background = '#111317';
  navLinks.style.border = '1px solid #2a2e33';
  navLinks.style.padding = '1rem 1.5rem';
  navLinks.style.gap = '1rem';
});

// Simple scroll-reveal for sections
const revealTargets = document.querySelectorAll('.section, .collab, .hero-visual');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});
