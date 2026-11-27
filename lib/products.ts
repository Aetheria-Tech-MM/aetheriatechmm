export type Shot = { src: string; alt: string; width: number; height: number; kind: "web" | "mobile" }

export type Product = {
  slug: "fom" | "billleaf"
  name: string
  /** CSS class that scopes the product accent tokens (see globals.css). */
  scope: string
  mark: string
  url: string
  urlLabel: string
  category: string
  audience: string
  /** Short label used by the home chooser ("I run a shop"). */
  chooser: { label: string; hint: string }
  headline: string
  summary: string
  promise: string
  flow: string[]
  wins: { title: string; text: string }[]
  facts: { label: string; value: string }[]
  problem: { before: string[]; after: string[] }
  /** A step without a screenshot shows the product flow pipeline instead. */
  steps: { title: string; text: string; shot?: Shot }[]
  featureGroups: { title: string; items: { title: string; text: string }[] }[]
  platforms: { name: string; detail: string; href?: string }[]
  pricing: {
    intro: string
    plans: { name: string; price: string; note: string; items: string[] }[]
    footnote: string
    cta: { label: string; href: string }
  }
  faq: { q: string; a: string }[]
  hero: Shot
  mobile: Shot
  gallery: Shot[]
}

const web = (src: string, alt: string, width: number, height: number): Shot => ({ src, alt, width, height, kind: "web" })
const mobile = (src: string, alt: string): Shot => ({ src, alt, width: 600, height: 1304, kind: "mobile" })

const fomShots = {
  inbox: web("/products/fom/web-inbox-draft.webp", "FOM web inbox: a Messenger conversation beside the draft order panel", 1440, 1084),
  orders: web("/products/fom/web-orders.webp", "FOM orders list with statuses, payment and delivery details", 1440, 1084),
  reports: web("/products/fom/web-reports.webp", "FOM sales and order reports for the shop owner", 1440, 1084),
  thread: mobile("/products/fom/app-thread.webp", "FOM mobile app: a customer conversation with the Make an order from this chat button"),
  draft: mobile("/products/fom/app-draft-items.webp", "FOM mobile app: items on a draft order built from chat messages"),
  appOrders: mobile("/products/fom/app-orders.webp", "FOM mobile app: today's orders by status"),
  home: mobile("/products/fom/app-home.webp", "FOM mobile app home with today's orders and sales"),
}

const billleafShots = {
  dashboard: web("/products/billleaf/web_01_dashboard.webp", "Billleaf dashboard: outstanding invoices, time this week and project budgets", 1600, 1000),
  invoice: web("/products/billleaf/web_02_invoice.webp", "Billleaf invoice with a credit note and recorded payments", 1600, 1000),
  project: web("/products/billleaf/web_03_project.webp", "Billleaf project with time, costs, budget and a task board", 1600, 1000),
  reports: web("/products/billleaf/web_04_reports.webp", "Billleaf reports: profit and loss, expenses by category and a tax summary", 1600, 1000),
  time: { ...mobile("/products/billleaf/mobile_01_time.webp", "Billleaf mobile app: the timer and the day's time entries"), width: 599 },
  mInvoice: { ...mobile("/products/billleaf/mobile_02_invoice.webp", "Billleaf mobile app: an invoice with record payment, share PDF and email"), width: 599 },
}

