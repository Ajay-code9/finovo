import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  title = "Simple, Transparent Pricing",
  subtitle = "Choose the plan that fits your current stage. Scale as you grow with no hidden fees.",
}) => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showAdditional, setShowAdditional] = useState(false);

  const plans = [
    {
      id: "free",
      name: "Start Free",
      desc: "Launch or explore risk-free before you switch",
      price: "0",
      crmPrice: "+€0/month",
      btnLabel: "Start Free",
      popular: false,
      trading: [
        { label: "Real Accounts", val: "50", check: true },
        { label: "Extra Real Account", val: "x", check: false },
        { label: "Branded Trading Platform", val: "x", check: false },
        { label: "Groups", val: "1", check: true },
        { label: "Managers", val: "Read Only", check: true },
        { label: "Data Feed & Liquidity", val: "✓", check: true },
        { label: "Hosting", val: "✓", check: true },
        { label: "Mobile, Web & Desktop", val: "✓", check: true },
        { label: "Payment Processor", val: "✓", check: true },
        { label: "TradingView Charts", val: "✓", check: true },
        { label: "Multi-language", val: "✓", check: true },
        { label: "Calendar & Market News", val: "✓", check: true },
        { label: "Social Trading", val: "✓", check: true },
        { label: "Algorithm Trading", val: "✓", check: true },
        { label: "Customization", val: "x", check: false },
        { label: "Unlimited Instruments", val: "x", check: false },
        { label: "Account Manager", val: "x", check: false },
        { label: "Community Support", val: "✓", check: true },
        { label: "API Access", val: "Limited", check: true },
      ],
      crm: [
        { label: "CRM & Client Portal", val: "Limited", check: true },
        { label: "VoIP, SMS, Email Integration", val: "x", check: false },
        { label: "Workflows", val: "x", check: false },
        { label: "CRM Seats", val: "1", check: true },
        { label: "Agent Permissions", val: "Limited", check: true },
        { label: "Customization", val: "x", check: false },
        { label: "BI Reports", val: "x", check: false },
        { label: "Multi Brands", val: "x", check: false },
        { label: "IB System", val: "✓", check: true },
        { label: "API & Database", val: "Limited", check: true },
      ],
    },
    {
      id: "startup",
      name: "Start-up Brokers",
      desc: "For growing brokerages and prop firms",
      price: isAnnual ? "1,340" : "1,490",
      crmPrice: isAnnual ? "+€1,800/month" : "+€2,000/month",
      btnLabel: "Start Free",
      popular: true,
      trading: [
        { label: "Real Accounts", val: "500", check: true },
        { label: "Extra Real Account", val: "€2", check: true },
        { label: "Branded Trading Platform", val: "✓", check: true },
        { label: "Groups", val: "8", check: true },
        { label: "Managers", val: "Full Access", check: true },
        { label: "Data Feed & Liquidity", val: "✓", check: true },
        { label: "Hosting", val: "✓", check: true },
        { label: "Mobile, Web & Desktop", val: "✓", check: true },
        { label: "Payment Processor", val: "✓", check: true },
        { label: "TradingView Charts", val: "✓", check: true },
        { label: "Multi-language", val: "✓", check: true },
        { label: "Calendar & Market News", val: "✓", check: true },
        { label: "Social Trading", val: "✓", check: true },
        { label: "Algorithm Trading", val: "✓", check: true },
        { label: "Customization", val: "x", check: false },
        { label: "Unlimited Instruments", val: "x", check: false },
        { label: "Account Manager", val: "✓", check: true },
        { label: "Community Support", val: "✓", check: true },
        { label: "API Access", val: "Limited", check: true },
      ],
      crm: [
        { label: "CRM & Client Portal", val: "✓", check: true },
        { label: "VoIP, SMS, Email Integration", val: "✓", check: true },
        { label: "Workflows", val: "✓", check: true },
        { label: "CRM Seats", val: "5", check: true },
        { label: "Agent Permissions", val: "✓", check: true },
        { label: "Customization", val: "x", check: false },
        { label: "BI Reports", val: "x", check: false },
        { label: "Multi Brands", val: "x", check: false },
        { label: "IB System", val: "✓", check: true },
        { label: "API & Database", val: "Limited", check: true },
      ],
    },
    {
      id: "professional",
      name: "Professional",
      desc: "Advanced infrastructure for established firms",
      price: isAnnual ? "2,690" : "2,990",
      crmPrice: isAnnual ? "+€3,600/month" : "+€4,000/month",
      btnLabel: "Start Free",
      popular: false,
      trading: [
        { label: "Real Accounts", val: "Unlimited", check: true },
        { label: "Extra Real Account", val: "€0", check: true },
        { label: "Branded Trading Platform", val: "✓", check: true },
        { label: "Groups", val: "Unlimited", check: true },
        { label: "Managers", val: "Full Access", check: true },
        { label: "Data Feed & Liquidity", val: "✓", check: true },
        { label: "Hosting", val: "✓", check: true },
        { label: "Mobile, Web & Desktop", val: "✓", check: true },
        { label: "Payment Processor", val: "✓", check: true },
        { label: "TradingView Charts", val: "✓", check: true },
        { label: "Multi-language", val: "✓", check: true },
        { label: "Calendar & Market News", val: "✓", check: true },
        { label: "Social Trading", val: "✓", check: true },
        { label: "Algorithm Trading", val: "✓", check: true },
        { label: "Customization", val: "✓", check: true },
        { label: "Unlimited Instruments", val: "✓", check: true },
        { label: "Account Manager", val: "✓", check: true },
        { label: "Community Support", val: "✓", check: true },
        { label: "API Access", val: "Full", check: true },
      ],
      crm: [
        { label: "CRM & Client Portal", val: "✓", check: true },
        { label: "VoIP, SMS, Email Integration", val: "✓", check: true },
        { label: "Workflows", val: "✓", check: true },
        { label: "CRM Seats", val: "Unlimited", check: true },
        { label: "Agent Permissions", val: "✓", check: true },
        { label: "Customization", val: "✓", check: true },
        { label: "BI Reports", val: "✓", check: true },
        { label: "Multi Brands", val: "✓", check: true },
        { label: "IB System", val: "✓", check: true },
        { label: "API & Database", val: "Full", check: true },
      ],
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-finovo-dark mb-4">
            {title}
          </h2>
          <p className="text-finovo-muted text-base md:text-lg max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>

          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm font-bold ${
                !isAnnual ? "text-finovo-dark" : "text-finovo-muted"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 bg-finovo-gray rounded-full relative p-1 transition-all"
            >
              <div
                className={`w-5 h-5 bg-finovo-green rounded-full shadow-md transition-all ${
                  isAnnual ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-bold ${
                  isAnnual ? "text-finovo-dark" : "text-finovo-muted"
                }`}
              >
                Annual
              </span>
              <span className="bg-finovo-green/10 text-finovo-green text-[10px] font-black px-2 py-1 rounded-full">
                SAVE 10%
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-7 rounded-2xl border transition-colors duration-200 ${
                plan.popular
                  ? "border-finovo-green bg-white"
                  : "border-slate-200 bg-white hover:border-finovo-green/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-finovo-green text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-semibold text-finovo-dark mb-1.5">
                  {plan.name}
                </h3>
                <p className="text-finovo-muted text-sm mb-4">{plan.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-semibold text-finovo-dark">
                    €{plan.price}
                  </span>
                  <span className="text-finovo-muted font-medium">/month</span>
                </div>
                <p className="text-finovo-green text-xs font-semibold mt-1.5">
                  {plan.crmPrice}
                </p>
              </div>

              <button
                className={`w-full py-3.5 rounded-full text-sm md:text-base font-semibold transition-colors mb-8 ${
                  plan.popular
                    ? "bg-finovo-green text-white hover:bg-emerald-600"
                    : "bg-finovo-dark text-white hover:bg-black"
                }`}
              >
                {plan.btnLabel}
              </button>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-black text-finovo-dark uppercase tracking-widest mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-finovo-green rounded-full" />
                    Trading Platform
                  </h4>
                  <ul className="space-y-3">
                    {plan.trading.slice(0, 6).map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-finovo-muted font-medium">
                          {item.label}
                        </span>
                        <span
                          className={`font-bold ${
                            item.check
                              ? "text-finovo-dark"
                              : "text-slate-300"
                          }`}
                        >
                          {item.val}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-black text-finovo-dark uppercase tracking-widest mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-finovo-green rounded-full" />
                    CRM &amp; Client Portal
                  </h4>
                  <ul className="space-y-3">
                    {plan.crm.slice(0, 4).map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-finovo-muted font-medium">
                          {item.label}
                        </span>
                        <span
                          className={`font-bold ${
                            item.check
                              ? "text-finovo-dark"
                              : "text-slate-300"
                          }`}
                        >
                          {item.val}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowAdditional(!showAdditional)}
            className="text-finovo-green font-bold flex items-center gap-2 mx-auto hover:opacity-80 transition-all"
          >
            {showAdditional
              ? "Hide detailed features"
              : "See all features & comparison"}
            <ChevronRight
              className={`w-4 h-4 transition-transform ${
                showAdditional ? "rotate-90" : ""
              }`}
            />
          </button>
        </div>

        {showAdditional && (
          <div className="mt-8 pt-8 border-t border-slate-100">
            <div className="text-center mb-8">
              <span className="text-[11px] font-black tracking-[0.25em] uppercase text-finovo-muted">
                Additional services &amp; terms
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-10 text-sm">
              <div>
                <h4 className="text-[13px] font-bold text-finovo-dark mb-4">
                  Additional Services
                </h4>
                <ul className="space-y-2 text-finovo-muted">
                  <li className="flex gap-2">
                    <span className="mt-1 h-[3px] w-[3px] rounded-full bg-finovo-green" />
                    <span>
                      Branded trading app for iOS &amp; Android – from €250/month
                      per store.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-[3px] w-[3px] rounded-full bg-finovo-green" />
                    <span>
                      Additional account groups or manager seats – from
                      €50/month each.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-[3px] w-[3px] rounded-full bg-finovo-green" />
                    <span>
                      New PSP or local payment integration – one‑off setup from
                      €2,500.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-[13px] font-bold text-finovo-dark mb-4">
                  Terms &amp; Payment
                </h4>
                <ul className="space-y-2 text-finovo-muted">
                  <li className="flex gap-2">
                    <span className="mt-1 h-[3px] w-[3px] rounded-full bg-finovo-green" />
                    <span>
                      No setup fees or long‑term lock‑in on standard plans.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-[3px] w-[3px] rounded-full bg-finovo-green" />
                    <span>
                      Onboarding subject to KYC, compliance checks, and
                      agreement signature.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-[3px] w-[3px] rounded-full bg-finovo-green" />
                    <span>
                      Typical go‑live within 3–5 business days after technical
                      approval.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-[3px] w-[3px] rounded-full bg-finovo-green" />
                    <span>
                      Volume‑based discounts available for quarterly or annual
                      prepayment.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-[3px] w-[3px] rounded-full bg-finovo-green" />
                    <span>
                      Promotional pricing may change or be withdrawn at any
                      time.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;

