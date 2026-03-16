/* Architectural drawings - clean technical line style (Freepik reference) */

export function FloorPlan({ className = '' }) {
  return (
    <svg viewBox="0 0 200 140" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="0.6" fill="none">
        <rect x="10" y="10" width="180" height="120" />
        <line x1="75" y1="10" x2="75" y2="130" />
        <line x1="125" y1="10" x2="125" y2="130" />
        <line x1="10" y1="55" x2="75" y2="55" />
        <line x1="125" y1="55" x2="190" y2="55" />
        <path d="M75 55 A 10 10 0 0 1 85 55" strokeDasharray="3 2" />
        <path d="M125 55 A 10 10 0 0 0 115 55" strokeDasharray="3 2" />
        <rect x="85" y="10" width="30" height="12" strokeWidth="0.35" />
        <rect x="85" y="118" width="30" height="12" strokeWidth="0.35" />
        <circle cx="40" cy="95" r="4" strokeWidth="0.35" />
        <circle cx="160" cy="95" r="4" strokeWidth="0.35" />
      </g>
    </svg>
  );
}

export function WireframeBuilding({ className = '' }) {
  return (
    <svg viewBox="0 0 180 120" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="0.55" fill="none">
        <path d="M20 90 L50 50 L90 50 L120 90 Z" />
        <path d="M50 50 L90 50 L90 90 L50 90 Z" />
        <path d="M90 50 L120 90 L120 120 L90 90 Z" />
        <path d="M50 50 L50 90 L20 90 Z" />
        <line x1="65" y1="65" x2="75" y2="65" />
        <line x1="65" y1="65" x2="65" y2="90" />
        <line x1="75" y1="65" x2="75" y2="90" />
        <line x1="65" y1="90" x2="75" y2="90" />
        <line x1="95" y1="75" x2="110" y2="75" />
        <line x1="95" y1="75" x2="95" y2="95" />
        <line x1="110" y1="75" x2="110" y2="95" />
        <line x1="95" y1="95" x2="110" y2="95" />
        <line x1="0" y1="120" x2="180" y2="120" strokeWidth="0.5" />
      </g>
    </svg>
  );
}

export function StructuralGrid({ className = '' }) {
  return (
    <svg viewBox="0 0 160 120" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="0.5" fill="none">
        {[...Array(9)].map((_, i) => (
          <line key={`h${i}`} x1={0} y1={15 + i * 12} x2={160} y2={15 + i * 12} />
        ))}
        {[...Array(13)].map((_, i) => (
          <line key={`v${i}`} x1={15 + i * 12} y1={0} x2={15 + i * 12} y2={120} />
        ))}
        <path d="M 30 30 L 80 20 L 130 30 L 130 90 L 80 100 L 30 90 Z" strokeWidth="0.45" />
      </g>
    </svg>
  );
}

export function IsometricView({ className = '' }) {
  return (
    <svg viewBox="0 0 160 130" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="0.55" fill="none">
        <path d="M80 20 L130 70 L130 120 L80 90 Z" />
        <path d="M80 20 L30 70 L30 120 L80 90 Z" />
        <path d="M80 20 L130 70 L80 90 L30 70 Z" />
        <line x1="55" y1="85" x2="105" y2="85" />
        <line x1="55" y1="85" x2="55" y2="120" />
        <line x1="105" y1="85" x2="105" y2="120" />
        <line x1="55" y1="120" x2="105" y2="120" />
        <line x1="0" y1="130" x2="160" y2="130" strokeWidth="0.5" />
      </g>
    </svg>
  );
}
