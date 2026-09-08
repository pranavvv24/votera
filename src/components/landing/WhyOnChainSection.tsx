import React from 'react'
import { XCircle, CheckCircle2, Sparkles } from 'lucide-react'
import { WHY_ON_CHAIN_COMPARISON } from '../../data/mockData'
import type { ComparisonRow } from '../../data/mockData'

interface WhyOnChainSectionProps {
  comparisons?: ComparisonRow[]
}

export const WhyOnChainSection: React.FC<WhyOnChainSectionProps> = ({
  comparisons = WHY_ON_CHAIN_COMPARISON,
}) => {
  return (
    <section id="why-on-chain" className="py-20 bg-[#0B0F19] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium uppercase tracking-wider">
            Trust Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why On-Chain Polling Matters
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Compare vulnerable centralized voting with trustless, cryptographic verification on Stellar Soroban.
          </p>
        </div>

        {/* Comparison Table / Grid */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0E1526]/60 backdrop-blur-sm shadow-xl">
          {/* Header row */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-900/90 border-b border-slate-800 p-4 sm:p-5 text-sm font-semibold">
            <div className="md:col-span-4 text-slate-300">Feature Dimension</div>
            <div className="md:col-span-4 text-rose-400 flex items-center gap-1.5 mt-2 md:mt-0">
              <XCircle className="w-4 h-4 text-rose-500" />
              <span>Traditional Web2 Polling</span>
            </div>
            <div className="md:col-span-4 text-emerald-400 flex items-center gap-1.5 mt-2 md:mt-0">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>StellarPoll On-Chain</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-800/80">
            {comparisons.map((row, idx) => (
              <div
                key={row.feature}
                className={`grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm gap-3 md:gap-4 transition-colors hover:bg-slate-800/30 ${
                  idx % 2 === 0 ? 'bg-transparent' : 'bg-slate-900/20'
                }`}
              >
                {/* Feature Name */}
                <div className="md:col-span-4 font-bold text-slate-200 flex items-center">
                  {row.feature}
                </div>

                {/* Traditional Centralized */}
                <div className="md:col-span-4 text-slate-400 flex items-start gap-2 bg-rose-950/10 md:bg-transparent p-2.5 md:p-0 rounded-lg border border-rose-900/20 md:border-none">
                  <XCircle className="w-4 h-4 text-rose-500/80 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{row.traditional}</span>
                </div>

                {/* StellarPoll On-Chain */}
                <div className="md:col-span-4 text-slate-200 flex items-start gap-2 bg-emerald-950/10 md:bg-transparent p-2.5 md:p-0 rounded-lg border border-emerald-900/20 md:border-none">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{row.stellarPoll}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyOnChainSection
