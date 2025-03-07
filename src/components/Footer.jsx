import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold">Decision Delegate</h2>
              <p className="mt-2 text-gray-300">Outsourcing minor decisions since 2025</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul>
                <li className="mb-2"><Link href="#" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
                <li className="mb-2"><Link href="#" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                <li className="mb-2"><Link href="#" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Decision Delegate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }