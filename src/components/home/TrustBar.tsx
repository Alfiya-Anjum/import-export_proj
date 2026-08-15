import React from 'react';
import { Globe, ShieldCheck, Layers, FileCheck2, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';

interface TrustBarProps {
  onQuoteClick: () => void;
}

export const TrustBar: React.FC<TrustBarProps> = ({ onQuoteClick }) => {
  const trustItems = [
    {
      label: 'SOURCE ORIGIN',
      title: 'India 🇮🇳',
      subtitle: 'Bidar, Karnataka Sourcing Hub',
      icon: <Globe className="w-5 h-5 text-[#65B84A]" />,
    },
    {
      label: 'SUPPLY MODEL',
      title: 'B2B Wholesale',
      subtitle: 'FCL Containers & Air Cargo',
      icon: <Layers className="w-5 h-5 text-[#D9A441]" />,
    },
    {
      label: 'PRODUCT SCOPE',
      title: '6 Food Categories',
      subtitle: 'Grains, Pulses, Spices, Produce',
      icon: <FileCheck2 className="w-5 h-5 text-emerald-400]" />,
    },
    {
      label: 'TRADE DESK',
      title: 'Export Inquiries',
      subtitle: 'Custom Quotations & Specs',
      icon: <ShieldCheck className="w-5 h-5 text-[#65B84A]" />,
    },
  ];

  return (
    <div className="relative z-20 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0b243b] border border-slate-700/80 rounded-2xl shadow-xl p-4 sm:p-6 backdrop-blur-md">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          {trustItems.map((item, idx) => (
            <div
              key={item.label}
              className={`flex items-start gap-3.5 ${idx !== 0 ? 'sm:pl-6 pt-3 sm:pt-0' : ''}`}
            >
              <div className="p-2.5 rounded-xl bg-[#071A2B] border border-slate-800 shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  {item.label}
                </div>
                <div className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {item.title}
                </div>
                <div className="text-xs text-slate-300">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
