import { useEffect, useMemo, useRef, useState } from "react";
import { Lock, LockOpen, Settings, Smartphone } from "lucide-react";
import { useStudio, type Mode } from "@/lib/store";
import { LuopanDial } from "@/components/studio/dial";
import { LichView } from "@/components/studio/lich";
import { LobanView } from "@/components/studio/loban-view";
import { requestCompass, useCompass } from "@/lib/use-compass";
import {
  fateYear,
  fengShuiYear,
  formatCanChi,
  inspect,
  monthLabel,
  wrap360,
} from "@/lib/fengshui/lunar";
import { CITIES, ELEMENT_NAME, mountainAt, oppositeMountain, palaceAt } from "@/lib/fengshui/luopan";
import { chart, goodRank, kuaOf, STARS, starAt } from "@/lib/fengshui/bat-trach";
import { yearTaboo } from "@/lib/fengshui/almanac";
import { AIMS, aimVerdict, axisWarnings, bestDirs, elementLine, fateLabel, readingReport, type Tone } from "@/lib/fengshui/reading";

const MODES: { id: Mode; label: string }[] = [
  { id: "laban", label: "La bàn" },
  { id: "nha", label: "Xây nhà" },
  { id: "noi", label: "Nội thất" },
  { id: "mo", label: "Mộ phần" },
  { id: "thuoc", label: "Lỗ Ban" },
  { id: "lich", label: "Lịch" },
];

const MODE_NAME: Record<Mode, string> = {
  laban: "La bàn",
  nha: "Xây nhà",
  noi: "Nội thất",
  mo: "Mộ phần",
  thuoc: "Lỗ Ban",
  lich: "Lịch",
};

function toneClass(t: Tone): string {
  if (t === "good") return "text-pine";
  if (t === "bad") return "text-cinnabar";
  return "text-gold-2";
}

function parseBirth(s: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return null;
  const [y, m, d] = s.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d, 12);
}

export function Studio() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) {
    return (
      <div className="app-shell text-ivory">
        <header className="app-pad pt-3">
          <p className="text-xs tracking-widest text-gold uppercase">La bàn phương Đông</p>
          <h1 className="text-xl text-ivory">Xây nhà · Nội thất · Mộ phần · Lỗ Ban</h1>
          <p className="text-sm text-muted">Đang mở la bàn và lịch âm dương.</p>
        </header>
      </div>
    );
  }
  return <Live />;
}

