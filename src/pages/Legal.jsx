import { useLocation } from "react-router-dom";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";

const pages = {
  "/privacy": {
    title: "Privacy Policy",
    eyebrow: "Legal",
    paragraphs: [
      "Ummat International Hospital collects only the information needed to provide care, respond to appointment requests, and operate this website.",
      "Clinical records are handled according to professional confidentiality. Website enquiry details are used to contact you about the request you submitted and are not sold to third parties.",
      "If you have a question about how your information is stored or shared, please contact the hospital through the details on the Contact page.",
    ],
  },
  "/terms": {
    title: "Terms of Use",
    eyebrow: "Legal",
    paragraphs: [
      "This website is provided to help patients and visitors learn about Ummat International Hospital and request care. Content is for general information and may be updated as services develop.",
      "Using this site does not create a physician–patient relationship. Appointment requests are not confirmed until the hospital contacts you.",
      "Please do not use the website for emergencies. Go to the Emergency Department or seek immediate local help.",
    ],
  },
  "/disclaimer": {
    title: "Medical Disclaimer",
    eyebrow: "Legal",
    paragraphs: [
      "Articles and service descriptions on this website are educational. They are not a diagnosis, prescription, or substitute for a consultation with a qualified clinician.",
      "If you are worried about symptoms, book an appointment or attend emergency care. Do not delay seeking help because of something you read online.",
    ],
  },
  "/accessibility": {
    title: "Accessibility",
    eyebrow: "Legal",
    paragraphs: [
      "UIH aims to make this website usable for visitors with a range of abilities, including clear headings, keyboard-accessible navigation, and readable contrast.",
      "If you encounter a barrier on the site or need information in another format, please contact us and we will do our best to help.",
    ],
  },
};

export default function Legal() {
  const { pathname } = useLocation();
  const page = pages[pathname] || pages["/privacy"];

  return (
    <main>
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
