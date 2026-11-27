import { A_PATH, DOT, RING_PATH } from "@/components/brand/logo"

export const BRAND = {
  ink: "#1A1F36",
  paper: "#F2F1EC",
  amber: "#F29B38",
  amberOnDark: "#F5A85A",
  fom: "#E85A24",
  billleaf: "#22A355",
} as const

/** The Orbit A mark as a data URI, for ImageResponse (OG image, Apple icon) and other non-React consumers. */
export function markDataUri(ink: string, dot: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="${RING_PATH}" fill="${ink}"/><path d="${A_PATH}" fill="${ink}"/><circle cx="${DOT.cx}" cy="${DOT.cy}" r="${DOT.r}" fill="${dot}"/></svg>`
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`
}
