export const hospital = {
  name: "Ummat International Hospital",
  shortName: "UIH",
  address: "Darulaman Road, Next to National Museum of Afghanistan, Kabul, Afghanistan",
  phone: "To be provided",
  email: "To be provided",
  hours: "Monday to Saturday, 8:00 AM to 7:00 PM. Emergency care is open all day and night.",
};

export const navLinks = [
  { label: "Patient Care", to: "/services", i18nKey: "nav.patientCare" },
  { label: "Doctors", to: "/doctors", i18nKey: "nav.doctors" },
  { label: "Patients", to: "/patients", i18nKey: "nav.patients" },
  { label: "Research", to: "/research", i18nKey: "nav.research" },
  { label: "News", to: "/news", i18nKey: "nav.news" },
  { label: "About", to: "/about", i18nKey: "nav.about" },
  { label: "Contact", to: "/contact", i18nKey: "nav.contact" },
];

export const footerColumns = [
  {
    title: "Patient Care",
    i18nKey: "common.footerPatientCare",
    links: [
      { label: "Neuroscience", to: "/services/neuroscience", i18nKey: "common.footerNeuroscience" },
      { label: "Surgery", to: "/services/surgery", i18nKey: "common.footerSurgery" },
      { label: "Cancer Care", to: "/services/cancer-care", i18nKey: "common.footerCancerCare" },
      { label: "Advanced Diagnostics", to: "/services/diagnostics", i18nKey: "common.footerDiagnostics" },
      { label: "Emergency Care", to: "/services/emergency", i18nKey: "common.footerEmergency" },
    ],
  },
  {
    title: "Patients and Visitors",
    i18nKey: "common.footerPatientsVisitors",
    links: [
      { label: "Before Your Visit", to: "/patients#before-your-visit", i18nKey: "common.footerBeforeVisit" },
      { label: "Visiting Hours", to: "/patients#visiting-hours", i18nKey: "common.footerVisitingHours" },
      { label: "Patient Rights", to: "/patients#patient-rights", i18nKey: "common.footerPatientRights" },
      { label: "Medical Records", to: "/patients#medical-records", i18nKey: "common.footerMedicalRecords" },
      { label: "Billing Information", to: "/patients#billing", i18nKey: "common.footerBilling" },
    ],
  },
  {
    title: "About UIH",
    i18nKey: "common.footerAboutUIH",
    links: [
      { label: "About Us", to: "/about", i18nKey: "common.footerAboutUs" },
      { label: "Leadership", to: "/about#leadership", i18nKey: "common.footerLeadership" },
      { label: "Facilities", to: "/about#facilities", i18nKey: "common.footerFacilities" },
      { label: "Quality and Safety", to: "/about#quality", i18nKey: "common.footerQuality" },
      { label: "Careers", to: "/about#careers", i18nKey: "common.footerCareers" },
    ],
  },
  {
    title: "Resources",
    i18nKey: "common.footerResources",
    links: [
      { label: "News and Health Advice", to: "/news", i18nKey: "common.footerNewsAdvice" },
      { label: "Health Articles", to: "/news", i18nKey: "common.footerHealthArticles" },
      { label: "Research", to: "/research", i18nKey: "common.researchPage" },
      { label: "Find a Doctor", to: "/doctors", i18nKey: "common.footerFindDoctor" },
      { label: "Contact", to: "/contact", i18nKey: "common.footerContact" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", to: "/privacy", i18nKey: "common.privacyPolicy" },
  { label: "Terms of Use", to: "/terms", i18nKey: "common.termsOfUse" },
  { label: "Medical Disclaimer", to: "/disclaimer", i18nKey: "common.medicalDisclaimer" },
  { label: "Accessibility", to: "/accessibility", i18nKey: "common.accessibilityLink" },
];

export const patientGuides = [
  {
    id: "before-your-visit",
    titleI18nKey: "common.beforeVisit",
    descI18nKey: "common.beforeVisitDesc",
    pointsI18nKeys: [
      "common.bringId",
      "common.arriveEarly",
      "common.olderScans",
      "common.familyMember",
    ],
  },
  {
    id: "visiting-hours",
    titleI18nKey: "common.visitingHours",
    descI18nKey: "common.visitingHoursDesc",
    pointsI18nKeys: [
      "common.generalWards",
      "common.intensiveCare",
      "common.childrenVisit",
      "common.washHands",
    ],
  },
  {
    id: "patient-rights",
    titleI18nKey: "common.patientRights",
    descI18nKey: "common.patientRightsDesc",
    pointsI18nKeys: [
      "common.rightToHear",
      "common.careDiscrimination",
      "common.askSecondOpinion",
      "common.tellNurse",
    ],
  },
  {
    id: "medical-records",
    titleI18nKey: "common.medicalRecords",
    descI18nKey: "common.medicalRecordsDesc",
    pointsI18nKeys: [
      "common.writtenRequest",
      "common.allowDays",
      "common.recordsToPatient",
      "common.sendReports",
    ],
  },
  {
    id: "billing",
    titleI18nKey: "common.billingInfo",
    descI18nKey: "common.billingInfoDesc",
    pointsI18nKeys: [
      "common.askEstimate",
      "common.itemizedBill",
      "common.paymentOptions",
      "common.askExplanation",
    ],
  },
];

export const leadership = [
  { name: "To be announced", roleI18nKey: "common.hospitalDirector", focusI18nKey: "common.dayToDay" },
  { name: "To be announced", roleI18nKey: "common.medicalDirector", focusI18nKey: "common.clinicalStandards" },
  { name: "To be announced", roleI18nKey: "common.chiefNursing", focusI18nKey: "common.nursingPractice" },
  { name: "To be announced", roleI18nKey: "common.directorQuality", focusI18nKey: "common.auditInfection" },
];

export const facilities = [
  { titleI18nKey: "common.inpatientWards", descI18nKey: "common.inpatientDesc" },
  { titleI18nKey: "common.operatingTheatres", descI18nKey: "common.operatingDesc" },
  { titleI18nKey: "common.diagnosticsWing", descI18nKey: "common.diagnosticsDesc" },
  { titleI18nKey: "common.emergencyDepartment", descI18nKey: "common.emergencyDesc" },
  { titleI18nKey: "common.consultationRooms", descI18nKey: "common.consultationDesc" },
  { titleI18nKey: "common.teachingRooms", descI18nKey: "common.teachingDesc" },
];

export const researchPrograms = [
  {
    titleI18nKey: "common.clinicalResearch",
    n: "12",
    subI18nKey: "common.activePrograms",
    descI18nKey: "common.studiesHelpNext",
  },
  {
    titleI18nKey: "common.practiceStudies",
    n: "8",
    subI18nKey: "common.ongoingStudies",
    descI18nKey: "common.outcomeReview",
  },
  {
    titleI18nKey: "common.publishedPapers",
    n: "30+",
    subI18nKey: "common.peerReviewed",
    descI18nKey: "common.doctorLed",
  },
];
