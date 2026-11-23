import { personal } from "../data";

export function Spark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" fill="none">
      <circle cx="20" cy="20" r="18.5" stroke="currentColor" opacity=".55" />
      <circle cx="20" cy="20" r="13.3" stroke="currentColor" strokeDasharray="1 3.2" opacity=".6" />
      <path d="M20 7.2 22.9 17.1 32.8 20 22.9 22.9 20 32.8 17.1 22.9 7.2 20 17.1 17.1Z" fill="currentColor" />
      <circle cx="20" cy="20" r="2.25" fill="#090b10" />
    </svg>
  );
}

export default function Brand() {
  return (
    <span className="brand">
      <Spark className="brand-icon" />
      <span>{personal.brand}</span>
    </span>
  );
}
