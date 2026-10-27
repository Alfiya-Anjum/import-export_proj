import React from 'react';
import { ArrowRight, ArrowUpRight, MessageCircle, MapPin, Package, ShieldCheck, Ship, Globe2 } from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppUrl } from '../../config/company';
import shipVideo from '../assets/ship.mp4';

import indiaLogo from '../assets/images/india-logo.png';

interface HeroSectionProps {
  onExploreProducts: () => void;
  onRequestQuote: () => void;
}


export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProducts,
  onRequestQuote,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#071A2B]"
    >
{/* Background Shipping Video */}
<div className="absolute inset-0 z-0">
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="w-full h-full object-cover"
    aria-hidden="true"
  >
    <source src={shipVideo} type="video/mp4" />
  </video>

  {/* Light overlay - keeps the ship video visible */}
  <div className="absolute inset-0 bg-black/25" />

 

  {/* Subtle bottom fade */}
  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071A2B]/70 to-transparent" />
</div>





      {/* Background Graphic Grid and Gradient Layers */}
      <div className="absolute inset-0 bg-radial-[at_top_right] from-[#174D35]/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#65B84A_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />
      
      
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#174D35]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D9A441]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-left">

            

{/* India Logo Badge */}
<div className="inline-flex items-center justify-center mb-4">
  <img
    src={indiaLogo}
    alt="India"
    className="w-28 h-auto object-contain"
  />
</div>



            
            
            {/* Origin & Badge Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0b243b]/90 border border-slate-700/80 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#65B84A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#65B84A]"></span>
              </span>
              <span className="text-xs font-semibold text-slate-200 tracking-wide">
                Indian Food & Agricultural Export Specialist
              </span>
              <span className="text-[11px] font-bold text-[#D9A441] border-l border-slate-700 pl-2">
                🇮🇳 Bidar, Karnataka
              </span>
            </div>

            

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-heading">
                India’s Finest Foods. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-[#65B84A] to-[#D9A441]">
                  Delivered to the World.
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              <strong className="text-white font-semibold">Zorima Global Traders</strong> connects international wholesale buyers, importers, and distributors with quality food and agricultural commodities sourced directly from India.
            </p>

            {/* Product Category Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-300">
              <span className="text-slate-400 font-medium mr-1">Export Categories:</span>
              {['Rice', 'Pulses', 'Spices', 'Fresh Fruits', 'Fresh Vegetables', 'Meat'].map((cat) => (
                <span
                  key={cat}
                  className="px-2.5 py-1 rounded-md bg-[#0b243b] border border-slate-700/60 text-slate-200 font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Main Conversion CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2.5 bg-[#65B84A] hover:bg-[#529d3b] text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-lg shadow-emerald-950/40 active:scale-95 group"
                id="hero-explore-products-btn"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onRequestQuote}
                className="inline-flex items-center justify-center gap-2 bg-[#0b243b] hover:bg-[#113352] text-white font-semibold px-6 py-3.5 rounded-xl text-sm border border-slate-700 hover:border-slate-500 transition-all duration-200 shadow-sm active:scale-95"
                id="hero-request-quote-btn"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4 text-[#D9A441]" />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#174D35]/80 hover:bg-[#174D35] text-emerald-300 hover:text-white font-semibold px-5 py-3.5 rounded-xl text-sm border border-[#65B84A]/40 transition-all duration-200"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4 text-[#65B84A]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Quick Sourcing Fact */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#65B84A] shrink-0" />
              <span>Full Container Load (FCL), Air Freight & Custom Export Packaging Available</span>
            </div>

          </div>

          {/* Right Column: Visual Composite & Floating Information Cards */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card with Multi-Commodity & Logistics Theme */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#0b243b]">
                <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85"
                    alt="Authentic Indian agricultural spices and grains ready for global export"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-[#071A2B]/30 to-transparent" />
                  
                  {/* Image Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="bg-[#071A2B]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-semibold text-white flex items-center gap-2">
                      <Ship className="w-3.5 h-3.5 text-[#65B84A]" />
                      <span>Farm Sourcing → Sea & Air Freight</span>
                    </div>
                  </div>
                </div>

                {/* Sub-strip with Key Trading Commodities */}
                <div className="p-4 bg-[#091F33] border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded-lg bg-[#071A2B]/60 border border-slate-800">
                    <div className="font-bold text-white">Basmati & Rice</div>
                    <div className="text-[11px] text-slate-400">1121 & Non-Basmati</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#071A2B]/60 border border-slate-800">
                    <div className="font-bold text-white">Pulses & Spices</div>
                    <div className="text-[11px] text-slate-400">Toor, Turmeric, Cumin</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#071A2B]/60 border border-slate-800">
                    <div className="font-bold text-white">Fresh Produce</div>
                    <div className="text-[11px] text-slate-400">Fruits & Vegetables</div>
                  </div>
                </div>
              </div>

              {/* FLOATING CARD 1: Export Origin (Top Left / Overlay) */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-[#071A2B]/95 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-slate-700 shadow-xl max-w-[200px] sm:max-w-[220px]">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#D9A441]">
                  <MapPin className="w-3.5 h-3.5 text-[#D9A441]" />
                  <span>Export Origin</span>
                </div>
                <div className="text-sm font-extrabold text-white mt-0.5 flex items-center gap-1.5">
                  <span>India</span>
                  <span className="text-base">🇮🇳</span>
                </div>
                <div className="text-[11px] text-slate-300">
                  Bidar, Karnataka Hub
                </div>
              </div>

              {/* FLOATING CARD 2: B2B Supply (Bottom Right / Overlay) */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-[#071A2B]/95 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-slate-700 shadow-xl max-w-[220px] sm:max-w-[240px]">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  <Package className="w-3.5 h-3.5 text-[#65B84A]" />
                  <span>B2B Supply</span>
                </div>
                <div className="text-xs font-bold text-white mt-1">
                  Wholesale & Container Export
                </div>
                <div className="text-[11px] text-slate-300">
                  Custom Packaging & Private Label
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
