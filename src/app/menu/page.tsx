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
      <section className="py-20" style={{backgroundColor: '#e8f5e8'}}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16" style={{color: '#002b00'}}>
            Personal Chef Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Link href="/private-dinners" className="block">
                <div className="w-64 h-64 rounded-lg overflow-hidden flex items-center justify-center mx-auto mb-4 border-4 hover:opacity-80 transition-opacity cursor-pointer" style={{borderColor: '#002b00'}}>
                  <img 
                    src="/images/Forestdinner.png" 
                    alt="Private Dinners"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: '#002b00'}}>Private Dinners</h3>
              </Link>
            </div>
            <div className="text-center">
              <Link href="/meal-prep-services" className="block">
                <div className="w-64 h-64 rounded-lg overflow-hidden flex items-center justify-center mx-auto mb-4 border-4 hover:opacity-80 transition-opacity cursor-pointer" style={{borderColor: '#002b00'}}>
                  <img 
                    src="/images/peanutsobanoodles.png" 
                    alt="Meal Prep"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{color: '#002b00'}}>Meal Prep</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
