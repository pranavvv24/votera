import React from 'react'
import { Link } from 'react-router-dom'
import { Wallet, Sparkles, ArrowRight } from 'lucide-react'
import type { NavLink } from '../../data/mockData'

interface HeaderProps {
  navLinks: NavLink[]
  onConnectWallet?: () => void
}

export const Header: React.FC<HeaderProps> = ({ navLinks, onConnectWallet }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0B0F19]/80 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-0.5 shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all">
            <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-sky-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-slate-100 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
              StellarPoll
            </span>
          </div>
        </Link>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-sky-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls & Testnet Badge */}
        <div className="flex items-center gap-3">
          {/* Testnet Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Testnet
          </div>

          {/* Connect Wallet / Launch App Placeholder */}
          <button
            type="button"
            onClick={onConnectWallet}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 text-xs font-medium transition-all cursor-pointer"
          >
            <Wallet className="w-3.5 h-3.5 text-sky-400" />
            <span>Connect Wallet</span>
          </button>

          <Link
            to="/app"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs sm:text-sm font-semibold transition-all shadow-md shadow-sky-500/20 hover:shadow-sky-500/30"
          >
            <span>Launch App</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
