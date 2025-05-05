import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from 'lucide-react';

const MissionStatement = () => {
  return (
    <section className="w-full mb-12 md:mb-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px]">
          {/* Left side - Blue background with text */}
          <div
            className="w-full md:w-1/2 bg-lawduel-blue py-16 px-8 md:px-16 flex flex-col justify-between items-start animate-fade-in rounded-tl-[30px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[30px]"
            style={{ minHeight: "400px" }}
          >
            <div>
              <h3 className="text-base md:text-lg font-bold text-white mb-7 tracking-widest uppercase">
                Our Mission
              </h3>
              <h2 className="text-3xl md:text-4xl font-normal text-white mb-24 max-w-lg">
                We believe every accident victim deserves a fighting chance with
                top-tier legal representation.
              </h2>
            </div>

            <Button
              variant="link"
              className="p-0 text-lg font-light h-auto text-white hover:text-white/80 transition-all duration-300 flex items-center mt-8"
            >
              Get to know us <MoveRight className="ml-2 get-started-btn-icon" />
            </Button>
          </div>

          {/* Right side - Image */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-tl-[0px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[0px]">
            <div className="h-full w-full transform transition-all duration-700 hover:scale-110">
              <img
                src="/images/our-mission.webp"
                alt="Man with broken car"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
