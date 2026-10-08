const spots = [
  { top: "-6rem", side: "left-[-6rem]", color: "139 92 246" },
  { top: "6%", side: "right-[-6rem]", color: "59 130 246" },
  { top: "22%", side: "left-[-8rem]", color: "16 185 129" },
  { top: "40%", side: "right-[-4rem]", color: "236 72 153" },
  { top: "58%", side: "left-[-6rem]", color: "249 115 22" },
  { top: "74%", side: "right-[-8rem]", color: "34 211 238" },
  { top: "90%", side: "left-[10%]", color: "168 85 247" },
];

export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {spots.map((s) => (
        <div
          key={s.top}
          className={`spot ${s.side}`}
          style={{ top: s.top, "--spot": s.color } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
