'use client';
import Link from 'next/link';
import { GooeyNav } from '@/components/react-bits/GooeyNav';
import { RollLabel } from '@/components/ui/RollLabel';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { profile } from '@/data/profile';
import { Arrow } from '@/components/ui/Arrow';
const links = [
  ['work', 'Work'],
  ['about', 'About'],
  ['expertise', 'Expertise'],
  ['contact', 'Contact'],
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 20);
    scroll();
    window.addEventListener('scroll', scroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: '-15% 0px -65% 0px' },
    );
    links.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => {
      window.removeEventListener('scroll', scroll);
      observer.disconnect();
    };
  }, [pathname]);
  return (
    <header
      className={`site-header ${scrolled ? 'scrolled' : ''}`}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="nav-inner wrap">
        <Link className="monogram" href="/" aria-label="SP. — Shubham Putitundi, home">
          SP<span>.</span>
        </Link>
        <span className="nav-caption mono">ENGINEERING WITH INTENT</span>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close −' : 'Menu +'}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className={open ? 'nav-links is-open' : 'nav-links'}
        >
          <GooeyNav activeId={pathname === '/' ? active : ''} />
          {links.map(([id, label]) => (
            <Link
              key={id}
              data-nav-id={id}
              href={`/#${id}`}
              aria-current={pathname === '/' && active === id ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              <RollLabel>{label}</RollLabel>
            </Link>
          ))}
          <a className="nav-resume" href={profile.resume} download>
            Résumé <Arrow diagonal />
          </a>
        </nav>
      </div>
    </header>
  );
}
