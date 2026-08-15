import React, { useState, useEffect } from 'react';
import { Send, FileUp, CheckCircle, ArrowRight, MessageCircle, ShieldCheck, RefreshCw, X, AlertCircle } from 'lucide-react';
import { QuoteFormData, Product } from '../../types';
import { CATEGORIES, PRODUCTS } from '../../data/products';
import { COMPANY_CONFIG, getWhatsAppUrl } from '../../config/company';

interface QuoteSectionProps {
  preselectedProduct?: Product | null;
  onClearPreselectedProduct?: () => void;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  preselectedProduct,
  onClearPreselectedProduct,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneWhatsapp: '',
    country: '',
    productCategory: 'rice',
    productName: '',
    requiredQuantity: '',
    quantityUnit: 'Metric Tons (MT)',
    packagingPreference: 'Export PP Bags (25/50kg)',
    destinationPort: '',
    incoterms: 'CIF (Cost, Insurance & Freight)',
    requiredDeliveryDate: '',
    message: '',
    attachedFileName: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Synchronize when a product is preselected via cards or modal
  useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({
        ...prev,
        productCategory: preselectedProduct.category,
        productName: preselectedProduct.name,
      }));
    }
  }, [preselectedProduct]);

  const availableProductsForCategory = PRODUCTS.filter(
    (p) => formData.productCategory === 'all' || p.category === formData.productCategory
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        attachedFileName: e.target.files![0].name,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation
    if (
      !formData.fullName.trim() ||
      !formData.companyName.trim() ||
      !formData.businessEmail.trim() ||
      !formData.phoneWhatsapp.trim() ||
      !formData.country.trim() ||
      !formData.requiredQuantity.trim()
    ) {
      setErrorMessage('Please fill in all mandatory fields marked with an asterisk (*).');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable enquiry dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      companyName: '',
      businessEmail: '',
      phoneWhatsapp: '',
      country: '',
      productCategory: 'rice',
      productName: '',
      requiredQuantity: '',
      quantityUnit: 'Metric Tons (MT)',
      packagingPreference: 'Export PP Bags (25/50kg)',
      destinationPort: '',
      incoterms: 'CIF (Cost, Insurance & Freight)',
      requiredDeliveryDate: '',
      message: '',
      attachedFileName: '',
    });
    if (onClearPreselectedProduct) {
      onClearPreselectedProduct();
    }
  };

  // Generate WhatsApp prefilled message from the submitted or current form data
  const generateWhatsAppFromForm = (data: QuoteFormData) => {
    const summary = `*EXPORT RFQ ENQUIRY — ZORIMA GLOBAL TRADERS*\n\n` +
      `*Buyer Name:* ${data.fullName}\n` +
      `*Company:* ${data.companyName}\n` +
      `*Email:* ${data.businessEmail}\n` +
      `*WhatsApp/Phone:* ${data.phoneWhatsapp}\n` +
      `*Destination Country:* ${data.country}\n` +
      `*Product Category:* ${data.productCategory.toUpperCase()}\n` +
      `*Product:* ${data.productName || 'Standard Selection'}\n` +
      `*Required Quantity:* ${data.requiredQuantity} ${data.quantityUnit}\n` +
      `*Packaging:* ${data.packagingPreference}\n` +
      `*Destination Port:* ${data.destinationPort || 'To be confirmed'}\n` +
      `*Incoterms:* ${data.incoterms}\n` +
      (data.message ? `*Notes:* ${data.message}\n` : '');

    return getWhatsAppUrl(summary);
  };

  return (
    <section id="request-a-quote" className="py-20 sm:py-28 bg-[#071A2B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#174D35]/60 border border-[#65B84A]/30 text-[#65B84A] text-xs font-bold uppercase tracking-wider">
            <span>B2B Quotation Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Request an Export Quote
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Submit your commodity specifications, volume, and destination port. Our export desk in Bidar, Karnataka responds with commercial terms and FOB/CIF pricing.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="max-w-4xl mx-auto bg-[#0b243b] rounded-3xl border border-slate-700/80 p-6 sm:p-10 lg:p-12 shadow-2xl">
          
          {isSubmitted && submittedData ? (
            /* Success State */
            <div className="text-center py-8 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#174D35] text-[#65B84A] flex items-center justify-center mx-auto border-2 border-[#65B84A]/40">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  Thank You. Your Enquiry Has Been Received.
                </h3>
                <p className="text-sm text-slate-300 max-w-lg mx-auto">
                  The Zorima Global Traders export team will review your specifications and contact you shortly via email and WhatsApp.
                </p>
              </div>

              {/* Submitted Details Snapshot */}
              <div className="bg-[#071A2B] p-6 rounded-2xl border border-slate-800 text-left max-w-xl mx-auto space-y-3 text-xs">
                <div className="font-bold text-[#D9A441] uppercase tracking-wider text-[11px] pb-2 border-b border-slate-800 flex justify-between items-center">
                  <span>Enquiry Reference Summary</span>
                  <span className="text-slate-400 font-mono">Status: Pending Review</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-300">
                  <div>
                    <span className="text-slate-500 block">Buyer:</span>
                    <strong className="text-white">{submittedData.fullName} ({submittedData.companyName})</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Country:</span>
                    <strong className="text-white">{submittedData.country}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Commodity:</span>
                    <strong className="text-white">{submittedData.productName || submittedData.productCategory.toUpperCase()}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Volume:</span>
                    <strong className="text-white">{submittedData.requiredQuantity} {submittedData.quantityUnit}</strong>
                  </div>
                </div>
              </div>

              {/* Expedited WhatsApp Forwarding Action */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={generateWhatsAppFromForm(submittedData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-slate-950" />
                  <span>Send Quote Directly to WhatsApp (+91 95138 15388)</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#071A2B] hover:bg-slate-800 text-slate-300 font-semibold px-5 py-3.5 rounded-xl text-sm border border-slate-700 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Submit Another Enquiry</span>
                </button>
              </div>
            </div>
          ) : (
            /* Main Input Form */
            <form onSubmit={handleSubmit} className="space-y-8" id="export-quote-form">
              
              {/* Product Preselection Notice */}
              {preselectedProduct && (
                <div className="bg-[#174D35]/50 border border-[#65B84A]/40 rounded-xl p-3.5 flex items-center justify-between text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#65B84A]"></span>
                    <span>Configuring quote for: <strong className="text-white">{preselectedProduct.name}</strong></span>
                  </div>
                  {onClearPreselectedProduct && (
                    <button
                      type="button"
                      onClick={onClearPreselectedProduct}
                      className="text-slate-400 hover:text-white"
                      title="Clear preselected item"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}

              {errorMessage && (
                <div className="bg-red-950/50 border border-red-800 rounded-xl p-3.5 text-xs text-red-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Group 1: Buyer & Company Contact Info */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#D9A441] border-b border-slate-800 pb-2">
                  1. Buyer & Company Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name <span className="text-[#65B84A]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe / Tariq Al-Mansoor"
                      className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#65B84A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Company / Organization Name <span className="text-[#65B84A]">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="e.g. Gulf Trading LLC / EuroFoods Ltd"
                      className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#65B84A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Business Email <span className="text-[#65B84A]">*</span>
                    </label>
                    <input
                      type="email"
                      name="businessEmail"
                      required
                      value={formData.businessEmail}
                      onChange={handleInputChange}
                      placeholder="e.g. procurement@company.com"
                      className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#65B84A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      WhatsApp / Phone (with Country Code) <span className="text-[#65B84A]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneWhatsapp"
                      required
                      value={formData.phoneWhatsapp}
                      onChange={handleInputChange}
                      placeholder="e.g. +971 50 1234567"
                      className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#65B84A]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Destination Country / Region <span className="text-[#65B84A]">*</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="e.g. UAE, Saudi Arabia, United Kingdom, Singapore, Kenya, South Africa..."
                      className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#65B84A]"
                    />
                  </div>
                </div>
              </div>

              {/* Group 2: Product & Quantity Specifications */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#D9A441] border-b border-slate-800 pb-2">
                  2. Commodity & Shipment Parameters
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Product Category <span className="text-[#65B84A]">*</span>
                    </label>
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={(e) => {
                        handleInputChange(e);
                        setFormData((prev) => ({ ...prev, productName: '' }));
                      }}
                      className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#65B84A]"
                    >
                      <option value="rice">Rice (Basmati & Non-Basmati)</option>
                      <option value="pulses">Pulses & Lentils</option>
                      <option value="spices">Indian Spices</option>
                      <option value="fruits">Fresh Fruits</option>
                      <option value="vegetables">Fresh Vegetables</option>
                      <option value="meat">Meat Products (Approved Partners)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Specific Product / Variety
                    </label>
                    <input
                      type="text"
                      name="productName"
                      value={formData.productName}
                      onChange={handleInputChange}
                      placeholder="e.g. 1121 Steam Basmati, Toor Dal, Turmeric 5%, Red Onions..."
                      className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#65B84A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Required Quantity <span className="text-[#65B84A]">*</span>
                    </label>
                    <input
                      type="text"
                      name="requiredQuantity"
                      required
                      value={formData.requiredQuantity}
                      onChange={handleInputChange}
                      placeholder="e.g. 25, 50, 100, 2 Containers"
                      className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#65B84A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Quantity Unit
                    </label>
                    <select
                      name="quantityUnit"
                      value={formData.quantityUnit}
                      onChange={handleInputChange}
                      className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#65B84A]"
                    >
                      <option value="Metric Tons (MT)">Metric Tons (MT)</option>
                      <option value="20ft Container (FCL)">20ft Container (FCL ~25MT)</option>
                      <option value="40ft Container (FCL)">40ft Container (FCL ~28MT)</option>
                      <option value="Kilograms (kg)">Kilograms (kg - Air Freight)</option>
                      <option value="Cartons / Boxes">Cartons / Boxes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Packaging Preference
                    </label>
                    <select
                      name="packagingPreference"
                      value={formData.packagingPreference}
                      onChange={handleInputChange}
                      className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#65B84A]"
                    >
                      <option value="Export PP Bags (25/50kg)">Export PP Bags (25 kg / 50 kg)</option>
                      <option value="Jute / Gunny Bags">Jute / Gunny Bags</option>
                      <option value="Non-Woven / BOPP Bags">Non-Woven / BOPP Bags</option>
                      <option value="Vacuum Sealed Pouches">Vacuum Sealed Pouches</option>
                      <option value="Master Corrugated Cartons">Master Corrugated Cartons</option>
                      <option value="Jumbo 1 MT Bulk Bags">Jumbo 1 MT Bulk Bags</option>
                      <option value="Custom Private Label Packaging">Custom Private Label Packaging</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Target Destination Port
                    </label>
                    <input
                      type="text"
                      name="destinationPort"
                      value={formData.destinationPort}
                      onChange={handleInputChange}
                      placeholder="e.g. Jebel Ali, Jeddah, Rotterdam, Singapore..."
                      className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#65B84A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Preferred Trade Incoterms
                    </label>
                    <select
                      name="incoterms"
                      value={formData.incoterms}
                      onChange={handleInputChange}
                      className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#65B84A]"
                    >
                      <option value="CIF (Cost, Insurance & Freight)">CIF (Cost, Insurance & Freight)</option>
                      <option value="FOB (Free on Board Indian Port)">FOB (Free on Board Indian Port)</option>
                      <option value="CFR (Cost & Freight)">CFR (Cost & Freight)</option>
                      <option value="EXW (Ex-Works Sourcing)">EXW (Ex-Works Sourcing)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Target Delivery / Shipment Date
                    </label>
                    <input
                      type="text"
                      name="requiredDeliveryDate"
                      value={formData.requiredDeliveryDate}
                      onChange={handleInputChange}
                      placeholder="e.g. Immediate / Next Month / Q3 Contract"
                      className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#65B84A]"
                    />
                  </div>
                </div>
              </div>

              {/* Group 3: Requirements & Optional File Upload */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#D9A441] border-b border-slate-800 pb-2">
                  3. Specifications & Attachment
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Additional Requirements / Quality Parameters / Questions
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter any specific grain length, moisture limits, purity levels, private label branding instructions, or inspection requirements..."
                    className="w-full bg-[#071A2B] border border-slate-700 rounded-xl p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#65B84A] resize-none"
                  />
                </div>

                {/* Optional File Upload Attachment */}
                <div className="border-2 border-dashed border-slate-700 hover:border-[#65B84A]/60 rounded-2xl p-4 text-center transition-colors bg-[#071A2B]/60">
                  <input
                    type="file"
                    id="rfq-file-upload"
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
                  />
                  <label
                    htmlFor="rfq-file-upload"
                    className="cursor-pointer flex flex-col items-center justify-center gap-1.5 text-xs text-slate-300"
                  >
                    <FileUp className="w-6 h-6 text-[#65B84A]" />
                    {formData.attachedFileName ? (
                      <span className="font-bold text-white">
                        Attached: {formData.attachedFileName}
                      </span>
                    ) : (
                      <>
                        <span className="font-semibold text-white">
                          Attach Specification Sheet / Purchase Order / RFQ Document
                        </span>
                        <span className="text-[11px] text-slate-500">
                          Supports PDF, Word, Excel, or image files (optional)
                        </span>
                      </>
                    )}
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-[#65B84A] shrink-0" />
                  <span>Direct submission to Zorima Export Operations (Bidar, India)</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#65B84A] hover:bg-[#529d3b] disabled:opacity-50 text-slate-950 font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-200 shadow-xl active:scale-95"
                  id="btn-submit-export-enquiry"
                >
                  {isSubmitting ? (
                    <span>Processing Enquiry...</span>
                  ) : (
                    <>
                      <span>Send Export Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
