import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Meal Prep Services - PLANTED SLO | San Luis Obispo',
  description: 'Weekly meal preparation services with fresh, plant-based ingredients. Maintain your healthy lifestyle effortlessly with personalized meal prep.',
  type: 'website',
  locale: 'en_US',
};

export default function MealPrepServices() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f2e8'}}>
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/peanutsobanoodles.png)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#d7e1c7'}}>
            Meal Prep Services
          </h1>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{backgroundColor: '#d7e1c7', color: '#002b00'}}
          >
            Start Your Meal Prep Journey
          </Link>
        </div>
      </section>

      {/* Paragraph Section */}
      <section className="py-20" style={{backgroundColor: '#e8f5e8'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-6 items-center">
            {/* Left Images */}
            <div className="col-span-12 md:col-span-3 space-y-8">
              <div className="w-full h-48 rounded-lg overflow-hidden">
                <img 
                  src="/images/peanutsobanoodles.png" 
                  alt="Meal Prep 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-48 rounded-lg overflow-hidden">
                <img 
                  src="/images/falafelplate.png" 
                  alt="Meal Prep 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Center Paragraph */}
            <div className="col-span-12 md:col-span-6 text-center">
              <p className="text-xl md:text-2xl" style={{color: '#002b00'}}>
                Do you want to incorporate more vegan meals into your diet?
                <br /><br />
                Do you want to eat fresh food but don't have time to prepare it yourself?
                <br /><br />
                Planted SLO can seamlessly incorporate those plant-based meals and give that valuable time back to you with our <strong>MEAL PREP SERVICES</strong> offering.
              </p>
            </div>
            
            {/* Right Images */}
            <div className="col-span-12 md:col-span-3 space-y-8">
              <div className="w-full h-48 rounded-lg overflow-hidden">
                <img 
                  src="/images/cucumbersalad.png" 
                  alt="Meal Prep 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-48 rounded-lg overflow-hidden">
                <img 
                  src="/images/dinnertable.png" 
                  alt="Meal Prep 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20" style={{backgroundColor: '#e8f5e8'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="space-y-16">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6" style={{color: '#002b00'}}>
                What are Meal Prep services?
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto" style={{color: '#002b00'}}>
                A <strong>MEAL PREP SERVICES</strong> is provided to a household that wants fresh, ready-to-eat meals in their fridge 1-5 days per week. These plant-based meals will be made in your own home by Meredith, stored in your prefered containers, and labeled with reheating instructions. These services give time back to the family or individual and help to get more locally grown, plant-based meals into your weekly routine.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6" style={{color: '#002b00'}}>
                How It Works
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto" style={{color: '#002b00'}}>
                You will take a questionnaire asking about your household's personal food needs. We will set up a time for a site visit, and we will walk through what a meal prep-day in your house will look like. During the site-visit, I will take note of space, available equipment, and we will finalize your personalized menu. On the day of service, I will purchase the groceries needed for the meal(s) then come to your house to prepare and store the meals, clean up the kitchen, and accept your payment and grocery reimbursement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{backgroundColor: '#4a7c4e'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{color: '#d7e1c7'}}>
            Ready to Simplify Your Week?
          </h2>
          <p className="text-xl mb-8" style={{color: '#d7e1c7'}}>
            Let us handle the meal planning and prep so you can focus on what matters most.
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
