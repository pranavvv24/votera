import React, { useState } from 'react'
import { Clock, Users, Flame, Cpu } from 'lucide-react'
import type { MockPoll } from '../../data/mockData'

interface PollPreviewCardProps {
  poll: MockPoll
}

export const PollPreviewCard: React.FC<PollPreviewCardProps> = ({ poll }) => {
  const [selectedOption, setSelectedOption] = useState<number>(0)

  return (
    <div className="relative rounded-2xl bg-[#131B2E]/90 border border-slate-700/60 p-6 sm:p-7 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-sky-500/40">
      {/* Decorative Glow */}
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Card Header Meta */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-slate-800/80 mb-5">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Active
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
            <Clock className="w-3 h-3 text-slate-500" />
            {poll.timeLeft}
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3 text-sky-400" />
            {poll.totalVotes} votes
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-500">Contract: {poll.contractId}</span>
        </div>
      </div>

      {/* Poll Title & Description */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
          <Flame className="w-3.5 h-3.5" />
          Featured Proposal
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
          {poll.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          {poll.description}
        </p>
      </div>

      {/* Options List */}
      <div className="space-y-3 mb-6">
        {poll.options.map((opt) => {
          const isSelected = selectedOption === opt.id
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelectedOption(opt.id)}
              className={`w-full relative overflow-hidden text-left p-3.5 rounded-xl border transition-all duration-200 group cursor-pointer ${
                isSelected
                  ? 'border-sky-500 bg-sky-950/30 shadow-md shadow-sky-500/10'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900/90'
              }`}
            >
              {/* Progress Background Fill */}
              <div
                className={`absolute inset-y-0 left-0 transition-all duration-500 ease-out ${
                  isSelected ? 'bg-sky-500/15' : 'bg-slate-800/40'
                }`}
                style={{ width: `${opt.percentage}%` }}
              />

              {/* Option Text & Radio */}
              <div className="relative z-10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'border-sky-400 bg-sky-500 text-slate-950'
                        : 'border-slate-600 group-hover:border-slate-400'
                    }`}
                  >
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                  </div>
                  <span
                    className={`text-xs sm:text-sm font-medium ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {opt.text}
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs flex-shrink-0">
                  <span className={isSelected ? 'text-sky-400 font-bold' : 'text-slate-400'}>
                    {opt.percentage}%
                  </span>
                  <span className="text-slate-500">({opt.votes})</span>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Transaction Pipeline Badge State (Discrete Simulation Step Highlight) */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
          <span className="flex items-center gap-1.5 text-sky-400">
            <Cpu className="w-3 h-3" />
            6-Step Soroban Pipeline
          </span>
          <span className="text-emerald-400 font-semibold">Testnet Simulation Ready</span>
        </div>

        {/* Pipeline Step Badges */}
        <div className="grid grid-cols-6 gap-1 text-center font-mono text-[9px] sm:text-[10px]">
          <div className="py-1 rounded bg-slate-800/60 text-slate-400 border border-slate-700/50">IDLE</div>
          <div className="py-1 rounded bg-slate-800/60 text-slate-400 border border-slate-700/50">PREP</div>
          <div className="py-1 rounded bg-sky-500/20 text-sky-400 border border-sky-500/40 font-bold">SIMULATE</div>
          <div className="py-1 rounded bg-slate-800/60 text-slate-400 border border-slate-700/50">SIGN</div>
          <div className="py-1 rounded bg-slate-800/60 text-slate-400 border border-slate-700/50">PENDING</div>
          <div className="py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">SUCCESS</div>
        </div>
      </div>
    </div>
  )
}

export default PollPreviewCard
