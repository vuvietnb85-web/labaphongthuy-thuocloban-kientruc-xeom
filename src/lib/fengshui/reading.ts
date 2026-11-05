import { goodRank, palacesWith, starAt, STARS, type KuaInfo, type StarId } from "./bat-trach.ts";
import type { YearTaboo } from "./almanac.ts";
import { ELEMENT_NAME, mountainAt, oppositeMountain, palaceAt, palaceById, type Element, elementRel } from "./luopan.ts";
import { CAN, CHI, formatCanChi } from "./lunar.ts";

export type Aim = "cua" | "giuong" | "bep" | "tho" | "ban" | "ngoi" | "wc";

export const AIMS: { id: Aim; label: string }[] = [
  { id: "cua", label: "Cửa" },
  { id: "giuong", label: "Đầu giường" },
  { id: "bep", label: "Miệng bếp" },
  { id: "tho", label: "Bàn thờ" },
  { id: "ban", label: "Bàn làm việc" },
  { id: "ngoi", label: "Chỗ ngồi" },
  { id: "wc", label: "Cửa WC" },
];

export type Tone = "good" | "mid" | "bad";

export function aimVerdict(aim: Aim, star: StarId): { tone: Tone; title: string; detail: string } {
  const s = STARS[star];
  const cat = goodRank(s.rank);
  if (aim === "wc") {
    if (star === "tuyetMenh" || star === "nguQuy" || star === "lucSat") {
      return { tone: "good", title: "WC đặt vào cung hung — đúng chỗ xả", detail: `${s.name} nên để nhà vệ sinh, kho, chỗ thoát. Giữ khô, đậy nắp, không nhìn ra cửa chính.` };
    }
    return { tone: "bad", title: "WC đang vào cung tốt", detail: `${s.name} không nên làm WC. Dời sang Tuyệt mệnh, Ngũ quỷ hoặc Lục sát.` };
  }
  if (aim === "bep") {
    if (star === "thienY") return { tone: "good", title: "Bếp hợp Thiên y", detail: "Miệng bếp quay về Thiên y là cách an nhất trong Bát Trạch." };
    if (star === "sinhKhi") return { tone: "bad", title: "Bếp phạm Sinh khí", detail: "Hỏa đốt cung tài. Không để miệng bếp vào Sinh khí." };
    if (star === "nguQuy" || star === "tuyetMenh") return { tone: "bad", title: `Bếp vào ${s.name}`, detail: "Dời miệng bếp. Ưu tiên Thiên y, tránh Ngũ quỷ và Tuyệt mệnh." };
    if (cat) return { tone: "mid", title: `Bếp vào ${s.name}`, detail: "Dùng được. Thiên y vẫn hơn nếu xoay được miệng bếp." };
    return { tone: "bad", title: `Bếp vào ${s.name}`, detail: s.brief };
  }
  if (aim === "giuong") {
    if (star === "dienNien" || star === "phucVi" || star === "thienY") {
      return { tone: "good", title: `Đầu giường ${s.name}`, detail: "Hướng này hợp giường. Kê đầu vào tường đặc, không xà ngang, không gương đối giường." };
    }
    if (star === "sinhKhi") return { tone: "mid", title: "Sinh khí hơi động cho giường", detail: "Tốt cho cửa hơn cho giấc ngủ. Nếu kê, ưu tiên người cần sức bật, không phải người bệnh." };
    return { tone: "bad", title: `Đầu giường ${s.name}`, detail: "Không kê đầu về hướng này. Chọn Diên niên, Phục vị hoặc Thiên y." };
  }
  if (aim === "cua") {
    if (star === "sinhKhi" || star === "dienNien") return { tone: "good", title: `Cửa ${s.name}`, detail: s.brief };
    if (star === "thienY" || star === "phucVi") return { tone: "mid", title: `Cửa ${s.name}`, detail: "Dùng được cho cửa phụ. Cửa chính vẫn hơn nếu là Sinh khí hoặc Diên niên." };
    return { tone: "bad", title: `Cửa ${s.name}`, detail: "Không mở cửa chính về hướng này." };
  }
  if (aim === "tho") {
    if (star === "dienNien" || star === "phucVi" || star === "sinhKhi") {
      return { tone: "good", title: `Bàn thờ hướng ${s.name}`, detail: "Mặt bàn thờ nhìn về hướng tốt. Lưng tựa tường đặc, không cửa sau lưng, không WC sát vách." };
    }
    if (cat) return { tone: "mid", title: `Bàn thờ ${s.name}`, detail: s.brief };
    return { tone: "bad", title: `Bàn thờ ${s.name}`, detail: "Không quay mặt bàn thờ về cung hung." };
  }
  if (star === "sinhKhi" || star === "dienNien") return { tone: "good", title: `${s.name} hợp chỗ ngồi và bàn`, detail: s.brief };
  if (cat) return { tone: "mid", title: s.name, detail: s.brief };
  return { tone: "bad", title: s.name, detail: "Đổi hướng ngồi hoặc dời bàn." };
}

