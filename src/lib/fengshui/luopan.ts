import { wrap360 } from "./lunar.ts";

export type Element = "kim" | "moc" | "thuy" | "hoa" | "tho";

export const ELEMENT_NAME: Record<Element, string> = {
  kim: "Kim",
  moc: "Mộc",
  thuy: "Thủy",
  hoa: "Hỏa",
  tho: "Thổ",
};

export type PalaceId = "kham" | "can" | "chan" | "ton" | "ly" | "khon" | "doai" | "canNw";

export type Palace = {
  id: PalaceId;
  name: string;
  han: string;
  element: Element;
  dir: string;
  short: string;
  center: number;
};

export const PALACES: Palace[] = [
  { id: "kham", name: "Khảm", han: "坎", element: "thuy", dir: "Bắc", short: "Bắc", center: 0 },
  { id: "can", name: "Cấn", han: "艮", element: "tho", dir: "Đông Bắc", short: "ĐB", center: 45 },
  { id: "chan", name: "Chấn", han: "震", element: "moc", dir: "Đông", short: "Đông", center: 90 },
  { id: "ton", name: "Tốn", han: "巽", element: "moc", dir: "Đông Nam", short: "ĐN", center: 135 },
  { id: "ly", name: "Ly", han: "離", element: "hoa", dir: "Nam", short: "Nam", center: 180 },
  { id: "khon", name: "Khôn", han: "坤", element: "tho", dir: "Tây Nam", short: "TN", center: 225 },
  { id: "doai", name: "Đoài", han: "兌", element: "kim", dir: "Tây", short: "Tây", center: 270 },
  { id: "canNw", name: "Càn", han: "乾", element: "kim", dir: "Tây Bắc", short: "TB", center: 315 },
];

export type Mountain = {
  name: string;
  han: string;
  center: number;
  element: Element;
  yang: boolean;
  palace: PalaceId;
};

/** 24 sơn, chính ngũ hành, chiều kim đồng hồ từ Nhâm. Tâm mỗi sơn cách nhau 15°. */
export const MOUNTAINS: Mountain[] = [
  { name: "Nhâm", han: "壬", center: 345, element: "thuy", yang: true, palace: "kham" },
  { name: "Tý", han: "子", center: 0, element: "thuy", yang: true, palace: "kham" },
  { name: "Quý", han: "癸", center: 15, element: "thuy", yang: false, palace: "kham" },
  { name: "Sửu", han: "丑", center: 30, element: "tho", yang: false, palace: "can" },
  { name: "Cấn", han: "艮", center: 45, element: "tho", yang: true, palace: "can" },
  { name: "Dần", han: "寅", center: 60, element: "moc", yang: true, palace: "can" },
  { name: "Giáp", han: "甲", center: 75, element: "moc", yang: true, palace: "chan" },
  { name: "Mão", han: "卯", center: 90, element: "moc", yang: false, palace: "chan" },
  { name: "Ất", han: "乙", center: 105, element: "moc", yang: false, palace: "chan" },
  { name: "Thìn", han: "辰", center: 120, element: "tho", yang: true, palace: "ton" },
  { name: "Tốn", han: "巽", center: 135, element: "moc", yang: false, palace: "ton" },
  { name: "Tỵ", han: "巳", center: 150, element: "hoa", yang: false, palace: "ton" },
  { name: "Bính", han: "丙", center: 165, element: "hoa", yang: true, palace: "ly" },
  { name: "Ngọ", han: "午", center: 180, element: "hoa", yang: true, palace: "ly" },
  { name: "Đinh", han: "丁", center: 195, element: "hoa", yang: false, palace: "ly" },
  { name: "Mùi", han: "未", center: 210, element: "tho", yang: false, palace: "khon" },
  { name: "Khôn", han: "坤", center: 225, element: "tho", yang: false, palace: "khon" },
  { name: "Thân", han: "申", center: 240, element: "kim", yang: true, palace: "khon" },
  { name: "Canh", han: "庚", center: 255, element: "kim", yang: true, palace: "doai" },
  { name: "Dậu", han: "酉", center: 270, element: "kim", yang: false, palace: "doai" },
  { name: "Tân", han: "辛", center: 285, element: "kim", yang: false, palace: "doai" },
  { name: "Tuất", han: "戌", center: 300, element: "tho", yang: true, palace: "canNw" },
  { name: "Càn", han: "乾", center: 315, element: "kim", yang: true, palace: "canNw" },
  { name: "Hợi", han: "亥", center: 330, element: "thuy", yang: false, palace: "canNw" },
];

export function angDiff(from: number, to: number): number {
  return ((to - from + 540) % 360) - 180;
}

export function mountainAt(deg: number): { mountain: Mountain; offset: number; seam: boolean } {
  const x = wrap360(deg);
  let best = MOUNTAINS[0]!;
  let bestAbs = 999;
  let offset = 0;
  for (const m of MOUNTAINS) {
    const d = angDiff(m.center, x);
    const a = Math.abs(d);
    if (a < bestAbs) {
      bestAbs = a;
      best = m;
      offset = d;
    }
  }
  return { mountain: best, offset, seam: bestAbs >= 6 };
}

export function oppositeMountain(m: Mountain): Mountain {
  return mountainAt(m.center + 180).mountain;
}

export function palaceById(id: PalaceId): Palace {
  return PALACES.find((p) => p.id === id) ?? PALACES[0]!;
}

export function palaceAt(deg: number): Palace {
  return palaceById(mountainAt(deg).mountain.palace);
}

const CYCLE: Element[] = ["moc", "hoa", "tho", "kim", "thuy"];

export function elementRel(a: Element, b: Element): { key: string; text: string } {
  if (a === b) return { key: "ty", text: `Đồng hành ${ELEMENT_NAME[a]}` };
  const ia = CYCLE.indexOf(a);
  const ib = CYCLE.indexOf(b);
  if ((ia + 1) % 5 === ib) return { key: "sinh", text: `${ELEMENT_NAME[a]} sinh ${ELEMENT_NAME[b]}` };
  if ((ib + 1) % 5 === ia) return { key: "duoc", text: `${ELEMENT_NAME[b]} sinh ${ELEMENT_NAME[a]}` };
  if ((ia + 2) % 5 === ib) return { key: "khac", text: `${ELEMENT_NAME[a]} khắc ${ELEMENT_NAME[b]}` };
  return { key: "bikhac", text: `${ELEMENT_NAME[b]} khắc ${ELEMENT_NAME[a]}` };
}

export const CITIES: { name: string; dec: number }[] = [
  { name: "Hà Nội", dec: -1.2 },
  { name: "Hải Phòng", dec: -1.8 },
  { name: "Huế", dec: -0.8 },
  { name: "Đà Nẵng", dec: -0.6 },
  { name: "Nha Trang", dec: -0.5 },
  { name: "TP.HCM", dec: -0.3 },
  { name: "Cần Thơ", dec: -0.2 },
  { name: "Cà Mau", dec: -0.1 },
];
