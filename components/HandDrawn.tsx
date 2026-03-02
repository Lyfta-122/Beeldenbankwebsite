/**
 * Hand-drawn SVG decoration elements inspired by Basecamp's sketchy style.
 * Use sparingly for accents — wavy underlines, arrows, circles, stars.
 */

interface DecorationProps {
  className?: string;
  color?: string;
}

/* ─── Wavy underline ─── */
export function WavyUnderline({
  className = "",
  color = "currentColor",
}: DecorationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M2 8.5C12 2.5 22 2.5 32 8.5C42 14.5 52 14.5 62 8.5C72 2.5 82 2.5 92 8.5C102 14.5 112 14.5 122 8.5C132 2.5 142 2.5 152 8.5C162 14.5 172 14.5 182 8.5C188 5.5 194 3.5 198 4.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Sketchy circle (emphasis around a word/stat) ─── */
export function SketchCircle({
  className = "",
  color = "currentColor",
}: DecorationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <ellipse
        cx="110"
        cy="50"
        rx="100"
        ry="40"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="4 0"
        transform="rotate(-2 110 50)"
        style={{
          filter: "url(#sketchy-circle)",
        }}
      />
      {/* Second pass for that hand-drawn double-stroke look */}
      <ellipse
        cx="112"
        cy="48"
        rx="98"
        ry="38"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
        transform="rotate(1 112 48)"
      />
      <defs>
        <filter id="sketchy-circle">
          <feTurbulence
            baseFrequency="0.03"
            numOctaves="3"
            seed="2"
            type="turbulence"
          />
          <feDisplacementMap in="SourceGraphic" scale="3" />
        </filter>
      </defs>
    </svg>
  );
}

/* ─── Hand-drawn arrow (curved, pointing right-down) ─── */
export function SketchArrow({
  className = "",
  color = "currentColor",
}: DecorationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 8C20 6 40 10 56 28C64 37 68 44 70 52"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrowhead */}
      <path
        d="M62 46L70 54L76 44"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Hand-drawn arrow pointing left-down ─── */
export function SketchArrowLeft({
  className = "",
  color = "currentColor",
}: DecorationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M76 8C60 6 40 10 24 28C16 37 12 44 10 52"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 44L10 54L18 46"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Small hand-drawn star/sparkle ─── */
export function SketchStar({
  className = "",
  color = "currentColor",
}: DecorationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 2C16.5 10 16 12 16 16M16 16C16 20 15.5 26 16 30M16 16C10 16 4 15.5 2 16M16 16C22 16 26 16.5 30 16M8 8C11 11 13 13 16 16M16 16C19 19 22 22 24 24M24 8C21 11 19 13 16 16M16 16C13 19 10 22 8 24"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─── Handwritten-style annotation (positioned absolutely) ─── */
export function Annotation({
  children,
  className = "",
  arrowDirection = "left",
}: {
  children: React.ReactNode;
  className?: string;
  arrowDirection?: "left" | "right" | "up" | "down";
}) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 font-annotation text-sm text-primary/70 ${className}`}
    >
      {arrowDirection === "left" && (
        <svg
          width="24"
          height="16"
          viewBox="0 0 24 16"
          fill="none"
          className="shrink-0 -scale-x-100"
        >
          <path
            d="M2 14C8 10 14 6 22 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M18 2L22 4L18 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <span>{children}</span>
      {arrowDirection === "right" && (
        <svg
          width="24"
          height="16"
          viewBox="0 0 24 16"
          fill="none"
          className="shrink-0"
        >
          <path
            d="M2 14C8 10 14 6 22 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M18 2L22 4L18 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

/* ─── Scribble highlight (yellow marker-style behind text) ─── */
export function ScribbleHighlight({
  className = "",
  color = "#22C55E",
}: DecorationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M4 18C4 18 30 6 60 10C90 14 100 8 130 12C160 16 180 8 196 14"
        stroke={color}
        strokeWidth="18"
        strokeLinecap="round"
        opacity="0.15"
      />
    </svg>
  );
}

/* ─── Hand-drawn checkmark ─── */
export function SketchCheck({
  className = "",
  color = "currentColor",
}: DecorationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13C4 13 8 17 10 19C10 19 14 11 20 5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
