import React from 'react';
import { GenericPage } from './GenericPage';
import Home from './Home';
import CFDBrokerage from './Solutions/CFDBrokerage';
import PropTrading from './Solutions/PropTrading';
import WhiteLabel from './Platform/WhiteLabel';
import Blog from './Blog';
import ContactUs from './ContactUs';

export { Home, CFDBrokerage, PropTrading, WhiteLabel, Blog, ContactUs };

export const BackOfficePage = () => (
  <GenericPage 
    title="Back Office Solutions" 
    description="CRM, Broker Portal, Affiliate & IB's, Risk Management, and more. A complete suite for your brokerage operations."
    features={["Advanced CRM", "Broker Portal", "Affiliate Management", "Risk Controls", "BI Reporting"]}
    imageSeed="backoffice"
  />
);

export const MT4MT5Page = () => (
  <GenericPage 
    title="MT4 & MT5 Solutions" 
    description="A fully managed services ecosystem for MT4/5. Engineered for rapid deployment and confident scaling."
    features={["Managed Hosting", "License Support", "Technical Operations", "24/7 Monitoring", "Seamless Scaling"]}
    imageSeed="mt4mt5"
  />
);

export const PredictionMarketsPage = () => (
  <GenericPage 
    title="Prediction Markets" 
    description="Launch your own prediction markets platform, fully branded, fully managed. Engage your users with unique trading opportunities."
    features={["Fully Branded", "Managed Operations", "Unique Markets", "User Engagement", "Scalable Tech"]}
    imageSeed="prediction"
  />
);

export const MT4MT5SetupPage = () => (
  <GenericPage 
    title="MT4 MT5 Setup" 
    description="Start your brokerage journey with MT4 or MT5 infrastructure. We handle the technical setup so you can focus on your business."
    features={["Infrastructure Setup", "Platform Config", "Technical Support", "Rapid Deployment", "Expert Guidance"]}
    imageSeed="setup"
  />
);

export const ForexCRMPage = () => (
  <GenericPage 
    title="Forex CRM" 
    description="Deploy a full white-label CRM suite for your brokerage. Manage your clients, IB's, and affiliates with ease."
    features={["Client Management", "IB System", "Affiliate Tracking", "Payment Integration", "Custom Workflows"]}
    imageSeed="forexcrm"
  />
);

export const PropCRMPage = () => (
  <GenericPage 
    title="PROP CRM" 
    description="Maximize your prop firm's efficiency with our dedicated technology. Automated evaluations and risk management."
    features={["Prop Firm Specific", "Automated Evaluations", "Risk Controls", "Trader Portal", "Performance Analytics"]}
    imageSeed="propcrm"
  />
);

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
