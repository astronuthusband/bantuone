'use client';

import Link from "next/link";


export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-orange-600">BantuOne</div>
          <div className="space-x-6 text-sm md:text-base">
            <a href="/" className="text-gray-700 hover:text-orange-600 font-medium">Home</a>
            <a href="/how-it-works" className="text-gray-700 hover:text-orange-600 font-medium">How It Works</a>
            <a href="/campaigns" className="text-gray-700 hover:text-orange-600 font-medium">Campaigns</a>
            <Link href="/start" className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full font-medium">➕ Start a Campaign</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-b from-orange-100 to-white px-6">

        <h1 className="text-5xl md:text-6xl font-bold text-orange-600 mb-4">
          Turn RM1 Into Real Help
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mb-8">
          BantuOne connects caring Malaysians with real people in need. Just RM1 can change someone's life.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="/campaigns"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg"
          >
            🧡 Donate Now
          </a>
          <a
            href="/start"
            className="border-2 border-orange-500 text-orange-500 hover:bg-orange-100 px-8 py-3 rounded-full font-semibold text-lg"
          >
            ➕ Start a Campaign
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-12 px-6" id="how">

        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-orange-600">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="p-6 rounded-xl border hover:shadow-md transition bg-orange-50">
              <h3 className="text-xl font-semibold mb-2">🔎 Discover</h3>
              <p>Explore real stories and verified campaigns from across Malaysia.</p>
            </div>
            <div className="p-6 rounded-xl border hover:shadow-md transition bg-orange-50">
              <h3 className="text-xl font-semibold mb-2">💸 Donate</h3>
              <p>Send RM1 or more instantly using online banking or eWallet.</p>
            </div>
            <div className="p-6 rounded-xl border hover:shadow-md transition bg-orange-50">
              <h3 className="text-xl font-semibold mb-2">📷 See Impact</h3>
              <p>Get updates and photos showing how your RM1 helped someone in need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="bg-orange-100 py-20 px-6" id="campaigns">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-orange-600">Featured Campaigns</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Campaign 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img
                src="https://www.wikiimpact.com/wp-content/uploads/2021/03/fgh.jpg"
                alt="Hot Meals"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Hot Meals for Homeless</h3>
              <p className="mb-4 text-gray-600">Provide warm food to homeless people around KL Sentral.</p>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full inline-block">
                Donate RM1
              </a>
            </div>

            {/* Campaign 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350"
                alt="School Kits"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">School Kits for Orphans</h3>
              <p className="mb-4 text-gray-600">Support 30 orphans in Kedah with school bags and supplies.</p>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full inline-block">
                Donate RM1
              </a>
            </div>

            {/* Campaign 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img
                 src="https://cdn4.premiumread.com/?url=https://malaymail.com/malaymail/uploads/images/2024/12/01/247776.JPG&w=1000&q=100&f=jpg&t=6"
  alt="Flood Relief"
  className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Flood Relief in Kelantan</h3>
              <p className="mb-4 text-gray-600">Send urgent supplies to families affected by monsoon floods.</p>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full inline-block">
                Donate RM1
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t text-center py-6 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} BantuOne. Built with ❤️ in Malaysia.</p>
        <p className="text-xs">Contact us: bantuone@gmail.com</p>
      </footer>
    </>
  );
}
