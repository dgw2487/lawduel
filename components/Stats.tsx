
import React from 'react';
import { Map, Heart, User } from 'lucide-react';

const Stats = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 border-b-[2px] border-lawduel-lightGray pb-[60px]">
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center min-w-[200px]">
            <div className="mb-3 p-4 rounded-full bg-lawduel-lightGray hover:bg-lawduel-blue transition-all duration-300 group">
              <Map
                size={60}
                className="text-lawduel-navy group-hover:text-white transition-all duration-300 transform group-hover:scale-125"
              />
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-semibold font-montserrat mb-1">
                <span className="text-lawduel-blue block">Over 30K</span>
              </h3>
              <p className="text-lawduel-navy font-normal text-2xl">Clients like you</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center min-w-[200px]">
            <div className="mb-3 p-4 rounded-full bg-lawduel-lightGray hover:bg-lawduel-blue transition-all duration-300 group">
              <Heart
                size={60}
                className="text-lawduel-navy group-hover:text-white transition-all duration-300 transform group-hover:scale-125"
              />
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-semibold font-montserrat mb-1 min-w-[200px]">
                <span className="text-lawduel-blue block">5-star ratings</span>
              </h3>
              <p className="text-lawduel-navy font-normal text-2xl">
                by over 4,400 clients
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-3 p-4 rounded-full bg-lawduel-lightGray hover:bg-lawduel-blue transition-all duration-300 group">
              <User
                size={60}
                className="text-lawduel-navy group-hover:text-white transition-all duration-300 transform group-hover:scale-125"
              />
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-semibold font-montserrat mb-1">
                <span className="text-lawduel-blue block">Over 400</span>
              </h3>
              <p className="text-lawduel-navy font-normal text-2xl">
                Experienced lawyers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
