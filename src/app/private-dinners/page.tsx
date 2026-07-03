import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Private Dinners - PLANTED SLO | San Luis Obispo',
  description: 'Exclusive private dining experiences with plant-based cuisine. Intimate dinners crafted for you and your guests in San Luis Obispo County.',
  type: 'website',
  locale: 'en_US',
};

export default function PrivateDinners() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f2e8'}}>
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-16 md:py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/dinnertable.png)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{color: '#d7e1c7'}}>
            Private Dinners
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto px-4" style={{color: '#d7e1c7'}}>
            Intimate plant-based dinners that create memorable moments.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{backgroundColor: '#d7e1c7', color: '#002b00'}}
          >
            Book Your Private Dinner
          </Link>
        </div>
      </section>

      {/* Experience Details */}
      <section className="py-12 md:py-20" style={{backgroundColor: '#e8f5e8'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{color: '#002b00'}}>
                The Experience
              </h2>
              <ul className="space-y-4" style={{color: '#002b00'}}>
                <li className="flex items-start">
                  <span className="mr-3">+</span>
                  <span>Custom plant-based menus</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">+</span>
                  <span>Intimate settings for 1-8 guests</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">+</span>
                  <span>Fresh home cooked meal</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">+</span>
                  <span>Wine pairing available</span>
                </li>
                                <li className="flex items-start">
                  <span className="mr-3">+</span>
                  <span>Special occasions & celebrations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">+</span>
                  <span>Will accommodate for gluten free and allergies</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{color: '#002b00'}}>
                Perfect For
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{backgroundColor: '#d7e1c7', color: '#002b00'}}>
                    <span>1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{color: '#002b00'}}>Anniversary Dinners</h3>
                    <p className="text-gray-700">Celebrate your special milestone with an intimate, personalized dining experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{backgroundColor: '#d7e1c7', color: '#002b00'}}>
                    <span>2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{color: '#002b00'}}>Dinner Parties</h3>
                    <p className="text-gray-700">Host elegant dinner parties without the stress of cooking and cleanup.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{backgroundColor: '#d7e1c7', color: '#002b00'}}>
                    <span>3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{color: '#002b00'}}>Business Entertaining</h3>
                    <p className="text-gray-700">Impress clients and colleagues with sophisticated plant-based cuisine.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{backgroundColor: '#d7e1c7', color: '#002b00'}}>
                    <span>4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{color: '#002b00'}}>Family Gatherings</h3>
                    <p className="text-gray-700">Bring family together around delicious, health-conscious meals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="py-12 md:py-20" style={{backgroundColor: '#4a7c4e'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{color: '#d7e1c7'}}>
            Ready for an Unforgettable Dinner?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 px-4" style={{color: '#d7e1c7'}}>
            Let us create a memorable dining experience tailored just for you.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-green-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium hover:bg-green-50 transition-all duration-300 shadow-lg text-sm sm:text-base"
          >
            Plan Your Dinner
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
