// script.js

// Loader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('out');
  }, 2800);
});

// Custom Cursor
const dot = document.getElementById('c-dot');
const ring = document.getElementById('c-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top = my + 'px';
});

(function lerpRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(lerpRing);
})();

// Hover effect for cursor
const hoverTargets = 'a, button, .era-card, .tdot, .pillar, .app-icon, .stat-item';
document.addEventListener('mouseover', e => {
  if (e.target.closest(hoverTargets)) document.body.classList.add('cursor-hover');
});
document.addEventListener('mouseout', e => {
  if (e.target.closest(hoverTargets)) document.body.classList.remove('cursor-hover');
});

// Scroll Progress Bar
function updateScrollBar() {
  const prog = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  document.getElementById('scroll-bar').style.width = (prog * 100) + '%';
}
window.addEventListener('scroll', updateScrollBar, { passive: true });

// Era Indicator
const eras = [
  { id: 'hero', label: '— Est. 1969' },
  { id: 'arpanet', label: '— ARPANET, 1969' },
  { id: 'dotcom', label: '— Dot-com Boom, 1995' },
  { id: 'social', label: '— Social & Mobile, 2004' },
  { id: 'future', label: '— The Future, Now' },
];
const eraIndicator = document.getElementById('era-indicator');

const eraObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const match = eras.find(x => x.id === entry.target.id);
      if (match) eraIndicator.textContent = match.label;
    }
  });
}, { threshold: 0.5 });

eras.forEach(era => {
  const el = document.getElementById(era.id);
  if (el) eraObserver.observe(el);
});

// Scroll Reveal
const revealEls = document.querySelectorAll('.r, .r-l, .r-r, .r-s');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// Hero Canvas - Particle Network
(function heroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const NUM = 70;
  const nodes = [];
  for (let i = 0; i < NUM; i++) {
    nodes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: 1.2 + Math.random() * 1.8,
    });
  }

  let mouse = { x: -9999, y: -9999 };
  canvas.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function dist(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    nodes.forEach(n => {
      const d = dist(n, mouse);
      if (d < 140) {
        const angle = Math.atan2(n.y - mouse.y, n.x - mouse.x);
        n.vx += Math.cos(angle) * 0.08;
        n.vy += Math.sin(angle) * 0.08;
      }
      n.vx *= 0.98;
      n.vy *= 0.98;
      n.x += n.vx;
      n.y += n.vy;

      if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
      if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
    });

    // Connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = dist(nodes[i], nodes[j]);
        if (d < 140) {
          const alpha = (1 - d / 140) * 0.25;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(0,255,135,${alpha})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }
    }

    // Dots
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,255,135,0.75)';
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }
  draw();
})();