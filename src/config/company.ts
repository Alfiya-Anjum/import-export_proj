import { CompanyConfig } from '../types';

export const COMPANY_CONFIG: CompanyConfig = {
  companyName: 'Zorima Global Traders',
  tagline: "India's Finest Foods. Delivered to the World.",
  businessLocation: {
    city: 'Bidar',
    state: 'Karnataka',
    country: 'India',
    displayAddress: 'Bidar, Karnataka, India',
    addressNote: '[EXACT PREMISES / WAREHOUSE ADDRESS TO BE CONFIRMED ON DOCUMENT REVIEW]',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60742.610665306634!2d77.4870425571167!3d17.915729729864705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce7c86510dc895%3A0x6b7470fcf1479fa6!2sBidar%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
    googleMapsSearchQuery: 'Bidar, Karnataka, India',
  },
  contact: {
    phone: '+919513815388',
    displayPhone: '+91 95138 15388',
    whatsapp: '+919513815388',
    displayWhatsapp: '+91 95138 15388',
    email: 'bmtbdr@gmail.com',
  },
  businessHours: [
    {
      days: 'Monday – Friday',
      hours: '7:00 AM – 6:00 PM IST',
      status: 'Open Daily',
    },
    {
      days: 'Saturday',
      hours: 'Closed',
      status: 'Closed',
    },
    {
      days: 'Sunday',
      hours: 'Half Day (Morning Session)',
      status: 'Half Day',
    },
  ],
  verifications: {
    legalEntityName: 'Zorima Global Traders',
    gstinStatus: 'GST Registered Business',
    gstinPlaceholder: '[GSTIN TO BE CONFIRMED]',
    iecStatus: 'IEC Registered Exporter',
    iecPlaceholder: '[IEC NUMBER TO BE CONFIRMED]',
    fssaiStatus: 'Food Safety Compliance Documentation',
    fssaiPlaceholder: '[FSSAI / APEDA DETAILS TO BE CONFIRMED]',
    registrationJurisdiction: 'Karnataka, India',
    verificationNote: 'Official registrations, tax identification, and export certificates are verified with relevant Indian authorities and provided to registered international buyers upon commercial request.',
  },
};

export const getWhatsAppUrl = (customMessage?: string) => {
  const defaultMsg = 'Hello Zorima Global Traders, I am an international buyer interested in your export products. I would like to discuss a quotation.';
  const encoded = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/919513815388?text=${encoded}`;
};
