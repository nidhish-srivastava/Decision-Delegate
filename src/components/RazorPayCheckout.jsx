// components/RazorpayCheckout.js
'use client';
import { useState } from 'react';

export default function RazorpayCheckout() {
  const [loading, setLoading] = useState(false);

  const makePayment = async (amount = 10000) => { // amount in paise (₹100)
    setLoading(true);
    
    try {
      // Call your API route to create a Razorpay order
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create order');
      }
      
      const data = await response.json();
      
      // Load the Razorpay SDK
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      document.body.appendChild(script);
      
      script.onload = () => {
        // Initialize Razorpay options
        const options = {
          key: data.key,
          amount: data.amount,
          currency: data.currency,
          name: 'Your Company Name',
          description: 'Product/Service Description',
          order_id: data.id,
          handler: function(response) {
            // Handle successful payment
            console.log('Payment successful', response);
            
            // You can redirect to success page or handle as needed
            window.location.href = data.success_url;
          },
          prefill: {
            name: '',
            email: '',
            contact: ''
          },
          notes: {
            address: 'Your Company Address'
          },
          theme: {
            color: '#3399cc'
          },
          modal: {
            ondismiss: function() {
              setLoading(false);
            }
          }
        };
        
        // Create Razorpay payment object
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };
      
      script.onerror = () => {
        setLoading(false);
        alert('Failed to load Razorpay SDK');
      };
      
    } catch (error) {
      console.error('Payment initialization error:', error);
      setLoading(false);
      alert('Something went wrong while initializing payment');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <button
        onClick={() => makePayment()}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? 'Processing...' : 'Proceed to Payment'}
      </button>
    </div>
  );
}