"use client"

import { FormEvent, Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const TOPICS = [
  { value: "fom", label: "FOM Order Manager" },
  { value: "billleaf", label: "Billleaf" },
  { value: "services", label: "A custom project" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Something else" },
]

function TopicSelect({ defaultValue = "other" }: { defaultValue?: string }) {
  return (
    <select id="topic" name="topic" defaultValue={defaultValue} className="h-[46px] w-full rounded-sm border border-border-strong bg-card px-4 text-sm outline-none transition-[border-color,box-shadow] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-brand-soft">
      {TOPICS.map((topic) => <option key={topic.value} value={topic.value}>{topic.label}</option>)}
    </select>
  )
}

/** Preselects the topic from `?topic=` (for example the Services page's "Start a project"). */
function TopicFromUrl() {
  const requested = useSearchParams().get("topic")
  const value = TOPICS.some((topic) => topic.value === requested) ? requested! : "other"
  return <TopicSelect key={value} defaultValue={value} />
}

export function ContactForm() {
  const [status, setStatus] = useState("")

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const topic = TOPICS.find((item) => item.value === data.get("topic"))?.label ?? "General"
    const subject = encodeURIComponent(`${topic}: website enquiry from ${data.get("name")}`)
    const body = encodeURIComponent(`Topic: ${topic}\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company") || "—"}\n\n${data.get("message")}`)
    setStatus("Your email app should open with your message ready to send.")
    window.location.href = `mailto:aetheria.techmm@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name"><Input id="name" name="name" autoComplete="name" required /></Field>
        <Field label="Email" htmlFor="email"><Input id="email" name="email" type="email" autoComplete="email" required /></Field>
      </div>
      <Field label="What is it about?" htmlFor="topic"><Suspense fallback={<TopicSelect />}><TopicFromUrl /></Suspense></Field>
      <Field label="Company (optional)" htmlFor="company"><Input id="company" name="company" autoComplete="organization" /></Field>
      <Field label="Message" htmlFor="message"><Textarea id="message" name="message" required /></Field>
      <Button type="submit" size="lg" className="w-full">Prepare email</Button>
      <p className="min-h-5 text-sm text-muted-foreground" role="status">{status}</p>
    </form>
  )
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return <div className="space-y-2"><label htmlFor={htmlFor} className="text-sm font-medium">{label}</label>{children}</div>
}
