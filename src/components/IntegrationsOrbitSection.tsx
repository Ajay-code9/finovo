import React from 'react';

interface IntegrationsOrbitSectionProps {
  title?: string;
  subtitle?: string;
}

export const IntegrationsOrbitSection: React.FC<IntegrationsOrbitSectionProps> = ({
  title = 'Seamless setup & limitless integration.',
  subtitle = 'All systems pre‑integrated with CRMs, PSPs, KYC tools, and third‑party platforms so your firm can go live in weeks, not months.',
}) => {
  return (
    <section className="py-20 md:py-24 bg-finovo-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-3 leading-tight">
              {title}
            </h2>
            <p className="text-slate-300 text-sm md:text-base mb-4 leading-relaxed">
              {subtitle}
            </p>
            <p className="text-slate-400 text-sm md:text-base max-w-xl">
              Plug Finovo into your existing CRMs, payment gateways, KYC providers, and marketing tools so every team
              operates on live trading and client data.
            </p>
          </div>

          <div className="relative h-[340px] md:h-[380px] flex items-center justify-center">
            <div className="absolute w-[360px] h-[360px] border border-white/5 rounded-full animate-spin-slow" />
            <div className="absolute w-[260px] h-[260px] border border-white/10 rounded-full animate-spin-reverse" />

            <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-finovo-green rounded-2xl flex items-center justify-center shadow-xl shadow-finovo-green/40">
              <div className="flex gap-0.5">
                <div className="w-2 h-8 bg-white -skew-x-12 rounded-sm" />
                <div className="w-2 h-8 bg-white -skew-x-12 rounded-sm opacity-80" />
              </div>
            </div>

            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const radius = i % 2 === 0 ? 180 : 130;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);
              return (
                <div
                  key={angle}
                  className="absolute w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center shadow-md border border-white/10"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-finovo-green/70" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

