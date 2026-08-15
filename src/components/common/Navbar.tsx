import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight, Globe, ShieldCheck, FileText, ChevronRight } from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppUrl } from '../../config/company';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onRequestQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Products', id: 'products' },
    { label: 'About Us', id: 'about' },
    { label: 'Global Trade', id: 'global-trade' },
    { label: 'Quality & Docs', id: 'quality' },
    { label: 'Export Process', id: 'process' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071A2B]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-gradient-to-b from-[#071A2B]/90 via-[#071A2B]/40 to-transparent py-5'
      }`}
      id="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            className="flex items-center gap-3 group focus:outline-none"
            id="nav-brand-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#174D35] to-[#0d2e20] border border-[#65B84A]/40 flex items-center justify-center text-white shadow-md group-hover:border-[#65B84A] transition-colors">
              <span className="font-extrabold text-xl text-[#65B84A] tracking-wider font-heading">Z</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-lg sm:text-xl tracking-tight text-white font-heading">
                  ZORIMA
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D9A441] bg-[#D9A441]/10 px-1.5 py-0.5 rounded border border-[#D9A441]/30">
                  EXPORT
                </span>
              </div>
              <span className="text-[11px] font-medium tracking-wide text-slate-400 -mt-0.5">
                GLOBAL TRADERS • INDIA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0b243b]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800/80">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all duration-150 focus:outline-none"
                id={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs (Right Side) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-emerald-400 hover:text-emerald-300 hover:bg-[#174D35]/50 border border-transparent hover:border-[#65B84A]/30 transition-all"
              title="Chat on WhatsApp (+91 95138 15388)"
              id="nav-whatsapp-btn"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2 bg-[#65B84A] hover:bg-[#529d3b] text-slate-950 px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide uppercase transition-all shadow-md shadow-emerald-950/20 active:scale-95"
              id="nav-request-quote-btn"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onRequestQuote}
              className="sm:hidden inline-flex items-center gap-1 bg-[#65B84A] hover:bg-[#529d3b] text-slate-950 px-2.5 py-1.5 rounded-lg text-[11px] font-bold tracking-wide"
            >
              <span>Quote</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-[#0b243b] border border-slate-800 focus:outline-none"
              id="nav-mobile-toggle"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071A2B]/98 border-b border-slate-800 px-4 pt-4 pb-6 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1 mb-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-xl transition-colors text-left"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                onRequestQuote();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#65B84A] hover:bg-[#529d3b] text-slate-950 font-bold py-3 px-4 rounded-xl text-sm transition-all"
            >
              <span>Request an Export Quotation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#174D35] hover:bg-[#1f6646] text-white font-semibold py-3 px-4 rounded-xl text-sm border border-[#65B84A]/30 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#65B84A]" />
              <span>Talk to Us on WhatsApp (+91 95138 15388)</span>
            </a>

            <div className="text-center text-[11px] text-slate-400 pt-2">
              Bidar, Karnataka, India • B2B Export Wholesale
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
