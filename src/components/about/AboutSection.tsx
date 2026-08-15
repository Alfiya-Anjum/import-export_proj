import React from 'react';
import { MapPin, Globe, Compass, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#051422] relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#174D35]/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composite */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#0b243b]">
              <div className="aspect-[4/3] sm:aspect-[16/12] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80"
                  alt="Fertile Indian agricultural fields - Zorima Global Traders"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051422] via-[#051422]/30 to-transparent" />
              </div>

              {/* Verified Location Floating Banner */}
              <div className="p-6 bg-[#091F33] border-t border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#174D35] flex items-center justify-center text-white shrink-0 border border-[#65B84A]/30">
                  <MapPin className="w-5 h-5 text-[#65B84A]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                    Headquarters & Operational Base
                  </div>
                  <div className="text-base font-bold text-white">
                    Bidar, Karnataka, India
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Situated in the heart of South-Central India's key pulse, grain, and spice cultivation corridors.
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Badge */}
            <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-[#071A2B] p-4 rounded-xl border border-slate-700 shadow-xl hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0b243b] flex items-center justify-center border border-slate-700 text-[#65B84A]">
                <Globe className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">Direct Export Desk</div>
                <div className="text-[11px] text-slate-400">Serving Global Inquiries</div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0b243b] border border-slate-700 text-[#D9A441] text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Company Background</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
              From India. <br />
              <span className="text-[#65B84A]">Built for Global Trade.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              <p>
                <strong className="text-white font-semibold">Zorima Global Traders</strong> is based in <strong className="text-white font-semibold">Bidar, Karnataka, India</strong>. We specialize in sourcing, grading, and supplying Indian agricultural and food products intended for domestic and international wholesale trade.
              </p>
              <p>
                India’s rich soil and diverse agricultural zones produce world-renowned rice, protein-rich pulses, potent spices, and fresh fruits and vegetables. Zorima acts as a dependable bridge between these regional growing hubs and international procurement companies, importers, distributors, and supermarket chains.
              </p>
              <p>
                Whether you require bulk full-container-load shipments (FCL) of Basmati rice, premium Sortex Toor Dal, high-curcumin Turmeric fingers, or seasonal produce delivered by air, our team works closely with buyers to provide transparent export terms, clear documentation, and strict quality alignment.
              </p>
            </div>

            {/* Quick Sourcing Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
              {[
                'Direct sourcing from verified agricultural hubs',
                'Transparent grading & specifications',
                'Container (FCL) & Air Freight capability',
                'Export documentation & port coordination',
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#65B84A] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Action Link */}
            <div className="pt-4">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#65B84A] hover:text-emerald-300 uppercase tracking-wider group"
              >
                <span>Learn More About Our Location & Trade Desk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
