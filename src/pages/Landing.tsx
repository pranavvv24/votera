import React from 'react'
import { Link } from 'react-router-dom'

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-mono mb-6">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        STELLAR TESTNET
      </div>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
        StellarPoll
      </h1>
      <p className="text-slate-400 max-w-md mb-8 text-base sm:text-lg">
        Decentralized, verifiable on-chain polling built on Stellar Soroban smart contracts.
      </p>
      <Link
        to="/app"
        className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition-all duration-200 shadow-lg shadow-sky-500/20"
      >
        Launch Dashboard &rarr;
      </Link>
    </div>
  )
}

export default Landing
