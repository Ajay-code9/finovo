import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, LineChart, CandlestickChart, Coins, BarChart3, BriefcaseBusiness, Building2, Users } from 'lucide-react';
import { DotsBackground } from '../../components/DotsBackground';
import { IntegrationsOrbitSection } from '../../components/IntegrationsOrbitSection';
import { PropFaqSection } from '../../components/PropFaqSection';
import { LiquidityExecutionSection } from '../../components/liquidity/LiquidityExecutionSection';
import { LiquidityTechGridSection } from '../../components/liquidity/LiquidityTechGridSection';

const assetCards = [
  { label: 'Cryptocurrencies', icon: Coins },
  { label: 'CFDs on FX', icon: CandlestickChart },
  { label: 'Equities', icon: BarChart3 },
  { label: 'Synthetic instruments', icon: LineChart },
  { label: 'Indices', icon: LineChart },
  { label: 'Futures', icon: CandlestickChart },
  { label: 'Commodities', icon: BarChart3 },
  { label: 'ETFs', icon: LineChart },
];

const clientCards = [
  { label: 'Forex brokers', icon: CandlestickChart },
  { label: 'Hedge funds', icon: BriefcaseBusiness },
  { label: 'Prop trading firms', icon: LineChart },
  { label: 'Wealth managers', icon: Building2 },
  { label: 'Institutional fund managers', icon: BarChart3 },
  { label: 'Algo fund managers', icon: Users },
];

const executionCards = [
  {
    title: 'Smart liquidity aggregation, optimised for growth.',
    desc: 'Combine multiple venues into a single book so your traders see deep pricing while you keep full control of routing and mark‑ups.',
  },
  {
    title: 'Tight‑spread architecture, designed for ROI.',
    desc: 'Fine‑tune spreads, mark‑ups and routing rules to balance competitiveness with healthy, repeatable revenue.',
  },
  {
    title: 'Intelligent risk management, engineered for control.',
    desc: 'Pair liquidity with real‑time exposure tools so dealing and risk teams can act quickly when markets move.',
  },
];

const techCards = [
  {
    title: 'Client zone',
    desc: 'Connect onboarding, funding and account management flows to the same liquidity stack that powers execution.',
  },
  {
    title: 'Trading platform integration',
    desc: 'Plug MT4, MT5 and web platforms into a single liquidity hub, with low‑latency routing and smart order handling.',
  },
  {
    title: 'Smart order routing & aggregation',
    desc: 'Distribute flow intelligently between venues, reduce slippage and keep spreads tight across asset classes.',
  },
  {
    title: 'Connectivity & data feeds',
    desc: 'Use institutional‑grade FIX and multi‑asset data to keep pricing accurate, stable and ready for volatility.',
  },
];

const riskTools = [
  {
    title: 'Real‑time risk control',
    desc: 'Monitor exposure and manage risk in real time within your liquidity framework. Get full trade transparency and confidence.',
  },
  {
    title: 'Intelligent exposure management',
    desc: 'Automate hedge orders by symbol, book or client group so your team can rebalance exposure without constant manual ticket chasing.',
  },
  {
    title: 'Profit optimisation & revenue protection',
    desc: 'Blend A‑Book/B‑Book flows, mark‑ups and routing profiles to protect spreads and P&L while keeping pricing competitive for your traders.',
  },
  {
    title: 'Advanced analytics & reporting for informed decisions',
    desc: 'Turn trade, client and venue data into clear dashboards so risk and dealing teams can spot patterns and trends before they become issues.',
  },
  {
    title: 'Fraud & abusive trading prevention',
    desc: 'Detect toxic flow, latency arbitrage and suspicious behaviour early, with rules that help you protect both your brokerage and your partners.',
  },
  {
    title: 'Seamless integration with the Finovo ecosystem',
    desc: 'Keep risk settings, limits and exposure views in sync across CRM, back office, bridges and liquidity so there is always one source of truth.',
  },
  {
    title: 'Scalability & reliability',
    desc: 'Scale to more accounts, volume and symbols on infrastructure engineered for low latency, uptime and high‑frequency market conditions.',
  },
];

export default function AboutLiquidity() {
  const [activeRiskIndex, setActiveRiskIndex] = useState(0);
  return (
    <div className="pb-24">
      {/* Hero – The market behind your market */}
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
              What is a liquidity provider?
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-finovo-dark leading-tight mb-3">
              The market behind your market.
            </h1>
            <p className="text-2xl md:text-3xl font-display text-finovo-dark mb-2">
              Our liquidity powers your brokerage from day one.
            </p>
            <p className="text-finovo-muted text-base md:text-lg mb-8 max-w-xl">
              Execution quality shapes how traders experience your brand. Finovo connects you to deep, multi‑asset
              liquidity so every trade feels stable, transparent and fast.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base shadow-md hover:bg-emerald-600 transition-colors">
                Chat with an expert
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm md:text-base font-semibold text-finovo-dark hover:text-finovo-green transition-colors">
                Explore liquidity solutions
                <span className="h-px w-8 bg-finovo-green" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-2 gap-3">
              {assetCards.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-100 bg-white shadow-sm px-4 py-3 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-finovo-green/5 flex items-center justify-center text-finovo-green">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-medium text-finovo-dark">{item.label}</p>
                </div>
              ))}
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
        heading="Technology that drives performance."
        subtitle="Understanding how liquidity, trading platforms and risk tools fit together is key to scaling your brokerage with confidence."
        cards={techCards}
      />

      {/* Dark CTA band */}
      <section className="py-12 md:py-16 bg-finovo-dark">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            Fuel your brokerage with institutional‑grade liquidity.
          </h2>
          <p className="text-sm md:text-base text-slate-300 mb-6">
            Combine liquidity access, trading tech and risk tools in one ecosystem. Launch faster with infrastructure
            designed for real trading volume.
          </p>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base hover:bg-emerald-500 transition-colors">
            Launch with Finovo Liquidity
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Risk management tools */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-finovo-dark">
              Risk management tools.
            </h2>
            <p className="text-sm md:text-base text-finovo-muted max-w-2xl mx-auto">
              Protect your margins with real‑time risk controls. Monitor exposure, automate limits and stay ready for
              volatile markets.
            </p>
          </div>
          <div className="space-y-3">
            {riskTools.map((item, index) => {
              const isActive = index === activeRiskIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  onMouseEnter={() => setActiveRiskIndex(index)}
                  onFocus={() => setActiveRiskIndex(index)}
                  onClick={() => setActiveRiskIndex(index)}
                  className={`w-full text-left rounded-2xl border px-4 md:px-5 py-4 md:py-5 transition-colors duration-200 ${
                    isActive
                      ? 'border-finovo-green bg-finovo-green/5'
                      : 'border-slate-200 bg-white hover:border-finovo-green/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm md:text-base font-semibold text-finovo-dark">{item.title}</div>
                    <div
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isActive ? 'bg-finovo-green' : 'bg-slate-300'
                      }`}
                    />
                  </div>
                  {isActive && (
                    <p className="mt-2 text-xs md:text-sm text-finovo-muted">{item.desc}</p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* One liquidity hub – integrations orbit style section */}
      <IntegrationsOrbitSection
        title="One liquidity hub. Every market opportunity."
        subtitle="Finovo connects to trading venues, CRMs and supporting apps so you can access more markets without adding integration headaches."
      />

      {/* FAQ – got questions about liquidity */}
      <PropFaqSection
        title="Got questions? We’ve got answers."
        subtitle="Ask us anything. We’ll help you understand which liquidity setup makes sense for your brokerage model."
        ctaLabel="Get started"
      />
    </div>
  );
}

