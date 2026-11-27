import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { BRAND, markDataUri } from "@/lib/brand"

export const alt = "Aetheria Tech — Practical software products for real business operations"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

async function asset(path: string, type: string) {
  const data = await readFile(join(process.cwd(), "public", path))
  return `data:${type};base64,${data.toString("base64")}`
}

export default async function OpenGraphImage() {
  const [fom, billleaf] = await Promise.all([
    asset("brand/products/fom-mark.png", "image/png"),
    asset("brand/products/billleaf-mark.svg", "image/svg+xml"),
  ])

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: BRAND.ink, color: BRAND.paper }}>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <img src={markDataUri(BRAND.paper, BRAND.amberOnDark)} width={104} height={104} alt="" />
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2 }}>Aetheria Tech</div>
        </div>
        <div style={{ display: "flex", fontSize: 44, lineHeight: 1.25, maxWidth: 900, color: "#C9CCD6" }}>Practical software products for real business operations.</div>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 26, color: "#9A9FAC" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src={fom} width={56} height={56} alt="" style={{ background: "#ffffff", borderRadius: 12 }} />
            FOM Order Manager
          </span>
          <span style={{ width: 1, height: 36, background: "#363C4E", margin: "0 12px" }} />
          <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src={billleaf} width={56} height={56} alt="" style={{ background: "#ffffff", borderRadius: 12, padding: 4 }} />
            Billleaf
          </span>
        </div>
      </div>
    ),
    size,
  )
}
