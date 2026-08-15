import React from 'react';
import { ArrowUpRight, MessageCircle, Mail, Phone, MapPin, ShieldCheck, Globe } from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppUrl } from '../../config/company';
import { ProductCategory } from '../../types';
import { LegalDocType } from '../legal/LegalModal';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectCategory: (category: ProductCategory) => void;
  onRequestQuote: () => void;
  onOpenLegal: (type: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectCategory,
  onRequestQuote,
  onOpenLegal,
}) => {
  return (
    <footer className="bg-[#040e17] text-slate-300 border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Origin (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#174D35] flex items-center justify-center text-white border border-[#65B84A]/40 shadow-md">
                <span className="font-black text-xl text-[#65B84A] font-heading">Z</span>
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white font-heading block">
                  ZORIMA
                </span>
                <span className="text-[11px] font-medium tracking-wide text-slate-400 block -mt-1">
                  GLOBAL TRADERS • INDIA
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              International B2B food and agricultural commodity trading company based in Bidar, Karnataka, India. Exporting premium grains, pulses, spices, fresh produce, and export meats.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D9A441] shrink-0" />
                <span>Bidar, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#65B84A] shrink-0" />
                <span>India → International Seaports Worldwide</span>
              </div>
            </div>
          </div>

          {/* Column 2: Export Commodities (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#65B84A] font-heading">
              Export Commodities
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {[
                { name: 'Basmati & Non-Basmati Rice', cat: 'rice' },
                { name: 'Toor Dal & Pulses', cat: 'pulses' },
                { name: 'Turmeric & Indian Spices', cat: 'spices' },
                { name: 'Fresh Fruits (Mango, Pomegranate)', cat: 'fruits' },
                { name: 'Fresh Vegetables (Red Onions)', cat: 'vegetables' },
                { name: 'Frozen Meat (Partner Sourced)', cat: 'meat' },
              ].map((item) => (
                <li key={item.cat}>
                  <button
                    onClick={() => {
                      onSelectCategory(item.cat as ProductCategory);
                      onNavigate('products');
                    }}
                    className="hover:text-white hover:underline text-left transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate & Trade (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#D9A441] font-heading">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {[
                { label: 'About Zorima', id: 'about' },
                { label: 'Why Zorima', id: 'why-zorima' },
                { label: 'Quality & Docs', id: 'quality' },
                { label: 'Global Trade', id: 'global-trade' },
                { label: 'Export Process', id: 'process' },
                { label: 'Contact Desk', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Commercial Inquiries (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 font-heading">
              Trade & Contact Desk
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <button
                onClick={onRequestQuote}
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#0b243b] hover:bg-[#113352] text-white border border-slate-700 transition-colors"
              >
                <span className="font-semibold">Request a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#65B84A]" />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors pt-1"
              >
                <MessageCircle className="w-4 h-4 text-[#65B84A]" />
                <span>WhatsApp: {COMPANY_CONFIG.contact.displayWhatsapp}</span>
              </a>

              <a
                href={`mailto:${COMPANY_CONFIG.contact.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D9A441]" />
                <span>Email: {COMPANY_CONFIG.contact.email}</span>
              </a>

              <a
                href={`tel:${COMPANY_CONFIG.contact.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-400" />
                <span>Call: {COMPANY_CONFIG.contact.displayPhone}</span>
              </a>
            </div>

            <div className="pt-2 text-[11px] text-slate-400">
              Hours: Mon–Fri 7:00 AM – 6:00 PM IST
            </div>
          </div>

        </div>

        {/* Bottom Bar with Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-6">
            <span>© 2026 Zorima Global Traders. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="text-slate-400">Bidar, Karnataka, India</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-200 transition-colors"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('cookies')}
              className="hover:text-slate-200 transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
