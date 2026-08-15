/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/home/HeroSection';
import { TrustBar } from './components/home/TrustBar';
import { ProductCategories } from './components/home/ProductCategories';
import { ProductCatalog } from './components/catalog/ProductCatalog';
import { AboutSection } from './components/about/AboutSection';
import { WhyZorima } from './components/about/WhyZorima';
import { ExportProcess } from './components/process/ExportProcess';
import { QualitySection } from './components/quality/QualitySection';
import { GlobalMarkets } from './components/markets/GlobalMarkets';
import { BuyerCTA } from './components/home/BuyerCTA';
import { QuoteSection } from './components/quote/QuoteSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { LegalModal, LegalDocType } from './components/legal/LegalModal';
import { Product, ProductCategory } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [preselectedProductForQuote, setPreselectedProductForQuote] = useState<Product | null>(null);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType | null>(null);

  // Smooth navigation to specific sections
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // When a user clicks "Request Quote" on a product card or category
  const handleRequestQuote = (product?: Product) => {
    if (product) {
      setPreselectedProductForQuote(product);
    }
    scrollToSection('request-a-quote');
  };

  // When a user selects a category card from the 6-grid overview
  const handleSelectCategory = (category: ProductCategory) => {
    setSelectedCategory(category);
    scrollToSection('products');
  };

  return (
    <div className="min-h-screen bg-[#071A2B] text-slate-100 font-sans selection:bg-[#65B84A] selection:text-slate-950">
      
      {/* Sticky Navigation */}
      <Navbar
        onNavigate={scrollToSection}
        onRequestQuote={() => handleRequestQuote()}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Cinematic Hero Section */}
        <HeroSection
          onExploreProducts={() => scrollToSection('products')}
          onRequestQuote={() => handleRequestQuote()}
        />

        {/* 2. Quick Trust & Verification Strip */}
        <TrustBar onQuoteClick={() => handleRequestQuote()} />

        {/* 3. Product Categories Overview (6 Cards) */}
        <ProductCategories onSelectCategory={handleSelectCategory} />

        {/* 4. Filterable Export Product Catalog */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onRequestQuote={handleRequestQuote}
        />

        {/* 5. Editorial About Zorima Section */}
        <AboutSection onContactClick={() => scrollToSection('contact')} />

        {/* 6. Why Zorima (4 Value Pillars) */}
        <WhyZorima onRequestQuote={() => handleRequestQuote()} />

        {/* 7. Farm-to-Port Export Process Timeline */}
        <ExportProcess onRequestQuote={() => handleRequestQuote()} />

        {/* 8. Quality & Documentation Compliance Section */}
        <QualitySection onRequestQuote={() => handleRequestQuote()} />

        {/* 9. Global Trade Corridors & Markets */}
        <GlobalMarkets onRequestQuote={() => handleRequestQuote()} />

        {/* 10. International Buyer Procurement CTA */}
        <BuyerCTA onRequestQuote={() => handleRequestQuote()} />

        {/* 11. B2B Request a Quote System */}
        <QuoteSection
          preselectedProduct={preselectedProductForQuote}
          onClearPreselectedProduct={() => setPreselectedProductForQuote(null)}
        />

        {/* 12. Contact Desk & Bidar Karnataka Location Map */}
        <ContactSection />
      </main>

      {/* 13. Corporate Dark Footer */}
      <Footer
        onNavigate={scrollToSection}
        onSelectCategory={handleSelectCategory}
        onRequestQuote={() => handleRequestQuote()}
        onOpenLegal={(type) => setActiveLegalDoc(type)}
      />

      {/* Reusable Floating WhatsApp Desk Widget */}
      <WhatsAppButton variant="floating" />

      {/* Legal Dialog Modal */}
      <LegalModal
        type={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
      />

    </div>
  );
}
