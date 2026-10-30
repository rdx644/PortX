import { certifications, experience } from '@/data/profile';
import { Arrow } from '@/components/ui/Arrow';
export function Experience() {
  return (
    <section
      id="experience"
      className="section wrap experience-section"
      aria-labelledby="experience-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">04 / ALWAYS LEARNING</p>
          <h2 id="experience-heading">
            A foundation.
            <br />
            <span className="muted">Still expanding.</span>
          </h2>
        </div>
        <p className="section-intro">
          Learning through structured programs,
          <br />
          hands-on work, and continuous practice.
        </p>
      </div>
      <div className="experience-grid">
        <div>
          <h3 className="column-heading mono">VIRTUAL INTERNSHIPS</h3>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.title}>
                <p className="mono muted">{item.date}</p>
                <h4>{item.title}</h4>
                <span className="organization">{item.organization}</span>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <h3 className="column-heading mono">SELECTED CREDENTIALS</h3>
          <div className="credentials">
            {certifications.map((item) => (
              <details key={item.title}>
                <summary>
                  <span>
                    <span className="mono muted">{item.issuer}</span>
                    <strong>{item.title}</strong>
                  </span>
                  <span aria-hidden="true">+</span>
                </summary>
                <div className="credential-details">
                  <p className="mono">{item.date}</p>
                  <p>
                    Credential ID: <span className="credential-id">{item.id}</span>
                  </p>
                  <a
                    className="text-link"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Issuer verification <Arrow diagonal />
                  </a>
                </div>
              </details>
            ))}
          </div>
          <p className="credential-note">
            Dates and credentials are listed from my résumé. Issuer verification links are provided
            for review.
          </p>
        </div>
      </div>
    </section>
  );
}
