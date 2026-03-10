import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Database, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DotsBackground } from '../../components/DotsBackground';
import PricingSection from '../../components/PricingSection';
import { TradingPlatformHighlight } from '../../components/TradingPlatformHighlight';
import { PropLiquiditySection } from '../../components/PropLiquiditySection';
import { PropFaqSection } from '../../components/PropFaqSection';
import { BackOfficeToolsOverview } from '../../components/BackOfficeToolsOverview';
import { IntegrationsOrbitSection } from '../../components/IntegrationsOrbitSection';

export default function PropTrading() {
  const features = [
    'Automated Evaluations',
    'Customizable Risk Parameters',
    'Multi-Asset Trading Platforms',
    'Integrated CRM & Back Office',
    'Real-Time Performance Tracking',
    'Scalable Infrastructure',
  ];

  const solutionTabs = [
    {
      id: 'registration',
      label: 'Custom Registration Page',
      heading: 'Custom-designed funnels that match your prop brand.',
      blurb:
        'Fully branded onboarding flows with challenge selection, KYC steps, and payment in one smooth experience.',
      image: '/assets/images/prop2.png',
      alt: 'Custom registration page for prop traders',
    },
    {
      id: 'portal',
      label: 'Broker Portal',
      heading: 'Full control over plan creation and challenge management.',
      blurb:
        'Configure plans, rules, and notifications from a single hub so your operations team can move quickly and safely.',
      image: '/assets/images/prop3.png',
      alt: 'Prop trading broker portal',
    },
    {
      id: 'dashboard',
      label: 'Real-Time Trader Dashboard',
      heading: 'Dashboards that keep traders focused and engaged.',
      blurb:
        'Clarity on equity, targets, and rules in real time, designed to keep your traders confident and compliant.',
      image: '/assets/images/prop4.png',
      alt: 'Real-time trader dashboard',
    },
    {
      id: 'automation',
      label: 'Automation Tools',
      heading: 'Automation that scales evaluations, payouts, and messaging.',
      blurb:
        'Drive growth with rule-based triggers for evaluations, promotions, and communications – without extra headcount.',
      image: '/assets/images/prop5.png',
      alt: 'Automation tools for prop firm',
    },
  ];

  const [activeTab, setActiveTab] = useState<'registration' | 'portal' | 'dashboard' | 'automation'>(
    'registration',
  );
  const activeSolution = solutionTabs.find((t) => t.id === activeTab) ?? solutionTabs[0];

  return (
    <div className="pb-24">
      {/* Hero Section – white label solution */}
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
              Prop trading firm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-finovo-dark leading-tight mb-4">
              White-label solution for prop trading firms.
            </h1>
            <p className="text-2xl md:text-3xl font-display text-finovo-dark mb-3">
              Start your prop solution.
            </p>
            <p className="text-finovo-muted text-base md:text-lg mb-8 max-w-xl">
              Launch fast and scale without limits. Finovo provides the technology
              behind registration, evaluation, risk, and payouts so you can focus on
              your traders.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base shadow-md hover:bg-emerald-600 transition-colors cursor-pointer"
              >
                Chat with an expert <ArrowRight className="w-4 h-4" />
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
            <div className="relative w-full max-w-md flex items-center justify-center min-h-[320px]">
              <div className="absolute -top-10 -left-12 w-40 h-40 rounded-full bg-finovo-green/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -right-10 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
              <div className="relative flex items-center justify-center">
                <img
                  src="/assets/images/propmob1.png"
                  alt="Prop trading mobile interface"
                  className="max-w-full max-h-[420px] w-auto h-auto object-contain"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom-designed solution tabs */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-2">
              Custom-designed solutions that power your prop firm.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base">
              Our infrastructure is designed to match your vision.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {solutionTabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
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

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-lg md:text-2xl font-display font-semibold text-finovo-dark mb-1">
                {activeSolution.heading}
              </h3>
              <p className="text-finovo-muted text-sm md:text-base max-w-2xl mx-auto">
                {activeSolution.blurb}
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl min-h-[260px] md:min-h-[320px] flex items-center justify-center">
              <img
                src={activeSolution.image}
                alt={activeSolution.alt}
                className="max-w-full max-h-[420px] w-auto h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Launch your prop firm today – solutions grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-2">
              Launch Your Prop Firm Today
            </h2>
            <p className="text-lg text-finovo-muted mb-1">
              Simple, scalable, and built for success.
            </p>
            <p className="text-sm md:text-base text-finovo-muted">
              The best time to grow with Finovo’s complete prop solution is now.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left column – large cards */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-semibold text-finovo-dark mb-2">
                  Trading Platform
                </h3>
                <p className="text-sm text-finovo-muted mb-4">
                  Give your traders the edge with our Finovo trading stack – mobile, web, and desktop with TradingView‑grade charts,
                  social trading, and flexible order types.
                </p>
                <p className="text-xs md:text-sm text-finovo-muted mb-6">
                  Your branded environment, powered by institutional‑grade technology that keeps traders engaged.
                </p>
                <div className="mb-6">
                  <button className="inline-flex items-center gap-1 text-sm font-semibold text-finovo-green hover:underline">
                    Explore now <span aria-hidden>→</span>
                  </button>
                </div>
                <div className="mt-2 rounded-2xl overflow-hidden border border-slate-200 bg-white">
                  <img
                    src="/assets/images/homepage1.png"
                    alt="Trading platform chart interface"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-semibold text-finovo-dark mb-2">
                  Broker Portal &amp; CRM
                </h3>
                <p className="text-sm text-finovo-muted mb-4">
                  Centralise trading, performance, and compliance in one portal built for prop operations – with CRM,
                  tasking, and approvals wired in.
                </p>
                <p className="text-xs md:text-sm text-finovo-muted mb-6">
                  Configure programmes, manage teams, and track results without fighting spreadsheets.
                </p>
                <button className="inline-flex items-center gap-1 text-sm font-semibold text-finovo-green hover:underline">
                  Explore now <span aria-hidden>→</span>
                </button>
              </div>
            </div>

            {/* Right column – stacked tiles */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-semibold text-finovo-dark mb-2">
                  Liquidity &amp; Data Feed
                </h3>
                <p className="text-sm text-finovo-muted mb-4">
                  Access deep multi‑asset liquidity and reliable pricing, tuned for evaluation and funded accounts.
                </p>
                <button className="inline-flex items-center gap-1 text-sm font-semibold text-finovo-green hover:underline">
                  Explore now <span aria-hidden>→</span>
                </button>
              </div>

              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-semibold text-finovo-dark mb-2">
                  Client Portal
                </h3>
                <p className="text-sm text-finovo-muted mb-4">
                  A clean, branded client area where traders manage profiles, payments, and challenges in one place.
                </p>
                <button className="inline-flex items-center gap-1 text-sm font-semibold text-finovo-green hover:underline">
                  Explore now <span aria-hidden>→</span>
                </button>
              </div>

              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-semibold text-finovo-dark mb-2">
                  Social Trading &amp; Affiliates
                </h3>
                <p className="text-sm text-finovo-muted mb-4">
                  Build community and distribution together – connect social trading, affiliates, and IBs into a single growth engine.
                </p>
                <button className="inline-flex items-center gap-1 text-sm font-semibold text-finovo-green hover:underline">
                  Explore now <span aria-hidden>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TradingPlatformHighlight
        eyebrow="Trading Platform"
        title="Launch your prop firm with the trading platform traders trust."
        description="If you are learning how to start or scale a prop firm, your trading platform is your core asset. Finovo is built to exceed trader expectations from day one."
        secondaryDescription="SiRIX‑grade execution, TradingView‑level charts, and seamless mobile, web, and desktop apps – all under your own brand."
        bullets={[
          'Access global markets across FX, crypto, indices, and more',
          'Built‑in TradingView‑style charting for deep technical analysis',
          'Seamless trading across mobile, desktop, and web',
          'Advanced order types, risk tools, and social trading',
        ]}
        primaryImageSrc="/assets/images/propmob2.png"
        primaryImageAlt="Prop trading mobile app"
        secondaryImageSrc=""
        secondaryImageAlt=""
      />

      <PropLiquiditySection />

      <BackOfficeToolsOverview />

      <PricingSection
        title="Launch or scale your prop trading firm with confidence."
        subtitle="Zero setup fees, simple monthly pricing, and room to grow as your trader community expands."
      />

      {/* Automation, leaderboard & certification tools */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-2">
              Boost Trader Retention and Performance
            </h2>
            <p className="text-lg md:text-2xl text-finovo-muted mb-2">
              Drive engagement and loyalty through automation.
            </p>
            <p className="text-sm md:text-base text-finovo-green font-semibold">
              Tools built specifically to help your prop firm and your traders reach their full potential.
            </p>
          </div>

          {(() => {
            const retentionTools = [
              {
                id: 'keeper' as const,
                label: 'Challenge Keeper',
                description: 'Extend challenges based on performance.',
                image: '/assets/images/prop6.png',
                alt: 'Challenge keeper prompt for traders',
              },
              {
                id: 'retry' as const,
                label: 'Challenge Retry',
                description: 'Offer second chances and reduce drop-offs.',
                image: '/assets/images/prop7.png',
                alt: 'Challenge retry dialog for traders',
              },
              {
                id: 'leaderboard' as const,
                label: 'LeaderBoard',
                description: 'Encourage healthy competition.',
                image: '/assets/images/leaderboard.png',
                alt: 'Leaderboard view for top traders',
              },
              {
                id: 'certification' as const,
                label: 'Certification',
                description: 'Recognise achievement and promote your brand.',
                image: '/assets/images/certificatesettings.png',
                alt: 'Certification settings and payout certificate',
              },
            ];

            const [activeToolId, setActiveToolId] = useState<
              'keeper' | 'retry' | 'leaderboard' | 'certification'
            >('keeper');
            const activeTool =
              retentionTools.find((tool) => tool.id === activeToolId) ?? retentionTools[0];

            return (
              <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 items-start">
                <div className="space-y-4 max-w-sm mx-auto lg:mx-0 w-full">
                  {retentionTools.map((tool) => {
                    const isActive = tool.id === activeToolId;
                    return (
                      <button
                        key={tool.id}
                        type="button"
                        onClick={() => setActiveToolId(tool.id)}
                        className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-200 flex flex-col gap-1 ${
                          isActive
                            ? 'bg-finovo-dark text-white border-finovo-dark shadow-lg shadow-finovo-dark/30'
                            : 'bg-white text-finovo-dark border-slate-200 hover:border-finovo-green/40'
                        }`}
                      >
                        <span className="text-sm md:text-base font-semibold">
                          {tool.label}
                        </span>
                        <span
                          className={`text-xs md:text-sm ${
                            isActive ? 'text-slate-200' : 'text-finovo-muted'
                          }`}
                        >
                          {tool.description}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <motion.div
                  key={activeTool.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-center h-72 md:h-[380px]"
                >
                  <img
                    src={activeTool.image}
                    alt={activeTool.alt}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-finovo-gray p-8 rounded-3xl border border-slate-100 shadow-xl">
                <img
                  src="/assets/images/homepage1.png"
                  alt="Prop Trading Dashboard"
                  className="rounded-2xl w-full shadow-lg"
                  loading="lazy"
                />
              </div>
              {/* Floating Stat */}
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 max-w-[200px]">
                <div className="text-3xl font-black text-finovo-green mb-1">10k+</div>
                <div className="text-xs font-bold text-finovo-muted uppercase tracking-widest leading-tight">Traders Evaluated Daily</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-8">
                Built for Scale and Precision
              </h2>
              <p className="text-finovo-muted text-lg mb-10 leading-relaxed">
                Our prop trading solution is designed to handle thousands of traders simultaneously. With automated evaluation rules and real-time risk monitoring, you can focus on finding the best talent while we handle the tech.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
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
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-6">Why Choose Finovo?</h2>
            <p className="text-finovo-muted text-lg max-w-2xl mx-auto">We provide the most robust and reliable technology for prop firms globally.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Automated Rules", desc: "Set your evaluation criteria and let our system handle the rest.", icon: Zap },
              { title: "Deep Analytics", desc: "Gain insights into trader performance and risk profile.", icon: Database },
              { title: "Secure Infrastructure", desc: "Your data and your traders' data are protected with enterprise-grade security.", icon: ShieldCheck }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-finovo-green/10 rounded-2xl flex items-center justify-center mb-8">
                  <item.icon className="w-7 h-7 text-finovo-green" />
                </div>
                <h3 className="text-2xl font-bold text-finovo-dark mb-4">{item.title}</h3>
                <p className="text-finovo-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IntegrationsOrbitSection />

      <PropFaqSection />
    </div>
  );
}
