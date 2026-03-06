import React from 'react';

interface TechCard {
  title: string;
  desc: string;
}

interface LiquidityTechGridSectionProps {
  heading: string;
  subtitle: string;
  cards: TechCard[];
}

export const LiquidityTechGridSection: React.FC<LiquidityTechGridSectionProps> = ({
  heading,
  subtitle,
  cards,
}) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-finovo-dark">{heading}</h2>
          <p className="text-sm md:text-base text-finovo-muted max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {cards.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-slate-200 px-5 py-6 flex flex-col gap-2"
            >
              <div className="w-9 h-9 rounded-xl bg-finovo-green/5 flex items-center justify-center text-finovo-green">
                <PlayIcon />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-finovo-dark">{item.title}</h3>
              <p className="text-xs md:text-sm text-finovo-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function PlayIcon() {
  return (
    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-finovo-green/10 text-finovo-green">
      <span className="ml-px border-l-[6px] border-l-finovo-green border-y-4 border-y-transparent" />
    </span>
  );
}

