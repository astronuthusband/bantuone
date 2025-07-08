export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-6">How BantuOne Works</h1>
        <p className="text-lg mb-12 text-gray-600">
          In just 3 simple steps, you can help someone in need — with as little as RM1.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-orange-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2">1. Discover</h2>
            <p>
              Browse real, verified campaigns by individuals, families, or NGOs across Malaysia who need your help.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2">2. Donate</h2>
            <p>
              Choose a campaign and donate RM1 or more instantly using secure payment links (online banking or eWallets).
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2">3. See the Impact</h2>
            <p>
              Campaign creators share updates, photos, and progress — so you can feel how your RM1 made a difference.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
