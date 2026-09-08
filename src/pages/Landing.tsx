import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/landing/HeroSection'
import HowItWorksSection from '../components/landing/HowItWorksSection'
import WhyOnChainSection from '../components/landing/WhyOnChainSection'
import WhyStellarSection from '../components/landing/WhyStellarSection'
import CtaSection from '../components/landing/CtaSection'
import {
  NAV_LINKS,
  HERO_DATA,
  HERO_STATS,
  MOCK_HERO_POLL,
  HOW_IT_WORKS_STEPS,
  WHY_ON_CHAIN_COMPARISON,
  WHY_STELLAR_BENEFITS,
} from '../data/mockData'

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col selection:bg-sky-500/30 selection:text-sky-200">
      {/* 1. Header (Navbar with Testnet Badge & Connect Placeholder) */}
      <Header navLinks={NAV_LINKS} />

      {/* Main Landing Flow */}
      <main className="flex-1">
        {/* 2. Hero Section with Live Poll Preview */}
        <HeroSection
          heroData={HERO_DATA}
          stats={HERO_STATS}
          mockPoll={MOCK_HERO_POLL}
        />

        {/* 3. How It Works (3-Step Workflow) */}
        <HowItWorksSection steps={HOW_IT_WORKS_STEPS} />

        {/* 4. Why On-Chain (Comparison Table) */}
        <WhyOnChainSection comparisons={WHY_ON_CHAIN_COMPARISON} />

        {/* 5. Why Stellar (3-Card Feature Breakdown) */}
        <WhyStellarSection benefits={WHY_STELLAR_BENEFITS} />

        {/* 6. Final Call To Action */}
        <CtaSection />
      </main>

      {/* 7. Footer with Network Disclaimer & Links */}
      <Footer navLinks={NAV_LINKS} />
    </div>
  )
}

export default Landing
