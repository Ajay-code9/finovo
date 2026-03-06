import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Check,
  Zap,
  Globe,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  LayoutDashboard,
  Database,
} from 'lucide-react';
import { DotsBackground } from '../../components/DotsBackground';
import { TradingPlatformHighlight } from '../../components/TradingPlatformHighlight';

export default function CFDBrokerage() {
  const [expandedFeature, setExpandedFeature] = useState<string>('sirix');
  const [isAnnual, setIsAnnual] = useState(false);
  const [showAdditional, setShowAdditional] = useState(false);

  const features = [
    'Full MT4/MT5 White Label',
    'Multi-Asset Liquidity Integration',
    'Advanced CRM & Client Portal',
    'Automated KYC/AML Verification',
    'Multi-Language Support',
    '24/7 Technical Assistance',
  ];

  const solutionCards = [
    {
      id: 'platform',
      title: 'Trading Platform',
      desc: 'Give your traders the edge with our platform: social trading, TradingView charts, and advanced order types.',
      link: '/platform/white-label',
      icon: LayoutDashboard,
    },
    {
      id: 'liquidity',
      title: 'Liquidity & Data Feed',
      desc: 'Deep liquidity across Forex, CFDs, and crypto. Real-time data and execution that scale with your business.',
      link: '/liquidity/prime',
      icon: Globe,
    },
    {
      id: 'backoffice',
      title: 'Back-Office Solutions',
      desc: 'Broker portal, CRM, affiliate & IB system. More time to grow revenue, less time on manual ops.',
      link: '/solutions/back-office',
      icon: Database,
    },
    {
      id: 'risk',
      title: 'Risk Management',
      desc: 'Manage exposure and risk in real time. Built to protect margins and streamline operations.',
      link: '/solutions/mt4-mt5',
      icon: ShieldCheck,
    },
  ];

  const platformFeatures = [
    {
      id: 'sirix',
      label: 'SiRIX & TradingView',
      detail: 'Professional-grade charting and analysis.',
      image: '/assets/images/cfd1.png',
      alt: 'Advanced trading charts on multiple screens',
    },
    {
      id: 'intuitive',
      label: 'Intuitive Design',
      detail: 'Simple, seamless trading experience.',
      image: '/assets/images/cfd2.png',
      alt: 'Clean trading dashboard interface',
    },
    {
      id: 'accounts',
      label: 'Flexible Accounts',
      detail: 'Netting & hedging – your choice.',
      image: '/assets/images/cfd3.png',
      alt: 'Account overview and balances',
    },
    {
      id: 'chart',
      label: 'Chart Trading',
      detail: 'Trade directly from the chart.',
      image: '/assets/images/cfd4.png',
      alt: 'Candlestick chart with trade markers',
    },
    {
      id: 'alerts',
      label: 'Smart Alerts',
      detail: 'Real-time price and event alerts.',
      image: '/assets/images/cfd5.png',
      alt: 'Notification panel with trading alerts',
    },
    {
      id: 'mobile',
      label: 'Mobile Access',
      detail: 'Trade anywhere, anytime.',
      image: '/assets/images/cfd6.png',
      alt: 'Trading app on a mobile phone',
    },
  ];

  const activeFeature =
    platformFeatures.find((f) => f.id === expandedFeature) ?? platformFeatures[0];
  const plans = [
    {
      id: 'free',
      name: 'Start Free',
      desc: 'Launch or explore risk-free before you switch',
      price: isAnnual ? '0' : '0',
      crmPrice: '+€0/month',
      btnLabel: 'Start Free',
      popular: false,
      trading: [
        { label: 'Real Accounts', val: '50', check: true },
        { label: 'Extra Real Account', val: 'x', check: false },
        { label: 'Branded Trading Platform', val: 'x', check: false },
        { label: 'Groups', val: '1', check: true },
        { label: 'Managers', val: 'Read Only', check: true },
        { label: 'Data Feed & Liquidity', val: '✓', check: true },
      ],
      crm: [
        { label: 'CRM & Client Portal', val: 'Limited', check: true },
        { label: 'VoIP, SMS, Email Integration', val: 'x', check: false },
        { label: 'Workflows', val: 'x', check: false },
        { label: 'CRM Seats', val: '1', check: true },
      ],
    },
    {
      id: 'startup',
      name: 'Start-up Brokers',
      desc: 'For growing brokerages and prop firms',
      price: isAnnual ? '1,340' : '1,490',
      crmPrice: isAnnual ? '+€1,800/month' : '+€2,000/month',
      btnLabel: 'Start Free',
      popular: true,
      trading: [
        { label: 'Real Accounts', val: '500', check: true },
        { label: 'Extra Real Account', val: '€2', check: true },
        { label: 'Branded Trading Platform', val: '✓', check: true },
        { label: 'Groups', val: '8', check: true },
        { label: 'Managers', val: 'Full Access', check: true },
        { label: 'Data Feed & Liquidity', val: '✓', check: true },
      ],
      crm: [
        { label: 'CRM & Client Portal', val: '✓', check: true },
        { label: 'VoIP, SMS, Email Integration', val: '✓', check: true },
        { label: 'Workflows', val: '✓', check: true },
        { label: 'CRM Seats', val: '5', check: true },
      ],
    },
    {
      id: 'professional',
      name: 'Professional',
      desc: 'Advanced infrastructure for established firms',
      price: isAnnual ? '2,690' : '2,990',
      crmPrice: isAnnual ? '+€3,600/month' : '+€4,000/month',
      btnLabel: 'Start Free',
      popular: false,
      trading: [
        { label: 'Real Accounts', val: 'Unlimited', check: true },
        { label: 'Extra Real Account', val: '€0', check: true },
        { label: 'Branded Trading Platform', val: '✓', check: true },
        { label: 'Groups', val: 'Unlimited', check: true },
        { label: 'Managers', val: 'Full Access', check: true },
        { label: 'Data Feed & Liquidity', val: '✓', check: true },
      ],
      crm: [
        { label: 'CRM & Client Portal', val: '✓', check: true },
        { label: 'VoIP, SMS, Email Integration', val: '✓', check: true },
        { label: 'Workflows', val: '✓', check: true },
        { label: 'CRM Seats', val: 'Unlimited', check: true },
      ],
    },
  ];

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="relative py-20 md:py-24 bg-finovo-dark overflow-hidden">
        <DotsBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-white mb-6 leading-tight">
                Complete <span className="text-finovo-green">CFD Brokerage</span> Turnkey Solution
              </h1>
              <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
                Launch your brokerage in record time with our all-in-one infrastructure. Technology, liquidity, and support to scale globally.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-finovo-green text-white rounded-xl font-semibold hover:bg-emerald-600 transition-colors cursor-pointer"
                >
                  Get a Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/25 text-white rounded-xl font-semibold hover:bg-white/10 transition-all cursor-pointer"
                >
                  Download Brochure
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution cards grid – Trading Platform, Liquidity, Back-Office, Risk */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-4">
              Launch Your CFD Brokerage Today
            </h2>
            <p className="text-finovo-muted text-lg max-w-2xl mx-auto">
              Simple, scalable, and built for success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  to={card.link}
                  className="group block h-full p-6 md:p-8 bg-white rounded-2xl border border-slate-100 hover:border-finovo-green/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-finovo-green/10 flex items-center justify-center mb-5 group-hover:bg-finovo-green/20 transition-colors">
                    <card.icon className="w-6 h-6 text-finovo-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-finovo-dark mb-2 group-hover:text-finovo-green transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-finovo-muted text-sm leading-relaxed mb-4">
                    {card.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-finovo-green font-semibold text-sm">
                    Explore now{' '}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-column: feature list + platform screenshot */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading above grid so list + image align vertically */}
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-2">
              Designed for Brokers, Built for Traders
            </h2>
            <p className="text-finovo-muted text-lg mb-2">Deliver a premium trading experience.</p>
            <p className="text-finovo-green text-sm font-semibold">
              Precision is the difference between trading and leading.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-5 flex flex-col">
              <div className="space-y-2">
                {platformFeatures.map((f) => {
                  const isActive = expandedFeature === f.id;
                  return (
                    <div key={f.id}>
                      <button
                        type="button"
                        onClick={() => setExpandedFeature(f.id)}
                        className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer ${
                          isActive
                            ? 'bg-finovo-dark text-white border-finovo-dark'
                            : 'bg-white text-finovo-dark border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className="font-medium">{f.label}</span>
                        {isActive ? (
                          <span className="text-white/80">−</span>
                        ) : (
                          <ArrowRight className="w-4 h-4 text-finovo-green shrink-0" />
                        )}
                      </button>

                      {/* Mobile: show image directly under active option */}
                      {isActive && (
                        <div className="mt-3 w-full rounded-2xl bg-slate-50 flex items-center justify-center h-64 md:h-72 lg:hidden">
                          <img
                            src={f.image}
                            alt={f.alt}
                            className="max-w-full max-h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              {activeFeature && (
                <p className="mt-4 text-finovo-muted text-sm pl-1">{activeFeature.detail}</p>
              )}
            </div>

            {/* Desktop: shared image column */}
            <div className="hidden lg:flex lg:col-span-7 justify-end">
              <div className="w-full max-w-xl h-full flex items-center justify-center">
                <img
                  src={activeFeature?.image}
                  alt={activeFeature?.alt ?? 'Trading platform'}
                  className={`max-w-full object-contain ${activeFeature?.id === 'mobile' ? 'max-h-[420px]' : 'max-h-full'}`}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content + checklist + image */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-6">
                Everything You Need to Succeed
              </h2>
              <p className="text-finovo-muted text-lg mb-8 leading-relaxed">
                Our CFD brokerage stack is built for performance: low-latency execution, full back-office suite, and support so you can focus on growth.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-finovo-green/10 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-finovo-green" />
                    </div>
                    <span className="text-finovo-dark font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg">
                <img
                  src="/assets/images/cfd-brokerage-dashboard.png"
                  alt="Brokerage dashboard"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 left-4 right-4 md:left-6 md:right-auto bg-white p-5 rounded-xl shadow-xl border border-slate-100 max-w-[220px]">
                <div className="text-2xl font-black text-finovo-green mb-1">99.9%</div>
                <div className="text-xs font-bold text-finovo-muted uppercase tracking-wider">
                  Platform uptime
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <TradingPlatformHighlight
        eyebrow="Trading Platform"
        title="The most powerful trading platform for CFD brokers."
        description="Deliver a world-class trading experience with advanced charts, social trading, mobile apps, and full white-label branding."
        secondaryDescription="Be live with your branded trading environment in days, not months. Your traders stay engaged, your operations stay efficient, and your brand grows stronger."
        bullets={[
          'SiRIX & TradingView',
          'Trade from the chart',
          'One-click trading',
          'Price alerts & social trading',
        ]}
        primaryImageSrc="/assets/images/cfd-trade-mobile.png"
        primaryImageAlt="Mobile trading app"
        secondaryImageSrc="/assets/images/cfd-trade-main.png"
        secondaryImageAlt="Trading platform dashboard"
      />

      {/* Back-office tools & liquidity section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div>
              <p className="text-xs font-semibold text-finovo-green mb-3 uppercase tracking-[0.25em]">
                Back-office tools
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-4">
                Streamline operations for your brokerage business.
              </h2>
              <p className="text-finovo-muted text-base md:text-lg mb-6">
                Manage your entire lifecycle from one console – CRM, reporting, client zones, and multi-level IB
                structures designed for real brokerage workflows.
              </p>
              <ul className="space-y-2 text-sm md:text-base text-finovo-muted">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>SiRIX Broker and web trader for day-to-day execution.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>Cutting-edge CRM with full client history and tasks.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>Secure client zones for onboarding, deposits, and reporting.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>Affiliate and multi-level IB system with transparent payouts.</span>
                </li>
              </ul>

              <Link
                to="/platform/white-label"
                className="inline-flex items-center gap-2 mt-6 text-finovo-green font-semibold text-sm md:text-base hover:underline cursor-pointer"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-finovo-gray shadow-lg p-8 grid grid-cols-2 gap-4">
                {[
                  'Cryptocurrencies',
                  'CFDs on FX',
                  'Equities',
                  'Synthetic instruments',
                  'Indices',
                  'Futures',
                  'Commodities',
                  'ETFs',
                ].map((label) => (
                  <div
                    key={label}
                    className="flex flex-col items-start gap-2 rounded-2xl bg-white shadow-sm border border-slate-100 px-4 py-3"
                  >
                    <div className="h-7 w-7 rounded-full border border-finovo-green/40 flex items-center justify-center text-[10px] font-semibold text-finovo-green">
                      FX
                    </div>
                    <p className="text-xs font-semibold text-finovo-dark leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white shadow-xl p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-finovo-green/10 text-xs font-semibold text-finovo-green mb-4">
                  Liquidity
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-finovo-dark mb-3">
                  Your multi-asset liquidity provider.
                </h3>
                <p className="text-finovo-muted text-sm md:text-base mb-4">
                  Deliver speed, accuracy, and scale. Finovo connects your traders to deep liquidity across asset
                  classes with institutional-grade pricing and execution.
                </p>
                <p className="text-finovo-muted text-sm md:text-base mb-6">
                  Configure routing, mark-ups, and risk profiles that fit your model – from pure agency to hybrid
                  books – all from a single pane of glass.
                </p>
                <Link
                  to="/liquidity/prime"
                  className="inline-flex items-center gap-2 text-finovo-green font-semibold text-sm md:text-base hover:underline cursor-pointer"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-3xl overflow-hidden border border-slate-200 bg-finovo-gray shadow-lg">
                <img
                  src="/assets/images/cfd-liquidity.png"
                  alt="Liquidity and market depth dashboard"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SiRIX & TradingView + Affiliates & IBs */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-finovo-green mb-3 uppercase tracking-[0.25em]">
                SiRIX &amp; TradingView integration
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-3">
                Next-level charting for your brokerage.
              </h2>
              <p className="text-finovo-muted text-base md:text-lg mb-6">
                Finovo&apos;s trading stack weaves in TradingView-grade charting so your clients can analyse, test, and
                place trades with the same tools they already trust.
              </p>
              <p className="text-finovo-muted text-sm md:text-base mb-6">
                In a few clicks, your brokerage offers professional chart layouts, multiple timeframes, and drawing
                tools – all running inside your branded environment.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 text-finovo-green font-semibold text-sm md:text-base hover:underline cursor-pointer"
              >
                Try a live charting demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
                <img
                  src="/assets/images/cfd-charting.png"
                  alt="Advanced charting interface"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full max-w-lg rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
                <img
                  src="/assets/images/cfd-affiliates.png"
                  alt="Affiliate & IB dashboard"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold text-finovo-green mb-3 uppercase tracking-[0.25em]">
                Affiliates &amp; IBs
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-3">
                Grow smarter with automated partnerships.
              </h2>
              <p className="text-finovo-muted text-base md:text-lg mb-4">
                Turn referral relationships into a disciplined, scalable acquisition channel with clear tracking and
                automated payouts.
              </p>
              <ul className="space-y-2 text-sm md:text-base text-finovo-muted mb-6">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>Configurable commission structures by partner, region, or product.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>Automated payout runs with clear statements and audit history.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>Multi-tier networks that keep your best partners engaged.</span>
                </li>
              </ul>
              <Link
                to="/solutions/prop-trading"
                className="inline-flex items-center gap-2 text-finovo-green font-semibold text-sm md:text-base hover:underline cursor-pointer"
              >
                Explore partner tools <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social trading & SiRIX Broker */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <p className="text-xs font-semibold text-finovo-green mb-3 uppercase tracking-[0.25em]">
                Social trading
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-3">
                Smarter trading through collective insight.
              </h2>
              <p className="text-finovo-muted text-base md:text-lg mb-4">
                Build a community around your brokerage where experienced traders lead and new clients learn in real
                time.
              </p>
              <ul className="space-y-2 text-sm md:text-base text-finovo-muted mb-6">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>PAMM-style profit sharing with automated allocations – no spreadsheets.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>Followers choose their level of involvement, from full mirroring to selective trades.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>A master dashboard tracks performance, risk, and engagement across your social programmes.</span>
                </li>
              </ul>
              <p className="text-finovo-muted text-sm md:text-base">
                With Finovo Social, you&apos;re not just offering tools – you&apos;re building an active, loyal trading
                audience.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg rounded-3xl overflow-hidden border border-slate-200 bg-finovo-gray shadow-xl">
                <img
                  src="/assets/images/cfd-social.png"
                  alt="Social trading interface"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="w-full max-w-lg rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
                <img
                  src="/assets/images/cfd-sirix-broker.png"
                  alt="Broker performance dashboard"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold text-finovo-green mb-3 uppercase tracking-[0.25em]">
                SiRIX Broker
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-3">
                Maximize your brokerage efficiency.
              </h2>
              <p className="text-finovo-muted text-base md:text-lg mb-4">
                Keep every part of your brokerage in sync – from live trading activity to client communications and
                reporting.
              </p>
              <ul className="space-y-2 text-sm md:text-base text-finovo-muted mb-6">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>Real-time oversight with dashboards tuned for risk and compliance teams.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>Detailed reporting on accounts, trades, and historic P&amp;L to support decisions.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                  <span>Integrated workflows connecting CRM, platform, and liquidity in one view.</span>
                </li>
              </ul>
              <Link
                to="/platform/white-label"
                className="inline-flex items-center gap-2 text-finovo-green font-semibold text-sm md:text-base hover:underline cursor-pointer"
              >
                See SiRIX Broker in action <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-4">
              Why Choose Finovo?
            </h2>
            <p className="text-finovo-muted text-lg max-w-2xl mx-auto">
              We don't just provide software; we provide a partnership built on reliability and innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Rapid Deployment', desc: 'From concept to live trading in as little as 2 weeks.', icon: Zap },
              { title: 'Global Reach', desc: 'Connect to liquidity and traders worldwide.', icon: Globe },
              { title: 'Secure & Compliant', desc: 'Built-in risk and compliance tools.', icon: ShieldCheck },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-finovo-green/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-finovo-green/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-finovo-green" />
                </div>
                <h3 className="text-xl font-semibold text-finovo-dark mb-3">{item.title}</h3>
                <p className="text-finovo-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing – same layout as home page */}
      <section className="py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-display font-semibold text-finovo-dark mb-6">
              Simple, transparent pricing.
            </h2>
            <p className="text-finovo-muted text-lg max-w-2xl mx-auto mb-10">
              Choose the structure that fits your current stage – and adjust as your CFD brokerage grows.
            </p>

            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-bold ${!isAnnual ? 'text-finovo-dark' : 'text-finovo-muted'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-14 h-7 bg-finovo-dark/5 rounded-full relative p-1 transition-all"
              >
                <div
                  className={`w-5 h-5 bg-finovo-green rounded-full shadow-md transition-all ${
                    isAnnual ? 'translate-x-7' : 'translate-x-0'
                  }`}
                />
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-bold ${isAnnual ? 'text-finovo-dark' : 'text-finovo-muted'}`}>
                  Annual
                </span>
                <span className="bg-finovo-green/10 text-finovo-green text-[10px] font-black px-2 py-1 rounded-full">
                  SAVE 10%
                </span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                  plan.popular
                    ? 'border-finovo-green shadow-2xl shadow-finovo-green/10 scale-[1.03] z-10 bg-white'
                    : 'border-slate-100 hover:border-finovo-green/30 bg-white'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-finovo-green text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-finovo-dark mb-2">{plan.name}</h3>
                  <p className="text-finovo-muted text-sm mb-6">{plan.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-finovo-dark">€{plan.price}</span>
                    <span className="text-finovo-muted font-bold">/month</span>
                  </div>
                  <p className="text-finovo-green text-xs font-bold mt-2">{plan.crmPrice}</p>
                </div>

                <button
                  type="button"
                  className={`w-full py-4 rounded-full text-base font-bold transition-all mb-10 ${
                    plan.popular
                      ? 'bg-finovo-green text-white hover:opacity-90 shadow-lg shadow-finovo-green/20'
                      : 'bg-finovo-dark text-white hover:bg-black'
                  }`}
                >
                  {plan.btnLabel}
                </button>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-black text-finovo-dark uppercase tracking-widest mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-finovo-green rounded-full" />
                      Trading platform
                    </h4>
                    <ul className="space-y-3">
                      {plan.trading.map((item, i) => (
                        <li key={i} className="flex items-center justify-between text-sm">
                          <span className="text-finovo-muted font-medium">{item.label}</span>
                          <span
                            className={`font-bold ${item.check ? 'text-finovo-dark' : 'text-slate-300'}`}
                          >
                            {item.val}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-finovo-dark uppercase tracking-widest mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-finovo-green rounded-full" />
                      CRM &amp; client portal
                    </h4>
                    <ul className="space-y-3">
                      {plan.crm.map((item, i) => (
                        <li key={i} className="flex items-center justify-between text-sm">
                          <span className="text-finovo-muted font-medium">{item.label}</span>
                          <span
                            className={`font-bold ${item.check ? 'text-finovo-dark' : 'text-slate-300'}`}
                          >
                            {item.val}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setShowAdditional(!showAdditional)}
              className="text-finovo-green font-bold flex items-center gap-2 mx-auto hover:opacity-80 transition-all"
            >
              {showAdditional ? 'Hide detailed features' : 'See all features & comparison'}
              <ChevronRight
                className={`w-4 h-4 transition-transform ${showAdditional ? 'rotate-90' : ''}`}
              />
            </button>
          </div>

          {showAdditional && (
            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="text-center mb-8">
                <span className="text-[11px] font-black tracking-[0.25em] uppercase text-finovo-muted">
                  Additional services &amp; terms
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-10 text-sm">
                <div>
                  <h4 className="text-[13px] font-bold text-finovo-dark mb-4">Additional services</h4>
                  <ul className="space-y-2 text-finovo-muted">
                    <li className="flex gap-2">
                      <span className="mt-1 h-[3px] w-[3px] rounded-full bg-finovo-green" />
                      <span>Branded trading apps for iOS &amp; Android – from €250/month per store.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-[3px] w-[3px] rounded-full bg-finovo-green" />
                      <span>Additional account groups, servers, or manager seats – priced per usage.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-[3px] w-[3px] rounded-full bg-finovo-green" />
                      <span>Custom integrations or data feeds delivered under separate project scope.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[13px] font-bold text-finovo-dark mb-4">Terms &amp; payment</h4>
                  <ul className="space-y-2 text-finovo-muted">
                    <li className="flex gap-2">
                      <span className="mt-1 h-[3px] w-[3px] rounded-full bg-finovo-green" />
                      <span>No setup fees or long-term lock-in on standard plans.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-[3px] w-[3px] rounded-full bg-finovo-green" />
                      <span>Onboarding subject to KYC, compliance checks, and commercial approval.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-[3px] w-[3px] rounded-full bg-finovo-green" />
                      <span>Typical go-live within 3–5 business days after technical validation.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-[3px] w-[3px] rounded-full bg-finovo-green" />
                      <span>Volume-based discounts available for quarterly or annual prepayment.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl px-8 py-10 md:px-14 md:py-12 text-center bg-linear-to-r from-emerald-600 to-finovo-green border border-emerald-700/20 shadow-lg">
            <h2 className="text-2xl md:text-4xl font-display font-semibold text-white mb-3 tracking-tight">
              Ready to Start Your Brokerage?
            </h2>
            <p className="text-white/90 text-sm md:text-base mb-8 max-w-xl mx-auto font-medium">
              Contact our specialists for a personalised demo and consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 rounded-lg font-semibold text-sm border border-emerald-200/80 hover:bg-slate-50 hover:shadow-md active:scale-[0.98] transition-all cursor-pointer"
              >
                Talk to an Expert <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-finovo-dark text-white rounded-lg font-semibold text-sm hover:bg-black hover:shadow-md active:scale-[0.98] transition-all cursor-pointer"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
