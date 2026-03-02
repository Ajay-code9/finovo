import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import { DotsBackground } from '../components/DotsBackground';

export default function ContactUs() {
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
              Get in <span className="text-finovo-green">Touch</span>
            </h1>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
              Have questions about our solutions? Our team of experts is here to help you find the perfect fit for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-display font-semibold text-finovo-dark mb-8">Contact Information</h2>
              <p className="text-finovo-muted text-lg mb-12 leading-relaxed">
                Whether you're a startup or an established firm, we're ready to discuss how our technology can drive your success.
              </p>

              <div className="space-y-8">
                {[
                  { title: "Email Us", info: "hello@finovo.tech", icon: Mail },
                  { title: "Call Us", info: "+1 (555) 000-0000", icon: Phone },
                  { title: "Visit Us", info: "Financial District, London, UK", icon: MapPin },
                  { title: "Live Chat", info: "Available 24/7", icon: MessageSquare }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-finovo-green/10 rounded-2xl flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-finovo-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-finovo-dark mb-1">{item.title}</h4>
                      <p className="text-finovo-muted">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-finovo-gray p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-finovo-dark uppercase tracking-widest ml-4">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-white rounded-full border border-slate-100 focus:outline-none focus:border-finovo-green transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-finovo-dark uppercase tracking-widest ml-4">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-white rounded-full border border-slate-100 focus:outline-none focus:border-finovo-green transition-colors" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-finovo-dark uppercase tracking-widest ml-4">Company Name</label>
                      <input type="text" placeholder="Acme Corp" className="w-full px-6 py-4 bg-white rounded-full border border-slate-100 focus:outline-none focus:border-finovo-green transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-finovo-dark uppercase tracking-widest ml-4">Subject</label>
                      <select className="w-full px-6 py-4 bg-white rounded-full border border-slate-100 focus:outline-none focus:border-finovo-green transition-colors appearance-none">
                        <option>General Inquiry</option>
                        <option>Sales</option>
                        <option>Technical Support</option>
                        <option>Partnerships</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-finovo-dark uppercase tracking-widest ml-4">Message</label>
                    <textarea rows={4} placeholder="How can we help you?" className="w-full px-6 py-4 bg-white rounded-[2rem] border border-slate-100 focus:outline-none focus:border-finovo-green transition-colors resize-none"></textarea>
                  </div>

                  <button className="w-full py-5 bg-finovo-dark text-white rounded-full font-bold hover:bg-black transition-all flex items-center justify-center gap-2">
                    Send Message <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
