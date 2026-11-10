import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

import { VxoBinanceRef } from "@/components/vxo-binance-ref";
import { VxoSupport } from "@/components/vxo-support";
export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" },
      { title: "La Bàn Phương Đông" },
      { name: "description", content: "La bàn phong thủy 24 sơn: xây nhà, nội thất, mộ phần, thước Lỗ Ban và lịch âm dương Việt Nam." },
      { name: "theme-color", content: "#071018" },
      { name: "format-detection", content: "telephone=no" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="vi" translate="no" className="notranslate" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <VxoBinanceRef />
        <VxoSupport />
        <Scripts />
      </body>
    </html>
  ),
});
