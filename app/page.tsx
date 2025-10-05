import Header from "@/components/Header"
import Footer from "@/components/Footer"
import TypeformEmbed from "@/components/TypeformEmbed"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#f5f5f5] py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-balance">Apply Now</h1>
            <p className="text-lg text-[#666666]">
              Complete the application below to be considered for this opportunity.
            </p>
          </div>
        </section>

        {/* Application Section */}
        <section className="py-10 px-4">
          <div className="max-w-[800px] mx-auto">
            <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] p-5 md:p-10">
              <TypeformEmbed />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
