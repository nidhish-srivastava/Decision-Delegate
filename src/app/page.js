import Navbar from '../components/Navbar';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import RazorpayCheckout from '../components/RazorPayCheckout';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Decision Fatigue?</h1>
            <p className="text-xl mb-8">Outsource your minor decisions for just &#8377;99 . Get personalized, thoughtful recommendations from our team of decision experts.</p>
            <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Delegate Now
            </button>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="📝" 
              title="1. Submit Your Decision" 
              description="Share the details of the decision you're struggling with. It can be as simple as 'What should I have for dinner?' or as complex as 'Which programming language should I learn next?'"
            />
            <FeatureCard 
              icon="💳" 
              title="2. Pay Just &#8377;99" 
              description="Make a secure payment through our Stripe integration. No subscriptions, no hidden fees—just a simple one-time payment."
            />
            <FeatureCard 
              icon="✅" 
              title="3. Receive Your Answer" 
              description="Within 24 hours, our team will send you a personalized recommendation based on your specific situation and preferences."
            />
          </div>
        </div>
      </section>
      
      {/* Examples Section */}
      <section id="examples" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Decisions We've Helped With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic text-gray-600 mb-4">"Should I buy the new iPhone or wait for the next model?"</p>
              <p className="text-gray-800">After considering your usage patterns and budget, we recommended waiting 3 months for the new model which would offer better value for your specific needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic text-gray-600 mb-4">"What book should I read next based on my recent favorites?"</p>
              <p className="text-gray-800">We analyzed your reading history and suggested 'Project Hail Mary' by Andy Weir, which matched your preference for character-driven sci-fi with optimistic themes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic text-gray-600 mb-4">"Which of these three Netflix shows should I start watching tonight?"</p>
              <p className="text-gray-800">Based on your mood and available time, we recommended starting with 'The Queen's Gambit' as it best matched your current preference for inspiring stories with strong character development.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic text-gray-600 mb-4">"Should I cook pasta or order takeout for my date tonight?"</p>
              <p className="text-gray-800">Considering your cooking skills and the impression you wanted to make, we suggested a simple but impressive pasta recipe that would showcase your effort without risk of disaster.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Simple Pricing</h2>
      <p className="max-w-2xl mx-auto text-xl text-gray-500">One-time payment, lifetime access</p>
    </div>
    
    <div className="relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="bg-gray-50 px-4 text-sm text-gray-500 font-medium">
          Secure Payment
        </span>
      </div>
    </div>
    
    <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden lg:max-w-3xl lg:mx-auto">
      <div className="px-6 py-8 bg-indigo-600 sm:p-10 sm:pb-6">
        <div className="flex items-center justify-center">
          <h3 className="text-2xl font-extrabold text-white tracking-tight">Lifetime Access</h3>
          <span className="ml-4 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
            Best Value
          </span>
        </div>
        <div className="mt-4 flex items-baseline text-center justify-center">
          <span className="text-5xl font-extrabold text-white tracking-tight">₹99</span>
          <span className="ml-1 text-2xl font-medium text-indigo-100 line-through">₹999</span>
        </div>
        <p className="mt-5 text-lg text-indigo-100 text-center">Pay once, get all premium features forever.</p>
      </div>
      <div className="px-6 pt-6 pb-8 bg-white sm:p-10">
        <ul className="space-y-4">
          {['Lifetime updates & support', 'All premium features included', 'No recurring fees or hidden charges'].map((feature) => (
            <li key={feature} className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="ml-3 text-base text-gray-700">{feature}</p>
            </li>
          ))}
        </ul>
        
        <div className="mt-8 rounded-md">
          <div className="max-w-md mx-auto">
            <RazorpayCheckout />
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <svg className="mr-1.5 h-4 w-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure one-time payment
          </span>
        </div>
      </div>
    </div>
    
    <div className="mt-8 text-center">
      <p className="text-base text-gray-500">
        Have questions? <a href="#contact" className="font-medium text-indigo-600 hover:text-indigo-500">Contact our team</a>
      </p>
    </div>
  </div>
</section>
      
      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 font-bold">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Kushagra Sharma</h4>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">"I was paralyzed trying to choose between job offers. For &#8377;99, I got thoughtful analysis that helped me make the right choice!"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 font-bold">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Rohan</h4>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">"Couldn't decide on a birthday gift for my wife. Their recommendation was perfect and saved me hours of worry!"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 font-bold">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Aditya Kumar</h4>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">"Best dollar I've ever spent! Used it to decide on a vacation destination and ended up having the trip of a lifetime."</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}