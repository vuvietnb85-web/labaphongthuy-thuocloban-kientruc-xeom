/** Lịch âm Việt Nam — thuật toán Hồ Ngọc Đức, múi giờ UTC+7. */

export const TZ = 7;

export const CAN = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"] as const;
export const CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"] as const;

export const NAP_AM = [
  "Hải trung kim", "Lư trung hỏa", "Đại lâm mộc", "Lộ bàng thổ", "Kiếm phong kim",
  "Sơn đầu hỏa", "Giản hạ thủy", "Thành đầu thổ", "Bạch lạp kim", "Dương liễu mộc",
  "Tuyền trung thủy", "Ốc thượng thổ", "Tích lịch hỏa", "Tùng bách mộc", "Trường lưu thủy",
  "Sa trung kim", "Sơn hạ hỏa", "Bình địa mộc", "Bích thượng thổ", "Kim bạc kim",
  "Phúc đăng hỏa", "Thiên hà thủy", "Đại dịch thổ", "Thoa xuyến kim", "Tang đố mộc",
  "Đại khê thủy", "Sa trung thổ", "Thiên thượng hỏa", "Thạch lựu mộc", "Đại hải thủy",
] as const;

const NAP_ELEMENT = [
  "kim", "hoa", "moc", "tho", "kim",
  "hoa", "thuy", "tho", "kim", "moc",
  "thuy", "tho", "hoa", "moc", "thuy",
  "kim", "hoa", "moc", "tho", "kim",
  "hoa", "thuy", "tho", "kim", "moc",
  "thuy", "tho", "hoa", "moc", "thuy",
] as const;

export const TRUC = [
  { name: "Kiến", hint: "Khởi sự được, an táng thì kỵ" },
  { name: "Trừ", hint: "Tốt trừ bệnh, dọn, chữa" },
  { name: "Mãn", hint: "Tốt cầu tài, kỵ kê đơn thuốc" },
  { name: "Bình", hint: "Việc nhỏ, ngày thường" },
  { name: "Định", hint: "Tốt cưới hỏi, ký kết" },
  { name: "Chấp", hint: "Tốt nhận việc, kỵ xuất hành xa" },
  { name: "Phá", hint: "Chỉ hợp phá dỡ" },
  { name: "Nguy", hint: "Kỵ leo cao, kỵ động thổ" },
  { name: "Thành", hint: "Rất tốt khai trương, nhập trạch" },
  { name: "Thu", hint: "Tốt thu của, nhập kho" },
  { name: "Khai", hint: "Rất tốt động thổ, khai môn" },
  { name: "Bế", hint: "Kỵ khai trương, hợp việc đóng" },
] as const;

/** Lục Diệu — 6 chi hoàng đạo theo cặp tháng âm. */
const HOANG: Record<number, number[]> = {
  1: [0, 1, 4, 5, 7, 10],
  2: [2, 3, 6, 7, 9, 0],
  3: [4, 5, 8, 9, 11, 2],
  4: [6, 7, 10, 11, 1, 4],
  5: [8, 9, 0, 1, 3, 6],
  6: [10, 11, 2, 3, 5, 8],
};

/** Giờ hoàng đạo theo địa chi ngày — 6 giờ. */
const HOUR_HOANG: Record<number, number[]> = {
  0: [0, 1, 3, 6, 8, 9],
  1: [2, 3, 5, 8, 10, 11],
  2: [0, 1, 4, 5, 7, 10],
  3: [2, 3, 6, 7, 9, 0],
  4: [4, 5, 8, 9, 11, 2],
  5: [6, 7, 10, 11, 1, 4],
};

export const TIET = [
  "Xuân phân", "Thanh minh", "Cốc vũ", "Lập hạ", "Tiểu mãn", "Mang chủng",
  "Hạ chí", "Tiểu thử", "Đại thử", "Lập thu", "Xử thử", "Bạch lộ",
  "Thu phân", "Hàn lộ", "Sương giáng", "Lập đông", "Tiểu tuyết", "Đại tuyết",
  "Đông chí", "Tiểu hàn", "Đại hàn", "Lập xuân", "Vũ thủy", "Kinh trập",
] as const;

const THU = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];

export type LunarDate = { day: number; month: number; year: number; leap: boolean };

export function jdFromDate(dd: number, mm: number, yy: number): number {
  const a = Math.floor((14 - mm) / 12);
  const y = yy + 4800 - a;
  const m = mm + 12 * a - 3;
  let jd = dd + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
  if (jd < 2299161) {
    jd = dd + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - 32083;
  }
  return jd;
}

