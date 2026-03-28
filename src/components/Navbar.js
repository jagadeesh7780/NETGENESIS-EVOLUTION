import { useEffect, useState } from 'react';

const eras = [
  { id: 'hero',    label: '— Est. 1969' },
  { id: 'arpanet', label: '— ARPANET, 1969' },
  { id: 'dotcom',  label: '— Dot-com Boom, 1995' },
  { id: 'social',  label: '— Social & Mobile, 2004' },
  { id: 'future',  label: '— The Future, Now' },
];

export default function Navbar() {
  const [eraLabel, setEraLabel] = useState('— Est. 1969');

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const match = eras.find(x => x.id === entry.target.id);
          if (match) setEraLabel(match.label);
        }
      });
    }, { threshold: 0.5 });

    eras.forEach(era => {
      const el = document.getElementById(era.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav role="navigation" aria-label="Main navigation">
      <div className="nav-logo">NET<span>GENESIS</span></div>
      <div className="nav-era-indicator" aria-live="polite">{eraLabel}</div>
      <ul className="nav-links">
        <li><a href="#hero">Intro</a></li>
        <li><a href="#arpanet">ARPANET</a></li>
        <li><a href="#dotcom">Dot-com</a></li>
        <li><a href="#social">Social</a></li>
        <li><a href="#future">Future</a></li>
      </ul>
    </nav>
  );
}
