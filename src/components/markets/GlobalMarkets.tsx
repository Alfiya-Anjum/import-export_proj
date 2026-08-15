import React from 'react';
import { Globe2, Anchor, Navigation, ArrowRight, ShieldCheck, Ship } from 'lucide-react';

interface GlobalMarketsProps {
  onRequestQuote: () => void;
}

export const GlobalMarkets: React.FC<GlobalMarketsProps> = ({ onRequestQuote }) => {
  const regions = [
    {
      name: 'Middle East & GCC',
      ports: 'Jebel Ali (UAE), Jeddah (KSA), Hamad (Qatar), Sohar (Oman), Shuwaikh (Kuwait)',
      commodities: 'Basmati Rice, Red Onions, Turmeric, Cardamom, Fresh Mangoes, Frozen Meat',
      desc: 'High-frequency container routes and rapid air-cargo connectivity from Indian gateway ports.',
    },
    {
      name: 'Southeast & East Asia',
      ports: 'Singapore, Port Klang (Malaysia), Jakarta (Indonesia), Ho Chi Minh (Vietnam)',
      commodities: 'Non-Basmati Rice, Broken Rice, Dried Red Chilli, Toor Dal, Spices',
      desc: 'Bulk commodity FCL shipments and continuous agricultural supply lines.',
    },
    {
      name: 'Africa & Indian Ocean',
      ports: 'Mombasa (Kenya), Dar es Salaam (Tanzania), Durban (South Africa), Port Louis',
      commodities: 'Long Grain Rice, Pulses, Yellow Split Peas, Spices, Garlic & Onions',
      desc: 'Direct liner connections for bulk food security and retail distribution.',
    },
    {
      name: 'Europe & UK',
      ports: 'Rotterdam (Netherlands), Felixstowe (UK), Antwerp (Belgium), Hamburg (Germany)',
      commodities: 'Sortex Basmati Rice, Curcumin Turmeric, Table Grapes, Premium Spices',
      desc: 'Strict adherence to MRL (Maximum Residue Limits), GlobalGAP, and EU food safety standards.',
    },
  ];

  return (
    <section id="global-trade" className="py-20 sm:py-28 bg-[#051422] relative overflow-hidden">
      {/* Background World Graphic effect */}
      <div className="absolute inset-0 bg-radial-[at_center] from-[#174D35]/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0b243b] border border-slate-700 text-[#D9A441] text-xs font-bold uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5" />
            <span>International Trade Corridors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Connecting India With Global Markets
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Serving international buyers, commercial importers, and wholesale distributors worldwide from India’s prime maritime and air hubs.
          </p>
        </div>

        {/* Global Logistics Visual Banner */}
        <div className="bg-[#0b243b] rounded-2xl border border-slate-700 p-6 sm:p-8 mb-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#65B84A] uppercase tracking-wider">
                <Ship className="w-4 h-4" />
                <span>Primary Indian Gateway Ports</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">
                Maritime & Air Logistics Execution
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Shipments are coordinated from major Indian maritime seaports including <strong className="text-white">Nhava Sheva (JNPT Mumbai)</strong>, <strong className="text-white">Chennai Port</strong>, <strong className="text-white">Mundra Port</strong>, and <strong className="text-white">Cochin Port</strong>, alongside Hyderabad & Mumbai International Air Cargo terminals for perishable produce.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-[#071A2B] border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-medium">WEST COAST</div>
                  <div className="font-bold text-white mt-0.5">Nhava Sheva / JNPT</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#071A2B] border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-medium">NORTH-WEST</div>
                  <div className="font-bold text-white mt-0.5">Mundra Port</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#071A2B] border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-medium">SOUTH-EAST</div>
                  <div className="font-bold text-white mt-0.5">Chennai Port</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#071A2B] border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-medium">AIR FREIGHT</div>
                  <div className="font-bold text-white mt-0.5">HYD / BOM Cargo</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 bg-[#071A2B] rounded-xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-[#D9A441] text-xs font-bold uppercase tracking-wider">
                <Navigation className="w-4 h-4" />
                <span>Trade Terms Supported</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">FOB:</span>
                  <span className="text-slate-200 font-semibold">Free on Board (Indian Loading Port)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">CIF:</span>
                  <span className="text-slate-200 font-semibold">Cost, Insurance & Freight to Your Port</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">CFR:</span>
                  <span className="text-slate-200 font-semibold">Cost & Freight Delivered</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">EXW:</span>
                  <span className="text-slate-200 font-semibold">Ex-Works Facility Sourcing</span>
                </div>
              </div>
              <button
                onClick={onRequestQuote}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#65B84A] hover:bg-[#529d3b] text-slate-950 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                <span>Tell Us Where You Need Your Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* 4 Key Market Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regions.map((region) => (
            <div
              key={region.name}
              className="bg-[#0b243b] p-6 sm:p-7 rounded-2xl border border-slate-700/80 hover:border-slate-600 transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-white font-heading">
                  {region.name}
                </h4>
                <Anchor className="w-5 h-5 text-[#65B84A]" />
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-slate-400 font-medium block">Key Destination Seaports:</span>
                  <span className="text-slate-200 font-semibold">{region.ports}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Major Requested Commodities:</span>
                  <span className="text-[#D9A441] font-semibold">{region.commodities}</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
                {region.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
