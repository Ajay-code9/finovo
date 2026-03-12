import { 
  LayoutDashboard, 
  Zap, 
  Database, 
  Globe 
} from 'lucide-react';

export const menuItems = [
  { 
    id: 'solutions', 
    label: 'Solutions', 
    hasSubmenu: true,
    submenu: {
      title: 'THE ALL-IN-ONE SOLUTION FOR CFD BROKERS & PROP TRADING FIRMS',
      items: [
        { title: 'CFD Brokerage', desc: 'The turnkey solution to launch, grow, and scale your brokerage.', icon: LayoutDashboard, path: '/solutions/cfd-brokerage' },
        { title: 'Prop Trading Firm', desc: 'One-stop-shop for prop firms that make the difference.', icon: Zap, path: '/solutions/prop-trading' },
        { title: 'Back Office Solutions', desc: 'CRM, Broker Portal, Affiliate & IB\'s, Risk Management, and more.', icon: Database, path: '/solutions/back-office' },
        { title: 'MT4 & MT5 Solutions', desc: 'A fully managed services ecosystem for MT4/5.', icon: Globe, path: '/solutions/mt4-mt5' },
        { title: 'Prediction Markets', desc: 'Launch your own prediction markets platform, fully branded, fully managed.', icon: Zap, path: '/solutions/prediction-markets' }
      ]
    }
  },
  { 
    id: 'platform', 
    label: 'Trading Platform', 
    hasSubmenu: true,
    submenu: {
      title: 'EMPOWER YOUR BROKERAGE',
      content: {
        title: 'White Label Trading Platform',
        desc: 'A full white label platform – Your traders stay engaged, and your brand grows stronger. Advanced charts, social trading, mobile apps and branding.',
        image: '/assets/images/tradingdashboardlapnmob.png',
        path: '/platform/white-label'
      }
    }
  },
  { 
    id: 'services', 
    label: 'Services', 
    hasSubmenu: true,
    submenu: {
      title: 'ENGINEERED FOR EFFICIENCY',
      items: [
        { title: 'MT4 MT5 Setup', desc: 'Start your brokerage journey with MT4 or MT5 infrastructure.', icon: Globe, path: '/services/mt4-mt5-setup' },
        { title: 'Forex CRM', desc: 'Deploy a full white-label CRM suite for your brokerage.', icon: LayoutDashboard, path: '/services/forex-crm' },
        { title: 'PROP CRM', desc: 'Maximize your prop firm\'s efficiency with our dedicated technology.', icon: Database, path: '/services/prop-crm' }
      ]
    }
  },
  { 
    id: 'liquidity', 
    label: 'Liquidity', 
    hasSubmenu: true,
    submenu: {
      title: 'LIQUIDITY THAT NEVER SLEEPS',
      items: [
        { title: 'Finovo Prime: Liquidity Provider', desc: 'Your multi-asset liquidity provider. Launch your trading business, backed by scalable liquidity from day one.', icon: Globe, path: '/liquidity/prime' },
        { title: 'About Liquidity', desc: 'From pricing accuracy to execution speed, liquidity providers shape your brokerage\'s performance.', icon: Zap, path: '/liquidity/about' },
        { title: 'Crypto Liquidity Providers', desc: 'Institutional crypto liquidity for broker growth.', icon: Globe, path: '/liquidity/crypto' }
      ]
    }
  },
  { id: 'blog', label: 'Blog', hasSubmenu: false, path: '/blog' },
  { 
    id: 'company', 
    label: 'Company', 
    hasSubmenu: true,
    submenu: {
      title: 'Multi-Award Winning Technology Provider',
      awards: [
        { label: 'BEST WHITE LABEL PROVIDER 2023', award: 'WIKI FX' },
        { label: 'BEST FOREX & PROP TURNKEY TECHNOLOGY PROVIDER 2025', award: 'PROFX EXPO' },
        { label: 'BEST TOP SOCIAL TRADING PLATFORM 2025', award: 'FOREX TRADERS' }
      ],
      links: [
        { label: 'About Us', path: '/about-us' },
        { label: 'Contact Us', path: '/contact-us' },
        { label: 'Careers', path: '/careers' }
      ]
    }
  }
];
