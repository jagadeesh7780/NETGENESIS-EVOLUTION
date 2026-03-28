export default function Social() {
  return (
    <section id="social" style={{'--era-color': '#b06aff'}} aria-labelledby="social-h2">
      <div className="social-inner">
        <div>
          <div className="section-kicker r d1">2004 – 2020</div>
          <h2 id="social-h2" className="section-heading r d2">
            The<br />Human<br /><em style={{color:'var(--violet)'}}>Network</em>
          </h2>
          <p className="section-body r d3">Social networks connected the world. The smartphone put the internet in everyone's pocket.</p>

          <div className="stats-block r d5">
            <div className="stat-item">
              <div className="stat-val">5B+</div>
              <div className="stat-lbl">Internet users</div>
            </div>
            <div className="stat-item">
              <div className="stat-val">63%</div>
              <div className="stat-lbl">Use social daily</div>
            </div>
          </div>
        </div>

        <div className="phone-wrap r-r d2">
          <div className="phone">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <div className="app-grid">
                <div className="app-icon fb">📘</div>
                <div className="app-icon ig">📸</div>
                <div className="app-icon yt">▶️</div>
                <div className="app-icon tk">🎵</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
