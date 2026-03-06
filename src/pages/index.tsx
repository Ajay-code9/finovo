import React from 'react';
import { GenericPage } from './GenericPage';
import Home from './Home';
import CFDBrokerage from './Solutions/CFDBrokerage';
import PropTrading from './Solutions/PropTrading';
import BackOffice from './Solutions/BackOffice';
import WhiteLabel from './Platform/WhiteLabel';
import Blog from './Blog';
import ContactUs from './ContactUs';
import MT4MT5Solutions from './Solutions/MT4MT5Solutions';
import MT4MT5Setup from './Services/MT4MT5Setup';
import PredictionMarkets from './Solutions/PredictionMarkets';
import PropCRM from './Services/PropCRM';
import ForexCRM from './Services/ForexCRM';

export { Home, CFDBrokerage, PropTrading, WhiteLabel, Blog, ContactUs };

export const BackOfficePage = () => <BackOffice />;

export const MT4MT5Page = () => <MT4MT5Solutions />;

export const PredictionMarketsPage = () => <PredictionMarkets />;

export const MT4MT5SetupPage = () => <MT4MT5Setup />;

export const ForexCRMPage = () => <ForexCRM />;

export const PropCRMPage = () => <PropCRM />;

export const PrimeLiquidityPage = () => (
  <GenericPage 
    title="Finovo Prime: Liquidity" 
    description="Your multi-asset liquidity provider. Launch your trading business, backed by scalable liquidity from day one."
    features={["Multi-Asset Liquidity", "Scalable Feed", "Low Latency", "Institutional Grade", "24/7 Support"]}
    imageSeed="prime"
  />
);

export const AboutLiquidityPage = () => (
  <GenericPage 
    title="About Liquidity" 
    description="From pricing accuracy to execution speed, liquidity providers shape your brokerage's performance. Learn how we deliver excellence."
    features={["Pricing Accuracy", "Execution Speed", "Market Depth", "Reliability", "Technical Excellence"]}
    imageSeed="liquidityinfo"
  />
);

export const CryptoLiquidityPage = () => (
  <GenericPage 
    title="Crypto Liquidity Providers" 
    description="Institutional crypto liquidity for broker growth. Access a wide range of digital assets with deep liquidity."
    features={["Digital Assets", "Institutional Grade", "Deep Liquidity", "Secure Access", "Growth Focused"]}
    imageSeed="cryptoliquidity"
  />
);

export const AboutUsPage = () => (
  <GenericPage 
    title="About Us" 
    description="We are a multi-award winning technology provider, dedicated to empowering the next generation of financial firms."
    features={["Award Winning", "Innovation Focused", "Expert Team", "Global Presence", "Customer Centric"]}
    imageSeed="aboutus"
  />
);

export const CareersPage = () => (
  <GenericPage 
    title="Careers" 
    description="Join our team of experts and help us shape the future of financial technology. We're always looking for talented individuals."
    features={["Innovative Culture", "Growth Opportunities", "Expert Team", "Global Impact", "Competitive Benefits"]}
    imageSeed="careers"
  />
);
