import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as LockOpen, i as Lock, n as Smartphone, r as Settings } from "../_libs/lucide-react.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-glRu7Yat.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var memory = {
	getItem: () => null,
	setItem: () => {},
	removeItem: () => {}
};
var useStudio = create()(persist((set) => ({
	mode: "laban",
	magnetic: 180,
	useTrue: false,
	declination: -1.2,
	gender: "nam",
	birth: "",
	yearMode: "tet",
	workYear: null,
	rulerId: "thongthuy",
	mm: 900,
	aim: "cua",
	job: "Khảo sát",
	surveys: [],
	setMode: (mode) => set({ mode }),
	setMagnetic: (magnetic) => set({ magnetic }),
	patch: (p) => set(p),
	addSurvey: (item) => set((s) => ({ surveys: [item, ...s.surveys].slice(0, 30) })),
	removeSurvey: (id) => set((s) => ({ surveys: s.surveys.filter((x) => x.id !== id) }))
}), {
	name: "laban-phuong-dong",
	storage: createJSONStorage(() => typeof window === "undefined" ? memory : localStorage)
}));
var CAN = [
	"Giáp",
	"Ất",
	"Bính",
	"Đinh",
	"Mậu",
	"Kỷ",
	"Canh",
	"Tân",
	"Nhâm",
	"Quý"
];
var CHI = [
	"Tý",
	"Sửu",
	"Dần",
	"Mão",
	"Thìn",
	"Tỵ",
	"Ngọ",
	"Mùi",
	"Thân",
	"Dậu",
	"Tuất",
	"Hợi"
];
var NAP_AM = [
	"Hải trung kim",
	"Lư trung hỏa",
	"Đại lâm mộc",
	"Lộ bàng thổ",
	"Kiếm phong kim",
	"Sơn đầu hỏa",
	"Giản hạ thủy",
	"Thành đầu thổ",
	"Bạch lạp kim",
	"Dương liễu mộc",
	"Tuyền trung thủy",
	"Ốc thượng thổ",
	"Tích lịch hỏa",
	"Tùng bách mộc",
	"Trường lưu thủy",
	"Sa trung kim",
	"Sơn hạ hỏa",
	"Bình địa mộc",
	"Bích thượng thổ",
	"Kim bạc kim",
	"Phúc đăng hỏa",
	"Thiên hà thủy",
	"Đại dịch thổ",
	"Thoa xuyến kim",
	"Tang đố mộc",
	"Đại khê thủy",
	"Sa trung thổ",
	"Thiên thượng hỏa",
	"Thạch lựu mộc",
	"Đại hải thủy"
];
var NAP_ELEMENT = [
	"kim",
	"hoa",
	"moc",
	"tho",
	"kim",
	"hoa",
	"thuy",
	"tho",
	"kim",
	"moc",
	"thuy",
	"tho",
	"hoa",
	"moc",
	"thuy",
	"kim",
	"hoa",
	"moc",
	"tho",
	"kim",
	"hoa",
	"thuy",
	"tho",
	"kim",
	"moc",
	"thuy",
	"tho",
	"hoa",
	"moc",
	"thuy"
];
var TRUC = [
	{
		name: "Kiến",
		hint: "Khởi sự được, an táng thì kỵ"
	},
	{
		name: "Trừ",
		hint: "Tốt trừ bệnh, dọn, chữa"
	},
	{
		name: "Mãn",
		hint: "Tốt cầu tài, kỵ kê đơn thuốc"
	},
	{
		name: "Bình",
		hint: "Việc nhỏ, ngày thường"
	},
	{
		name: "Định",
		hint: "Tốt cưới hỏi, ký kết"
	},
	{
		name: "Chấp",
		hint: "Tốt nhận việc, kỵ xuất hành xa"
	},
	{
		name: "Phá",
		hint: "Chỉ hợp phá dỡ"
	},
	{
		name: "Nguy",
		hint: "Kỵ leo cao, kỵ động thổ"
	},
	{
		name: "Thành",
		hint: "Rất tốt khai trương, nhập trạch"
	},
	{
		name: "Thu",
		hint: "Tốt thu của, nhập kho"
	},
	{
		name: "Khai",
		hint: "Rất tốt động thổ, khai môn"
	},
	{
		name: "Bế",
		hint: "Kỵ khai trương, hợp việc đóng"
	}
];
/** Lục Diệu — 6 chi hoàng đạo theo cặp tháng âm. */
var HOANG = {
	1: [
		0,
		1,
		4,
		5,
		7,
		10
	],
	2: [
		2,
		3,
		6,
		7,
		9,
		0
	],
	3: [
		4,
		5,
		8,
		9,
		11,
		2
	],
	4: [
		6,
		7,
		10,
		11,
		1,
		4
	],
	5: [
		8,
		9,
		0,
		1,
		3,
		6
	],
	6: [
		10,
		11,
		2,
		3,
		5,
		8
	]
};
/** Giờ hoàng đạo theo địa chi ngày — 6 giờ. */
var HOUR_HOANG = {
	0: [
		0,
		1,
		3,
		6,
		8,
		9
	],
	1: [
		2,
		3,
		5,
		8,
		10,
		11
	],
	2: [
		0,
		1,
		4,
		5,
		7,
		10
	],
	3: [
		2,
		3,
		6,
		7,
		9,
		0
	],
	4: [
		4,
		5,
		8,
		9,
		11,
		2
	],
	5: [
		6,
		7,
		10,
		11,
		1,
		4
	]
};
var TIET = [
	"Xuân phân",
	"Thanh minh",
	"Cốc vũ",
	"Lập hạ",
	"Tiểu mãn",
	"Mang chủng",
	"Hạ chí",
	"Tiểu thử",
	"Đại thử",
	"Lập thu",
	"Xử thử",
	"Bạch lộ",
	"Thu phân",
	"Hàn lộ",
	"Sương giáng",
	"Lập đông",
	"Tiểu tuyết",
	"Đại tuyết",
	"Đông chí",
	"Tiểu hàn",
	"Đại hàn",
	"Lập xuân",
	"Vũ thủy",
	"Kinh trập"
];
var THU = [
	"Chủ nhật",
	"Thứ hai",
	"Thứ ba",
	"Thứ tư",
	"Thứ năm",
	"Thứ sáu",
	"Thứ bảy"
];
function jdFromDate(dd, mm, yy) {
	const a = Math.floor((14 - mm) / 12);
	const y = yy + 4800 - a;
	const m = mm + 12 * a - 3;
	let jd = dd + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
	if (jd < 2299161) jd = dd + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - 32083;
	return jd;
}
function getNewMoonDay(k, timeZone) {
	const T = k / 1236.85;
	const T2 = T * T;
	const T3 = T2 * T;
	const dr = Math.PI / 180;
	let Jd1 = 2415020.75933 + 29.53058868 * k + 1178e-7 * T2 - 155e-9 * T3;
	Jd1 += 33e-5 * Math.sin((166.56 + 132.87 * T - .009173 * T2) * dr);
	const M = 359.2242 + 29.10535608 * k - 333e-7 * T2 - 347e-8 * T3;
	const Mpr = 306.0253 + 385.81691806 * k + .0107306 * T2 + 1236e-8 * T3;
	const F = 21.2964 + 390.67050646 * k - .0016528 * T2 - 239e-8 * T3;
	let C1 = (.1734 - 393e-6 * T) * Math.sin(M * dr) + .0021 * Math.sin(2 * dr * M);
	C1 = C1 - .4068 * Math.sin(Mpr * dr) + .0161 * Math.sin(dr * 2 * Mpr);
	C1 = C1 - 4e-4 * Math.sin(dr * 3 * Mpr);
	C1 = C1 + .0104 * Math.sin(dr * 2 * F) - .0051 * Math.sin(dr * (M + Mpr));
	C1 = C1 - .0074 * Math.sin(dr * (M - Mpr)) + 4e-4 * Math.sin(dr * (2 * F + M));
	C1 = C1 - 4e-4 * Math.sin(dr * (2 * F - M)) - 6e-4 * Math.sin(dr * (2 * F + Mpr));
	C1 = C1 + .001 * Math.sin(dr * (2 * F - Mpr)) + 5e-4 * Math.sin(dr * (2 * Mpr + M));
	let deltat;
	if (T < -11) deltat = .001 + 839e-6 * T + 2261e-7 * T2 - 845e-8 * T3 - 81e-9 * T * T3;
	else deltat = -278e-6 + 265e-6 * T + 262e-6 * T2;
	const JdNew = Jd1 + C1 - deltat;
	return Math.floor(JdNew + .5 + timeZone / 24);
}
function sunLongitude(jdn, timeZone) {
	const T = (jdn - 2451545.5 - timeZone / 24) / 36525;
	const T2 = T * T;
	const dr = Math.PI / 180;
	const M = 357.5291 + 35999.0503 * T - 1559e-7 * T2 - 48e-8 * T * T2;
	const L0 = 280.46645 + 36000.76983 * T + 3032e-7 * T2;
	let DL = (1.9146 - .004817 * T - 14e-6 * T2) * Math.sin(dr * M);
	DL += (.019993 - 101e-6 * T) * Math.sin(dr * 2 * M) + 29e-5 * Math.sin(dr * 3 * M);
	let L = (L0 + DL) % 360;
	if (L < 0) L += 360;
	return L;
}
function getSunLongitudeSector(jdn, timeZone) {
	return Math.floor(sunLongitude(jdn, timeZone) / 30);
}
function getLunarMonth11(yy, timeZone) {
	const off = jdFromDate(31, 12, yy) - 2415021;
	const k = Math.floor(off / 29.530588853);
	let nm = getNewMoonDay(k, timeZone);
	if (getSunLongitudeSector(nm, timeZone) >= 9) nm = getNewMoonDay(k - 1, timeZone);
	return nm;
}
function getLeapMonthOffset(a11, timeZone) {
	const k = Math.floor((a11 - 2415021.076998695) / 29.530588853 + .5);
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
function solarToLunar(dd, mm, yy, timeZone = 7) {
	const dayNumber = jdFromDate(dd, mm, yy);
	const k = Math.floor((dayNumber - 2415021.076998695) / 29.530588853);
	let monthStart = getNewMoonDay(k + 1, timeZone);
	if (monthStart > dayNumber) monthStart = getNewMoonDay(k, timeZone);
	let a11 = getLunarMonth11(yy, timeZone);
	let b11 = a11;
	let lunarYear;
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
	return {
		day: lunarDay,
		month: lunarMonth,
		year: lunarYear,
		leap: lunarLeap
	};
}
function dateToLunar(d) {
	return solarToLunar(d.getDate(), d.getMonth() + 1, d.getFullYear());
}
function canChiIndex(jd) {
	return {
		can: (jd + 9) % 10,
		chi: (jd + 1) % 12
	};
}
function yearCanChi(year) {
	return {
		can: ((year - 4) % 10 + 10) % 10,
		chi: ((year - 4) % 12 + 12) % 12
	};
}
/** Tháng âm 1 là Dần. Tháng nhuận dùng cùng chi với tháng thường. */
function monthCanChi(lunarMonth, yearCan) {
	const chi = (lunarMonth + 1) % 12;
	return {
		can: (([
			2,
			4,
			6,
			8,
			0
		][yearCan % 5] ?? 0) + lunarMonth - 1) % 10,
		chi
	};
}
function sexagenary(can, chi) {
	for (let i = 0; i < 60; i++) if (i % 10 === can && i % 12 === chi) return i;
	return 0;
}
function napAm(can, chi) {
	const i = Math.floor(sexagenary(can, chi) / 2);
	return {
		name: NAP_AM[i] ?? NAP_AM[0],
		element: NAP_ELEMENT[i] ?? "tho"
	};
}
function isHoangDao(lunarMonth, dayChi) {
	return (HOANG[(lunarMonth - 1) % 6 + 1] ?? []).includes(dayChi);
}
function hoangHours(dayChi) {
	return HOUR_HOANG[dayChi % 6] ?? HOUR_HOANG[0] ?? [];
}
function tietIndex(lon) {
	return Math.floor(wrap360(lon) / 15) % 24;
}
function wrap360(d) {
	return (d % 360 + 360) % 360;
}
function lapXuan(year) {
	for (let day = 1; day <= 8; day++) {
		const lon = sunLongitude(jdFromDate(day, 2, year), 7);
		if (lon >= 315 && lon < 345) return new Date(year, 1, day);
	}
	return new Date(year, 1, 4);
}
/** Năm phi tinh / Lập Xuân: trước Lập Xuân vẫn thuộc năm trước. */
function fengShuiYear(d) {
	const y = d.getFullYear();
	return d < lapXuan(y) ? y - 1 : y;
}
function monthLabel(month, leap) {
	const base = month === 1 ? "tháng Giêng" : month === 12 ? "tháng Chạp" : `tháng ${month}`;
	return leap ? `${base} nhuận` : base;
}
function formatCanChi(can, chi) {
	return `${CAN[can]} ${CHI[chi]}`;
}
var LUNAR_FEST = [
	{
		m: 1,
		d: 1,
		name: "Tết Nguyên Đán"
	},
	{
		m: 1,
		d: 15,
		name: "Rằm tháng Giêng"
	},
	{
		m: 3,
		d: 3,
		name: "Tết Hàn Thực"
	},
	{
		m: 3,
		d: 10,
		name: "Giỗ tổ Hùng Vương"
	},
	{
		m: 4,
		d: 15,
		name: "Phật Đản"
	},
	{
		m: 5,
		d: 5,
		name: "Tết Đoan Ngọ"
	},
	{
		m: 7,
		d: 15,
		name: "Vu Lan"
	},
	{
		m: 8,
		d: 15,
		name: "Tết Trung Thu"
	},
	{
		m: 9,
		d: 9,
		name: "Tết Trùng Cửu"
	},
	{
		m: 12,
		d: 23,
		name: "Ông Táo chầu trời"
	}
];
var SOLAR_FEST = [
	{
		m: 1,
		d: 1,
		name: "Tết dương lịch"
	},
	{
		m: 4,
		d: 30,
		name: "Ngày Giải phóng"
	},
	{
		m: 5,
		d: 1,
		name: "Quốc tế Lao động"
	},
	{
		m: 9,
		d: 2,
		name: "Quốc khánh"
	}
];
function inspect(d) {
	const lunar = dateToLunar(d);
	const jd = jdFromDate(d.getDate(), d.getMonth() + 1, d.getFullYear());
	const day = canChiIndex(jd);
	const year = yearCanChi(lunar.year);
	const month = monthCanChi(lunar.month, year.can);
	const truc = TRUC[(day.chi - month.chi + 12) % 12] ?? TRUC[0];
	const ky = [];
	if ([
		3,
		7,
		13,
		18,
		22,
		27
	].includes(lunar.day)) ky.push("Tam Nương");
	if ([
		5,
		14,
		23
	].includes(lunar.day)) ky.push("Nguyệt kỵ");
	if (lunar.day === 1) ky.push("Mùng một");
	if (lunar.day === 15) ky.push("Rằm");
	const fest = [];
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
		tiet: TIET[tietIndex(sunLongitude(jd, 7))] ?? "",
		ky,
		hourHoang: hoangHours(day.chi),
		fest
	};
}
function upcoming(from, limit = 6) {
	const out = [];
	const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
	for (let i = 0; i <= 380 && out.length < limit; i++) {
		const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
		const info = inspect(d);
		for (const name of info.fest) {
			if (i === 0) continue;
			out.push({
				date: d,
				name,
				days: i
			});
			if (out.length >= limit) break;
		}
	}
	lapXuan(from < lapXuan(from.getFullYear()) ? from.getFullYear() : from.getFullYear() + (from >= lapXuan(from.getFullYear()) ? 1 : 0));
	let nextLx = lapXuan(from.getFullYear());
	if (nextLx <= start) nextLx = lapXuan(from.getFullYear() + 1);
	const days = Math.round((nextLx.getTime() - start.getTime()) / 864e5);
	if (days > 0) out.push({
		date: nextLx,
		name: "Lập Xuân",
		days
	});
	out.sort((a, b) => a.days - b.days);
	const seen = /* @__PURE__ */ new Set();
	return out.filter((m) => {
		const k = `${m.name}-${m.days}`;
		if (seen.has(k)) return false;
		seen.add(k);
		return true;
	}).slice(0, limit);
}
function clashes(chiA, chiB) {
	return (chiA + 6) % 12 === chiB;
}
function fateYear(birth, mode) {
	if (mode === "lapxuan") {
		const y = birth.getFullYear();
		return birth < lapXuan(y) ? y - 1 : y;
	}
	return dateToLunar(birth).year;
}
var ELEMENT_NAME = {
	kim: "Kim",
	moc: "Mộc",
	thuy: "Thủy",
	hoa: "Hỏa",
	tho: "Thổ"
};
var PALACES = [
	{
		id: "kham",
		name: "Khảm",
		han: "坎",
		element: "thuy",
		dir: "Bắc",
		short: "Bắc",
		center: 0
	},
	{
		id: "can",
		name: "Cấn",
		han: "艮",
		element: "tho",
		dir: "Đông Bắc",
		short: "ĐB",
		center: 45
	},
	{
		id: "chan",
		name: "Chấn",
		han: "震",
		element: "moc",
		dir: "Đông",
		short: "Đông",
		center: 90
	},
	{
		id: "ton",
		name: "Tốn",
		han: "巽",
		element: "moc",
		dir: "Đông Nam",
		short: "ĐN",
		center: 135
	},
	{
		id: "ly",
		name: "Ly",
		han: "離",
		element: "hoa",
		dir: "Nam",
		short: "Nam",
		center: 180
	},
	{
		id: "khon",
		name: "Khôn",
		han: "坤",
		element: "tho",
		dir: "Tây Nam",
		short: "TN",
		center: 225
	},
	{
		id: "doai",
		name: "Đoài",
		han: "兌",
		element: "kim",
		dir: "Tây",
		short: "Tây",
		center: 270
	},
	{
		id: "canNw",
		name: "Càn",
		han: "乾",
		element: "kim",
		dir: "Tây Bắc",
		short: "TB",
		center: 315
	}
];
/** 24 sơn, chính ngũ hành, chiều kim đồng hồ từ Nhâm. Tâm mỗi sơn cách nhau 15°. */
var MOUNTAINS = [
	{
		name: "Nhâm",
		han: "壬",
		center: 345,
		element: "thuy",
		yang: true,
		palace: "kham"
	},
	{
		name: "Tý",
		han: "子",
		center: 0,
		element: "thuy",
		yang: true,
		palace: "kham"
	},
	{
		name: "Quý",
		han: "癸",
		center: 15,
		element: "thuy",
		yang: false,
		palace: "kham"
	},
	{
		name: "Sửu",
		han: "丑",
		center: 30,
		element: "tho",
		yang: false,
		palace: "can"
	},
	{
		name: "Cấn",
		han: "艮",
		center: 45,
		element: "tho",
		yang: true,
		palace: "can"
	},
	{
		name: "Dần",
		han: "寅",
		center: 60,
		element: "moc",
		yang: true,
		palace: "can"
	},
	{
		name: "Giáp",
		han: "甲",
		center: 75,
		element: "moc",
		yang: true,
		palace: "chan"
	},
	{
		name: "Mão",
		han: "卯",
		center: 90,
		element: "moc",
		yang: false,
		palace: "chan"
	},
	{
		name: "Ất",
		han: "乙",
		center: 105,
		element: "moc",
		yang: false,
		palace: "chan"
	},
	{
		name: "Thìn",
		han: "辰",
		center: 120,
		element: "tho",
		yang: true,
		palace: "ton"
	},
	{
		name: "Tốn",
		han: "巽",
		center: 135,
		element: "moc",
		yang: false,
		palace: "ton"
	},
	{
		name: "Tỵ",
		han: "巳",
		center: 150,
		element: "hoa",
		yang: false,
		palace: "ton"
	},
	{
		name: "Bính",
		han: "丙",
		center: 165,
		element: "hoa",
		yang: true,
		palace: "ly"
	},
	{
		name: "Ngọ",
		han: "午",
		center: 180,
		element: "hoa",
		yang: true,
		palace: "ly"
	},
	{
		name: "Đinh",
		han: "丁",
		center: 195,
		element: "hoa",
		yang: false,
		palace: "ly"
	},
	{
		name: "Mùi",
		han: "未",
		center: 210,
		element: "tho",
		yang: false,
		palace: "khon"
	},
	{
		name: "Khôn",
		han: "坤",
		center: 225,
		element: "tho",
		yang: false,
		palace: "khon"
	},
	{
		name: "Thân",
		han: "申",
		center: 240,
		element: "kim",
		yang: true,
		palace: "khon"
	},
	{
		name: "Canh",
		han: "庚",
		center: 255,
		element: "kim",
		yang: true,
		palace: "doai"
	},
	{
		name: "Dậu",
		han: "酉",
		center: 270,
		element: "kim",
		yang: false,
		palace: "doai"
	},
	{
		name: "Tân",
		han: "辛",
		center: 285,
		element: "kim",
		yang: false,
		palace: "doai"
	},
	{
		name: "Tuất",
		han: "戌",
		center: 300,
		element: "tho",
		yang: true,
		palace: "canNw"
	},
	{
		name: "Càn",
		han: "乾",
		center: 315,
		element: "kim",
		yang: true,
		palace: "canNw"
	},
	{
		name: "Hợi",
		han: "亥",
		center: 330,
		element: "thuy",
		yang: false,
		palace: "canNw"
	}
];
function angDiff(from, to) {
	return (to - from + 540) % 360 - 180;
}
function mountainAt(deg) {
	const x = wrap360(deg);
	let best = MOUNTAINS[0];
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
	return {
		mountain: best,
		offset,
		seam: bestAbs >= 6
	};
}
function oppositeMountain(m) {
	return mountainAt(m.center + 180).mountain;
}
function palaceById(id) {
	return PALACES.find((p) => p.id === id) ?? PALACES[0];
}
function palaceAt(deg) {
	return palaceById(mountainAt(deg).mountain.palace);
}
var CYCLE = [
	"moc",
	"hoa",
	"tho",
	"kim",
	"thuy"
];
function elementRel(a, b) {
	if (a === b) return {
		key: "ty",
		text: `Đồng hành ${ELEMENT_NAME[a]}`
	};
	const ia = CYCLE.indexOf(a);
	const ib = CYCLE.indexOf(b);
	if ((ia + 1) % 5 === ib) return {
		key: "sinh",
		text: `${ELEMENT_NAME[a]} sinh ${ELEMENT_NAME[b]}`
	};
	if ((ib + 1) % 5 === ia) return {
		key: "duoc",
		text: `${ELEMENT_NAME[b]} sinh ${ELEMENT_NAME[a]}`
	};
	if ((ia + 2) % 5 === ib) return {
		key: "khac",
		text: `${ELEMENT_NAME[a]} khắc ${ELEMENT_NAME[b]}`
	};
	return {
		key: "bikhac",
		text: `${ELEMENT_NAME[b]} khắc ${ELEMENT_NAME[a]}`
	};
}
var CITIES = [
	{
		name: "Hà Nội",
		dec: -1.2
	},
	{
		name: "Hải Phòng",
		dec: -1.8
	},
	{
		name: "Huế",
		dec: -.8
	},
	{
		name: "Đà Nẵng",
		dec: -.6
	},
	{
		name: "Nha Trang",
		dec: -.5
	},
	{
		name: "TP.HCM",
		dec: -.3
	},
	{
		name: "Cần Thơ",
		dec: -.2
	},
	{
		name: "Cà Mau",
		dec: -.1
	}
];
var INK = {
	kim: "var(--color-kim)",
	moc: "var(--color-moc)",
	thuy: "var(--color-thuy)",
	hoa: "var(--color-hoa)",
	tho: "var(--color-tho)"
};
var TRIGRAM = {
	canNw: [
		1,
		1,
		1
	],
	doai: [
		0,
		1,
		1
	],
	ly: [
		1,
		0,
		1
	],
	chan: [
		0,
		0,
		1
	],
	ton: [
		1,
		1,
		0
	],
	kham: [
		0,
		1,
		0
	],
	can: [
		1,
		0,
		0
	],
	khon: [
		0,
		0,
		0
	]
};
function sector(r0, r1, a0, a1) {
	const p = (r, a) => {
		const rad = (a - 90) * Math.PI / 180;
		return [100 + r * Math.cos(rad), 100 + r * Math.sin(rad)];
	};
	const large = a1 - a0 > 180 ? 1 : 0;
	const [x0, y0] = p(r1, a0);
	const [x1, y1] = p(r1, a1);
	const [x2, y2] = p(r0, a1);
	const [x3, y3] = p(r0, a0);
	return `M ${x0} ${y0} A ${r1} ${r1} 0 ${large} 1 ${x1} ${y1} L ${x2} ${y2} A ${r0} ${r0} 0 ${large} 0 ${x3} ${y3} Z`;
}
function screenAngle(e, el) {
	const box = el.getBoundingClientRect();
	const x = e.clientX - (box.left + box.width / 2);
	const y = e.clientY - (box.top + box.height / 2);
	return wrap360(Math.atan2(x, -y) * 180 / Math.PI);
}
function LuopanDial({ heading, onHeading }) {
	const ref = (0, import_react.useRef)(null);
	const drag = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		ref,
		viewBox: "0 0 200 200",
		className: "h-full max-h-full w-auto touch-none select-none",
		role: "img",
		"aria-label": "La bàn 24 sơn",
		onPointerDown: (e) => {
			if (!onHeading || !ref.current) return;
			ref.current.setPointerCapture(e.pointerId);
			drag.current = {
				a: screenAngle(e, ref.current),
				h: heading
			};
		},
		onPointerMove: (e) => {
			if (!drag.current || !ref.current || !onHeading) return;
			const delta = (screenAngle(e, ref.current) - drag.current.a + 540) % 360 - 180;
			onHeading(wrap360(drag.current.h - delta));
		},
		onPointerUp: () => {
			drag.current = null;
		},
		onPointerCancel: () => {
			drag.current = null;
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "100",
				r: "98",
				fill: "var(--color-navy)",
				stroke: "var(--color-gold)",
				strokeWidth: "0.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "100",
				r: "96",
				fill: "none",
				stroke: "var(--color-gold)",
				strokeWidth: "0.25",
				opacity: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: `rotate(${-heading} 100 100)`,
				children: [
					MOUNTAINS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: sector(64, 90, m.center - 7.5, m.center + 7.5),
						fill: INK[m.element],
						stroke: "var(--color-ink)",
						strokeWidth: "0.35"
					}, m.name)),
					MOUNTAINS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
						transform: `rotate(${m.center} 100 100)`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "100",
							y: "23",
							textAnchor: "middle",
							dominantBaseline: "middle",
							fill: "var(--color-ivory)",
							fontSize: "5.5",
							fontWeight: "650",
							style: { fontFamily: "var(--font-sans)" },
							children: m.name
						})
					}, `t-${m.name}`)),
					PALACES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
						transform: `rotate(${p.center} 100 100)`,
						children: TRIGRAM[p.id].map((bit, i) => {
							const y = 48 + i * 3.1;
							const stroke = "var(--color-gold-2)";
							if (bit) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "94.5",
								x2: "105.5",
								y1: y,
								y2: y,
								stroke,
								strokeWidth: "0.9"
							}, i);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "94.5",
								x2: "98.6",
								y1: y,
								y2: y,
								stroke,
								strokeWidth: "0.9"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "101.4",
								x2: "105.5",
								y1: y,
								y2: y,
								stroke,
								strokeWidth: "0.9"
							})] }, i);
						})
					}, p.id)),
					Array.from({ length: 72 }, (_, i) => {
						const a = i * 5;
						const long = a % 15 === 0;
						const rad = (a - 90) * Math.PI / 180;
						const r0 = long ? 91 : 93;
						const r1 = 96;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: 100 + r0 * Math.cos(rad),
							y1: 100 + r0 * Math.sin(rad),
							x2: 100 + r1 * Math.cos(rad),
							y2: 100 + r1 * Math.sin(rad),
							stroke: "var(--color-gold)",
							strokeWidth: long ? .45 : .25,
							opacity: long ? .9 : .45
						}, a);
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "100",
				r: "40",
				fill: "var(--color-ink)",
				stroke: "var(--color-gold)",
				strokeWidth: "0.45"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "100",
				r: "36.5",
				fill: "none",
				stroke: "var(--color-gold)",
				strokeWidth: "0.2",
				opacity: "0.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "100,3 96.2,10 103.8,10",
				fill: "var(--color-cinnabar)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "100",
				y1: "12",
				x2: "100",
				y2: "58",
				stroke: "var(--color-cinnabar)",
				strokeWidth: "0.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "100",
				y1: "142",
				x2: "100",
				y2: "190",
				stroke: "var(--color-ivory)",
				strokeWidth: "0.35",
				opacity: "0.55"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "100",
				r: "1.3",
				fill: "var(--color-gold)"
			})
		]
	});
}
var WEEK = [
	"T2",
	"T3",
	"T4",
	"T5",
	"T6",
	"T7",
	"CN"
];
function sameDay(a, b) {
	return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function fmt(d) {
	return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
}
function LichView({ birth, yearMode }) {
	const today = (0, import_react.useMemo)(() => /* @__PURE__ */ new Date(), []);
	const [cursor, setCursor] = (0, import_react.useState)(() => new Date(today.getFullYear(), today.getMonth(), 1));
	const [picked, setPicked] = (0, import_react.useState)(() => today);
	const cells = (0, import_react.useMemo)(() => {
		const y = cursor.getFullYear();
		const m = cursor.getMonth();
		const lead = (new Date(y, m, 1).getDay() + 6) % 7;
		const count = new Date(y, m + 1, 0).getDate();
		const out = [];
		for (let i = 0; i < lead; i++) out.push(null);
		for (let d = 1; d <= count; d++) out.push(new Date(y, m, d));
		while (out.length % 7) out.push(null);
		return out;
	}, [cursor]);
	const info = (0, import_react.useMemo)(() => inspect(picked), [picked]);
	const marks = (0, import_react.useMemo)(() => upcoming(today, 5), [today]);
	const birthDate = (0, import_react.useMemo)(() => {
		if (!/^\d{4}-\d{2}-\d{2}$/.test(birth)) return null;
		const [y, m, d] = birth.split("-").map(Number);
		if (!y || !m || !d) return null;
		return new Date(y, m - 1, d, 12);
	}, [birth]);
	const birthChi = birthDate ? yearCanChi(fateYear(birthDate, yearMode)).chi : null;
	const lunarNow = dateToLunar(today);
	const ycc = yearCanChi(lunarNow.year);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-end justify-between gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-gold uppercase",
						children: "Âm dương lịch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-xl leading-tight text-ivory",
						children: [
							lunarNow.day,
							" ",
							monthLabel(lunarNow.month, lunarNow.leap)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							"Năm ",
							formatCanChi(ycc.can, ycc.chi),
							" · ",
							fmt(today)
						]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto pb-1",
				children: marks.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setPicked(m.date);
						setCursor(new Date(m.date.getFullYear(), m.date.getMonth(), 1));
					},
					className: "shrink-0 rounded-full border border-line bg-navy px-3 py-2 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block text-xs text-gold",
						children: [m.days, " ngày"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm text-ivory",
						children: m.name
					})]
				}, `${m.name}-${m.days}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bezel rounded-2xl bg-navy p-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-11 w-11 rounded-full text-gold",
							onClick: () => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1)),
							"aria-label": "Tháng trước",
							children: "‹"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-ivory",
							children: [
								"Tháng ",
								cursor.getMonth() + 1,
								" / ",
								cursor.getFullYear()
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-11 w-11 rounded-full text-gold",
							onClick: () => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1)),
							"aria-label": "Tháng sau",
							children: "›"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-7 gap-1 text-center text-xs text-muted",
					children: [WEEK.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "py-1",
						children: w
					}, w)), cells.map((d, i) => {
						if (!d) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}, `e-${i}`);
						const brief = inspect(d);
						const on = sameDay(d, picked);
						const isToday = sameDay(d, today);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setPicked(d),
							className: "flex min-h-11 flex-col items-center justify-center rounded-lg " + (on ? "bg-gold text-ink" : isToday ? "border border-gold text-ivory" : "text-ivory"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm leading-none tabular-nums",
								children: d.getDate()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "fine leading-none " + (on ? "text-ink" : brief.hoang ? "text-gold" : "text-muted"),
								children: [brief.lunar.day, brief.lunar.leap ? "n" : ""]
							})]
						}, d.toDateString());
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "bezel rounded-2xl bg-navy-2 p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-gold",
						children: [
							info.thu,
							" · ",
							fmt(info.solar)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-lg text-ivory",
						children: [
							info.lunar.day,
							" ",
							monthLabel(info.lunar.month, info.lunar.leap),
							" · ",
							formatCanChi(info.dayCan, info.dayChi)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							"Tháng ",
							formatCanChi(info.monthCan, info.monthChi),
							" · Năm ",
							formatCanChi(info.yearCan, info.yearChi)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-2 grid grid-cols-2 gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-muted",
								children: "Ngày"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: info.hoang ? "text-pine" : "text-cinnabar",
								children: info.hoang ? "Hoàng đạo" : "Hắc đạo"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-muted",
								children: "Trực"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-ivory",
								children: info.truc.name
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-muted",
								children: "Nạp âm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-ivory",
								children: info.nap.name
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-muted",
								children: "Tiết khí"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-ivory",
								children: info.tiet
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-ivory",
						children: info.truc.hint
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: ["Giờ hoàng đạo: ", info.hourHoang.map((h) => CHI[h]).join(" · ")]
					}),
					info.ky.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-cinnabar",
						children: ["Kỵ: ", info.ky.join(", ")]
					}),
					info.fest.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-gold",
						children: info.fest.join(" · ")
					}),
					birthChi != null && clashes(birthChi, info.dayChi) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-cinnabar",
						children: "Xung tuổi với năm sinh đã nhập."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs leading-relaxed text-muted",
						children: "Lịch tính theo múi giờ Việt Nam, thuật toán Hồ Ngọc Đức. Tiết khí theo kinh độ mặt trời, có thể lệch vài giờ so với lịch thiên văn. Hoàng đạo theo Lục Diệu."
					})
				]
			})
		]
	});
}
var door = [
	{
		name: "Quý nhân",
		good: true,
		note: "Quý nhân phù trợ, làm ăn hanh thông.",
		subs: []
	},
	{
		name: "Hiểm họa",
		good: false,
		note: "Tán tài, bệnh, con cái bất hòa.",
		subs: []
	},
	{
		name: "Thiên tai",
		good: false,
		note: "Ốm nặng, mất của, gia đạo bất an.",
		subs: []
	},
	{
		name: "Thiên tài",
		good: true,
		note: "Tài lộc đến, con hiếu, nhà an.",
		subs: []
	},
	{
		name: "Phúc lộc",
		good: true,
		note: "Nghề phát, phúc dày, nhà yên.",
		subs: []
	},
	{
		name: "Cô độc",
		good: false,
		note: "Hao người hao của, biệt ly.",
		subs: []
	},
	{
		name: "Thiên tặc",
		good: false,
		note: "Tai bay, kiện tụng, trộm cướp.",
		subs: []
	},
	{
		name: "Tể tướng",
		good: true,
		note: "Thuận mọi bề, con quý, chủ may.",
		subs: []
	}
];
var solid = [
	{
		name: "Tài",
		good: true,
		note: "Tài đức, kho quý, đón phúc.",
		subs: [
			"Tài đức",
			"Báo khố",
			"Lục hợp",
			"Nghênh phúc"
		].map((name) => ({ name }))
	},
	{
		name: "Bệnh",
		good: false,
		note: "Hao tài, kiện tụng, cô độc.",
		subs: [
			"Thoát tài",
			"Công sự",
			"Lao chấp",
			"Cô quả"
		].map((name) => ({ name }))
	},
	{
		name: "Ly",
		good: false,
		note: "Chia lìa, mất của, thị phi.",
		subs: [
			"Trường khố",
			"Kiếp tài",
			"Quan quỷ",
			"Thất thoát"
		].map((name) => ({ name }))
	},
	{
		name: "Nghĩa",
		good: true,
		note: "Thêm người, thêm lợi, đại cát.",
		subs: [
			"Thêm đinh",
			"Ích lợi",
			"Quý tử",
			"Đại cát"
		].map((name) => ({ name }))
	},
	{
		name: "Quan",
		good: true,
		note: "Khoa danh, tài lộc, phú quý.",
		subs: [
			"Thuận khoa",
			"Hoành tài",
			"Tiến ích",
			"Phú quý"
		].map((name) => ({ name }))
	},
	{
		name: "Kiếp",
		good: false,
		note: "Tang, mất người, mất của.",
		subs: [
			"Tử biệt",
			"Thoái khẩu",
			"Ly hương",
			"Thất tài"
		].map((name) => ({ name }))
	},
	{
		name: "Hại",
		good: false,
		note: "Tai họa, bệnh, khẩu thiệt.",
		subs: [
			"Họa chí",
			"Tử tuyệt",
			"Lâm bệnh",
			"Khẩu thiệt"
		].map((name) => ({ name }))
	},
	{
		name: "Bản",
		good: true,
		note: "Tiền đến, đỗ đạt, hưng vượng.",
		subs: [
			"Tài chí",
			"Đăng khoa",
			"Tiến bảo",
			"Hưng vượng"
		].map((name) => ({ name }))
	}
];
var grave = [
	{
		name: "Đinh",
		good: true,
		note: "Con trai, phúc tinh, đỗ đạt.",
		subs: [
			"Phúc tinh",
			"Cập đệ",
			"Tài vượng",
			"Đăng khoa"
		].map((name) => ({ name }))
	},
	{
		name: "Hại",
		good: false,
		note: "Khẩu thiệt, bệnh, tai đến.",
		subs: [
			"Khẩu thiệt",
			"Bệnh lâm",
			"Tử tuyệt",
			"Tai chí"
		].map((name) => ({ name }))
	},
	{
		name: "Vượng",
		good: true,
		note: "Thiên đức, hỷ sự, tiến bảo.",
		subs: [
			"Thiên đức",
			"Hỷ sự",
			"Tiến bảo",
			"Nạp phúc"
		].map((name) => ({ name }))
	},
	{
		name: "Khổ",
		good: false,
		note: "Thất thoát, kiện tụng, vô tự.",
		subs: [
			"Thất thoát",
			"Quan quỷ",
			"Kiếp tài",
			"Vô tự"
		].map((name) => ({ name }))
	},
	{
		name: "Nghĩa",
		good: true,
		note: "Đại cát, lợi ích, thiên khố.",
		subs: [
			"Đại cát",
			"Tài vượng",
			"Ích lợi",
			"Thiên khố"
		].map((name) => ({ name }))
	},
	{
		name: "Quan",
		good: true,
		note: "Phú quý, hoạch tài, thuận khoa.",
		subs: [
			"Phú quý",
			"Tiến bảo",
			"Hoạch tài",
			"Thuận khoa"
		].map((name) => ({ name }))
	},
	{
		name: "Tử",
		good: false,
		note: "Ly hương, tử biệt, thoát đinh.",
		subs: [
			"Ly hương",
			"Tử biệt",
			"Thoái đinh",
			"Thất tài"
		].map((name) => ({ name }))
	},
	{
		name: "Hưng",
		good: true,
		note: "Đăng khoa, quý tử, hưng vượng.",
		subs: [
			"Đăng khoa",
			"Quý tử",
			"Thêm đinh",
			"Hưng vượng"
		].map((name) => ({ name }))
	},
	{
		name: "Thất",
		good: false,
		note: "Cô quả, lao chấp, thoát tài.",
		subs: [
			"Cô quả",
			"Lao chấp",
			"Công sự",
			"Thoát tài"
		].map((name) => ({ name }))
	},
	{
		name: "Tài",
		good: true,
		note: "Nghênh phúc, lục hợp, tài đức.",
		subs: [
			"Nghênh phúc",
			"Lục hợp",
			"Tiến bảo",
			"Tài đức"
		].map((name) => ({ name }))
	}
];
var RULERS = [
	{
		id: "thongthuy",
		title: "52,2 cm · Thông thủy",
		cycleLabel: "chu kỳ 520 mm",
		cycleMm: 520,
		use: "Khoảng không thông thủy: cửa đi, cửa sổ, giếng trời, chiều cao thông thủy.",
		cungs: door
	},
	{
		id: "duong",
		title: "42,9 cm · Dương trạch",
		cycleLabel: "chu kỳ 429 mm",
		cycleMm: 429,
		use: "Khối đặc: bậc, bệ, bếp xây, kích thước phủ bì, đồ gỗ dương trạch.",
		cungs: solid
	},
	{
		id: "am",
		title: "38,8 cm · Âm phần",
		cycleLabel: "chu kỳ 390 mm",
		cycleMm: 390,
		use: "Mộ, quách, tiểu, bàn thờ, khám thờ. Thước Đinh Lan, 10 cung.",
		cungs: grave
	}
];
function measure(ruler, mm) {
	const cycle = ruler.cycleMm;
	const x = (mm % cycle + cycle) % cycle;
	const w = cycle / ruler.cungs.length;
	let idx = Math.floor(x / w);
	if (idx >= ruler.cungs.length) idx = ruler.cungs.length - 1;
	const cung = ruler.cungs[idx];
	const into = x - idx * w;
	let sub = null;
	let subIndex = -1;
	if (cung.subs.length) {
		const sw = w / cung.subs.length;
		subIndex = Math.min(cung.subs.length - 1, Math.floor(into / sw));
		sub = cung.subs[subIndex] ?? null;
	}
	return {
		mm,
		cyclePos: x,
		cung,
		cungIndex: idx,
		into,
		sub,
		subIndex
	};
}
/** Tâm các cung/tiểu cung tốt, gần kích thước đang xét. */
function nearbyGood(ruler, mm, count = 8) {
	const w = ruler.cycleMm / ruler.cungs.length;
	const found = [];
	const from = Math.max(0, mm - ruler.cycleMm * 2);
	const to = mm + ruler.cycleMm * 3;
	for (let base = Math.floor(from / ruler.cycleMm) * ruler.cycleMm; base < to; base += ruler.cycleMm) ruler.cungs.forEach((cung, i) => {
		if (!cung.good) return;
		const parts = cung.subs.length || 1;
		const sw = w / parts;
		for (let s = 0; s < parts; s++) {
			const start = base + i * w + s * sw;
			const mid = Math.round(start + sw / 2);
			if (mid < 10 || Math.abs(mid - mm) < 1) continue;
			const label = cung.subs[s] ? `${cung.name} · ${cung.subs[s].name}` : cung.name;
			found.push({
				mm: mid,
				label
			});
		}
	});
	found.sort((a, b) => Math.abs(a.mm - mm) - Math.abs(b.mm - mm) || a.mm - b.mm);
	const uniq = [];
	for (const g of found) {
		if (uniq.some((u) => Math.abs(u.mm - g.mm) < 2)) continue;
		uniq.push(g);
		if (uniq.length >= count) break;
	}
	return uniq.sort((a, b) => a.mm - b.mm);
}
function rulerById(id) {
	return RULERS.find((r) => r.id === id) ?? RULERS[0];
}
var TRIALS = [
	{
		id: "thongthuy",
		mm: 810,
		label: "Cửa 810"
	},
	{
		id: "thongthuy",
		mm: 900,
		label: "Cửa 900"
	},
	{
		id: "thongthuy",
		mm: 1200,
		label: "Cửa 1.2 m"
	},
	{
		id: "duong",
		mm: 150,
		label: "Bậc 150"
	},
	{
		id: "duong",
		mm: 850,
		label: "Bệ 850"
	},
	{
		id: "am",
		mm: 810,
		label: "Khám 810"
	},
	{
		id: "am",
		mm: 1270,
		label: "Bàn thờ"
	}
];
function Strip({ ruler, mm }) {
	const span = 180;
	const start = mm - 50;
	const width = 360;
	const xOf = (v) => (v - start) / span * width;
	const cungW = ruler.cycleMm / ruler.cungs.length;
	const segs = [];
	const first = Math.floor(start / ruler.cycleMm) * ruler.cycleMm;
	for (let base = first; base < start + span + ruler.cycleMm; base += ruler.cycleMm) ruler.cungs.forEach((c, i) => {
		const a = base + i * cungW;
		const b = a + cungW;
		if (b < start || a > start + span) return;
		const x0 = Math.max(a, start);
		const x1 = Math.min(b, start + span);
		segs.push({
			x: xOf(x0),
			w: xOf(x1) - xOf(x0),
			good: c.good,
			name: c.name
		});
	});
	const needle = xOf(mm);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${width} 78`,
		className: "w-full",
		role: "img",
		"aria-label": "Thước Lỗ Ban",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: "18",
				width,
				height: "44",
				fill: "var(--color-ink)"
			}),
			segs.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: s.x,
				y: "18",
				width: Math.max(s.w, .4),
				height: "44",
				fill: s.good ? "var(--color-gold)" : "var(--color-navy-2)"
			}), s.w > 28 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: s.x + s.w / 2,
				y: "44",
				textAnchor: "middle",
				fontSize: "9",
				fill: s.good ? "var(--color-ink)" : "var(--color-ivory)",
				children: s.name
			})] }, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: needle,
				y1: "8",
				x2: needle,
				y2: "70",
				stroke: "var(--color-cinnabar)",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: `${needle},4 ${needle - 5},12 ${needle + 5},12`,
				fill: "var(--color-cinnabar)"
			})
		]
	});
}
function LobanView({ rulerId, mm, onRuler, onMm }) {
	const ruler = rulerById(rulerId);
	const safe = Number.isFinite(mm) ? Math.max(0, mm) : 0;
	const hit = measure(ruler, safe);
	const near = nearbyGood(ruler, safe, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-gold uppercase",
					children: "Thước Lỗ Ban"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl text-ivory",
					children: ruler.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: ruler.use
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [ruler.cycleLabel, ". Vàng là cung tốt."]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-2",
				children: RULERS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onRuler(r.id),
					className: "h-11 rounded-full border text-xs " + (r.id === rulerId ? "border-gold bg-navy-2 text-gold" : "border-line bg-navy text-ivory"),
					children: r.id === "thongthuy" ? "Thông thủy" : r.id === "duong" ? "Dương trạch" : "Âm phần"
				}, r.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted",
					children: "Kích thước (mm)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					inputMode: "numeric",
					className: "mt-1 h-12 w-full rounded-xl border border-line bg-ink px-3 text-2xl text-ivory tabular-nums",
					value: Number.isFinite(mm) ? String(Math.round(mm)) : "",
					onChange: (e) => {
						const n = Number(e.target.value.replace(",", "."));
						if (e.target.value === "") onMm(0);
						else if (Number.isFinite(n)) onMm(n);
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-11 flex-1 rounded-full border border-line text-ivory",
						onClick: () => onMm(Math.max(0, safe - 1)),
						children: "−1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-11 flex-1 rounded-full border border-line text-ivory",
						onClick: () => onMm(safe + 1),
						children: "+1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-11 flex-1 rounded-full border border-line text-ivory",
						onClick: () => onMm(safe + 10),
						children: "+10"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bezel overflow-hidden rounded-2xl bg-navy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Strip, {
					ruler,
					mm: safe
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl border p-3 " + (hit.cung.good ? "border-gold bg-navy-2" : "border-cinnabar bg-navy"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-muted uppercase",
						children: hit.cung.good ? "Cung tốt" : "Cung xấu"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-2xl " + (hit.cung.good ? "text-gold" : "text-cinnabar"),
						children: [hit.cung.name, hit.sub ? ` · ${hit.sub.name}` : ""]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-ivory",
						children: hit.cung.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-muted tabular-nums",
						children: [
							safe.toFixed(0),
							" mm · trong cung ",
							hit.into.toFixed(1),
							" mm"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs text-muted",
				children: "Cỡ tốt gần kích thước này"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2",
				children: near.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onMm(g.mm),
					className: "flex h-11 items-center justify-between rounded-xl border border-line bg-navy px-3 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-ivory",
						children: g.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm text-gold tabular-nums",
						children: [g.mm, " mm"]
					})]
				}, g.mm))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: TRIALS.filter((t) => t.id === rulerId).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-11 rounded-full border border-line px-3 text-sm text-ivory",
					onClick: () => onMm(t.mm),
					children: t.label
				}, t.label))
			})
		]
	});
}
function useCompass(enabled, onMagnetic, onHeard) {
	const cb = (0, import_react.useRef)(onMagnetic);
	const heard = (0, import_react.useRef)(onHeard);
	cb.current = onMagnetic;
	heard.current = onHeard;
	const smooth = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!enabled) {
			smooth.current = null;
			return;
		}
		let alive = true;
		const onEv = (e) => {
			const ev = e;
			let h = null;
			if (typeof ev.webkitCompassHeading === "number" && !Number.isNaN(ev.webkitCompassHeading)) h = ev.webkitCompassHeading;
			else if (ev.absolute && typeof ev.alpha === "number") h = wrap360(360 - ev.alpha);
			if (h == null || !alive) return;
			const prev = smooth.current;
			if (prev == null) smooth.current = h;
			else {
				const d = (h - prev + 540) % 360 - 180;
				smooth.current = wrap360(prev + d * .2);
			}
			heard.current?.();
			cb.current(smooth.current);
		};
		window.addEventListener("deviceorientationabsolute", onEv, true);
		window.addEventListener("deviceorientation", onEv, true);
		return () => {
			alive = false;
			window.removeEventListener("deviceorientationabsolute", onEv, true);
			window.removeEventListener("deviceorientation", onEv, true);
		};
	}, [enabled]);
}
async function requestCompass() {
	const DOE = DeviceOrientationEvent;
	try {
		if (typeof DOE.requestPermission === "function") {
			if (await DOE.requestPermission() !== "granted") return "denied";
		}
		if (typeof window === "undefined" || !("DeviceOrientationEvent" in window)) return "missing";
		return "ok";
	} catch {
		return "denied";
	}
}
var STARS = {
	sinhKhi: {
		name: "Sinh khí",
		rank: "daiCat",
		brief: "Đại cát. Cửa chính, phòng khách, chỗ làm việc."
	},
	thienY: {
		name: "Thiên y",
		rank: "cat",
		brief: "Cát. Bếp, giường người bệnh, chỗ dưỡng."
	},
	dienNien: {
		name: "Diên niên",
		rank: "cat",
		brief: "Cát. Phòng ngủ vợ chồng, bàn thờ, hòa khí."
	},
	phucVi: {
		name: "Phục vị",
		rank: "tieuCat",
		brief: "Tiểu cát. Phòng ngủ, chỗ nghỉ, tĩnh."
	},
	hoaHai: {
		name: "Họa hại",
		rank: "tieuHung",
		brief: "Tiểu hung. Tránh cửa và giường."
	},
	lucSat: {
		name: "Lục sát",
		rank: "hung",
		brief: "Hung. Tránh bếp, tránh giường."
	},
	nguQuy: {
		name: "Ngũ quỷ",
		rank: "hung",
		brief: "Hung. Tránh cửa, tránh bếp."
	},
	tuyetMenh: {
		name: "Tuyệt mệnh",
		rank: "daiHung",
		brief: "Đại hung. Chỉ nên WC, kho, chỗ thoát."
	}
};
/** Hướng theo thứ tự: Bắc, ĐB, Đông, ĐN, Nam, TN, Tây, TB. */
var TABLE = {
	1: [
		"phucVi",
		"lucSat",
		"thienY",
		"sinhKhi",
		"dienNien",
		"tuyetMenh",
		"hoaHai",
		"nguQuy"
	],
	2: [
		"tuyetMenh",
		"thienY",
		"nguQuy",
		"lucSat",
		"hoaHai",
		"phucVi",
		"dienNien",
		"sinhKhi"
	],
	3: [
		"dienNien",
		"tuyetMenh",
		"phucVi",
		"thienY",
		"sinhKhi",
		"nguQuy",
		"lucSat",
		"hoaHai"
	],
	4: [
		"sinhKhi",
		"hoaHai",
		"dienNien",
		"phucVi",
		"thienY",
		"lucSat",
		"nguQuy",
		"tuyetMenh"
	],
	6: [
		"lucSat",
		"dienNien",
		"hoaHai",
		"tuyetMenh",
		"nguQuy",
		"thienY",
		"sinhKhi",
		"phucVi"
	],
	7: [
		"nguQuy",
		"sinhKhi",
		"lucSat",
		"hoaHai",
		"tuyetMenh",
		"dienNien",
		"phucVi",
		"thienY"
	],
	8: [
		"hoaHai",
		"phucVi",
		"tuyetMenh",
		"nguQuy",
		"lucSat",
		"sinhKhi",
		"thienY",
		"dienNien"
	],
	9: [
		"thienY",
		"nguQuy",
		"sinhKhi",
		"dienNien",
		"phucVi",
		"hoaHai",
		"tuyetMenh",
		"lucSat"
	]
};
var KUA_META = {
	1: {
		name: "Khảm",
		han: "坎",
		element: "thuy",
		group: "dong",
		groupLabel: "Đông tứ mệnh"
	},
	2: {
		name: "Khôn",
		han: "坤",
		element: "tho",
		group: "tay",
		groupLabel: "Tây tứ mệnh"
	},
	3: {
		name: "Chấn",
		han: "震",
		element: "moc",
		group: "dong",
		groupLabel: "Đông tứ mệnh"
	},
	4: {
		name: "Tốn",
		han: "巽",
		element: "moc",
		group: "dong",
		groupLabel: "Đông tứ mệnh"
	},
	6: {
		name: "Càn",
		han: "乾",
		element: "kim",
		group: "tay",
		groupLabel: "Tây tứ mệnh"
	},
	7: {
		name: "Đoài",
		han: "兌",
		element: "kim",
		group: "tay",
		groupLabel: "Tây tứ mệnh"
	},
	8: {
		name: "Cấn",
		han: "艮",
		element: "tho",
		group: "tay",
		groupLabel: "Tây tứ mệnh"
	},
	9: {
		name: "Ly",
		han: "離",
		element: "hoa",
		group: "dong",
		groupLabel: "Đông tứ mệnh"
	}
};
function reduce(n) {
	let x = Math.abs(n) % 100;
	x = Math.floor(x / 10) + x % 10;
	while (x > 9) x = Math.floor(x / 10) + x % 10;
	return x;
}
/** Mệnh quái Bát Trạch. Năm âm lịch. Công thức phổ thông cho 1900–2099. Quẻ 5: nam→2, nữ→8. */
function kuaOf(lunarYear, gender) {
	const sum = reduce(lunarYear);
	let kua = lunarYear >= 2e3 ? gender === "nam" ? 9 - sum : sum + 6 : gender === "nam" ? 10 - sum : sum + 5;
	while (kua > 9) kua -= 9;
	if (kua <= 0) kua += 9;
	if (kua === 5) kua = gender === "nam" ? 2 : 8;
	const meta = KUA_META[kua] ?? KUA_META[1];
	return {
		kua,
		...meta
	};
}
function starAt(kua, palace) {
	return (TABLE[kua] ?? TABLE[1])[PALACES.findIndex((p) => p.id === palace)] ?? "phucVi";
}
function chart(kua) {
	return PALACES.map((palace) => ({
		palace,
		star: starAt(kua, palace.id)
	}));
}
function palacesWith(kua, stars) {
	return chart(kua).filter((c) => stars.includes(c.star)).map((c) => c.palace.id);
}
function goodRank(rank) {
	return rank === "daiCat" || rank === "cat" || rank === "tieuCat";
}
/** Tam hợp cục → Tam Sát đóng ba sơn của một phương. */
var TAM_SAT = [
	{
		chis: [
			8,
			0,
			4
		],
		palace: "ly",
		mountains: [
			"Bính",
			"Ngọ",
			"Đinh"
		],
		label: "Nam"
	},
	{
		chis: [
			2,
			6,
			10
		],
		palace: "kham",
		mountains: [
			"Nhâm",
			"Tý",
			"Quý"
		],
		label: "Bắc"
	},
	{
		chis: [
			5,
			9,
			1
		],
		palace: "chan",
		mountains: [
			"Giáp",
			"Mão",
			"Ất"
		],
		label: "Đông"
	},
	{
		chis: [
			11,
			3,
			7
		],
		palace: "doai",
		mountains: [
			"Canh",
			"Dậu",
			"Tân"
		],
		label: "Tây"
	}
];
var FLIGHT_POS = [
	"trung",
	"canNw",
	"doai",
	"can",
	"ly",
	"kham",
	"khon",
	"chan",
	"ton"
];
function annualCenter(year) {
	let c = 3 - ((year - 2024) % 9 + 9) % 9;
	c = (c % 9 + 9) % 9;
	return c === 0 ? 9 : c;
}
function flyingStars(year) {
	const center = annualCenter(year);
	return FLIGHT_POS.map((pos, i) => {
		let star = center + i;
		star = (star - 1) % 9 + 1;
		return {
			pos,
			star
		};
	});
}
function nguHoang(year) {
	const pos = flyingStars(year).find((r) => r.star === 5)?.pos ?? "trung";
	if (pos === "trung") return {
		pos,
		label: "Trung cung"
	};
	const p = PALACES.find((x) => x.id === pos);
	return {
		pos,
		label: p ? p.dir : "Trung cung"
	};
}
function yearTaboo(year) {
	const { can, chi } = yearCanChi(year);
	const CAN = [
		"Giáp",
		"Ất",
		"Bính",
		"Đinh",
		"Mậu",
		"Kỷ",
		"Canh",
		"Tân",
		"Nhâm",
		"Quý"
	];
	const group = TAM_SAT.find((g) => g.chis.includes(chi)) ?? TAM_SAT[0];
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
		centerStar: annualCenter(year)
	};
}
var AIMS = [
	{
		id: "cua",
		label: "Cửa"
	},
	{
		id: "giuong",
		label: "Đầu giường"
	},
	{
		id: "bep",
		label: "Miệng bếp"
	},
	{
		id: "tho",
		label: "Bàn thờ"
	},
	{
		id: "ban",
		label: "Bàn làm việc"
	},
	{
		id: "ngoi",
		label: "Chỗ ngồi"
	},
	{
		id: "wc",
		label: "Cửa WC"
	}
];
function aimVerdict(aim, star) {
	const s = STARS[star];
	const cat = goodRank(s.rank);
	if (aim === "wc") {
		if (star === "tuyetMenh" || star === "nguQuy" || star === "lucSat") return {
			tone: "good",
			title: "WC đặt vào cung hung — đúng chỗ xả",
			detail: `${s.name} nên để nhà vệ sinh, kho, chỗ thoát. Giữ khô, đậy nắp, không nhìn ra cửa chính.`
		};
		return {
			tone: "bad",
			title: "WC đang vào cung tốt",
			detail: `${s.name} không nên làm WC. Dời sang Tuyệt mệnh, Ngũ quỷ hoặc Lục sát.`
		};
	}
	if (aim === "bep") {
		if (star === "thienY") return {
			tone: "good",
			title: "Bếp hợp Thiên y",
			detail: "Miệng bếp quay về Thiên y là cách an nhất trong Bát Trạch."
		};
		if (star === "sinhKhi") return {
			tone: "bad",
			title: "Bếp phạm Sinh khí",
			detail: "Hỏa đốt cung tài. Không để miệng bếp vào Sinh khí."
		};
		if (star === "nguQuy" || star === "tuyetMenh") return {
			tone: "bad",
			title: `Bếp vào ${s.name}`,
			detail: "Dời miệng bếp. Ưu tiên Thiên y, tránh Ngũ quỷ và Tuyệt mệnh."
		};
		if (cat) return {
			tone: "mid",
			title: `Bếp vào ${s.name}`,
			detail: "Dùng được. Thiên y vẫn hơn nếu xoay được miệng bếp."
		};
		return {
			tone: "bad",
			title: `Bếp vào ${s.name}`,
			detail: s.brief
		};
	}
	if (aim === "giuong") {
		if (star === "dienNien" || star === "phucVi" || star === "thienY") return {
			tone: "good",
			title: `Đầu giường ${s.name}`,
			detail: "Hướng này hợp giường. Kê đầu vào tường đặc, không xà ngang, không gương đối giường."
		};
		if (star === "sinhKhi") return {
			tone: "mid",
			title: "Sinh khí hơi động cho giường",
			detail: "Tốt cho cửa hơn cho giấc ngủ. Nếu kê, ưu tiên người cần sức bật, không phải người bệnh."
		};
		return {
			tone: "bad",
			title: `Đầu giường ${s.name}`,
			detail: "Không kê đầu về hướng này. Chọn Diên niên, Phục vị hoặc Thiên y."
		};
	}
	if (aim === "cua") {
		if (star === "sinhKhi" || star === "dienNien") return {
			tone: "good",
			title: `Cửa ${s.name}`,
			detail: s.brief
		};
		if (star === "thienY" || star === "phucVi") return {
			tone: "mid",
			title: `Cửa ${s.name}`,
			detail: "Dùng được cho cửa phụ. Cửa chính vẫn hơn nếu là Sinh khí hoặc Diên niên."
		};
		return {
			tone: "bad",
			title: `Cửa ${s.name}`,
			detail: "Không mở cửa chính về hướng này."
		};
	}
	if (aim === "tho") {
		if (star === "dienNien" || star === "phucVi" || star === "sinhKhi") return {
			tone: "good",
			title: `Bàn thờ hướng ${s.name}`,
			detail: "Mặt bàn thờ nhìn về hướng tốt. Lưng tựa tường đặc, không cửa sau lưng, không WC sát vách."
		};
		if (cat) return {
			tone: "mid",
			title: `Bàn thờ ${s.name}`,
			detail: s.brief
		};
		return {
			tone: "bad",
			title: `Bàn thờ ${s.name}`,
			detail: "Không quay mặt bàn thờ về cung hung."
		};
	}
	if (star === "sinhKhi" || star === "dienNien") return {
		tone: "good",
		title: `${s.name} hợp chỗ ngồi và bàn`,
		detail: s.brief
	};
	if (cat) return {
		tone: "mid",
		title: s.name,
		detail: s.brief
	};
	return {
		tone: "bad",
		title: s.name,
		detail: "Đổi hướng ngồi hoặc dời bàn."
	};
}
function bestDirs(kua) {
	const pick = (stars) => palacesWith(kua, stars).map((id) => palaceById(id).dir).join(", ");
	return [
		{
			label: "Cửa",
			text: pick(["sinhKhi", "dienNien"])
		},
		{
			label: "Bếp",
			text: pick(["thienY"])
		},
		{
			label: "Giường",
			text: pick([
				"dienNien",
				"phucVi",
				"thienY"
			])
		},
		{
			label: "WC",
			text: pick([
				"tuyetMenh",
				"nguQuy",
				"lucSat"
			])
		}
	];
}
function axisWarnings(heading, taboo, kind) {
	const face = mountainAt(heading).mountain;
	const sit = oppositeMountain(face);
	const faceP = palaceAt(heading).id;
	const sitP = palaceAt(heading + 180).id;
	const out = [];
	const hitSat = (name) => taboo.tamSatMountains.includes(name);
	if (hitSat(face.name)) out.push({
		tone: "bad",
		text: `Hướng ${face.name} phạm Tam Sát năm ${taboo.canChi} (phương ${taboo.tamSatLabel}).`
	});
	if (hitSat(sit.name)) out.push({
		tone: "bad",
		text: `Tọa ${sit.name} phạm Tam Sát năm ${taboo.canChi}.`
	});
	if (face.name === taboo.thaiTue) out.push({
		tone: "bad",
		text: `Hướng ${face.name} đụng Thái Tuế. Không mở cửa chính, không đào đất phía này.`
	});
	if (sit.name === taboo.thaiTue) out.push({
		tone: "bad",
		text: `Tọa ${sit.name} đụng Thái Tuế. Không xây lưng nhà, không tọa mộ vào sơn này năm nay.`
	});
	if (taboo.nguHoangPalace !== "trung" && (faceP === taboo.nguHoangPalace || sitP === taboo.nguHoangPalace)) out.push({
		tone: "bad",
		text: `Ngũ Hoàng đóng ${taboo.nguHoangLabel}. Không động thổ, không an táng trục này trong năm ${taboo.year}.`
	});
	if (out.length === 0) out.push({
		tone: "good",
		text: kind === "mo" ? `Trục tọa ${sit.name} hướng ${face.name} không đụng Thái Tuế, Tam Sát, Ngũ Hoàng năm ${taboo.canChi}. Vẫn phải xem long mạch và thủy khẩu.` : `Trục này không phạm Thái Tuế, Tam Sát, Ngũ Hoàng năm ${taboo.canChi}.`
	});
	return out;
}
function elementLine(kuaEl, mountainEl) {
	return elementRel(kuaEl, mountainEl).text;
}
function readingReport(opts) {
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
		`Năm xét ${opts.taboo.canChi}: Thái Tuế ${opts.taboo.thaiTue}, Tam Sát ${opts.taboo.tamSatLabel} (${opts.taboo.tamSatMountains.join(" ")}), Ngũ Hoàng ${opts.taboo.nguHoangLabel}.`
	];
	if (opts.kua && opts.fate) {
		const star = STARS[starAt(opts.kua.kua, pal.id)];
		lines.push(`Mệnh ${opts.kua.kua} ${opts.kua.name} · ${opts.kua.groupLabel} · năm ${opts.fate} ${formatCanChi(...canChiOf(opts.fate))}`, `Hướng này với mệnh: ${star.name} — ${star.brief}`);
	}
	lines.push("Công cụ đo đạc hỗ trợ. An táng và động thổ thuộc về thầy và gia chủ.");
	return lines.filter(Boolean).join("\n");
}
function canChiOf(year) {
	return [((year - 4) % 10 + 10) % 10, ((year - 4) % 12 + 12) % 12];
}
function fateLabel(year) {
	const [c, z] = canChiOf(year);
	return `${year} ${CAN[c]} ${CHI[z]}`;
}
var MODES = [
	{
		id: "laban",
		label: "La bàn"
	},
	{
		id: "nha",
		label: "Xây nhà"
	},
	{
		id: "noi",
		label: "Nội thất"
	},
	{
		id: "mo",
		label: "Mộ phần"
	},
	{
		id: "thuoc",
		label: "Lỗ Ban"
	},
	{
		id: "lich",
		label: "Lịch"
	}
];
var MODE_NAME = {
	laban: "La bàn",
	nha: "Xây nhà",
	noi: "Nội thất",
	mo: "Mộ phần",
	thuoc: "Lỗ Ban",
	lich: "Lịch"
};
function toneClass(t) {
	if (t === "good") return "text-pine";
	if (t === "bad") return "text-cinnabar";
	return "text-gold-2";
}
function parseBirth(s) {
	if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return null;
	const [y, m, d] = s.split("-").map(Number);
	if (!y || !m || !d) return null;
	return new Date(y, m - 1, d, 12);
}
function Studio() {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "app-shell text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "app-pad pt-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-gold uppercase",
					children: "La bàn phương Đông"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl text-ivory",
					children: "Xây nhà · Nội thất · Mộ phần · Lỗ Ban"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Đang mở la bàn và lịch âm dương."
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Live, {});
}
function Live() {
	const s = useStudio();
	const [sensor, setSensor] = (0, import_react.useState)(false);
	const [locked, setLocked] = (0, import_react.useState)(false);
	const [heard, setHeard] = (0, import_react.useState)(false);
	const [note, setNote] = (0, import_react.useState)("Kéo vành la bàn hoặc nhập độ. Bấm Kim máy khi đứng tại chỗ đo.");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)("");
	const heading = wrap360(s.magnetic + (s.useTrue ? s.declination : 0));
	const heardRef = (0, import_react.useRef)(false);
	useCompass(sensor && !locked, (mag) => {
		useStudio.getState().setMagnetic(mag);
	}, () => {
		heardRef.current = true;
		setHeard(true);
	});
	(0, import_react.useEffect)(() => {
		if (!sensor) return;
		heardRef.current = false;
		setHeard(false);
		const t = window.setTimeout(() => {
			if (!heardRef.current) setNote("Chưa thấy kim từ. Máy tính thì nhập độ. Điện thoại: cho quyền la bàn và giữ máy thẳng.");
		}, 2500);
		return () => window.clearTimeout(t);
	}, [sensor]);
	(0, import_react.useEffect)(() => {
		if (heard && sensor) setNote(locked ? "Đã khóa số đo." : "Kim máy đang chạy. Khóa lại khi số đứng yên.");
	}, [
		heard,
		sensor,
		locked
	]);
	const setDisplayed = (deg) => {
		setSensor(false);
		setLocked(false);
		s.setMagnetic(wrap360(deg - (s.useTrue ? s.declination : 0)));
	};
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA") return;
			if (e.key === "ArrowLeft") setDisplayed(heading - 1);
			if (e.key === "ArrowRight") setDisplayed(heading + 1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	});
	const full = s.mode === "lich" || s.mode === "thuoc";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "app-shell text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "app-pad flex items-center justify-between gap-3 pt-2 pb-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "text-left",
					onClick: () => s.setMode("lich"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-gold uppercase",
						children: "La bàn phương Đông"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderDate, {})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "icon-btn",
					onClick: () => setOpen(true),
					"aria-label": "Chỉnh la bàn",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "app-pad grid grid-cols-3 gap-1.5 pb-2",
				"aria-label": "Chế độ",
				children: MODES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => s.setMode(m.id),
					className: "mode-btn " + (s.mode === m.id ? "mode-on" : ""),
					children: m.label
				}, m.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "stage app-pad",
				children: full ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0 flex-1 overflow-y-auto",
					children: s.mode === "lich" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LichView, {
						birth: s.birth,
						yearMode: s.yearMode
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LobanView, {
						rulerId: s.rulerId,
						mm: s.mm,
						onRuler: (id) => s.patch({ rulerId: id }),
						onMm: (mm) => s.patch({ mm })
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dial-wrap",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dial-slot",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuopanDial, {
							heading,
							onHeading: setDisplayed
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hub",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-2xl leading-none text-gold tabular-nums",
									children: [heading.toFixed(1), "°"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-ivory",
									children: mountainAt(heading).mountain.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "fine text-muted",
									children: s.useTrue ? "Bắc thật" : "Bắc từ"
								})
							]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "sheet",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompassSheet, {
						heading,
						mode: s.mode,
						note,
						sensor,
						locked,
						onSensor: () => void enableSensor(setSensor, setLocked, setNote),
						onLock: () => setLocked((v) => !v),
						onNudge: (d) => setDisplayed(heading + d),
						onJump: (deg) => setDisplayed(deg),
						onCopy: async (text) => {
							try {
								await navigator.clipboard.writeText(text);
								setCopied("Đã chép phiếu đo.");
							} catch {
								setCopied("Không chép được. Hãy chọn chữ và sao chép.");
							}
						},
						copied
					})
				})] })
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSheet, { onClose: () => setOpen(false) })
		]
	});
}
function HeaderDate() {
	const info = (0, import_react.useMemo)(() => inspect(/* @__PURE__ */ new Date()), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-sm text-ivory",
		children: [
			info.lunar.day,
			" ",
			monthLabel(info.lunar.month, info.lunar.leap),
			" · ",
			formatCanChi(info.yearCan, info.yearChi)
		]
	});
}
async function enableSensor(setSensor, setLocked, setNote) {
	if (await requestCompass() === "denied") {
		setNote("Máy không cho la bàn. Nhập độ bằng tay.");
		setSensor(false);
		return;
	}
	setLocked(false);
	setSensor(true);
	setNote("Đang tìm kim từ… giữ máy thẳng, xa sắt thép.");
}
function CompassSheet(props) {
	const s = useStudio();
	const face = mountainAt(props.heading);
	const sit = oppositeMountain(face.mountain);
	const pal = palaceAt(props.heading);
	const birth = parseBirth(s.birth);
	const fate = birth ? fateYear(birth, s.yearMode) : null;
	const kua = fate ? kuaOf(fate, s.gender) : null;
	const year = s.workYear ?? fengShuiYear(/* @__PURE__ */ new Date());
	const taboo = yearTaboo(year);
	const star = kua ? STARS[starAt(kua.kua, pal.id)] : null;
	const warnings = axisWarnings(props.heading, taboo, props.mode === "mo" ? "mo" : "nha");
	const report = readingReport({
		name: s.job || "Khảo sát",
		when: (/* @__PURE__ */ new Date()).toLocaleString("vi-VN"),
		heading: props.heading,
		trueNorth: s.useTrue,
		kua,
		fate,
		taboo,
		mode: MODE_NAME[props.mode]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2 pb-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-cinnabar",
					children: [
						"Hướng ",
						face.mountain.name,
						" ",
						face.mountain.han
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [
						"Tọa ",
						sit.name,
						" ",
						sit.han,
						" · ",
						pal.name,
						" ",
						pal.han,
						" · ",
						pal.dir
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-right text-xs text-ivory",
					children: [
						ELEMENT_NAME[face.mountain.element],
						" · ",
						face.mountain.yang ? "Dương" : "Âm"
					]
				})]
			}),
			face.seam ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-cinnabar",
				children: [
					"Áp tuyến ",
					Math.abs(face.offset).toFixed(1),
					"°. Chỉnh vào giữa sơn, đừng dừng trên ranh."
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Lệch ",
					face.offset >= 0 ? "thuận kim" : "ngược kim",
					" ",
					Math.abs(face.offset).toFixed(1),
					"° so với tâm sơn ",
					face.mountain.name,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: props.note
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-4 gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mode-btn",
						onClick: () => props.onNudge(-15),
						children: "−15°"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mode-btn",
						onClick: () => props.onNudge(-1),
						children: "−1°"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mode-btn",
						onClick: () => props.onNudge(1),
						children: "+1°"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mode-btn",
						onClick: () => props.onNudge(15),
						children: "+15°"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "range",
				type: "range",
				min: 0,
				max: 359.5,
				step: .5,
				value: Math.min(359.5, props.heading),
				"aria-label": "Độ hướng",
				onChange: (e) => props.onJump(Number(e.target.value))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "mode-btn " + (props.sensor ? "mode-on" : ""),
					onClick: props.onSensor,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "mr-1 inline size-4" }), " Kim máy"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "mode-btn",
					onClick: props.onLock,
					children: [props.locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "mr-1 inline size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockOpen, { className: "mr-1 inline size-4" }), props.locked ? "Đang khóa" : "Khóa số"]
				})]
			}),
			props.mode === "laban" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-ivory",
				children: [
					"Cung ",
					pal.name,
					" thuộc ",
					ELEMENT_NAME[pal.element],
					". Sơn ",
					face.mountain.name,
					" là ",
					ELEMENT_NAME[face.mountain.element],
					".",
					kua ? ` ${elementLine(kua.element, face.mountain.element)}.` : ""
				]
			}),
			(props.mode === "nha" || props.mode === "noi" || props.mode === "mo") && !kua && props.mode !== "mo" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-gold",
				children: "Nhập ngày sinh trong phần Chỉnh để tính mệnh quái Bát Trạch."
			}),
			kua && star && (props.mode === "nha" || props.mode === "noi") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-ivory",
				children: [
					"Mệnh ",
					kua.kua,
					" ",
					kua.name,
					" · ",
					kua.groupLabel,
					" · ",
					fateLabel(fate ?? 0)
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm " + (goodRank(star.rank) ? "text-pine" : "text-cinnabar"),
				children: [
					"Hướng này: ",
					star.name,
					". ",
					star.brief
				]
			})] }),
			kua && props.mode === "nha" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-4 gap-1",
				children: chart(kua.kua).map((c) => {
					const st = STARS[c.star];
					const on = c.palace.id === pal.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => props.onJump(c.palace.center),
						className: "rounded-lg border px-1 py-2 text-center " + (on ? "border-gold bg-navy-2" : "border-line bg-navy"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs text-ivory",
							children: c.palace.short
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block fine " + (goodRank(st.rank) ? "text-pine" : "text-cinnabar"),
							children: st.name
						})]
					}, c.palace.id);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-2 gap-1 text-sm",
				children: bestDirs(kua.kua).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg bg-navy px-2 py-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: b.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-ivory",
						children: [" ", b.text]
					})]
				}, b.label))
			})] }),
			kua && props.mode === "noi" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-1.5",
				children: [AIMS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => s.patch({ aim: a.id }),
					className: "mode-btn " + (s.aim === a.id ? "mode-on" : ""),
					children: a.label
				}, a.id)), star && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "w-full text-sm " + toneClass(aimVerdict(s.aim, starAt(kua.kua, pal.id)).tone),
					children: [
						aimVerdict(s.aim, starAt(kua.kua, pal.id)).title,
						". ",
						aimVerdict(s.aim, starAt(kua.kua, pal.id)).detail
					]
				})]
			}),
			props.mode === "mo" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-lg text-ivory",
				children: [
					"Tọa ",
					sit.name,
					" hướng ",
					face.mountain.name
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Lưng mộ ",
					sit.name,
					", mặt nhìn ",
					face.mountain.name,
					" · ",
					pal.dir
				]
			})] }),
			(props.mode === "nha" || props.mode === "mo" || props.mode === "laban") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-navy px-2 py-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-gold",
						children: [
							"Năm ",
							taboo.canChi,
							" · Thái Tuế ",
							taboo.thaiTue,
							" · Tam Sát ",
							taboo.tamSatLabel,
							" · Ngũ Hoàng ",
							taboo.nguHoangLabel
						]
					}),
					warnings.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm " + toneClass(w.tone),
						children: w.text
					}, w.text)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "icon-btn",
								onClick: () => s.patch({ workYear: year - 1 }),
								"aria-label": "Năm trước",
								children: "−"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted tabular-nums",
								children: "Đổi năm xét"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "icon-btn",
								onClick: () => s.patch({ workYear: year + 1 }),
								"aria-label": "Năm sau",
								children: "+"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "h-11 min-w-0 flex-1 rounded-xl border border-line bg-ink px-3 text-sm text-ivory",
					value: s.job,
					onChange: (e) => s.patch({ job: e.target.value }),
					"aria-label": "Tên công trình",
					placeholder: "Tên công trình"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mode-btn mode-on",
					onClick: () => {
						props.onCopy(report);
						s.addSurvey({
							id: `${Date.now()}`,
							name: s.job || "Khảo sát",
							at: (/* @__PURE__ */ new Date()).toISOString(),
							text: report
						});
					},
					children: "Ghi"
				})]
			}),
			props.copied && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-gold",
				children: props.copied
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "Đo để hỗ trợ. Động thổ và an táng vẫn là việc của thầy và gia chủ."
			})
		]
	});
}
function SettingsSheet({ onClose }) {
	const s = useStudio();
	const surveys = s.surveys;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overlay",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "app-pad flex items-center justify-between py-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg text-ivory",
				children: "Chỉnh la bàn"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mode-btn mode-on",
				onClick: onClose,
				children: "Xong"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "app-pad flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mode-btn " + (s.gender === "nam" ? "mode-on" : ""),
						onClick: () => s.patch({ gender: "nam" }),
						children: "Nam"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mode-btn " + (s.gender === "nu" ? "mode-on" : ""),
						onClick: () => s.patch({ gender: "nu" }),
						children: "Nữ"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm text-muted",
					children: ["Ngày sinh dương lịch", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "date",
						className: "mt-1 h-11 w-full rounded-xl border border-line bg-ink px-3 text-ivory",
						value: s.birth,
						onChange: (e) => s.patch({ birth: e.target.value })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mode-btn " + (s.yearMode === "tet" ? "mode-on" : ""),
						onClick: () => s.patch({ yearMode: "tet" }),
						children: "Năm theo Tết"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mode-btn " + (s.yearMode === "lapxuan" ? "mode-on" : ""),
						onClick: () => s.patch({ yearMode: "lapxuan" }),
						children: "Năm theo Lập Xuân"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "Bát Trạch dùng năm âm. Một số phái đổi mệnh vào Lập Xuân, không đợi giao thừa."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mode-btn " + (s.useTrue ? "mode-on" : ""),
					onClick: () => s.patch({ useTrue: !s.useTrue }),
					children: s.useTrue ? "Đang đọc bắc thật" : "Đang đọc bắc từ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "La bàn truyền thống đọc bắc từ. Bật bắc thật khi đối chiếu bản đồ trắc địa."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm text-muted",
					children: [
						"Độ từ thiên (đông dương, tây âm): ",
						s.declination.toFixed(1),
						"°",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "range",
							type: "range",
							min: -8,
							max: 8,
							step: .1,
							value: s.declination,
							onChange: (e) => s.patch({ declination: Number(e.target.value) })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: CITIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mode-btn",
						onClick: () => s.patch({ declination: c.dec }),
						children: c.name
					}, c.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "Số từ thiên là ước tính 2026, không thay số liệu địa từ chính thức."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm text-gold",
					children: "Sổ đo"
				}),
				surveys.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Chưa ghi phiếu nào."
				}),
				surveys.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-navy p-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ivory",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-xs text-cinnabar",
							onClick: () => s.removeSurvey(item.id),
							children: "Xóa"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-1 text-xs whitespace-pre-wrap text-muted",
						children: item.text
					})]
				}, item.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm text-gold",
					children: "Ủng hộ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportBox, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-relaxed text-muted",
					children: "24 sơn chính ngũ hành, Bát Trạch mệnh quái, Tam Sát — Thái Tuế — Ngũ Hoàng, thước 52,2 / 42,9 / 38,8 cm. Không thay thầy phong thủy, không thay hồ sơ trắc địa."
				})
			]
		})]
	});
}
function SupportBox() {
	const box = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const id = "paypal-sdk-loban";
		const render = () => {
			const paypal = window.paypal;
			if (!paypal || !box.current) return;
			box.current.replaceChildren();
			const holder = document.createElement("div");
			holder.id = "paypal-container-T7AZ748Y27248";
			box.current.appendChild(holder);
			paypal.HostedButtons({ hostedButtonId: "T7AZ748Y27248" }).render("#paypal-container-T7AZ748Y27248");
		};
		if (document.getElementById(id)) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: box });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {});
}
//#endregion
export { Home as component };
