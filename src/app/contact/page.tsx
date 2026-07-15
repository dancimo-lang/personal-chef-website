import { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

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

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f2e8'}}>
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/planted_slo_onion_closeup.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            style={{objectPosition: 'center 25%'}}
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg" style={{color: '#d7e1c7'}}>
            Contact PLANTED SLO
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-lg mb-12" style={{color: '#002b00'}}>
          Fill out the form below and I'll get back to you within 24-48 hours.
          <br />
          Prefer email? <a href="mailto:slo.planted@gmail.com" className="text-green-400 hover:text-green-300">slo.planted@gmail.com</a>
        </p>
        
        <ContactForm />
        
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4" style={{color: '#002b00'}}>Service Areas</h3>
              <div className="grid grid-cols-2 gap-2 text-sm" style={{color: '#002b00'}}>
                <p>San Luis Obispo</p>
                <p>Paso Robles</p>
                <p>Pismo Beach</p>
                <p>Morro Bay</p>
                <p>Atascadero</p>
                <p>Arroyo Grande</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4" style={{color: '#002b00'}}>Quick Links</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <a href="/meal-prep-services" className="text-green-400 hover:text-green-300">Meal Prep Services</a>
                <a href="/private-dinners" className="text-green-400 hover:text-green-300">Private Dinners</a>
                <a href="/about" className="text-green-400 hover:text-green-300">About PLANTED SLO</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
