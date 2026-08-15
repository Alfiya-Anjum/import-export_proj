import React from 'react';
import { Globe, PackageCheck, Sliders, FileSpreadsheet, ArrowUpRight } from 'lucide-react';

interface WhyZorimaProps {
  onRequestQuote: () => void;
}

export const WhyZorima: React.FC<WhyZorimaProps> = ({ onRequestQuote }) => {
  const pillars = [
    {
      num: '01',
      title: 'India-Based Sourcing',
      description:
        'Direct access to prime agricultural producing regions across Karnataka, Southern, and Northern India for grains, pulses, and spices.',
      icon: <Globe className="w-6 h-6 text-[#65B84A]" />,
    },
    {
      num: '02',
      title: 'Product-Focused Supply',
      description:
        'A multi-category portfolio encompassing Rice, Pulses, Spices, Fresh Produce, and export meat through accredited processing partners.',
      icon: <PackageCheck className="w-6 h-6 text-[#D9A441]" />,
    },
    {
      num: '03',
      title: 'Flexible Requirements',
      description:
        'Custom packaging types (Jute, PP, BOPP, Vacuum pack, Master Cartons) and private branding tailored to destination country standards.',
      icon: <Sliders className="w-6 h-6 text-emerald-400" />,
    },
    {
      num: '04',
      title: 'Export-Focused Coordination',
      description:
        'Dedicated support through product enquiry, commercial quotation, quality inspection alignment, export documentation, and freight coordination.',
      icon: <FileSpreadsheet className="w-6 h-6 text-[#65B84A]" />,
    },
  ];

  return (
    <section id="why-zorima" className="py-20 bg-[#071A2B] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#174D35]/60 border border-[#65B84A]/30 text-[#65B84A] text-xs font-bold uppercase tracking-wider">
            <span>Our Commercial Value</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Why Partner with Zorima
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            We provide structured commodity export solutions designed to give international buyers confidence in consistency, specifications, and shipment execution.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="bg-[#0b243b] p-7 rounded-2xl border border-slate-700/80 hover:border-[#65B84A]/60 shadow-lg hover:shadow-2xl hover:shadow-emerald-950/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#071A2B] flex items-center justify-center border border-slate-700 group-hover:border-[#65B84A]/40 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-600 group-hover:text-[#65B84A] transition-colors font-mono">
                    {pillar.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#65B84A] transition-colors font-heading mb-3">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center text-[11px] font-bold text-slate-400 group-hover:text-white uppercase tracking-wider">
                <span>Export Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
