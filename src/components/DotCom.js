export default function DotCom() {
  const cards = [
    { icon: '🌐', year: '1994', title: 'Netscape Navigator', body: 'The browser that brought the web to the masses.' },
    { icon: '📦', year: '1995', title: 'Amazon & eBay',      body: 'Online bookstore and digital auction house.' },
    { icon: '🔍', year: '1998', title: 'Google Search',      body: 'Two Stanford students changed how we find information.' },
  ];

  return (
    <section id="dotcom" style={{'--era-color': '#ffaa00'}} aria-labelledby="dotcom-h2">
      <div className="era-label" aria-hidden="true">
        <div className="era-dot"></div>
        <span className="era-text">Dot-Com Era</span>
        <span className="era-num">02/04</span>
      </div>

      <div className="dotcom-inner">
        <div className="dotcom-header">
          <div className="r-l">
            <div className="section-kicker">1995 – 2001</div>
            <h2 id="dotcom-h2" className="section-heading">
              Boom.<br />Bust.<br /><em style={{color:'var(--amber)'}}>Build.</em>
            </h2>
          </div>
          <div className="r-r d2">
            <p className="section-body">
              The 1990s brought a gold rush of browser wars, e-commerce dreams, and billion-dollar valuations. Then came the spectacular crash in 2000.
            </p>
          </div>
        </div>

        <div className="cards-grid">
          {cards.map((c, i) => (
            <article className={`era-card r d${i + 1}`} key={c.title}>
              <span className="card-icon">{c.icon}</span>
              <div className="card-sub">{c.year}</div>
              <div className="card-title">{c.title}</div>
              <div className="card-body">{c.body}</div>
            </article>
          ))}
        </div>

        <div className="crash-bar r">
          <span className="crash-icon">📉</span>
          <div className="crash-text">
            <div className="ct-title">The NASDAQ Crash — March 2000</div>
            <p>$5 trillion in market value evaporated. Many companies disappeared, but the survivors built the modern web.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
