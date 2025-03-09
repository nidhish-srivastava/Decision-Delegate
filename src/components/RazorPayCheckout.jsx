'use client';
import { useState } from 'react';

export default function RazorpayCheckout() {
  const [loading, setLoading] = useState(false);

  const makePayment = async (amount = 100) => { // amount in paise (₹1)
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
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create order');
      }
      
      const data = await response.json();
      
      // Load the Razorpay SDK dynamically if not already loaded
      if (!window.Razorpay) {
        await loadRazorpayScript();
      }
      
      // Initialize Razorpay options
      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: 'Decision Delegate',
        description: 'Outsource your minor decisions for just ₹99 . Get personalized, thoughtful recommendations from our team of decision experts.',
        order_id: data.id,
        handler: function(response) {
          // Handle successful payment - log the response
          console.log('Payment successful', response);
          
          // Directly redirect to success page without verification
          window.location.href = data.success_url;
        },
        prefill: {
          name: '',
          email: '',
          contact: ''
        },
        notes: {
          address: 'Bagalur Cross,Yelahanka,Bangalore'
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
      
    } catch (error) {
      console.error('Payment initialization error:', error);
      setLoading(false);
      alert(`Payment initialization failed: ${error.message}`);
    }
  };

  // Function to load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = resolve;
      script.onerror = () => reject(new Error('Failed to load Razorpay SDK'));
      document.body.appendChild(script);
    });
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