import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Users, Globe2, ServerCog, ShieldCheck, BarChart3 } from 'lucide-react';
import { DotsBackground } from '../../components/DotsBackground';

const storyImages = [
  '/assets/images/about-story-1.png',
  '/assets/images/about-story-2.png',
  '/assets/images/about-story-3.png',
];

const stats = [
  { label: '$500M+', sub: 'Monthly volume powered' },
  { label: '40K+', sub: 'Active trader accounts' },
  { label: '80+', sub: 'Broker & prop clients' },
  { label: '5+', sub: 'Years building Finovo' },
];

const values = [
  {
    title: 'Innovation‑driven culture',
    desc: 'We prototype, test and ship – so brokers and prop firms can stay ahead without rebuilding their stack every year.',
  },
  {
    title: 'Real growth opportunities',
    desc: 'We grow together with our clients and our team, investing in skills, tooling and long‑term relationships.',
  },
  {
    title: 'Global collaboration',
    desc: 'Distributed teams across regions, one shared platform – built to support clients wherever they operate.',
  },
  {
    title: 'Team that has your back',
    desc: 'From migration to daily operations, our specialists stay close so you are never solving problems alone.',
  },
];

const timeline = [
  { year: '2020', title: 'Finovo founded', desc: 'A small team of trading‑tech specialists starts building a new brokerage stack.' },
  { year: '2021', title: 'First brokers go live', desc: 'Early clients launch CFD and prop brands on the first Finovo release.' },
  { year: '2023', title: 'Liquidity & CRM expansion', desc: 'Multi‑asset liquidity, Forex CRM and prop CRM join the platform.' },
  { year: '2024', title: 'Prediction & crypto suite', desc: 'Event trading and institutional‑grade crypto liquidity go live.' },
  { year: '2026', title: 'Global partner network', desc: 'Finovo supports clients across multiple regions and regulatory frameworks.' },
];

const leadership = [
  { name: 'Rahul Mehta', role: 'CEO & Co‑founder' },
  { name: 'Ananya Singh', role: 'Chief Product Officer' },
  { name: 'David Keller', role: 'Chief Technology Officer' },
  { name: 'Sara Hussain', role: 'Head of Liquidity & Risk' },
  { name: 'Marko Petrov', role: 'VP, Client Success' },
  { name: 'Isabelle Laurent', role: 'Director, Partnerships' },
];

