
import { Router, Request, Response } from 'express';
import { Resend } from 'resend';


const API_URL = (
  (import.meta as ImportMeta & { env: { VITE_API_URL?: string } }).env
    .VITE_API_URL || 'http://localhost:5000'
).replace(/\/+$/, '');

export interface QuoteAttachment {
  filename: string;
  content: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneWhatsapp: string;
  country: string;

  productCategory?: string;
  productName?: string;
  requiredQuantity: string;
  quantityUnit?: string;
  packagingPreference?: string;

  destinationPort?: string;
  incoterms?: string;
  requiredDeliveryDate?: string;

  message?: string;
  attachment?: File | null;
}

export interface QuoteResponse {
  success: boolean;
  message: string;
  emailId?: string;
}

// Convert an uploaded file into Base64 for the backend
async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;

      if (typeof result !== 'string') {
        reject(new Error('Unable to read the attachment.'));
        return;
      }

      // Remove the data URL prefix, keeping only Base64 content
      const base64 = result.split(',')[1];

      if (!base64) {
        reject(new Error('Invalid attachment format.'));
        return;
      }

      resolve(base64);
    };

    reader.onerror = () => {
      reject(new Error('Failed to read the attachment.'));
    };

    reader.readAsDataURL(file);
  });
}

// Submit an export enquiry
export async function sendQuote(
  formData: QuoteFormData
): Promise<QuoteResponse> {
  try {
    let attachment: QuoteAttachment | null = null;

    // Convert the selected attachment if one exists
    if (formData.attachment) {
      const file = formData.attachment;

      // Maximum file size: 5 MB
      if (file.size > 5 * 1024 * 1024) {
        throw new Error('Attachment must be smaller than 5 MB.');
      }

      attachment = {
        filename: file.name,
        content: await fileToBase64(file),
      };
    }

    // Prepare the request body
    const payload = {
      fullName: formData.fullName,
      companyName: formData.companyName,
      businessEmail: formData.businessEmail,
      phoneWhatsapp: formData.phoneWhatsapp,
      country: formData.country,

      productCategory: formData.productCategory || '',
      productName: formData.productName || '',
      requiredQuantity: formData.requiredQuantity,
      quantityUnit: formData.quantityUnit || '',
      packagingPreference: formData.packagingPreference || '',

      destinationPort: formData.destinationPort || '',
      incoterms: formData.incoterms || '',
      requiredDeliveryDate: formData.requiredDeliveryDate || '',

      message: formData.message || '',
      attachment,
    };

    // Send the enquiry to the Express backend
    const response = await fetch(`${API_URL}/api/send-quote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Read the backend response
    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || 'Unable to submit your enquiry.'
      );
    }

    return result as QuoteResponse;

  } catch (error) {
    console.error('Quote submission error:', error);

    throw new Error(
      error instanceof Error
        ? error.message
        : 'Something went wrong. Please try again.'
    );
  }
}
