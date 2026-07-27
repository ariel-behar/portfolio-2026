export function DesignHeading() {
  return (
    <div className="hero-anim mt-2 mb-1 animate-[scale-fade-in_3.5s_ease-out_1s_both] text-center">
      {/* Not an <h1> — the old site put a real <h1> here too, but TitleSection's "ARIEL BEHAR"
          (the persistent "intro" section, not this transient splash overlay) is this page's
          sole top-level heading; a second <h1> with identical text breaks the document outline
          for screen-reader users with nothing to distinguish them. Phase 14 accessibility fix,
          not a fidelity port. */}
      <p className="font-display text-4xl">ARIEL BEHAR</p>
      <p className="mb-2 text-xl">Web Design &amp; Development</p>
    </div>
  );
}
