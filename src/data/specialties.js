import { Brain, Stethoscope, Microscope, Activity, Siren } from "lucide-react";

export const specialties = [
  {
    slug: "neuroscience",
    title: "Neuroscience",
    seoTitle: "Neuroscience and Stroke Care in Kabul",
    seoDescription:
      "Neurology, neurosurgery, and stroke care at Ummat International Hospital in Kabul. See a specialist for brain, spine, and nerve problems.",
    desc: "Neurology, neurosurgery, stroke care, and tests for the brain, spine, and nerves.",
    overview:
      "The neuroscience team at Ummat International Hospital sees people with brain, spine, and nerve problems in one place. Neurology, neurosurgery, and imaging work together so you are not sent from clinic to clinic for the first answers. We pay close attention to stroke, because minutes matter, and we explain the plan to families in plain words.",
    conditions: [
      "Stroke and mini-stroke (TIA)",
      "Brain and spinal tumors",
      "Epilepsy and seizures",
      "Headache and migraine",
      "Worn spinal discs and neck or back pain from nerve pressure",
      "Nerve problems in the arms or legs",
    ],
    treatments: [
      "Urgent stroke assessment",
      "Neurosurgery consult and operations when needed",
      "Brain and nerve tests, then a clear report",
      "Watching patients on the ward after a brain or spine event",
      "A rehab plan after injury or surgery",
    ],
    accent: "text-accent",
    bg: "bg-accent/8",
    icon: Brain,
    image: "/images/neuroscience-care.png",
    imageAlt: "Doctor reviewing a brain scan with a patient at Ummat International Hospital in Kabul",
    featured: true,
  },
  {
    slug: "surgery",
    title: "Surgery",
    seoTitle: "Surgery in Kabul | General and Specialist Operations",
    seoDescription:
      "Planned and urgent surgery at Ummat International Hospital in Kabul. General surgery, hernia, gallbladder, and other operations with clear preparation.",
    desc: "Planned operations and urgent surgery, with doctors who stay with you before and after the procedure.",
    overview:
      "Surgery at UIH covers booked cases and people who come in as an emergency. The surgeon, anaesthetist, theatre nurses, and the diagnostics team prepare you together. We talk through the operation, the risks, and what recovery usually looks like, so you can decide with the facts in front of you.",
    conditions: [
      "Abdominal and general surgical problems",
      "Gallbladder disease and hernia",
      "Soft-tissue lumps",
      "Injuries that need an operation",
      "Cases that may be suitable for a smaller incision",
    ],
    treatments: [
      "General and specialist operations",
      "Smaller-incision surgery when it is safe",
      "Checks before you go to theatre",
      "Pain and wound care after surgery",
      "A discharge plan and a follow-up visit",
    ],
    accent: "text-primary",
    bg: "bg-primary/8",
    icon: Stethoscope,
    image: "/images/surgery-theatre.png",
    imageAlt: "Operating theatre at Ummat International Hospital in Kabul",
    featured: true,
  },
  {
    slug: "cancer-care",
    title: "Cancer Care",
    seoTitle: "Cancer Care in Kabul | Oncology at UIH",
    seoDescription:
      "Cancer diagnosis and treatment in Kabul at Ummat International Hospital. Oncology, surgery, and tests planned together for each patient.",
    desc: "Cancer diagnosis, medical oncology, and surgical review, with a plan written for you and your family.",
    overview:
      "Cancer care at UIH starts with getting the diagnosis right, then sitting down with you to talk about treatment. Medical oncology and surgical doctors review the case together. We say what we know, what we do not know yet, and what the next step is. Dignity and honest talk matter as much as the medicines and the operation.",
    conditions: [
      "Breast, stomach, bowel, and chest cancers",
      "Blood cancers",
      "Lumps or symptoms that need investigation",
      "Cancer that has come back or spread",
      "Pain and other symptoms caused by cancer",
    ],
    treatments: [
      "Tests and staging",
      "Medical oncology consult",
      "Surgical oncology review",
      "A treatment plan written for your case",
      "Follow-up and support after treatment",
    ],
    accent: "text-primary",
    bg: "bg-primary/8",
    icon: Activity,
    image: "/images/cancer-care-clinic.png",
    imageAlt: "Oncology consultation at Ummat International Hospital in Kabul",
    featured: true,
  },
  {
    slug: "diagnostics",
    title: "Advanced Diagnostics",
    seoTitle: "Hospital Imaging and Lab Tests in Kabul",
    seoDescription:
      "Imaging, laboratory tests, and pathology at Ummat International Hospital in Kabul. Reports written so your doctor can act.",
    desc: "Imaging, laboratory tests, and pathology for inpatients and people coming from clinic.",
    overview:
      "A treatment plan is only as good as the tests behind it. Our diagnostics wing puts imaging, the lab, and pathology in one part of the hospital so results get back to the doctor who asked for them. That helps emergency, surgery, and cancer teams move sooner, and it also serves people who come in for a booked scan or blood test.",
    conditions: [
      "Symptoms that need investigation",
      "Checks before an operation",
      "Cancer staging and follow-up scans",
      "Brain, spine, and blood-vessel imaging",
      "Lab monitoring for long-term illness",
    ],
    treatments: [
      "Imaging and a written report",
      "Clinical laboratory tests",
      "Pathology and biopsy review",
      "Special studies when a routine test is not enough",
      "Same-day review when the case is urgent",
    ],
    accent: "text-accent",
    bg: "bg-accent/8",
    icon: Microscope,
    image: "/images/diagnostics-imaging.png",
    imageAlt: "Imaging and laboratory services at Ummat International Hospital in Kabul",
    featured: true,
  },
  {
    slug: "emergency",
    title: "Emergency Care",
    seoTitle: "24 Hour Emergency Hospital in Kabul | UIH",
    seoDescription:
      "Emergency department in Kabul open all day and night. Stroke, chest pain, injury, and other urgent cases at Ummat International Hospital.",
    desc: "Urgent assessment and first treatment for medical, surgical, and neurological emergencies, day and night.",
    overview:
      "The Emergency Department at Ummat International Hospital stays open all day and night. Staff see the sickest people first, start treatment, and call the right specialty team. If you think it might be a stroke, a heart problem, or a serious injury, come here. Do not wait for a clinic slot.",
    conditions: [
      "Chest pain, shortness of breath, or collapse",
      "Stroke signs or a sudden change in speech or strength",
      "Major injury and heavy bleeding",
      "Sudden severe abdominal pain",
      "High fever, severe infection, or dehydration",
    ],
    treatments: [
      "Triage and a first assessment",
      "Stabilising treatment",
      "Urgent tests",
      "A call to the specialty doctor on duty",
      "Admission or a safe plan to go home",
    ],
    accent: "text-destructive",
    bg: "bg-destructive/8",
    icon: Siren,
    image: "/images/emergency-department.png",
    imageAlt: "Emergency department at Ummat International Hospital in Kabul",
    featured: false,
  },
];

export function getSpecialty(slug) {
  return specialties.find((s) => s.slug === slug);
}
