import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Aim } from "@/lib/fengshui/reading";
import type { Ruler } from "@/lib/fengshui/loban";

export type Mode = "laban" | "nha" | "noi" | "mo" | "thuoc" | "lich";

export type Survey = { id: string; name: string; at: string; text: string };

type StudioState = {
  mode: Mode;
  magnetic: number;
  useTrue: boolean;
  declination: number;
  gender: "nam" | "nu";
  birth: string;
  yearMode: "tet" | "lapxuan";
  workYear: number | null;
  rulerId: Ruler["id"];
  mm: number;
  aim: Aim;
  job: string;
  surveys: Survey[];
  setMode: (mode: Mode) => void;
  setMagnetic: (magnetic: number) => void;
  patch: (p: Partial<Pick<StudioState, "useTrue" | "declination" | "gender" | "birth" | "yearMode" | "workYear" | "rulerId" | "mm" | "aim" | "job">>) => void;
  addSurvey: (item: Survey) => void;
  removeSurvey: (id: string) => void;
};

const memory = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

export const useStudio = create<StudioState>()(
  persist(
    (set) => ({
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
      removeSurvey: (id) => set((s) => ({ surveys: s.surveys.filter((x) => x.id !== id) })),
    }),
    {
      name: "laban-phuong-dong",
      storage: createJSONStorage(() => (typeof window === "undefined" ? memory : localStorage)),
    },
  ),
);
