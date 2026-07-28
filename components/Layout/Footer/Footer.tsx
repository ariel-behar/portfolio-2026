// custom.black.main in the old theme is #2e2e2e — this project's --color-neutral.
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral py-4">
      {/* text.muted.main (#636c72, this project's --color-muted) is the correctly-suffixed
          form — unlike the bare `text.muted` bug documented in [[feedback-mui-color-prop-bug]],
          this one really does apply on the old site (confirmed via live measurement). */}
      <p className="text-center text-muted">
        &copy; {currentYear} All Rights Reserved
        {/* text.secondary in the old theme is #e0e0e0 (grey) — this project's text-base-content,
            not Tailwind/DaisyUI's own "secondary" (green). See [[feedback-mui-color-prop-bug]]. */}
        <a href="http://www.arielbehar.com" className="ml-2 text-base-content underline">
          Ariel Behar
        </a>
      </p>
    </footer>
  );
}
