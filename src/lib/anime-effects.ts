// MCP timeline/stagger guidance adapted to Anime.js 4.5.
// React scope cleanup: https://animejs.com/documentation/getting-started/using-with-react/
import { animate, createScope, createTimeline, spring, stagger, type Scope } from 'animejs';

export function mountAnimeEffects(root: HTMLElement) {
  const scopes = new Map<HTMLElement, Scope>();
  const replays = root.querySelectorAll<HTMLButtonElement>('[data-anime-replay]');
  let disposed = false;
  const inView = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < window.innerHeight;
  };
  const run = (el: HTMLElement, build: (done: () => void) => void) => {
    if (disposed || !el.isConnected || !inView(el)) return;
    scopes.get(el)?.revert();
    const scope = createScope({ root: el });
    scopes.set(el, scope);
    el.dataset.animeState = 'playing';
    scope.add(() =>
      build(() => {
        el.dataset.animeState = 'idle';
      }),
    );
  };
  const assemble = (el: HTMLElement) =>
    run(el, (done) => {
      createTimeline({ defaults: { ease: 'out(3)', duration: 650 }, onComplete: done })
        .add(el.querySelectorAll('.orbit-stamp'), { scale: [0.65, 1], rotate: [-30, 0] }, 0)
        .add(
          el.querySelectorAll('.sticker-code > span:nth-child(2)'),
          { y: [24, 0], scale: [0.92, 1] },
          90,
        )
        .add(
          el.querySelectorAll('.code-bracket'),
          { scale: [0.7, 1], delay: stagger(70), ease: spring({ bounce: 0.35, duration: 450 }) },
          140,
        )
        .add(
          el.querySelectorAll('.graphic-star'),
          { rotate: [-80, 12], scale: [0.5, 1], ease: spring({ bounce: 0.4, duration: 500 }) },
          180,
        )
        .add(
          el.querySelectorAll('.cloud-sticker'),
          { y: [24, 0], scale: [0.8, 1], ease: spring({ bounce: 0.3, duration: 400 }) },
          300,
        );
    });
  const cascade = (el: HTMLElement) =>
    run(el, (done) => {
      animate(el.querySelectorAll('.expertise-tools > span'), {
        y: [18, 0],
        rotate: [-4, 0],
        scale: [0.92, 1],
        opacity: [0.6, 1],
        delay: stagger(55),
        ease: spring({ bounce: 0.25, duration: 380 }),
        onComplete: done,
      });
    });
  const selectStep = (el: HTMLElement, button: HTMLButtonElement) =>
    run(el, (done) => {
      const buttons = Array.from(el.querySelectorAll('.flow-nodes button'));
      const index = buttons.indexOf(button);
      createTimeline({ onComplete: done })
        .add(
          button,
          { y: [5, 0], scale: [0.92, 1], ease: spring({ bounce: 0.4, duration: 350 }) },
          0,
        )
        .add(
          el.querySelectorAll('.diagram-bottom > span:first-child'),
          { x: [10, 0], duration: 380, ease: 'out(3)' },
          0,
        )
        .add(
          Array.from(el.querySelectorAll('.flow-progress > span')).slice(0, index + 1),
          {
            scaleX: [0.15, 1],
            duration: 400,
            delay: stagger(45),
            ease: 'out(3)',
          },
          0,
        );
    });
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        if (el.matches('.hero-visual')) assemble(el);
        else if ((el as HTMLDetailsElement).open) cascade(el);
        observer.unobserve(el);
      }
    },
    { threshold: 0.2 },
  );
  root
    .querySelectorAll<HTMLElement>('.hero-visual, .expertise-list details[open]')
    .forEach((el) => observer.observe(el));
  const toggle = (event: Event) => {
    const el = event.target;
    if (!(el instanceof HTMLDetailsElement) || !el.matches('.expertise-list details')) return;
    observer.unobserve(el);
    if (el.open) cascade(el);
    else {
      scopes.get(el)?.revert();
      scopes.delete(el);
      el.dataset.animeState = 'static';
    }
  };
  const click = (event: MouseEvent) => {
    if (!(event.target instanceof Element)) return;
    const replay = event.target.closest<HTMLButtonElement>('[data-anime-replay]');
    if (replay) {
      const hero = replay.closest<HTMLElement>('.hero-visual');
      if (hero) assemble(hero);
      return;
    }
    const button = event.target.closest<HTMLButtonElement>('.flow-nodes button');
    const diagram = button?.closest<HTMLElement>('.architecture');
    if (button && diagram) selectStep(diagram, button);
  };
  root.addEventListener('toggle', toggle, true);
  root.addEventListener('click', click);
  replays.forEach((button) => {
    button.disabled = false;
  });
  root.dataset.animeReady = 'true';
  return () => {
    disposed = true;
    observer.disconnect();
    root.removeEventListener('toggle', toggle, true);
    root.removeEventListener('click', click);
    scopes.forEach((scope, el) => {
      scope.revert();
      el.dataset.animeState = 'static';
    });
    scopes.clear();
    replays.forEach((button) => {
      button.disabled = true;
    });
    delete root.dataset.animeReady;
  };
}
