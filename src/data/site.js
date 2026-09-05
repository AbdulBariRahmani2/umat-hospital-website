export const hospital = {
  name: "Ummat International Hospital",
  shortName: "UIH",
  address: "Darulaman Road, Next to National Museum of Afghanistan, Kabul, Afghanistan",
  phone: "To be provided",
  email: "To be provided",
  hours: "Mon–Sat: 8:00 AM – 7:00 PM · Emergency 24/7",
};

export const navLinks = [
  { label: "Patient Care", to: "/services" },
  { label: "Doctors", to: "/doctors" },
  { label: "Patients & Visitors", to: "/patients" },
  { label: "Research", to: "/research" },
  { label: "News", to: "/news" },
  { label: "About", to: "/about" },
];

export const footerColumns = [
  {
    title: "Patient Care",
    links: [
      { label: "Neuroscience", to: "/services/neuroscience" },
      { label: "Surgery", to: "/services/surgery" },
      { label: "Cancer Care", to: "/services/cancer-care" },
      { label: "Advanced Diagnostics", to: "/services/diagnostics" },
      { label: "Emergency Care", to: "/services/emergency" },
    ],
  },
  {
    title: "Patients & Visitors",
    links: [
      { label: "Before Your Visit", to: "/patients#before-your-visit" },
      { label: "Visiting Hours", to: "/patients#visiting-hours" },
      { label: "Patient Rights", to: "/patients#patient-rights" },
      { label: "Medical Records", to: "/patients#medical-records" },
      { label: "Billing Information", to: "/patients#billing" },
    ],
  },
  {
    title: "About UIH",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Leadership", to: "/about#leadership" },
      { label: "Facilities", to: "/about#facilities" },
      { label: "Quality & Safety", to: "/about#quality" },
      { label: "Careers", to: "/about#careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "News & Insights", to: "/news" },
      { label: "Health Articles", to: "/news" },
      { label: "Research", to: "/research" },
      { label: "Find a Doctor", to: "/doctors" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Use", to: "/terms" },
  { label: "Medical Disclaimer", to: "/disclaimer" },
  { label: "Accessibility", to: "/accessibility" },
];

export const patientGuides = [
  {
    id: "before-your-visit",
    title: "Before Your Visit",
    desc: "Registration, admission, and what to bring.",
    points: [
      "Bring a government-issued ID, any referral letter, and a list of current medications.",
      "Arrive 20 minutes early for outpatient appointments so registration can be completed calmly.",
      "If you have previous imaging or laboratory results, bring copies or ask the referring clinic to send them.",
      "A family member may accompany you, especially if you expect a longer consultation or procedure.",
    ],
  },
  {
    id: "visiting-hours",
    title: "Visiting Hours",
    desc: "Daily schedules and visitor guidelines.",
    points: [
      "General wards: 10:00 AM – 12:00 PM and 4:00 PM – 7:00 PM.",
      "Intensive care visits are shorter and arranged with the nurse in charge.",
      "Children may visit when the clinical team agrees it is appropriate and safe.",
      "Please keep noise low, wash hands on arrival, and step out when examinations are underway.",
    ],
  },
  {
    id: "patient-rights",
    title: "Patient Safety & Rights",
    desc: "Our commitment to your dignity and safety.",
    points: [
      "You have the right to understand your diagnosis, options, and the purpose of each test or procedure.",
      "Care is provided without discrimination, and personal information is handled confidentially.",
      "You may ask for a second opinion or request that a family member be included in discussions.",
      "If something does not feel safe, tell a nurse or physician immediately — we want to hear it.",
    ],
  },
  {
    id: "medical-records",
    title: "Medical Records",
    desc: "How to request copies of your clinical information.",
    points: [
      "Written requests for records can be submitted at the patient services desk.",
      "Please allow a few working days for copies of notes, imaging reports, or discharge summaries.",
      "Records are released to the patient or to a person they have authorized in writing.",
      "For continuing care, we can send reports directly to a referring physician when requested.",
    ],
  },
  {
    id: "billing",
    title: "Billing Information",
    desc: "Estimates, invoices, and payment questions.",
    points: [
      "Ask patient services for an estimate before planned procedures whenever possible.",
      "Itemized invoices are available after discharge or at the end of an outpatient visit.",
      "Payment methods and any available assistance options can be discussed privately with billing staff.",
      "If a charge is unclear, request an explanation — you should never feel rushed through a bill.",
    ],
  },
];

export const leadership = [
  { name: "To be announced", role: "Hospital Director", focus: "Operations, strategy, and campus development" },
  { name: "To be announced", role: "Medical Director", focus: "Clinical standards and physician leadership" },
  { name: "To be announced", role: "Chief of Nursing", focus: "Nursing practice, safety, and patient experience" },
  { name: "To be announced", role: "Director of Quality", focus: "Audit, infection control, and accreditation readiness" },
];

export const facilities = [
  { title: "Inpatient wards", desc: "Physician-led units for medical, surgical, and specialty care." },
  { title: "Operating theatres", desc: "Equipped for general, specialized, and urgent procedures." },
  { title: "Diagnostics wing", desc: "Imaging, laboratory, and pathology in one coordinated service." },
  { title: "Emergency department", desc: "Open 24/7 for assessment, stabilization, and urgent referral." },
  { title: "Consultation suites", desc: "Outpatient rooms designed for privacy and family discussion." },
  { title: "Education spaces", desc: "Rooms for teaching, case review, and professional development." },
];

export const researchPrograms = [
  {
    title: "Clinical Research",
    n: "12",
    sub: "active programs",
    desc: "Physician-led studies in stroke, surgical outcomes, and oncology pathways, conducted with ethics review and informed consent.",
  },
  {
    title: "Medical Innovation",
    n: "8",
    sub: "ongoing studies",
    desc: "Evaluation of diagnostic protocols and care models that can shorten time-to-treatment for complex patients.",
  },
  {
    title: "Publications",
    n: "30+",
    sub: "peer-reviewed",
    desc: "Selected findings are prepared for peer-reviewed publication so local practice can contribute to the wider evidence base.",
  },
];
