import Seo from "@/components/Seo";
import Hero from "@/components/sections/Hero";
import FeaturedSpecialties from "@/components/sections/FeaturedSpecialties";
import WhyUIH from "@/components/sections/WhyUIH";
import FeaturedDoctors from "@/components/sections/FeaturedDoctors";
import HealthInsights from "@/components/sections/HealthInsights";
import News from "@/components/sections/News";
import ResearchInnovation from "@/components/sections/ResearchInnovation";
import PatientInfo from "@/components/sections/PatientInfo";
import HomeCta from "@/components/sections/HomeCta";
import Faq from "@/components/sections/Faq";
import { faqs } from "@/data/faqs";
import { breadcrumbJsonLd, DEFAULT_DESCRIPTION, DEFAULT_TITLE, faqJsonLd, hospitalJsonLd, websiteJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <main>
      <Seo
        title={DEFAULT_TITLE}
        description={DEFAULT_DESCRIPTION}
        path="/"
        jsonLd={[
          hospitalJsonLd(),
          websiteJsonLd(),
          breadcrumbJsonLd([]),
          faqJsonLd(faqs),
        ]}
      />
      <Hero />
      <FeaturedSpecialties />
      <WhyUIH />
      <FeaturedDoctors />
      <HealthInsights />
      <News />
      <ResearchInnovation />
      <PatientInfo />
      <Faq />
      <HomeCta />
    </main>
  );
}
