import React, { useState, useMemo } from 'react';
import { Search, Filter, Layers, Sparkles, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../../data/products';
import { Product, ProductCategory } from '../../types';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from './ProductDetailModal';

interface ProductCatalogProps {
  selectedCategory: ProductCategory;
  onCategoryChange: (cat: ProductCategory) => void;
  onRequestQuote: (product?: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onCategoryChange,
  onRequestQuote,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [sortBy, setSortBy] = useState<'featured' | 'name' | 'category'>('featured');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.variety && product.variety.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'category') return a.category.localeCompare(b.category);
      // 'featured' sort: featured items first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="products" className="py-20 bg-[#071A2B] relative">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071A2B] via-[#0b243b]/50 to-[#071A2B] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#174D35]/60 border border-[#65B84A]/30 text-[#65B84A] text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Export Product Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Sourced for Global Trade
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Browse our structured range of Indian food and agricultural commodities. All products are graded, packed, and prepared according to international buyer requirements.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="bg-[#0b243b] p-4 sm:p-5 rounded-2xl border border-slate-700/80 shadow-xl mb-10 space-y-4">
          
          {/* Top Row: Search input and Sort selector */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search rice, turmeric, pigeon pea, mango, onions..."
                className="w-full pl-10 pr-9 py-2.5 bg-[#071A2B] border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#65B84A] focus:ring-1 focus:ring-[#65B84A] transition-colors"
                id="catalog-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-slate-300">
              <span className="text-slate-400 font-medium">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#071A2B] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#65B84A]"
              >
                <option value="featured">Featured First</option>
                <option value="name">Product Name (A-Z)</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange(cat.id as ProductCategory)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 focus:outline-none ${
                    isSelected
                      ? 'bg-[#65B84A] text-slate-950 shadow-md shadow-emerald-950/40'
                      : 'bg-[#071A2B] text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-700/80'
                  }`}
                  id={`filter-pill-${cat.id}`}
                >
                  <span>{cat.shortName}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={(prod) => setSelectedProductForModal(prod)}
                onRequestQuote={(prod) => onRequestQuote(prod)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#0b243b] rounded-2xl border border-slate-700 p-8 space-y-4">
            <Filter className="w-10 h-10 text-slate-500 mx-auto" />
            <h3 className="text-lg font-bold text-white font-heading">No Products Found</h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
              No products match your current search "{searchQuery}". Try a different keyword or reset category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('all');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#174D35] text-[#65B84A] text-xs font-bold hover:bg-[#1f6646] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Custom Inquiry Callout */}
        <div className="mt-16 bg-gradient-to-r from-[#0b243b] via-[#113352] to-[#0b243b] rounded-2xl border border-slate-700 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white font-heading flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-[#65B84A]" />
              <span>Need a specific grade, crop variety, or custom private label packaging?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              We coordinate custom Indian agricultural sourcing, sorting, and private brand packaging for bulk international contracts.
            </p>
          </div>

          <button
            onClick={() => onRequestQuote()}
            className="inline-flex items-center gap-2 bg-[#65B84A] hover:bg-[#529d3b] text-slate-950 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 shrink-0 active:scale-95 shadow-md"
          >
            <span>Request Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onRequestQuote={(prod) => {
          setSelectedProductForModal(null);
          onRequestQuote(prod);
        }}
      />
    </section>
  );
};
