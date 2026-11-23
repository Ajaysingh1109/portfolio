type GemProps = {
  x: number;
  y: number;
  color: string;
  label: string;
  index: number;
  disabled: boolean;
  onLabel: (label: string) => void;
  onSnap: () => void;
};

export default function SkillGem({ x, y, color, label, index, disabled, onLabel, onSnap }: GemProps) {
  const gradient = "gem-fill-" + index;
  const shape = "M0-13 10-8 13 2 7 11-5 12-12 4-10-7Z";

  return (
    <g
      className="skill-gem"
      transform={`translate(${x} ${y})`}
      style={{ color, animationDelay: index * -390 + "ms" }}
      role="img"
      aria-label={label}
      tabIndex={disabled ? undefined : 0}
      onFocus={() => onLabel(label)}
      onBlur={() => onLabel("")}
      onPointerEnter={() => onLabel(label)}
      onPointerLeave={() => onLabel("")}
      onClick={disabled ? undefined : onSnap}
    >
      <title>{label}</title>
      <radialGradient id={gradient} cx=".31" cy=".22" r=".84">
        <stop stopColor="#fff9e8" />
        <stop offset=".23" stopColor={color} />
        <stop offset=".61" stopColor={color} />
        <stop offset="1" stopColor="#160e17" />
      </radialGradient>
      <circle r="27" fill={color} opacity=".29" filter="url(#gem-spill)" className="gem-aura" />
      <path d="M-8-18 8-17 19-6 19 8 8 19-8 18-19 6-18-7Z" fill="url(#metal-edge)" stroke="#362111" strokeWidth="2" />
      <path d="M-6-15 7-14 16-4 15 7 6 16-8 14-16 5-15-6Z" fill="#150f10" stroke="#f7d793" strokeWidth=".8" />
      <path d={shape} fill={"url(#" + gradient + ")"} stroke={color} strokeWidth=".85" className="gem-core" />
      <path d="M0-13 1-5 10-8 13 2 4 2 7 11-5 12-3 3-12 4-10-7 1-5Z" fill="#180810" fillOpacity=".16" stroke="#fff1d7" strokeOpacity=".39" strokeWidth=".6" />
      <path d="M0-13 10-8 6-6 1-5ZM-10-7-5-4-3 3-12 4ZM4 2 13 2 7 11Z" fill="#080814" opacity=".42" />
      <path d="M-9-7-1-10 4-8-2-4ZM-3 3 4 2 7 9 0 10Z" fill="#fff8e4" opacity=".5" />
      <path d="M-6-8-1-10 2-9M6 9 8 7" fill="none" stroke="#fffcec" strokeWidth=".95" strokeLinecap="round" />
      <path d="M-19-6-15-12-8-17M8 17l8-7" fill="none" stroke="#ffe4a4" strokeWidth=".7" strokeOpacity=".65" />
    </g>
  );
}
