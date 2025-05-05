
import React from 'react';
import { Circle } from 'lucide-react';
import Image from 'next/image';

const ImprovedHowItWorks = () => {
  const steps = [
    {
      icon: <Circle size={32} strokeWidth={0} />,
      title: 'Share your case',
      description: 'Provide details about your accident and the legal help you need.'
    },
    {
      icon: <Circle size={32} fill="white" strokeWidth={0} />,
      title: 'Let lawyers compete',
      description: 'Personal injury lawyers review your case and submit their proposal.'
    },
    {
      icon: <Circle size={32} fill="white" strokeWidth={0} />,
      title: 'Compare your options',
      description: 'Review lawyer proposed terms. Choose the one that aligns with your needs and goals.'
    },
    {
      icon: <Circle size={32} fill="white" strokeWidth={0} />,
      title: 'Get to work',
      description: 'Once you\'ve selected your lawyer, they\'ll get to work on building a strong case for you.'
    }
  ];

  return (
    <section id="how-it-works" className="lawduel-section pt-12 pb-16">
      <div className="lawduel-container mx-auto">
        <div className="text-left w-full md:max-w-3xl mb-8 md:px-6 animate-fade-in">
          <p className="text-gray-700 font-semibold text-2xl md:text-4xl mb-8 md:mb-12">
            Find a lawyer who fights for your case with strategy and results in mind - 
            not distractions or hidden motives.
          </p>
        </div>

        <div className="flex flex-col md:items-center md:flex-row gap-8 md:gap-12">
          {/* Left column - Image */}
          <div className="w-full md:w-1/3 flex items-center justify-center animate-fade-in">
            <Image 
              src="/images/How-it-works.webp" 
              alt="Man holding a phone" 
              width={625}
              height={650}
              className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              style={{maxHeight: '500px'}}
            />
          </div>

          {/* Right column - Steps */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-lawduel-navy">How it works</h2>
            
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 animate-slide-in"
                  // style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-lawduel-blue flex items-center justify-center">
                      <div className="relative">
                        {/* {step.icon} */}
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-0 text-lawduel-navy">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="mt-8">
              <Button className="lawduel-btn">Get Started Now</Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImprovedHowItWorks;
