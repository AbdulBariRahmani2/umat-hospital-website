import { BookOpen, FlaskConical, GraduationCap } from "lucide-react";

export const articles = [
  {
    slug: "understanding-stroke-signs",
    type: "insight",
    cat: "Neuroscience",
    title: "Understanding stroke: recognizing the signs that save lives",
    excerpt: "Minutes matter. Learn the FAST protocol and how rapid neurointervention changes outcomes.",
    read: "6 min read",
    date: "Aug 28, 2026",
    featured: true,
    icon: BookOpen,
    body: [
      "A stroke happens when blood flow to part of the brain is interrupted. Brain cells begin to fail within minutes, which is why recognizing symptoms early is one of the most important things a family can do.",
      "The FAST protocol is a simple way to remember the most common warning signs: Face drooping, Arm weakness, Speech difficulty, and Time to seek emergency care. Sudden confusion, vision loss, or a severe headache can also be signs of stroke.",
      "At Ummat International Hospital, suspected stroke patients are assessed urgently by the neuroscience team. Rapid imaging and specialist review help determine whether intervention can restore blood flow and limit long-term disability.",
      "If you notice these signs in yourself or someone nearby, do not wait to see if they pass. Come to the Emergency Department immediately or call for urgent transport.",
    ],
  },
  {
    slug: "early-cancer-screening",
    type: "insight",
    cat: "Cancer Care",
    title: "Early screening and the path to better outcomes",
    excerpt: "Why proactive diagnostics remain the most powerful tool in oncology.",
    read: "4 min read",
    date: "Aug 20, 2026",
    icon: BookOpen,
    body: [
      "Many cancers are more treatable when they are found before symptoms become severe. Screening and timely investigation give physicians a clearer picture of disease at a stage when more options remain available.",
      "Depending on age, family history, and individual risk, screening may include imaging, laboratory tests, or a specialist examination. Our oncology and diagnostics teams can help you understand which tests are appropriate.",
      "If a finding needs further review, UIH coordinates staging and treatment planning so patients are not left to navigate the next steps alone. Early action is not only about technology — it is about a clear, supported path from concern to care.",
    ],
  },
  {
    slug: "advanced-imaging-explained",
    type: "insight",
    cat: "Diagnostics",
    title: "What advanced imaging reveals that routine scans cannot",
    excerpt: "A look inside our imaging suite and the decisions it informs.",
    read: "5 min read",
    date: "Aug 12, 2026",
    icon: BookOpen,
    body: [
      "Routine scans answer many questions, but complex neurological, surgical, and oncology cases often need more detailed imaging. Higher-resolution studies can show vessel anatomy, tumor extent, and subtle changes that alter a treatment plan.",
      "Radiologists at UIH interpret these studies in conversation with the referring specialist. The goal is not more images for their own sake — it is the right study, reported in a way that helps the clinical team act.",
      "If your physician recommends advanced imaging, ask what the study is looking for and when results will be reviewed. Clear expectations reduce anxiety and help families prepare for the next appointment.",
    ],
  },
  {
    slug: "diagnostics-wing-opens",
    type: "news",
    tag: "Announcement",
    cat: "Announcement",
    title: "UIH opens new advanced diagnostics wing",
    excerpt: "Expanded imaging, laboratory, and pathology services are now available to inpatients and outpatients.",
    read: "3 min read",
    date: "Sep 1, 2026",
    icon: BookOpen,
    body: [
      "Ummat International Hospital has opened a new advanced diagnostics wing on the Darulaman Road campus, expanding access to imaging, laboratory testing, and pathology.",
      "The new space is designed to support faster turnaround for emergency, surgical, and oncology patients, while remaining available for scheduled outpatient studies.",
      "Physicians across UIH’s core specialties will use the wing to shorten the time between first assessment and a confirmed treatment plan.",
    ],
  },
  {
    slug: "clinical-research-partnership",
    type: "news",
    tag: "Research",
    cat: "Research",
    title: "Partnership announced for clinical research programs",
    excerpt: "UIH will collaborate on physician-led studies in neuroscience, oncology, and surgical outcomes.",
    read: "3 min read",
    date: "Aug 22, 2026",
    icon: FlaskConical,
    body: [
      "UIH has announced a partnership to expand physician-led clinical research in neuroscience, oncology, and surgical outcomes.",
      "The collaboration will support study design, ethics review, and data quality so research conducted at the hospital can inform everyday care.",
      "Patients who may be eligible for a study will always be asked for informed consent and will continue to receive standard care if they decline to participate.",
    ],
  },
  {
    slug: "residency-applications-2027",
    type: "news",
    tag: "Education",
    cat: "Education",
    title: "Residency applications open for 2027 intake",
    excerpt: "Training positions are now open for physicians seeking structured postgraduate education at UIH.",
    read: "2 min read",
    date: "Aug 10, 2026",
    icon: GraduationCap,
    body: [
      "Applications are open for the 2027 residency intake at Ummat International Hospital. The program is designed for physicians who want structured postgraduate training in a tertiary care setting.",
      "Residents will work alongside specialist faculty in neuroscience, surgery, cancer care, and diagnostics, with an emphasis on supervised clinical responsibility and professional development.",
      "Details on eligibility, required documents, and timelines will be shared with applicants after an initial enquiry through the hospital’s education office.",
    ],
  },
];

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}

export const insights = articles.filter((a) => a.type === "insight");
export const newsItems = articles.filter((a) => a.type === "news");
