import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, ShieldCheck, Users, Star, Crown, Landmark, Coins, BarChart3, Film, Globe2, Check } from 'lucide-react';
import { PropFaqSection } from '../../components/PropFaqSection';
import { DotsBackground } from '../../components/DotsBackground';

export default function PredictionMarkets() {
  const whyCards = [
    {
      title: '$700M+ daily volume',
      desc: 'Prediction markets have moved from niche to mainstream, with daily volumes in the hundreds of millions – and growing.',
      icon: TrendingUp,
    },
    {
      title: 'Regulation is catching up',
      desc: 'Global regulators are opening the door to event‑based products, turning a once‑experimental idea into a real asset class.',
      icon: ShieldCheck,
    },
    {
      title: 'Traders are asking for it',
      desc: 'Your audience already speculates on events through social media and other platforms. Prediction markets let them do it under your brand.',
      icon: Users,
    },
    {
      title: 'First‑mover advantage',
      desc: 'Very few brokers offer fully branded prediction markets today. Moving early lets you stand out and capture a new revenue line.',
      icon: Star,
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Set up your environment',
      desc: 'Connect your brand, domains, and basic operational settings. Our team guides you through every choice.',
      icon: '/assets/images/step-1.png',
    },
    {
      step: '02',
      title: 'Brand it yours',
      desc: 'Upload your logo, colours, and typography so traders experience a seamless, fully branded platform.',
      icon: '/assets/images/step-2.png',
    },
    {
      step: '03',
      title: 'Launch markets',
      desc: 'Switch on pre‑built templates, categories, and settlement rules across sports, politics, crypto, and more.',
      icon: '/assets/images/step-3.png',
    },
    {
      step: '04',
      title: 'Earn & scale',
      desc: 'Grow revenue from spreads and fees while our team maintains infrastructure, monitoring, and upgrades.',
      icon: '/assets/images/step-4.png',
    },
  ];

  const featureCards = [
    {
      title: 'Dynamic market lobby',
      desc: 'Continuously updated grid of trending markets, categories, and promotions – tuned to your traders.',
      icon: TrendingUp,
    },
    {
      title: 'Advanced order book',
      desc: 'Depth of market view with limit and market orders, spreads, and live price updates.',
      icon: BarChart3,
    },
    {
      title: 'Portfolio dashboard',
      desc: 'Clear P&L, open positions, and settlement history so traders always know where they stand.',
      icon: Users,
    },
    {
      title: 'One‑click trading',
      desc: 'Yes/No or multi‑outcome orders executed in a tap, optimised for mobile and desktop.',
      icon: Star,
    },
    {
      title: 'Social & leaderboards',
      desc: 'Leaderboards and activity feeds that showcase top traders and keep users coming back.',
      icon: Crown,
    },
    {
      title: 'Full admin controls',
      desc: 'Back‑office tools to create, pause, or settle markets – with granular permissions for each team.',
      icon: ShieldCheck,
    },
    {
      title: 'Mobile‑first design',
      desc: 'A responsive experience that feels native on phones and tablets, not just resized.',
      icon: Coins,
    },
    {
      title: 'White‑label ready',
      desc: 'Your logo, your domain, your compliance language – our technology stays behind the scenes.',
      icon: Film,
    },
  ];

  const benefitCards = [
    {
      metric: '3x',
      label: 'Acquisition lift',
      title: 'Attract a new generation of traders.',
      desc: 'Sports fans, crypto natives, and news‑driven traders all understand prediction markets instantly – even if they have never traded FX.',
    },
    {
      metric: '15–25%',
      label: 'Additional revenue',
      title: 'New revenue with minimal overhead.',
      desc: 'Event trading adds an incremental profit centre powered by spreads and fees, not just traditional instruments.',
    },
    {
      metric: '+120%',
      label: 'Engagement',
      title: 'Sticky enough for everyone.',
      desc: 'Simple yes/no decisions and frequent outcomes give traders a reason to log in daily and check results.',
    },
    {
      metric: '+80%',
      label: 'Monthly retention',
      title: 'Built‑in retention loops.',
      desc: 'From open positions to pending results, prediction markets create natural prompts to return and trade again.',
    },
  ];

  const categoryCards = [
    { title: 'Stock markets', desc: 'Earnings, IPOs, index levels, and macro events.', icon: BarChart3 },
    { title: 'Crypto', desc: 'BTC milestones, ETF approvals, and protocol upgrades.', icon: Coins },
    { title: 'Sports', desc: 'Match results, championships, and season performance.', icon: Crown },
    { title: 'Elections', desc: 'National, regional, and referendum outcomes.', icon: Landmark },
    { title: 'Entertainment', desc: 'Awards, box‑office, and streaming hits.', icon: Film },
    { title: 'Economics', desc: 'Rate decisions, inflation prints, and GDP surprises.', icon: TrendingUp },
    { title: 'Weather', desc: 'Storm paths, temperatures, and climate milestones.', icon: Globe2 },
    { title: 'News & events', desc: 'Tech launches, policy shifts, and more.', icon: Star },
  ];

  return (
    <div className="pb-24">
      {/* Hero – Your brand, their predictions */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_55%)]" />
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
              Prediction markets
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-finovo-dark leading-tight mb-4">
              Your brand.
              <br />
              <span className="text-finovo-green">Their predictions.</span>
              <br />
              Your revenue.
            </h1>
            <p className="text-finovo-muted text-base md:text-lg mb-8 max-w-xl">
              Launch a fully branded prediction markets platform without building the technology yourself. Finovo
              handles the infrastructure, operations, and upgrades – you focus on the traders and the markets.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base shadow-md hover:bg-emerald-600 transition-colors">
                Start today <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm md:text-base font-semibold text-finovo-dark hover:text-finovo-green transition-colors">
                Try live demo
                <span className="h-px w-8 bg-finovo-green" />
              </button>
            </div>
            <p className="mt-4 text-xs md:text-sm text-finovo-muted font-medium">
              Launch in weeks · Fully managed · Finovo green‑first theme
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
              <div className="relative rounded-[2.5rem] border border-slate-100 bg-white shadow-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-finovo-muted uppercase tracking-[0.2em]">
                      Live market
                    </p>
                    <p className="text-sm md:text-base font-semibold text-finovo-dark">
                      Will a major tech IPO price above guidance?
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-finovo-green bg-finovo-green/10 rounded-full px-3 py-1">
                    24% implied
                  </span>
                </div>
                <div className="h-40 md:h-48 rounded-2xl bg-linear-to-tr from-finovo-green/10 via-white to-emerald-200/40 overflow-hidden flex items-end px-4 pb-4">
                  <div className="w-full h-24 relative">
                    <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-finovo-green/50 to-transparent" />
                    <svg viewBox="0 0 200 80" className="w-full h-full text-finovo-green">
                      <path
                        d="M0 70 C 30 60, 50 40, 80 35 C 110 30, 130 20, 160 25 C 180 30, 195 20, 200 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-finovo-muted uppercase tracking-[0.2em]">
                      Buy contract
                    </p>
                    <p className="text-lg font-display font-semibold text-finovo-dark">$400.00</p>
                  </div>
                  <button className="px-5 py-2.5 rounded-full bg-finovo-green text-white text-sm font-semibold hover:bg-emerald-600 active:scale-[0.98] transition-all">
                    Trade
                  </button>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-[10px] text-finovo-muted">
                  <div className="rounded-xl bg-finovo-gray px-2 py-1.5">
                    Central bank cut this year? <span className="font-semibold text-finovo-green">63%</span>
                  </div>
                  <div className="rounded-xl bg-finovo-gray px-2 py-1.5">
                    BTC above $100K? <span className="font-semibold text-finovo-green">31%</span>
                  </div>
                  <div className="rounded-xl bg-finovo-gray px-2 py-1.5">
                    Major index ATH? <span className="font-semibold text-finovo-green">88%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why prediction markets, why now */}
      <section className="py-18 md:py-26 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-4">
              Why prediction markets, <span className="text-finovo-green">why now?</span>
            </h2>
            <p className="text-finovo-muted text-base md:text-lg max-w-3xl mx-auto">
              Fintech leaders are racing into event‑driven trading. Here’s why brokers who move early are best placed to
              benefit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {whyCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -4, boxShadow: '0 22px 55px rgba(15, 118, 110, 0.14)' }}
                  className="bg-white rounded-3xl border border-slate-100 shadow-md px-7 py-7 flex flex-col gap-3 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-finovo-green/8 text-finovo-green mb-1">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-finovo-dark">{card.title}</h3>
                  <p className="text-sm md:text-base text-finovo-muted">{card.desc}</p>
                  <div className="mt-3 h-[3px] rounded-full bg-linear-to-r from-transparent via-finovo-green/70 to-transparent" />
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center w-full mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full max-w-4xl mx-auto">
              {[
                { label: 'Sports', icon: Crown },
                { label: 'Politics', icon: Landmark },
                { label: 'Crypto', icon: Coins },
                { label: 'Finance', icon: BarChart3 },
                { label: 'Entertainment', icon: Film },
              ].map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center justify-center gap-3 px-5 py-3.5 md:px-6 md:py-4 rounded-full text-sm md:text-base font-semibold text-white border border-emerald-500/80 shadow-sm bg-gradient-to-r from-finovo-green to-emerald-500"
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-white shrink-0" aria-hidden />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Launch faster, lead the market – steps */}
      <section className="py-18 md:py-26 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-4">
              Launch faster, <span className="text-finovo-green">lead the market.</span>
            </h2>
            <p className="text-finovo-muted text-base md:text-lg max-w-3xl mx-auto">
              From first call to live event trading, our turnkey solution compresses months of development into a few
              weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                whileHover={{ y: -4, boxShadow: '0 16px 38px rgba(15,118,110,0.14)' }}
                className="bg-finovo-gray rounded-3xl border border-slate-100 shadow-md px-6 py-7 flex flex-col items-center text-center gap-4 transition-all"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center drop-shadow-[0_12px_25px_rgba(16,185,129,0.35)]">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2 max-w-[240px]">
                  <h3 className="text-base md:text-lg font-semibold text-finovo-dark">{step.title}</h3>
                  <p className="text-sm md:text-base text-finovo-muted">{step.desc}</p>
                </div>
                <div className="mt-1 h-[3px] w-full rounded-full bg-linear-to-r from-transparent via-finovo-green/60 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything you need to compete – feature grid */}
      <section className="py-18 md:py-26 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-4">
              Everything you need to <span className="text-finovo-green">compete.</span>
            </h2>
            <p className="text-finovo-muted text-base md:text-lg max-w-3xl mx-auto">
              A production‑ready platform with every tool your traders expect – built and operated by a team that
              already powers global trading venues.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {featureCards.map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: '0 22px 55px rgba(15,118,110,0.14)' }}
                className="bg-white rounded-3xl border border-slate-100 shadow-md px-7 py-8 flex flex-col gap-4 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-linear-to-br from-finovo-green/15 via-emerald-50 to-white text-finovo-green mb-1">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-finovo-dark">{card.title}</h3>
                <p className="text-sm md:text-base text-finovo-muted">{card.desc}</p>
                <div className="mt-3 h-[3px] rounded-full bg-linear-to-r from-transparent via-finovo-green/70 to-transparent" />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-8 text-[11px] text-finovo-muted">
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200">
              Multi‑category: sports, crypto, politics, finance &amp; more
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200">
              Real‑time prices, feeds, and settlements
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200">
              Battle‑tested infrastructure, designed for scale
            </span>
          </div>
        </div>
      </section>

      {/* Why brokers are adding prediction markets */}
      <section className="py-18 md:py-26 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-4">
              Why brokers are adding <span className="text-finovo-green">prediction markets.</span>
            </h2>
            <p className="text-finovo-muted text-base md:text-lg max-w-3xl mx-auto">
              This isn’t a side‑project asset class any more – it’s a meaningful contributor to the bottom line when
              implemented correctly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefitCards.map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(15,118,110,0.14)' }}
                className="bg-finovo-gray rounded-3xl border border-slate-100 shadow-sm p-6 flex flex-col gap-3 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="text-xl font-black text-finovo-green">{card.metric}</span>
                    <span className="text-[11px] font-semibold text-finovo-muted uppercase tracking-[0.2em]">
                      {card.label}
                    </span>
                  </div>
                </div>
                <h3 className="text-sm md:text-base font-semibold text-finovo-dark">{card.title}</h3>
                <p className="text-xs md:text-sm text-finovo-muted">{card.desc}</p>
                <div className="mt-2 h-[3px] rounded-full bg-linear-to-r from-transparent via-finovo-green/70 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cover every interest your traders have */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-3">
              Cover every interest <span className="text-finovo-green">your traders have.</span>
            </h2>
            <p className="text-finovo-muted text-sm md:text-base max-w-2xl mx-auto">
              Pre‑built templates across categories mean you can launch quickly and keep adding markets as news breaks.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {categoryCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(15,118,110,0.14)' }}
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm px-6 py-7 flex flex-col gap-3 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-finovo-green/8 text-finovo-green mb-1">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-finovo-dark">{card.title}</h3>
                  <p className="text-sm md:text-base text-finovo-muted">{card.desc}</p>
                  <div className="mt-3 h-[3px] rounded-full bg-linear-to-r from-transparent via-finovo-green/70 to-transparent" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience premium infrastructure */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-3">
              Experience premium infrastructure.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base mb-6 max-w-xl">
              Under the hood, your prediction markets run on the same quality standards as institutional trading
              platforms – uptime, monitoring, and security built in from day one.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-finovo-muted mb-6">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                <span>Real‑time trading &amp; order management with live price feeds.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                <span>Admin dashboards to manage markets, users, and risk in one place.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                <span>Dedicated onboarding support so your team is confident on day one.</span>
              </li>
            </ul>
            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base hover:bg-emerald-600 hover:shadow-md active:scale-[0.98] transition-all">
              Start today <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex justify-center lg:justify-end"
          >
              <div className="relative w-full max-w-xl">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-finovo-green/10 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-emerald-500/15 blur-3xl" />
                <div className="relative w-full">
                  <img
                    src="/assets/images/tradingdashboardlapnmob.png"
                    alt="Prediction markets admin laptop dashboard"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
          </motion.div>
        </div>
      </section>

      {/* CTA – ready to own the prediction market opportunity */}
      <section className="py-18 md:py-24 bg-finovo-dark">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-white mb-4">
            Ready to own the <span className="text-finovo-green">prediction market opportunity?</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base mb-8 max-w-2xl mx-auto">
            Launch your own fully branded, fully managed prediction markets platform – backed by Finovo&apos;s brokerage
            technology expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-5">
            <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base hover:bg-emerald-500 hover:shadow-md active:scale-[0.98] transition-all">
              Start today <ArrowRight className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-slate-600 bg-transparent text-white font-semibold text-sm md:text-base hover:bg-slate-900/60 hover:shadow-md active:scale-[0.98] transition-all">
              Try live demo
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-[11px] md:text-xs text-slate-300">
            <span className="inline-flex items-center gap-2">
              <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-finovo-green" />
              Fully branded
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-finovo-green" />
              Launch in weeks
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-finovo-green" />
              19+ years expertise
            </span>
          </div>
        </div>
      </section>

      {/* FAQ – reuse PropFaqSection with prediction‑specific copy */}
      <PropFaqSection
        title="Frequently asked questions about prediction markets."
        subtitle="Everything you need to know before launching your own white‑label prediction platform."
        ctaLabel="Talk to our prediction markets team"
        faqs={[
          {
            id: 'what-is',
            question: 'What is a white‑label prediction market?',
            answer:
              'It is a fully branded trading platform where users speculate on real‑world event outcomes under your logo, colours, and domain – Finovo runs the technology behind the scenes.',
          },
          {
            id: 'markets',
            question: 'What kind of markets can I offer?',
            answer:
              'You can start with pre‑configured templates across sports, politics, finance, crypto, entertainment, and more – then extend with custom events as your strategy evolves.',
          },
          {
            id: 'revenue',
            question: 'How does the platform generate revenue?',
            answer:
              'Most brokers earn from spreads, fees, and market‑making on event contracts, with the flexibility to design pricing that fits their audience.',
          },
          {
            id: 'settlement',
            question: 'How are markets resolved and settled?',
            answer:
              'Finovo plugs into trusted data sources and manual controls so each event can be resolved cleanly, with transparent rules and audit history.',
          },
          {
            id: 'build-vs-buy',
            question: 'Why partner with Finovo instead of building in‑house?',
            answer:
              'You skip years of R&D and ongoing maintenance. Our team handles infrastructure, upgrades, and compliance‑friendly tooling so you can focus on product and distribution.',
          },
        ]}
      />
    </div>
  );
}

