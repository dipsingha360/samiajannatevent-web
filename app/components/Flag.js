import { useId } from "react";

// Small flags for the language switch, drawn as SVG because Windows shows
// flag emoji as letters. Both are 2:1, so they share one size.
// The ring keeps the white parts visible on the light theme

function Uae() {
  return (
    <>
      <rect width="12" height="2" x="0" y="0" fill="#00732f" />
      <rect width="12" height="2" x="0" y="2" fill="#ffffff" />
      <rect width="12" height="2" x="0" y="4" fill="#000000" />
      <rect width="3" height="6" fill="#ff0000" />
    </>
  );
}

// the Union Flag, with the red diagonals offset as on the real flag
function Uk() {
  const id = useId();
  return (
    <>
      <clipPath id={`${id}-t`}>
        <path d="M6,3 h6 v3 z v3 h-6 z h-6 v-3 z v-3 h6 z" />
      </clipPath>
      <rect width="12" height="6" fill="#012169" />
      <path d="M0,0 L12,6 M12,0 L0,6" stroke="#ffffff" strokeWidth="1.2" />
      <path
        d="M0,0 L12,6 M12,0 L0,6"
        stroke="#c8102e"
        strokeWidth="0.8"
        clipPath={`url(#${id}-t)`}
      />
      <path d="M6,0 v6 M0,3 h12" stroke="#ffffff" strokeWidth="2" />
      <path d="M6,0 v6 M0,3 h12" stroke="#c8102e" strokeWidth="1.2" />
    </>
  );
}

const flags = { ar: Uae, en: Uk };

function Flag({ lang, className = "" }) {
  const Shape = flags[lang];
  return (
    <svg
      viewBox="0 0 12 6"
      aria-hidden="true"
      className={`h-2.5 w-5 shrink-0 overflow-hidden rounded-[2px] ring-1 ring-fg/15 ${className}`}
    >
      <Shape />
    </svg>
  );
}

export default Flag;
