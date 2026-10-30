import { profile } from '@/data/profile';
import Link from 'next/link';
import { ContactAction } from './ContactAction';
export function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="wrap">
        <p className="eyebrow">06 / LET’S CONNECT</p>
        <div className="contact-main">
          <h2 id="contact-heading">
            Let’s build something
            <br />
            <span>worth engineering.</span>
          </h2>
          <ContactAction />
        </div>
        <div className="contact-bottom">
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="contact-links">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href={profile.resume} download>
              Résumé ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="wrap footer">
      <Link className="monogram" href="/" aria-label="SP. — Home">
        SP<span>.</span>
      </Link>
      <span>© {new Date().getFullYear()} Shubham Putitundi</span>
      <span className="mono">THOUGHTFULLY DESIGNED. CAREFULLY ENGINEERED.</span>
      <a href="#top" className="mono">
        BACK TO TOP ↑
      </a>
    </footer>
  );
}
