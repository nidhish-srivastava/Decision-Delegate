import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-indigo-600 font-bold text-xl">Decision Delegate</span>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="#how-it-works" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600">
              How It Works
            </Link>
            <Link href="#examples" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600">
              Examples
            </Link>
            <Link href="#pricing" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