export default function AboutUs() {
  return (
    <div className="pb-24">
      {/* Hero – The Finovo story */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block pointer-events-none">
          <DotsBackground />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <p className="text-xs font-semibold text-finovo-green mb-3 uppercase tracking-[0.25em]">
              About Finovo
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-finovo-dark leading-tight mb-3">
              The team behind your trading technology.
            </h1>
            <p className="text-finovo-muted text-base md:text-lg mb-6 max-w-xl">
              Finovo is a trading‑technology company focused on brokers and prop firms that want serious, long‑term
              infrastructure – not another quick plugin. We build and operate the stack that keeps your business moving.
            </p>
            <p className="text-finovo-muted text-sm md:text-base mb-8 max-w-xl">
              From liquidity and platforms to CRM and back‑office tools, we combine everything into one orchestrated
              system so your team and your traders can focus on what matters most.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-finovo-green text-white font-semibold text-sm md:text-base shadow-md hover:bg-emerald-600 transition-colors">
                Talk to our team
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm md:text-base font-semibold text-finovo-dark hover:text-finovo-green transition-colors">
                View careers
                <span className="h-px w-8 bg-finovo-green" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="grid grid-cols-3 gap-3 max-w-md">
              {storyImages.map((src) => (
                <div
                  key={src}
                  className="aspect-3/4 rounded-2xl overflow-hidden border border-slate-100 bg-finovo-gray shadow-sm"
                >
                  <img src={src} alt="Finovo team at events" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6 text-center md:text-left">
          {stats.map((stat) => (
            <div key={stat.sub} className="flex-1 min-w-[120px]">
              <div className="text-2xl md:text-3xl font-display font-semibold text-finovo-dark">{stat.label}</div>
              <div className="text-xs md:text-sm text-finovo-muted mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our story */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-4">
            The Finovo story.
          </h2>
          <p className="text-finovo-muted text-sm md:text-base mb-4">
            We started Finovo after years spent inside trading desks, brokerages and liquidity providers. The same
            problem kept showing up: critical systems didn’t talk to each other, and teams had to glue technology
            together on their own.
          </p>
          <p className="text-finovo-muted text-sm md:text-base mb-4">
            Today, we work with brokers and prop firms that want an integrated stack – trading platforms, CRM, client
            zones, liquidity connectivity and risk tools – delivered as one service.
          </p>
          <p className="text-finovo-muted text-sm md:text-base">
            Our mission is simple: **make professional‑grade trading infrastructure accessible without requiring a
            50‑person internal tech team.**
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-finovo-dark mb-10 text-center">
            From first client to global stack.
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute inset-x-0 top-1/2 h-px bg-slate-200" />
            <div className="grid md:grid-cols-5 gap-8 md:gap-4 relative">
              {timeline.map((item) => (
                <div key={item.year} className="flex flex-col items-start md:items-center gap-3">
                  <div className="flex flex-col items-start md:items-center gap-2">
                    <div className="w-8 h-8 rounded-full border border-finovo-green/50 flex items-center justify-center bg-white">
                      <span className="w-2 h-2 rounded-full bg-finovo-green" />
                    </div>
                    <div className="text-xs font-semibold text-finovo-muted uppercase tracking-[0.18em]">
                      {item.year}
                    </div>
                  </div>
                  <div className="mt-1 text-sm font-semibold text-finovo-dark">{item.title}</div>
                  <p className="text-xs text-finovo-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-24 bg-finovo-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-2">
              Meet the management team.
            </h2>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
              The people responsible for keeping your trading technology reliable, compliant and ahead of the market.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl bg-slate-900 border border-white/10 px-4 py-5 text-center flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-1">
                  <Users className="w-7 h-7 text-finovo-green" />
                </div>
                <div className="text-sm font-semibold text-white">{person.name}</div>
                <div className="text-[11px] text-slate-300 uppercase tracking-[0.16em]">{person.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-16 md:py-24 bg-finovo-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-2">
              Our core values.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base max-w-2xl mx-auto">
              The principles that shape how we build products, support clients and grow the Finovo team.
            </p>
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

      {/* Why brokers work with Finovo */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-3">
              Why brokers and prop firms work with us.
            </h2>
            <p className="text-finovo-muted text-sm md:text-base mb-4">
              We combine infrastructure, product and support into one partnership – so you aren&apos;t juggling multiple
              vendors every time the market changes.
            </p>
            <p className="text-finovo-muted text-sm md:text-base mb-6">
              Our clients choose Finovo when they want a stack that can grow with them for years, not months.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-finovo-gray rounded-2xl border border-slate-100 p-5 flex gap-3">
              <div className="w-9 h-9 rounded-xl bg-finovo-green/10 flex items-center justify-center text-finovo-green">
                <ServerCog className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-finovo-dark mb-1">Infrastructure first.</h3>
                <p className="text-xs text-finovo-muted">
                  Hosting, monitoring and upgrades are handled by our team so your traders see uptime – not maintenance
                  pages.
                </p>
              </div>
            </div>
            <div className="bg-finovo-gray rounded-2xl border border-slate-100 p-5 flex gap-3">
              <div className="w-9 h-9 rounded-xl bg-finovo-green/10 flex items-center justify-center text-finovo-green">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-finovo-dark mb-1">Risk & compliance aware.</h3>
                <p className="text-xs text-finovo-muted">
                  We design features with risk teams in mind – from exposure tools to audit trails – so growth never
                  outruns control.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-finovo-gray rounded-2xl border border-slate-100 p-5 flex gap-3">
              <div className="w-9 h-9 rounded-xl bg-finovo-green/10 flex items-center justify-center text-finovo-green">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-finovo-dark mb-1">Global but close.</h3>
                <p className="text-xs text-finovo-muted">
                  Distributed infrastructure and teams mean we can support you across markets, time‑zones and business
                  models.
                </p>
              </div>
            </div>
            <div className="bg-finovo-gray rounded-2xl border border-slate-100 p-5 flex gap-3">
              <div className="w-9 h-9 rounded-xl bg-finovo-green/10 flex items-center justify-center text-finovo-green">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-finovo-dark mb-1">Measured by results.</h3>
                <p className="text-xs text-finovo-muted">
                  We look at uptime, execution metrics, account growth and client satisfaction – the same KPIs your team
                  reports on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join our team CTA */}
      <section className="py-16 md:py-20 bg-finovo-dark">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-3">
            Join the team building the next generation of brokerage tech.
          </h2>
          <p className="text-slate-300 text-sm md:text-base mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for engineers, product thinkers and client‑facing specialists who understand
            markets – and want to build for serious trading businesses.
          </p>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-finovo-dark font-semibold text-sm md:text-base hover:bg-slate-100 transition-colors">
            View open roles
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}

