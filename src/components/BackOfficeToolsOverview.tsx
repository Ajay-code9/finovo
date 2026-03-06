import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Bullet {
  title: string;
  desc: string;
}

interface BackOfficeToolsOverviewProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  bullets?: Bullet[];
}

const defaultBullets: Bullet[] = [
  {
    title: 'Cutting‑edge CRM',
    desc: 'Retain and convert traders with journeys, segmentation, and task automation.',
  },
  {
    title: 'Broker Portal',
    desc: 'No‑code backend for plan configuration, evaluations, and payouts.',
  },
  {
    title: 'SiRIX Broker',
    desc: 'Front‑end client portal for brokers to monitor challenges and rewards.',
  },
  {
    title: 'Multi‑level Affiliates',
    desc: 'Optimize acquisition with automated rewards and clear reporting.',
  },
];

export const BackOfficeToolsOverview: React.FC<BackOfficeToolsOverviewProps> = ({
  eyebrow = 'Back office tools',
  title = 'Build, scale, and operate seamlessly.',
  subtitle = 'Power your traders and teams with connected back‑office workflows.',
  bullets = defaultBullets,
}) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <p className="text-xs font-semibold text-finovo-green mb-2 uppercase tracking-[0.25em]">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-3">
            {title}
          </h2>
          <p className="text-finovo-muted text-base md:text-lg mb-6 max-w-xl">{subtitle}</p>
          <ul className="space-y-3 text-sm md:text-base text-finovo-muted mb-6">
            {bullets.map((b) => (
              <li key={b.title} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                <span>
                  <span className="font-semibold text-finovo-dark">{b.title}</span>
                  <span>{' \u2013 '}{b.desc}</span>
                </span>
              </li>
            ))}
          </ul>
          <button className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-finovo-green hover:underline">
            Learn more <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md aspect-4/3 rounded-2xl bg-finovo-gray border border-slate-200 relative flex items-center justify-center">
            <div className="absolute w-20 h-20 rounded-full bg-finovo-green/10 border border-finovo-green/40" />
            <div className="absolute -top-6 left-10 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-finovo-dark">
              Cutting‑edge CRM
            </div>
            <div className="absolute top-10 -right-4 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-finovo-dark">
              Broker portal
            </div>
            <div className="absolute -bottom-5 left-6 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-finovo-dark">
              SiRIX broker
            </div>
            <div className="absolute bottom-4 right-10 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-finovo-dark">
              Affiliates &amp; IBs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

