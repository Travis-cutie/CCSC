// ── BACK TO TOP ──
// Appears once the user has scrolled through a third of the page,
// scrolls back up on click.
(function() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function thresholdPassed() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    return scrollable > 0 && window.scrollY > scrollable / 3;
  }

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', thresholdPassed());
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' });
  });
})();
