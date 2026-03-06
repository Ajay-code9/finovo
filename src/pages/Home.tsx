import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight,
  Zap,
  Check,
  Globe,
  LayoutDashboard,
  Database,
  ShieldCheck,
  ArrowUpRight,
  Plus
} from 'lucide-react';
import PricingSection from '../components/PricingSection';

// --- Components ---

const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];
    const particleCount = 80;
    const connectionDistance = 180;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 1.5 + 0.5;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 149, 0.3)';
        ctx.fill();
      }
    }

    const init = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(0, 255, 149, ${opacity * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

const DataStreamBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let streams: any[] = [];
    const streamCount = 20;

    class Stream {
      x: number;
      y: number;
      speed: number;
      length: number;
      opacity: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.speed = Math.random() * 2 + 1;
        this.length = Math.random() * 100 + 50;
        this.opacity = Math.random() * 0.1 + 0.05;
      }

      update(width: number, height: number) {
        this.y += this.speed;
        if (this.y > height) {
          this.y = -this.length;
          this.x = Math.random() * width;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createLinearGradient(0, this.y, 0, this.y + this.length);
        gradient.addColorStop(0, `rgba(0, 255, 149, 0)`);
        gradient.addColorStop(1, `rgba(0, 255, 149, ${this.opacity})`);
        
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    const init = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      streams = [];
      for (let i = 0; i < streamCount; i++) {
        streams.push(new Stream(width, height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      streams.forEach(s => {
        s.update(canvas.width, canvas.height);
        s.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => init();
    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

const SolutionSelector = () => {
  const [activeTab, setActiveTab] = useState('all-in-one');

  const tabs = [
    { id: 'all-in-one', label: 'Turnkey Hub' },
    { id: 'mt4-mt5', label: 'MT4/MT5 Ecosystem' },
    { id: 'platform', label: 'Trading Interface' },
    { id: 'liquidity', label: 'Global Liquidity' }
  ];

  const solutions = [
    {
      id: 'all-in-one',
      title: 'Comprehensive Turnkey Hub',
      desc: 'A full-service ecosystem designed for CFD brokerages and prop firms.',
      details: 'Start your brokerage or prop trading venture with a complete suite: platform, liquidity, CRM, and risk management. One partner, total simplicity.',
      icon: LayoutDashboard,
      btnLabel: 'Explore Turnkey'
    },
    {
      id: 'mt4-mt5',
      title: 'MT4/MT5 Managed Ecosystem',
      desc: 'Elevate Your MT4/5 Brokerage Operations.',
      details: 'A managed service environment for MT4/5 – engineered for rapid deployment and confident scaling. Use your existing license; we provide the tech and operations.',
      icon: Database,
      btnLabel: 'Explore MT4/MT5'
    },
    {
      id: 'platform',
      title: 'Next-Gen Trading Interface',
      desc: 'A premium white-label platform – keep your traders active while building your brand equity.',
      details: 'Sophisticated charting, social trading, and mobile apps. Fully customizable to ensure your brand is always the focus.',
      icon: Zap,
      btnLabel: 'Explore Platform'
    },
    {
      id: 'liquidity',
      title: 'Global Liquidity Access',
      desc: 'Bridge your pricing to global markets through our advanced tech.',
      details: 'Your rates, our infrastructure. Institutional-grade liquidity that sharpens your competitive advantage.',
      icon: Globe,
      btnLabel: 'Explore Liquidity'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Film Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.02] mix-blend-multiply">
        <div 
          className="absolute inset-[-200%] bg-repeat animate-grain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-6xl lg:text-7xl font-display font-semibold text-finovo-dark mb-6 drop-shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
          Brokerage technology, <span className="text-finovo-green">tailored for you.</span>
        </h2>
        <p className="text-finovo-green font-normal text-base md:text-xl mb-6">The complete toolkit to start, expand, and dominate the market from a single hub.</p>

        <div className="inline-flex bg-slate-100/80 p-2 rounded-2xl mb-8 md:mb-10 overflow-x-auto max-w-full no-scrollbar scroll-smooth border border-slate-200/60 shadow-sm">
          <div className="flex whitespace-nowrap gap-2 min-w-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 md:px-8 md:py-3.5 rounded-xl text-sm md:text-base font-semibold transition-all duration-200 shrink-0 cursor-pointer ${activeTab === tab.id ? 'bg-finovo-dark text-white shadow-md border border-finovo-dark' : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-sm hover:text-finovo-dark active:scale-[0.98]'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: single card for selected tab — no long scroll */}
        <div className="md:hidden">
          {solutions
            .filter((sol) => sol.id === activeTab)
            .map((sol) => (
              <div
                key={sol.id}
                className="p-6 rounded-2xl border border-finovo-dark bg-finovo-dark text-white text-left shadow-xl"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-white/10">
                  <sol.icon className="w-5 h-5 text-finovo-green" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{sol.title}</h4>
                <p className="text-sm font-semibold text-white/95 mb-3">{sol.desc}</p>
                <p className="text-sm leading-relaxed text-slate-300 mb-6">{sol.details}</p>
                <button
                  type="button"
                  className="block w-full py-3 rounded-xl text-center text-sm font-semibold bg-white text-finovo-dark border-2 border-white hover:bg-slate-100 hover:shadow-md active:scale-[0.98] transition-all cursor-pointer"
                >
                  {sol.btnLabel}
                </button>
              </div>
            ))}
        </div>

        {/* Desktop: all four cards in grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol) => (
            <div 
              key={sol.id}
              className={`p-8 rounded-2xl border transition-all duration-500 text-left flex flex-col h-full ${activeTab === sol.id ? 'bg-finovo-dark border-finovo-dark text-white shadow-2xl scale-105 z-10' : 'bg-white border-slate-100 text-finovo-dark'}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${activeTab === sol.id ? 'bg-white/10' : 'bg-finovo-gray'}`}>
                <sol.icon className={`w-6 h-6 ${activeTab === sol.id ? 'text-finovo-green' : 'text-finovo-green'}`} />
              </div>
              <h4 className="text-xl font-semibold mb-4">{sol.title}</h4>
              <p className={`text-base font-semibold mb-6 ${activeTab === sol.id ? 'text-white' : 'text-finovo-dark'}`}>{sol.desc}</p>
              <p className={`text-base leading-relaxed mb-8 grow ${activeTab === sol.id ? 'text-slate-300' : 'text-finovo-muted'}`}>{sol.details}</p>
              <button className={`w-full py-3 rounded-full text-base font-semibold border-2 transition-all cursor-pointer hover:shadow-md active:scale-[0.98] ${activeTab === sol.id ? 'bg-white text-finovo-dark border-white hover:bg-slate-100' : 'border-finovo-green text-finovo-green hover:bg-finovo-green hover:text-white'}`}>
                {sol.btnLabel}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-12 text-finovo-muted font-bold text-sm tracking-widest uppercase">
          Whatever your model, we've built the tools to make it work better, faster, and smarter
        </p>
      </div>
    </section>
  );
};


const IntegrationsBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating green glow blobs */}
      <motion.div
        className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-finovo-green/40 blur-2xl"
        animate={{ x: [0, 60, -30, 0], y: [0, 30, -40, 0], opacity: [0.7, 1, 0.8, 0.7] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-emerald-500/35 blur-2xl"
        animate={{ x: [0, -50, 30, 0], y: [0, -20, 35, 0], opacity: [0.6, 1, 0.7, 0.6] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

const IntegrationsHub = () => {
  const icons = [
    { name: 'Stripe', color: 'bg-indigo-500' },
    { name: 'MetaQuotes', color: 'bg-blue-600' },
    { name: 'TradingView', color: 'bg-blue-400' },
    { name: 'Sumsub', color: 'bg-emerald-500' },
    { name: 'Zendesk', color: 'bg-green-600' },
    { name: 'Slack', color: 'bg-purple-500' },
    { name: 'HubSpot', color: 'bg-orange-500' },
    { name: 'Binance', color: 'bg-yellow-500' }
  ];

  return (
    <section className="py-24 bg-finovo-dark relative overflow-hidden">
      <IntegrationsBackground />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-semibold text-white mb-8 leading-tight">
              Seamlessly Connected to Your <span className="text-finovo-green">Entire Stack</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Finovo doesn't just work in isolation. We've built deep integrations with the world's leading payment providers, KYC services, trading platforms, and marketing tools.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: '100+', sub: 'Payment Gateways' },
                { label: '50+', sub: 'KYC Providers' },
                { label: '24/7', sub: 'Real-time Sync' },
                { label: 'API', sub: 'First Architecture' }
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-2xl font-black text-finovo-green mb-1">{stat.label}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] flex items-center justify-center">
            {/* Orbiting Circles */}
            <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full animate-spin-slow" />
            <div className="absolute w-[280px] h-[280px] border border-white/10 rounded-full animate-spin-reverse" />
            
            {/* Central Logo */}
            <div className="relative z-10 w-24 h-24 bg-finovo-green rounded-3xl flex items-center justify-center shadow-2xl shadow-finovo-green/40">
              <div className="flex gap-0.5">
                <div className="w-2 h-8 bg-white -skew-x-12 rounded-sm" />
                <div className="w-2 h-8 bg-white -skew-x-12 rounded-sm opacity-80" />
              </div>
            </div>

            {/* Orbiting Icons */}
            {icons.map((icon, i) => {
              const angle = (i * 360) / icons.length;
              const radius = i % 2 === 0 ? 200 : 140;
              return (
                <motion.div
                  key={i}
                  className={`absolute w-12 h-12 ${icon.color} rounded-xl flex items-center justify-center shadow-lg`}
                  animate={{
                    x: radius * Math.cos((angle * Math.PI) / 180),
                    y: radius * Math.sin((angle * Math.PI) / 180),
                  }}
                  transition={{
                    duration: 0,
                    repeat: Infinity,
                  }}
                >
                  <div className="w-6 h-6 bg-white/20 rounded-sm" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const PowerSuiteSection = () => {
  const features = [
    {
      title: "Advanced CRM & Client Portal",
      desc: "A full white-label CRM suite designed specifically for the complexities of brokerage operations.",
      icon: Database,
      tag: "CORE TECH",
      link: "/services/forex-crm",
      image: "https://picsum.photos/seed/finovo-crm/280/160"
    },
    {
      title: "Multi-Asset Liquidity Provider",
      desc: "Institutional-grade liquidity across 1000+ instruments with ultra-low latency execution.",
      icon: Globe,
      tag: "LIQUIDITY",
      link: "/liquidity/prime",
      image: "https://picsum.photos/seed/finovo-liquidity/280/160"
    },
    {
      title: "Prop Trading Technology",
      desc: "The most robust infrastructure for prop firms, featuring automated evaluations and risk controls.",
      icon: Zap,
      tag: "PROP FIRMS",
      link: "/solutions/prop-trading",
      image: "https://picsum.photos/seed/finovo-prop/280/160"
    },
    {
      title: "MT4/MT5 White Label",
      desc: "Get your own branded MT4 or MT5 platform with full back-office support and hosting.",
      icon: LayoutDashboard,
      tag: "PLATFORMS",
      link: "/solutions/mt4-mt5",
      image: "https://picsum.photos/seed/finovo-platform/280/160"
    }
  ];

  return (
    <section className="py-24 bg-finovo-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-semibold text-finovo-dark mb-6">The Power Suite for <span className="text-finovo-green">Modern Brokers</span></h2>
            <p className="text-finovo-muted text-lg leading-relaxed">Everything you need to run a world-class brokerage, integrated into a single, high-performance ecosystem.</p>
          </div>
          <button className="px-8 py-4 bg-finovo-dark text-white rounded-full font-bold hover:bg-black transition-all flex items-center gap-2 group">
            View All Solutions <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:border-finovo-green/30 transition-all duration-500 hover:shadow-2xl hover:shadow-finovo-green/5">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-black text-finovo-muted uppercase tracking-[0.2em] bg-finovo-gray px-3 py-1 rounded-full">{f.tag}</span>
              </div>
              <div className="w-full mb-8 h-48 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80">
                <img
                  src={f.image}
                  alt=""
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold text-finovo-dark mb-4 group-hover:text-finovo-green transition-colors">{f.title}</h3>
              <p className="text-finovo-muted leading-relaxed mb-8">{f.desc}</p>
              <a href={f.link} className="inline-flex items-center gap-2 text-finovo-dark font-bold group/link">
                Explore Solution <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PlexusBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; z: number; vx: number; vy: number; vz: number; size: number }[] = [];
    const particleCount = 140;
    const connectionDistance = 280;
    const focalLength = 400;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: (Math.random() - 0.5) * canvas.width * 1.5,
          y: (Math.random() - 0.5) * canvas.height * 1.5,
          z: Math.random() * focalLength * 2,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          vz: (Math.random() - 0.5) * 1.2,
          size: Math.random() * 3 + 1.5,
        });
      }
    };

    const project = (x: number, y: number, z: number) => {
      const scale = focalLength / (focalLength + z);
      return {
        x: x * scale + canvas.width / 2,
        y: y * scale + canvas.height / 2,
        scale,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Sort particles by z for better depth rendering
      particles.sort((a, b) => b.z - a.z);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Bounce back
        if (Math.abs(p.x) > canvas.width * 0.75) p.vx *= -1;
        if (Math.abs(p.y) > canvas.height * 0.75) p.vy *= -1;
        if (p.z < 0 || p.z > focalLength * 2) p.vz *= -1;

        const pos = project(p.x, p.y, p.z);
        
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, p.size * pos.scale, 0, Math.PI * 2);
        ctx.shadowBlur = 10 * pos.scale;
        ctx.shadowColor = 'rgba(34, 197, 94, 0.5)';
        ctx.fillStyle = `rgba(34, 197, 94, ${0.8 * pos.scale})`;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for lines

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dz = p.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDistance) {
            const pos2 = project(p2.x, p2.y, p2.z);
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
            ctx.lineTo(pos2.x, pos2.y);
            const opacity = (1 - dist / connectionDistance) * 0.6 * pos.scale;
            ctx.strokeStyle = `rgba(34, 197, 94, ${opacity})`;
            ctx.lineWidth = 0.8 * pos.scale;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-100 pointer-events-none" />;
};

const MT5SolutionsSection = () => {
  return (
    <section className="py-24 bg-finovo-dark relative overflow-hidden min-h-[760px] flex items-center">
      <PlexusBackground />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-finovo-green/10 border border-finovo-green/20 rounded-full mb-8">
              <Zap className="w-4 h-4 text-finovo-green" />
              <span className="text-finovo-green text-xs font-black tracking-widest uppercase">Next-Gen Infrastructure</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-semibold text-white mb-8 leading-[1.1]">
              Elevate Your <span className="text-finovo-green">MT4/MT5</span> Operations
            </h2>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed max-w-xl">
              A fully managed service environment for MT4/5 – engineered for rapid deployment and confident scaling. Use your existing license; we provide the tech.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="px-10 py-5 bg-finovo-green text-white rounded-full font-bold hover:opacity-90 transition-all shadow-2xl shadow-finovo-green/20 flex items-center gap-3">
                Explore our solutions <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-finovo-dark bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">
                      {i === 3 ? '50+' : <div className="w-6 h-6 bg-slate-600 rounded-full" />}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="text-white font-bold">Trusted by 50+ Brokers</div>
                  <div className="text-slate-500">Global Infrastructure</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'Ultra-Low Latency', desc: 'Direct market access with <1ms execution speed.', icon: Zap },
                { title: '99.9% Uptime', desc: 'Redundant server architecture across global data centers.', icon: ShieldCheck },
                { title: 'Expert Support', desc: '24/7 technical assistance from platform specialists.', icon: Globe },
                { title: 'Seamless Migration', desc: 'Switch your existing infrastructure with zero downtime.', icon: ArrowUpRight }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 bg-finovo-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-finovo-green transition-colors">
                    <item.icon className="w-6 h-6 text-finovo-green group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-10 overflow-hidden">
        <NetworkBackground />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-finovo-green/10 border border-finovo-green/20 rounded-full mb-4">
              <Zap className="w-4 h-4 text-finovo-green" />
              <span className="text-finovo-green text-xs font-black tracking-widest uppercase">Market #1 Brokerage Tech Partner</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-finovo-dark leading-tight mb-2 tracking-tight">
              One Technology <span className="text-finovo-green">Partner.</span>
            </h1>
            <p className="text-2xl md:text-3xl font-display font-normal text-finovo-dark mb-3">
              Powering every broker journey.
            </p>
            <p className="text-finovo-muted text-lg md:text-xl max-w-xl mb-5 leading-relaxed font-normal">
              Data-driven infrastructure to launch, scale, and modernise brokerages and prop trading firms with a single, unified stack.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <button className="px-9 py-4 bg-finovo-green text-white rounded-full text-sm md:text-base font-semibold hover:opacity-90 transition-all shadow-xl shadow-finovo-green/25 flex items-center gap-2">
                Explore All‑In‑One <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-0 py-2 text-sm md:text-base font-semibold text-finovo-dark hover:text-finovo-green transition-colors flex items-center gap-2">
                Explore MT4/MT5 Services
                <span className="h-px w-10 bg-finovo-green" />
              </button>
            </div>
          </motion.div>

          <div className="relative hidden lg:flex justify-end perspective-[1800px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileHover={{ y: -12, rotateX: 6, rotateY: -8 }}
              className="relative z-10"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Main device showcase card */}
              <div className="relative pb-16" style={{ transform: 'translateZ(40px)' }}>
                {/* Glow and stacked card for 3D depth */}
                <div className="absolute inset-0 translate-x-4 translate-y-6 bg-white/70 rounded-[3rem] shadow-2xl shadow-slate-900/20 -z-10" />
                <div className="absolute -inset-10 bg-linear-to-br from-finovo-green/25 via-emerald-500/10 to-transparent blur-3xl -z-20" />

                <div className="bg-white p-5 rounded-[3rem] shadow-[0_40px_90px_rgba(15,23,42,0.45)] border border-slate-100">
                  <div className="relative rounded-[2.5rem] bg-linear-to-br from-finovo-dark via-slate-900 to-finovo-green/25 p-6 overflow-hidden h-[360px] flex items-center">
                  {/* Desktop dashboard mock */}
                  <div className="w-full h-full rounded-3xl bg-black/30 border border-white/10 shadow-2xl shadow-black/40 relative overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="w-2 h-2 rounded-full bg-yellow-300" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-xs font-semibold text-slate-300 tracking-widest uppercase">
                        Live Trading Overview
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-6">
                      <div className="col-span-2 rounded-2xl bg-linear-to-br from-finovo-green/40 to-emerald-500/10 border border-emerald-300/40 p-4 flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-black tracking-[0.2em] text-emerald-100 uppercase">
                            Equity Curve
                          </span>
                          <span className="text-xs font-semibold text-emerald-50 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                            +18.4%
                          </span>
                        </div>
                        <div className="h-24 rounded-xl bg-emerald-500/10 border border-emerald-200/30" />
                        <p className="text-[11px] text-emerald-50/90 mt-3">
                          Aggregated P&amp;L and volume across your entire book in real time.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-3">
                          <p className="text-[10px] text-slate-400 mb-1">Active Accounts</p>
                          <p className="text-xl font-black text-white">2,430</p>
                          <p className="text-[10px] text-emerald-300 mt-1">+120 today</p>
                        </div>
                        <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-3">
                          <p className="text-[10px] text-slate-400 mb-1">Average Spread</p>
                          <p className="text-xl font-black text-white">0.3 pips</p>
                          <p className="text-[10px] text-slate-400 mt-1">EURUSD · Major FX</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile screen overlay */}
                  <div className="absolute -left-10 bottom-6 w-40 h-72 rounded-[1.75rem] bg-slate-900 border border-white/15 shadow-[0_26px_60px_rgba(15,23,42,0.65)] overflow-hidden" style={{ transform: 'translateZ(80px)' }}>
                    <div className="h-8 bg-slate-800/80 flex items-center justify-center text-[9px] text-slate-300 tracking-[0.2em] uppercase">
                      Trader App
                    </div>
                    <div className="p-3 space-y-3">
                      <div className="rounded-xl bg-finovo-green/10 border border-finovo-green/40 p-2">
                        <p className="text-[9px] text-slate-300 mb-1">Account Balance</p>
                        <p className="text-sm font-bold text-white">€24,580.20</p>
                        <p className="text-[9px] text-emerald-300 mt-0.5">+€640 today</p>
                      </div>
                      <div className="rounded-xl bg-slate-800/70 border border-white/10 p-2">
                        <p className="text-[9px] text-slate-300 mb-1">Open Positions</p>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[9px] text-slate-200">
                            <span>EURUSD</span>
                            <span className="text-emerald-300">+1.2%</span>
                          </div>
                          <div className="flex items-center justify-between text-[9px] text-slate-200">
                            <span>XAUUSD</span>
                            <span className="text-emerald-300">+0.8%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating awards row */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-4 w-max z-20">
                  {[
                    { label: 'BEST WHITE LABEL PROVIDER', award: 'WIKI FX 2023' },
                    { label: 'BEST FOREX & PROP TURNKEY', award: 'PROFX EXPO 2025' },
                    { label: 'BEST TOP SOCIAL TRADING', award: 'FOREX TRADERS 2025' }
                  ].map((award, i) => (
                    <motion.div 
                      key={i}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="bg-white px-6 py-4 rounded-2xl shadow-xl border border-slate-50 flex flex-col items-center text-center min-w-[160px]"
                    >
                      <div className="w-10 h-10 bg-finovo-green/10 rounded-full mb-2 flex items-center justify-center">
                        <Zap className="text-finovo-green w-5 h-5" />
                      </div>
                      <span className="text-[8px] font-black text-finovo-dark leading-tight mb-1 uppercase tracking-wider">{award.label}</span>
                      <span className="text-[10px] font-bold text-finovo-muted">{award.award}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Selector Section */}
      <SolutionSelector />

      {/* MT5 Solutions Section */}
      <MT5SolutionsSection />

      {/* Power Suite Section */}
      <PowerSuiteSection />

      {/* Integrations Hub */}
      <IntegrationsHub />

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl px-10 py-10 md:px-16 md:py-12 text-center relative overflow-hidden bg-linear-to-r from-emerald-600 to-finovo-green shadow-lg border border-emerald-700/20">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-3 tracking-tight">Ready to Scale Your Brokerage?</h2>
              <p className="text-white/90 text-sm md:text-base mb-8 max-w-xl mx-auto font-medium">Join 50+ global brokers who trust Finovo for their core technology infrastructure.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-2.5 bg-white text-emerald-700 rounded-lg font-semibold text-sm border border-emerald-200/80 hover:bg-slate-50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer">
                  Schedule a Demo
                </button>
                <button className="px-6 py-2.5 bg-finovo-dark text-white rounded-lg font-semibold text-sm hover:bg-black hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
