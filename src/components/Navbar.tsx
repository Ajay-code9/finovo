import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Zap, 
  Plus, 
  Phone,
  ArrowRight
} from 'lucide-react';
import { menuItems } from '../constants';

export const Navbar = ({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: (v: boolean) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(60);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, [isScrolled, isMenuOpen]);

  // Prevent scroll when mobile menu is open and handle layout shift
  useEffect(() => {
    if (isMenuOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      if (navRef.current) navRef.current.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
      if (navRef.current) navRef.current.style.paddingRight = '0px';
    }
  }, [isMenuOpen]);

  const cancelSubmenuClose = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleSubmenuClose = () => {
    cancelSubmenuClose();
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveSubmenu(null);
    }, 180);
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}
      onMouseEnter={cancelSubmenuClose}
      onMouseLeave={scheduleSubmenuClose}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
          <div className="flex items-center gap-1 group cursor-pointer">
            <div className="flex gap-0.5">
              <div className="w-2.5 h-7 bg-finovo-green -skew-x-12 rounded-sm" />
              <div className="w-2.5 h-7 bg-finovo-green -skew-x-12 rounded-sm opacity-80" />
            </div>
            <div className="flex flex-col -gap-1 ml-1">
              <span className="text-2xl font-display font-black text-finovo-dark leading-none">finovo</span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative flex items-center gap-1 cursor-pointer py-2"
              onMouseEnter={() => {
                cancelSubmenuClose();
                setActiveSubmenu(item.hasSubmenu ? item.id : null);
              }}
            >
              {item.hasSubmenu ? (
                <span className={`text-base font-medium transition-colors ${activeSubmenu === item.id ? 'text-finovo-green' : 'text-slate-600 hover:text-finovo-green'}`}>
                  {item.label}
                </span>
              ) : (
                <Link to={item.path || '#'} className={`text-base font-medium transition-colors ${activeSubmenu === item.id ? 'text-finovo-green' : 'text-slate-600 hover:text-finovo-green'}`}>
                  {item.label}
                </Link>
              )}
              {item.hasSubmenu && (
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeSubmenu === item.id ? 'rotate-180 text-finovo-green' : 'text-slate-400'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact-us" className="bg-finovo-dark text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-black transition-colors">Contact Us</Link>
            <button className="bg-finovo-green text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-finovo-green/20">Get a Demo</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-1 text-finovo-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Desktop Mega Menus */}
      <AnimatePresence>
        {activeSubmenu && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-4xl bg-white border border-slate-100 shadow-2xl rounded-4xl mt-4 overflow-hidden"
            onMouseEnter={cancelSubmenuClose}
            onMouseLeave={scheduleSubmenuClose}
          >
            <div className="px-10 py-10">
              {activeSubmenu === 'solutions' && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-12 mb-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {menuItems.find(m => m.id === 'solutions')?.submenu?.title}
                    </span>
                  </div>
                  <div className="col-span-12 grid grid-cols-2 gap-x-12 gap-y-8">
                    {menuItems.find(m => m.id === 'solutions')?.submenu?.items?.map((sub, i) => (
                      <Link key={i} to={sub.path} className="flex gap-5 group cursor-pointer" onClick={() => setActiveSubmenu(null)}>
                        <div className="w-12 h-12 bg-finovo-gray rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-finovo-green/10 transition-colors">
                          <sub.icon className="w-5 h-5 text-finovo-green" />
                        </div>
                        <div>
                          <h4 className="font-medium text-finovo-dark text-base mb-1 group-hover:text-finovo-green transition-colors">{sub.title}</h4>
                          <p className="text-xs text-finovo-muted leading-relaxed">{sub.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {activeSubmenu === 'platform' && (
                <div className="grid grid-cols-12 gap-8 items-start">
                  <div className="col-span-12 mb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {menuItems.find(m => m.id === 'platform')?.submenu?.title}
                    </span>
                  </div>
                  <Link
                    to={menuItems.find(m => m.id === 'platform')?.submenu?.content?.path || '#'}
                    onClick={() => setActiveSubmenu(null)}
                    className="col-span-5 group cursor-pointer"
                  >
                    <h4 className="text-xl font-medium text-finovo-dark mb-3 group-hover:text-finovo-green transition-colors">
                      {menuItems.find(m => m.id === 'platform')?.submenu?.content?.title}
                    </h4>
                    <p className="text-sm text-finovo-muted leading-relaxed">
                      {menuItems.find(m => m.id === 'platform')?.submenu?.content?.desc}
                    </p>
                  </Link>
                  <div className="col-span-7 flex justify-end">
                    <img 
                      src={menuItems.find(m => m.id === 'platform')?.submenu?.content?.image} 
                      alt="Platform Preview" 
                      className="w-full max-w-md rounded-2xl shadow-lg border border-slate-100"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              )}

              {activeSubmenu === 'services' && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-12 mb-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {menuItems.find(m => m.id === 'services')?.submenu?.title}
                    </span>
                  </div>
                  <div className="col-span-12 grid grid-cols-2 gap-x-12 gap-y-8">
                    {menuItems.find(m => m.id === 'services')?.submenu?.items?.map((sub, i) => (
                      <Link key={i} to={sub.path} className="flex gap-5 group cursor-pointer" onClick={() => setActiveSubmenu(null)}>
                        <div className="w-12 h-12 bg-finovo-gray rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-finovo-green/10 transition-colors">
                          <sub.icon className="w-5 h-5 text-finovo-green" />
                        </div>
                        <div>
                          <h4 className="font-bold text-finovo-dark text-base mb-1 group-hover:text-finovo-green transition-colors">{sub.title}</h4>
                          <p className="text-xs text-finovo-muted leading-relaxed">{sub.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {activeSubmenu === 'liquidity' && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-12 mb-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {menuItems.find(m => m.id === 'liquidity')?.submenu?.title}
                    </span>
                  </div>
                  <div className="col-span-12 grid grid-cols-2 gap-x-12 gap-y-8">
                    {menuItems.find(m => m.id === 'liquidity')?.submenu?.items?.map((sub, i) => (
                      <Link key={i} to={sub.path} className="flex gap-5 group cursor-pointer" onClick={() => setActiveSubmenu(null)}>
                        <div className="w-12 h-12 bg-finovo-gray rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-finovo-green/10 transition-colors">
                          <sub.icon className="w-5 h-5 text-finovo-green" />
                        </div>
                        <div>
                          <h4 className="font-bold text-finovo-dark text-base mb-1 group-hover:text-finovo-green transition-colors">{sub.title}</h4>
                          <p className="text-xs text-finovo-muted leading-relaxed">{sub.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {activeSubmenu === 'company' && (
                <div className="grid grid-cols-12 gap-10">
                  <div className="col-span-7">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 block">
                      {menuItems.find(m => m.id === 'company')?.submenu?.title}
                    </span>
                    <div className="flex gap-4">
                      {menuItems.find(m => m.id === 'company')?.submenu?.awards?.map((award, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-3 bg-finovo-gray rounded-2xl border border-slate-50 w-full">
                          <div className="w-8 h-8 bg-finovo-green/10 rounded-full mb-2 flex items-center justify-center">
                            <Zap className="text-finovo-green w-4 h-4" />
                          </div>
                          <span className="text-[7px] font-black text-finovo-dark leading-tight mb-1">{award.label}</span>
                          <span className="text-[9px] font-bold text-finovo-muted">{award.award}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-5 border-l border-slate-100 pl-10">
                    <ul className="space-y-3">
                      {menuItems.find(m => m.id === 'company')?.submenu?.links?.map((link, i) => (
                        <li key={i}>
                          <Link to={link.path} className="text-base font-medium text-finovo-dark hover:text-finovo-green transition-colors" onClick={() => setActiveSubmenu(null)}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 bg-white z-60 lg:hidden overflow-y-auto scrollbar-hide"
            style={{ top: `${navHeight}px` }}
          >
            <div className="px-6 py-2 flex flex-col gap-2">
              {/* Accordion Menu */}
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <div key={item.id} className="border-b border-slate-50 last:border-0">
                    {item.hasSubmenu ? (
                      <button 
                        onClick={() => setMobileExpanded(mobileExpanded === item.id ? null : item.id)}
                        className="w-full flex items-center justify-between py-4 text-slate-700 font-medium"
                      >
                        <span>{item.label}</span>
                        {item.hasSubmenu && (
                          mobileExpanded === item.id ? <div className="w-4 h-0.5 bg-slate-400" /> : <Plus className="w-4 h-4 text-slate-400" />
                        )}
                      </button>
                    ) : (
                      <Link 
                        to={item.path || '#'} 
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full flex items-center justify-between py-4 text-slate-700 font-medium"
                      >
                        <span>{item.label}</span>
                      </Link>
                    )}
                    
                    <AnimatePresence>
                      {item.hasSubmenu && mobileExpanded === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 space-y-6">
                            {item.submenu?.items && (
                              <>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-4">
                                  {item.submenu.title}
                                </span>
                                <div className="space-y-6">
                                  {item.submenu.items.map((sub, i) => (
                                    <Link key={i} to={sub.path} className="flex gap-4" onClick={() => setIsMenuOpen(false)}>
                                      <div className="w-10 h-10 bg-finovo-gray rounded-xl flex items-center justify-center shrink-0">
                                        <sub.icon className="w-5 h-5 text-finovo-green" />
                                      </div>
                                      <div>
                                        <h4 className="font-medium text-finovo-dark text-sm mb-0.5">{sub.title}</h4>
                                        <p className="text-[11px] text-finovo-muted leading-tight">{sub.desc}</p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </>
                            )}
                            {item.submenu?.content && (
                              <div className="space-y-4">
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                                  {item.submenu.title}
                                </span>
                                <h4 className="font-medium text-finovo-dark text-sm">{item.submenu.content.title}</h4>
                                <p className="text-[11px] text-finovo-muted leading-relaxed">{item.submenu.content.desc}</p>
                                <Link to={item.submenu.content.path} onClick={() => setIsMenuOpen(false)}>
                                  <img src={item.submenu.content.image} className="w-full rounded-xl" referrerPolicy="no-referrer" />
                                </Link>
                              </div>
                            )}
                            {item.submenu?.links && (
                              <ul className="space-y-4 pt-2">
                                {item.submenu.links.map((link, i) => (
                                  <li key={i}>
                                    <Link to={link.path} className="text-sm font-medium text-finovo-dark" onClick={() => setIsMenuOpen(false)}>{link.label}</Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Bottom Contact Button */}
              <div className="mt-12 pb-8">
                <Link to="/contact-us" onClick={() => setIsMenuOpen(false)} className="w-full py-2 bg-finovo-dark text-white rounded-full text-xs font-semibold flex items-center justify-center gap-2 hover:bg-finovo-dark/90 transition-colors">
                  <Phone className="w-3.5 h-3.5" /> Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
