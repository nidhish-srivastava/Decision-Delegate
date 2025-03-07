// app/api/create-checkout-session/route.js
import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request) {
  // Initialize Razorpay with your key_id and key_secret from Razorpay dashboard
  const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
  const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;
  
  const razorpay = new Razorpay({
    key_id: razorpayKeyId,
    key_secret: razorpayKeySecret,
  });
  
  try {
    // Parse the request body
    const requestData = await request.json();
    
    // Generate a unique order ID (you can use any method to create a unique ID)
    const orderId = 'order_' + Math.random().toString(36).substring(2, 15);
    
    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: 100, // Amount in paise (₹1.00)
      currency: 'INR',
      receipt: orderId,
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
      // Add any additional data you want to return to the frontend
      success_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/cancel`,
    });
  } catch (error) {
    console.error('Razorpay order creation error:', error);
    // Handle errors
    return NextResponse.json({ 
      error: error.message
    }, { status: 500 });
  }
}