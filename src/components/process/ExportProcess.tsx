import React, { useState } from 'react';
import { Sprout, CheckCircle, Cog, PackageCheck, FileText, Ship, ArrowRight } from 'lucide-react';

interface ExportProcessProps {
  onRequestQuote: () => void;
}

export const ExportProcess: React.FC<ExportProcessProps> = ({ onRequestQuote }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: 'Origin Sourcing',
      shortTitle: 'Sourcing',
      desc: 'Procurement directly from verified Indian agricultural markets, farmer hubs, and primary crop belts with strict harvest timing.',
      details: 'We select source batches based on crop maturity, grain length, curcumin levels, and purity standards.',
      icon: <Sprout className="w-5 h-5 text-[#65B84A]" />,
    },
    {
      step: '02',
      title: 'Quality & Selection',
      shortTitle: 'Selection',
      desc: 'Comprehensive multi-parameter sorting, optical optical color-grading (Sortex), moisture testing, and impurity screening.',
      details: 'Ensuring zero adulteration, controlled moisture percentages, and physical uniformity.',
      icon: <CheckCircle className="w-5 h-5 text-[#D9A441]" />,
    },
    {
      step: '03',
      title: 'Processing Coordination',
      shortTitle: 'Processing',
      desc: 'Milling, polishing, de-husking, destoning, and hygienic grading in partner facilities adhering to food hygiene practices.',
      details: 'Steam treatment, parboiling, or cryogenic grinding as specified in the buyer’s technical sheet.',
      icon: <Cog className="w-5 h-5 text-emerald-400" />,
    },
    {
      step: '04',
      title: 'Export Packaging',
      shortTitle: 'Packaging',
      desc: 'Filling into heavy-duty export packaging: Non-Woven, BOPP, Jute, PP bags, vacuum foil pouches, or master cartons.',
      details: 'Custom private label printing, multilingual labeling, and barcode integration available for overseas retailers.',
      icon: <PackageCheck className="w-5 h-5 text-[#65B84A]" />,
    },
    {
      step: '05',
      title: 'Documentation & Compliance',
      shortTitle: 'Documentation',
      desc: 'Preparation of statutory export documentation: Commercial Invoice, Packing List, Certificate of Origin, and Phytosanitary Certificate.',
      details: 'Third-party inspection reports (SGS / Bureau Veritas) arranged upon buyer request.',
      icon: <FileText className="w-5 h-5 text-[#D9A441]" />,
    },
    {
      step: '06',
      title: 'Port & Sea Freight Shipment',
      shortTitle: 'Shipment',
      desc: 'Container stuffing (20ft / 40ft FCL), refrigerated reefer dispatch, or express air cargo to destination seaports worldwide.',
      details: 'Incoterms supported: FOB Indian Ports (Nhava Sheva, Chennai, Mundra, Cochin), CIF, CFR, or EXW.',
      icon: <Ship className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#051422] relative overflow-hidden">
      {/* Visual Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#174D35]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0b243b] border border-slate-700 text-[#D9A441] text-xs font-bold uppercase tracking-wider">
            <span>Supply Chain Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            From Source to Shipment
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A structured 6-step export workflow ensuring seamless execution from Indian agricultural origin to your destination port.
          </p>
        </div>

        {/* Interactive Desktop Timeline Bar */}
        <div className="hidden lg:grid grid-cols-6 gap-2 mb-10 p-2 bg-[#0b243b] rounded-2xl border border-slate-800">
          {steps.map((item, idx) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl text-left transition-all duration-200 flex flex-col justify-between ${
                activeStep === idx
                  ? 'bg-[#174D35] text-white shadow-md border border-[#65B84A]/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-[#071A2B]/60'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span>{item.step}</span>
                {item.icon}
              </div>
              <div className="text-xs font-bold truncate">
                {item.shortTitle}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Step Spotlight Card (Desktop) */}
        <div className="hidden lg:block bg-[#0b243b] rounded-2xl border border-slate-700/80 p-8 shadow-xl mb-12">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-[#071A2B] border border-slate-700 text-xs font-bold text-[#65B84A] font-mono">
                  STEP {steps[activeStep].step} OF 06
                </span>
                <h3 className="text-2xl font-bold text-white font-heading">
                  {steps[activeStep].title}
                </h3>
              </div>
              <p className="text-base text-slate-200 leading-relaxed font-normal">
                {steps[activeStep].desc}
              </p>
              <div className="p-4 bg-[#071A2B] rounded-xl border border-slate-800 text-xs text-slate-300">
                <strong className="text-[#D9A441] block mb-1">Export Standard Note:</strong>
                {steps[activeStep].details}
              </div>
            </div>

            <div className="col-span-4 flex flex-col items-center justify-center p-6 bg-[#071A2B] rounded-xl border border-slate-800 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#174D35] flex items-center justify-center border border-[#65B84A]/40">
                {steps[activeStep].icon}
              </div>
              <div className="text-xs text-slate-400">
                Coordinated by Zorima Trade Operations
              </div>
              <button
                onClick={onRequestQuote}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#65B84A] hover:bg-[#529d3b] text-slate-950 font-bold px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all"
              >
                <span>Discuss Shipment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet 6-Step Vertical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-[#0b243b] p-6 rounded-2xl border border-slate-700/80 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-xl bg-[#071A2B] flex items-center justify-center border border-slate-700 text-xs font-black text-[#65B84A] font-mono">
                  {item.step}
                </span>
                <div className="p-2 rounded-lg bg-[#071A2B] border border-slate-800">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white font-heading">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
              <div className="pt-2 text-[11px] text-[#D9A441] border-t border-slate-800">
                {item.details}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
