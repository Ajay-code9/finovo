import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, LayoutDashboard, Zap } from 'lucide-react';
import { DotsBackground } from '../../components/DotsBackground';
import PricingSection from '../../components/PricingSection';

// NOTE:
// These image paths assume you will place the reference PNGs
// into the `public/assets/white-label/` folder.
// Example actual files (you can rename as you like):
// - public/assets/white-label/hero.png
// - public/assets/white-label/charts.png
// - public/assets/white-label/integrations-hub.png
// - public/assets/white-label/social.png
// - public/assets/white-label/client-zone.png
// - public/assets/white-label/broker-portal.png
// - public/assets/white-label/liquidity.png
const wlHero = '/assets/white-label/hero.png';
const wlCharts = '/assets/white-label/charts.png';
const wlIntegrationsHub = '/assets/white-label/integrations-hub.png';
const wlSocial = '/assets/white-label/social.png';
const wlClientZone = '/assets/white-label/client-zone.png';
const wlBrokerPortal = '/assets/white-label/broker-portal.png';
const wlLiquidity = '/assets/white-label/liquidity.png';

const mobileTabs = [
  {
    id: 'onboarding',
    label: 'Secure onboarding',
    sub: 'Register with magic links or SSO.',
    image: 'https://picsum.photos/seed/wl-onboarding/900/1600',
    alt: 'Mobile onboarding for trading app',
  },
  {
    id: 'funding',
    label: 'Quick funding',
    sub: 'Fast deposits and verified withdrawals.',
    image: 'https://picsum.photos/seed/wl-funding/900/1600',
    alt: 'Mobile funding experience',
  },
  {
    id: 'smart',
    label: 'Smart trading',
    sub: 'Access markets with powerful tools.',
    image: 'https://picsum.photos/seed/wl-smart/900/1600',
    alt: 'Mobile trading interface',
  },
  {
    id: 'everywhere',
    label: 'Everywhere',
    sub: 'Market news & education in‑app.',
    image: 'https://picsum.photos/seed/wl-everywhere/900/1600',
    alt: 'Insights and education on mobile',
  },
] as const;

