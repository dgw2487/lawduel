'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { BadgeCheck } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define the form schema using zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
 // phone: z.string().min(10, { message: "Valid phone number is required" }),
  caseDetails: z.string().min(10, { message: "Please provide some details about your case" })
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
     // phone: "",
      caseDetails: ""
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // Form submission logic would go here
  };

  return (
    <section className="w-full">
      <div className="container animate-[slide-in-right_0.7s_ease-out]">
        <div className='bg-[#192939] py-16 px-4 animate-[slide-in-right_0.7s_ease-out] rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px]'>
          <div className='mx-auto max-w-3xl'>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Contact us and calculate your case estimates
            </h2>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Name"
                            className="bg-white border-white/20 py-7 text-2xl text-black placeholder:text-black/60"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="Email Address"
                            className="bg-white border-white/20 py-7 text-2xl text-black placeholder:text-black/60"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          placeholder="Phone Number"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                /> */}

                <FormField
                  control={form.control}
                  name="caseDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Describe your case details"
                          className="bg-white border-white/20 text-2xl text-black placeholder:text-black/60 min-h-[120px]"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="flex flex-col items-center">
                  <Button
                    type="submit"
                    className="bg-lawduel-orange mt-4 text-white font-semibold rounded-full px-16 py-8 text-base hover:bg-lawduel-orange/90 transition-all w-full md:w-auto uppercase"
                  >
                    Check Eligibility
                  </Button>

                  <div className="mt-5 flex items-center text-white">
                    <BadgeCheck className="mr-2 text-lawduel-orange" size={20} />
                    <span>It&apos;s FREE if we don&apos;t win.</span>
                  </div>

                  <p className="text-white text-base mt-4 text-center">
                    *Results may vary depending on your particular facts and legal
                    circumstances.
                  </p>
                  <p className="text-white text-5xl mt-6 text-center font-bold">+123-456-7890</p>
                </div>
              </form>
            </Form>
            </div>
          </div>
      </div>
    </section>
  );
};

export default ContactForm;
