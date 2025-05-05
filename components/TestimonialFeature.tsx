import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Star, Globe } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "/placeholder.svg",
    header: "After my accident, I felt like my world was crumbling…",
    content:
      "The attorneys at InjuryUp not only rebuilt my world but made it stronger. They fought fearlessly for my case, securing a settlement that far exceeded my expectations. Thanks to InjuryUp, I've been able to move forward with my life, without the shadow of medical debt and uncertainty. I'm forever grateful.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    image: "/placeholder.svg",
    header: "I didn't know where to turn after my injury…",
    content:
      "The team at InjuryUp gave me direction and hope when I needed it most. Their expertise in personal injury law made all the difference in my case. They handled everything while I focused on healing.",
    rating: 5,
  },
  {
    name: "Jessica Williams",
    image: "/placeholder.svg",
    header: "When the insurance company denied my claim…",
    content:
      "InjuryUp stepped in and turned everything around. They negotiated aggressively on my behalf and secured compensation that allowed me to get the medical care I desperately needed. Their dedication to my case was unwavering.",
    rating: 5,
  },
];

const TestimonialFeature = () => {
  return (
    <section className="pt-16 md:pt-24 pb-0">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-lawduel-navy mb-4 max-w-4xl mx-auto">
            Client Success Stories That Inspire and Deliver Change
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            What Our Clients Say Is What Really Matters
          </p>
        </div>

        <div className="mt-6 md:mt-6 mb-16">
          <div className="border-0">
            <div className="flex flex-col md:items-center md:flex-row gap-8 md:gap-12">
              <div className="w-full md:w-1/2 flex items-center justify-center animate-fade-in">
                <img 
                src="/images/sarah.webp" 
                alt="Sarah Johnson" 
                className="w-full md:max-w-xl h-full object-cover"
              />
              </div>
              <div className="p-6 md:px-6 flex flex-col w-full">
                <div>
                  <div className="flex mb-4 gap-1">
                    {[...Array(testimonials[0].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 fill-sky-500/75 text-sky-500/75"
                      />
                    ))}
                  </div>
                  <h3 className="text-5xl font-bold mb-4 text-lawduel-navy">
                    {testimonials[0].header}
                  </h3>
                  <p className="text-gray-700 text-xl mb-6 leading-relaxed">
                    {testimonials[0].content}
                  </p>
                 
                  <div className="flex items-center mt-1 text-sm text-gray-600 gap-1">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 48 48"
                      enableBackground="new 0 0 48 48"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      ></path>
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      ></path>
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                    </svg>
                    <span>Posted on Google</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-lawduel-orange hover:bg-lawduel-orange/90 text-white font-semibold px-8 py-6 w-full md:w-auto rounded-full">
                    CHECK ELIGIBILITY
                  </Button>

                  <div className="mt-4 flex items-center justify-center md:justify-start">
                    <BadgeCheck
                      className="mr-2 text-lawduel-orange"
                      size={20}
                    />
                    <span className="text-gray-700 ">
                      It&apos;s FREE if we don&apos;t win.
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mt-2 text-center md:text-left">
                    *Results may vary depending on your particular facts and
                    legal circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default TestimonialFeature;
