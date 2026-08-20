import Header from "@/components/marketing/header"
import React from "react"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Header />
      {children}
    </section>
  )
}
