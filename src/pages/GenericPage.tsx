import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Zap, ShieldCheck, Globe } from 'lucide-react';
import { DotsBackground } from '../components/DotsBackground';

interface GenericPageProps {
  title: string;
  description: string;
  features?: string[];
  imageSeed?: string;
}

export const GenericPage: React.FC<GenericPageProps> = ({ title, description, features, imageSeed }) => {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-finovo-dark overflow-hidden">
        <DotsBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-semibold text-white mb-6">
              {title.split(' ').map((word, i) =>
                i === title.split(' ').length - 1 ? (
                  <span key={i} className="text-finovo-green">
                    {word}
                  </span>
                ) : (
                  word + ' '
                ),
              )}
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
              {description}
            </p>
            <p className="text-slate-500 text-sm md:text-base max-w-3xl mx-auto">
              Finovo combines trading platforms, CRM, liquidity connectivity and analytics into one orchestrated stack, so your team can move faster with less operational drag.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-6">
                Advanced solutions for your business
              </h2>
              <p className="text-finovo-muted text-lg mb-8 leading-relaxed">
                Our infrastructure is engineered for high-volume brokers and prop firms. Low latency execution, transparent reporting and robust risk tooling keep every part of your operation aligned.
              </p>
              
              {features && (
                <div className="grid sm:grid-cols-2 gap-5">
                  {features.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-7 h-7 bg-finovo-green/10 rounded-full flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-finovo-green" />
                      </div>
                      <span className="text-finovo-dark font-medium">{f}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-finovo-gray p-8 rounded-[3rem] border border-slate-100 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-tr from-finovo-green/10 via-transparent to-emerald-500/10 pointer-events-none" />
                <img 
                  src={`https://picsum.photos/seed/${imageSeed || 'tech'}/800/600`} 
                  alt={title} 
                  className="rounded-2xl w-full shadow-lg relative z-10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-4xl font-display font-semibold text-finovo-dark mb-4">
                Performance that scales with your ambition
              </h3>
              <p className="text-finovo-muted text-base md:text-lg leading-relaxed">
                Whether you manage a boutique desk or a global brokerage, Finovo is built to keep latency low, uptime high and operational overhead under control.
              </p>
            </div>
            <div className="flex gap-6">
              <div className="px-5 py-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-xs font-black text-finovo-muted uppercase tracking-[0.2em] mb-1">
                  Average uptime
                </div>
                <div className="text-3xl font-black text-finovo-dark">99.98%</div>
              </div>
              <div className="px-5 py-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-xs font-black text-finovo-muted uppercase tracking-[0.2em] mb-1">
                  Markets supported
                </div>
                <div className="text-3xl font-black text-finovo-dark">120+</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Low-latency execution',
                desc: 'Optimised routing and infrastructure to keep fill speeds competitive in volatile markets.',
              },
              {
                icon: ShieldCheck,
                title: 'Risk-first architecture',
                desc: 'Real-time exposure monitoring, alerts and controls baked into the stack.',
              },
              {
                icon: Globe,
                title: 'Global-ready stack',
                desc: 'Multi-region hosting, localisation options and integrations with leading liquidity venues.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 bg-finovo-green/10 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-finovo-green" />
                </div>
                <h4 className="text-xl font-semibold text-finovo-dark mb-3">{item.title}</h4>
                <p className="text-finovo-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-finovo-dark rounded-[3rem] p-12 md:p-18 text-center relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute -top-24 left-1/4 w-72 h-72 rounded-full bg-finovo-green/30 blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-semibold text-white mb-6">
                Ready to see it in action?
              </h2>
              <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">
                Share a few details about your business and our team will prepare a walkthrough tailored to your trading model.
              </p>
              <button className="px-10 py-4 bg-finovo-green text-white rounded-full font-bold hover:opacity-90 transition-all flex items-center gap-2 mx-auto">
                Talk to an expert <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
