import React from 'react'
import { Sparkles, ExternalLink, ShieldCheck, Code2 } from 'lucide-react'
import type { NavLink } from '../../data/mockData'

interface FooterProps {
  navLinks: NavLink[]
}

export const Footer: React.FC<FooterProps> = ({ navLinks }) => {
  return (
    <footer className="w-full bg-[#080B12] border-t border-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-sky-400" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">StellarPoll</span>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            Decentralized on-chain governance and community voting platform powered by Stellar Soroban smart contracts.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Stellar Testnet Only • Rise In Yellow Belt</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-sky-400 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/app" className="hover:text-sky-400 transition-colors">
                Polls Dashboard
              </a>
            </li>
          </ul>
        </div>

        {/* Stellar Resources */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
            Ecosystem & Docs
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                href="https://soroban.stellar.org/docs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <span>Soroban Documentation</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
            <li>
              <a
                href="https://stellar.expert/explorer/testnet"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <span>StellarExpert Explorer</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/pranavvv24/votera"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <Code2 className="w-3.5 h-3.5 text-slate-400" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} StellarPoll. Built for Rise In Stellar Yellow Belt Program.</p>
        <div className="flex items-center gap-4 font-mono">
          <span>Protocol 22</span>
          <span>•</span>
          <span className="text-emerald-400">Network: TESTNET</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
