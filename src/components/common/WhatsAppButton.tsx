import React, { useState } from 'react';
import { MessageCircle, X, Send, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppUrl } from '../../config/company';

interface WhatsAppButtonProps {
  customMessage?: string;
  className?: string;
  variant?: 'floating' | 'inline' | 'compact';
  label?: string;
  productName?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  customMessage,
  className = '',
  variant = 'floating',
  label = 'Talk to Us on WhatsApp',
  productName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inquiryText, setInquiryText] = useState(
    productName
      ? `Hello Zorima Global Traders, I am interested in importing "${productName}". Please share export pricing, specifications, and availability.`
      : customMessage || 'Hello Zorima Global Traders, I am an international buyer interested in your export products. I would like to discuss a quotation.'
  );

  const handleSend = () => {
    const url = getWhatsAppUrl(inquiryText);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  if (variant === 'inline') {
    return (
      <a
        href={getWhatsAppUrl(productName ? `Hello Zorima Global Traders, I would like to inquire about exporting ${productName}.` : customMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-200 shadow-sm bg-[#174D35] hover:bg-[#1f6646] text-white border border-[#65B84A]/30 hover:border-[#65B84A] ${className}`}
        id={`whatsapp-inline-${productName ? productName.toLowerCase().replace(/[^a-z0-9]/g, '-') : 'general'}`}
      >
        <MessageCircle className="w-4 h-4 text-[#65B84A] shrink-0" />
        <span>{label}</span>
      </a>
    );
  }

  if (variant === 'compact') {
    return (
      <a
        href={getWhatsAppUrl(customMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors ${className}`}
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>{label}</span>
      </a>
    );
  }

  // Floating button with interactive quick-chat popup
  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {isOpen && (
          <div
            id="whatsapp-chat-popup"
            className="mb-4 w-80 sm:w-96 rounded-2xl bg-[#071A2B] border border-slate-700 shadow-2xl p-5 text-slate-100 animate-in fade-in slide-in-from-bottom-5 duration-200"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#174D35] flex items-center justify-center text-white border border-[#65B84A]/40">
                  <MessageCircle className="w-5 h-5 text-[#65B84A]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">Zorima Global Traders</h4>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Export Desk Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-3.5 text-xs text-slate-300 bg-slate-900/60 rounded-lg p-3 my-3 border border-slate-800/80 leading-relaxed">
              <p className="font-medium text-white mb-1">Direct Export Communication</p>
              Connect directly with our Indian export desk in Bidar, Karnataka. We assist international wholesale buyers, distributors, and procurement teams with quotes and specifications.
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300 block">Your Enquiry Message:</label>
              <textarea
                value={inquiryText}
                onChange={(e) => setInquiryText(e.target.value)}
                rows={3}
                className="w-full text-xs bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#65B84A] focus:ring-1 focus:ring-[#65B84A] resize-none"
                placeholder="Type your requirements or destination port..."
              />
            </div>

            <div className="mt-3 flex items-center justify-between gap-2">
              <div className="text-[11px] text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#65B84A]" />
                <span>+91 95138 15388</span>
              </div>
              <button
                onClick={handleSend}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold px-4 py-2 rounded-lg text-xs transition-all shadow-md active:scale-95"
                id="btn-whatsapp-send-popup"
              >
                <span>Start Chat</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 px-4 py-3.5 rounded-full shadow-xl hover:shadow-emerald-900/40 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#071A2B]"
          id="btn-floating-whatsapp"
          aria-label="Chat on WhatsApp with Zorima Global Traders"
        >
          <MessageCircle className="w-6 h-6 fill-current text-slate-950" />
          <span className="hidden sm:inline font-bold text-sm text-slate-950 tracking-tight pr-1">
            WhatsApp Us
          </span>
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-[#071A2B]"></span>
          </span>
        </button>
      </div>
    </>
  );
};
