import React from 'react';
import { ArrowUpRight, MessageCircle, Building, Users, Store, Factory } from 'lucide-react';
import { getWhatsAppUrl } from '../../config/company';

interface BuyerCTAProps {
  onRequestQuote: () => void;
}

export const BuyerCTA: React.FC<BuyerCTAProps> = ({ onRequestQuote }) => {
  const buyerTypes = [
    { label: 'Importers & Commodity Traders', icon: <Building className="w-4 h-4 text-[#65B84A]" /> },
    { label: 'Supermarket & Retail Chains', icon: <Store className="w-4 h-4 text-[#D9A441]" /> },
    { label: 'Wholesalers & Distributors', icon: <Users className="w-4 h-4 text-emerald-400" /> },
    { label: 'Food Manufacturers & Processors', icon: <Factory className="w-4 h-4 text-[#65B84A]" /> },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#071A2B] via-[#092237] to-[#071A2B] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b243b] rounded-3xl border border-slate-700/80 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#174D35]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9A441]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#174D35]/70 border border-[#65B84A]/40 text-[#65B84A] text-xs font-bold uppercase tracking-wider">
              <span>B2B Procurement & Supply</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
              Looking for Quality Indian Food Products?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              Whether you are an international importer, distributor, wholesale merchant, supermarket chain, or food processing company, tell us what you need and our export desk in Bidar, Karnataka will prepare a tailored quotation and technical specification sheet.
            </p>

            {/* Buyer Types Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {buyerTypes.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#071A2B] border border-slate-700/80 text-xs font-semibold text-slate-200"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Conversion Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 bg-[#65B84A] hover:bg-[#529d3b] text-slate-950 font-bold px-7 py-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-200 shadow-xl active:scale-95"
                id="buyer-cta-quote-btn"
              >
                <span>Request an Export Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppUrl('Hello Zorima Global Traders, I am an international buyer looking to discuss procurement requirements for Indian food and agricultural products.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#174D35] hover:bg-[#1f6646] text-white font-semibold px-6 py-4 rounded-xl text-sm border border-[#65B84A]/40 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-[#65B84A]" />
                <span>Talk to Us on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
