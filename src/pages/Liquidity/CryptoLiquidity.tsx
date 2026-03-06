import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Coins, LineChart, CandlestickChart, BarChart3 } from 'lucide-react';
import { DotsBackground } from '../../components/DotsBackground';
import { IntegrationsOrbitSection } from '../../components/IntegrationsOrbitSection';
import { PropFaqSection } from '../../components/PropFaqSection';
import { LiquidityExecutionSection } from '../../components/liquidity/LiquidityExecutionSection';
import { LiquidityTechGridSection } from '../../components/liquidity/LiquidityTechGridSection';

const heroImage = '/assets/images/liquidity-crypto-hero.png';

const clientCards = [
  { label: 'Crypto brokers & exchanges', icon: CandlestickChart },
  { label: 'Hedge funds', icon: BarChart3 },
  { label: 'Prop trading firms', icon: LineChart },
  { label: 'Market makers', icon: Coins },
  { label: 'Institutional desks', icon: BarChart3 },
  { label: 'Algo & HFT desks', icon: LineChart },
];

const executionCards = [
  {
    title: 'Smart crypto aggregation, optimised for growth.',
    desc: 'Aggregate liquidity across venues and market makers into a single deep book so your traders see stable, competitive crypto pricing.',
  },
  {
    title: 'Tight‑spread architecture, designed for ROI.',
    desc: 'Control spreads, mark‑ups and routing rules per symbol or venue so you can grow volume without giving up healthy margins.',
  },
  {
    title: 'Intelligent risk management, engineered for volatility.',
    desc: 'Pair crypto liquidity with exposure tools that help your team react quickly to sudden moves, funding events and news‑driven spikes.',
  },
];

const techCards = [
  {
    title: 'Liquidity APIs',
    desc: 'Connect your exchange, brokerage or venue to deep crypto liquidity via APIs built for latency‑sensitive trading.',
  },
  {
    title: 'Trading platform integration',
    desc: 'Integrate web, mobile and third‑party front‑ends into one crypto liquidity engine with consistent pricing and routing.',
  },
  {
    title: 'Bridge & aggregation software',
    desc: 'Route flow across exchanges, OTC desks and market makers while optimising for spreads, depth and execution speed.',
  },
  {
    title: 'Connectivity & data feeds',
    desc: 'Use institutional‑grade connectivity and multi‑venue data so your crypto pricing stays accurate even when markets move fast.',
  },
];

const cryptoRiskTools = [
  'Automated & intelligent hedging / exposure management',
  'Profit optimisation & revenue protection',
  'Advanced analytics & reporting for informed decisions',
  'Fraud & abusive trading prevention',
  'Seamless integration with the Finovo ecosystem',
  'Scalability & reliability',
];

const cryptoFaqs = [
  {
    id: 'assets',
    question: 'Which crypto assets can I access?',
    answer:
      'We connect you to a curated range of major and emerging crypto assets, with the flexibility to align the universe to your risk policy and client demand.',
  },
  {
    id: 'venues',
    question: 'How do you aggregate liquidity across venues?',
    answer:
      'Our stack connects to multiple exchanges, OTC desks and market makers, aggregating their order books into a single depth of market for your traders.',
  },
  {
    id: 'volatility',
    question: 'How do you handle extreme crypto volatility?',
    answer:
      'We combine dynamic margin, configurable limits and exposure tools so your risk team can respond quickly when volatility spikes.',
  },
  {
    id: 'integration',
    question: 'Can you integrate with our existing crypto stack?',
    answer:
      'Yes. We integrate with common CRMs, trading front‑ends and wallets so liquidity, accounts and reporting stay in sync.',
  },
  {
    id: 'launch-time',
    question: 'How long does it take to launch?',
    answer:
      'Most clients go live in weeks once licences, KYC and integrations are confirmed – not months.',
  },
];

export default function CryptoLiquidity() {
  return (
    <div className="pb-24">
      {/* Hero – Institutional crypto liquidity */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block pointer-events-none">
          <DotsBackground />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <p className="text-xs font-semibold text-finovo-green mb-3 uppercase tracking-[0.25em]">
              Crypto liquidity providers
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-finovo-dark leading-tight mb-3">
              Institutional crypto liquidity.
            </h1>
            <p className="text-2xl md:text-3xl font-display text-finovo-dark mb-2">For broker growth.</p>
            <p className="text-finovo-muted text-base md:text-lg mb-8 max-w-xl">
              Because your traders deserve confidence, not volatility. Finovo connects you to deep crypto liquidity with
              spreads, depth and execution built for real trading.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base shadow-md hover:bg-emerald-600 transition-colors">
                Chat with an expert
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm md:text-base font-semibold text-finovo-dark hover:text-finovo-green transition-colors">
                View crypto product stack
                <span className="h-px w-8 bg-finovo-green" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-finovo-gray p-5">
              <img
                src={heroImage}
                alt="Institutional crypto liquidity illustration"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prime liquidity for a large scale of clients */}
      <section className="py-16 md:py-24 bg-finovo-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-6">
            Prime liquidity for a large scale of clients.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {clientCards.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 flex items-center gap-3 text-white text-sm md:text-base"
              >
                <div className="w-9 h-9 rounded-xl bg-black/40 flex items-center justify-center text-finovo-green">
                  <item.icon className="w-4 h-4" />
                </div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LiquidityExecutionSection
        title="Precision liquidity. Profit‑driven execution."
        cards={executionCards}
        showIcon
      />

      <LiquidityTechGridSection
        heading="Crypto liquidity technology & key features."
        subtitle="Power your brokerage or exchange with a stack designed specifically for digital asset markets – from aggregation to routing and data."
        cards={techCards}
      />

      {/* Dark CTA band */}
      <section className="py-12 md:py-16 bg-finovo-dark">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            Launch your crypto trading business with institutional‑grade liquidity.
          </h2>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base hover:bg-emerald-500 transition-colors">
            Launch with Finovo Liquidity
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Crypto risk management tools */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-finovo-dark">
              Crypto risk management tools.
            </h2>
            <p className="text-sm md:text-base text-finovo-muted max-w-2xl mx-auto">
              Protect your margins with real‑time crypto risk tools. Monitor exposure, automate limits and respond
              instantly, on infrastructure trusted by top digital‑asset brokers.
            </p>
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl border border-finovo-green bg-finovo-green/5 px-4 md:px-5 py-4 md:py-5">
              <div className="text-sm md:text-base font-semibold text-finovo-dark mb-2">
                Real‑time, granular risk monitoring &amp; control
              </div>
              <p className="text-xs md:text-sm text-finovo-muted">
                Track every trade in real time with detailed exposure analytics, dynamic margin control and tiered
                limits so you can act before risk becomes a problem.
              </p>
            </div>
            {cryptoRiskTools.map((label) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-white px-4 md:px-5 py-3.5 md:py-4 text-sm md:text-base text-finovo-dark flex items-center justify-between"
              >
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One liquidity hub – crypto */}
      <IntegrationsOrbitSection
        title="One liquidity hub. Every crypto opportunity."
        subtitle="Finovo connects directly to leading crypto liquidity sources, CRMs and third‑party tools so you can offer digital assets without adding integration headaches."
      />

      {/* FAQ – crypto liquidity */}
      <PropFaqSection
        title="Got questions? We’ve got answers."
        subtitle="Ask us anything. We’ll help you design a crypto liquidity setup that fits your brokerage or exchange."
        ctaLabel="Get started"
        faqs={cryptoFaqs}
      />
    </div>
  );
}

