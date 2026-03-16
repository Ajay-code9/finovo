import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Users, LayoutDashboard, ShieldCheck, BarChart3 } from 'lucide-react';
import { DotsBackground } from '../../components/DotsBackground';
import { PropFaqSection } from '../../components/PropFaqSection';
import { BackOfficeToolsOverview } from '../../components/BackOfficeToolsOverview';
import { IntegrationsOrbitSection } from '../../components/IntegrationsOrbitSection';

const crmHighlights = [
  {
    title: 'Prop‑specific CRM workflows',
    desc: 'From challenge buyers to funded traders, every stage of your funnel lives inside one workspace.',
  },
  {
    title: 'Single view of every trader',
    desc: 'Trading activity, tickets, payouts and communications – connected to one clean profile.',
  },
  {
    title: 'Operations that scale with volume',
    desc: 'Automate approvals, account changes and reminders so your team can focus on edge cases, not admin.',
  },
];

const faqItems = [
  {
    id: 'challenges',
    question: 'Can I create and manage my own trading challenges?',
    answer:
      'Yes. You can design, launch and update challenges directly from the Broker Portal – including rules, retry pricing, phases, account sizes and payout logic.',
  },
  {
    id: 'suitable-firms',
    question: 'Are the prop solutions suitable for both new and established prop firms?',
    answer:
      'Finovo is used by teams launching their first prop brand and by firms migrating from legacy setups. We adjust onboarding, risk and reporting to where you are today.',
  },
  {
    id: 'branding',
    question: 'Can I brand the platform as my own?',
    answer:
      'Absolutely. Domains, colours, logos, emails and client‑facing portals are fully white‑labelled so traders see your brand – not ours.',
  },
  {
    id: 'payouts',
    question: 'Is there a built‑in payout or revenue‑sharing system?',
    answer:
      'Yes. Our CRM connects to your payout methods and partner plans so you can automate trader payouts, affiliate revenue‑shares and internal commissions based on your rules.',
  },
  {
    id: 'timelines',
    question: 'How long does it take to launch my prop firm with Finovo CRM?',
    answer:
      'Most firms launch their first programmes in weeks, not months – depending on compliance checks and the complexity of your rules and integrations.',
  },
];

export default function PropCRM() {
  return (
    <div className="pb-24">
      {/* Hero – Prop CRM */}
      <section className="relative pt-6 md:pt-10 pb-16 md:pb-20 bg-white overflow-hidden">
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
            <p className="text-xs font-semibold text-finovo-green mb-3 uppercase tracking-[0.25em]">Prop CRM</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-finovo-dark leading-tight mb-3">
              Manage traders, not spreadsheets.
            </h1>
            <p className="text-2xl md:text-3xl font-display text-finovo-dark mb-2">
              One prop CRM platform. Total control.
            </p>
            <p className="text-finovo-muted text-base md:text-lg mb-8 max-w-xl">
              Focus on what truly drives profits – your traders and programmes. Finovo connects challenges, accounts,
              payouts and risk into one CRM built for prop firms.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base shadow-md hover:bg-emerald-600 transition-colors">
                Talk to our CRM experts
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
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute -top-10 -left-12 w-40 h-40 rounded-full bg-finovo-green/10 blur-3xl" />
              <div className="absolute -bottom-16 -right-10 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="relative w-full">
                <img
                  src="/assets/images/propmob1.png"
                  alt="Prop CRM trader profile view"
                  className="w-full h-auto object-contain drop-shadow-[0_18px_45px_rgba(15,23,42,0.35)]"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why a dedicated CRM for prop firms */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark">
              One CRM for traders, challenges and payouts.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base">
              Keep your prop business on track with a workspace designed around trading programmes – not generic sales
              pipelines.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-finovo-dark">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                <span>Track every trader from first challenge purchase to funded account.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                <span>Surface risk, support tickets and payouts in one view.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                <span>Give operations, sales and compliance a shared source of truth.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
            {crmHighlights.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 flex flex-col gap-2"
              >
                <h3 className="text-sm font-semibold text-finovo-dark">{item.title}</h3>
                <p className="text-xs md:text-sm text-finovo-muted">{item.desc}</p>
                <div className="mt-3 h-px w-full bg-linear-to-r from-transparent via-finovo-green/50 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back office tools overview reused for CRM focus */}
      <BackOfficeToolsOverview
        eyebrow="Prop back office"
        title="Tools that keep every challenge and account under control."
        subtitle="From evaluations to funded accounts, keep risk, payouts and support aligned inside one CRM‑connected back office."
      />

      {/* Integrations */}
      <IntegrationsOrbitSection
        title="Connect the tools you already use."
        subtitle="CRMs, payment providers, KYC, email and messaging tools – Finovo acts as the hub so data flows cleanly between systems."
      />

      {/* FAQ – customised for Prop CRM */}
      <PropFaqSection
        title="Got questions? We’ve got answers."
        subtitle="Ask us anything. We’ll help turn your prop firm idea into reality."
        ctaLabel="Get started"
        faqs={faqItems}
      />
    </div>
  );
}

