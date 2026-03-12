import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Server, Waves, ShieldCheck, Users2, CreditCard, Headset, Check } from 'lucide-react';
import PricingSection from '../../components/PricingSection';
import { PropLiquiditySection } from '../../components/PropLiquiditySection';
import { IntegrationsOrbitSection } from '../../components/IntegrationsOrbitSection';
import { PropFaqSection } from '../../components/PropFaqSection';

export default function MT4MT5Solutions() {
  const stats = [
    { prefix: '$', target: 500, suffix: 'M+', sub: 'Monthly volume' },
    { prefix: '', target: 40, suffix: 'K+', sub: 'Trader accounts' },
    { prefix: '', target: 80, suffix: '+', sub: 'Global partners' },
    { prefix: '', target: 5, suffix: '+', sub: 'Years of experience' },
  ];

  const [statValues, setStatValues] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!statsRef.current || hasAnimated) return;

    const node = statsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setHasAnimated(true);

          const duration = 2000;
          const steps = 60;
          const interval = duration / steps;

          let currentStep = 0;
          const timer = setInterval(() => {
            currentStep += 1;
            setStatValues((prev) =>
              prev.map((_, idx) => {
                const target = stats[idx].target;
                const progress = Math.min(currentStep / steps, 1);
                return Math.round(target * progress);
              }),
            );

            if (currentStep >= steps) {
              clearInterval(timer);
            }
          }, interval);

          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  const turnkeyItems = [
    'MT4/5 setup & hosting',
    'Liquidity & data feed',
    'Payment integrations',
    'CRM & client portal',
    'Risk management',
    '24/7 technical support',
  ];

  const steps = [
    {
      step: '01',
      title: 'Send your MT4/5 license',
      desc: 'Bring your existing MetaTrader license and we handle hosting, configuration, and migration.',
      icon: '/assets/images/step-1.png',
    },
    {
      step: '02',
      title: 'Strategy & brokerage review',
      desc: 'Align infrastructure, risk, and reporting with your commercial model before we deploy.',
      icon: '/assets/images/step-2.png',
    },
    {
      step: '03',
      title: 'Full system deployment',
      desc: 'We configure servers, CRM, client portal, liquidity, and automations into a single stack.',
      icon: '/assets/images/step-3.png',
    },
    {
      step: '04',
      title: 'Go live & scale',
      desc: 'Launch with confidence and grow with ongoing optimisation, maintenance, and support.',
      icon: '/assets/images/step-4.png',
    },
  ];

  const ecosystemCards = [
    {
      title: 'MT4/5 server setup & hosting',
      icon: Server,
      bullets: [
        'Primary, backup, and access servers configured to your needs.',
        'Enterprise‑grade hosting with 99.99%+ uptime SLA.',
        'Symbol, routing, and gateway configuration tuned for your flow.',
        'Performance monitoring and optimisation baked in.',
      ],
    },
    {
      title: 'Liquidity & data feed',
      icon: Waves,
      bullets: [
        'Aggregated multi‑provider FX, indices, crypto, and metals.',
        'Ultra‑fast execution with minimal slippage.',
        'FIX API or MT4/5 gateway connectivity.',
        'Support for A‑Book, B‑Book, or hybrid models.',
      ],
    },
    {
      title: 'Risk management & back office',
      icon: ShieldCheck,
      bullets: [
        'Real‑time exposure breakdown by symbol, book, and trader.',
        'Configurable A/B‑book routing and hedging triggers.',
        'NOP limits and group‑level risk segmentation.',
        'Back‑office workflows integrated with CRM and reporting.',
      ],
    },
    {
      title: 'CRM & client portal',
      icon: Users2,
      bullets: [
        'Branded portals for onboarding, deposits, and account management.',
        'KYC workflows and document management.',
        'Dashboards for traders, IBs, and partners.',
        'Multi‑language and multi‑jurisdiction support.',
      ],
    },
    {
      title: 'Payment integration',
      icon: CreditCard,
      bullets: [
        'Connections to multiple PSPs and local methods.',
        'Automated transaction processing and reconciliation.',
        'Multi‑currency and multi‑wallet support.',
        'Compliance‑ready audit trails and reporting.',
      ],
    },
    {
      title: '24/7 dedicated support',
      icon: Headset,
      bullets: [
        'Senior MetaTrader engineers on call.',
        'Emergency incident response and recovery.',
        'Platform and plugin maintenance included.',
        'Proactive reviews to keep your stack healthy.',
      ],
    },
  ];

  const launchCards = [
    {
      title: 'Enterprise‑grade infrastructure',
      desc: 'Fully configured MT4/5 servers with redundancy, geo‑distributed hosting, and 99.99%+ uptime.',
    },
    {
      title: 'Tailored trading conditions',
      desc: 'Symbols, groups, spreads, swaps, and commissions configured to match your brand and risk appetite.',
    },
    {
      title: 'Gateway & liquidity management',
      desc: 'Accurate price streams, liquidity bridges, FIX API connectivity, and backup routing.',
    },
    {
      title: 'Ongoing operations & support',
      desc: '24/7 monitoring, optimisation, symbol updates, and expert consultation as you grow.',
    },
  ];

  return (
    <div className="pb-24">
      {/* Hero – MT4 & MT5 ecosystem */}
      <section className="py-16 md:py-24 bg-finovo-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <p className="text-xs font-semibold text-finovo-green mb-3 uppercase tracking-[0.25em]">
              MT4 &amp; MT5 ecosystem
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold mb-4 leading-tight">
              Power your MT4 &amp; MT5 brokerage
              <span className="block">into a profit engine.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-100 mb-4">
              A fully managed services stack that upgrades your existing MetaTrader setup.
            </p>
            <p className="text-slate-300 text-sm md:text-base mb-8 max-w-xl">
              You already run MetaTrader – we optimise everything around it so you can improve profitability, reliability,
              and client experience without swapping platforms.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base hover:bg-emerald-500 transition-colors">
                Start 3 months for free <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs md:text-sm text-slate-400">
                Free of charge during onboarding. No hidden fees.
              </span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-finovo-green/15 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="relative flex justify-end items-center">
                <div className="w-80 sm:w-[24rem] md:w-[26rem] lg:w-[30rem] xl:w-[34rem]">
                  <img
                    src="/assets/images/homepage4.png"
                    alt="MT4/MT5 white label trading screens"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -top-6 right-2 bg-white text-finovo-dark text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-finovo-green text-[9px] text-white">
                    %
                  </span>
                  Limited time offer
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={statsRef}
          className="max-w-6xl mx-auto px-6 mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
        >
          {stats.map((stat, index) => (
            <div key={stat.sub}>
              <div className="text-3xl md:text-4xl font-black">
                {stat.prefix}
                {Math.round(statValues[index])}
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-slate-300">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What is an MT4/5 profit engine */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-4">
              What is an MT4/5 profit engine?
            </h2>
            <p className="text-finovo-muted text-base md:text-lg mb-4">
              Think of it as a fully managed ecosystem around your MetaTrader license – hosting, liquidity, risk,
              back‑office, and client experience all working together.
            </p>
            <p className="text-finovo-muted text-sm md:text-base">
              By combining optimised infrastructure, liquidity, risk tools, CRM, and automation, we turn your MT4/5
              environment into a structured, scalable, and profit‑focused brokerage operation.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-lg px-7 py-8 md:px-9 md:py-9">
            <h3 className="text-lg md:text-xl font-semibold text-finovo-dark mb-4">
              What&apos;s included in your turnkey package
            </h3>
            <p className="text-finovo-muted text-sm md:text-base mb-4">
              A complete, fully managed MT4/5 setup with zero technical burden on your team.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-finovo-muted">
              <ul className="space-y-2">
                {turnkeyItems.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 w-4 h-4 text-finovo-green shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {turnkeyItems.slice(3).map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 w-4 h-4 text-finovo-green shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-finovo-green text-white text-sm font-semibold hover:bg-emerald-600 hover:shadow-md active:scale-[0.98] transition-all">
              Start 3 months for free <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Scale your MT4/5 brokerage in days, not months – steps */}
      <section className="py-18 md:py-26 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-4">
              Scale your MT4/5 brokerage in days, not months.
            </h2>
            <p className="text-finovo-muted text-base md:text-lg max-w-3xl mx-auto">
              From license onboarding to live trading, we manage the entire setup so you can stay focused on growth and
              relationships.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {steps.map((step) => (
              <div
                key={step.title}
                className="bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-2xl px-8 py-9 flex flex-col items-center text-center gap-5 transition-all duration-200 hover:-translate-y-1.5 hover:border-finovo-green/60"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-1 drop-shadow-[0_16px_32px_rgba(16,185,129,0.4)]">
                  <img
                    src={step.icon}
                    alt={`Step ${step.step}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="max-w-[260px] mx-auto space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold text-finovo-dark">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-finovo-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base hover:bg-emerald-500 hover:shadow-md active:scale-[0.98] transition-all">
              Start 3 months for free <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* The complete ecosystem – 6 cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-3">
              The complete MT4/5 ecosystem.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base max-w-2xl mx-auto">
              Every component you need to run a professional brokerage, integrated and maintained by experts. Pick the
              modules you need today and add more as you scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ecosystemCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 flex flex-col gap-3"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-finovo-green/8 text-finovo-green mb-1">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-finovo-dark">{card.title}</h3>
                  <ul className="space-y-2 text-xs md:text-sm text-finovo-muted">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 h-3 w-3 rounded-full border border-finovo-green/70 bg-finovo-green/10 flex items-center justify-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-finovo-green" />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base hover:bg-emerald-500 hover:shadow-md active:scale-[0.98] transition-all">
              Start 3 months for free <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Partner with a technology team that never sleeps – stats strip */}
      <section className="py-14 md:py-16 bg-finovo-dark">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-3">
            Partner with a technology team that never sleeps.
          </h2>
          <p className="text-slate-300 text-sm md:text-base mb-6">
            24/7 monitoring, incident response, and brokerage reviews so your infrastructure keeps pace with your
            ambitions.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-slate-100 text-sm md:text-base">
            <div>
              <div className="font-black text-lg md:text-xl">24/7</div>
              <div className="text-slate-400 text-xs md:text-sm">Live support</div>
            </div>
            <div>
              <div className="font-black text-lg md:text-xl">99.99%</div>
              <div className="text-slate-400 text-xs md:text-sm">Uptime</div>
            </div>
            <div>
              <div className="font-black text-lg md:text-xl">2M+</div>
              <div className="text-slate-400 text-xs md:text-sm">Accounts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Launching a new brokerage on MT5? */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-display font-semibold text-finovo-dark mb-3">
              Launching a new brokerage on MT5?
            </h2>
            <p className="text-finovo-muted text-sm md:text-base max-w-2xl mx-auto">
              Our MT4/5 setup and maintenance service gives new brokers a compliant, scalable trading platform from day
              one – while helping established brokers reduce hosting costs and optimise infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {launchCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 flex flex-col gap-2"
              >
                <h3 className="text-sm md:text-base font-semibold text-finovo-dark">{card.title}</h3>
                <p className="text-xs md:text-sm text-finovo-muted">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base hover:bg-emerald-500 hover:shadow-md active:scale-[0.98] transition-all">
              View MT4/5 setup &amp; maintenance <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Reuse shared sections – liquidity, integrations, pricing, FAQ */}
      <PropLiquiditySection />

      <IntegrationsOrbitSection
        title="Seamless setup & limitless integration for MetaTrader."
        subtitle="CRMs, PSPs, KYC providers, and third‑party tools pre‑integrated so your MT4/5 stack can scale without re‑engineering."
      />

      <PricingSection
        title="Simple, transparent pricing for MT4/5 infrastructure."
        subtitle="Start on a standard managed stack or design a custom package that reflects your volumes and growth plans."
      />

      <PropFaqSection
        title="Frequently asked questions about MT4/5 solutions."
        subtitle="Everything you need to know about our managed MT4/5 ecosystem before you get started."
        ctaLabel="Contact our MT4/5 specialists"
      />
    </div>
  );
}

