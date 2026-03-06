import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const galleryImages = [
  '/assets/images/careers-gallery-1.png',
  '/assets/images/careers-gallery-2.png',
  '/assets/images/careers-gallery-3.png',
  '/assets/images/careers-gallery-4.png',
];

const values = [
  {
    title: 'Innovation‑driven culture',
    desc: 'Be part of a team where new ideas are tested, not just discussed. Whether you improve a feature or a workflow, your input matters.',
  },
  {
    title: 'Real growth opportunities',
    desc: 'From junior roles to leadership tracks, we design paths so you can grow your skills, your impact and your career.',
  },
  {
    title: 'Global collaboration',
    desc: 'Work with colleagues and clients across regions, with flexible, remote‑friendly collaboration built into how we operate.',
  },
  {
    title: 'Team that has your back',
    desc: 'You’ll work with people who share context, give clear feedback and step in when it matters most.',
  },
];

const roles = [
  { location: 'Cyprus', title: 'Sales Manager – Cyprus', dept: 'Sales · Full‑time · Senior' },
  { location: 'Dubai', title: 'Sales Manager – GCC Region', dept: 'Sales · Full‑time · Intermediate' },
  { location: 'London (HQ)', title: 'Controller', dept: 'Finance · Full‑time' },
  { location: 'Ukraine', title: 'Senior JS Developer – Ukraine', dept: 'R&D · Full‑time · Senior' },
  { location: 'Vietnam', title: 'Sales Manager – Vietnam', dept: 'Sales · Full‑time' },
];

const productImage = '/assets/images/careers-product.png';
const videoImage = '/assets/images/careers-video.png';

export default function Careers() {
  return (
    <div className="pb-24">
      {/* Hero – Our solutions, your impact */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-finovo-dark mb-3">
              Our solutions, your impact.
              <br />
              Together, we create products that matter to millions.
            </h1>
            <p className="text-finovo-muted text-sm md:text-base mb-6 max-w-xl">
              Finovo delivers the core infrastructure for financial firms around the globe. Join us and help build the
              trading technology that powers brokers, prop firms and their traders.
            </p>
            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white text-sm md:text-base font-semibold hover:bg-emerald-600 transition-colors">
              View open positions
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl rounded-3xl border border-slate-200 bg-white shadow-xl p-4">
              <img
                src={productImage}
                alt="Finovo trading platform on multiple devices"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Redefine where and how you work */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-finovo-dark mb-2">
            Redefine where, and how you work.
          </h2>
          <p className="text-finovo-muted text-sm md:text-base mb-6">
            Join a global company where your growth is fuelled by autonomy, collaboration and clear purpose.
          </p>
          <button className="mb-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-finovo-green text-white text-sm font-semibold hover:bg-emerald-600 transition-colors">
            Discover open positions
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {galleryImages.map((src) => (
              <div
                key={src}
                className="aspect-3/4 rounded-2xl overflow-hidden border border-slate-100 bg-finovo-gray shadow-sm"
              >
                <img src={src} alt="Finovo team at events" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
          <p className="text-finovo-muted text-xs md:text-sm mb-3">
            Stay inspired – follow us on social media to see how we work, grow and win together.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold">
            {['LinkedIn', 'Facebook', 'X', 'YouTube'].map((label) => (
              <button
                key={label}
                type="button"
                className="px-4 py-1.5 rounded-full border border-slate-200 text-finovo-dark hover:border-finovo-green/60 transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why you’ll love working here */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-finovo-dark mb-2">
              Why you’ll love working here.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col gap-2"
              >
                <h3 className="text-sm md:text-base font-semibold text-finovo-dark">{value.title}</h3>
                <p className="text-xs md:text-sm text-finovo-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work with us – roles table */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-finovo-dark mb-2">
              Work with us.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base">
              Join a team where your ideas matter, your ownership counts and your growth is supported at every step.
            </p>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {roles.map((role) => (
              <button
                key={role.title}
                type="button"
                className="w-full text-left py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4 hover:bg-finovo-gray/40 transition-colors"
              >
                <span className="text-sm font-semibold text-finovo-dark">{role.location}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-finovo-dark">{role.title}</p>
                  <p className="text-[11px] text-finovo-muted uppercase tracking-[0.16em]">{role.dept}</p>
                </div>
                <span className="text-xs font-semibold text-finovo-green inline-flex items-center gap-1">
                  View role <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Can’t find perfect role */}
      <section className="py-12 md:py-16 bg-finovo-dark">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-2">
            Can’t find the perfect role? Let’s keep in touch.
          </h2>
          <p className="text-slate-300 text-sm md:text-base mb-6">
            We’re always on the lookout for exceptional talent. Send us your resume, and if there’s a fit, we’ll reach
            out.
          </p>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-finovo-dark text-sm md:text-base font-semibold hover:bg-slate-100 transition-colors">
            Send your CV today
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Learn more about our product */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-finovo-dark mb-2">
            Learn more about our product.
          </h2>
          <p className="text-finovo-muted text-sm md:text-base mb-8">
            Our tech drives trading, growth and automation for serious financial firms. Smart tools. Real impact.
          </p>
          <div className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden border border-slate-200 bg-black shadow-xl">
            <img
              src={videoImage}
              alt="Finovo product video preview"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <button
              type="button"
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Play product video"
            >
              <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <span className="ml-1 border-l-14 border-l-finovo-green border-y-[9px] border-y-transparent" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

