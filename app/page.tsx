export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          For Restaurant Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Optimize Restaurant Shifts<br />
          <span className="text-[#58a6ff]">Based on Sales Patterns</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your POS system, analyze historical sales data, and let our algorithm auto-generate staff schedules that cut labor costs without sacrificing service quality.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Optimizing — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No contracts. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">POS Integration</h3>
            <p className="text-sm text-[#8b949e]">Pulls historical sales data directly from your POS to identify demand patterns by hour and day.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-semibold text-white mb-1">Smart Scheduling</h3>
            <p className="text-sm text-[#8b949e]">ML-powered engine predicts staffing needs and generates optimized shift schedules automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">💰</div>
            <h3 className="font-semibold text-white mb-1">Cut Labor Costs</h3>
            <p className="text-sm text-[#8b949e]">Reduce overstaffing during slow periods and avoid understaffing during rushes — saving real money.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <p className="text-[#8b949e] mb-6">per month, per location</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited staff members</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> POS data sync &amp; analysis</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Auto-generated weekly schedules</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Labor cost forecasting</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email &amp; SMS shift reminders</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which POS systems do you support?</h3>
            <p className="text-sm text-[#8b949e]">We integrate with Square, Toast, Clover, and Lightspeed. More integrations are added regularly based on customer demand.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How much data do I need to get started?</h3>
            <p className="text-sm text-[#8b949e]">We recommend at least 4 weeks of sales history for accurate predictions, but the algorithm improves continuously as more data is collected.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I override the generated schedules?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. The generated schedule is a starting point. You can drag, drop, and edit any shift before publishing it to your team.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-sm text-[#6e7681]">
        © {new Date().getFullYear()} ShiftSmart. All rights reserved.
      </footer>
    </main>
  );
}
