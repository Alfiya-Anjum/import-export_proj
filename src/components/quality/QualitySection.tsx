import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, FileText, BadgeCheck, AlertCircle, Building2, HelpCircle } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';

interface QualitySectionProps {
  onRequestQuote: () => void;
}

export const QualitySection: React.FC<QualitySectionProps> = ({ onRequestQuote }) => {
  const documents = [
    {
      title: 'Commercial Invoice & Packing List',
      code: 'CI / PL',
      desc: 'Standardized international export invoicing with detailed net/gross weights, container numbers, and HS codes.',
    },
    {
      title: 'Certificate of Origin (COO)',
      code: 'COO',
      desc: 'Official Chamber of Commerce certification validating Indian agricultural and manufacturing origin.',
    },
    {
      title: 'Phytosanitary Certificate',
      code: 'PSC',
      desc: 'Mandatory plant health and quarantine clearance issued under Indian Ministry of Agriculture protocols.',
    },
    {
      title: 'Bill of Lading / Airway Bill',
      code: 'BL / AWB',
      desc: 'Official multi-modal ocean bill of lading (Master / House BL) or express air cargo airway bill.',
    },
    {
      title: 'Fumigation & Health Certificate',
      code: 'FUM / HC',
      desc: 'Methyl bromide / phosphine treatment certification ensuring pest-free maritime transit for grains and pulses.',
    },
    {
      title: 'Independent Inspection (SGS / BV)',
      code: 'SGS / INTERTEK',
      desc: 'Third-party pre-shipment quality, quantity, and weight inspection arranged upon formal buyer request.',
    },
  ];

  return (
    <section id="quality" className="py-20 sm:py-28 bg-[#071A2B] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#174D35]/60 border border-[#65B84A]/30 text-[#65B84A] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Compliance & Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Quality. Documentation. Confidence.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Export success relies on rigorous compliance, transparent documentation, and precise alignment with importing country regulations.
          </p>
        </div>

        {/* Verified Business Information Card (Factual Document Stack) */}
        <div className="bg-gradient-to-br from-[#0b243b] via-[#0d2942] to-[#0b243b] rounded-2xl border border-slate-700 p-6 sm:p-8 shadow-xl mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-700/80">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#174D35] flex items-center justify-center text-white border border-[#65B84A]/40 shrink-0">
                <Building2 className="w-6 h-6 text-[#65B84A]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                    {COMPANY_CONFIG.verifications.legalEntityName}
                  </h3>
                  <span className="bg-emerald-950/80 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-700/60 uppercase">
                    Registered Business
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Jurisdiction: {COMPANY_CONFIG.verifications.registrationJurisdiction}
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-300 bg-[#071A2B]/80 px-4 py-2.5 rounded-xl border border-slate-800 max-w-md">
              <span className="font-semibold text-white block mb-0.5">Commercial Due Diligence:</span>
              <span>Official certificates and tax identification documents are verified and provided to bona fide commercial buyers.</span>
            </div>
          </div>

          {/* Verification Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 text-xs">
            <div className="p-4 rounded-xl bg-[#071A2B] border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">GST Registration</span>
                <BadgeCheck className="w-4 h-4 text-[#65B84A]" />
              </div>
              <div className="text-slate-400 font-mono text-[11px]">
                Status: <span className="text-emerald-400">{COMPANY_CONFIG.verifications.gstinStatus}</span>
              </div>
              <div className="text-slate-500 font-mono text-[10px]">
                GSTIN: {COMPANY_CONFIG.verifications.gstinPlaceholder}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#071A2B] border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">Import Export Code (IEC)</span>
                <BadgeCheck className="w-4 h-4 text-[#65B84A]" />
              </div>
              <div className="text-slate-400 font-mono text-[11px]">
                Status: <span className="text-emerald-400">{COMPANY_CONFIG.verifications.iecStatus}</span>
              </div>
              <div className="text-slate-500 font-mono text-[10px]">
                IEC: {COMPANY_CONFIG.verifications.iecPlaceholder}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#071A2B] border border-slate-800 space-y-1.5 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">Export Desk Location</span>
                <BadgeCheck className="w-4 h-4 text-[#D9A441]" />
              </div>
              <div className="text-slate-400 font-mono text-[11px]">
                Location: <span className="text-slate-200">Bidar, Karnataka, India</span>
              </div>
              <div className="text-slate-500 text-[10px]">
                Direct exporter and B2B wholesale coordination
              </div>
            </div>
          </div>
        </div>

        {/* Standard Export Documentation Stack */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#65B84A]" />
              <span>Standard Export Document Suite</span>
            </h3>
            <span className="text-xs text-slate-400 hidden sm:inline">Provided for each shipment</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, idx) => (
              <div
                key={idx}
                className="bg-[#0b243b] p-6 rounded-2xl border border-slate-700/80 hover:border-slate-600 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-[#071A2B] text-[10px] font-mono font-bold text-[#D9A441] border border-slate-700">
                    {doc.code}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#65B84A]" />
                </div>
                <h4 className="text-base font-bold text-white font-heading">
                  {doc.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {doc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
