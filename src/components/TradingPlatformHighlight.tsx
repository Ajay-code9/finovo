import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TradingPlatformHighlightProps {
  eyebrow: string;
  title: string;
  description: string;
  secondaryDescription: string;
  bullets: string[];
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  primaryImageSrc: string;
  primaryImageAlt: string;
  secondaryImageSrc: string;
  secondaryImageAlt: string;
}

export const TradingPlatformHighlight: React.FC<TradingPlatformHighlightProps> = ({
  eyebrow,
  title,
  description,
  secondaryDescription,
  bullets,
  primaryCtaLabel = 'Chat with an expert',
  secondaryCtaLabel = 'Book a live demo',
  primaryImageSrc,
  primaryImageAlt,
  secondaryImageSrc,
  secondaryImageAlt,
}) => {
  return (
    <section className="py-16 md:py-24 bg-finovo-dark">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6"
        >
          <p className="text-sm font-semibold text-finovo-green mb-3 uppercase tracking-[0.2em]">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white mb-4">
            {title}
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-4">
            {description}
          </p>
          <p className="text-white/60 text-sm md:text-base mb-8 max-w-xl">
            {secondaryDescription}
          </p>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 mb-8">
            {bullets.map((label) => (
              <div
                key={label}
                className="px-4 py-2 rounded-full border border-white/15 text-xs md:text-sm text-white/90 bg-white/5"
              >
                {label}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base hover:bg-emerald-500 transition-colors cursor-pointer"
            >
              {primaryCtaLabel} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-finovo-dark font-semibold text-sm md:text-base hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {secondaryCtaLabel}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="lg:col-span-6 flex justify-end"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -top-8 -right-6 w-32 h-32 rounded-3xl bg-finovo-green/10 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative flex gap-4 justify-end">
              <div className="w-40 sm:w-48 rounded-2xl bg-black border border-white/10 shadow-xl overflow-hidden translate-y-4">
                <img
                  src={primaryImageSrc}
                  alt={primaryImageAlt}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-44 sm:w-56 rounded-2xl bg-black border border-white/10 shadow-xl overflow-hidden">
                <img
                  src={secondaryImageSrc}
                  alt={secondaryImageAlt}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

