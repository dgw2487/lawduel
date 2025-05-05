
import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-[#0F2A39] rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] text-white py-8 md:py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-normal mb-4">
              When lawyers compete, you win!
            </h2>

            <div className="flex space-x-4">
              <Link href="#" className="w-8 h-8 rounded-full bg-lawduel-white flex items-center justify-center text-gray-400 hover:text-lawduel-orange">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-lawduel-white flex items-center justify-center text-gray-400 hover:text-lawduel-orange">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-lawduel-white flex items-center justify-center text-gray-400 hover:text-lawduel-orange">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-lawduel-white flex items-center justify-center text-gray-400 hover:text-lawduel-orange">
                <Linkedin size={24} />
              </Link>
            </div>

          </div>

          <div className='flex flex-col items-center md:items-end'>
            <Button className="bg-lawduel-orange cursor-pointer text-lg text-white font-semibold rounded-full px-12 py-6 hover:bg-lawduel-orange/90 transition-all">
              Get Started
            </Button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
