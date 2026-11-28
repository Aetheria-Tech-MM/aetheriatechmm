import { CodeIcon, Idea01Icon, Plug01Icon } from "@hugeicons/core-free-icons"

export const COMPANY = {
  legalName: "Aetheria Tech Company Limited",
  founded: 2026,
  email: "aetheria.techmm@gmail.com",
  address: ["No.36, Thiri Yadanar St", "Shwe Hnin Si Ward", "Mingaladon, Yangon, Myanmar"],
}

export const FACTS = [
  { value: "2026", label: "Founded in Yangon" },
  { value: "Myanmar", label: "Registered company" },
  { value: "2", label: "Live products" },
  { value: "Web, iOS, Android", label: "Where our software runs" },
]

export const PRINCIPLES = [
  { title: "Built around real work", text: "We start from how a business already runs, in chats, spreadsheets and phone calls, and fit the software to that." },
  { title: "Dependable by default", text: "Software people use every day has to behave predictably, keep data safe and stay up." },
  { title: "Local and global", text: "Myanmar payments, scripts and channels where they matter, and any currency where they don't." },
  { title: "We run what we build", text: "We host, support and keep improving our products, based on what the people using them tell us." },
]

export const SERVICES = [
  {
    slug: "apps",
    icon: CodeIcon,
    title: "Custom web and mobile apps",
    summary: "Business software built to fit how your team works, on web, Android and iOS.",
    includes: ["Internal tools, portals and dashboards", "Customer-facing web and mobile apps", "Offline-capable apps for field teams", "Hosting, monitoring and ongoing support"],
  },
  {
    slug: "integrations",
    icon: Plug01Icon,
    title: "Integrations and APIs",
    summary: "Connect the tools you already use so data moves without re-typing.",
    includes: ["Messenger, Telegram and Viber bots", "Local payments such as MMQR", "APIs and webhooks for your existing systems", "Data imports, exports and sync"],
  },
  {
    slug: "consulting",
    icon: Idea01Icon,
    title: "Product consulting",
    summary: "Work out what to build, and how, before spending on a full build.",
    includes: ["Discovery workshops and workflow mapping", "UX flows and clickable prototypes", "Technical architecture and estimates", "Review of an existing product or codebase"],
  },
]

export const PROCESS = [
  { title: "Discover", text: "We learn how the work happens today and agree what success looks like." },
  { title: "Build", text: "Short cycles, with working software you can try along the way." },
  { title: "Launch", text: "We deploy, train your team and make sure the data moves over cleanly." },
  { title: "Support", text: "We keep it running, fix what comes up and improve it as you grow." },
]
