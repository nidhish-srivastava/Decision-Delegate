'use client';
import { useState } from 'react';

export default function DecisionForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePayment = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          decisionType: 'standard',
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create Razorpay order');
      }
      
      const data = await response.json();
      
      if (!data.id) {
        throw new Error('No order ID received from Razorpay');
      }
      
      // Load Razorpay script dynamically
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      
      script.onload = () => {
        // Initialize Razorpay payment object
        const options = {
          key: data.key,
          amount: data.amount,
          currency: data.currency,
          name: "Decision Delegation Service",
          description: "Professional recommendation for your decision dilemma",
          order_id: data.id,
          handler: function (response) {
            // Store response data if needed
            localStorage.setItem('razorpayPaymentId', response.razorpay_payment_id);
            localStorage.setItem('razorpayOrderId', response.razorpay_order_id);
            localStorage.setItem('razorpaySignature', response.razorpay_signature);
            
            // Redirect to success page
            window.location.href = data.success_url;
          },
          prefill: {
            name: "",
            email: "",
            contact: ""
          },
          notes: {
            decisionType: 'standard'
          },
          theme: {
            color: "#6366F1" // Indigo color to match your button
          },
          modal: {
            ondismiss: function() {
              setLoading(false);
            }
          }
        };
        
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };
      
      script.onerror = () => {
        setError('Failed to load Razorpay checkout. Please try again.');
        setLoading(false);
      };
      
      document.body.appendChild(script);
      
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
      setError(error.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Ready to delegate your decision?</h3>
      <p className="mb-6 text-gray-600">
        Tell us what's on your mind, and our team of decision experts will help you choose. 
        After payment, you'll be directed to our secure decision form.
      </p>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors disabled:opacity-70"
      >
        {loading ? 'Processing...' : 'Delegate a Decision for ₹1'}
      </button>
      <p className="mt-4 text-sm text-gray-500">
        We aim to respond within 24 hours with a personalized recommendation
      </p>
    </div>
  );
}