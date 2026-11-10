import { useEffect } from "react";

declare global {
  interface Window {
    __VXO_SUPPORT__?: Record<string, unknown>;
  }
}

/** Nút "Ủng hộ" nhỏ (Ko-fi, MoMo, PayPal khi có link). Ủng hộ tự nguyện, không gọi mạng. */
export function VxoSupport() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.__VXO_SUPPORT__ = {
      mount: "fab",
      paypalMe: "", // điền https://paypal.me/... thật để hiện nút PayPal
    };
    if (!document.querySelector('link[data-vxo-sp="1"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/vxo-support/vxo-support.css";
      link.setAttribute("data-vxo-sp", "1");
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[data-vxo-sp="1"]')) {
      const s = document.createElement("script");
      s.src = "/vxo-support/vxo-support.js";
      s.defer = true;
      s.setAttribute("data-vxo-sp", "1");
      document.body.appendChild(s);
    }
  }, []);
  return null;
}
