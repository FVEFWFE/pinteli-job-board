"use client"
import Script from "next/script"

export default function TypeformEmbed() {
  return (
    <>
      <div
        data-tf-live="01K6ST6CMM96N8G10Q1P7RB89W"
        className="min-h-[600px] w-full"
      />

      <Script src="//embed.typeform.com/next/embed.js" strategy="lazyOnload" />
    </>
  )
}
