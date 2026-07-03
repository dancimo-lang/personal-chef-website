import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Personal Chef San Luis Obispo County | PLANTED SLO',
  description: 'Plant-based personal chef services in San Luis Obispo County. Private dinners, meal prep, cooking classes, and catering with fresh, locally-sourced ingredients.',
  keywords: 'personal chef San Luis Obispo, plant-based chef SLO County, meal prep San Luis Obispo, private dinner catering, cooking classes SLO, vegan chef San Luis Obispo County',
  openGraph: {
    title: 'Personal Chef Services in San Luis Obispo County | PLANTED SLO',
    description: 'Exquisite plant-based dining experiences in San Luis Obispo County. Private chef services, meal prep, and cooking classes.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function MenuPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f2e8'}}>
      <Navigation />
      <section className="py-12 md:py-20" style={{backgroundColor: '#e8f5e8'}}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-16" style={{color: '#002b00'}}>
            Personal Chef Services
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            <div className="text-center">
              <Link href="/private-dinners" className="block">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-lg overflow-hidden flex items-center justify-center mx-auto mb-4 border-4 hover:opacity-80 transition-opacity cursor-pointer" style={{borderColor: '#002b00'}}>
                  <img 
                    src="/images/Forestdinner.png" 
                    alt="Private Dinners"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3" style={{color: '#002b00'}}>Private Dinners</h3>
              </Link>
            </div>
            <div className="text-center">
              <Link href="/meal-prep-services" className="block">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-lg overflow-hidden flex items-center justify-center mx-auto mb-4 border-4 hover:opacity-80 transition-opacity cursor-pointer" style={{borderColor: '#002b00'}}>
                  <img 
                    src="/images/peanutsobanoodles.png" 
                    alt="Meal Prep"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4" style={{color: '#002b00'}}>Meal Prep</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
