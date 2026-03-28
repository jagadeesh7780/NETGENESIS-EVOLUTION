import { useEffect } from 'react';

export default function ScrollBar() {
  useEffect(() => {
    const update = () => {
      const prog = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      document.getElementById('scroll-bar').style.width = (prog * 100) + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <div id="scroll-bar" role="progressbar" aria-label="Page scroll progress"></div>;
}
