import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImprovedHowItWorks from "@/components/ImprovedHowItWorks";
import MissionStatement from "@/components/MissionStatement";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import TestimonialFeature from "@/components/TestimonialFeature";
import Testimonials from "@/components/Testimonials";
import AccordionQuestions from "@/components/AccordionQuestions";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ImprovedHowItWorks />
        <MissionStatement />
        <ContactForm />
        <TestimonialFeature />
        <Testimonials />
        <AccordionQuestions />
      </main>
      <Footer />
    </div>
  );
}
