export const doctors = [
  {
    slug: "aria-salehi",
    name: "Dr. Aria Salehi",
    role: "Neurosurgeon",
    dept: "Neuroscience",
    deptSlug: "neuroscience",
    img: "https://media.base44.com/images/public/6a9a40678987c8c77881f46a/3f66f1d72_generated_b3b1f7b8.jpg",
    tags: ["Neurosurgery", "Stroke care"],
    languages: ["Dari", "Pashto", "English"],
    education: "Fellowship-trained neurosurgeon with a focus on brain and spine surgery.",
    bio: "Dr. Salehi leads neurosurgical care at UIH, with particular interest in stroke intervention, brain tumors, and complex spine conditions. He works closely with neurology and diagnostics so patients receive a clear plan from the first consultation through recovery.",
  },
  {
    slug: "lina-karimi",
    name: "Dr. Lina Karimi",
    role: "General & Specialized Surgery",
    dept: "Surgery",
    deptSlug: "surgery",
    img: "https://media.base44.com/images/public/6a9a40678987c8c77881f46a/41f43c3bb_generated_c1fb7343.jpg",
    tags: ["Minimally invasive", "General surgery"],
    languages: ["Dari", "English"],
    education: "Consultant surgeon specializing in general and minimally invasive procedures.",
    bio: "Dr. Karimi provides planned and urgent surgical care, with an emphasis on careful pre-operative preparation and techniques that support a smoother recovery. She is committed to explaining options clearly so patients can make informed decisions.",
  },
  {
    slug: "yasin-noori",
    name: "Dr. Yasin Noori",
    role: "Medical Oncologist",
    dept: "Cancer Care",
    deptSlug: "cancer-care",
    img: "https://media.base44.com/images/public/6a9a40678987c8c77881f46a/880e1a4f5_generated_5867b608.jpg",
    tags: ["Oncology", "Cancer treatment"],
    languages: ["Dari", "Pashto", "English"],
    education: "Medical oncologist focused on diagnosis, staging, and personalized treatment.",
    bio: "Dr. Noori coordinates cancer diagnosis and treatment at UIH, working with surgical oncology and diagnostics to build individualized plans. He prioritizes honest conversations about goals of care, side effects, and what patients and families can expect.",
  },
  {
    slug: "soraya-ahmadi",
    name: "Dr. Soraya Ahmadi",
    role: "Radiologist",
    dept: "Advanced Diagnostics",
    deptSlug: "diagnostics",
    img: "https://media.base44.com/images/public/6a9a40678987c8c77881f46a/f70ce6cf1_generated_ca2005ad.jpg",
    tags: ["Imaging", "Pathology"],
    languages: ["Dari", "English"],
    education: "Consultant radiologist with expertise in advanced imaging interpretation.",
    bio: "Dr. Ahmadi oversees imaging interpretation that guides clinical decisions across neuroscience, surgery, and cancer care. She collaborates directly with referring physicians so reports are timely, precise, and clinically useful.",
  },
];

export function getDoctor(slug) {
  return doctors.find((d) => d.slug === slug);
}

export function getDoctorsByDept(deptSlug) {
  return doctors.filter((d) => d.deptSlug === deptSlug);
}
