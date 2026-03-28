export default function Future() {
  return (
    <section id="future" style={{'--era-color': '#0af'}} aria-labelledby="future-h2">
      <div className="future-inner">
        <div className="section-kicker r">2020s → Beyond</div>
        <h2 id="future-h2" className="future-heading r d2">
          <span className="grad">The Next</span>
          <span className="outline">Chapter</span>
        </h2>
        <p className="future-sub r d3">
          Web3 promises ownership. AI promises intelligence. The next internet won't be something you browse — it will be something you inhabit.
        </p>

        <div className="pillars r d3">
          <article className="pillar">
            <div className="pillar-icon">⛓️</div>
            <div className="pillar-tag">Web3</div>
            <div className="pillar-title">Decentralised Web</div>
            <div className="pillar-desc">Blockchain-based ownership</div>
          </article>
          <article className="pillar">
            <div className="pillar-icon">🤖</div>
            <div className="pillar-tag">AI</div>
            <div className="pillar-title">Intelligent Web</div>
            <div className="pillar-desc">LLMs and autonomous agents</div>
          </article>
        </div>

        <div className="cta-wrap r d5">
          <a href="#hero" className="btn btn-primary">↑ Restart Journey</a>
        </div>
      </div>
    </section>
  );
}
