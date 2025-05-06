
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'James Wilson',
      role: 'Business Owner',
      content: 'LAWDUEL saved me thousands in legal fees and countless hours of stress. Their business compliance service keeps my company protected without breaking the bank.',
      image: '/images/james.webp',
      initials: 'JW',
      rating: 5
    },
    {
      name: 'Julia Martinez',
      role: 'Entrepreneur',
      content: 'When we needed our contracts reviewed quickly, LAWDUEL delivered within 24 hours with expert feedback that prevented a costly mistake.',
      image: '/images/julia.webp',
      initials: 'JM',
      rating: 5
    },
    {
      name: 'Peter Thompson',
      role: 'Homeowner',
      content: 'The attorney I was matched with through LAWDUEL helped resolve my property dispute effectively. The whole process was transparent and surprisingly affordable.',
      image: "/images/peter.webp",
      initials: 'PT',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'I was impressed by how quickly LAWDUEL connected me with the right attorney for my specific legal needs. The service exceeded my expectations in every way.',
      image: "/images/julia.webp",
      initials: 'SJ',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Startup Founder',
      content: 'LAWDUEL made navigating complex legal matters straightforward and accessible. Their attorneys are top-notch professionals who really care about their clients.',
      image: "/images/julia.webp",
      initials: 'MC',
      rating: 5
    },
    {
      name: 'Jessica Williams',
      role: 'Real Estate Investor',
      content: "After struggling with legal issues for months, LAWDUEL connected me with an attorney who resolved everything in weeks. I couldn't be more grateful.",
      image: "/images/julia.webp",
      initials: 'JW',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="bg-lawduel-lightGray pb-16 md:pb-24">
      <div className="lawduel-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-4 max-w-4xl mx-auto text-lawduel-navy mb-4">We Have Hundreds of 5-Star Reviews From Our Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Read what our clients have said about working with us
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <Card className="bg-white py-4 rounded-xl transition-shadow duration-300 h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <StarIcon key={i} className="h-4 w-4 fill-sky-500/75 text-sky-500/75" />
                          ))}
                        </div>
                        <p className="text-gray-700 italic flex-grow">{testimonial.content}</p>
                        <div className="flex items-center mt-4">
                          <Image 
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="me-4 object-cover"
                          />
                          <div>
                            <p className="font-semibold text-lawduel-navy">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static mx-2 rounded-full bg-blue-500 hover:bg-blue-600 border-0 text-white" />
              <CarouselNext className="relative static mx-2 rounded-full bg-blue-500 hover:bg-blue-600 border-0 text-white" />
            </div>
          </Carousel>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="w-full">
                  <Card className="bg-white py-4 rounded-xl transition-shadow duration-300 h-full">
                    <CardContent className="p-5">
                      <div className="flex justify-center mb-4">
                          <Image 
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="me-4 object-cover"
                          />
                      </div>
                      <div className="flex justify-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4 fill-blue-500 text-blue-500" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic text-center mb-3">{testimonial.content}</p>
                      <div className="text-center">
                        <p className="font-semibold text-lawduel-navy">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="relative static mx-1 rounded-full bg-blue-500 hover:bg-blue-600 border-0 text-white h-8 w-8" />
              <CarouselNext className="relative static mx-1 rounded-full bg-blue-500 hover:bg-blue-600 border-0 text-white h-8 w-8" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
