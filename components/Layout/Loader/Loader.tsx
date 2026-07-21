import styles from "./Loader.module.css";

type ArrowKind = "outer" | "inner";
type ArrowDirection = "up" | "down";

interface ArrowSpec {
  kind: ArrowKind;
  index: number;
  direction: ArrowDirection;
}

// Same hexagon layout as the old site's hand-written markup: 4 rows of arrows,
// alternating up/down, an "outer" ring of 18 and an "inner" ring of 6.
const ARROW_ROWS: ArrowSpec[][] = [
  [
    { kind: "outer", index: 18, direction: "up" },
    { kind: "outer", index: 17, direction: "down" },
    { kind: "outer", index: 16, direction: "up" },
    { kind: "outer", index: 15, direction: "down" },
    { kind: "outer", index: 14, direction: "up" },
  ],
  [
    { kind: "outer", index: 1, direction: "up" },
    { kind: "outer", index: 2, direction: "down" },
    { kind: "inner", index: 6, direction: "up" },
    { kind: "inner", index: 5, direction: "down" },
    { kind: "inner", index: 4, direction: "up" },
    { kind: "outer", index: 13, direction: "down" },
    { kind: "outer", index: 12, direction: "up" },
  ],
  [
    { kind: "outer", index: 3, direction: "down" },
    { kind: "outer", index: 4, direction: "up" },
    { kind: "inner", index: 1, direction: "down" },
    { kind: "inner", index: 2, direction: "up" },
    { kind: "inner", index: 3, direction: "down" },
    { kind: "outer", index: 11, direction: "up" },
    { kind: "outer", index: 10, direction: "down" },
  ],
  [
    { kind: "outer", index: 5, direction: "down" },
    { kind: "outer", index: 6, direction: "up" },
    { kind: "outer", index: 7, direction: "down" },
    { kind: "outer", index: 8, direction: "up" },
    { kind: "outer", index: 9, direction: "down" },
  ],
];

// Reproduces the old hand-written per-arrow animation-delay table (outer-1..18,
// inner-1..6) with one formula instead of 24 named CSS classes.
function arrowDelay({ kind, index }: ArrowSpec) {
  const total = kind === "outer" ? 18 : 6;
  return `${-(index / total)}s`;
}

// Suspense fallback: the old site's hexagon-of-blinking-arrows loader, ported
// from MUI styled-components into a CSS module + computed delays.
export function Loader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-base-100 text-secondary"
    >
      <div className="flex flex-col items-center">
        {ARROW_ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((arrow) => (
              <span
                key={`${arrow.kind}-${arrow.index}`}
                className={`${styles.arrow} ${arrow.direction === "down" ? styles.down : ""}`}
                style={{ animationDelay: arrowDelay(arrow) }}
              />
            ))}
          </div>
        ))}
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}
