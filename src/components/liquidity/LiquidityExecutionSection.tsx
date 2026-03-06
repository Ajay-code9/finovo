import React from 'react';
import { BarChart3 } from 'lucide-react';

interface ExecutionCard {
  title: string;
  desc: string;
}

interface LiquidityExecutionSectionProps {
  title: string;
  cards: ExecutionCard[];
  showIcon?: boolean;
}

export const LiquidityExecutionSection: React.FC<LiquidityExecutionSectionProps> = ({
  title,
  cards,
  showIcon = false,
}) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-finovo-dark mb-6">{title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl border border-slate-200 px-6 py-6 flex flex-col gap-3"
            >
              {showIcon && (
                <div className="w-9 h-9 rounded-xl bg-finovo-green/5 flex items-center justify-center text-finovo-green">
                  <BarChart3 className="w-4 h-4" />
                </div>
              )}
              <h3 className="text-sm md:text-base font-semibold text-finovo-dark">{card.title}</h3>
              <p className="text-xs md:text-sm text-finovo-muted">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

