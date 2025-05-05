'use client';
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 py-2 md:py-2">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <div className="relative w-[220px] h-[40px] md:w-[340px] md:h-[62px]">
              <Image
                src="/images/logo.webp"
                alt="LAWDUEL Logo"
                fill
                
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-[65px]">
            <a href="#programs" className="text-lawduel-navy lg:text-xl hover:text-lawduel-orange transition-colors">Programs</a>
            <a href="#resources" className="text-lawduel-navy lg:text-xl hover:text-lawduel-orange transition-colors">Resources</a>
            <a href="#about" className="text-lawduel-navy lg:text-xl hover:text-lawduel-orange transition-colors">About Us</a>
          </nav>

          {/* Get Started Button */}
          <div className="hidden lg:block">
            <Button className="cursor-pointer bg-lawduel-orange md:text-lg text-white font-semibold rounded-full px-9 py-6 hover:bg-lawduel-orange/90 transition-all hover:-translate-y-1 hover:shadow-lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Button className='text-2xl' variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-8 w-8 text-2xl" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#programs" className="text-lawduel-navy hover:text-lawduel-orange transition-colors px-2 py-1">Programs</a>
              <a href="#resources" className="text-lawduel-navy hover:text-lawduel-orange transition-colors px-2 py-1">Resources</a>
              <a href="#about" className="text-lawduel-navy hover:text-lawduel-orange transition-colors px-2 py-1">About Us</a>
              <Button className="bg-lawduel-orange text-white font-semibold rounded-full px-6 py-2 hover:bg-lawduel-orange/90 transition-all w-full">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
