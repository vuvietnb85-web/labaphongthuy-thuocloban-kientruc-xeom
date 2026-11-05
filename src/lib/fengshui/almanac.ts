import { CHI, yearCanChi } from "./lunar.ts";
import { PALACES, type PalaceId } from "./luopan.ts";

/** Tam hợp cục → Tam Sát đóng ba sơn của một phương. */
const TAM_SAT: { chis: number[]; palace: PalaceId; mountains: string[]; label: string }[] = [
  { chis: [8, 0, 4], palace: "ly", mountains: ["Bính", "Ngọ", "Đinh"], label: "Nam" },
  { chis: [2, 6, 10], palace: "kham", mountains: ["Nhâm", "Tý", "Quý"], label: "Bắc" },
  { chis: [5, 9, 1], palace: "chan", mountains: ["Giáp", "Mão", "Ất"], label: "Đông" },
  { chis: [11, 3, 7], palace: "doai", mountains: ["Canh", "Dậu", "Tân"], label: "Tây" },
];

const FLIGHT_POS: ("trung" | PalaceId)[] = [
  "trung", "canNw", "doai", "can", "ly", "kham", "khon", "chan", "ton",
];

export function annualCenter(year: number): number {
  const delta = year - 2024;
  let c = 3 - (((delta % 9) + 9) % 9);
  c = ((c % 9) + 9) % 9;
  return c === 0 ? 9 : c;
}

export function flyingStars(year: number): { pos: (typeof FLIGHT_POS)[number]; star: number }[] {
  const center = annualCenter(year);
  return FLIGHT_POS.map((pos, i) => {
    let star = center + i;
    star = ((star - 1) % 9) + 1;
    return { pos, star };
  });
}

export function starOfPalace(year: number, palace: PalaceId): number {
  const row = flyingStars(year).find((r) => r.pos === palace);
  return row?.star ?? 0;
}

export function nguHoang(year: number): { pos: (typeof FLIGHT_POS)[number]; label: string } {
  const row = flyingStars(year).find((r) => r.star === 5);
  const pos = row?.pos ?? "trung";
  if (pos === "trung") return { pos, label: "Trung cung" };
  const p = PALACES.find((x) => x.id === pos);
  return { pos, label: p ? p.dir : "Trung cung" };
}

export type YearTaboo = {
  year: number;
  canChi: string;
  chi: number;
  thaiTue: string;
  tuePha: string;
  tamSatLabel: string;
  tamSatMountains: string[];
  tamSatPalace: PalaceId;
  nguHoangLabel: string;
  nguHoangPalace: PalaceId | "trung";
  centerStar: number;
};

export function yearTaboo(year: number): YearTaboo {
  const { can, chi } = yearCanChi(year);
  const CAN = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
  const group = TAM_SAT.find((g) => g.chis.includes(chi)) ?? TAM_SAT[0]!;
  const nh = nguHoang(year);
  const branchName = CHI[chi] ?? "Tý";
  const pha = CHI[(chi + 6) % 12] ?? "Ngọ";
  return {
    year,
    canChi: `${CAN[can]} ${branchName}`,
    chi,
    thaiTue: branchName,
    tuePha: pha,
    tamSatLabel: group.label,
    tamSatMountains: group.mountains,
    tamSatPalace: group.palace,
    nguHoangLabel: nh.label,
    nguHoangPalace: nh.pos,
    centerStar: annualCenter(year),
  };
}
