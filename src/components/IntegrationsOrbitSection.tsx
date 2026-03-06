import React from 'react';
import { motion } from 'motion/react';

interface IntegrationsOrbitSectionProps {
  title?: string;
  subtitle?: string;
}

export const IntegrationsOrbitSection: React.FC<IntegrationsOrbitSectionProps> = ({
  title = 'Seamless setup & limitless integration.',
  subtitle = 'All systems pre‑integrated with CRMs, PSPs, KYC tools, and third‑party platforms so your firm can go live in weeks, not months.',
}) => {
  return (
    <section className="py-24 bg-finovo-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-white mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-slate-300 text-base md:text-lg mb-6 leading-relaxed">
              {subtitle}
            </p>
            <p className="text-slate-400 text-sm md:text-base max-w-xl">
              Plug Finovo into your existing CRMs, payment gateways, KYC providers, and marketing tools so every team
              operates on live trading and client data.
            </p>
          </div>

          <div className="relative h-[380px] md:h-[420px] flex items-center justify-center">
            <div className="absolute w-[360px] h-[360px] border border-white/5 rounded-full animate-spin-slow" />
            <div className="absolute w-[260px] h-[260px] border border-white/10 rounded-full animate-spin-reverse" />

            <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-finovo-green rounded-3xl flex items-center justify-center shadow-2xl shadow-finovo-green/40">
              <div className="flex gap-0.5">
                <div className="w-2 h-8 bg-white -skew-x-12 rounded-sm" />
                <div className="w-2 h-8 bg-white -skew-x-12 rounded-sm opacity-80" />
              </div>
            </div>

            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const radius = i % 2 === 0 ? 180 : 130;
              return (
                <motion.div
                  key={angle}
                  className="absolute w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center shadow-lg border border-white/10"
                  animate={{
                    x: radius * Math.cos((angle * Math.PI) / 180),
                    y: radius * Math.sin((angle * Math.PI) / 180),
                  }}
                  transition={{ duration: 0, repeat: Infinity }}
                >
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-finovo-green/70" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

