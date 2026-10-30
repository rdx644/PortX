import { expertise } from '@/data/profile';
export function Expertise() {
  return (
    <section id="expertise" className="section wrap" aria-labelledby="expertise-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / TECHNICAL TOOLKIT</p>
          <h2 id="expertise-heading">
            The right tool.
            <br />
            <span className="muted">For the real problem.</span>
          </h2>
        </div>
        <p className="section-intro">
          Across the stack, with a focus on
          <br />
          how the pieces fit together.
        </p>
      </div>
      <div className="expertise-list">
        {expertise.map((item, index) => (
          <details key={item.name} open={index === 0}>
            <summary>
              <span className="mono expertise-number">0{index + 1}</span>
              <h3>{item.name}</h3>
              <span className="expertise-description">{item.description}</span>
              <span className="expand-icon" aria-hidden="true">
                +
              </span>
            </summary>
            <div className="expertise-tools">
              {item.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
