import React from 'react';
import { Phone, MessageCircle, Mail, Clock, MapPin, ExternalLink, Navigation, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppUrl } from '../../config/company';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#051422] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#174D35]/60 border border-[#65B84A]/30 text-[#65B84A] text-xs font-bold uppercase tracking-wider">
            <span>Direct Commercial Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Let's Talk Trade.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Reach out to our export desk in Bidar, Karnataka for trade inquiries, price estimates, sample requests, and contract discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Operating Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="bg-[#0b243b] rounded-2xl border border-slate-700/80 p-6 sm:p-7 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white font-heading">
                  {COMPANY_CONFIG.companyName}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#D9A441] mt-1 font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{COMPANY_CONFIG.businessLocation.displayAddress}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${COMPANY_CONFIG.contact.phone}`}
                  className="flex items-center justify-center gap-2 bg-[#071A2B] hover:bg-slate-800 text-white font-semibold py-3 px-4 rounded-xl text-xs border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#65B84A]" />
                  <span>Call Us</span>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#174D35] hover:bg-[#1f6646] text-white font-semibold py-3 px-4 rounded-xl text-xs border border-[#65B84A]/40 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#65B84A]" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`mailto:${COMPANY_CONFIG.contact.email}?subject=Export%20Commodity%20Enquiry%20-%20Zorima%20Global%20Traders`}
                  className="flex items-center justify-center gap-2 bg-[#071A2B] hover:bg-slate-800 text-white font-semibold py-3 px-4 rounded-xl text-xs border border-slate-700 transition-colors sm:col-span-2"
                >
                  <Mail className="w-4 h-4 text-[#D9A441]" />
                  <span>Email: {COMPANY_CONFIG.contact.email}</span>
                </a>
              </div>

              {/* Direct Info List */}
              <div className="space-y-3 pt-3 border-t border-slate-800 text-xs">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">Phone & WhatsApp Desk:</span>
                    <a href={`tel:${COMPANY_CONFIG.contact.phone}`} className="text-white font-semibold hover:text-[#65B84A] transition-colors">
                      {COMPANY_CONFIG.contact.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">Official Business Email:</span>
                    <a href={`mailto:${COMPANY_CONFIG.contact.email}`} className="text-white font-semibold hover:text-[#65B84A] transition-colors">
                      {COMPANY_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">Registered Location:</span>
                    <span className="text-white font-semibold">
                      Bidar, Karnataka, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-[#0b243b] rounded-2xl border border-slate-700/80 p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-sm font-heading">
                <Clock className="w-4 h-4 text-[#65B84A]" />
                <span>Export Operations & Business Hours</span>
              </div>

              <div className="space-y-2 text-xs divide-y divide-slate-800">
                {COMPANY_CONFIG.businessHours.map((schedule, idx) => (
                  <div key={idx} className={`flex justify-between items-center ${idx !== 0 ? 'pt-2' : ''}`}>
                    <span className="text-slate-300 font-medium">{schedule.days}</span>
                    <span className="text-white font-semibold text-right">{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                * Indian Standard Time (IST, UTC+05:30). Urgent international trade inquiries received on WhatsApp are monitored across time zones.
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps & Location Context */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-[#0b243b] rounded-2xl border border-slate-700/80 overflow-hidden shadow-xl">
              
              {/* Map Header */}
              <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-[#071A2B]">
                <div className="flex items-center gap-2.5">
                  <Navigation className="w-4 h-4 text-[#65B84A]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Location: Bidar, Karnataka, India
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Bidar,Karnataka,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Embed Frame */}
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-900 relative">
                <iframe
                  title="Zorima Global Traders Location - Bidar, Karnataka, India"
                  src={COMPANY_CONFIG.businessLocation.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Location Footer Note */}
              <div className="p-4 bg-[#091F33] border-t border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#65B84A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Strategic Agricultural Corridor:</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">
                    Bidar sits at the tri-junction of Karnataka, Telangana, and Maharashtra, offering immediate proximity to key pulse, grain, and spice growing regions with direct freight highways to Western & Southern Indian ports.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
