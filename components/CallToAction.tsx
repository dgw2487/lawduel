
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section id="contact" className="lawduel-section bg-lawduel-blue text-white">
      <div className="lawduel-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Solve Your Legal Challenge?
          </h2>
          <p className="text-lg mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Join thousands of satisfied clients who have found the right legal help through LAWDUEL. 
            Our network of attorneys is ready to assist you with your specific legal needs.
          </p>
          <div className="space-y-4 md:space-y-0 md:flex md:justify-center md:space-x-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button className="bg-white text-lawduel-blue hover:bg-gray-100 px-8 py-6 text-lg font-semibold w-full md:w-auto">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold w-full md:w-auto">
              Browse Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
