// app/api/create-checkout-session/route.js
import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request) {
  // Initialize Razorpay with your key_id and key_secret from Razorpay dashboard
  const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
  const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!razorpayKeyId || !razorpayKeySecret) {
    return NextResponse.json(
      { error: 'Razorpay API keys not configured' },
      { status: 500 }
    );
  }

  const razorpay = new Razorpay({
    key_id: razorpayKeyId,
    key_secret: razorpayKeySecret,
  });

  try {
    // Parse the request body
    const requestData = await request.json();
    
    // Extract amount from the request or use a default
    const amount = requestData.amount || 100; // Default 100 paise (₹1)
    
    // Generate a unique receipt ID
    const receipt = 'receipt_' + Date.now();

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: amount,
      currency: 'INR',
      receipt: receipt,
      notes: {
        service: 'decision-delegate',
      },
    });

    // Return the order details needed for frontend integration
    return NextResponse.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      key: razorpayKeyId, // Frontend needs this public key
      success_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/cancel`,
    });
  } catch (error) {
    console.error('Razorpay order creation error:', error);
    
    // Return proper error response
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}