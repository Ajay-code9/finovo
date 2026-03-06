import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Server, RadioTower, Activity, Settings2, Network, Users } from 'lucide-react';
import { DotsBackground } from '../../components/DotsBackground';

// These image paths assume you place your service reference images in:
// public/assets/mt4mt5-setup/
const heroImage = '/assets/mt4mt5-setup/hero.png';

export default function MT4MT5Setup() {
  const includedCards = [
    {
      title: 'Complete server deployment',
      icon: Server,
      bullets: [
        'Primary, backup, access & failover servers configured for your model.',
        'Symbol and security configuration for FX, indices, metals and more.',
        'Retail, pro, and IB group structures tuned to your plans.',
        'Routing rules, bridges and plugins wired and tested.',
      ],
    },
    {
      title: 'Ultra‑stable hosting',
      icon: RadioTower,
      bullets: [
        'Enterprise‑grade data centres with 99.99%+ uptime.',
        'Low‑latency connectivity to major liquidity hubs.',
        'DDoS protection and hardened perimeter security.',
        'Monitoring for capacity, CPU and network health.',
      ],
    },
    {
      title: 'Daily operations & maintenance',
      icon: Activity,
      bullets: [
        '24/7 server monitoring and incident response.',
        'Symbol, spread and instrument list updates.',
        'Spread, swap and markup optimisation support.',
        'Issue investigation and performance tuning.',
      ],
    },
    {
      title: 'Swap & trading conditions',
      icon: Settings2,
      bullets: [
        'Market‑based swap and commission configuration.',
        'DST & global market session adjustments.',
        'Trading session and product schedule setup.',
        'Markup strategies aligned with your risk appetite.',
      ],
    },
    {
      title: 'Gateway & feed management',
      icon: Network,
      bullets: [
        'Price stream accuracy monitoring across symbols.',
        'Gateway and liquidity bridge configuration.',
        'Backup feed routing and redundancy planning.',
        'Health checks and latency optimisation.',
      ],
    },
    {
      title: 'Dedicated expert team',
      icon: Users,
      bullets: [
        'Senior MetaTrader 4/5 platform engineers.',
        'Liquidity and risk specialists on call.',
        '24/5 operational coverage with escalation.',
        'Launch and migration guidance from day one.',
      ],
    },
  ];

  const maintainCards = [
    {
      title: 'Automated monitoring',
      icon: Activity,
      bullets: [
        'Real‑time server, gateway and feed performance tracking.',
        'Proactive alerting before traders feel an issue.',
        'Dashboards for session health, latency and load.',
      ],
    },
    {
      title: 'Regular updates',
      icon: Settings2,
      bullets: [
        'Core platform patches and security updates.',
        'Plugin, bridge and gateway version upgrades.',
        'Performance optimisation reviews with your team.',
      ],
    },
    {
      title: 'Custom configurations',
      icon: Network,
      bullets: [
        'Routing rules tailored to A‑Book, B‑Book or hybrid.',
        'Trading conditions adapted as your flows evolve.',
        'Integrations with CRM, risk and third‑party tools.',
      ],
    },
  ];

  const turnkeyCards = [
    {
      title: 'Enterprise‑grade foundation',
      desc: 'Launch on hardened MT4/5 infrastructure with redundancy, monitoring and clear SLAs from day one.',
    },
    {
      title: 'Conditions built around you',
      desc: 'We configure symbols, groups, leverage, spreads and swaps around your target clients and regions.',
    },
    {
      title: 'Gateway & liquidity control',
      desc: 'Keep spreads tight and execution consistent with managed gateways, bridges and price‑feed validation.',
    },
    {
      title: 'Beyond setup, into operations',
      desc: 'As you grow, extend into CRM, client portal, risk management and liquidity modules managed by Finovo.',
    },
  ];

  return (
    <div className="pb-24">
      {/* Hero – MT4 MT5 Setup */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(15,118,110,0.12),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden xl:block">
          <DotsBackground />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold text-finovo-green mb-3 uppercase tracking-[0.25em]">
              MT4 MT5 setup
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-finovo-dark mb-3 leading-tight">
              Start your brokerage journey with MT4 or MT5 infrastructure.
            </h1>
            <p className="text-finovo-muted text-base md:text-lg mb-6 max-w-xl">
              Finovo handles the technical setup – from servers and hosting to pricing feeds and day‑to‑day operations –
              so you can focus on clients, regulation and growth.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base hover:bg-emerald-600 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                Get started for free
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs md:text-sm text-slate-500">
                Zero setup fees · MT4/5 specialists · Managed by Finovo
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-xl">
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-finovo-green/10 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-emerald-500/15 blur-3xl" />
              <div className="relative rounded-3xl border border-slate-100 bg-white shadow-2xl p-4">
                <img
                  src={heroImage}
                  alt="MetaTrader 4 and 5 terminals ready for deployment"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Thin benefits strip under hero */}
        <div className="mt-10 bg-finovo-dark text-xs md:text-sm text-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-4 bg-finovo-green" />
                <span>Free setup &amp; hosting during launch</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-4 bg-finovo-green" />
                <span>Ideal for startup brokerages</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-4 bg-finovo-green" />
                <span>Backed by Finovo&apos;s trading infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What&apos;s included in your setup */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.04),transparent_55%)]" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-3">
              What&apos;s included in your MetaTrader setup.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base max-w-2xl mx-auto">
              From first server to full scale, our MT4/5 setup service gives you the same foundation used by established
              brokerages – without hiring an in‑house infrastructure team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {includedCards.map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl border border-slate-100 shadow-[0_10px_40px_rgba(15,23,42,0.04)] p-6 md:p-7 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition duration-300"
              >
                <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-finovo-green/10 border border-finovo-green/25 text-finovo-green">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-finovo-dark">{card.title}</h3>
                <ul className="space-y-1.5 text-xs md:text-sm text-finovo-dark/80">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 h-px w-full bg-linear-to-r from-transparent via-finovo-green/50 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch your brokerage with zero setup costs */}
      <section className="relative py-12 md:py-16 bg-finovo-gray overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_bottom,rgba(15,23,42,0.35),transparent_55%)]" />
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-finovo-dark mb-2">
              Launch your brokerage with zero setup costs.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base">
              Go live on MT4 or MT5 quickly – start on managed hosting, then upgrade to a full turnkey stack as your
              volumes grow.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl border border-finovo-green/40 shadow-sm p-6 md:p-8 relative"
          >
            <p className="text-xs font-semibold text-finovo-green mb-2 uppercase tracking-[0.25em]">
              Ideal for startup brokerages
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-finovo-dark mb-2">
              Hosting, data feed and support from day one.
            </h3>
            <p className="text-finovo-muted text-sm md:text-base mb-4">
              Test your brokerage model with a predictable monthly cost that covers the essentials – without long‑term
              commitments or infrastructure surprises.
            </p>
            <ul className="space-y-1.5 text-sm text-finovo-dark">
              <li>✓ Enterprise‑grade hosting & monitoring</li>
              <li>✓ Liquidity and data‑feed connectivity</li>
              <li>✓ 24/7 MetaTrader support from specialists</li>
            </ul>
            <button className="mt-5 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-finovo-green text-white text-sm md:text-base font-semibold hover:bg-emerald-600 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all">
              Get it for free
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="pointer-events-none absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-finovo-green/10 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* What we maintain behind the scenes */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.06),transparent_55%)]" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-3">
              What we maintain behind the scenes.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base max-w-2xl mx-auto">
              Once your platform is live, our team keeps it healthy – monitoring, updating and adjusting your setup while
              you focus on client relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {maintainCards.map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl border border-slate-100 shadow-[0_10px_40px_rgba(15,23,42,0.04)] p-6 md:p-7 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition duration-300"
              >
                <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-finovo-green/10 border border-finovo-green/25 text-finovo-green">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-finovo-dark">{card.title}</h3>
                <ul className="space-y-1.5 text-xs md:text-sm text-finovo-dark/80">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 h-px w-full bg-linear-to-r from-transparent via-finovo-green/50 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Need more than just MT4 or MT5 setup? */}
      <section className="relative py-16 md:py-24 bg-finovo-dark overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-3">
            Need more than just MT4 or MT5 setup?
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-8">
            Step into Finovo&apos;s full turnkey ecosystem – CRM, client portal, liquidity, risk management and back
            office, all aligned with your MetaTrader stack.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-finovo-dark font-semibold text-sm md:text-base hover:bg-slate-100 hover:shadow-md transition-all"
          >
            Explore full MT4/5 turnkey solution
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}

