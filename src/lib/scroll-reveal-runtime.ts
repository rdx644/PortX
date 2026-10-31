type Trigger = (typeof import('gsap/ScrollTrigger'))['ScrollTrigger'];
type Runtime = { gsap: (typeof import('gsap'))['gsap']; ScrollTrigger: Trigger };
let runtime: Promise<Runtime> | undefined;
export function loadScrollRevealRuntime(): Promise<Runtime> {
  runtime ??= Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
    ([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      return { gsap, ScrollTrigger };
    },
  );
  return runtime;
}

// One shared observer refreshes positions after fonts or the project globe change layout.
let users = 0;
let observer: ResizeObserver | undefined;
let refreshFrame = 0;
export function watchRevealLayout(ScrollTrigger: Trigger) {
  if (users++ === 0) {
    let height = document.body.offsetHeight;
    observer = new ResizeObserver(() => {
      const next = document.body.offsetHeight;
      if (next === height) return;
      height = next;
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    });
    observer.observe(document.body);
  }
  return () => {
    if (--users === 0) {
      observer?.disconnect();
      observer = undefined;
      cancelAnimationFrame(refreshFrame);
    }
  };
}
