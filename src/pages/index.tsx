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
import PrimeLiquidity from './Services/PrimeLiquidity';
import ForexCRM from './Services/ForexCRM';
import AboutLiquidity from './Liquidity/AboutLiquidity';
import CryptoLiquidity from './Liquidity/CryptoLiquidity';
import AboutUs from './Company/AboutUs';
import Careers from './Company/Careers';

export { Home, CFDBrokerage, PropTrading, WhiteLabel, Blog, ContactUs };

export const BackOfficePage = () => <BackOffice />;

export const MT4MT5Page = () => <MT4MT5Solutions />;

export const PredictionMarketsPage = () => <PredictionMarkets />;

export const MT4MT5SetupPage = () => <MT4MT5Setup />;

export const ForexCRMPage = () => <ForexCRM />;

export const PropCRMPage = () => <PropCRM />;

export const PrimeLiquidityPage = () => <PrimeLiquidity />;

export const AboutLiquidityPage = () => <AboutLiquidity />;

export const CryptoLiquidityPage = () => <CryptoLiquidity />;

export const AboutUsPage = () => <AboutUs />;

export const CareersPage = () => <Careers />;
