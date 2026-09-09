function withProtocol(value: string) {
  return value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`
}

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL
const hostedPreviewUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL

export const SITE_URL = withProtocol(
  configuredUrl ??
    hostedPreviewUrl ??
    (process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://aetheriatechmm.vercel.app"),
).replace(/\/$/, "")

export const SITE_NAME = "Aetheria Tech"
