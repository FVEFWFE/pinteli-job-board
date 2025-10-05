"use client"
import Script from "next/script"

export default function TypeformEmbed() {
  const typeformId = process.env.NEXT_PUBLIC_TYPEFORM_ID || "TYPEFORM_ID_PLACEHOLDER"

  return (
    <>
      {/*
        Typeform embed - ID configured via NEXT_PUBLIC_TYPEFORM_ID environment variable
        Set in .env.local for development, Vercel environment variables for production
      */}
      <div
        data-tf-widget={typeformId}
        data-tf-opacity="0"
        data-tf-iframe-props="title=Content Producer Application"
        data-tf-medium="snippet"
        className="min-h-[600px] w-full"
        aria-label="Content Producer Application form"
      />

      <Script src="//embed.typeform.com/next/embed.js" strategy="lazyOnload" />
    </>
  )
}
