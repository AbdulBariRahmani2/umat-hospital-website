import Hero from "@/components/sections/Hero";
import FeaturedSpecialties from "@/components/sections/FeaturedSpecialties";
import WhyUIH from "@/components/sections/WhyUIH";
import FeaturedDoctors from "@/components/sections/FeaturedDoctors";
import HealthInsights from "@/components/sections/HealthInsights";
import News from "@/components/sections/News";
import ResearchInnovation from "@/components/sections/ResearchInnovation";
import PatientInfo from "@/components/sections/PatientInfo";
import HomeCta from "@/components/sections/HomeCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedSpecialties />
      <WhyUIH />
      <FeaturedDoctors />
      <HealthInsights />
      <News />
      <ResearchInnovation />
      <PatientInfo />
      <HomeCta />
    </main>
  );
}
