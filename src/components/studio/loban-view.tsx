import { measure, nearbyGood, RULERS, rulerById, type Ruler } from "@/lib/fengshui/loban";

const TRIALS: { id: Ruler["id"]; mm: number; label: string }[] = [
  { id: "thongthuy", mm: 810, label: "Cửa 810" },
  { id: "thongthuy", mm: 900, label: "Cửa 900" },
  { id: "thongthuy", mm: 1200, label: "Cửa 1.2 m" },
  { id: "duong", mm: 150, label: "Bậc 150" },
  { id: "duong", mm: 850, label: "Bệ 850" },
  { id: "am", mm: 810, label: "Khám 810" },
  { id: "am", mm: 1270, label: "Bàn thờ" },
];

function Strip({ ruler, mm }: { ruler: Ruler; mm: number }) {
  const span = 180;
  const start = mm - 50;
  const width = 360;
  const xOf = (v: number) => ((v - start) / span) * width;
  const cungW = ruler.cycleMm / ruler.cungs.length;
  const segs: { x: number; w: number; good: boolean; name: string }[] = [];
  const first = Math.floor(start / ruler.cycleMm) * ruler.cycleMm;
  for (let base = first; base < start + span + ruler.cycleMm; base += ruler.cycleMm) {
    ruler.cungs.forEach((c, i) => {
      const a = base + i * cungW;
      const b = a + cungW;
      if (b < start || a > start + span) return;
      const x0 = Math.max(a, start);
      const x1 = Math.min(b, start + span);
      segs.push({ x: xOf(x0), w: xOf(x1) - xOf(x0), good: c.good, name: c.name });
    });
  }
  const needle = xOf(mm);
  return (
    <svg viewBox={`0 0 ${width} 78`} className="w-full" role="img" aria-label="Thước Lỗ Ban">
      <rect x="0" y="18" width={width} height="44" fill="var(--color-ink)" />
      {segs.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="18" width={Math.max(s.w, 0.4)} height="44" fill={s.good ? "var(--color-gold)" : "var(--color-navy-2)"} />
          {s.w > 28 && (
            <text x={s.x + s.w / 2} y="44" textAnchor="middle" fontSize="9" fill={s.good ? "var(--color-ink)" : "var(--color-ivory)"}>
              {s.name}
            </text>
          )}
        </g>
      ))}
      <line x1={needle} y1="8" x2={needle} y2="70" stroke="var(--color-cinnabar)" strokeWidth="1.4" />
      <polygon points={`${needle},4 ${needle - 5},12 ${needle + 5},12`} fill="var(--color-cinnabar)" />
    </svg>
  );
}

export function LobanView({
  rulerId,
  mm,
  onRuler,
  onMm,
}: {
  rulerId: Ruler["id"];
  mm: number;
  onRuler: (id: Ruler["id"]) => void;
  onMm: (mm: number) => void;
}) {
  const ruler = rulerById(rulerId);
  const safe = Number.isFinite(mm) ? Math.max(0, mm) : 0;
  const hit = measure(ruler, safe);
  const near = nearbyGood(ruler, safe, 6);
  return (
    <div className="flex flex-col gap-3 pb-6">
      <div>
        <p className="text-xs tracking-widest text-gold uppercase">Thước Lỗ Ban</p>
        <h2 className="text-xl text-ivory">{ruler.title}</h2>
        <p className="text-sm text-muted">{ruler.use}</p>
        <p className="text-xs text-muted">{ruler.cycleLabel}. Vàng là cung tốt.</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {RULERS.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => onRuler(r.id)}
            className={
              "h-11 rounded-full border text-xs " +
              (r.id === rulerId ? "border-gold bg-navy-2 text-gold" : "border-line bg-navy text-ivory")
            }
          >
            {r.id === "thongthuy" ? "Thông thủy" : r.id === "duong" ? "Dương trạch" : "Âm phần"}
          </button>
        ))}
      </div>
      <label className="block">
        <span className="text-xs text-muted">Kích thước (mm)</span>
        <input
          inputMode="numeric"
          className="mt-1 h-12 w-full rounded-xl border border-line bg-ink px-3 text-2xl text-ivory tabular-nums"
          value={Number.isFinite(mm) ? String(Math.round(mm)) : ""}
          onChange={(e) => {
            const n = Number(e.target.value.replace(",", "."));
            if (e.target.value === "") onMm(0);
            else if (Number.isFinite(n)) onMm(n);
          }}
        />
      </label>
      <div className="flex gap-2">
        <button type="button" className="h-11 flex-1 rounded-full border border-line text-ivory" onClick={() => onMm(Math.max(0, safe - 1))}>−1</button>
        <button type="button" className="h-11 flex-1 rounded-full border border-line text-ivory" onClick={() => onMm(safe + 1)}>+1</button>
        <button type="button" className="h-11 flex-1 rounded-full border border-line text-ivory" onClick={() => onMm(safe + 10)}>+10</button>
      </div>
      <div className="bezel overflow-hidden rounded-2xl bg-navy">
        <Strip ruler={ruler} mm={safe} />
      </div>
      <article className={"rounded-2xl border p-3 " + (hit.cung.good ? "border-gold bg-navy-2" : "border-cinnabar bg-navy")}>
        <p className="text-xs tracking-widest text-muted uppercase">{hit.cung.good ? "Cung tốt" : "Cung xấu"}</p>
        <h3 className={"text-2xl " + (hit.cung.good ? "text-gold" : "text-cinnabar")}>
          {hit.cung.name}
          {hit.sub ? ` · ${hit.sub.name}` : ""}
        </h3>
        <p className="mt-1 text-sm text-ivory">{hit.cung.note}</p>
        <p className="mt-1 text-xs text-muted tabular-nums">
          {safe.toFixed(0)} mm · trong cung {hit.into.toFixed(1)} mm
        </p>
      </article>
      <div>
        <p className="mb-2 text-xs text-muted">Cỡ tốt gần kích thước này</p>
        <div className="flex flex-col gap-2">
          {near.map((g) => (
            <button
              key={g.mm}
              type="button"
              onClick={() => onMm(g.mm)}
              className="flex h-11 items-center justify-between rounded-xl border border-line bg-navy px-3 text-left"
            >
              <span className="text-sm text-ivory">{g.label}</span>
              <span className="text-sm text-gold tabular-nums">{g.mm} mm</span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {TRIALS.filter((t) => t.id === rulerId).map((t) => (
          <button key={t.label} type="button" className="h-11 rounded-full border border-line px-3 text-sm text-ivory" onClick={() => onMm(t.mm)}>
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
