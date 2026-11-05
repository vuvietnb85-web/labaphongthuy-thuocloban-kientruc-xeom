import { solarToLunar, inspect, lapXuan, fengShuiYear } from "../src/lib/fengshui/lunar.ts";
import { kuaOf } from "../src/lib/fengshui/bat-trach.ts";
import { yearTaboo, annualCenter } from "../src/lib/fengshui/almanac.ts";
import { measure, rulerById } from "../src/lib/fengshui/loban.ts";
import { mountainAt } from "../src/lib/fengshui/luopan.ts";

const tet: [number, number, number, number][] = [
  [22, 1, 2023, 2023],
  [10, 2, 2024, 2024],
  [29, 1, 2025, 2025],
  [17, 2, 2026, 2026],
  [6, 2, 2027, 2027],
];
for (const [d, m, y, ly] of tet) {
  const r = solarToLunar(d, m, y);
  console.log("TET", y, r, r.day === 1 && r.month === 1 && r.year === ly && !r.leap ? "OK" : "FAIL");
}
console.log("kua nam 1984", kuaOf(1984, "nam").kua, kuaOf(1984, "nam").name);
console.log("kua nu 1984", kuaOf(1984, "nu").kua);
console.log("kua nam 1990", kuaOf(1990, "nam").kua);
console.log("kua nu 1990", kuaOf(1990, "nu").kua);
console.log("kua nam 2000", kuaOf(2000, "nam").kua);
console.log("kua nam 2009", kuaOf(2009, "nam").kua);
console.log("center", 2024, annualCenter(2024), 2026, annualCenter(2026), 2027, annualCenter(2027));
console.log("taboo 2026", yearTaboo(2026));
console.log("Ngo", mountainAt(180).mountain.name, "offset", mountainAt(180).offset);
console.log("seam", mountainAt(7.4).mountain.name, mountainAt(7.4).seam, mountainAt(7.4).offset);
console.log("429", measure(rulerById("duong"), 900));
console.log("lapxuan 2026", lapXuan(2026).toDateString(), "fs", fengShuiYear(new Date(2026, 0, 20)), fengShuiYear(new Date(2026, 1, 20)));
const info = inspect(new Date(2026, 10, 5));
console.log("today sample", info.thu, info.lunar, info.dayCan, info.dayChi, info.hoang, info.truc.name, info.tiet);
