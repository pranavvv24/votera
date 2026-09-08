import React from 'react'
import { Zap, ShieldCheck, Cpu } from 'lucide-react'
import { WHY_STELLAR_BENEFITS } from '../../data/mockData'
import type { StellarBenefit } from '../../data/mockData'

interface WhyStellarSectionProps {
  benefits?: StellarBenefit[]
}

const getBenefitIcon = (iconName: StellarBenefit['iconName']) => {
  switch (iconName) {
    case 'zap':
      return <Zap className="w-6 h-6 text-sky-400" />
    case 'shield-check':
      return <ShieldCheck className="w-6 h-6 text-emerald-400" />
    case 'cpu':
      return <Cpu className="w-6 h-6 text-indigo-400" />
    default:
      return <Zap className="w-6 h-6 text-sky-400" />
  }
}

export const WhyStellarSection: React.FC<WhyStellarSectionProps> = ({
  benefits = WHY_STELLAR_BENEFITS,
}) => {
  return (
    <section id="why-stellar" className="py-20 bg-[#090D17] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium uppercase tracking-wider">
            Network Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Built on Stellar?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Purpose-built infrastructure for lightning-fast, cost-efficient, and secure decentralized applications.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((card) => (
            <div
              key={card.title}
              className="relative rounded-2xl bg-gradient-to-b from-[#131B2E] to-[#0D1424] border border-slate-800 p-8 flex flex-col justify-between hover:border-sky-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getBenefitIcon(card.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                    {card.metric}
                  </span>
                </div>

                <div className="text-xs font-mono text-emerald-400 mb-2 font-medium">
                  {card.highlight}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyStellarSection
