'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';


export default function Home() {
  const scrollToServices = () => {
    const element = document.getElementById('services-section');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f2e8'}}>
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/kale.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          {/* Logo in center */}
          <div className="mb-8">
            <Image
              src="/images/planted slo Logo v2.png"
              alt="PLANTED SLO Logo"
              width={320}
              height={320}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto"
              priority
            />
          </div>
          <h1 className="sr-only">
            PLANTED SLO
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-center" style={{color: '#d7e1c7', textShadow: '0 0 2px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.6), 0 0 8px rgba(0,0,0,0.4)'}}>
            Planted SLO provides plant-based personal chef services including small private dinners and meal-prep services. 
            We center nutrient-dense and memorable meals for those curious in or devoted to the vegan diet.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="px-10 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl"
              style={{backgroundColor: '#d7e1c7', color: '#002b00'}}
            >
              Contact
            </Link>
            <button
              onClick={scrollToServices}
              className="border-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl px-10 py-4"
              style={{borderColor: '#002b00', backgroundColor: '#002b00', color: '#d7e1c7'}}
            >
              View Services
            </button>
          </div>
        </div>
      </section>

      
      {/* Above-the-Fold Cut-off */}
      <div className="relative h-1" style={{backgroundColor: '#d7e1c7'}}></div>

      {/* Services Section */}
      <section id="services-section" className="py-6" style={{backgroundColor: '#d7e1c7'}}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16" style={{color: '#002b00'}}>
            Personal Chef Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Link href="/private-dinners" className="block">
                <div className="w-64 h-64 rounded-lg overflow-hidden flex items-center justify-center mx-auto mb-4 border-4 hover:opacity-80 transition-opacity cursor-pointer" style={{borderColor: '#002b00'}}>
                  <Image
                    src="/images/Forestdinner.png"
                    alt="Private Dinners"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: '#002b00'}}>Private Dinners</h3>
              </Link>
            </div>
            <div className="text-center">
              <Link href="/meal-prep-services" className="block">
                <div className="w-64 h-64 rounded-lg overflow-hidden flex items-center justify-center mx-auto mb-4 border-4 hover:opacity-80 transition-opacity cursor-pointer" style={{borderColor: '#002b00'}}>
                  <Image
                    src="/images/peanutsobanoodles.png"
                    alt="Meal Prep"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{color: '#002b00'}}>Meal Prep</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20" style={{backgroundColor: '#e8f5e8'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{color: '#002b00'}}>
            From Passion to Profession
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{color: '#002b00'}}>
            With years of professional and home cooking experience and a passion for creating memorable dining experiences, 
            I bring nutritious and memorable meals directly to your home. Every dish is prepared with 
            intention and is crafted to your exact preferences.
          </p>
          <Link 
            href="/about" 
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors"
          >
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{backgroundColor: '#d7e1c7'}}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16" style={{color: '#002b00'}}>
            What Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-800 mb-4">
                "An absolutely incredible experience! The food was restaurant-quality and the 
                service was impeccable. Our anniversary dinner was perfect."
              </p>
              <p className="font-semibold" style={{color: '#4a7c4e'}}>- Sarah & Michael</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-800 mb-4">
                "Weekly meal prep has changed our lives. Healthy, delicious meals ready to go - 
                we couldn't be happier with the service!"
              </p>
              <p className="font-semibold" style={{color: '#4a7c4e'}}>- Jennifer L.</p>
            </div>
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="py-20" style={{backgroundColor: '#4a7c4e'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-light mb-6" style={{color: '#d7e1c7'}}>
            Ready for an Unforgettable Dining Experience?
          </h2>
          <p className="text-xl mb-8" style={{color: '#d7e1c7'}}>
            Let's create your perfect menu and make your next meal truly special.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-green-700 px-8 py-4 rounded-full font-medium hover:bg-green-50 transition-all duration-300 shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