function getNewMoonDay(k: number, timeZone: number): number {
  const T = k / 1236.85;
  const T2 = T * T;
  const T3 = T2 * T;
  const dr = Math.PI / 180;
  let Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
  Jd1 += 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr);
  const M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3;
  const Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3;
  const F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3;
  let C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * dr * M);
  C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr);
  C1 = C1 - 0.0004 * Math.sin(dr * 3 * Mpr);
  C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 0.0051 * Math.sin(dr * (M + Mpr));
  C1 = C1 - 0.0074 * Math.sin(dr * (M - Mpr)) + 0.0004 * Math.sin(dr * (2 * F + M));
  C1 = C1 - 0.0004 * Math.sin(dr * (2 * F - M)) - 0.0006 * Math.sin(dr * (2 * F + Mpr));
  C1 = C1 + 0.001 * Math.sin(dr * (2 * F - Mpr)) + 0.0005 * Math.sin(dr * (2 * Mpr + M));
  let deltat: number;
  if (T < -11) {
    deltat = 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3;
  } else {
    deltat = -0.000278 + 0.000265 * T + 0.000262 * T2;
  }
  const JdNew = Jd1 + C1 - deltat;
  return Math.floor(JdNew + 0.5 + timeZone / 24);
}

export function sunLongitude(jdn: number, timeZone: number): number {
  const T = (jdn - 2451545.5 - timeZone / 24) / 36525;
  const T2 = T * T;
  const dr = Math.PI / 180;
  const M = 357.5291 + 35999.0503 * T - 0.0001559 * T2 - 0.00000048 * T * T2;
  const L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2;
  let DL = (1.9146 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
  DL += (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.00029 * Math.sin(dr * 3 * M);
  let L = (L0 + DL) % 360;
  if (L < 0) L += 360;
  return L;
}

function getSunLongitudeSector(jdn: number, timeZone: number): number {
  return Math.floor((sunLongitude(jdn, timeZone) / 30));
}

function getLunarMonth11(yy: number, timeZone: number): number {
  const off = jdFromDate(31, 12, yy) - 2415021;
  const k = Math.floor(off / 29.530588853);
  let nm = getNewMoonDay(k, timeZone);
  const sunLong = getSunLongitudeSector(nm, timeZone);
  if (sunLong >= 9) nm = getNewMoonDay(k - 1, timeZone);
  return nm;
}

function getLeapMonthOffset(a11: number, timeZone: number): number {
  const k = Math.floor((a11 - 2415021.076998695) / 29.530588853 + 0.5);
  let last = 0;
  let i = 1;
  let arc = getSunLongitudeSector(getNewMoonDay(k + i, timeZone), timeZone);
  do {
    last = arc;
    i++;
    arc = getSunLongitudeSector(getNewMoonDay(k + i, timeZone), timeZone);
  } while (arc !== last && i < 14);
  return i - 1;
}

export function solarToLunar(dd: number, mm: number, yy: number, timeZone = TZ): LunarDate {
  const dayNumber = jdFromDate(dd, mm, yy);
  const k = Math.floor((dayNumber - 2415021.076998695) / 29.530588853);
  let monthStart = getNewMoonDay(k + 1, timeZone);
  if (monthStart > dayNumber) monthStart = getNewMoonDay(k, timeZone);
  let a11 = getLunarMonth11(yy, timeZone);
  let b11 = a11;
  let lunarYear: number;
  if (a11 >= monthStart) {
    lunarYear = yy;
    a11 = getLunarMonth11(yy - 1, timeZone);
  } else {
    lunarYear = yy + 1;
    b11 = getLunarMonth11(yy + 1, timeZone);
  }
  const lunarDay = dayNumber - monthStart + 1;
  const diff = Math.floor((monthStart - a11) / 29);
  let lunarLeap = false;
  let lunarMonth = diff + 11;
  if (b11 - a11 > 365) {
    const leapMonthDiff = getLeapMonthOffset(a11, timeZone);
    if (diff >= leapMonthDiff) {
      lunarMonth = diff + 10;
      if (diff === leapMonthDiff) lunarLeap = true;
    }
  }
  if (lunarMonth > 12) lunarMonth -= 12;
  if (lunarMonth >= 11 && diff < 4) lunarYear -= 1;
  return { day: lunarDay, month: lunarMonth, year: lunarYear, leap: lunarLeap };
}

export function dateToLunar(d: Date): LunarDate {
  return solarToLunar(d.getDate(), d.getMonth() + 1, d.getFullYear());
}

export function canChiIndex(jd: number): { can: number; chi: number } {
  return { can: (jd + 9) % 10, chi: (jd + 1) % 12 };
}

export function yearCanChi(year: number): { can: number; chi: number } {
  return { can: ((year - 4) % 10 + 10) % 10, chi: ((year - 4) % 12 + 12) % 12 };
}

/** Tháng âm 1 là Dần. Tháng nhuận dùng cùng chi với tháng thường. */
export function monthCanChi(lunarMonth: number, yearCan: number): { can: number; chi: number } {
  const chi = (lunarMonth + 1) % 12;
  const first = [2, 4, 6, 8, 0][yearCan % 5] ?? 0;
  const can = (first + lunarMonth - 1) % 10;
  return { can, chi };
}

export function hourBranch(d: Date): number {
  const h = d.getHours();
  if (h >= 23 || h < 1) return 0;
  return Math.floor((h + 1) / 2);
}

export function hourCan(dayCan: number, branch: number): number {
  const ty = [0, 2, 4, 6, 8][dayCan % 5] ?? 0;
  return (ty + branch) % 10;
}

export function sexagenary(can: number, chi: number): number {
  for (let i = 0; i < 60; i++) if (i % 10 === can && i % 12 === chi) return i;
  return 0;
}

export function napAm(can: number, chi: number): { name: string; element: (typeof NAP_ELEMENT)[number] } {
  const i = Math.floor(sexagenary(can, chi) / 2);
  return { name: NAP_AM[i] ?? NAP_AM[0], element: NAP_ELEMENT[i] ?? "tho" };
}

export function isHoangDao(lunarMonth: number, dayChi: number): boolean {
  const group = ((lunarMonth - 1) % 6) + 1;
  return (HOANG[group] ?? []).includes(dayChi);
}

export function hoangHours(dayChi: number): number[] {
  const key = dayChi % 6;
  return HOUR_HOANG[key] ?? HOUR_HOANG[0] ?? [];
}

export function tietIndex(lon: number): number {
  return Math.floor(wrap360(lon) / 15) % 24;
}

export function wrap360(d: number): number {
  return ((d % 360) + 360) % 360;
}

export function lapXuan(year: number): Date {
  for (let day = 1; day <= 8; day++) {
    const lon = sunLongitude(jdFromDate(day, 2, year), TZ);
    if (lon >= 315 && lon < 345) return new Date(year, 1, day);
  }
  return new Date(year, 1, 4);
}

/** Năm phi tinh / Lập Xuân: trước Lập Xuân vẫn thuộc năm trước. */
export function fengShuiYear(d: Date): number {
  const y = d.getFullYear();
  return d < lapXuan(y) ? y - 1 : y;
}

export function currentTiet(d: Date): { name: string; index: number; nextName: string; nextDate: Date } {
  const jd = jdFromDate(d.getDate(), d.getMonth() + 1, d.getFullYear());
  const index = tietIndex(sunLongitude(jd, TZ));
  let nextDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  for (let i = 1; i <= 20; i++) {
    const n = new Date(d.getFullYear(), d.getMonth(), d.getDate() + i);
    const ni = tietIndex(sunLongitude(jdFromDate(n.getDate(), n.getMonth() + 1, n.getFullYear()), TZ));
    if (ni !== index) {
      nextDate = n;
      return { name: TIET[index] ?? "", index, nextName: TIET[ni] ?? "", nextDate };
    }
  }
  const ni = (index + 1) % 24;
  return { name: TIET[index] ?? "", index, nextName: TIET[ni] ?? "", nextDate };
}

export function monthLabel(month: number, leap: boolean): string {
  const base = month === 1 ? "tháng Giêng" : month === 12 ? "tháng Chạp" : `tháng ${month}`;
  return leap ? `${base} nhuận` : base;
}

export function formatCanChi(can: number, chi: number): string {
  return `${CAN[can]} ${CHI[chi]}`;
}

const LUNAR_FEST: { m: number; d: number; name: string }[] = [
  { m: 1, d: 1, name: "Tết Nguyên Đán" },
  { m: 1, d: 15, name: "Rằm tháng Giêng" },
  { m: 3, d: 3, name: "Tết Hàn Thực" },
  { m: 3, d: 10, name: "Giỗ tổ Hùng Vương" },
  { m: 4, d: 15, name: "Phật Đản" },
  { m: 5, d: 5, name: "Tết Đoan Ngọ" },
  { m: 7, d: 15, name: "Vu Lan" },
  { m: 8, d: 15, name: "Tết Trung Thu" },
  { m: 9, d: 9, name: "Tết Trùng Cửu" },
  { m: 12, d: 23, name: "Ông Táo chầu trời" },
];

const SOLAR_FEST: { m: number; d: number; name: string }[] = [
  { m: 1, d: 1, name: "Tết dương lịch" },
  { m: 4, d: 30, name: "Ngày Giải phóng" },
  { m: 5, d: 1, name: "Quốc tế Lao động" },
  { m: 9, d: 2, name: "Quốc khánh" },
];

export type DayBrief = {
  solar: Date;
  lunar: LunarDate;
  thu: string;
  dayCan: number;
  dayChi: number;
  monthCan: number;
  monthChi: number;
  yearCan: number;
  yearChi: number;
  nap: { name: string; element: (typeof NAP_ELEMENT)[number] };
  hoang: boolean;
  truc: (typeof TRUC)[number];
  tiet: string;
  ky: string[];
  hourHoang: number[];
  fest: string[];
};

export function inspect(d: Date): DayBrief {
  const lunar = dateToLunar(d);
  const jd = jdFromDate(d.getDate(), d.getMonth() + 1, d.getFullYear());
  const day = canChiIndex(jd);
  const year = yearCanChi(lunar.year);
  const month = monthCanChi(lunar.month, year.can);
  const truc = TRUC[(day.chi - month.chi + 12) % 12] ?? TRUC[0];
  const ky: string[] = [];
  if ([3, 7, 13, 18, 22, 27].includes(lunar.day)) ky.push("Tam Nương");
  if ([5, 14, 23].includes(lunar.day)) ky.push("Nguyệt kỵ");
  if (lunar.day === 1) ky.push("Mùng một");
  if (lunar.day === 15) ky.push("Rằm");
  const fest: string[] = [];
  if (!lunar.leap) {
    for (const f of LUNAR_FEST) if (f.m === lunar.month && f.d === lunar.day) fest.push(f.name);
  }
  for (const f of SOLAR_FEST) if (f.m === d.getMonth() + 1 && f.d === d.getDate()) fest.push(f.name);
  return {
    solar: d,
    lunar,
    thu: THU[d.getDay()] ?? "",
    dayCan: day.can,
    dayChi: day.chi,
    monthCan: month.can,
    monthChi: month.chi,
    yearCan: year.can,
    yearChi: year.chi,
    nap: napAm(day.can, day.chi),
    hoang: isHoangDao(lunar.month, day.chi),
    truc,
    tiet: TIET[tietIndex(sunLongitude(jd, TZ))] ?? "",
    ky,
    hourHoang: hoangHours(day.chi),
    fest,
  };
}

export type Mark = { date: Date; name: string; days: number };

export function upcoming(from: Date, limit = 6): Mark[] {
  const out: Mark[] = [];
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  for (let i = 0; i <= 380 && out.length < limit; i++) {
    const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
    const info = inspect(d);
    for (const name of info.fest) {
      if (i === 0) continue;
      out.push({ date: d, name, days: i });
      if (out.length >= limit) break;
    }
  }
  const lx = lapXuan(from < lapXuan(from.getFullYear()) ? from.getFullYear() : from.getFullYear() + (from >= lapXuan(from.getFullYear()) ? 1 : 0));
  // next lập xuân strictly after today
  let nextLx = lapXuan(from.getFullYear());
  if (nextLx <= start) nextLx = lapXuan(from.getFullYear() + 1);
  const days = Math.round((nextLx.getTime() - start.getTime()) / 86400000);
  if (days > 0) out.push({ date: nextLx, name: "Lập Xuân", days });
  out.sort((a, b) => a.days - b.days);
  const seen = new Set<string>();
  return out.filter((m) => {
    const k = `${m.name}-${m.days}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  }).slice(0, limit);
}

export function clashes(chiA: number, chiB: number): boolean {
  return (chiA + 6) % 12 === chiB;
}

export function fateYear(birth: Date, mode: "tet" | "lapxuan"): number {
  if (mode === "lapxuan") {
    const y = birth.getFullYear();
    return birth < lapXuan(y) ? y - 1 : y;
  }
  return dateToLunar(birth).year;
}
