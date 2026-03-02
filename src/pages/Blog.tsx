import React from 'react';
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
      category: "Industry Insights",
      image: "https://picsum.photos/seed/blog1/800/500"
    },
    {
      title: "Optimizing Your Brokerage for High-Volume Trading",
      excerpt: "Learn how to scale your infrastructure to handle peak market volatility without compromising performance.",
      date: "May 10, 2025",
      author: "Sarah Chen",
      category: "Technology",
      image: "https://picsum.photos/seed/blog2/800/500"
    },
    {
      title: "Risk Management Strategies for Modern Brokers",
      excerpt: "A comprehensive guide to protecting your brokerage and your clients in an increasingly complex market.",
      date: "May 05, 2025",
      author: "Michael Ross",
      category: "Risk Management",
      image: "https://picsum.photos/seed/blog3/800/500"
    }
  ];

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-finovo-dark overflow-hidden">
        <DotsBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-semibold text-white mb-8">
              Finovo <span className="text-finovo-green">Insights</span>
            </h1>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
              Stay ahead of the curve with the latest news, trends, and expert analysis from the world of financial technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[2rem] mb-6">
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
          <div className="bg-white p-12 md:p-20 rounded-[3rem] border border-slate-100 shadow-xl text-center">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-finovo-dark mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-finovo-muted text-lg mb-10 max-w-xl mx-auto">Get the latest insights and updates delivered straight to your inbox.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-4 bg-finovo-gray rounded-full border border-slate-100 focus:outline-none focus:border-finovo-green transition-colors"
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
