export const doctors = [
  {
    slug: "aria-salehi",
    name: "Dr. Aria Salehi",
    role: "Neurosurgeon",
    dept: "Neuroscience",
    deptSlug: "neuroscience",
    seoTitle: "Dr. Aria Salehi, Neurosurgeon in Kabul",
    seoDescription:
      "Book Dr. Aria Salehi, neurosurgeon at Ummat International Hospital in Kabul. Stroke, brain, and spine surgery. Speaks Dari, Pashto, and English.",
    img: "https://media.base44.com/images/public/6a9a40678987c8c77881f46a/3f66f1d72_generated_b3b1f7b8.jpg",
    tags: ["Neurosurgery", "Stroke care"],
    languages: ["Dari", "Pashto", "English"],
    education: "Neurosurgeon with extra training in brain and spine surgery.",
    bio: "Dr. Salehi looks after neurosurgery at UIH. He sees people with stroke, brain tumors, and difficult spine problems. He works with neurology and imaging so you leave the first visit with a plan, not a stack of unanswered questions.",
  },
  {
    slug: "lina-karimi",
    name: "Dr. Lina Karimi",
    role: "General and specialist surgeon",
    dept: "Surgery",
    deptSlug: "surgery",
    seoTitle: "Dr. Lina Karimi, Surgeon in Kabul",
    seoDescription:
      "Book Dr. Lina Karimi for general and specialist surgery at Ummat International Hospital in Kabul. Planned operations and urgent cases.",
    img: "https://media.base44.com/images/public/6a9a40678987c8c77881f46a/41f43c3bb_generated_c1fb7343.jpg",
    tags: ["Smaller-incision surgery", "General surgery"],
    languages: ["Dari", "English"],
    education: "Consultant surgeon for general operations and cases that can be done through a smaller cut.",
    bio: "Dr. Karimi operates on booked cases and on people who come in as an emergency. She spends time on the checks before theatre and explains the choices in everyday language. Recovery is part of the plan, not an afterthought.",
  },
  {
    slug: "yasin-noori",
    name: "Dr. Yasin Noori",
    role: "Medical oncologist",
    dept: "Cancer Care",
    deptSlug: "cancer-care",
    seoTitle: "Dr. Yasin Noori, Oncologist in Kabul",
    seoDescription:
      "See Dr. Yasin Noori, medical oncologist at Ummat International Hospital in Kabul. Cancer diagnosis, staging, and treatment planning.",
    img: "https://media.base44.com/images/public/6a9a40678987c8c77881f46a/880e1a4f5_generated_5867b608.jpg",
    tags: ["Oncology", "Cancer treatment"],
    languages: ["Dari", "Pashto", "English"],
    education: "Medical oncologist who focuses on diagnosis, staging, and treatment that fits the person in front of him.",
    bio: "Dr. Noori coordinates cancer diagnosis and treatment at UIH. He sits with surgical colleagues and the diagnostics team before a plan is written. He talks plainly about side effects, aims of treatment, and what families can expect week by week.",
  },
  {
    slug: "soraya-ahmadi",
    name: "Dr. Soraya Ahmadi",
    role: "Radiologist",
    dept: "Advanced Diagnostics",
    deptSlug: "diagnostics",
    seoTitle: "Dr. Soraya Ahmadi, Radiologist in Kabul",
    seoDescription:
      "Dr. Soraya Ahmadi reads hospital imaging at Ummat International Hospital in Kabul. Reports for neuroscience, surgery, and cancer teams.",
    img: "https://media.base44.com/images/public/6a9a40678987c8c77881f46a/f70ce6cf1_generated_ca2005ad.jpg",
    tags: ["Imaging", "Pathology"],
    languages: ["Dari", "English"],
    education: "Consultant radiologist who reads hospital imaging and writes reports for the referring doctor.",
    bio: "Dr. Ahmadi reads the scans that guide decisions in neuroscience, surgery, and cancer care. She speaks with the doctor who ordered the study so the report answers the clinical question, not just a list of findings.",
  },
];

export function getDoctor(slug) {
  return doctors.find((d) => d.slug === slug);
}

export function getDoctorsByDept(deptSlug) {
  return doctors.filter((d) => d.deptSlug === deptSlug);
}
