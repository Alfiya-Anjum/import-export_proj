
import { Router, Request, Response } from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';

// Load environment variables BEFORE creating Resend
dotenv.config({ path: '.env.local' });

const router = Router();

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error(
    'RESEND_API_KEY is missing. Check your root .env.local file.'
  );
}

const resend = new Resend(apiKey);

const OWNER_EMAIL = process.env.OWNER_EMAIL || 'alfiya.anjum456@gmail.com';

interface AttachmentInput {
  filename: string;
  content: string; // Base64-encoded file content
}

router.post('/send-quote', async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      companyName,
      businessEmail,
      phoneWhatsapp,
      country,
      productCategory,
      productName,
      requiredQuantity,
      quantityUnit,
      packagingPreference,
      destinationPort,
      incoterms,
      requiredDeliveryDate,
      message,
      attachment,
    } = req.body;

    // 1. Validate required fields
    const requiredFields = {
      fullName,
      companyName,
      businessEmail,
      phoneWhatsapp,
      country,
      requiredQuantity,
    };

    for (const [field, value] of Object.entries(requiredFields)) {
      if (
        typeof value !== 'string' ||
        !value.trim()
      ) {
        return res.status(400).json({
          success: false,
          message: `${field} is required.`,
        });
      }
    }

    // 2. Validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(businessEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid business email address.',
      });
    }

    // 3. Prepare attachment (if provided)
    const attachments = [];

    if (attachment) {
      const file = attachment as AttachmentInput;

      if (
        typeof file.filename !== 'string' ||
        typeof file.content !== 'string' ||
        !file.filename.trim() ||
        !file.content.trim()
      ) {
        return res.status(400).json({
          success: false,
          message: 'Invalid attachment.',
        });
      }

      // Only accept a plain Base64 string, not a data URI
      const base64 = file.content;

      if (
        base64.startsWith('data:') ||
        !/^[A-Za-z0-9+/]*={0,2}$/.test(base64)
      ) {
        return res.status(400).json({
          success: false,
          message: 'Attachment must contain valid Base64 data.',
        });
      }

      const fileBuffer = Buffer.from(base64, 'base64');

      // Maximum attachment size: 5 MB
      if (fileBuffer.length > 5 * 1024 * 1024) {
        return res.status(400).json({
          success: false,
          message: 'Attachment must be smaller than 5 MB.',
        });
      }

      attachments.push({
        filename: file.filename,
        content: fileBuffer,
      });
    }

    // 4. Escape user-provided content before inserting into HTML
    const safe = (value: unknown): string =>
      escapeHtml(value ?? 'Not provided');

    // 5. Build the email HTML
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>

      <body style="margin:0; padding:20px; background:#f4f6f4; font-family:Arial,sans-serif; color:#333;">

        <div style="max-width:700px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden;">

          <div style="background:#174D35; padding:25px; text-align:center;">
            <h1 style="color:#ffffff; margin:0;">ZORIMA GLOBAL TRADERS</h1>
            <p style="color:#e1eee5; margin-bottom:0;">
              New Export Enquiry
            </p>
          </div>

          <div style="padding:25px;">

            <h2 style="color:#174D35;">Buyer Information</h2>

            <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">
              <tr><td><strong>Full Name</strong></td><td>${safe(fullName)}</td></tr>
              <tr><td><strong>Company</strong></td><td>${safe(companyName)}</td></tr>
              <tr><td><strong>Business Email</strong></td><td>${safe(businessEmail)}</td></tr>
              <tr><td><strong>Phone / WhatsApp</strong></td><td>${safe(phoneWhatsapp)}</td></tr>
              <tr><td><strong>Country</strong></td><td>${safe(country)}</td></tr>
            </table>

            <hr style="border:none; border-top:1px solid #ddd; margin:25px 0;">

            <h2 style="color:#174D35;">Product Requirements</h2>

            <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">
              <tr><td><strong>Product Category</strong></td><td>${safe(productCategory)}</td></tr>
              <tr><td><strong>Product Name</strong></td><td>${safe(productName)}</td></tr>
              <tr><td><strong>Required Quantity</strong></td><td>${safe(requiredQuantity)} ${safe(quantityUnit)}</td></tr>
              <tr><td><strong>Packaging Preference</strong></td><td>${safe(packagingPreference)}</td></tr>
            </table>

            <hr style="border:none; border-top:1px solid #ddd; margin:25px 0;">

            <h2 style="color:#174D35;">Shipping Requirements</h2>

            <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">
              <tr><td><strong>Destination Port</strong></td><td>${safe(destinationPort)}</td></tr>
              <tr><td><strong>Incoterms</strong></td><td>${safe(incoterms)}</td></tr>
              <tr><td><strong>Required Delivery Date</strong></td><td>${safe(requiredDeliveryDate)}</td></tr>
            </table>

            <hr style="border:none; border-top:1px solid #ddd; margin:25px 0;">

            <h2 style="color:#174D35;">Additional Requirements</h2>

            <div style="background:#f4f6f4; padding:15px; border-radius:6px; white-space:pre-wrap;">
              ${safe(message)}
            </div>

            <p style="margin-top:20px;">
              <strong>Attachment:</strong>
              ${attachment ? safe(attachment.filename) : 'No attachment provided'}
            </p>

          </div>

          <div style="background:#174D35; padding:15px; text-align:center; color:#ffffff;">
            <p style="margin:0;">Zorima Global Traders</p>
            <small>Indian Food & Agricultural Export Specialist</small>
          </div>

        </div>

      </body>
      </html>
    `;

    // 6. Send email through Resend
    const { data, error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        'Zorima Global Traders <onboarding@resend.dev>',

      to: [OWNER_EMAIL],

      replyTo: businessEmail,

      subject: `New Export Enquiry - ${companyName} - ${productName || productCategory || 'Product Enquiry'}`,

      html,

      ...(attachments.length > 0 ? { attachments } : {}),
    });

    if (error) {
      console.error('Resend email error:', error);

      return res.status(500).json({
        success: false,
        message: 'Unable to send your enquiry at the moment.',
      });
    }

    // 7. Success response
    return res.status(200).json({
      success: true,
      message: 'Your enquiry has been submitted successfully.',
      emailId: data?.id,
    });

  } catch (error) {
    console.error('Send quote error:', error);

    return res.status(500).json({
      success: false,
      message: 'Something went wrong while submitting your enquiry.',
    });
  }
});

// Escape HTML to prevent HTML injection
function escapeHtml(value: unknown): string {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default router;
