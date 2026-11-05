import { useEffect, useRef } from "react";
import { wrap360 } from "@/lib/fengshui/lunar";

type Orient = DeviceOrientationEvent & { webkitCompassHeading?: number };

export function useCompass(enabled: boolean, onMagnetic: (deg: number) => void, onHeard?: () => void) {
  const cb = useRef(onMagnetic);
  const heard = useRef(onHeard);
  cb.current = onMagnetic;
  heard.current = onHeard;
  const smooth = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      smooth.current = null;
      return;
    }
    let alive = true;
    const onEv = (e: Event) => {
      const ev = e as Orient;
      let h: number | null = null;
      if (typeof ev.webkitCompassHeading === "number" && !Number.isNaN(ev.webkitCompassHeading)) {
        h = ev.webkitCompassHeading;
      } else if (ev.absolute && typeof ev.alpha === "number") {
        h = wrap360(360 - ev.alpha);
      }
      if (h == null || !alive) return;
      const prev = smooth.current;
      if (prev == null) smooth.current = h;
      else {
        const d = ((h - prev + 540) % 360) - 180;
        smooth.current = wrap360(prev + d * 0.2);
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

export async function requestCompass(): Promise<"ok" | "denied" | "missing"> {
  const DOE = DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> };
  try {
    if (typeof DOE.requestPermission === "function") {
      const res = await DOE.requestPermission();
      if (res !== "granted") return "denied";
    }
    if (typeof window === "undefined" || !("DeviceOrientationEvent" in window)) return "missing";
    return "ok";
  } catch {
    return "denied";
  }
}
