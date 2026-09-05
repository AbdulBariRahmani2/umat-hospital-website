import { Brain, Stethoscope, Microscope, Activity, Siren } from "lucide-react";

export const specialties = [
  {
    slug: "neuroscience",
    title: "Neuroscience",
    desc: "Neurology, neurosurgery, neurodiagnostics, stroke care, and comprehensive brain & spine services.",
    overview:
      "The Neuroscience program at Ummat International Hospital brings neurology, neurosurgery, and neurodiagnostics together so patients with brain, spine, and nerve conditions can be assessed and treated without delay. Our team focuses on timely stroke response, precise surgical care, and clear communication with families at every step.",
    conditions: [
      "Stroke and transient ischemic attack",
      "Brain and spinal tumors",
      "Epilepsy and seizure disorders",
      "Headache and migraine",
      "Spine degeneration and disc disease",
      "Peripheral nerve disorders",
    ],
    treatments: [
      "Emergency stroke assessment and intervention",
      "Neurosurgical consultation and operative care",
      "Neurodiagnostic testing and imaging review",
      "Inpatient neurological monitoring",
      "Rehabilitation planning after brain or spine injury",
    ],
    accent: "text-accent",
    bg: "bg-accent/8",
    icon: Brain,
    featured: true,
  },
  {
    slug: "surgery",
    title: "Surgery",
    desc: "General and specialized surgery with advanced surgical services and physician-led precision.",
    overview:
      "Our surgical service is physician-led and built for both planned procedures and urgent cases. Surgeons work closely with anesthesia, diagnostics, and nursing teams to prepare patients thoroughly, operate with precision, and support a safer recovery.",
    conditions: [
      "Abdominal and general surgical conditions",
      "Gallbladder and hernia disease",
      "Soft-tissue masses",
      "Trauma requiring operative care",
      "Minimally invasive surgical candidates",
    ],
    treatments: [
      "General and specialized operative procedures",
      "Minimally invasive surgery where appropriate",
      "Pre-operative assessment and clearance",
      "Post-operative pain and wound management",
      "Coordinated discharge and follow-up",
    ],
    accent: "text-primary",
    bg: "bg-primary/8",
    icon: Stethoscope,
    featured: true,
  },
  {
    slug: "cancer-care",
    title: "Cancer Care",
    desc: "Cancer diagnosis, oncology, surgical oncology, and personalized cancer treatment programs.",
    overview:
      "Cancer Care at UIH is organized around early diagnosis, coordinated treatment planning, and support for patients and families. Medical oncology and surgical teams review each case together so treatment is tailored, explained clearly, and delivered with dignity.",
    conditions: [
      "Breast, gastrointestinal, and thoracic cancers",
      "Hematologic malignancies",
      "Suspected tumors requiring investigation",
      "Recurrent or advanced disease",
      "Cancer-related pain and symptom burden",
    ],
    treatments: [
      "Diagnostic work-up and staging",
      "Medical oncology consultation",
      "Surgical oncology assessment",
      "Personalized treatment planning",
      "Supportive and follow-up care",
    ],
    accent: "text-primary",
    bg: "bg-primary/8",
    icon: Activity,
    featured: true,
  },
  {
    slug: "diagnostics",
    title: "Advanced Diagnostics",
    desc: "Imaging, laboratory, pathology, and specialized diagnostics powered by modern technology.",
    overview:
      "Accurate diagnosis is the foundation of every treatment plan. Our diagnostics wing combines imaging, laboratory medicine, and pathology so clinicians can make faster, more confident decisions for inpatients and outpatients alike.",
    conditions: [
      "Unexplained symptoms requiring investigation",
      "Pre-operative and screening studies",
      "Oncology staging and follow-up imaging",
      "Neurological and vascular imaging needs",
      "Laboratory monitoring of chronic illness",
    ],
    treatments: [
      "Advanced imaging and reporting",
      "Clinical laboratory testing",
      "Pathology and biopsy interpretation",
      "Specialized diagnostic studies",
      "Same-day clinician review when urgent",
    ],
    accent: "text-accent",
    bg: "bg-accent/8",
    icon: Microscope,
    featured: true,
  },
  {
    slug: "emergency",
    title: "Emergency Care",
    desc: "24/7 urgent assessment and stabilization for medical, surgical, and neurological emergencies.",
    overview:
      "The Emergency Department is open around the clock for patients who need immediate assessment. Our team prioritizes life-threatening conditions, stabilizes patients quickly, and connects them to the right specialty service without unnecessary delay.",
    conditions: [
      "Chest pain, shortness of breath, and collapse",
      "Stroke symptoms and sudden neurological change",
      "Major trauma and severe bleeding",
      "Acute abdominal pain and surgical emergencies",
      "High fever, severe infection, and dehydration",
    ],
    treatments: [
      "Triage and rapid assessment",
      "Resuscitation and stabilization",
      "Emergency diagnostics",
      "Urgent specialty consultation",
      "Admission or safe discharge planning",
    ],
    accent: "text-destructive",
    bg: "bg-destructive/8",
    icon: Siren,
    featured: false,
  },
];

export function getSpecialty(slug) {
  return specialties.find((s) => s.slug === slug);
}
