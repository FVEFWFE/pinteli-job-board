import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-[#dddddd] bg-white py-5 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-3" aria-label="Footer navigation">
          <Link href="/privacy" className="text-sm text-[#666666] hover:underline">
            Privacy Policy
          </Link>
          <span className="text-sm text-[#999999] mx-2">|</span>
          <a href="mailto:applications@digitalcreatornetwork.com" className="text-sm text-[#666666] hover:underline">
            Contact
          </a>
        </nav>
        <p className="text-sm text-[#999999]">© 2025 Digital Creator Network. All rights reserved.</p>
      </div>
    </footer>
  )
}
