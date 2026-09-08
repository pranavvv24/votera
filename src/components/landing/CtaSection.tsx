import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export const CtaSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#0B0F19]">
      {/* Background Decorative Rings & Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-emerald-500/10 opacity-40 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#162038] to-[#0E1528] border border-slate-700/80 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          {/* Subtle Glow inside box */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-sky-500/20 blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Stellar Testnet • Open Access</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Empower Your Community with{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
              Verifiable Votes
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Experience the speed and cost efficiency of Stellar Soroban smart contracts. Deploy your first decentralized poll in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/app"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-slate-950 font-bold text-base transition-all duration-200 shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5"
            >
              <span>Launch Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://github.com/pranavvv24/votera"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-medium text-base transition-all duration-200"
            >
              <span>View Source on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
