import React from 'react';
import { ArrowUpRight, MessageCircle, Info, ShieldAlert, Package, MapPin } from 'lucide-react';
import { Product } from '../../types';
import { getWhatsAppUrl } from '../../config/company';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onRequestQuote: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onRequestQuote,
}) => {
  const whatsappMsg = `Hello Zorima Global Traders, I am interested in an export quotation for "${product.name}" (Origin: ${product.origin}). Please provide available grades and shipping terms.`;

  return (
    <div
      className="group bg-[#0b243b] rounded-2xl border border-slate-700/80 hover:border-[#65B84A]/60 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-950/20 transition-all duration-300 flex flex-col justify-between"
      id={`product-card-${product.id}`}
    >
      {/* Product Image Stage */}
      <div
        className="aspect-[16/11] relative overflow-hidden bg-slate-900 cursor-pointer"
        onClick={() => onViewDetails(product)}
      >
        <img
          src={product.image}
          alt={`${product.name} - Zorima Global Traders India`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b243b] via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="bg-[#071A2B]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-[#65B84A] uppercase tracking-wider border border-slate-700">
            {product.categoryName}
          </span>
          <span className="bg-[#071A2B]/90 backdrop-blur-md px-2 py-1 rounded-md text-[11px] font-semibold text-slate-200 border border-slate-700 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#D9A441]" />
            <span>{product.origin}</span>
          </span>
        </div>

        {/* Quick View Floating Hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
          <span className="bg-[#071A2B]/95 text-white text-xs font-bold px-3.5 py-2 rounded-lg border border-slate-600 flex items-center gap-1.5 shadow-lg">
            <Info className="w-3.5 h-3.5 text-[#65B84A]" />
            <span>View Full Specifications</span>
          </span>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <h3
            onClick={() => onViewDetails(product)}
            className="text-lg font-bold text-white group-hover:text-[#65B84A] transition-colors cursor-pointer line-clamp-1 font-heading"
            title={product.name}
          >
            {product.name}
          </h3>

          <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Quick Specifications Metadata */}
          <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] border-t border-slate-800/80">
            <div className="bg-[#071A2B]/70 p-2 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Packaging:</span>
              <span className="text-slate-200 font-semibold truncate block">
                {product.packaging[0] || 'Custom on Request'}
              </span>
            </div>
            <div className="bg-[#071A2B]/70 p-2 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Pricing:</span>
              <span className="text-[#D9A441] font-bold block">
                Request a Quote
              </span>
            </div>
          </div>

          {/* Meat sourcing / partner compliance notice if applicable */}
          {product.category === 'meat' && (
            <div className="text-[10px] text-amber-300/90 bg-amber-950/40 p-2 rounded-md border border-amber-800/50 flex items-start gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>Sourced through approved registered export processors.</span>
            </div>
          )}
        </div>

        {/* Action CTAs */}
        <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
          <button
            onClick={() => onRequestQuote(product)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#65B84A] hover:bg-[#529d3b] text-slate-950 font-bold py-2.5 px-3 rounded-lg text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-sm"
            id={`btn-quote-${product.id}`}
          >
            <span>Request Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={getWhatsAppUrl(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-[#174D35] hover:bg-[#1f6646] text-[#65B84A] hover:text-white border border-[#65B84A]/40 transition-colors shrink-0"
            title="Inquire on WhatsApp"
            aria-label={`Inquire about ${product.name} on WhatsApp`}
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
