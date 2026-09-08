import React from 'react'
import { Wallet, PlusCircle, Vote, CheckCircle2 } from 'lucide-react'
import { HOW_IT_WORKS_STEPS } from '../../data/mockData'
import type { HowItWorksStep } from '../../data/mockData'

interface HowItWorksSectionProps {
  steps?: HowItWorksStep[]
}

const getIcon = (iconName: HowItWorksStep['iconName']) => {
  switch (iconName) {
    case 'wallet':
      return <Wallet className="w-6 h-6 text-sky-400" />
    case 'plus-circle':
      return <PlusCircle className="w-6 h-6 text-indigo-400" />
    case 'vote':
      return <Vote className="w-6 h-6 text-emerald-400" />
    default:
      return <CheckCircle2 className="w-6 h-6 text-sky-400" />
  }
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  steps = HOW_IT_WORKS_STEPS,
}) => {
  return (
    <section id="how-it-works" className="py-20 bg-[#090D17] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-medium uppercase tracking-wider">
            Architecture Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How StellarPoll Works
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Three simple steps to trustless, decentralized community governance on Stellar Testnet.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.stepNumber}
              className="relative rounded-2xl bg-[#111827]/80 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5"
            >
              {/* Step Header */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(step.iconName)}
                  </div>
                  <span className="text-2xl font-extrabold font-mono text-slate-700 group-hover:text-slate-500 transition-colors">
                    {step.stepNumber}
                  </span>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-800 text-sky-400 mb-3 border border-slate-700/60">
                  {step.badge}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
