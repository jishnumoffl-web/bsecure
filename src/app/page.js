import AboutSection from "@/components/home/About";
import CTASection from "@/components/home/Cta";
import Hero from "@/components/home/Hero";
import About from "@/components/home/Moreabout";
import ProcessSection from "@/components/home/Process";
import ServicesSection from "@/components/home/Services";
import StatsSection from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonial";
import WhyChoose from "@/components/home/Whychoose";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <AboutSection/>
    <ServicesSection/>
    <WhyChoose/>
    <ProcessSection/>
    <About/>
    <Testimonials/>
    <StatsSection/>
    <CTASection/>
    {/* <FAQSection/> */}
    </>
  );
}
