import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const dot = document.getElementById('c-dot');
    const ring = document.getElementById('c-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };
    document.addEventListener('mousemove', onMove);

    let raf;
    const lerpRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      raf = requestAnimationFrame(lerpRing);
    };
    lerpRing();

    const targets = 'a, button, .era-card, .tdot, .pillar, .app-icon, .stat-item';
    const onOver = e => { if (e.target.closest(targets)) document.body.classList.add('cursor-hover'); };
    const onOut  = e => { if (e.target.closest(targets)) document.body.classList.remove('cursor-hover'); };
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="c-dot" aria-hidden="true"></div>
      <div id="c-ring" aria-hidden="true"></div>
    </>
  );
}
