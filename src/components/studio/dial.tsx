import { useRef } from "react";
import { MOUNTAINS, PALACES, type Element, type PalaceId } from "@/lib/fengshui/luopan";
import { wrap360 } from "@/lib/fengshui/lunar";

const INK: Record<Element, string> = {
  kim: "var(--color-kim)",
  moc: "var(--color-moc)",
  thuy: "var(--color-thuy)",
  hoa: "var(--color-hoa)",
  tho: "var(--color-tho)",
};

const TRIGRAM: Record<PalaceId, [number, number, number]> = {
  canNw: [1, 1, 1],
  doai: [0, 1, 1],
  ly: [1, 0, 1],
  chan: [0, 0, 1],
  ton: [1, 1, 0],
  kham: [0, 1, 0],
  can: [1, 0, 0],
  khon: [0, 0, 0],
};

function sector(r0: number, r1: number, a0: number, a1: number): string {
  const p = (r: number, a: number) => {
    const rad = ((a - 90) * Math.PI) / 180;
    return [100 + r * Math.cos(rad), 100 + r * Math.sin(rad)];
  };
  const large = a1 - a0 > 180 ? 1 : 0;
  const [x0, y0] = p(r1, a0);
  const [x1, y1] = p(r1, a1);
  const [x2, y2] = p(r0, a1);
  const [x3, y3] = p(r0, a0);
  return `M ${x0} ${y0} A ${r1} ${r1} 0 ${large} 1 ${x1} ${y1} L ${x2} ${y2} A ${r0} ${r0} 0 ${large} 0 ${x3} ${y3} Z`;
}

function screenAngle(e: React.PointerEvent, el: SVGSVGElement): number {
  const box = el.getBoundingClientRect();
  const x = e.clientX - (box.left + box.width / 2);
  const y = e.clientY - (box.top + box.height / 2);
  return wrap360((Math.atan2(x, -y) * 180) / Math.PI);
}

export function LuopanDial({
  heading,
  onHeading,
}: {
  heading: number;
  onHeading?: (deg: number) => void;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const drag = useRef<{ a: number; h: number } | null>(null);

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 200"
      className="h-full max-h-full w-auto touch-none select-none"
      role="img"
      aria-label="La bàn 24 sơn"
      onPointerDown={(e) => {
        if (!onHeading || !ref.current) return;
        ref.current.setPointerCapture(e.pointerId);
        drag.current = { a: screenAngle(e, ref.current), h: heading };
      }}
      onPointerMove={(e) => {
        if (!drag.current || !ref.current || !onHeading) return;
        const a = screenAngle(e, ref.current);
        const delta = ((a - drag.current.a + 540) % 360) - 180;
        onHeading(wrap360(drag.current.h - delta));
      }}
      onPointerUp={() => {
        drag.current = null;
      }}
      onPointerCancel={() => {
        drag.current = null;
      }}
    >
      <circle cx="100" cy="100" r="98" fill="var(--color-navy)" stroke="var(--color-gold)" strokeWidth="0.6" />
      <circle cx="100" cy="100" r="96" fill="none" stroke="var(--color-gold)" strokeWidth="0.25" opacity="0.7" />
      <g transform={`rotate(${-heading} 100 100)`}>
        {MOUNTAINS.map((m) => (
          <path
            key={m.name}
            d={sector(64, 90, m.center - 7.5, m.center + 7.5)}
            fill={INK[m.element]}
            stroke="var(--color-ink)"
            strokeWidth="0.35"
          />
        ))}
        {MOUNTAINS.map((m) => (
          <g key={`t-${m.name}`} transform={`rotate(${m.center} 100 100)`}>
            <text
              x="100"
              y="23"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--color-ivory)"
              fontSize="5.5"
              fontWeight="650"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {m.name}
            </text>
          </g>
        ))}
        {PALACES.map((p) => (
          <g key={p.id} transform={`rotate(${p.center} 100 100)`}>
            {TRIGRAM[p.id].map((bit, i) => {
              const y = 48 + i * 3.1;
              const stroke = "var(--color-gold-2)";
              if (bit) {
                return <line key={i} x1="94.5" x2="105.5" y1={y} y2={y} stroke={stroke} strokeWidth="0.9" />;
              }
              return (
                <g key={i}>
                  <line x1="94.5" x2="98.6" y1={y} y2={y} stroke={stroke} strokeWidth="0.9" />
                  <line x1="101.4" x2="105.5" y1={y} y2={y} stroke={stroke} strokeWidth="0.9" />
                </g>
              );
            })}
          </g>
        ))}
        {Array.from({ length: 72 }, (_, i) => {
          const a = i * 5;
          const long = a % 15 === 0;
          const rad = ((a - 90) * Math.PI) / 180;
          const r0 = long ? 91 : 93;
          const r1 = 96;
          return (
            <line
              key={a}
              x1={100 + r0 * Math.cos(rad)}
              y1={100 + r0 * Math.sin(rad)}
              x2={100 + r1 * Math.cos(rad)}
              y2={100 + r1 * Math.sin(rad)}
              stroke="var(--color-gold)"
              strokeWidth={long ? 0.45 : 0.25}
              opacity={long ? 0.9 : 0.45}
            />
          );
        })}
      </g>
      <circle cx="100" cy="100" r="40" fill="var(--color-ink)" stroke="var(--color-gold)" strokeWidth="0.45" />
      <circle cx="100" cy="100" r="36.5" fill="none" stroke="var(--color-gold)" strokeWidth="0.2" opacity="0.5" />
      <polygon points="100,3 96.2,10 103.8,10" fill="var(--color-cinnabar)" />
      <line x1="100" y1="12" x2="100" y2="58" stroke="var(--color-cinnabar)" strokeWidth="0.6" />
      <line x1="100" y1="142" x2="100" y2="190" stroke="var(--color-ivory)" strokeWidth="0.35" opacity="0.55" />
      <circle cx="100" cy="100" r="1.3" fill="var(--color-gold)" />
    </svg>
  );
}