export default function WhiteLabel() {
  const [activeMobileTab, setActiveMobileTab] = useState<(typeof mobileTabs)[number]['id']>('onboarding');
  const activeMobile = mobileTabs.find((t) => t.id === activeMobileTab) ?? mobileTabs[0];

  const stats = [
    { label: '$500M+', sub: 'Monthly volume across platforms' },
    { label: '40K+', sub: 'Active trading accounts' },
    { label: '80+', sub: 'Broker and fintech partners' },
    { label: '5+', sub: 'Years building trading tech' },
  ];

  const featureCards = [
    {
      title: 'One‑click trading',
      desc: 'Instant order entry from charts and widgets, tuned for fast‑moving markets.',
    },
    {
      title: 'Price alerts',
      desc: 'Let traders set alerts once and receive notifications across devices.',
    },
    {
      title: 'Social & copy trading',
      desc: 'Follow strategies, mirror trades, and showcase top performers.',
    },
    {
      title: 'TradingView‑grade charts',
      desc: 'Deep analysis tools and drawing objects embedded into your platform.',
    },
  ];

  const whyChoose = [
    {
      title: 'Customisable workspace',
      desc: 'Match layouts, colours, and navigation to your brand while keeping workflows familiar for traders.',
      icon: LayoutDashboard,
    },
    {
      title: 'Multi‑asset by design',
      desc: 'CFDs, FX, indices, crypto, and more – presented in a clean, modern interface your clients enjoy using.',
      icon: Globe,
    },
    {
      title: 'Performance you can feel',
      desc: 'Low‑latency routing and real‑time data so serious traders stay on your platform, not someone else’s.',
      icon: Zap,
    },
  ];

  return (
    <div className="pb-24">
      {/* Hero – Empower your brokerage */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden xl:block">
          <DotsBackground />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <p className="text-xs font-semibold text-finovo-green mb-3 uppercase tracking-[0.25em]">
              White label trading platform
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-finovo-dark leading-tight mb-3">
              Empower your brokerage.
            </h1>
            <p className="text-2xl md:text-3xl font-display text-finovo-dark mb-2">
              Designed for brokers who want real performance.
            </p>
            <p className="text-finovo-muted text-sm md:text-lg mb-8 max-w-xl">
              Deliver a world‑class trading experience with advanced charts, social trading, mobile apps, and full
              white‑label branding. Your traders stay engaged and your brand stays front and centre.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base shadow-md hover:shadow-lg hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Chat with an expert <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm md:text-base font-semibold text-finovo-dark hover:text-finovo-green transition-colors">
                Book a live demo
                <span className="h-px w-8 bg-finovo-green" />
              </button>
            </div>
            <p className="mt-4 text-xs md:text-sm text-finovo-muted font-medium">
              Launch in weeks · Fully branded · Managed by Finovo
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-xl">
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-finovo-green/10 blur-3xl" />
              <div className="absolute -bottom-12 -right-8 w-48 h-48 rounded-full bg-emerald-500/15 blur-3xl" />
              <div className="relative rounded-3xl border border-slate-100 bg-finovo-dark shadow-2xl p-6">
                <img
                  src={wlHero}
                  alt="Finovo white-label trading platform with stacked mobile layouts"
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-4 flex flex-wrap gap-3 justify-center">
                  {['Best trading platform', 'Best broker technology', 'Client choice award'].map((label) => (
                    <div
                      key={label}
                      className="px-3 py-1.5 rounded-2xl bg-white text-[10px] font-semibold text-finovo-dark shadow-sm border border-slate-100"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.sub}>
              <div className="text-2xl md:text-3xl font-black text-finovo-dark">{s.label}</div>
              <div className="text-xs md:text-sm text-finovo-muted">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Power in every click – tools row */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-3">
              Power in every click.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base max-w-2xl mx-auto">
              Tools that make trading feel effortless – and keep your platform at the centre of every decision.
            </p>
          </div>

          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-thin scrollbar-thumb-finovo-green/50">
              {featureCards.map((card) => (
                <motion.div
                  key={card.title}
                  whileHover={{ y: -4 }}
                  className="min-w-[240px] sm:min-w-[260px] md:min-w-[280px] bg-finovo-gray rounded-3xl border border-slate-100 shadow-sm px-5 py-6 flex flex-col gap-2"
                >
                  <h3 className="text-sm md:text-base font-semibold text-finovo-dark">{card.title}</h3>
                  <p className="text-xs md:text-sm text-finovo-muted">{card.desc}</p>
                  <div className="mt-3 h-px w-full bg-linear-to-r from-transparent via-finovo-green/50 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trading in their pocket – mobile experience */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-2">
              Trading in their pocket.
            </h2>
            <p className="text-finovo-muted text-base md:text-lg mb-4">
              Seamless, instant, everywhere – because the market never waits, and neither should your clients.
            </p>
            <div className="space-y-3 mt-6">
              {mobileTabs.map((tab) => {
                const isActive = tab.id === activeMobileTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveMobileTab(tab.id)}
                    className={`w-full text-left px-4 md:px-5 py-3 rounded-2xl border transition-all flex flex-col gap-1 ${
                      isActive
                        ? 'bg-finovo-dark text-white border-finovo-dark shadow-md'
                        : 'bg-white text-finovo-dark border-slate-200 hover:border-finovo-green/40'
                    }`}
                  >
                    <span className="text-sm md:text-base font-semibold">{tab.label}</span>
                    <span className={`text-xs md:text-sm ${isActive ? 'text-slate-200' : 'text-finovo-muted'}`}>
                      {tab.sub}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-finovo-green/15 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="relative flex gap-6 justify-end items-center">
                <div className="w-40 sm:w-48 rounded-3xl overflow-hidden border border-white/20 bg-black/80 shadow-2xl translate-y-4">
                  <img
                    src="https://picsum.photos/seed/wl-secondary-mobile/950/1800"
                    alt="Secondary trading mobile interface"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-44 sm:w-52 rounded-3xl overflow-hidden border border-white/20 bg-black/90 shadow-2xl">
                  <img
                    src={activeMobile.image}
                    alt={activeMobile.alt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Charts / TradingView highlight */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <p className="text-xs font-semibold text-finovo-green mb-2 uppercase tracking-[0.25em]">
              SiRIX &amp; TradingView integration
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-2">
              Clarity in every candle.
            </h2>
            <p className="text-finovo-muted text-base md:text-lg mb-4">
              TradingView‑grade charts are embedded directly into your white‑label platform – no extra logins, no
              stitched‑together windows.
            </p>
            <p className="text-finovo-muted text-sm md:text-base">
              Give traders the tools they already trust while keeping execution, risk, and reporting inside your own
              ecosystem. When traders see more, they trade more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-2xl rounded-3xl border border-slate-100 bg-slate-50 shadow-xl p-4">
              <img
                src={wlCharts}
                alt="Advanced charting built into the trading platform"
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations hub – dark banner */}
      <section className="py-16 bg-finovo-dark">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] gap-10 items-center">
          <div>
            <p className="text-xs font-semibold text-finovo-green mb-3 uppercase tracking-[0.25em]">
              Integrations hub
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-3">
              Launch and scale your multi‑asset brokerage faster.
            </h2>
            <p className="text-slate-300 text-sm md:text-base mb-6 max-w-xl">
              Finovo connects your trading stack – platforms, liquidity, CRM, KYC and payments – into one turnkey
              environment, so your team can focus on growth instead of plumbing.
            </p>
            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Explore our turnkey setup
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-black/40 shadow-2xl overflow-hidden">
              <img
                src={wlIntegrationsHub}
                alt="Finovo integrations hub layout"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social trading */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold text-finovo-green mb-2 uppercase tracking-[0.25em]">
              Social trading
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-1">
              Beyond trading. A community your clients call home.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base mb-4">
              Happy traders stay longer – and loyal traders trade bigger. Finovo keeps your community active inside your
              own platform.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-finovo-dark list-disc list-inside mt-4">
              <li>
                <span className="font-semibold">Pooled performance sharing</span> – align traders with automated P&amp;L
                distribution.
              </li>
              <li>
                <span className="font-semibold">Follow or copy</span> – let clients follow leaders or copy strategies in
                one click.
              </li>
              <li>
                <span className="font-semibold">Full transparency</span> – dashboards that surface risk and performance
                for every strategy.
              </li>
              <li>
                <span className="font-semibold">Built‑in mentorship</span> – new traders learn from the best, right
                inside the app.
              </li>
            </ul>
          </div>
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl rounded-3xl border border-slate-100 bg-slate-50 shadow-xl overflow-hidden">
              <img
                src={wlSocial}
                alt="Social trading dashboard inside Finovo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client zone */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative w-full max-w-xl rounded-3xl border border-slate-100 bg-slate-50 shadow-xl overflow-hidden">
              <img
                src={wlClientZone}
                alt="Client zone view with analytics and trading tools"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <p className="text-xs font-semibold text-finovo-green mb-2 uppercase tracking-[0.25em]">Client zone</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-1">
              Grow loyalty with a smarter client experience.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base mb-4">
              Put everything your traders need at their fingertips – funding, analytics, communication and education – in
              a single, branded client zone.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm md:text-base text-finovo-dark">
              <ul className="space-y-2 list-disc list-inside">
                <li>Premium analytics to support investment decisions.</li>
                <li>Multi‑channel communication and notifications.</li>
                <li>Integrated payments and payout flows.</li>
              </ul>
              <ul className="space-y-2 list-disc list-inside">
                <li>Identity and verification journeys built‑in.</li>
                <li>Configurable journeys for each client segment.</li>
                <li>All activity surfaced in your back‑office.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Broker portal */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold text-finovo-green mb-2 uppercase tracking-[0.25em]">Broker portal</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-1">
              You are in control. One screen, all the power.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base mb-4">
              Lead boldly while Finovo handles the complexity behind the scenes – risk, reporting, and operations in one
              place.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-finovo-dark list-disc list-inside">
              <li>Real‑time oversight and exposure views.</li>
              <li>Detailed reporting for desks, symbols, and clients.</li>
              <li>Configurable dashboards for each role in your firm.</li>
              <li>Virtual dealing desk and advanced risk controls.</li>
            </ul>
          </div>
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl rounded-3xl border border-slate-100 bg-slate-50 shadow-xl overflow-hidden">
              <img
                src={wlBrokerPortal}
                alt="Finovo broker portal interface"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Precision pricing & liquidity */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="relative w-full max-w-xl rounded-3xl border border-slate-100 bg-slate-50 shadow-xl overflow-hidden">
              <img
                src={wlLiquidity}
                alt="Liquidity instruments and pricing tiles"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold text-finovo-green mb-2 uppercase tracking-[0.25em]">
              Precision pricing &amp; liquidity
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-1">
              Precision pricing meets deep market access.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base mb-4">
              Connect to institutional‑grade liquidity and ultra‑accurate pricing streams, so execution feels instant –
              even when markets move.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-finovo-dark list-disc list-inside">
              <li>Real‑time pricing across thousands of instruments.</li>
              <li>Consistent execution quality across FX, indices, equities and crypto.</li>
              <li>Smart routing tuned for prop, retail and institutional flows.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why choose Finovo – reused pattern */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-3">
              Why brokers choose Finovo.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base max-w-2xl mx-auto">
              A platform built for serious brokerage teams – not a generic app with your logo on top.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
              >
                <div className="w-14 h-14 bg-finovo-green/10 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-finovo-green" />
                </div>
                <h3 className="text-xl font-semibold text-finovo-dark mb-3">{item.title}</h3>
                <p className="text-finovo-muted text-sm md:text-base leading-relaxed">{item.desc}</p>
                <div className="mt-5 h-px w-full bg-linear-to-r from-transparent via-finovo-green/60 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing – reuse shared component */}
      <PricingSection
        title="Launch with Finovo’s trading platform."
        subtitle="Whether you’re launching a new brokerage or upgrading an existing stack, Finovo gives you transparent pricing and room to grow."
      />

      {/* Dark CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-finovo-dark rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.24),transparent_55%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
                Ready to launch your white‑label platform?
              </h2>
              <p className="text-slate-300 text-sm md:text-base mb-8 max-w-2xl mx-auto">
                Share your business model and we’ll show you exactly how Finovo can power it – from onboarding and
                trading to reporting and risk.
              </p>
              <button className="px-9 py-3.5 bg-finovo-green text-white rounded-full font-semibold text-sm md:text-base hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2">
                Talk to our team
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

