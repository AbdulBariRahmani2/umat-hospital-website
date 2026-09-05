import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedSpecialties from "@/components/sections/FeaturedSpecialties";
import WhyUIH from "@/components/sections/WhyUIH";
import FeaturedDoctors from "@/components/sections/FeaturedDoctors";
import HealthInsights from "@/components/sections/HealthInsights";
import News from "@/components/sections/News";
import ResearchInnovation from "@/components/sections/ResearchInnovation";
import PatientInfo from "@/components/sections/PatientInfo";
import ContactLocation from "@/components/sections/ContactLocation";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedSpecialties />
        <WhyUIH />
        <FeaturedDoctors />
        <HealthInsights />
        <News />
        <ResearchInnovation />
        <PatientInfo />
        <ContactLocation />
      </main>
      <Footer />
    </div>
  );
}