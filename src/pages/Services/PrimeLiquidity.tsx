import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { DotsBackground } from '../../components/DotsBackground';
import { IntegrationsOrbitSection } from '../../components/IntegrationsOrbitSection';
import { PropFaqSection } from '../../components/PropFaqSection';
import { LiquidityExecutionSection } from '../../components/liquidity/LiquidityExecutionSection';
import { LiquidityTechGridSection } from '../../components/liquidity/LiquidityTechGridSection';

type AssetKey = 'forex' | 'indices' | 'crypto' | 'metals' | 'energies' | 'shares';

const assetTabs: { id: AssetKey; label: string }[] = [
  { id: 'forex', label: 'Forex' },
  { id: 'indices', label: 'Indices' },
  { id: 'crypto', label: 'Crypto' },
  { id: 'metals', label: 'Precious Metals' },
  { id: 'energies', label: 'Energies' },
  { id: 'shares', label: 'Shares' },
];

const assetDetails: Record<
  AssetKey,
  { title: string; instruments: string; leverage: string; hours: string }
> = {
  forex: { title: 'Forex', instruments: '50', leverage: '1:200', hours: '24/5' },
  indices: { title: 'Indices', instruments: '14', leverage: '1:150', hours: '23/5' },
  crypto: { title: 'Crypto', instruments: '24', leverage: '1:5', hours: '24/7' },
  metals: { title: 'Precious metals', instruments: '10', leverage: '1:100', hours: '24/5' },
  energies: { title: 'Energies', instruments: '8', leverage: '1:50', hours: '24/5' },
  shares: { title: 'Shares', instruments: '200+', leverage: '1:20', hours: 'Market hours' },
};

const clientTypes = [
  'Forex brokers',
  'Hedge funds',
  'Prop trading firms',
  'Wealth managers',
  'Institutional fund managers',
  'Algo fund managers',
];

const precisionCards = [
  {
    title: 'Smart liquidity aggregation, optimised for growth.',
    desc: 'Low‑latency routing, institutional‑grade risk tools and direct connectivity to multiple venues give your traders tighter spreads and deeper books.',
  },
  {
    title: 'Tight‑spread architecture, designed for ROI.',
    desc: 'Flexible mark‑ups and routing profiles let you adjust economics without compromising execution quality.',
  },
  {
    title: 'Intelligent risk management, engineered for control.',
    desc: 'Real‑time exposure dashboards and hedging tools help your team balance growth and risk with confidence.',
  },
];

const techFeatures = [
  {
    title: 'Liquidity APIs',
    desc: 'Connect directly to deep, multi‑asset liquidity with our APIs. Full control over pricing logic and execution flow, engineered for speed and flexibility.',
  },
  {
    title: 'Trading platforms',
    desc: 'Integrate MT4, MT5, TradingView‑grade front‑ends and more with ultra‑low‑latency execution across FX, CFDs and crypto.',
  },
  {
    title: 'Bridge & aggregation software',
    desc: 'Route smarter with fast bridges and aggregation tools that support smart routing, mark‑ups and centralised risk control.',
  },
  {
    title: 'Connectivity & data feeds',
    desc: 'Lightning‑fast FIX and multi‑asset data feeds keep traders in sync with market moves, without missing an opportunity.',
  },
];

const riskTools: { title: string; desc: string }[] = [
  {
    title: 'Real‑time, granular risk monitoring & control',
    desc: 'Track every trade in real time with detailed exposure analytics, dynamic margin control and tiered limits so you can act before risk becomes a problem.',
  },
  {
    title: 'Automated & intelligent hedging / exposure management',
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

export default function PrimeLiquidity() {
  const [activeAsset, setActiveAsset] = useState<AssetKey>('forex');
  const [activeRiskIndex, setActiveRiskIndex] = useState(0);
  const active = assetDetails[activeAsset];

  return (
    <div className="pb-24">
      {/* Hero – Liquidity that never sleeps */}
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
              Finovo Prime
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-finovo-dark leading-tight mb-3">
              Liquidity that never sleeps.
            </h1>
            <p className="text-2xl md:text-3xl font-display text-finovo-dark mb-2">
              Your multi‑asset liquidity provider.
            </p>
            <p className="text-finovo-muted text-base md:text-lg mb-8 max-w-xl">
              Because your traders move when the market moves. Finovo Prime powers execution with deep, multi‑asset
              liquidity that stays aligned with your brokerage model.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base shadow-md hover:bg-emerald-600 transition-colors">
                Chat with an expert
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm md:text-base font-semibold text-finovo-dark hover:text-finovo-green transition-colors">
                Book a live demo
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
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden flex items-center justify-center min-h-[260px]">
              <img
                src="/assets/images/homepage2.png"
                alt="Network of instruments showing multi-asset liquidity"
                className="max-w-full max-h-[340px] w-auto h-auto object-contain"
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
            {clientTypes.map((label) => (
              <div
                key={label}
                className="rounded-2xl border border-white/15 bg-white/5 text-white px-5 py-3.5 text-sm md:text-base flex items-center"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <LiquidityExecutionSection
        title="Precision liquidity. Profit‑driven execution."
        cards={precisionCards}
      />

      {/* Prime liquidity for all major asset classes – tabbed section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-finovo-dark mb-3">
              Prime liquidity for all major asset classes.
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {assetTabs.map((tab) => {
              const isActive = tab.id === activeAsset;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveAsset(tab.id)}
                  className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold border transition-all ${
                    isActive
                      ? 'bg-finovo-dark text-white border-finovo-dark shadow-sm'
                      : 'bg-white text-finovo-dark border-slate-200 hover:border-finovo-green/40'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="bg-finovo-dark rounded-2xl text-white p-6 md:p-8 max-w-4xl mx-auto">
            <div className="mb-4 text-sm md:text-base font-semibold">{active.title}</div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs md:text-sm">
                <div className="text-slate-300">Instruments</div>
                <div className="text-lg md:text-xl font-semibold text-white">{active.instruments}</div>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs md:text-sm">
                <div className="text-slate-300">Leverage up to</div>
                <div className="text-lg md:text-xl font-semibold text-white">{active.leverage}</div>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs md:text-sm">
                <div className="text-slate-300">Trading hours</div>
                <div className="text-lg md:text-xl font-semibold text-white">{active.hours}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LiquidityTechGridSection
        heading="Technology & key features."
        subtitle="Tools that will boost your business and scale your liquidity operations."
        cards={techFeatures}
      />

      {/* Dark CTA band */}
      <section className="py-12 md:py-16 bg-finovo-dark">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            Launch your trading business, backed by scalable liquidity from day one.
          </h2>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base hover:bg-emerald-500 hover:shadow-md active:scale-[0.98] transition-all">
            Launch with Finovo Liquidity
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Risk management tools – interactive list */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-finovo-dark">
              Risk management tools.
            </h2>
            <p className="text-sm md:text-base text-finovo-muted max-w-2xl mx-auto">
              Protect your margins with real‑time risk tools. Monitor exposure, automate limits and respond instantly on
              infrastructure designed for volatility.
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
        subtitle="Finovo Prime connects to trading venues, CRMs and supporting apps so you can access more markets without adding integration headaches."
      />

      {/* FAQ – got questions about liquidity */}
      <PropFaqSection
        title="Got questions? We’ve got answers."
        subtitle="Ask us anything. We’ll help you access the liquidity you need to power your trading business."
        ctaLabel="Get started"
      />
    </div>
  );
}

