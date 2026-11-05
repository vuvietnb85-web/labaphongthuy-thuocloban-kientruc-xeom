export type SubCung = { name: string };
export type BigCung = { name: string; good: boolean; note: string; subs: SubCung[] };

export type Ruler = {
  id: "thongthuy" | "duong" | "am";
  title: string;
  cycleLabel: string;
  cycleMm: number;
  use: string;
  cungs: BigCung[];
};

const door: BigCung[] = [
  { name: "Quý nhân", good: true, note: "Quý nhân phù trợ, làm ăn hanh thông.", subs: [] },
  { name: "Hiểm họa", good: false, note: "Tán tài, bệnh, con cái bất hòa.", subs: [] },
  { name: "Thiên tai", good: false, note: "Ốm nặng, mất của, gia đạo bất an.", subs: [] },
  { name: "Thiên tài", good: true, note: "Tài lộc đến, con hiếu, nhà an.", subs: [] },
  { name: "Phúc lộc", good: true, note: "Nghề phát, phúc dày, nhà yên.", subs: [] },
  { name: "Cô độc", good: false, note: "Hao người hao của, biệt ly.", subs: [] },
  { name: "Thiên tặc", good: false, note: "Tai bay, kiện tụng, trộm cướp.", subs: [] },
  { name: "Tể tướng", good: true, note: "Thuận mọi bề, con quý, chủ may.", subs: [] },
];

const solid: BigCung[] = [
  {
    name: "Tài", good: true, note: "Tài đức, kho quý, đón phúc.",
    subs: ["Tài đức", "Báo khố", "Lục hợp", "Nghênh phúc"].map((name) => ({ name })),
  },
  {
    name: "Bệnh", good: false, note: "Hao tài, kiện tụng, cô độc.",
    subs: ["Thoát tài", "Công sự", "Lao chấp", "Cô quả"].map((name) => ({ name })),
  },
  {
    name: "Ly", good: false, note: "Chia lìa, mất của, thị phi.",
    subs: ["Trường khố", "Kiếp tài", "Quan quỷ", "Thất thoát"].map((name) => ({ name })),
  },
  {
    name: "Nghĩa", good: true, note: "Thêm người, thêm lợi, đại cát.",
    subs: ["Thêm đinh", "Ích lợi", "Quý tử", "Đại cát"].map((name) => ({ name })),
  },
  {
    name: "Quan", good: true, note: "Khoa danh, tài lộc, phú quý.",
    subs: ["Thuận khoa", "Hoành tài", "Tiến ích", "Phú quý"].map((name) => ({ name })),
  },
  {
    name: "Kiếp", good: false, note: "Tang, mất người, mất của.",
    subs: ["Tử biệt", "Thoái khẩu", "Ly hương", "Thất tài"].map((name) => ({ name })),
  },
  {
    name: "Hại", good: false, note: "Tai họa, bệnh, khẩu thiệt.",
    subs: ["Họa chí", "Tử tuyệt", "Lâm bệnh", "Khẩu thiệt"].map((name) => ({ name })),
  },
  {
    name: "Bản", good: true, note: "Tiền đến, đỗ đạt, hưng vượng.",
    subs: ["Tài chí", "Đăng khoa", "Tiến bảo", "Hưng vượng"].map((name) => ({ name })),
  },
];

const grave: BigCung[] = [
  {
    name: "Đinh", good: true, note: "Con trai, phúc tinh, đỗ đạt.",
    subs: ["Phúc tinh", "Cập đệ", "Tài vượng", "Đăng khoa"].map((name) => ({ name })),
  },
  {
    name: "Hại", good: false, note: "Khẩu thiệt, bệnh, tai đến.",
    subs: ["Khẩu thiệt", "Bệnh lâm", "Tử tuyệt", "Tai chí"].map((name) => ({ name })),
  },
  {
    name: "Vượng", good: true, note: "Thiên đức, hỷ sự, tiến bảo.",
    subs: ["Thiên đức", "Hỷ sự", "Tiến bảo", "Nạp phúc"].map((name) => ({ name })),
  },
  {
    name: "Khổ", good: false, note: "Thất thoát, kiện tụng, vô tự.",
    subs: ["Thất thoát", "Quan quỷ", "Kiếp tài", "Vô tự"].map((name) => ({ name })),
  },
  {
    name: "Nghĩa", good: true, note: "Đại cát, lợi ích, thiên khố.",
    subs: ["Đại cát", "Tài vượng", "Ích lợi", "Thiên khố"].map((name) => ({ name })),
  },
  {
    name: "Quan", good: true, note: "Phú quý, hoạch tài, thuận khoa.",
    subs: ["Phú quý", "Tiến bảo", "Hoạch tài", "Thuận khoa"].map((name) => ({ name })),
  },
  {
    name: "Tử", good: false, note: "Ly hương, tử biệt, thoát đinh.",
    subs: ["Ly hương", "Tử biệt", "Thoái đinh", "Thất tài"].map((name) => ({ name })),
  },
  {
    name: "Hưng", good: true, note: "Đăng khoa, quý tử, hưng vượng.",
    subs: ["Đăng khoa", "Quý tử", "Thêm đinh", "Hưng vượng"].map((name) => ({ name })),
  },
  {
    name: "Thất", good: false, note: "Cô quả, lao chấp, thoát tài.",
    subs: ["Cô quả", "Lao chấp", "Công sự", "Thoát tài"].map((name) => ({ name })),
  },
  {
    name: "Tài", good: true, note: "Nghênh phúc, lục hợp, tài đức.",
    subs: ["Nghênh phúc", "Lục hợp", "Tiến bảo", "Tài đức"].map((name) => ({ name })),
  },
];

