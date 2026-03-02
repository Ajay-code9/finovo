import React from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Database, ShieldCheck, ArrowRight } from 'lucide-react';
import { DotsBackground } from '../../components/DotsBackground';

export default function PropTrading() {
  const features = [
    "Automated Evaluations",
    "Customizable Risk Parameters",
    "Multi-Asset Trading Platforms",
    "Integrated CRM & Back Office",
    "Real-Time Performance Tracking",
    "Scalable Infrastructure"
  ];

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-finovo-dark overflow-hidden">
        <DotsBackground />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-semibold text-white mb-8 leading-tight">
                Next-Gen <span className="text-finovo-green">Prop Trading</span> Infrastructure
              </h1>
              <p className="text-slate-400 text-xl mb-12 leading-relaxed">
                Launch your own prop firm with the most advanced technology on the market. We provide the tools to evaluate, manage, and scale your trading community.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="px-10 py-5 bg-finovo-green text-white rounded-full font-bold hover:opacity-90 transition-all shadow-2xl shadow-finovo-green/20">
                  Launch Your Firm
                </button>
                <button className="px-10 py-5 border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all">
                  View Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-finovo-gray p-8 rounded-[3rem] border border-slate-100 shadow-xl">
                <img 
                  src="https://picsum.photos/seed/proptrading/800/600" 
                  alt="Prop Trading Dashboard" 
                  className="rounded-2xl w-full shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Stat */}
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-50 max-w-[200px]">
                <div className="text-3xl font-black text-finovo-green mb-1">10k+</div>
                <div className="text-xs font-bold text-finovo-muted uppercase tracking-widest leading-tight">Traders Evaluated Daily</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-8">
                Built for Scale and Precision
              </h2>
              <p className="text-finovo-muted text-lg mb-10 leading-relaxed">
                Our prop trading solution is designed to handle thousands of traders simultaneously. With automated evaluation rules and real-time risk monitoring, you can focus on finding the best talent while we handle the tech.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-finovo-green/10 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-finovo-green" />
                    </div>
                    <span className="text-finovo-dark font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-6">Why Choose Finovo?</h2>
            <p className="text-finovo-muted text-lg max-w-2xl mx-auto">We provide the most robust and reliable technology for prop firms globally.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Automated Rules", desc: "Set your evaluation criteria and let our system handle the rest.", icon: Zap },
              { title: "Deep Analytics", desc: "Gain insights into trader performance and risk profile.", icon: Database },
              { title: "Secure Infrastructure", desc: "Your data and your traders' data are protected with enterprise-grade security.", icon: ShieldCheck }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-finovo-green/10 rounded-2xl flex items-center justify-center mb-8">
                  <item.icon className="w-7 h-7 text-finovo-green" />
                </div>
                <h3 className="text-2xl font-bold text-finovo-dark mb-4">{item.title}</h3>
                <p className="text-finovo-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-finovo-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-semibold text-white mb-8">Ready to Launch Your Prop Firm?</h2>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">Contact our specialists today for a personalized demo and consultation.</p>
              <button className="px-10 py-5 bg-finovo-green text-white rounded-full font-bold hover:opacity-90 transition-all flex items-center gap-2 mx-auto">
                Talk to an Expert <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
