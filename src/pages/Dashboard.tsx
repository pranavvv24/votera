import React from 'react'
import { Link } from 'react-router-dom'

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen p-6 sm:p-10 max-w-5xl mx-auto">
      <header className="flex items-center justify-between pb-6 border-b border-slate-800 mb-8">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            StellarPoll
          </Link>
          <span className="text-xs px-2 py-0.5 rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono">
            Testnet
          </span>
        </div>
        <Link to="/" className="text-xs text-slate-400 hover:text-white transition-colors">
          &larr; Back to Home
        </Link>
      </header>

      <main>
        <h1 className="text-3xl font-bold mb-2">Polls Dashboard</h1>
        <p className="text-slate-400 text-sm mb-6">
          Explore active on-chain community polls or cast your vote.
        </p>

        <div className="p-8 rounded-xl border border-dashed border-slate-800 bg-slate-900/40 text-center">
          <p className="text-slate-500 text-sm font-mono">
            [Dashboard view will be implemented in subsequent phases]
          </p>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
