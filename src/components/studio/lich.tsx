import { useMemo, useState } from "react";
import { CHI, clashes, dateToLunar, fateYear, inspect, monthLabel, upcoming, yearCanChi, formatCanChi } from "@/lib/fengshui/lunar";

const WEEK = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

function sameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function fmt(d: Date): string {
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
}

export function LichView({ birth, yearMode }: { birth: string; yearMode: "tet" | "lapxuan" }) {
  const today = useMemo(() => new Date(), []);
  const [cursor, setCursor] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [picked, setPicked] = useState(() => today);

  const cells = useMemo(() => {
    const y = cursor.getFullYear();
    const m = cursor.getMonth();
    const lead = (new Date(y, m, 1).getDay() + 6) % 7;
    const count = new Date(y, m + 1, 0).getDate();
    const out: (Date | null)[] = [];
    for (let i = 0; i < lead; i++) out.push(null);
    for (let d = 1; d <= count; d++) out.push(new Date(y, m, d));
    while (out.length % 7) out.push(null);
    return out;
  }, [cursor]);

  const info = useMemo(() => inspect(picked), [picked]);
  const marks = useMemo(() => upcoming(today, 5), [today]);
  const birthDate = useMemo(() => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(birth)) return null;
    const [y, m, d] = birth.split("-").map(Number);
    if (!y || !m || !d) return null;
    return new Date(y, m - 1, d, 12);
  }, [birth]);
  const birthChi = birthDate ? yearCanChi(fateYear(birthDate, yearMode)).chi : null;
  const lunarNow = dateToLunar(today);
  const ycc = yearCanChi(lunarNow.year);

  return (
    <div className="flex flex-col gap-3 pb-6">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-xs tracking-widest text-gold uppercase">Âm dương lịch</p>
          <h2 className="text-xl leading-tight text-ivory">
            {lunarNow.day} {monthLabel(lunarNow.month, lunarNow.leap)}
          </h2>
          <p className="text-sm text-muted">
            Năm {formatCanChi(ycc.can, ycc.chi)} · {fmt(today)}
          </p>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {marks.map((m) => (
          <button
            key={`${m.name}-${m.days}`}
            type="button"
            onClick={() => {
              setPicked(m.date);
              setCursor(new Date(m.date.getFullYear(), m.date.getMonth(), 1));
            }}
            className="shrink-0 rounded-full border border-line bg-navy px-3 py-2 text-left"
          >
            <span className="block text-xs text-gold">{m.days} ngày</span>
            <span className="block text-sm text-ivory">{m.name}</span>
          </button>
        ))}
      </div>

      <div className="bezel rounded-2xl bg-navy p-2">
        <div className="mb-2 flex items-center justify-between">
          <button type="button" className="h-11 w-11 rounded-full text-gold" onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))} aria-label="Tháng trước">
            ‹
          </button>
          <p className="text-sm text-ivory">
            Tháng {cursor.getMonth() + 1} / {cursor.getFullYear()}
          </p>
          <button type="button" className="h-11 w-11 rounded-full text-gold" onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))} aria-label="Tháng sau">
            ›
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted">
          {WEEK.map((w) => (
            <div key={w} className="py-1">{w}</div>
          ))}
          {cells.map((d, i) => {
            if (!d) return <div key={`e-${i}`} />;
            const brief = inspect(d);
            const on = sameDay(d, picked);
            const isToday = sameDay(d, today);
            return (
              <button
                key={d.toDateString()}
                type="button"
                onClick={() => setPicked(d)}
                className={
                  "flex min-h-11 flex-col items-center justify-center rounded-lg " +
                  (on ? "bg-gold text-ink" : isToday ? "border border-gold text-ivory" : "text-ivory")
                }
              >
                <span className="text-sm leading-none tabular-nums">{d.getDate()}</span>
                <span className={"fine leading-none " + (on ? "text-ink" : brief.hoang ? "text-gold" : "text-muted")}>
                  {brief.lunar.day}
                  {brief.lunar.leap ? "n" : ""}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <article className="bezel rounded-2xl bg-navy-2 p-3">
        <p className="text-xs text-gold">{info.thu} · {fmt(info.solar)}</p>
        <h3 className="text-lg text-ivory">
          {info.lunar.day} {monthLabel(info.lunar.month, info.lunar.leap)} · {formatCanChi(info.dayCan, info.dayChi)}
        </h3>
        <p className="text-sm text-muted">
          Tháng {formatCanChi(info.monthCan, info.monthChi)} · Năm {formatCanChi(info.yearCan, info.yearChi)}
        </p>
        <dl className="mt-2 grid grid-cols-2 gap-2 text-sm">
          <div>
            <dt className="text-xs text-muted">Ngày</dt>
            <dd className={info.hoang ? "text-pine" : "text-cinnabar"}>{info.hoang ? "Hoàng đạo" : "Hắc đạo"}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">Trực</dt>
            <dd className="text-ivory">{info.truc.name}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">Nạp âm</dt>
            <dd className="text-ivory">{info.nap.name}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">Tiết khí</dt>
            <dd className="text-ivory">{info.tiet}</dd>
          </div>
        </dl>
        <p className="mt-2 text-sm text-ivory">{info.truc.hint}</p>
        <p className="mt-1 text-sm text-muted">
          Giờ hoàng đạo: {info.hourHoang.map((h) => CHI[h]).join(" · ")}
        </p>
        {info.ky.length > 0 && <p className="mt-1 text-sm text-cinnabar">Kỵ: {info.ky.join(", ")}</p>}
        {info.fest.length > 0 && <p className="mt-1 text-sm text-gold">{info.fest.join(" · ")}</p>}
        {birthChi != null && clashes(birthChi, info.dayChi) && (
          <p className="mt-1 text-sm text-cinnabar">Xung tuổi với năm sinh đã nhập.</p>
        )}
        <p className="mt-3 text-xs leading-relaxed text-muted">
          Lịch tính theo múi giờ Việt Nam, thuật toán Hồ Ngọc Đức. Tiết khí theo kinh độ mặt trời, có thể lệch vài giờ so với lịch thiên văn. Hoàng đạo theo Lục Diệu.
        </p>
      </article>
    </div>
  );
}
