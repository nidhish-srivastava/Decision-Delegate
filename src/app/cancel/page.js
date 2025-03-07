import Link from "next/link";

export default function Cancel() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-yellow-100 flex items-center justify-center">
              <svg className="h-8 w-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Payment Cancelled</h2>
            <p className="mt-2 text-gray-600">
              Your payment was cancelled and you have not been charged.
            </p>
            <div className="mt-6">
              <Link href={`/`} className="text-indigo-600 hover:text-indigo-500">
                Return to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }