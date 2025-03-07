import Navbar from '../components/Navbar';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import DecisionForm from '../components/DecisionForm';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Decision Fatigue?</h1>
            <p className="text-xl mb-8">Outsource your minor decisions for just $1. Get personalized, thoughtful recommendations from our team of decision experts.</p>
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
              title="2. Pay Just $1" 
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
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
          <div className="max-w-lg mx-auto">
            <DecisionForm />
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
                  <h4 className="font-semibold">Sarah K.</h4>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">"I was paralyzed trying to choose between job offers. For $1, I got thoughtful analysis that helped me make the right choice!"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 font-bold">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Michael T.</h4>
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
                  <h4 className="font-semibold">Jessica L.</h4>
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