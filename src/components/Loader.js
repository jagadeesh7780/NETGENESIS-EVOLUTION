import { useEffect, useState } from 'react';

export default function Loader() {
  const [out, setOut] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOut(true), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="loader" className={out ? 'out' : ''} aria-live="polite" aria-label="Loading experience">
      <div className="loader-ascii" aria-hidden="true">{`██╗███╗   ██╗███████╗████████╗███████╗██████╗
██║████╗  ██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗
██║██╔██╗ ██║█████╗     ██║   █████╗  ██████╔╝
██║██║╚██╗██║██╔══╝     ██║   ██╔══╝  ██╔══██╗
██║██║ ╚████║███████╗   ██║   ███████╗██║  ██║
╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝`}</div>
      <div className="loader-label">Initialising Timeline…</div>
      <div className="loader-progress-wrap">
        <div className="loader-progress-fill"></div>
      </div>
    </div>
  );
}
