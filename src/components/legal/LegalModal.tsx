import React from 'react';
import { X, ShieldAlert, FileText, CheckCircle } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';

export type LegalDocType = 'privacy' | 'terms' | 'cookies';

interface LegalModalProps {
  type: LegalDocType | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#071A2B] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 text-slate-100 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-[#091F33]">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#65B84A]" />
            <h3 className="text-lg font-bold text-white font-heading">
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'terms' && 'Terms & Conditions of International Trade'}
              {type === 'cookies' && 'Cookie & Tracking Policy'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Legal Review Notice Badge */}
        <div className="p-3.5 bg-amber-950/40 border-b border-amber-800/40 text-amber-200/90 text-xs flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Professional B2B Standard Template. Subject to final review and statutory confirmation by Zorima Global Traders legal counsel.</span>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto text-xs sm:text-sm text-slate-300 leading-relaxed">
          
          {type === 'privacy' && (
            <>
              <section className="space-y-2">
                <h4 className="font-bold text-white text-base">1. Information Collection & Business Use</h4>
                <p>
                  Zorima Global Traders collects commercial information provided voluntarily by international buyers, including company names, authorized representative names, business emails, WhatsApp numbers, destination ports, and product procurement requirements solely for the purpose of preparing export quotations and executing supply contracts.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-base">2. Commercial Confidentiality</h4>
                <p>
                  We treat all buyer specifications, volume inquiries, private label packaging artworks, and target pricing with strict commercial confidentiality. We do not sell, rent, or lease buyer data to third-party marketing entities.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-base">3. Statutory & Logistics Disclosures</h4>
                <p>
                  To fulfill export orders, buyer shipping details and port consignee information are shared exclusively with statutory export authorities (Customs, Chamber of Commerce, Ministry of Agriculture/Phytosanitary inspection agencies) and contracted international freight forwarders / shipping lines.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-base">4. Contact Regarding Data</h4>
                <p>
                  For any privacy inquiries or to update your company contact records, please write to: <span className="text-white font-semibold">bmtbdr@gmail.com</span>.
                </p>
              </section>
            </>
          )}

          {type === 'terms' && (
            <>
              <section className="space-y-2">
                <h4 className="font-bold text-white text-base">1. Quotations & Validity</h4>
                <p>
                  All commodity price quotations provided via this website, email, or WhatsApp are indicative and based on prevailing Indian agricultural market rates, seasonal harvest conditions, currency exchange, and ocean freight rates. Official binding offers are issued through formal Proforma Invoices (PI) with specified validity periods.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-base">2. Trade Incoterms & Payment Terms</h4>
                <p>
                  Standard trade terms are governed by ICC Incoterms 2020 (FOB Indian Port, CIF Destination Port, CFR, or EXW). Standard payment terms for international contracts typically include Irrevocable Letter of Credit (L/C at sight) from prime international banks or Telegraphic Transfer (T/T advance deposit and balance against copy of shipping documents) as agreed in writing.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-base">3. Quality Inspection & Tolerance</h4>
                <p>
                  Commodities are graded and inspected prior to container stuffing. Independent third-party inspection (such as SGS, Bureau Veritas, or Intertek) at loading port is welcome and can be mutually stipulated in the commercial sales contract.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-base">4. Jurisdiction & Applicable Law</h4>
                <p>
                  All commercial agreements are governed by the laws of India, with primary legal jurisdiction situated in Karnataka, India, unless otherwise stipulated under international arbitration clauses.
                </p>
              </section>
            </>
          )}

          {type === 'cookies' && (
            <>
              <section className="space-y-2">
                <h4 className="font-bold text-white text-base">1. Use of Cookies</h4>
                <p>
                  This website utilizes essential cookies to ensure smooth navigation, preserve selected product inquiry filters, and provide an optimized browsing experience for international buyers across mobile and desktop devices.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-base">2. Analytics & Performance</h4>
                <p>
                  We may utilize anonymous aggregated web analytics to measure page load speeds and visitor geographical regions to optimize server delivery across global trade routes. No personally identifiable financial data is tracked.
                </p>
              </section>
            </>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-[#091F33] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#174D35] hover:bg-[#1f6646] text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
