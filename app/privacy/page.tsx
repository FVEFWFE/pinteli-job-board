import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold mb-8">Privacy Policy</h1>

          <div className="space-y-6 text-[#666666]">
            <section>
              <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">Information We Collect</h2>
              <p className="leading-relaxed">
                Digital Creator Network collects application data for hiring purposes only. This includes information you
                provide in the application form such as your name, email address, employment status, and responses to
                qualification questions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">How We Use Your Information</h2>
              <p className="leading-relaxed">
                We use the information you provide solely to:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Evaluate your application for the Content Producer position</li>
                <li>Communicate with you about your application status</li>
                <li>Send you relevant information about opportunities that match your profile</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">Data Storage and Security</h2>
              <p className="leading-relaxed">
                Your application data is stored securely using industry-standard encryption. We retain application data
                for 90 days for non-selected candidates, and indefinitely for accepted candidates as part of employment
                records.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">Third-Party Services</h2>
              <p className="leading-relaxed">
                We use the following third-party services to process applications:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Typeform - Application form hosting and data collection</li>
                <li>PostHog - Privacy-focused analytics (no personal data shared)</li>
                <li>Email service providers - For communication regarding your application</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">Your Rights (GDPR Compliance)</h2>
              <p className="leading-relaxed">
                If you are in the European Union, you have the right to:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Access your application data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for data processing</li>
                <li>Object to automated decision-making</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">Cookies and Tracking</h2>
              <p className="leading-relaxed">
                This website uses PostHog analytics with localStorage-based tracking (no cookies). We do not use
                retargeting pixels or third-party advertising cookies on this application page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">Contact Us</h2>
              <p className="leading-relaxed">
                For questions regarding our privacy practices, to exercise your data rights, or for any concerns about
                your application data, please contact:{" "}
                <a href="mailto:applications@digitalcreatornetwork.com" className="text-[#3b82f6] hover:underline font-medium">
                  applications@digitalcreatornetwork.com
                </a>
              </p>
            </section>

            <section>
              <p className="text-sm text-[#999999] mt-8">
                Last updated: October 5, 2025
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
