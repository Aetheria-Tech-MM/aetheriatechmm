"use client"

import { FormEvent, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [status, setStatus] = useState("")

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Website enquiry from ${data.get("name")}`)
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company") || "—"}\n\n${data.get("message")}`)
    setStatus("Your email app should open with your message ready to send.")
    window.location.href = `mailto:aetheria.techmm@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name"><Input id="name" name="name" autoComplete="name" required /></Field>
        <Field label="Email" htmlFor="email"><Input id="email" name="email" type="email" autoComplete="email" required /></Field>
      </div>
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
