import { Metadata } from 'next';
import Image from 'next/image';
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

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f2e8'}}>
      <Navigation />
      {/* Full About Content with Merebio Photo */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <h1 className="text-4xl font-bold mb-2" style={{color: '#002b00'}}>About Me</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12 justify-center">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6" style={{color: '#002b00'}}>
              Welcome to Planted SLO, I am Meredith Haaker, a plant-based cook and baker, and I am thrilled you are here. I have been a foodie for the past 10 or so years, working professionally in bakeries and cooking vegan meals with my partner for larger catering gigs around the county. I grew up in Los Angeles, and moved to the Central Coast to attend CalPoly SLO. My B.S. is in Anthropology and Geography, with a focus on environmental sciences and ethnobotany. I take this degree with me in each endeavor, striving to connect people to sustainable food systems through mindful and ethical meals. My love for animals and personal health concerns drove me towards veganism. My love for food inspired me to work in multiple bakeries around San Luis Obispo where I learned the science of vegan cooking and baking. I've met so many passionate and skilled cooks and bakers who have encouraged and taught me much of what I know today. I thank each and every person who has taught me, shared meals with me, given me feedback, and inspired me to bring my morals with me into the kitchen. I dream of a world where food is free and local, people eat without shame or guilt, and where the land and its creatures are prioritized over profits. I hope to contribute to the construction of that world through Planted SLO's services which will connect you to locally sourced and ethically grown produce, expose you to a delicious variety of vegan meals, and encourage you to focus on your passions and skills.
            </p>
          </div>
          <div className="relative flex justify-center">
            <Image
              src="/images/planted_slo_outside_mer.jpg"
              alt="Planted SLO Outside"
              width={500}
              height={500}
              className="w-[72%] h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
