import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { PollPreviewCard } from './PollPreviewCard'
import { HERO_DATA, HERO_STATS, MOCK_HERO_POLL } from '../../data/mockData'
import type { StatItem, MockPoll } from '../../data/mockData'

interface HeroSectionProps {
  heroData?: typeof HERO_DATA
  stats?: StatItem[]
  mockPoll?: MockPoll
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroData = HERO_DATA,
  stats = HERO_STATS,
  mockPoll = MOCK_HERO_POLL,
}) => {
  return (
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy, CTAs, Stats */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Rise In Yellow Belt Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-mono tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>{heroData.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Verifiable{' '}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                On-Chain Polling
              </span>{' '}
              on Stellar
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {heroData.subtitle}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/app"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-400 hover:to-sky-300 text-slate-950 font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5"
              >
                <span>{heroData.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-medium text-sm sm:text-base transition-all duration-200 hover:border-slate-600"
              >
                <span>{heroData.secondaryCta}</span>
              </a>
            </div>

            {/* Trust Highlights Row */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              {stats.map((stat) => (
                <div key={stat.label} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                  <div className="text-lg sm:text-xl font-bold font-mono text-sky-400">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">{stat.label}</div>
                  <div className="text-[11px] text-slate-500 truncate">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Poll Preview Card */}
          <div className="lg:col-span-5">
            <PollPreviewCard poll={mockPoll} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
