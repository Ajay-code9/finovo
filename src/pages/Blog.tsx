import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { DotsBackground } from '../components/DotsBackground';

export default function Blog() {
  const posts = [
    {
      title: "The Future of Prop Trading in 2025",
      excerpt: "Explore the emerging trends and technologies that are shaping the next generation of prop trading firms.",
      date: "May 15, 2025",
      author: "Alex Rivers",
      category: "PROP TRADING",
      image: "/assets/images/blog-1.png"
    },
    {
      title: "Optimizing Your Brokerage for High-Volume Trading",
      excerpt: "Learn how to scale your infrastructure to handle peak market volatility without compromising performance.",
      date: "May 10, 2025",
      author: "Sarah Chen",
      category: "BROKERAGE TECH",
      image: "/assets/images/blog-2.png"
    },
    {
      title: "Risk Management Strategies for Modern Brokers",
      excerpt: "A comprehensive guide to protecting your brokerage and your clients in an increasingly complex market.",
      date: "May 05, 2025",
      author: "Michael Ross",
      category: "RISK",
      image: "/assets/images/blog-3.png"
    }
  ];

  const categories = ['ARTICLE', 'BUSINESS', 'CRYPTO', 'FINTECH', 'MARKETING', 'NEWS', 'PROP TRADING', 'REGULATION', 'SOCIAL TRADING'];
  const [activeCategory, setActiveCategory] = useState<string>('ARTICLE');

  const visiblePosts = useMemo(() => {
    if (activeCategory === 'ARTICLE') return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  return (
    <div className="pb-24">
      {/* Hero – featured article */}
      <section className="relative py-20 md:py-24 bg-white overflow-hidden">
        <div className="absolute inset-y-0 left-1/2 right-0 hidden lg:block pointer-events-none">
          <DotsBackground />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-semibold text-finovo-green uppercase tracking-[0.25em] mb-2">
                Finovo insights
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-finovo-dark">
                The market behind your{" "}
                <span className="text-finovo-green">next decision.</span>
              </h1>
            </div>
            <button className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-finovo-green text-white text-sm font-semibold hover:bg-emerald-600 transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Featured card */}
          <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] gap-8 items-stretch">
            <div className="relative rounded-3xl overflow-hidden bg-finovo-dark">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/0" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-7 flex flex-col gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/25 text-[10px] font-semibold text-white uppercase tracking-[0.2em] w-max">
                  Article
                </span>
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                  {posts[0].title}
                </h2>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white shadow-sm p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-finovo-green/10 text-[10px] font-semibold text-finovo-green uppercase tracking-[0.2em] mb-3">
                  {posts[0].category}
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-finovo-dark mb-3">
                  {posts[0].title}
                </h2>
                <p className="text-finovo-muted text-sm md:text-base mb-4">
                  {posts[0].excerpt}
                </p>
                <div className="flex flex-wrap gap-4 text-[11px] text-finovo-muted font-semibold uppercase tracking-[0.18em]">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {posts[0].date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <User className="w-3.5 h-3.5" /> {posts[0].author}
                  </span>
                </div>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-finovo-green hover:underline">
                Read article <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category filters + article grid */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category row */}
          <div className="flex flex-wrap items-center gap-3 border-t border-b border-slate-100 py-4 mb-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-finovo-muted">
            {categories.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-2.5 py-1 rounded-full transition-colors ${
                    isActive ? 'bg-finovo-dark text-white' : 'hover:text-finovo-dark'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
            <div className="ml-auto">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-finovo-green text-white text-xs font-semibold hover:bg-emerald-600 transition-colors">
                View all <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Articles grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {visiblePosts.map((post, i) => (
              <motion.article 
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-4xl mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-finovo-green text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-finovo-muted text-xs font-bold mb-4 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5" /> {post.author}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-finovo-dark mb-4 group-hover:text-finovo-green transition-colors">
                  {post.title}
                </h2>
                <p className="text-finovo-muted leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-finovo-dark font-bold group/link">
                  Read More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-finovo-gray">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white p-12 md:p-20 rounded-3xl border border-slate-100 shadow-xl text-center">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-finovo-muted text-lg mb-10 max-w-xl mx-auto">Get the latest insights and updates delivered straight to your inbox.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="grow px-6 py-4 bg-finovo-gray rounded-full border border-slate-100 focus:outline-none focus:border-finovo-green transition-colors"
              />
              <button className="px-8 py-4 bg-finovo-dark text-white rounded-full font-bold hover:bg-black transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
