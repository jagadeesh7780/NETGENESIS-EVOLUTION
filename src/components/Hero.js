import { useEffect, useRef } from 'react';

const tickerItems = ['ARPANET','TCP/IP','World Wide Web','Netscape','Google','Dot-com crash','Facebook','iPhone','Web3','AI Era'];
const tickerYears = ['1969','1983','1991','1994','1998','2000','2004','2007','2020s','Now'];

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    const NUM = 70;
    const nodes = Array.from({ length: NUM }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: 1.2 + Math.random() * 1.8,
    }));

    let mouse = { x: -9999, y: -9999 };
    canvas.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

    const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
    let raf;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach(n => {
        const d = dist(n, mouse);
        if (d < 140) { const a = Math.atan2(n.y - mouse.y, n.x - mouse.x); n.vx += Math.cos(a) * 0.08; n.vy += Math.sin(a) * 0.08; }
        n.vx *= 0.98; n.vy *= 0.98; n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = dist(nodes[i], nodes[j]);
          if (d < 140) {
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0,255,135,${(1 - d / 140) * 0.25})`; ctx.lineWidth = 0.9; ctx.stroke();
          }
        }
      }
      nodes.forEach(n => { ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fillStyle = 'rgba(0,255,135,0.75)'; ctx.fill(); });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf); };
  }, []);

  const allItems = [...tickerItems, ...tickerItems];

  return (
    <section id="hero" aria-labelledby="hero-h1">
      <canvas id="hero-canvas" ref={canvasRef} aria-hidden="true"></canvas>
      <div className="scanline" aria-hidden="true"></div>

      <div className="hero-inner">
        <div className="hero-tag">1969 → Present</div>
        <h1 id="hero-h1" className="hero-title">
          THE WEB
          <em className="line-2">Evolves</em>
          <span className="line-3">Always</span>
        </h1>
        <p className="hero-subtitle">
          From four nodes in a basement to 5 billion users.<br />
          An immersive journey through internet history.
        </p>
      </div>

      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker-inner">
          {allItems.map((item, i) => (
            <span className="ticker-item" key={i}>
              {item}<span className="sep">◆</span>{tickerYears[i % tickerYears.length]}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
      <div className="hero-year" aria-hidden="true">EST. 1969</div>
    </section>
  );
}
