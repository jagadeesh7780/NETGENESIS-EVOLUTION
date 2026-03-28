export default function Arpanet() {
  return (
    <section id="arpanet" style={{'--era-color': '#00ff87'}} aria-labelledby="arpanet-h2">
      <div className="bg-grid" aria-hidden="true"></div>
      <div className="bg-glow" style={{width:'500px',height:'500px',background:'#00ff87',left:'-200px',top:'50%',transform:'translateY(-50%)'}} aria-hidden="true"></div>

      <div className="era-label" aria-hidden="true">
        <div className="era-dot"></div>
        <span className="era-text">Early Internet</span>
        <span className="era-num">01/04</span>
      </div>

      <div className="arpanet-grid">
        <div>
          <div className="section-kicker r d1">Origins</div>
          <h2 id="arpanet-h2" className="section-heading r d2">The<br /><em>First</em><br />Network</h2>
          <p className="section-body r d3">
            In 1969, four computers at UCLA, Stanford, UC Santa Barbara, and the University of Utah were connected for the first time.
            The first message sent was "LO" — a login attempt that crashed after two characters.
          </p>
          <p className="section-body r d4">
            Over the next two decades, protocols were invented and the foundation for the global internet was quietly built.
          </p>

          <div className="timeline-dots r d5" role="list">
            {[
              { year: '1969', title: 'ARPANET Goes Live',    desc: '4-node network links US universities.' },
              { year: '1971', title: 'Email is Invented',    desc: 'Ray Tomlinson sends the first email.' },
              { year: '1983', title: 'TCP/IP — The Protocol',desc: 'The universal language of the internet.' },
              { year: '1991', title: 'WWW Goes Public',      desc: 'Tim Berners-Lee releases the World Wide Web.' },
            ].map(dot => (
              <div className="tdot" tabIndex="0" key={dot.year}>
                <div className="tdot-marker"></div>
                <div>
                  <div className="tdot-year">{dot.year}</div>
                  <div className="tdot-title">{dot.title}</div>
                  <div className="tdot-desc">{dot.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="node-map r-r d2">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <circle className="node-circle" cx="200" cy="200" r="160" />
            <circle className="node-circle" cx="200" cy="200" r="110" />
            <circle className="node-circle" cx="200" cy="200" r="55" />
            <line className="node-line" x1="200" y1="60" x2="330" y2="200" />
            <line className="node-line" x1="330" y1="200" x2="200" y2="330" />
            <line className="node-line" x1="200" y1="330" x2="70" y2="200" />
            <line className="node-line" x1="70" y1="200" x2="200" y2="60" />
            <g><circle className="node-dot" cx="200" cy="60" r="10" /><circle className="node-dot-inner" cx="200" cy="60" r="5" /><text x="200" y="42" textAnchor="middle" fontSize="9" fill="#f0ede8">UCLA</text></g>
            <g><circle className="node-dot" cx="330" cy="200" r="10" /><circle className="node-dot-inner" cx="330" cy="200" r="5" /><text x="348" y="204" fontSize="9" fill="#f0ede8">Stanford</text></g>
            <g><circle className="node-dot" cx="200" cy="330" r="10" /><circle className="node-dot-inner" cx="200" cy="330" r="5" /><text x="200" y="350" textAnchor="middle" fontSize="9" fill="#f0ede8">UCSB</text></g>
            <g><circle className="node-dot" cx="70" cy="200" r="10" /><circle className="node-dot-inner" cx="70" cy="200" r="5" /><text x="52" y="204" textAnchor="end" fontSize="9" fill="#f0ede8">Utah</text></g>
          </svg>
        </div>
      </div>
    </section>
  );
}
