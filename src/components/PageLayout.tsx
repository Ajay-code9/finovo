import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { MessageSquare } from 'lucide-react';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-finovo-dark selection:bg-finovo-green/30">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="pt-20">
        {children}
      </main>

      <Footer />

      {/* Floating Chat Button */}
      {!isMenuOpen && (
        <button className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-finovo-green rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform z-50">
          <MessageSquare className="w-7 h-7 md:w-8 md:h-8" />
        </button>
      )}
    </div>
  );
};
