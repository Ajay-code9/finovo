import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { PageLayout } from './components/PageLayout';
import { 
  Home, 
  CFDBrokerage, 
  PropTrading, 
  WhiteLabel, 
  Blog, 
  ContactUs,
  BackOfficePage,
  MT4MT5Page,
  PredictionMarketsPage,
  MT4MT5SetupPage,
  ForexCRMPage,
  PropCRMPage,
  PrimeLiquidityPage,
  AboutLiquidityPage,
  CryptoLiquidityPage,
  AboutUsPage,
  CareersPage
} from './pages';
import { useEffect } from 'react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Solutions */}
          <Route path="/solutions/cfd-brokerage" element={<CFDBrokerage />} />
          <Route path="/solutions/prop-trading" element={<PropTrading />} />
          <Route path="/solutions/back-office" element={<BackOfficePage />} />
          <Route path="/solutions/mt4-mt5" element={<MT4MT5Page />} />
          <Route path="/solutions/prediction-markets" element={<PredictionMarketsPage />} />
          
          {/* Platform */}
          <Route path="/platform/white-label" element={<WhiteLabel />} />
          
          {/* Services */}
          <Route path="/services/mt4-mt5-setup" element={<MT4MT5SetupPage />} />
          <Route path="/services/forex-crm" element={<ForexCRMPage />} />
          <Route path="/services/prop-crm" element={<PropCRMPage />} />
          
          {/* Liquidity */}
          <Route path="/liquidity/prime" element={<PrimeLiquidityPage />} />
          <Route path="/liquidity/about" element={<AboutLiquidityPage />} />
          <Route path="/liquidity/crypto" element={<CryptoLiquidityPage />} />
          
          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          
          {/* Company */}
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
