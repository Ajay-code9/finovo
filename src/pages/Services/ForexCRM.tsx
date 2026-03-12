import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { DotsBackground } from '../../components/DotsBackground';
import { TradingPlatformHighlight } from '../../components/TradingPlatformHighlight';
import { BackOfficeToolsOverview } from '../../components/BackOfficeToolsOverview';
import { IntegrationsOrbitSection } from '../../components/IntegrationsOrbitSection';
import { PropFaqSection } from '../../components/PropFaqSection';

const suiteBullets = [
  'Trading platform for web, mobile, desktop',
  'Full CRM with lead funnels & KYC tools',
  'Broker portal for control & automation',
  'Multi‑asset liquidity connectivity',
  'PSP, KYC & crypto integrations',
  'Custom onboarding flows',
];

const forexFaqs = [
  {
    id: 'crm-fit',
    question: 'Is Finovo Forex CRM right for my brokerage size?',
    answer:
      'Yes. We work with boutique desks and larger brokerages. You can start with core CRM + client portal and add automation, IB tools and back‑office modules as you grow.',
  },
  {
    id: 'branding',
    question: 'Can I brand the CRM and portals as my own?',
    answer:
      'Everything client‑facing can be white‑labelled – domains, colours, logos, portals and emails – so your brand stays front and centre.',
  },
  {
    id: 'integration',
    question: 'Does the CRM integrate with MT4, MT5 and other platforms?',
    answer:
      'Finovo connects to MetaTrader, our own trading front‑ends and other supported platforms so accounts, trading activity and KYC data stay in sync.',
  },
  {
    id: 'launch-time',
    question: 'How long does it take to go live?',
    answer:
      'Most brokers go live in a matter of weeks once your compliance checks and integrations are confirmed – not months.',
  },
  {
    id: 'migration',
    question: 'Can you help migrate us from an existing CRM?',
    answer:
      'Yes. Our team helps you plan the move, migrate data and minimise downtime so your sales and support teams can keep working.',
  },
];

export default function ForexCRM() {
  return (
    <div className="pb-24">
      {/* Hero – Forex CRM */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block pointer-events-none">
          <DotsBackground />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <p className="text-xs font-semibold text-finovo-green mb-3 uppercase tracking-[0.25em]">Forex CRM</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-finovo-dark leading-tight mb-3">
              The Forex CRM built for brokers.
            </h1>
            <p className="text-2xl md:text-3xl font-display text-finovo-dark mb-2">
              Manage clients, trades and growth in one place.
            </p>
            <p className="text-finovo-muted text-base md:text-lg mb-8 max-w-xl">
              Because running a brokerage shouldn&apos;t feel like chaos. Finovo centralises onboarding, trading
              activity, IBs and operations so your team can move faster with less noise.
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
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-xl">
              <div className="absolute -top-10 -left-12 w-40 h-40 rounded-full bg-finovo-green/10 blur-3xl" />
              <div className="absolute -bottom-16 -right-10 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="relative w-full">
                <img
                  src="/assets/images/cfdbrokerage.png"
                  alt="Forex CRM dashboard overview"
                  className="w-full h-auto object-contain drop-shadow-[0_18px_45px_rgba(15,23,42,0.35)]"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All‑in‑one technology suite style section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold text-finovo-green mb-2 uppercase tracking-[0.25em]">
              Turnkey solution
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-3">
              All‑in‑one technology suite for Forex brokers.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base mb-4">
              Trading platform, CRM, client portal, liquidity and payments – connected so your desk doesn&apos;t have to
              fight with disconnected tools.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-finovo-dark">
              {suiteBullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 inline-flex items-center gap-2 text-sm md:text-base font-semibold text-finovo-green hover:underline">
              Learn more <span aria-hidden>→</span>
            </button>
          </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src="/assets/images/back-officedashboard.png"
                alt="Diagram of trading platform, CRM, liquidity and broker portal connected"
                className="w-full h-auto object-contain drop-shadow-[0_18px_45px_rgba(15,23,42,0.35)]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trading platform highlight – TradingView style section */}
      <TradingPlatformHighlight
        eyebrow="Trading platform integration"
        title="TradingView‑grade charts built into your CRM stack."
        description="Give your clients the trading experience they expect – advanced charts, order types and social features – while your CRM keeps every account in sync."
        secondaryDescription="Finovo connects trading data, analytics and risk back into your CRM so your team sees the full picture behind every ticket and position."
        bullets={[
          'Built‑in TradingView charting',
          'Social & copy trading',
          'Multi‑asset liquidity connectivity',
          'Real‑time execution metrics',
        ]}
        primaryImageSrc="/assets/images/cfdcharting.png"
        primaryImageAlt="Trading platform order list"
        secondaryImageSrc="/assets/images/cfdIB.png"
        secondaryImageAlt="TradingView style chart"
      />

      {/* Back‑office tools section for Forex */}
      <BackOfficeToolsOverview
        eyebrow="Back‑office tools"
        title="Streamline operations for your Forex business."
        subtitle="Lead & IB management, multilingual communication, KPIs and payout configuration – all plugged into your Finovo Forex CRM."
      />

      {/* Liquidity / instruments style feature section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
            <div className="relative w-full max-w-md">
              <img
                src="/assets/images/tradingicons.png"
                alt="Grid of asset classes supported by Finovo liquidity"
                className="w-full h-auto object-contain drop-shadow-[0_18px_45px_rgba(15,23,42,0.35)]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold text-finovo-green mb-2 uppercase tracking-[0.25em]">
              Multi‑asset liquidity
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-3">
              Your multi‑asset liquidity provider.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base mb-4">
              FX, indices, metals, crypto and more – with pricing and execution quality visible inside your CRM.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-finovo-dark">
              <li>FX, crypto, indices, metals & stocks.</li>
              <li>Support for STP, ECN and hybrid models.</li>
              <li>FIX API, bridge and platform connectivity.</li>
              <li>Seamless PSP and crypto connections.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Integrations orbit section reused */}
      <IntegrationsOrbitSection
        title="Limitless integration for your brokerage."
        subtitle="Finovo connects Forex CRM with trading platforms, liquidity, PSPs, KYC and automation tools so your operations stay in sync."
      />

      {/* FAQ – repurposed for Forex CRM */}
      <PropFaqSection
        title="Got questions about Forex CRM?"
        subtitle="Ask us anything. We’ll help you design a CRM setup that fits your brokerage today and where you’re heading."
        ctaLabel="Talk to our Forex team"
        faqs={forexFaqs}
      />
    </div>
  );
}