export function bestDirs(kua: number): { label: string; text: string }[] {
  const pick = (stars: StarId[]) =>
    palacesWith(kua, stars).map((id) => palaceById(id).dir).join(", ");
  return [
    { label: "Cửa", text: pick(["sinhKhi", "dienNien"]) },
    { label: "Bếp", text: pick(["thienY"]) },
    { label: "Giường", text: pick(["dienNien", "phucVi", "thienY"]) },
    { label: "WC", text: pick(["tuyetMenh", "nguQuy", "lucSat"]) },
  ];
}

export type AxisWarning = { tone: Tone; text: string };

export function axisWarnings(heading: number, taboo: YearTaboo, kind: "nha" | "mo"): AxisWarning[] {
  const face = mountainAt(heading).mountain;
  const sit = oppositeMountain(face);
  const faceP = palaceAt(heading).id;
  const sitP = palaceAt(heading + 180).id;
  const out: AxisWarning[] = [];
  const hitSat = (name: string) => taboo.tamSatMountains.includes(name);
  if (hitSat(face.name)) out.push({ tone: "bad", text: `Hướng ${face.name} phạm Tam Sát năm ${taboo.canChi} (phương ${taboo.tamSatLabel}).` });
  if (hitSat(sit.name)) out.push({ tone: "bad", text: `Tọa ${sit.name} phạm Tam Sát năm ${taboo.canChi}.` });
  if (face.name === taboo.thaiTue) out.push({ tone: "bad", text: `Hướng ${face.name} đụng Thái Tuế. Không mở cửa chính, không đào đất phía này.` });
  if (sit.name === taboo.thaiTue) out.push({ tone: "bad", text: `Tọa ${sit.name} đụng Thái Tuế. Không xây lưng nhà, không tọa mộ vào sơn này năm nay.` });
  if (taboo.nguHoangPalace !== "trung" && (faceP === taboo.nguHoangPalace || sitP === taboo.nguHoangPalace)) {
    out.push({ tone: "bad", text: `Ngũ Hoàng đóng ${taboo.nguHoangLabel}. Không động thổ, không an táng trục này trong năm ${taboo.year}.` });
  }
  if (out.length === 0) {
    out.push({
      tone: "good",
      text: kind === "mo"
        ? `Trục tọa ${sit.name} hướng ${face.name} không đụng Thái Tuế, Tam Sát, Ngũ Hoàng năm ${taboo.canChi}. Vẫn phải xem long mạch và thủy khẩu.`
        : `Trục này không phạm Thái Tuế, Tam Sát, Ngũ Hoàng năm ${taboo.canChi}.`,
    });
  }
  return out;
}

export function elementLine(kuaEl: Element, mountainEl: Element): string {
  return elementRel(kuaEl, mountainEl).text;
}

export function readingReport(opts: {
  name: string;
  when: string;
  heading: number;
  trueNorth: boolean;
  kua: KuaInfo | null;
  fate: number | null;
  taboo: YearTaboo;
  mode: string;
}): string {
  const face = mountainAt(opts.heading);
  const sit = oppositeMountain(face.mountain);
  const pal = palaceAt(opts.heading);
  const deg = opts.heading.toFixed(1);
  const lines = [
    "LA BÀN PHƯƠNG ĐÔNG",
    opts.name,
    opts.when,
    `Chế độ: ${opts.mode}`,
    `Hướng ${face.mountain.name} ${face.mountain.han}  ${deg}° ${opts.trueNorth ? "bắc thật" : "bắc từ"}`,
    `Tọa ${sit.name} ${sit.han}`,
    `Cung ${pal.name} · ${pal.dir} · ${ELEMENT_NAME[face.mountain.element]} · lệch ${face.offset >= 0 ? "thuận" : "nghịch"} ${Math.abs(face.offset).toFixed(1)}°`,
    face.seam ? "Áp tuyến — sát ranh hai sơn, nên chỉnh lại cho vào giữa sơn." : "Trong lòng sơn.",
    `Năm xét ${opts.taboo.canChi}: Thái Tuế ${opts.taboo.thaiTue}, Tam Sát ${opts.taboo.tamSatLabel} (${opts.taboo.tamSatMountains.join(" ")}), Ngũ Hoàng ${opts.taboo.nguHoangLabel}.`,
  ];
  if (opts.kua && opts.fate) {
    const star = STARS[starAt(opts.kua.kua, pal.id)];
    lines.push(
      `Mệnh ${opts.kua.kua} ${opts.kua.name} · ${opts.kua.groupLabel} · năm ${opts.fate} ${formatCanChi(...canChiOf(opts.fate))}`,
      `Hướng này với mệnh: ${star.name} — ${star.brief}`,
    );
  }
  lines.push("Công cụ đo đạc hỗ trợ. An táng và động thổ thuộc về thầy và gia chủ.");
  return lines.filter(Boolean).join("\n");
}

function canChiOf(year: number): [number, number] {
  const can = ((year - 4) % 10 + 10) % 10;
  const chi = ((year - 4) % 12 + 12) % 12;
  return [can, chi];
}

export function fateLabel(year: number): string {
  const [c, z] = canChiOf(year);
  return `${year} ${CAN[c]} ${CHI[z]}`;
}
