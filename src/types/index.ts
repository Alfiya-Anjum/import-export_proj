export type ProductCategory = 'all' | 'rice' | 'pulses' | 'spices' | 'fruits' | 'vegetables' | 'meat';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  categoryName: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery?: string[];
  origin: string;
  variety?: string;
  grade?: string;
  packaging: string[];
  minimumOrderQuantity: string;
  availability: string;
  harvestSeason?: string;
  hsCode?: string;
  certificationsNotice?: string;
  featured?: boolean;
  specifications?: { label: string; value: string }[];
}

export interface CompanyConfig {
  companyName: string;
  tagline: string;
  businessLocation: {
    city: string;
    state: string;
    country: string;
    displayAddress: string;
    addressNote?: string;
    googleMapsEmbedUrl?: string;
    googleMapsSearchQuery: string;
  };
  contact: {
    phone: string;
    displayPhone: string;
    whatsapp: string;
    displayWhatsapp: string;
    email: string;
  };
  businessHours: {
    days: string;
    hours: string;
    status: string;
  }[];
  verifications: {
    legalEntityName: string;
    gstinStatus: string;
    gstinPlaceholder: string;
    iecStatus: string;
    iecPlaceholder: string;
    fssaiStatus: string;
    fssaiPlaceholder: string;
    registrationJurisdiction: string;
    verificationNote: string;
  };
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneWhatsapp: string;
  country: string;
  productCategory: string;
  productName: string;
  requiredQuantity: string;
  quantityUnit: string;
  packagingPreference: string;
  destinationPort: string;
  incoterms: string;
  requiredDeliveryDate: string;
  message: string;
  attachedFileName?: string;
}