function Live() {
  const s = useStudio();
  const [sensor, setSensor] = useState(false);
  const [locked, setLocked] = useState(false);
  const [heard, setHeard] = useState(false);
  const [note, setNote] = useState("Kéo vành la bàn hoặc nhập độ. Bấm Kim máy khi đứng tại chỗ đo.");
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState("");
  const heading = wrap360(s.magnetic + (s.useTrue ? s.declination : 0));

  const heardRef = useRef(false);

  useCompass(sensor && !locked, (mag) => {
    useStudio.getState().setMagnetic(mag);
  }, () => {
    heardRef.current = true;
    setHeard(true);
  });

  useEffect(() => {
    if (!sensor) return;
    heardRef.current = false;
    setHeard(false);
    const t = window.setTimeout(() => {
      if (!heardRef.current) setNote("Chưa thấy kim từ. Máy tính thì nhập độ. Điện thoại: cho quyền la bàn và giữ máy thẳng.");
    }, 2500);
    return () => window.clearTimeout(t);
  }, [sensor]);

  useEffect(() => {
    if (heard && sensor) setNote(locked ? "Đã khóa số đo." : "Kim máy đang chạy. Khóa lại khi số đứng yên.");
  }, [heard, sensor, locked]);

  const setDisplayed = (deg: number) => {
    setSensor(false);
    setLocked(false);
    s.setMagnetic(wrap360(deg - (s.useTrue ? s.declination : 0)));
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowLeft") setDisplayed(heading - 1);
      if (e.key === "ArrowRight") setDisplayed(heading + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const full = s.mode === "lich" || s.mode === "thuoc";

  return (
    <div className="app-shell text-ivory">
      <header className="app-pad flex items-center justify-between gap-3 pt-2 pb-1">
        <button type="button" className="text-left" onClick={() => s.setMode("lich")}>
          <p className="text-xs tracking-widest text-gold uppercase">La bàn phương Đông</p>
          <HeaderDate />
        </button>
        <button type="button" className="icon-btn" onClick={() => setOpen(true)} aria-label="Chỉnh la bàn">
          <Settings className="size-5" />
        </button>
      </header>
      <nav className="app-pad grid grid-cols-3 gap-1.5 pb-2" aria-label="Chế độ">
        {MODES.map((m) => (
          <button key={m.id} type="button" onClick={() => s.setMode(m.id)} className={"mode-btn " + (s.mode === m.id ? "mode-on" : "")}>
            {m.label}
          </button>
        ))}
      </nav>
      <div className="stage app-pad">
        {full ? (
          <div className="min-h-0 flex-1 overflow-y-auto">
            {s.mode === "lich" ? (
              <LichView birth={s.birth} yearMode={s.yearMode} />
            ) : (
              <LobanView
                rulerId={s.rulerId}
                mm={s.mm}
                onRuler={(id) => s.patch({ rulerId: id })}
                onMm={(mm) => s.patch({ mm })}
              />
            )}
          </div>
        ) : (
          <>
            <div className="dial-wrap">
              <div className="dial-slot">
                <LuopanDial heading={heading} onHeading={setDisplayed} />
                <div className="hub">
                  <p className="text-2xl leading-none text-gold tabular-nums">{heading.toFixed(1)}°</p>
                  <p className="mt-1 text-sm text-ivory">{mountainAt(heading).mountain.name}</p>
                  <p className="fine text-muted">{s.useTrue ? "Bắc thật" : "Bắc từ"}</p>
                </div>
              </div>
            </div>
            <section className="sheet">
              <CompassSheet
                heading={heading}
                mode={s.mode}
                note={note}
                sensor={sensor}
                locked={locked}
                onSensor={() => void enableSensor(setSensor, setLocked, setNote)}
                onLock={() => setLocked((v) => !v)}
                onNudge={(d) => setDisplayed(heading + d)}
                onJump={(deg) => setDisplayed(deg)}
                onCopy={async (text) => {
                  try {
                    await navigator.clipboard.writeText(text);
                    setCopied("Đã chép phiếu đo.");
                  } catch {
                    setCopied("Không chép được. Hãy chọn chữ và sao chép.");
                  }
                }}
                copied={copied}
              />
            </section>
          </>
        )}
      </div>
      {open && <SettingsSheet onClose={() => setOpen(false)} />}
    </div>
  );
}

function HeaderDate() {
  const info = useMemo(() => inspect(new Date()), []);
  return (
    <p className="text-sm text-ivory">
      {info.lunar.day} {monthLabel(info.lunar.month, info.lunar.leap)} · {formatCanChi(info.yearCan, info.yearChi)}
    </p>
  );
}

async function enableSensor(
  setSensor: (v: boolean) => void,
  setLocked: (v: boolean) => void,
  setNote: (v: string) => void,
) {
  const r = await requestCompass();
  if (r === "denied") {
    setNote("Máy không cho la bàn. Nhập độ bằng tay.");
    setSensor(false);
    return;
  }
  setLocked(false);
  setSensor(true);
  setNote("Đang tìm kim từ… giữ máy thẳng, xa sắt thép.");
}

function CompassSheet(props: {
  heading: number;
  mode: Mode;
  note: string;
  sensor: boolean;
  locked: boolean;
  onSensor: () => void;
  onLock: () => void;
  onNudge: (d: number) => void;
  onJump: (deg: number) => void;
  onCopy: (text: string) => void;
  copied: string;
}) {
  const s = useStudio();
  const face = mountainAt(props.heading);
  const sit = oppositeMountain(face.mountain);
  const pal = palaceAt(props.heading);
  const birth = parseBirth(s.birth);
  const fate = birth ? fateYear(birth, s.yearMode) : null;
  const kua = fate ? kuaOf(fate, s.gender) : null;
  const year = s.workYear ?? fengShuiYear(new Date());
  const taboo = yearTaboo(year);
  const star = kua ? STARS[starAt(kua.kua, pal.id)] : null;
  const warnings = axisWarnings(props.heading, taboo, props.mode === "mo" ? "mo" : "nha");

  const report = readingReport({
    name: s.job || "Khảo sát",
    when: new Date().toLocaleString("vi-VN"),
    heading: props.heading,
    trueNorth: s.useTrue,
    kua,
    fate,
    taboo,
    mode: MODE_NAME[props.mode],
  });

  return (
    <div className="flex flex-col gap-2 pb-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs text-cinnabar">Hướng {face.mountain.name} {face.mountain.han}</p>
          <p className="text-xs text-muted">Tọa {sit.name} {sit.han} · {pal.name} {pal.han} · {pal.dir}</p>
        </div>
        <p className="text-right text-xs text-ivory">
          {ELEMENT_NAME[face.mountain.element]} · {face.mountain.yang ? "Dương" : "Âm"}
        </p>
      </div>
      {face.seam ? (
        <p className="text-sm text-cinnabar">Áp tuyến {Math.abs(face.offset).toFixed(1)}°. Chỉnh vào giữa sơn, đừng dừng trên ranh.</p>
      ) : (
        <p className="text-sm text-muted">
          Lệch {face.offset >= 0 ? "thuận kim" : "ngược kim"} {Math.abs(face.offset).toFixed(1)}° so với tâm sơn {face.mountain.name}.
        </p>
      )}
      <p className="text-xs text-muted">{props.note}</p>
      <div className="grid grid-cols-4 gap-1.5">
        <button type="button" className="mode-btn" onClick={() => props.onNudge(-15)}>−15°</button>
        <button type="button" className="mode-btn" onClick={() => props.onNudge(-1)}>−1°</button>
        <button type="button" className="mode-btn" onClick={() => props.onNudge(1)}>+1°</button>
        <button type="button" className="mode-btn" onClick={() => props.onNudge(15)}>+15°</button>
      </div>
      <input
        className="range"
        type="range"
        min={0}
        max={359.5}
        step={0.5}
        value={Math.min(359.5, props.heading)}
        aria-label="Độ hướng"
        onChange={(e) => props.onJump(Number(e.target.value))}
      />
      <div className="grid grid-cols-2 gap-1.5">
        <button type="button" className={"mode-btn " + (props.sensor ? "mode-on" : "")} onClick={props.onSensor}>
          <Smartphone className="mr-1 inline size-4" /> Kim máy
        </button>
        <button type="button" className="mode-btn" onClick={props.onLock}>
          {props.locked ? <Lock className="mr-1 inline size-4" /> : <LockOpen className="mr-1 inline size-4" />}
          {props.locked ? "Đang khóa" : "Khóa số"}
        </button>
      </div>

      {props.mode === "laban" && (
        <p className="text-sm text-ivory">
          Cung {pal.name} thuộc {ELEMENT_NAME[pal.element]}. Sơn {face.mountain.name} là {ELEMENT_NAME[face.mountain.element]}.
          {kua ? ` ${elementLine(kua.element, face.mountain.element)}.` : ""}
        </p>
      )}

      {(props.mode === "nha" || props.mode === "noi" || props.mode === "mo") && !kua && props.mode !== "mo" && (
        <p className="text-sm text-gold">Nhập ngày sinh trong phần Chỉnh để tính mệnh quái Bát Trạch.</p>
      )}

      {kua && star && (props.mode === "nha" || props.mode === "noi") && (
        <div>
          <p className="text-sm text-ivory">
            Mệnh {kua.kua} {kua.name} · {kua.groupLabel} · {fateLabel(fate ?? 0)}
          </p>
          <p className={"text-sm " + (goodRank(star.rank) ? "text-pine" : "text-cinnabar")}>
            Hướng này: {star.name}. {star.brief}
          </p>
        </div>
      )}

      {kua && props.mode === "nha" && (
        <>
          <div className="grid grid-cols-4 gap-1">
            {chart(kua.kua).map((c) => {
              const st = STARS[c.star];
              const on = c.palace.id === pal.id;
              return (
                <button
                  key={c.palace.id}
                  type="button"
                  onClick={() => props.onJump(c.palace.center)}
                  className={"rounded-lg border px-1 py-2 text-center " + (on ? "border-gold bg-navy-2" : "border-line bg-navy")}
                >
                  <span className="block text-xs text-ivory">{c.palace.short}</span>
                  <span className={"block fine " + (goodRank(st.rank) ? "text-pine" : "text-cinnabar")}>{st.name}</span>
                </button>
              );
            })}
          </div>
          <ul className="grid grid-cols-2 gap-1 text-sm">
            {bestDirs(kua.kua).map((b) => (
              <li key={b.label} className="rounded-lg bg-navy px-2 py-1.5">
                <span className="text-gold">{b.label}</span>
                <span className="text-ivory"> {b.text}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {kua && props.mode === "noi" && (
        <div className="flex flex-wrap gap-1.5">
          {AIMS.map((a) => (
            <button key={a.id} type="button" onClick={() => s.patch({ aim: a.id })} className={"mode-btn " + (s.aim === a.id ? "mode-on" : "")}>
              {a.label}
            </button>
          ))}
          {star && (
            <p className={"w-full text-sm " + toneClass(aimVerdict(s.aim, starAt(kua.kua, pal.id)).tone)}>
              {aimVerdict(s.aim, starAt(kua.kua, pal.id)).title}. {aimVerdict(s.aim, starAt(kua.kua, pal.id)).detail}
            </p>
          )}
        </div>
      )}

      {props.mode === "mo" && (
        <div>
          <p className="text-lg text-ivory">Tọa {sit.name} hướng {face.mountain.name}</p>
          <p className="text-sm text-muted">Lưng mộ {sit.name}, mặt nhìn {face.mountain.name} · {pal.dir}</p>
        </div>
      )}

      {(props.mode === "nha" || props.mode === "mo" || props.mode === "laban") && (
        <div className="rounded-xl bg-navy px-2 py-2">
          <p className="text-xs text-gold">
            Năm {taboo.canChi} · Thái Tuế {taboo.thaiTue} · Tam Sát {taboo.tamSatLabel} · Ngũ Hoàng {taboo.nguHoangLabel}
          </p>
          {warnings.map((w) => (
            <p key={w.text} className={"mt-1 text-sm " + toneClass(w.tone)}>{w.text}</p>
          ))}
          <div className="mt-2 flex items-center gap-2">
            <button type="button" className="icon-btn" onClick={() => s.patch({ workYear: year - 1 })} aria-label="Năm trước">−</button>
            <span className="text-xs text-muted tabular-nums">Đổi năm xét</span>
            <button type="button" className="icon-btn" onClick={() => s.patch({ workYear: year + 1 })} aria-label="Năm sau">+</button>
          </div>
        </div>
      )}

      <div className="flex gap-1.5">
        <input
          className="h-11 min-w-0 flex-1 rounded-xl border border-line bg-ink px-3 text-sm text-ivory"
          value={s.job}
          onChange={(e) => s.patch({ job: e.target.value })}
          aria-label="Tên công trình"
          placeholder="Tên công trình"
        />
        <button
          type="button"
          className="mode-btn mode-on"
          onClick={() => {
            props.onCopy(report);
            s.addSurvey({ id: `${Date.now()}`, name: s.job || "Khảo sát", at: new Date().toISOString(), text: report });
          }}
        >
          Ghi
        </button>
      </div>
      {props.copied && <p className="text-xs text-gold">{props.copied}</p>}
      <p className="text-xs text-muted">Đo để hỗ trợ. Động thổ và an táng vẫn là việc của thầy và gia chủ.</p>
    </div>
  );
}

function SettingsSheet({ onClose }: { onClose: () => void }) {
  const s = useStudio();
  const surveys = s.surveys;
  return (
    <div className="overlay">
      <div className="app-pad flex items-center justify-between py-2">
        <h2 className="text-lg text-ivory">Chỉnh la bàn</h2>
        <button type="button" className="mode-btn mode-on" onClick={onClose}>Xong</button>
      </div>
      <div className="app-pad flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto pb-8">
        <div className="grid grid-cols-2 gap-2">
          <button type="button" className={"mode-btn " + (s.gender === "nam" ? "mode-on" : "")} onClick={() => s.patch({ gender: "nam" })}>Nam</button>
          <button type="button" className={"mode-btn " + (s.gender === "nu" ? "mode-on" : "")} onClick={() => s.patch({ gender: "nu" })}>Nữ</button>
        </div>
        <label className="block text-sm text-muted">
          Ngày sinh dương lịch
          <input
            type="date"
            className="mt-1 h-11 w-full rounded-xl border border-line bg-ink px-3 text-ivory"
            value={s.birth}
            onChange={(e) => s.patch({ birth: e.target.value })}
          />
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button type="button" className={"mode-btn " + (s.yearMode === "tet" ? "mode-on" : "")} onClick={() => s.patch({ yearMode: "tet" })}>Năm theo Tết</button>
          <button type="button" className={"mode-btn " + (s.yearMode === "lapxuan" ? "mode-on" : "")} onClick={() => s.patch({ yearMode: "lapxuan" })}>Năm theo Lập Xuân</button>
        </div>
        <p className="text-xs text-muted">Bát Trạch dùng năm âm. Một số phái đổi mệnh vào Lập Xuân, không đợi giao thừa.</p>
        <button
          type="button"
          className={"mode-btn " + (s.useTrue ? "mode-on" : "")}
          onClick={() => s.patch({ useTrue: !s.useTrue })}
        >
          {s.useTrue ? "Đang đọc bắc thật" : "Đang đọc bắc từ"}
        </button>
        <p className="text-xs text-muted">La bàn truyền thống đọc bắc từ. Bật bắc thật khi đối chiếu bản đồ trắc địa.</p>
        <label className="block text-sm text-muted">
          Độ từ thiên (đông dương, tây âm): {s.declination.toFixed(1)}°
          <input
            className="range"
            type="range"
            min={-8}
            max={8}
            step={0.1}
            value={s.declination}
            onChange={(e) => s.patch({ declination: Number(e.target.value) })}
          />
        </label>
        <div className="flex flex-wrap gap-1.5">
          {CITIES.map((c) => (
            <button key={c.name} type="button" className="mode-btn" onClick={() => s.patch({ declination: c.dec })}>
              {c.name}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted">Số từ thiên là ước tính 2026, không thay số liệu địa từ chính thức.</p>
        <h3 className="text-sm text-gold">Sổ đo</h3>
        {surveys.length === 0 && <p className="text-sm text-muted">Chưa ghi phiếu nào.</p>}
        {surveys.map((item) => (
          <article key={item.id} className="rounded-xl border border-line bg-navy p-2">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm text-ivory">{item.name}</p>
              <button type="button" className="text-xs text-cinnabar" onClick={() => s.removeSurvey(item.id)}>Xóa</button>
            </div>
            <pre className="mt-1 text-xs whitespace-pre-wrap text-muted">{item.text}</pre>
          </article>
        ))}
        <h3 className="text-sm text-gold">Ủng hộ</h3>
        <SupportBox />
        <p className="text-xs leading-relaxed text-muted">
          24 sơn chính ngũ hành, Bát Trạch mệnh quái, Tam Sát — Thái Tuế — Ngũ Hoàng, thước 52,2 / 42,9 / 38,8 cm.
          Không thay thầy phong thủy, không thay hồ sơ trắc địa.
        </p>
      </div>
    </div>
  );
}

function SupportBox() {
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const id = "paypal-sdk-loban";
    const render = () => {
      const paypal = (window as unknown as {
        paypal?: { HostedButtons: (o: { hostedButtonId: string }) => { render: (s: string) => Promise<void> } };
      }).paypal;
      if (!paypal || !box.current) return;
      box.current.replaceChildren();
      const holder = document.createElement("div");
      holder.id = "paypal-container-T7AZ748Y27248";
      box.current.appendChild(holder);
      void paypal.HostedButtons({ hostedButtonId: "T7AZ748Y27248" }).render("#paypal-container-T7AZ748Y27248");
    };
    const existing = document.getElementById(id);
    if (existing) {
      render();
      return;
    }
    const script = document.createElement("script");
    script.id = id;
    script.async = true;
    script.src = "https://www.paypal.com/sdk/js?client-id=BAAIfuQli_a3Qud-8CIRqCRCeohqtiW29_i2Txx2rQM35pqMc-pbCIZX6L8tx1zbyOj_vp8AUE_dpSqOhc&components=hosted-buttons&disable-funding=venmo&currency=USD";
    script.onload = () => render();
    document.body.appendChild(script);
  }, []);
  return <div ref={box} />;
}
