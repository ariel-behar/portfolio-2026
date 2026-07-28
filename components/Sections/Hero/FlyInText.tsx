interface FlyInItem {
  text: string;
  x: number;
  y: number;
  italic?: boolean;
}

// "WELCOME TO", one letter per <li>, each flying in from its own offset — the
// offsets are the old site's original hand-picked values, kept as-is.
const FLY_IN_ITEMS: FlyInItem[] = [
  { text: "W", x: -200, y: -200 },
  { text: "E", x: 20, y: 100 },
  { text: "L", x: -150, y: -80 },
  { text: "C", x: 10, y: -200 },
  { text: "O", x: -300, y: 200 },
  { text: "M", x: 20, y: -20 },
  { text: "E", x: 30, y: 200 },
  { text: "TO", x: 200, y: 0, italic: true },
];

export function FlyInText() {
  return (
    <ul className="m-0 flex list-none flex-wrap justify-center p-0">
      {FLY_IN_ITEMS.map((item, index) => (
        <li
          key={index}
          style={
            {
              "--fly-x": `${item.x}px`,
              "--fly-y": `${item.y}px`,
            } as React.CSSProperties
          }
          className={`hero-anim inline-block animate-[fly-in_3.5s_ease_both] ${
            item.italic ? "text-sm italic" : "font-display text-5xl md:text-6xl"
          }`}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}
