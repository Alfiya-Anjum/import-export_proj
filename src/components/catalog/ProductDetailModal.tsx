import React from 'react';
import { X, ArrowUpRight, MessageCircle, MapPin, Package, ShieldCheck, Calendar, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Product } from '../../types';
import { getWhatsAppUrl } from '../../config/company';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  if (!product) return null;

  const whatsappMsg = `Hello Zorima Global Traders, I am interested in placing an export order for "${product.name}" (HS Code: ${product.hsCode || 'Standard'}). Please provide a quotation and current FOB/CIF availability.`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#071A2B] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 text-slate-100 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        id="product-detail-modal"
      >
        {/* Header with Close */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-[#091F33]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#174D35] text-[#65B84A] text-xs font-bold uppercase tracking-wider border border-[#65B84A]/30">
              {product.categoryName}
            </span>
            <div className="text-xs text-slate-400 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#D9A441]" />
              <span>Origin: <strong className="text-white">{product.origin}</strong></span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close product details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 max-h-[75vh] overflow-y-auto">
          
          {/* Left Column: Product Photo & Visual Specs */}
          <div className="lg:col-span-5 space-y-4">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-700 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-[#071A2B]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-bold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#65B84A]" />
                <span>Export Quality Inspected</span>
              </div>
            </div>

            {/* Quick Sourcing Overview */}
            <div className="bg-[#0b243b] p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Variety / Form:</span>
                <span className="text-white font-semibold text-right">{product.variety || 'Standard Export Selection'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Grading Standard:</span>
                <span className="text-white font-semibold text-right">{product.grade || 'Export Sortex Grade'}</span>
              </div>
              {product.hsCode && (
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">HS Code (Harmonized):</span>
                  <span className="text-[#D9A441] font-mono font-bold text-right">{product.hsCode}</span>
                </div>
              )}
              {product.harvestSeason && (
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Harvest Period:</span>
                  <span className="text-white font-semibold text-right">{product.harvestSeason}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: In-depth Technical Specs & Ordering Terms */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
                {product.name}
              </h2>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Technical Specifications Table */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#D9A441] flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Technical & Quality Parameters</span>
                </h4>
                <div className="bg-[#0b243b] rounded-xl border border-slate-800 divide-y divide-slate-800/80 text-xs overflow-hidden">
                  {product.specifications.map((spec, idx) => (
                    <div key={idx} className="flex justify-between px-3.5 py-2">
                      <span className="text-slate-400 font-medium">{spec.label}</span>
                      <span className="text-slate-200 font-semibold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Packaging Options */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5" />
                <span>Export Packaging Options</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.packaging.map((pack, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#0b243b] border border-slate-700 text-xs text-slate-200 font-medium"
                  >
                    {pack}
                  </span>
                ))}
              </div>
            </div>

            {/* Special Compliance Disclaimer for Meat if applicable */}
            {product.category === 'meat' && (
              <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-800/50 text-xs text-amber-200/90 leading-relaxed space-y-1">
                <div className="font-bold flex items-center gap-1 text-amber-300">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Statutory Compliance & Partner Processing</span>
                </div>
                <p>
                  Meat products are sourced strictly through approved, registered export processing partner facilities. Compliance certificates, veterinary inspection records, and country-specific documentation are arranged for verified international buyers.
                </p>
              </div>
            )}

            {/* B2B CTAs */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onRequestQuote(product);
                }}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#65B84A] hover:bg-[#529d3b] text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-lg active:scale-95"
                id="modal-request-quote-btn"
              >
                <span>Request Quotation for this Product</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppUrl(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#174D35] hover:bg-[#1f6646] text-white font-semibold px-5 py-3.5 rounded-xl text-sm border border-[#65B84A]/40 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-[#65B84A]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
