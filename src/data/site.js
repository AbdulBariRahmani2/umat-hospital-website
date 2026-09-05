export const hospital = {
  name: "Ummat International Hospital",
  shortName: "UIH",
  address: "Darulaman Road, Next to National Museum of Afghanistan, Kabul, Afghanistan",
  phone: "To be provided",
  email: "To be provided",
  hours: "Monday to Saturday, 8:00 AM to 7:00 PM. Emergency care is open all day and night.",
};

export const navLinks = [
  { label: "Patient Care", to: "/services" },
  { label: "Doctors", to: "/doctors" },
  { label: "Patients", to: "/patients" },
  { label: "Research", to: "/research" },
  { label: "News", to: "/news" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
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
    title: "Patients and Visitors",
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
      { label: "Quality and Safety", to: "/about#quality" },
      { label: "Careers", to: "/about#careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "News and Health Advice", to: "/news" },
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
    title: "Before your visit",
    desc: "What to bring and how registration works.",
    points: [
      "Bring a government photo ID, any referral letter, and a written list of medicines you take.",
      "Please arrive 20 minutes early for a clinic visit so the desk can register you without rush.",
      "If you have older scans or lab papers, bring the copies or ask the referring clinic to send them.",
      "A family member can come with you, which helps if the visit may take longer or if you need a translator.",
    ],
  },
  {
    id: "visiting-hours",
    title: "Visiting hours",
    desc: "When family and friends can come to the ward.",
    points: [
      "General wards: 10:00 AM to 12:00 PM and 4:00 PM to 7:00 PM.",
      "Intensive care visits are shorter and set with the nurse in charge.",
      "Children may visit when the clinical team agrees it is safe.",
      "Please keep voices low, wash your hands when you arrive, and step out when a doctor is examining the patient.",
    ],
  },
  {
    id: "patient-rights",
    title: "Patient safety and rights",
    desc: "How we treat you and what you can ask for.",
    points: [
      "You have the right to hear your diagnosis, the choices in front of you, and why a test or procedure is being offered.",
      "Care is given without discrimination. Your personal details stay confidential.",
      "You may ask for a second opinion or ask that a family member sit in on the discussion.",
      "If something does not feel safe, tell a nurse or doctor at once. We would rather hear it early.",
    ],
  },
  {
    id: "medical-records",
    title: "Medical records",
    desc: "How to request copies of your notes and reports.",
    points: [
      "You can submit a written request at the patient services desk.",
      "Please allow a few working days for notes, imaging reports, or a discharge summary.",
      "Records go to the patient or to a person the patient has named in writing.",
      "If another doctor is continuing your care, we can send reports to that clinic when you ask.",
    ],
  },
  {
    id: "billing",
    title: "Bills and payments",
    desc: "Estimates, invoices, and questions about charges.",
    points: [
      "Ask patient services for an estimate before a planned procedure when you can.",
      "You can request an itemized bill after discharge or at the end of a clinic visit.",
      "Payment options can be discussed in private with the billing desk.",
      "If a line on the bill is unclear, ask for an explanation. You should not be hurried through it.",
    ],
  },
];

export const leadership = [
  { name: "To be announced", role: "Hospital Director", focus: "Day-to-day running of the hospital and campus plans" },
  { name: "To be announced", role: "Medical Director", focus: "Clinical standards and doctor leadership" },
  { name: "To be announced", role: "Chief of Nursing", focus: "Nursing practice, safety, and how patients are looked after" },
  { name: "To be announced", role: "Director of Quality", focus: "Audit, infection control, and readiness for review" },
];

export const facilities = [
  { title: "Inpatient wards", desc: "Beds for medical, surgical, and specialty patients, with doctors on the ward each day." },
  { title: "Operating theatres", desc: "Rooms set up for planned operations and urgent cases." },
  { title: "Diagnostics wing", desc: "Imaging, laboratory tests, and pathology in one part of the hospital." },
  { title: "Emergency department", desc: "Open all day and night for assessment, first treatment, and urgent referral." },
  { title: "Consultation rooms", desc: "Clinic rooms where you can speak with a doctor in private, with space for family." },
  { title: "Teaching rooms", desc: "Rooms used for case review and training of doctors and nurses." },
];

export const researchPrograms = [
  {
    title: "Clinical research",
    n: "12",
    sub: "active programs",
    desc: "Doctor-led studies on stroke, surgery results, and cancer pathways. Each study goes through ethics review, and patients are asked for consent.",
  },
  {
    title: "Practice studies",
    n: "8",
    sub: "ongoing studies",
    desc: "We review how we diagnose and treat people so we can shorten the wait between first visit and a clear plan.",
  },
  {
    title: "Published papers",
    n: "30+",
    sub: "peer-reviewed",
    desc: "Some findings are written up for journals so work done in Kabul can be read by other hospitals.",
  },
];
