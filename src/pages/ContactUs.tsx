import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="pb-24">
      {/* Sales contact hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
          {/* Left copy */}
          <div className="lg:col-span-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-finovo-dark mb-4">
              Talk with our sales team to see how we can fit your needs.
            </h1>
            <p className="text-finovo-muted text-sm md:text-base mb-6 max-w-xl">
              Share a few details about your brokerage or prop firm and we&apos;ll connect you with the right Finovo
              specialist – product, integrations or partnerships.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-finovo-dark mb-10">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                <span>Get expert product guidance for your model.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                <span>Discuss integration and migration options.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-finovo-green" />
                <span>Explore partnership and white‑label programmes.</span>
              </li>
            </ul>

            <div className="space-y-4">
              <p className="text-xs font-semibold text-finovo-muted uppercase tracking-[0.22em]">
                Multi‑award winning technology provider
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
                  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
                  'https://images.pexels.com/photos/6084227/pexels-photo-6084227.jpeg',
                ].map((src, idx) => (
                  <div
                    key={src}
                    className="w-24 md:w-28 h-24 md:h-28 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center overflow-hidden"
                  >
                    <img src={src} alt={`Finovo award ${idx + 1}`} className="w-full h-full object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right form card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-finovo-dark text-white p-6 md:p-8 lg:p-9 shadow-xl">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">
                Tell us about your business.
              </h2>
              <p className="text-slate-300 text-xs md:text-sm mb-6">
                Our team typically responds within one business day.
              </p>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                      First name<span className="text-red-400"> *</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm focus:outline-none focus:border-finovo-green"
                      placeholder="Alex"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                      Last name<span className="text-red-400"> *</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm focus:outline-none focus:border-finovo-green"
                      placeholder="Rivera"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Email<span className="text-red-400"> *</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm focus:outline-none focus:border-finovo-green"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Phone number
                  </label>
                  <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-3">
                    <select className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs md:text-sm focus:outline-none focus:border-finovo-green">
                      <option>India (+91)</option>
                      <option>UK (+44)</option>
                      <option>EU (+32)</option>
                      <option>US (+1)</option>
                    </select>
                    <input
                      type="tel"
                      className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm focus:outline-none focus:border-finovo-green"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Select a solution
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs md:text-sm focus:outline-none focus:border-finovo-green">
                    <option>CFD brokerage turnkey</option>
                    <option>Prop trading technology</option>
                    <option>Forex CRM</option>
                    <option>Prop CRM</option>
                    <option>Prime liquidity</option>
                    <option>Prediction markets</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex items-start gap-2 text-[11px] text-slate-300">
                  <input type="checkbox" className="mt-0.5 rounded border-slate-600 bg-slate-900" />
                  <span>I agree to receive other communications from Finovo.</span>
                </div>

                <button className="mt-2 w-full py-3.5 rounded-xl bg-finovo-green text-white text-sm md:text-base font-semibold hover:bg-emerald-600 transition-colors inline-flex items-center justify-center gap-2">
                  Contact sales
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-6 flex gap-3 text-xs text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" /> hello@finovo.tech
                </span>
                <span className="inline-flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" /> +44 0000 000 000
                </span>
                <span className="inline-flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5" /> Live chat inside the platform
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices around the world */}
      <section className="py-16 md:py-24 bg-finovo-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px w-full bg-linear-to-r from-finovo-green/0 via-finovo-green/60 to-finovo-green/0 mb-8" />
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-2">
              Our offices around the world.
            </h2>
            <p className="text-slate-300 text-xs md:text-sm">
              Distributed teams so we can support clients wherever they operate.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900 shadow-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg"
              alt="Map of Finovo offices around the world"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
