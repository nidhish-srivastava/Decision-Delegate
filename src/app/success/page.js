// app/success/page.js
export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Payment Successful!</h2>
          <p className="mt-2 text-gray-600">
            Thank you for using Decision Delegate. Please check your email for a link to submit your decision details.
          </p>
          <p className="mt-6 text-sm text-gray-500">
            We'll provide your personalized recommendation within 24 hours.
          </p>
          <div className="mt-6">
            <a href="/" className="text-indigo-600 hover:text-indigo-500">
              Return to homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}