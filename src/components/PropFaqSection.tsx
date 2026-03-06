import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface PropFaqSectionProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    id: 'challenges',
    question: 'Can I design my own challenges?',
    answer:
      'Yes – you have full control over parameters, retry pricing, phases, and payouts so the programme fits your brand.',
  },
  {
    id: 'whitelabel',
    question: 'Can I white‑label the platform?',
    answer:
      'Finovo is built to be fully white‑labelled, from the client portal to emails, domains, and trading front‑ends.',
  },
  {
    id: 'beginners',
    question: 'Is Finovo suited for beginners?',
    answer:
      'We work with new and established prop firms. Our team helps you shape programmes, risk limits, and workflows.',
  },
  {
    id: 'launch-time',
    question: 'How long does it take to launch?',
    answer:
      'Most firms launch in a matter of weeks once compliance and integrations are confirmed – not months.',
  },
  {
    id: 'payouts',
    question: 'Is there an automated payout system?',
    answer:
      'Yes – evaluations, payouts, and account upgrades can all be automated based on your rules and thresholds.',
  },
];

export const PropFaqSection: React.FC<PropFaqSectionProps> = ({
  title = "Got Questions? We've Got Answers.",
  subtitle = "Ask us anything. We'll help turn your prop firm idea into reality.",
  ctaLabel = 'Get started',
  faqs = defaultFaqs,
}) => {
  const [openId, setOpenId] = useState<string>(faqs[0]?.id ?? '');

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-4">
            {title}
          </h2>
          <p className="text-finovo-muted text-base md:text-lg mb-8 max-w-md">{subtitle}</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base hover:bg-emerald-600 hover:shadow-md active:scale-[0.98] transition-all">
            {ctaLabel} <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = faq.id === openId;
            return (
              <button
                key={faq.id}
                type="button"
                onClick={() => setOpenId(isOpen ? '' : faq.id)}
                className="w-full text-left"
              >
                <div
                  className={`w-full rounded-2xl border px-4 md:px-5 py-4 md:py-5 transition-all ${
                    isOpen
                      ? 'bg-finovo-dark text-white border-finovo-dark shadow-md'
                      : 'bg-white text-finovo-dark border-slate-200 hover:border-finovo-green/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm md:text-base font-semibold">{faq.question}</span>
                    <span
                      className={`text-xs font-bold tracking-widest ${
                        isOpen ? 'text-finovo-green' : 'text-finovo-muted'
                      }`}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                  {isOpen && (
                    <p className="mt-3 text-xs md:text-sm text-slate-200 md:text-slate-300">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

