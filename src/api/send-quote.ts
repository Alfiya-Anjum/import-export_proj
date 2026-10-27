import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:3000',
];

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  }

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

    // Basic validation
    if (
      !fullName ||
      !companyName ||
      !businessEmail ||
      !phoneWhatsapp ||
      !country ||
      !requiredQuantity
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields.',
      });
    }

    // Build email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>New Export RFQ</title>
        </head>

        <body style="
          margin: 0;
          padding: 0;
          background: #f4f6f8;
          font-family: Arial, Helvetica, sans-serif;
          color: #1f2937;
        ">

          <div style="
            max-width: 700px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #e5e7eb;
          ">

            <div style="
              background: #071A2B;
              padding: 28px;
              color: white;
            ">
              <h1 style="
                margin: 0;
                font-size: 24px;
              ">
                New Export RFQ Enquiry
              </h1>

              <p style="
                margin: 8px 0 0;
                color: #cbd5e1;
                font-size: 14px;
              ">
                Zorima Global Traders
              </p>
            </div>

            <div style="padding: 30px;">

              <h2 style="
                color: #174D35;
                font-size: 18px;
                margin-top: 0;
              ">
                Buyer & Company Details
              </h2>

              <table style="
                width: 100%;
                border-collapse: collapse;
                font-size: 14px;
              ">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Buyer Name:</td>
                  <td style="padding: 8px 0;">${escapeHtml(fullName)}</td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Company:</td>
                  <td style="padding: 8px 0;">${escapeHtml(companyName)}</td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                  <td style="padding: 8px 0;">
                    <a href="mailto:${escapeHtml(businessEmail)}">
                      ${escapeHtml(businessEmail)}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">WhatsApp / Phone:</td>
                  <td style="padding: 8px 0;">${escapeHtml(phoneWhatsapp)}</td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Country:</td>
                  <td style="padding: 8px 0;">${escapeHtml(country)}</td>
                </tr>
              </table>

              <hr style="
                border: none;
                border-top: 1px solid #e5e7eb;
                margin: 25px 0;
              " />

              <h2 style="
                color: #174D35;
                font-size: 18px;
              ">
                Commodity & Shipment
              </h2>

              <table style="
                width: 100%;
                border-collapse: collapse;
                font-size: 14px;
              ">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Category:</td>
                  <td style="padding: 8px 0;">
                    ${escapeHtml(productCategory)}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Product:</td>
                  <td style="padding: 8px 0;">
                    ${escapeHtml(productName || 'Standard Selection')}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Quantity:</td>
                  <td style="padding: 8px 0;">
                    ${escapeHtml(requiredQuantity)}
                    ${escapeHtml(quantityUnit)}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Packaging:</td>
                  <td style="padding: 8px 0;">
                    ${escapeHtml(packagingPreference)}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Destination Port:</td>
                  <td style="padding: 8px 0;">
                    ${escapeHtml(destinationPort || 'To be confirmed')}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Incoterms:</td>
                  <td style="padding: 8px 0;">
                    ${escapeHtml(incoterms)}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">
                    Required Delivery:
                  </td>
                  <td style="padding: 8px 0;">
                    ${escapeHtml(requiredDeliveryDate || 'Not specified')}
                  </td>
                </tr>
              </table>

              ${
                message
                  ? `
                    <hr style="
                      border: none;
                      border-top: 1px solid #e5e7eb;
                      margin: 25px 0;
                    " />

                    <h2 style="
                      color: #174D35;
                      font-size: 18px;
                    ">
                      Additional Requirements
                    </h2>

                    <div style="
                      background: #f8fafc;
                      border: 1px solid #e5e7eb;
                      border-radius: 8px;
                      padding: 15px;
                      white-space: pre-wrap;
                      font-size: 14px;
                    ">
                      ${escapeHtml(message)}
                    </div>
                  `
                  : ''
              }

              ${
                attachment
                  ? `
                    <hr style="
                      border: none;
                      border-top: 1px solid #e5e7eb;
                      margin: 25px 0;
                    " />

                    <p style="
                      font-size: 14px;
                      color: #475569;
                    ">
                      📎 <strong>Attachment:</strong>
                      ${escapeHtml(attachment.filename)}
                    </p>
                  `
                  : ''
              }

            </div>

            <div style="
              background: #f8fafc;
              padding: 20px 30px;
              border-top: 1px solid #e5e7eb;
              font-size: 12px;
              color: #64748b;
            ">
              This enquiry was submitted through the
              Zorima Global Traders website.
            </div>

          </div>

        </body>
      </html>
    `;

    // Prepare attachment
    const attachments = attachment
      ? [
          {
            filename: attachment.filename,
            content: Buffer.from(attachment.content, 'base64'),
          },
        ]
      : [];

    // Send email
    const { data, error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        'Zorima Website <onboarding@resend.dev>',

      to: ['bmtbdr@gmail.com'],

      replyTo: businessEmail,

      subject: `New Export RFQ — ${companyName} — ${
        productName || productCategory
      }`,

      html: emailHtml,

      attachments,
    });

    if (error) {
      console.error('Resend error:', error);

      return res.status(500).json({
        success: false,
        message: 'Email could not be sent.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Enquiry sent successfully.',
      emailId: data?.id,
    });
  } catch (error) {
    console.error('Server error:', error);

    return res.status(500).json({
      success: false,
      message: 'Something went wrong while sending the enquiry.',
    });
  }
}


/**
 * Prevent HTML injection in the email body.
 */
function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}