// App.tsx — Solana-Themed UI (no logic, just layout)

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e] text-gray-200">
      {/* Navigation Bar */}
      <nav className="backdrop-blur bg-[#141422]/70 shadow-md border-b border-[#2a2a40] p-4 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <a href="#" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFA3]">
            CertifyDAO
          </a>
          <a href="#" className="text-sm hover:text-[#14F195] transition">Issue</a>
          <a href="#" className="text-sm hover:text-[#14F195] transition">Certificates</a>
        </div>
        <button className="px-4 py-1.5 bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded text-sm font-medium text-black hover:opacity-90 transition">
          Connect Wallet
        </button>
      </nav>

      {/* Main Content */}
      <main className="py-10">
        {/* Home Section */}
        <section className="p-8 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFA3] bg-clip-text text-transparent">
            CertifyDAO Prototype
          </h1>
          <p className="mt-4 text-gray-400">
            Connect issuer wallet → upload certificate → backend prepares unsigned txn & pins metadata → review & sign → broadcast & record on-chain.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-gradient-to-r from-[#9945FF] to-[#14F195] text-black px-5 py-2 rounded font-medium hover:opacity-90 transition">
              Issue Certificate
            </button>
            <button className="border border-[#2a2a40] hover:border-[#14F195] hover:text-[#14F195] px-5 py-2 rounded font-medium transition">
              View Certificates
            </button>
          </div>
        </section>

        {/* Issue Certificate Section */}
        <section className="p-8 max-w-3xl mx-auto mt-12 rounded-2xl bg-[#141422]/80 border border-[#2a2a40] backdrop-blur">
          <h2 className="text-2xl font-bold mb-5 text-[#14F195]">Issue Certificate</h2>
          <div className="mb-4 text-sm text-gray-400">
            Connected as <b className="text-[#14F195]">Account</b> — ✅ Institute
          </div>

          <form>
            <label className="block mb-2 text-sm">Student Name</label>
            <input className="w-full bg-[#0a0a14] border border-[#2a2a40] text-gray-200 p-2 rounded mb-4 focus:border-[#14F195] outline-none" placeholder="Enter student name" />

            <label className="block mb-2 text-sm">Course Name</label>
            <input className="w-full bg-[#0a0a14] border border-[#2a2a40] text-gray-200 p-2 rounded mb-4 focus:border-[#14F195] outline-none" placeholder="Enter course name" />

            <label className="block mb-2 text-sm">Student Wallet</label>
            <input className="w-full bg-[#0a0a14] border border-[#2a2a40] text-gray-200 p-2 rounded mb-4 focus:border-[#14F195] outline-none" placeholder="Enter wallet address" />

            <label className="block mb-2 text-sm">Certificate File</label>
            <input type="file" className="mb-4 text-sm" />

            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-[#9945FF] to-[#14F195] text-black px-5 py-2 rounded font-medium hover:opacity-90 transition">
                Upload & Prepare
              </button>
              <button className="border border-[#2a2a40] px-5 py-2 rounded hover:border-[#14F195] hover:text-[#14F195] transition">
                Cancel
              </button>
            </div>
          </form>
        </section>

        {/* Review & Sign Section */}
        <section className="p-8 max-w-3xl mx-auto mt-12 rounded-2xl bg-[#141422]/80 border border-[#2a2a40] backdrop-blur">
          <h2 className="text-2xl font-bold mb-4 text-[#14F195]">Review & Sign Certificate</h2>
          <p className="text-gray-400 mb-5">
            Review certificate details and sign the transaction securely using your connected wallet.
          </p>
          <button className="bg-gradient-to-r from-[#9945FF] to-[#14F195] text-black px-5 py-2 rounded font-medium hover:opacity-90 transition">
            Sign Transaction
          </button>
        </section>

        {/* Certificates List Section */}
        <section className="p-8 max-w-4xl mx-auto mt-12 rounded-2xl bg-[#141422]/80 border border-[#2a2a40] backdrop-blur">
          <h2 className="text-2xl font-bold mb-4 text-[#14F195]">Issued Certificates</h2>
          <div className="grid gap-5">
            <div className="p-5 border border-[#2a2a40] rounded-xl bg-[#0a0a14]/60 flex justify-between items-center hover:border-[#14F195] transition">
              <div>
                <div><b className="text-[#14F195]">Asset ID:</b> 12345</div>
                <div className="text-sm text-gray-500">Owner: WALLETADDRESS123</div>
                <div className="text-sm text-gray-500">Fingerprint: abcd1234...</div>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-[#9945FF] hover:text-[#14F195] transition">Metadata</a>
                <a href="#" className="border border-[#2a2a40] px-3 py-1 rounded hover:border-[#14F195] hover:text-[#14F195] transition">
                  View
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
