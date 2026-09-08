export interface PollOption {
  id: number
  text: string
  votes: number
  percentage: number
}

export interface MockPoll {
  id: string
  title: string
  description: string
  creator: string
  status: 'active' | 'ended'
  timeLeft: string
  totalVotes: number
  options: PollOption[]
  contractId: string
}

export interface HowItWorksStep {
  stepNumber: string
  title: string
  description: string
  iconName: 'wallet' | 'plus-circle' | 'vote'
  badge: string
}

export interface ComparisonRow {
  feature: string
  traditional: string
  stellarPoll: string
}

export interface StellarBenefit {
  title: string
  metric: string
  description: string
  iconName: 'zap' | 'shield-check' | 'cpu'
  highlight: string
}

export interface NavLink {
  label: string
  href: string
}

export interface StatItem {
  value: string
  label: string
  sublabel: string
}

export const HERO_DATA = {
  badge: 'RISE IN YELLOW BELT • SOROBAN TESTNET',
  title: 'Verifiable On-Chain Polling on Stellar',
  subtitle:
    'Create tamper-proof community polls, cast cryptographic votes, and audit tally results directly on Stellar Testnet with Soroban smart contracts.',
  primaryCta: 'Launch Dashboard',
  secondaryCta: 'Explore How It Works',
}

export const HERO_STATS: StatItem[] = [
  { value: '~5s', label: 'Consensus Finality', sublabel: 'Stellar Consensus Protocol' },
  { value: '< $0.0001', label: 'Average Tx Fee', sublabel: 'Accessible micro-governance' },
  { value: '100%', label: 'Cryptographic Audit', sublabel: 'Permanent on-chain ledger' },
  { value: '0 KYC', label: 'Decentralized', sublabel: 'Self-custodial wallet access' },
]

export const MOCK_HERO_POLL: MockPoll = {
  id: 'poll-01',
  title: 'Should the Stellar Community fund the next Soroban Developer Grant?',
  description:
    'Proposal to allocate 100,000 XLM from community treasury for open-source developer tooling and smart contract education.',
  creator: 'GB7N...4W9X',
  status: 'active',
  timeLeft: '2 days left',
  totalVotes: 842,
  contractId: 'CA7Q...9K2M',
  options: [
    { id: 0, text: 'Yes — Approve 100,000 XLM Allocation', votes: 614, percentage: 73 },
    { id: 1, text: 'No — Request Revised Scope & Milestones', votes: 168, percentage: 20 },
    { id: 2, text: 'Abstain / Need Discussion', votes: 60, percentage: 7 },
  ],
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    stepNumber: '01',
    title: 'Connect Testnet Wallet',
    description:
      'Link your Freighter or supported Stellar wallet in one click. No registration or personal data required.',
    iconName: 'wallet',
    badge: 'StellarWalletsKit',
  },
  {
    stepNumber: '02',
    title: 'Deploy or Browse Polls',
    description:
      'Initialize a multi-option poll with immutable voting parameters stored in Soroban smart contract storage.',
    iconName: 'plus-circle',
    badge: 'Soroban State',
  },
  {
    stepNumber: '03',
    title: 'Cast & Verify On-Chain Vote',
    description:
      'Sign a Soroban invocation to record your vote permanently on the Stellar ledger with instant cryptographic proof.',
    iconName: 'vote',
    badge: 'Cryptographic Proof',
  },
]

export const WHY_ON_CHAIN_COMPARISON: ComparisonRow[] = [
  {
    feature: 'Data Immutability',
    traditional: 'Central database records can be altered, pruned, or manipulated by admins.',
    stellarPoll: 'Permanent, tamper-proof state stored directly on Stellar Testnet ledger.',
  },
  {
    feature: 'Tally Transparency',
    traditional: 'Black-box server counting; results cannot be audited independently.',
    stellarPoll: 'Public Soroban smart contract logic automatically tallies every vote in real-time.',
  },
  {
    feature: 'Vote Verifiability',
    traditional: 'Voters receive no cryptographic receipt proving their vote was counted.',
    stellarPoll: 'Each vote produces a unique transaction hash verifiable on Stellar Expert.',
  },
  {
    feature: 'Censorship Resistance',
    traditional: 'Single server failure or platform censorship can cancel any poll.',
    stellarPoll: 'Decentralized node consensus guarantees non-stop uptime and censorship resistance.',
  },
  {
    feature: 'Sybil & Double-Voting',
    traditional: 'Vulnerable to bot farms, temporary emails, and fake identity injection.',
    stellarPoll: 'Smart contract enforces one-vote-per-Stellar-public-key at the protocol level.',
  },
]

export const WHY_STELLAR_BENEFITS: StellarBenefit[] = [
  {
    title: 'Sub-Second Finality',
    metric: '~5 Seconds',
    description:
      'Built on the Stellar Consensus Protocol (SCP), transactions settle with deterministic finality in seconds rather than minutes.',
    iconName: 'zap',
    highlight: 'Instant Confirmation',
  },
  {
    title: 'Near-Zero Gas Costs',
    metric: '< $0.0001 / vote',
    description:
      'Micro-fractions of a cent per vote make decentralized polling feasible for communities of any size without prohibitive gas spikes.',
    iconName: 'shield-check',
    highlight: 'Frictionless Voting',
  },
  {
    title: 'Rust Soroban Contracts',
    metric: 'Wasm Native',
    description:
      'State-of-the-art WebAssembly environment with batteries-included security, predictable resource metering, and auditable Rust code.',
    iconName: 'cpu',
    highlight: 'Enterprise Security',
  },
]

export const NAV_LINKS: NavLink[] = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why On-Chain', href: '#why-on-chain' },
  { label: 'Why Stellar', href: '#why-stellar' },
]

export const TRANSACTION_STATES = [
  { id: 'idle', label: 'IDLE' },
  { id: 'preparing', label: 'PREPARING' },
  { id: 'simulating', label: 'SIMULATING' },
  { id: 'signing', label: 'SIGNING' },
  { id: 'pending', label: 'PENDING' },
  { id: 'success', label: 'SUCCESS' },
]