export const RULERS: Ruler[] = [
  {
    id: "thongthuy",
    title: "52,2 cm · Thông thủy",
    cycleLabel: "chu kỳ 520 mm",
    cycleMm: 520,
    use: "Khoảng không thông thủy: cửa đi, cửa sổ, giếng trời, chiều cao thông thủy.",
    cungs: door,
  },
  {
    id: "duong",
    title: "42,9 cm · Dương trạch",
    cycleLabel: "chu kỳ 429 mm",
    cycleMm: 429,
    use: "Khối đặc: bậc, bệ, bếp xây, kích thước phủ bì, đồ gỗ dương trạch.",
    cungs: solid,
  },
  {
    id: "am",
    title: "38,8 cm · Âm phần",
    cycleLabel: "chu kỳ 390 mm",
    cycleMm: 390,
    use: "Mộ, quách, tiểu, bàn thờ, khám thờ. Thước Đinh Lan, 10 cung.",
    cungs: grave,
  },
];

export type Measure = {
  mm: number;
  cyclePos: number;
  cung: BigCung;
  cungIndex: number;
  into: number;
  sub: SubCung | null;
  subIndex: number;
};

export function measure(ruler: Ruler, mm: number): Measure {
  const cycle = ruler.cycleMm;
  const x = ((mm % cycle) + cycle) % cycle;
  const w = cycle / ruler.cungs.length;
  let idx = Math.floor(x / w);
  if (idx >= ruler.cungs.length) idx = ruler.cungs.length - 1;
  const cung = ruler.cungs[idx]!;
  const into = x - idx * w;
  let sub: SubCung | null = null;
  let subIndex = -1;
  if (cung.subs.length) {
    const sw = w / cung.subs.length;
    subIndex = Math.min(cung.subs.length - 1, Math.floor(into / sw));
    sub = cung.subs[subIndex] ?? null;
  }
  return { mm, cyclePos: x, cung, cungIndex: idx, into, sub, subIndex };
}

export type GoodSize = { mm: number; label: string };

/** Tâm các cung/tiểu cung tốt, gần kích thước đang xét. */
export function nearbyGood(ruler: Ruler, mm: number, count = 8): GoodSize[] {
  const w = ruler.cycleMm / ruler.cungs.length;
  const found: GoodSize[] = [];
  const from = Math.max(0, mm - ruler.cycleMm * 2);
  const to = mm + ruler.cycleMm * 3;
  for (let base = Math.floor(from / ruler.cycleMm) * ruler.cycleMm; base < to; base += ruler.cycleMm) {
    ruler.cungs.forEach((cung, i) => {
      if (!cung.good) return;
      const parts = cung.subs.length || 1;
      const sw = w / parts;
      for (let s = 0; s < parts; s++) {
        const start = base + i * w + s * sw;
        const mid = Math.round(start + sw / 2);
        if (mid < 10 || Math.abs(mid - mm) < 1) continue;
        const label = cung.subs[s] ? `${cung.name} · ${cung.subs[s]!.name}` : cung.name;
        found.push({ mm: mid, label });
      }
    });
  }
  found.sort((a, b) => Math.abs(a.mm - mm) - Math.abs(b.mm - mm) || a.mm - b.mm);
  const uniq: GoodSize[] = [];
  for (const g of found) {
    if (uniq.some((u) => Math.abs(u.mm - g.mm) < 2)) continue;
    uniq.push(g);
    if (uniq.length >= count) break;
  }
  return uniq.sort((a, b) => a.mm - b.mm);
}

export function rulerById(id: Ruler["id"]): Ruler {
  return RULERS.find((r) => r.id === id) ?? RULERS[0]!;
}
