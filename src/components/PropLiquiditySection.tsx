import React from 'react';

interface PropLiquiditySectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

const defaultInstruments = [
  'Cryptocurrencies',
  'CFDs on FX',
  'Equities',
  'Synthetic Instruments',
  'Indices',
  'Futures',
  'Commodities',
  'ETFs',
];

const defaultBullets = [
  'Deliver low‑latency execution and precise pricing across asset classes.',
  'Real‑time execution on thousands of instruments across FX, crypto, indices, and more.',
  'Smart order routing with FIX connectivity and risk controls baked in.',
  'Built‑in dashboards to monitor exposure, performance, and P&L.',
];

export const PropLiquiditySection: React.FC<PropLiquiditySectionProps> = ({
  eyebrow = 'Prop Liquidity',
  title = 'Deep Market Access with Prop Liquidity.',
  subtitle = 'Power your traders with precision pricing and reliable execution.',
}) => {
  return (
    <section className="py-16 md:py-24 bg-finovo-gray">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <img
              src="/assets/images/tradingicons.png"
              alt="Grid of supported trading instruments"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs font-semibold text-finovo-green mb-2 uppercase tracking-[0.25em]">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-3">
            {title}
          </h2>
          <p className="text-finovo-muted text-base md:text-lg mb-6">{subtitle}</p>
          <ul className="space-y-2 text-sm md:text-base text-finovo-muted mb-6">
            {defaultBullets.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-finovo-green hover:underline">
            Discover liquidity options <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

