
import React from 'react';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Desktop Layout */}
        <div className="bg-[#e6e6e6] rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] hidden md:block relative min-h-[800px]">
          {/* Corner Images - Desktop */}
          <div className="absolute top-0 left-[65px]">
            <Image 
              src="/images/lawyer1.webp" 
              alt="Lawyers" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-[50px] right-0">
            <Image 
              src="/images/lawyer2.webp" 
              alt="Legal Tech lawyer" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0" >
            <Image 
              src="/images/lawyer3.webp" 
              alt="Accidents lawyer" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-[100px]">
            <Image 
              src="/images/lawyer4.webp" 
              alt="Cars lawyer" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Content - Desktop */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-lawduel-navy mb-6 font-montserrat md:max-w-[630px] mx-auto">
              Where lawyers compete to represent you
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-lawduel-navy mb-8 md:max-w-[500px] mx-auto font-montserrat">
              A top-rated network committed to empower automobile accident victims. See why 30,000+ choose LAWDUEL.
            </p>
            <Button className="get-started-btn bg-lawduel-orange text-white text-xl font-semibold rounded-full px-9 py-7 hover:bg-lawduel-orange/90 transition-all hover:-translate-y-1 hover:shadow-lg">
              Get Started
              <MoveRight className="ml-2 get-started-btn-icon" />
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center">
          {/* Image Grid - Mobile */}
          <div className="grid grid-cols-2 gap-4 w-full mb-8">
            <div className="w-full aspect-square">
            <Image 
              src="/images/lawyer1.webp" 
              alt="Lawyers" 
              className="w-full h-full object-cover"
            />
            </div>
            <div className="w-full aspect-square">
            <Image 
              src="/images/lawyer2.webp" 
              alt="Lawyers" 
              className="w-full h-full object-cover"
            />
            </div>
            <div className="w-full aspect-square" >
            <Image 
              src="/images/lawyer3.webp" 
              alt="Lawyers" 
              className="w-full h-full object-cover"
            />
            </div>
            <div className="w-full aspect-square">
            <Image 
              src="/images/lawyer4.webp" 
              alt="Lawyers" 
              className="w-full h-full object-cover"
            />
            </div>
          </div>

          {/* Text Content - Mobile */}
          <div className="text-center animate-fade-in">
            <h1 className="text-2xl font-bold text-lawduel-navy mb-4 font-montserrat">
              Where lawyers compete to represent you
            </h1>
            <p className="text-base text-lawduel-navy mb-6 font-montserrat">
              A top-rated network committed to empower automobile accident victims. See why 30,000+ choose LAWDUEL.
            </p>
            <Button className="bg-lawduel-orange text-white font-semibold rounded-full px-6 py-4 hover:bg-lawduel-orange/90 transition-all w-full md:w-auto">
              Get Started
              <MoveRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* This is the problematic part - fixing by removing jsx property */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
