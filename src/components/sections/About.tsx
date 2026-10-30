import { profile } from '@/data/profile';
import { Arrow } from '@/components/ui/Arrow';
export function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="wrap about-grid">
        <div>
          <p className="eyebrow">02 / THE ENGINEER BEHIND THE CODE</p>
          <h2 id="about-heading">
            Curiosity drives me.
            <br />
            <span>Engineering grounds me.</span>
          </h2>
          <div className="about-signature">
            Shubham<span className="accent">.</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="lead">
            I like understanding how things work.
            <br />
            Even more, I like making them work better.
          </p>
          <p>
            I’m Shubham, a Computer Science undergraduate specializing in Cloud Computing at SRM
            Institute of Science and Technology.
          </p>
          <p>
            My work moves between backend systems, cloud infrastructure, intelligent applications,
            and cybersecurity. I’m drawn to the decisions that make software reliable: clear
            boundaries, explicit state, and thoughtful automation.
          </p>
          <div className="about-facts">
            <div>
              <span className="mono">EDUCATION</span>
              <strong>B.Tech · Computer Science</strong>
              <span>Cloud Computing / SRM IST</span>
            </div>
            <div>
              <span className="mono">CURRENT FOCUS</span>
              <strong>Reliable, intelligent systems</strong>
              <span>Software · Infrastructure · Security</span>
            </div>
          </div>
          <a
            className="text-link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            A little more about me <Arrow diagonal />
          </a>
        </div>
      </div>
    </section>
  );
}
