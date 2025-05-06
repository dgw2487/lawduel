import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionQuestions() {
  return (
    <section className="pb-6 md:pb-16">
      <div className="container mx-auto px-6 md:px-24 animate-[slide-in-right_0.7s_ease-out]">
        <div className="text-center mb-16 md:max-w-lg mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-4 max-w-4xl mx-auto text-lawduel-navy mb-4">Your Questions,
          Answered </h2>
        </div>
        <Accordion type="single" collapsible className="w-full md:max-w-6xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger className='no-underline p-4 md:p-6'><h4 className='text-2xl no-underline'>Who is LAWDUEL?</h4></AccordionTrigger>
            <AccordionContent className='bg-white p-4 md:p-6 rounded-lg shadow-md'>
              <h4 className='text-2xl mb-3'>What is LAWDUEL management?</h4>
              <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lorem a nulla vulputate egestas. Etiam et dictum risus. Proin laoreet maximus lectus, sed suscipit massa consequat ac. Nam nec mattis metus. Donec condimentum dolor nec bibendum lobortis. Praesent molestie nisi et commodo finibus.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className='no-underline p-4 md:p-6'><h4 className='text-2xl no-underline'>How does LAWDUEL help you?</h4></AccordionTrigger>
            <AccordionContent className='bg-white p-4 md:p-6 rounded-lg shadow-md'>
              <h4 className='text-2xl mb-3'>How does LAWDUEL help you?</h4>
              <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lorem a nulla vulputate egestas. Etiam et dictum risus. Proin laoreet maximus lectus, sed suscipit massa consequat ac. Nam nec mattis metus. Donec condimentum dolor nec bibendum lobortis. Praesent molestie nisi et commodo finibus.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className='no-underline p-4 md:p-6'><h4 className='text-2xl no-underline'>Want to be a LAWDUEL agent?</h4></AccordionTrigger>
            <AccordionContent className='bg-white p-4 md:p-6 rounded-lg shadow-md'>
              <h4 className='text-2xl mb-3'>Want to be a LAWDUEL agent?</h4>
              <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lorem a nulla vulputate egestas. Etiam et dictum risus. Proin laoreet maximus lectus, sed suscipit massa consequat ac. Nam nec mattis metus. Donec condimentum dolor nec bibendum lobortis. Praesent molestie nisi et commodo finibus.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className='no-underline p-4 md:p-6'><h4 className='text-2xl no-underline'>Why you choose LAWDUEL?</h4></AccordionTrigger>
            <AccordionContent className='bg-white p-4 md:p-6 rounded-lg shadow-md'>
              <h4 className='text-2xl mb-3'>Why you choose LAWDUEL?</h4>
              <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lorem a nulla vulputate egestas. Etiam et dictum risus. Proin laoreet maximus lectus, sed suscipit massa consequat ac. Nam nec mattis metus. Donec condimentum dolor nec bibendum lobortis. Praesent molestie nisi et commodo finibus.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default AccordionQuestions;