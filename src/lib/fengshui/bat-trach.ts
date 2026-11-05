import type { PalaceId } from "./luopan.ts";
import { PALACES } from "./luopan.ts";

export type StarId =
  | "sinhKhi"
  | "thienY"
  | "dienNien"
  | "phucVi"
  | "hoaHai"
  | "lucSat"
  | "nguQuy"
  | "tuyetMenh";

export type StarRank = "daiCat" | "cat" | "tieuCat" | "tieuHung" | "hung" | "daiHung";

export const STARS: Record<StarId, { name: string; rank: StarRank; brief: string }> = {
  sinhKhi: { name: "Sinh khí", rank: "daiCat", brief: "Đại cát. Cửa chính, phòng khách, chỗ làm việc." },
  thienY: { name: "Thiên y", rank: "cat", brief: "Cát. Bếp, giường người bệnh, chỗ dưỡng." },
  dienNien: { name: "Diên niên", rank: "cat", brief: "Cát. Phòng ngủ vợ chồng, bàn thờ, hòa khí." },
  phucVi: { name: "Phục vị", rank: "tieuCat", brief: "Tiểu cát. Phòng ngủ, chỗ nghỉ, tĩnh." },
  hoaHai: { name: "Họa hại", rank: "tieuHung", brief: "Tiểu hung. Tránh cửa và giường." },
  lucSat: { name: "Lục sát", rank: "hung", brief: "Hung. Tránh bếp, tránh giường." },
  nguQuy: { name: "Ngũ quỷ", rank: "hung", brief: "Hung. Tránh cửa, tránh bếp." },
  tuyetMenh: { name: "Tuyệt mệnh", rank: "daiHung", brief: "Đại hung. Chỉ nên WC, kho, chỗ thoát." },
};

/** Hướng theo thứ tự: Bắc, ĐB, Đông, ĐN, Nam, TN, Tây, TB. */
const TABLE: Record<number, StarId[]> = {
  1: ["phucVi", "lucSat", "thienY", "sinhKhi", "dienNien", "tuyetMenh", "hoaHai", "nguQuy"],
  2: ["tuyetMenh", "thienY", "nguQuy", "lucSat", "hoaHai", "phucVi", "dienNien", "sinhKhi"],
  3: ["dienNien", "tuyetMenh", "phucVi", "thienY", "sinhKhi", "nguQuy", "lucSat", "hoaHai"],
  4: ["sinhKhi", "hoaHai", "dienNien", "phucVi", "thienY", "lucSat", "nguQuy", "tuyetMenh"],
  6: ["lucSat", "dienNien", "hoaHai", "tuyetMenh", "nguQuy", "thienY", "sinhKhi", "phucVi"],
  7: ["nguQuy", "sinhKhi", "lucSat", "hoaHai", "tuyetMenh", "dienNien", "phucVi", "thienY"],
  8: ["hoaHai", "phucVi", "tuyetMenh", "nguQuy", "lucSat", "sinhKhi", "thienY", "dienNien"],
  9: ["thienY", "nguQuy", "sinhKhi", "dienNien", "phucVi", "hoaHai", "tuyetMenh", "lucSat"],
};

export type KuaInfo = {
  kua: number;
  name: string;
  han: string;
  element: "thuy" | "tho" | "moc" | "hoa" | "kim";
  group: "dong" | "tay";
  groupLabel: string;
};

const KUA_META: Record<number, Omit<KuaInfo, "kua">> = {
  1: { name: "Khảm", han: "坎", element: "thuy", group: "dong", groupLabel: "Đông tứ mệnh" },
  2: { name: "Khôn", han: "坤", element: "tho", group: "tay", groupLabel: "Tây tứ mệnh" },
  3: { name: "Chấn", han: "震", element: "moc", group: "dong", groupLabel: "Đông tứ mệnh" },
  4: { name: "Tốn", han: "巽", element: "moc", group: "dong", groupLabel: "Đông tứ mệnh" },
  6: { name: "Càn", han: "乾", element: "kim", group: "tay", groupLabel: "Tây tứ mệnh" },
  7: { name: "Đoài", han: "兌", element: "kim", group: "tay", groupLabel: "Tây tứ mệnh" },
  8: { name: "Cấn", han: "艮", element: "tho", group: "tay", groupLabel: "Tây tứ mệnh" },
  9: { name: "Ly", han: "離", element: "hoa", group: "dong", groupLabel: "Đông tứ mệnh" },
};

function reduce(n: number): number {
  let x = Math.abs(n) % 100;
  x = Math.floor(x / 10) + (x % 10);
  while (x > 9) x = Math.floor(x / 10) + (x % 10);
  return x;
}

/** Mệnh quái Bát Trạch. Năm âm lịch. Công thức phổ thông cho 1900–2099. Quẻ 5: nam→2, nữ→8. */
export function kuaOf(lunarYear: number, gender: "nam" | "nu"): KuaInfo {
  const sum = reduce(lunarYear);
  let kua = lunarYear >= 2000
    ? gender === "nam" ? 9 - sum : sum + 6
    : gender === "nam" ? 10 - sum : sum + 5;
  while (kua > 9) kua -= 9;
  if (kua <= 0) kua += 9;
  if (kua === 5) kua = gender === "nam" ? 2 : 8;
  const meta = KUA_META[kua] ?? KUA_META[1]!;
  return { kua, ...meta };
}

export function starAt(kua: number, palace: PalaceId): StarId {
  const row = TABLE[kua] ?? TABLE[1]!;
  const idx = PALACES.findIndex((p) => p.id === palace);
  return row[idx] ?? "phucVi";
}

export function chart(kua: number): { palace: (typeof PALACES)[number]; star: StarId }[] {
  return PALACES.map((palace) => ({ palace, star: starAt(kua, palace.id) }));
}

export function palacesWith(kua: number, stars: StarId[]): PalaceId[] {
  return chart(kua).filter((c) => stars.includes(c.star)).map((c) => c.palace.id);
}

export function goodRank(rank: StarRank): boolean {
  return rank === "daiCat" || rank === "cat" || rank === "tieuCat";
}