export const PRODUCTS: Product[] = [
  {
    slug: "fom",
    name: "FOM Order Manager",
    scope: "product-fom",
    mark: "/brand/products/fom-mark.svg",
    url: "https://getfom.com/",
    urlLabel: "getfom.com",
    category: "Order management for chat-first shops",
    audience: "Shops in Myanmar that sell through Messenger, Telegram and Viber",
    chooser: { label: "I run a shop", hint: "I take orders through Messenger, Telegram or Viber" },
    headline: "Your customers message you. FOM turns it into an order.",
    summary: "One inbox for every chat channel, orders drafted from the conversation, and delivery, stock and reports in one place. On web, Android and iOS.",
    promise: "Chats become orders, orders get delivered, and the numbers add up.",
    flow: ["Chat", "Draft", "Confirm", "Deliver", "Report"],
    wins: [
      { title: "One inbox", text: "Messenger, Telegram and Viber conversations land in a single shared inbox." },
      { title: "Orders from chat", text: "Select the messages that matter and FOM drafts the order for you to check." },
      { title: "Delivery and cash", text: "Tracking links, printed labels and rider cash hand-over at the end of the day." },
    ],
    facts: [
      { label: "For", value: "Chat-first shops" },
      { label: "Channels", value: "Messenger, Telegram, Viber" },
      { label: "Platforms", value: "Web, Android, iOS" },
      { label: "Pricing", value: "Per shop, in MMK" },
    ],
    problem: {
      before: ["Orders copied by hand from a dozen chat tabs", "Phone numbers and addresses re-typed for every repeat customer", "Delivery status chased over the phone", "Sales counted in a notebook at the end of the day"],
      after: ["Every conversation in one shared inbox", "Returning customers matched by phone as you type", "A tracking link customers open themselves", "Daily, weekly and monthly reports with profit and margin"],
    },
    steps: [
      { title: "Connect your channels", text: "Link your Facebook Page, Telegram bot and Viber bot. No developer needed.", shot: fomShots.inbox },
      { title: "Draft the order from chat", text: "Pick the customer's messages and FOM fills in the name, phone, items and address for you to review.", shot: fomShots.thread },
      { title: "Confirm, print and deliver", text: "Confirmed orders take stock, print a packing label and get a tracking link to share.", shot: fomShots.orders },
      { title: "See how the shop is doing", text: "Sales, orders, profit and the conversations that turned into orders, by day, week or month.", shot: fomShots.reports },
    ],
    featureGroups: [
      {
        title: "Orders from chats",
        items: [
          { title: "Shared inbox", text: "Messenger, Telegram and Viber with unread counts and live updates." },
          { title: "Draft from messages", text: "Select messages and FOM drafts one order from them." },
          { title: "Saved replies", text: "Replies that fill in the customer's name, order number, total and tracking link." },
          { title: "Live comment orders", text: "Comments on a Facebook Live become draft orders, with stock held until confirmed." },
        ],
      },
      {
        title: "Orders and delivery",
        items: [
          { title: "Clear statuses", text: "New, confirmed, out for delivery, delivered or cancelled, with paid or COD on every order." },
          { title: "Tracking link", text: "Customers check their order themselves instead of asking." },
          { title: "Printing", text: "Packing labels and invoices on paper or Bluetooth and Wi-Fi thermal printers." },
          { title: "Rider cash", text: "Record the COD each rider collects and check the end-of-day hand-over." },
        ],
      },
      {
        title: "Products and customers",
        items: [
          { title: "Products and stock", text: "Options like size and colour, each with its own price, stock and photo." },
          { title: "Shop page", text: "A public shop page with a cart; orders land straight in the inbox." },
          { title: "Customer profiles", text: "Order history, totals, tags and duplicate merging." },
          { title: "Segments", text: "Filter by tags, last order, spend or township and save the segment for the team." },
        ],
      },
      {
        title: "Team and reports",
        items: [
          { title: "Reports", text: "Daily, weekly and monthly sales with profit and margin per order." },
          { title: "Staff and roles", text: "Invite staff and give each role only the access it needs." },
          { title: "Exports and API", text: "CSV exports that follow your filters, and a public API for your own tools." },
          { title: "Support in the app", text: "Support tickets with screenshots and reply notifications." },
        ],
      },
    ],
    platforms: [
      { name: "Web portal", detail: "For owners: reports, billing and the full picture of the shop.", href: "https://getfom.com/" },
      { name: "iPhone and iPad", detail: "Download on the App Store.", href: "https://apps.apple.com/us/app/fom-order-manager/id6808275627" },
      { name: "Android", detail: "Get it on Google Play.", href: "https://play.google.com/store/apps/details?id=com.getfom.app" },
    ],
    pricing: {
      intro: "One subscription per shop, paid with MMQR through a local payment gateway.",
      plans: [
        { name: "Shop Monthly", price: "88,000 MMK / month", note: "7-day free trial, no card required", items: ["1 shop", "1 connected channel", "Up to 3 staff accounts", "All core features"] },
      ],
      footnote: "Add-ons are available, and yearly billing saves 17%. See getfom.com for current prices and promotions.",
      cta: { label: "Start free trial", href: "https://getfom.com/register" },
    },
    faq: [
      { q: "Which chat channels does FOM support?", a: "Facebook Messenger, Telegram and Viber today, all in one inbox. TikTok is coming." },
      { q: "Can my staff use it on their phones?", a: "Yes. FOM runs on web, Android and iOS, and everyone sees the same orders in real time. Each staff member gets their own login and role." },
      { q: "Does it work with my thermal printer?", a: "FOM prints packing labels and invoices on paper or on Bluetooth and Wi-Fi thermal printers, from the web portal and the app." },
      { q: "How do I pay for FOM?", a: "Plans are paid with MMQR through a local payment gateway. Every new shop starts with a 7-day free trial." },
    ],
    hero: fomShots.inbox,
    mobile: fomShots.thread,
    gallery: [fomShots.inbox, fomShots.orders, fomShots.reports],
  },
  {
    slug: "billleaf",
    name: "Billleaf",
    scope: "product-billleaf",
    mark: "/brand/products/billleaf-mark.svg",
    url: "https://billleaf.com/",
    urlLabel: "billleaf.com",
    category: "Business workspace for freelancers",
    audience: "Freelancers and small studios, anywhere",
    chooser: { label: "I'm a freelancer", hint: "I send quotes, track time and invoice clients" },
    headline: "Win the work, do the work, get paid. In one place.",
    summary: "Clients, quotes, contracts, projects, time, invoices, payments and receipts in one workspace, with a client portal and an iOS and Android app.",
    promise: "Everything you enter once flows forward, from the first quote to the final receipt.",
    flow: ["Client", "Quote", "Contract", "Project", "Time", "Invoice", "Paid"],
    wins: [
      { title: "Quote to invoice", text: "An accepted quote becomes a contract, a project or an invoice without re-typing." },
      { title: "Time that bills itself", text: "Billable time and expenses turn into invoice lines." },
      { title: "A portal for clients", text: "Clients accept quotes, sign contracts and download invoices from an emailed link." },
    ],
    facts: [
      { label: "For", value: "Freelancers and studios" },
      { label: "Currencies", value: "Any, per invoice" },
      { label: "Platforms", value: "Web, iOS, Android" },
      { label: "Pricing", value: "Free, Pro and Team" },
    ],
    problem: {
      before: ["A spreadsheet of clients and a quote template", "A separate e-sign app and a separate timer", "Invoice numbers that drift", "No clear view of who still owes what"],
      after: ["Clients, quotes and contracts in one place", "Time and expenses that land on the next invoice", "Gap-free numbering, credit notes for corrections", "Outstanding and overdue at a glance"],
    },
    steps: [
      { title: "Quote and sign", text: "Send a quote the client accepts online, then turn it into a contract they sign in the portal." },
      { title: "Run the project", text: "Hourly or fixed-price projects with a task board, budgets, rates and costs.", shot: billleafShots.project },
      { title: "Track your time", text: "A timer on web and mobile, a weekly timesheet and favourites for repeat work.", shot: billleafShots.time },
      { title: "Invoice and get paid", text: "Invoices in any currency with reminders. Recording a payment issues a numbered receipt.", shot: billleafShots.invoice },
    ],
    featureGroups: [
      {
        title: "Selling",
        items: [
          { title: "Clients", text: "Contacts, a primary contact for documents, and their full history." },
          { title: "Quotes", text: "Clients accept or decline online; convert to a contract, project or invoice." },
          { title: "Contracts", text: "Templates with merge fields, signed by the client in the portal." },
        ],
      },
      {
        title: "Work",
        items: [
          { title: "Projects", text: "Hourly, fixed-price or non-billable, with estimates and a task board." },
          { title: "Time tracking", text: "Timer, week calendar, weekly timesheet, tags and CSV import." },
          { title: "Rates and profit", text: "Rates and costs per member, project and task, so each project shows its profit." },
        ],
      },
      {
        title: "Getting paid",
        items: [
          { title: "Invoices", text: "Any currency, taxes, PDFs, email, reminders and recurring schedules." },
          { title: "Credit notes", text: "Corrections go through credit notes; issued documents are never edited." },
          { title: "Payments and receipts", text: "Recording a payment issues a numbered receipt you can email." },
        ],
      },
      {
        title: "Books and teams",
        items: [
          { title: "Expenses", text: "Receipt photos, billable to a client and rebilled on their next invoice." },
          { title: "Reports", text: "Profit and loss by month, expenses by category and a tax summary." },
          { title: "Teams", text: "Members, invitations and custom roles, plus API keys and signed webhooks." },
        ],
      },
    ],
    platforms: [
      { name: "Web app", detail: "The full workspace for quotes, projects, invoices and reports.", href: "https://billleaf.com/" },
      { name: "iOS and Android", detail: "Timer, invoices, clients and expense photos on the go." },
      { name: "Client portal", detail: "Your clients sign in with an emailed link, no password needed." },
    ],
    pricing: {
      intro: "Start free and upgrade when the business grows.",
      plans: [
        { name: "Free", price: "Free", note: "For trying Billleaf with your first clients", items: ["1 member", "5 clients", "10 invoices a month", "Time tracking"] },
        { name: "Pro", price: "Paid monthly or yearly", note: "For freelancers running their business on Billleaf", items: ["Unlimited clients and invoices", "Your logo and colours on documents", "Recurring invoices", "API access"] },
        { name: "Team", price: "Paid monthly or yearly", note: "For studios and agencies working together", items: ["Unlimited members", "Custom roles", "Timesheet approvals", "Everything in Pro"] },
      ],
      footnote: "Current prices are on billleaf.com/pricing.",
      cta: { label: "See pricing", href: "https://billleaf.com/pricing" },
    },
    faq: [
      { q: "Is there a free plan?", a: "Yes. The Free plan covers your first clients and invoices, with time tracking included. Upgrade to Pro or Team when you need more." },
      { q: "Can I invoice in my client's currency?", a: "Yes. Each client and invoice can use its own currency, and PDFs render Latin, Thai and Myanmar scripts." },
      { q: "How do clients pay me?", a: "Clients pay you the way you already accept money, such as bank transfer, cash or a mobile wallet. They can send proof of payment from the portal, and recording the payment issues a receipt." },
      { q: "Do my clients need an account?", a: "No. They open the portal from an emailed link to accept quotes, sign contracts and download invoices and receipts." },
    ],
    hero: billleafShots.dashboard,
    mobile: billleafShots.mInvoice,
    gallery: [billleafShots.dashboard, billleafShots.project, billleafShots.reports],
  },
]

export function getProduct(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug)
}
