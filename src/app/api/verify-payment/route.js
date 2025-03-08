// app/api/verify-payment/route.js
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json();
    
    // Get your webhook secret from environment variables
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    
    if (!secret) {
      return NextResponse.json(
        { error: 'Razorpay webhook secret not configured' },
        { status: 500 }
      );
    }
    
    // Create the signature verification string
    const generated_signature = crypto
      .createHmac('sha256', secret)
      .update(razorpay_order_id + '|' + razorpay_payment_id)
      .digest('hex');
    
    // Verify that the signature we generated matches the one Razorpay sent
    if (generated_signature === razorpay_signature) {
      // Payment is verified
      return NextResponse.json({ verified: true });
    } else {
      // Payment verification failed
      return NextResponse.json({ verified: false }, { status: 400 });
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}