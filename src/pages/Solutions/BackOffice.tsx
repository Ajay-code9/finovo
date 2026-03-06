import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Users, ShieldCheck, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DotsBackground } from '../../components/DotsBackground';

const IntegrationsBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.2) 1px, transparent 1px)",
          backgroundSize: '60px 60px',
        }}
      />
      <motion.div
        className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-finovo-green/40 blur-2xl"
        animate={{ x: [0, 60, -30, 0], y: [0, 30, -40, 0], opacity: [0.7, 1, 0.8, 0.7] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-emerald-500/35 blur-2xl"
        animate={{ x: [0, -50, 30, 0], y: [0, -20, 35, 0], opacity: [0.6, 1, 0.7, 0.6] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default function BackOffice() {
  const crmTeams = [
    {
      title: 'Sales teams',
      desc: 'Instant access to leads, activity tracking, and follow-up tools so every conversation moves deals forward.',
    },
    {
      title: 'Customer service',
      desc: 'Full client histories, smart ticketing, and collaboration tools that keep support fast and consistent.',
    },
    {
      title: 'Marketing teams',
      desc: 'Segmentation, journeys, and performance dashboards to grow funded accounts and lifetime value.',
    },
  ];

  const riskTabs = [
    {
      id: 'oversight',
      label: 'Real-Time Oversight',
      blurb:
        'Live visibility into trades, exposure, and performance so your dealing and risk teams can act in seconds.',
      image: 'https://picsum.photos/seed/backoffice-risk-oversight/1400/600',
      alt: 'Real-time risk exposure dashboard',
    },
    {
      id: 'reporting',
      label: 'Detailed Reporting',
      blurb:
        'On-demand risk and P&L reports tailored to your brokerage model, ready for management and regulators.',
      image: 'https://picsum.photos/seed/backoffice-risk-reporting/1400/600',
      alt: 'Risk reporting interface',
    },
    {
      id: 'advanced',
      label: 'Advanced Risk Management',
      blurb:
        'Set limits, flag anomalies, and control risk parameters across brands, groups, and instruments.',
      image: 'https://picsum.photos/seed/backoffice-risk-advanced/1400/600',
      alt: 'Advanced risk controls',
    },
    {
      id: 'dealing',
      label: 'Virtual Dealing Desk',
      blurb:
        'Control execution and trade flow in a fully virtual dealing environment with full audit history.',
      image: 'https://picsum.photos/seed/backoffice-risk-dealing/1400/600',
      alt: 'Virtual dealing desk configuration',
    },
  ];

  const [activeRiskTab, setActiveRiskTab] = useState<'oversight' | 'reporting' | 'advanced' | 'dealing'>('oversight');
  const activeRisk = riskTabs.find((t) => t.id === activeRiskTab) ?? riskTabs[0];

  return (
    <div className="pb-24">
      {/* Hero – control without complexity */}
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
            <p className="text-xs font-semibold text-finovo-green mb-3 uppercase tracking-[0.25em]">
              Back-office solutions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-finovo-dark leading-tight mb-4">
              Control without{' '}
              <span className="text-finovo-green">complexity.</span>
            </h1>
            <p className="text-2xl md:text-3xl font-display text-finovo-dark mb-3">
              Back office that powers growth.
            </p>
            <p className="text-finovo-muted text-base md:text-lg mb-8 max-w-xl">
              Growth should never be limited by admin work. Finovo consolidates CRM,
              onboarding, payouts, and reporting into one clean, green-tuned
              workspace.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base shadow-md hover:bg-emerald-600 transition-colors cursor-pointer"
              >
                Get started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm md:text-base font-semibold text-finovo-dark hover:text-finovo-green transition-colors cursor-pointer"
              >
                Book a live demo
                <span className="h-px w-8 bg-finovo-green" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -top-10 -left-12 w-40 h-40 rounded-full bg-finovo-green/10 blur-3xl" />
              <div className="absolute -bottom-16 -right-10 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="relative flex justify-end gap-6">
                <div className="w-32 sm:w-36 rounded-2xl bg-black/80 border border-white/10 shadow-xl overflow-hidden translate-y-4">
                  <img
                    src="https://picsum.photos/seed/backoffice-phone-1/400/800"
                    alt="Back office mobile view 1"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-36 sm:w-40 rounded-2xl bg-black/80 border border-white/10 shadow-xl overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/backoffice-phone-2/420/840"
                    alt="Back office mobile view 2"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KPI tiles – lead funnel and deposits */}
      <section className="py-12 md:py-16 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-5 flex flex-col">
              <p className="text-sm font-semibold text-finovo-dark mb-3">Lead funnel</p>
              <div className="space-y-2 text-[11px] font-semibold text-white">
                <div className="rounded-lg bg-linear-to-r from-emerald-500 to-finovo-green px-3 py-1.5 flex justify-between">
                  <span>Registered</span>
                  <span>1,200</span>
                </div>
                <div className="rounded-lg bg-slate-800 px-3 py-1.5 flex justify-between">
                  <span>KYC</span>
                  <span>1,150</span>
                </div>
                <div className="rounded-lg bg-slate-900 px-3 py-1.5 flex justify-between">
                  <span>FTD</span>
                  <span>1,059</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-5 flex flex-col">
              <p className="text-sm font-semibold text-finovo-dark mb-2">
                Successful transfers
              </p>
              <div className="mt-1 inline-flex items-center justify-center px-4 py-2 rounded-full bg-linear-to-r from-emerald-500 to-finovo-green text-white text-sm font-bold">
                $240,000
              </div>
              <p className="mt-3 text-[11px] text-finovo-muted">
                Completed payments in the last 24 hours.
              </p>
            </div>
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-5 flex flex-col">
              <p className="text-sm font-semibold text-finovo-dark mb-2">New traders</p>
              <p className="text-[11px] text-finovo-muted mb-3">
                From first click to first trade – fully tracked.
              </p>
              <div className="flex items-end justify-between text-xs font-semibold">
                <div>
                  <p className="text-finovo-muted">March 2025</p>
                  <p className="text-finovo-dark">273</p>
                </div>
                <div>
                  <p className="text-finovo-muted text-right">July 2025</p>
                  <p className="text-finovo-dark text-right">399</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-5 flex flex-col">
              <p className="text-sm font-semibold text-finovo-dark mb-2">
                Total deposits this month
              </p>
              <p className="text-2xl font-bold text-finovo-dark mb-1">$2,000,000</p>
              <p className="text-[11px] text-finovo-muted">Across all brands and desks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus on growth – trading integration & dashboards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-2">
              Focus on growth.
            </h2>
            <p className="text-lg md:text-2xl font-display text-finovo-muted mb-2">
              We&apos;ll handle the rest.
            </p>
            <p className="text-xs md:text-sm font-semibold tracking-[0.23em] uppercase text-finovo-green">
              No limits. No complexity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-slate-200 bg-finovo-gray shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-finovo-dark mb-2">
                  Native trading platform integration
                </h3>
                <p className="text-finovo-muted text-sm md:text-base">
                  Seamlessly connect Finovo CRM with your trading platforms and PSPs.
                  Save time, reduce errors, and streamline your operations without
                  custom builds.
                </p>
              </div>
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-slate-200 bg-white">
                <img
                  src="https://picsum.photos/seed/backoffice-chart-1/800/450"
                  alt="Back office trading integration"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-finovo-gray shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-finovo-dark mb-2">
                  Smart dashboards &amp; reports
                </h3>
                <p className="text-finovo-muted text-sm md:text-base">
                  Leads, traders, conversions, and P&amp;L – all in one streamlined
                  view. Make faster decisions with real-time data and tailored
                  reports for every desk.
                </p>
              </div>
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-slate-200 bg-white">
                <img
                  src="https://picsum.photos/seed/backoffice-chart-2/800/450"
                  alt="Back office dashboards"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk management – full trading logic control */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-finovo-gray shadow-xl">
              <img
                src="https://picsum.photos/seed/backoffice-risk-main/1000/520"
                alt="Risk management dashboard"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold text-finovo-green mb-2 uppercase tracking-[0.25em]">
              Risk management
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-3">
              Full trading logic control, powered by Finovo risk tools.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base mb-4 max-w-xl">
              Build and apply complex trading rules, configure by group, region, or
              instrument, and manage it all from a single, auditable interface.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 text-finovo-green font-semibold text-sm md:text-base hover:underline cursor-pointer"
            >
              Get started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Risk intelligence tabs */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-2">
              Take control of every trade with real-time risk intelligence.
            </h2>
            <p className="text-finovo-muted text-base md:text-lg max-w-2xl mx-auto">
              Empower your brokerage to run smarter, faster, and stronger – with risk
              data exactly where you need it.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {riskTabs.map((tab) => {
              const isActive = tab.id === activeRiskTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveRiskTab(tab.id as typeof activeRiskTab)}
                  className={`px-4 md:px-6 py-2 rounded-full text-sm font-semibold border transition-all ${
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

          <div className="space-y-10">
            <div className="text-center">
              <p className="text-finovo-muted text-sm md:text-base max-w-2xl mx-auto">
                {activeRisk.blurb}
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl max-h-[380px] md:max-h-[420px]">
              <img
                src={activeRisk.image}
                alt={activeRisk.alt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* IB & affiliate tools */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
              <p className="text-xs font-semibold text-finovo-green mb-2 uppercase tracking-[0.25em]">
                IB &amp; affiliate management
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-finovo-dark mb-2">
                Multi-tier partner system
              </h3>
              <p className="text-finovo-muted text-sm">
                Customisable commission plans, real-time performance tracking, and
                payout automation so your partner network scales with confidence.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
              <p className="text-xs font-semibold text-finovo-green mb-2 uppercase tracking-[0.25em]">
                Tailored workflows
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-finovo-dark mb-2">
                Solutions that fit your model
              </h3>
              <p className="text-finovo-muted text-sm">
                No two brokers are the same. We adapt modules and permissions to
                match your desks, brands, and regulatory requirements.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
              <p className="text-xs font-semibold text-finovo-green mb-2 uppercase tracking-[0.25em]">
                Communication tools
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-finovo-dark mb-2">
                VOIP &amp; collaboration built-in
              </h3>
              <p className="text-finovo-muted text-sm">
                Keep sales, support, and dealing fully synced with VOIP and internal
                messaging connected directly to client records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliates & broker portal feature rows */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold text-finovo-green mb-2 uppercase tracking-[0.25em]">
                Affiliates &amp; IBs
              </p>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-finovo-dark mb-3">
                Effortless scaling for affiliates &amp; IBs.
              </h2>
              <p className="text-finovo-muted text-sm md:text-base mb-4">
                Everything you need to grow your partner network – streamlined,
                transparent, and ready to scale.
              </p>
              <ul className="space-y-2 text-sm text-finovo-muted">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>Customisable setup for different geographies and brands.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>Automated payouts with clear, auditable statements.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>Smart reporting and multi-tier tracking in one view.</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="w-full max-w-xl rounded-3xl overflow-hidden border border-slate-200 bg-finovo-gray shadow-xl">
                <img
                  src="https://picsum.photos/seed/backoffice-affiliates/1200/520"
                  alt="Affiliates and IBs dashboard"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="w-full max-w-xl rounded-3xl overflow-hidden border border-slate-200 bg-finovo-gray shadow-xl">
                <img
                  src="https://picsum.photos/seed/backoffice-portal/1200/520"
                  alt="Broker portal plans screen"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <p className="text-xs font-semibold text-finovo-green mb-2 uppercase tracking-[0.25em]">
                Broker portal
              </p>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-finovo-dark mb-3">
                Scale your prop firm with a powerful broker portal.
              </h2>
              <p className="text-finovo-muted text-sm md:text-base mb-4">
                Configure plans, automate payouts, and keep risk controls centralised
                in one flexible hub built for high-growth brokerages and prop firms.
              </p>
              <ul className="space-y-2 text-sm text-finovo-muted">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>Plan management and rule configuration from a single screen.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>Automated fee, rebate, and payout logic.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>Built-in safeguards to keep risk and compliance in control.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations – reuse home page style */}
      <section className="py-24 bg-finovo-dark relative overflow-hidden">
        <IntegrationsBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-semibold text-white mb-8 leading-tight">
                Seamless integrations for your <span className="text-finovo-green">back office</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Plug Finovo into your existing CRMs, payment gateways, KYC tools, marketing platforms, and
                accounting systems so every team works from the same live data.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: '100+', sub: 'Payment integrations' },
                  { label: '50+', sub: 'KYC & verification tools' },
                  { label: '24/7', sub: 'Real-time data sync' },
                  { label: 'API', sub: 'First architecture' },
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-2xl font-black text-finovo-green mb-1">{stat.label}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[420px] flex items-center justify-center">
              <div className="absolute w-[360px] h-[360px] border border-white/5 rounded-full animate-spin-slow" />
              <div className="absolute w-[260px] h-[260px] border border-white/10 rounded-full animate-spin-reverse" />

              <div className="relative z-10 w-24 h-24 bg-finovo-green rounded-2xl flex items-center justify-center shadow-xl shadow-finovo-green/40">
                <div className="flex gap-0.5">
                  <div className="w-2 h-8 bg-white -skew-x-12 rounded-sm" />
                  <div className="w-2 h-8 bg-white -skew-x-12 rounded-sm opacity-80" />
                </div>
              </div>

              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const radius = i % 2 === 0 ? 180 : 130;
                return (
                  <motion.div
                    key={angle}
                    className="absolute w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center shadow-lg border border-white/10"
                    animate={{
                      x: radius * Math.cos((angle * Math.PI) / 180),
                      y: radius * Math.sin((angle * Math.PI) / 180),
                    }}
                    transition={{ duration: 0, repeat: Infinity }}
                  >
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-finovo-green/70" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Purpose-built CRM for brokers and prop firms */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-3">
              Purpose-built CRM for brokers and prop firms.
            </h2>
            <p className="text-finovo-muted text-base md:text-lg max-w-2xl mx-auto">
              Equip every team with the tools they need, without forcing them into a
              generic enterprise system.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {crmTeams.map((team) => (
              <div
                key={team.title}
                className="rounded-2xl border border-slate-200 bg-finovo-gray shadow-sm p-6 flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-finovo-green/10 flex items-center justify-center mb-4">
                  <BarChart3 className="w-5 h-5 text-finovo-green" />
                </div>
                <h3 className="text-lg font-semibold text-finovo-dark mb-2">
                  {team.title}
                </h3>
                <p className="text-finovo-muted text-sm flex-1">{team.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl px-8 py-10 md:px-14 md:py-12 text-center bg-linear-to-r from-emerald-600 to-finovo-green border border-emerald-700/20 shadow-lg">
            <h2 className="text-2xl md:text-4xl font-display font-semibold text-white mb-3 tracking-tight">
              Ready to modernise your back office?
            </h2>
            <p className="text-white/90 text-sm md:text-base mb-8 max-w-xl mx-auto font-medium">
              Book a session with our team to see how Finovo connects CRM, trading,
              and liquidity into one operational view.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 rounded-lg font-semibold text-sm border border-emerald-200/80 hover:bg-slate-50 hover:shadow-md active:scale-[0.98] transition-all cursor-pointer"
              >
                Schedule a demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services/forex-crm"
                className="inline-flex items-center gap-2 px-6 py-3 bg-finovo-dark text-white rounded-lg font-semibold text-sm hover:bg-black hover:shadow-md active:scale-[0.98] transition-all cursor-pointer"
              >
                Explore CRM features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

