import { useLocation } from "react-router-dom";
import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import { breadcrumbJsonLd } from "@/lib/seo";

const pages = {
  "/privacy": {
    title: "Privacy Policy",
    description: "How Ummat International Hospital in Kabul handles personal and clinical information collected through this website and at the hospital.",
    eyebrow: "Legal",
    paragraphs: [
      "Ummat International Hospital collects only what we need to provide care, answer appointment requests, and run this website.",
      "Clinical records stay under professional confidentiality. Details you send through the website are used to contact you about that request. We do not sell them.",
      "If you have a question about how your information is stored or shared, use the contact page.",
    ],
  },
  "/terms": {
    title: "Terms of Use",
    description: "Terms for using the Ummat International Hospital website. This site does not create a doctor-patient relationship.",
    eyebrow: "Legal",
    paragraphs: [
      "This website helps patients and visitors learn about Ummat International Hospital and request care. The text is general information and may change as services change.",
      "Using this site does not create a doctor-patient relationship. An appointment request is not booked until the hospital confirms it with you.",
      "Do not use the website for emergencies. Go to the Emergency Department or get local help at once.",
    ],
  },
  "/disclaimer": {
    title: "Medical Disclaimer",
    description: "Health articles on the UIH website are for information only and are not a diagnosis or a substitute for seeing a doctor.",
    eyebrow: "Legal",
    paragraphs: [
      "Articles and service pages on this website are for education. They are not a diagnosis, a prescription, or a substitute for seeing a qualified doctor.",
      "If you are worried about symptoms, book a visit or go to emergency. Do not delay care because of something you read online.",
    ],
  },
  "/accessibility": {
    title: "Accessibility",
    description: "How Ummat International Hospital tries to keep this website usable, and how to ask for information in another format.",
    eyebrow: "Legal",
    paragraphs: [
      "We try to keep this website usable for people with a range of abilities. Pages use clear headings, keyboard navigation, and readable contrast.",
      "If a page is hard to use or you need the same information in another format, contact us and we will do what we can.",
    ],
  },
};

export default function Legal() {
  const { pathname } = useLocation();
  const page = pages[pathname] || pages["/privacy"];

  return (
    <main>
      <Seo
        title={page.title}
        description={page.description}
        path={pathname}
        jsonLd={breadcrumbJsonLd([{ name: page.title, path: pathname }])}
      />
      <PageHero eyebrow={page.eyebrow} title={page.title} crumbs={[{ label: page.title }]} />
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-5">
          {page.paragraphs.map((p) => (
            <Reveal key={p}>
              <p className="text-lg leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
