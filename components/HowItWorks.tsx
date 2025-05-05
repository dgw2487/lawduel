
import React from 'react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Describe Your Legal Needs',
      description: 'Tell us about your legal situation or requirements through our simple intake form.',
      highlight: 'Simple 5-minute process'
    },
    {
      number: '02',
      title: 'Get Matched With An Attorney',
      description: 'Our system pairs you with qualified legal professionals specialized in your needs.',
      highlight: 'Matched within hours'
    },
    {
      number: '03',
      title: 'Receive Legal Assistance',
      description: 'Work directly with your attorney through our secure platform to resolve your legal matter.',
      highlight: 'Transparent pricing'
    },
    {
      number: '04',
      title: 'Review & Follow-up',
      description: 'Rate your experience and stay connected for any follow-up questions or needs.',
      highlight: 'Continuous support'
    }
  ];

  return (
    <section id="how-it-works" className="lawduel-section bg-lawduel-darkNavy text-white">
      <div className="lawduel-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How LAWDUEL Works</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our streamlined process connects you with the right legal help quickly and efficiently, 
            without the typical complexity of finding and hiring an attorney.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-lg p-6 bg-opacity-10 bg-white
                        transition-all duration-300 hover:-translate-y-1 hover:bg-opacity-20
                        animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-lawduel-orange font-bold text-5xl mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-300 mb-4">{step.description}</p>
              <div className="bg-white/10 rounded px-3 py-1 inline-block text-sm text-lawduel-orange">
                {step.highlight}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="lawduel-btn px-8 py-6 text-lg">Find Your Attorney Now</Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
