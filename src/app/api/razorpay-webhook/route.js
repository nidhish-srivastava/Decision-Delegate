// app/api/razorpay-webhook/route.js
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request) {
  try {
    // Get the request body as text
    const bodyText = await request.text();
    
    // Parse the webhook payload
    const body = JSON.parse(bodyText);
    
    // Get the Razorpay signature from headers
    const razorpaySignature = request.headers.get('x-razorpay-signature');
    
    // Verify the signature (webhook request)
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    
    if (!webhookSecret) {
      return NextResponse.json(
        { error: 'Webhook secret not configured' },
        { status: 500 }
      );
    }
    
    // Create an HMAC using the webhook secret
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(bodyText)
      .digest('hex');
    
    // Verify that the signatures match
    if (razorpaySignature === expectedSignature) {
      console.log('Payment verified successfully');
      
      // Handle different event types
      const event = body.event;
      
      if (event === 'payment.authorized') {
        // Payment was authorized
        // Update your database, mark order as paid, etc.
      } else if (event === 'payment.failed') {
        // Payment failed
        // Update your database
      }
      
      return NextResponse.json({ status: 'ok' });
    } else {
      console.error('Invalid signature');
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}