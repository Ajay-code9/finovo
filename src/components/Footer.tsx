import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <img
                src="/assets/images/FinovoLogo.png"
                alt="Finovo"
                className="h-7 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-finovo-muted max-w-xs mb-8 leading-relaxed font-normal">
              A high-performance financial technology infrastructure designed for next-generation brokerages and prop trading firms.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'YouTube'].map(social => (
                <a key={social} href="#" className="w-10 h-10 bg-finovo-gray rounded-full flex items-center justify-center text-finovo-muted hover:text-finovo-green transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-slate-200 rounded-sm" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-finovo-dark mb-6">Solutions</h5>
            <ul className="space-y-4">
              {[
                { label: 'CFD Brokerage', path: '/solutions/cfd-brokerage' },
                { label: 'Prop Trading', path: '/solutions/prop-trading' },
                { label: 'MT4/MT5', path: '/solutions/mt4-mt5' },
                { label: 'Back Office', path: '/solutions/back-office' }
              ].map(item => (
                <li key={item.label}><Link to={item.path} className="text-finovo-muted font-medium hover:text-finovo-green transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-finovo-dark mb-6">Platform</h5>
            <ul className="space-y-4">
              {[
                { label: 'White Label', path: '/platform/white-label' },
                { label: 'CRM', path: '/services/forex-crm' },
                { label: 'Social Trading', path: '/platform/white-label' }
              ].map(item => (
                <li key={item.label}><Link to={item.path} className="text-finovo-muted font-medium hover:text-finovo-green transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-finovo-dark mb-6">Company</h5>
            <ul className="space-y-4">
              {[
                { label: 'About Us', path: '/about-us' },
                { label: 'Careers', path: '/careers' },
                { label: 'Contact', path: '/contact-us' },
                { label: 'Blog', path: '/blog' }
              ].map(item => (
                <li key={item.label}><Link to={item.path} className="text-finovo-muted font-medium hover:text-finovo-green transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-finovo-dark mb-6">Legal</h5>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms', 'Compliance'].map(item => (
                <li key={item}><a href="#" className="text-finovo-muted font-medium hover:text-finovo-green transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-finovo-muted text-sm font-bold">
            © {new Date().getFullYear()} Finovo Technologies Ltd.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-finovo-muted text-sm font-bold hover:text-finovo-green transition-colors">System Status</a>
            <a href="#" className="text-finovo-muted text-sm font-bold hover:text-finovo-green transition-colors">Privacy Center</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
