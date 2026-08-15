import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../../data/products';
import { ProductCategory } from '../../types';

interface ProductCategoriesProps {
  onSelectCategory: (categoryId: ProductCategory) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({
  onSelectCategory,
}) => {
  // Filter out the 'all' option for category overview cards
  const displayCategories = CATEGORIES.filter((c) => c.id !== 'all');

  return (
    <section id="categories-overview" className="py-20 bg-[#071A2B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#174D35]/50 border border-[#65B84A]/30 text-[#65B84A] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Supply Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              What We Export
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              India produces some of the world's finest staples and aromatic crops. We source directly from key agricultural belts to fulfill international trade demand.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={() => onSelectCategory('all')}
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 uppercase tracking-wider group"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory(category.id as ProductCategory)}
              className="group relative rounded-2xl overflow-hidden bg-[#0b243b] border border-slate-700/70 hover:border-[#65B84A]/60 shadow-lg hover:shadow-2xl hover:shadow-emerald-950/30 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              id={`cat-card-${category.id}`}
            >
              {/* Category Image */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={category.image}
                  alt={`Indian export ${category.name} - Zorima Global Traders`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b243b] via-[#0b243b]/40 to-transparent" />
                
                {/* Category Item Count Badge */}
                <div className="absolute top-3.5 right-3.5 bg-[#071A2B]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-slate-200 border border-slate-700">
                  {category.count} Products Available
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#65B84A] transition-colors font-heading flex items-center justify-between">
                    <span>{category.name}</span>
                    <span className="text-xs font-semibold text-slate-400 font-sans">
                      India Origin 🇮🇳
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-[#65B84A] group-hover:text-emerald-300">
                  <span>Explore {category.shortName} Products</span>
                  <div className="w-7 h-7 rounded-full bg-[#174D35]/80 flex items-center justify-center group-hover:bg-[#65B84A] group-hover:text-slate-950 transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
