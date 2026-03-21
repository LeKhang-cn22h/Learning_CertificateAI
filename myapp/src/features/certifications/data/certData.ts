export type CredentialType =
  | "Professional Certificate"
  | "Certification Prep"
  | "Continuing Education"
  | "Academic Credit";

export type CertProvider =
  | "Microsoft"
  | "AWS"
  | "Google"
  | "CompTIA"
  | "PMI"
  | "Salesforce"
  | "Meta"
  | "HubSpot"
  | "Cisco"
  | "Adobe";

export type CertCategory = "technology" | "business" | "creative" | "security";

export type Certification = {
  id: string;
  title: string;
  provider: CertProvider;
  providerLogo: string;
  credentialType: CredentialType;
  category: CertCategory;
  courseCount: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  reviewCount: number;
  description: string;
  skills: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  examCode?: string;
};

export const credentialTypes: { label: string; value: string; icon: string; desc: string }[] = [
  {
    label: "Professional Certificates",
    value: "Professional Certificate",
    icon: "🏅",
    desc: "Earn credentials from industry-leading partners",
  },
  {
    label: "Certification Prep",
    value: "Certification Prep",
    icon: "📋",
    desc: "Prepare for off-platform exams",
  },
  {
    label: "Continuing Education",
    value: "Continuing Education",
    icon: "📚",
    desc: "Maintain your existing credentials",
  },
  {
    label: "Academic Credit",
    value: "Academic Credit",
    icon: "🎓",
    desc: "Earn college or university credits",
  },
];

export const providers: { label: string; value: string; logo: string; color: string }[] = [
  { label: "All Providers", value: "all", logo: "", color: "" },
  { label: "Microsoft", value: "Microsoft", logo: "🪟", color: "bg-blue-50 border-blue-200" },
  { label: "AWS", value: "AWS", logo: "☁️", color: "bg-orange-50 border-orange-200" },
  { label: "Google", value: "Google", logo: "🔵", color: "bg-green-50 border-green-200" },
  { label: "CompTIA", value: "CompTIA", logo: "🛡️", color: "bg-red-50 border-red-200" },
  { label: "PMI", value: "PMI", logo: "📊", color: "bg-purple-50 border-purple-200" },
  { label: "Salesforce", value: "Salesforce", logo: "☁️", color: "bg-sky-50 border-sky-200" },
  { label: "Meta", value: "Meta", logo: "🔷", color: "bg-indigo-50 border-indigo-200" },
  { label: "Cisco", value: "Cisco", logo: "🌐", color: "bg-teal-50 border-teal-200" },
];

export const certifications: Certification[] = [
  // Microsoft
  {
    id: "ms1",
    title: "Microsoft Azure Fundamentals (AZ-900) Cert Prep",
    provider: "Microsoft",
    providerLogo: "🪟",
    credentialType: "Certification Prep",
    category: "technology",
    courseCount: 8,
    duration: "11h 30m",
    level: "Beginner",
    rating: 4.8,
    reviewCount: 34500,
    examCode: "AZ-900",
    description: "Prepare for the AZ-900 exam with hands-on Azure fundamentals coverage, including cloud concepts, core services, security, and pricing.",
    skills: ["Azure", "Cloud Computing", "IaaS", "SaaS"],
    isFeatured: true,
  },
  {
    id: "ms2",
    title: "Microsoft Azure Developer Associate (AZ-204)",
    provider: "Microsoft",
    providerLogo: "🪟",
    credentialType: "Certification Prep",
    category: "technology",
    courseCount: 14,
    duration: "22h 40m",
    level: "Intermediate",
    rating: 4.7,
    reviewCount: 18900,
    examCode: "AZ-204",
    description: "Master Azure development skills and prepare for the AZ-204 developer certification exam.",
    skills: ["Azure", "APIs", "Containers", "Serverless"],
  },
  {
    id: "ms3",
    title: "Microsoft Power BI Data Analyst (PL-300)",
    provider: "Microsoft",
    providerLogo: "🪟",
    credentialType: "Certification Prep",
    category: "business",
    courseCount: 10,
    duration: "15h 20m",
    level: "Intermediate",
    rating: 4.7,
    reviewCount: 12400,
    examCode: "PL-300",
    description: "Prepare for the Power BI Data Analyst certification covering DAX, data modeling, and report design.",
    skills: ["Power BI", "DAX", "Data Modeling"],
    isNew: true,
  },
  {
    id: "ms4",
    title: "Microsoft Security Operations Analyst (SC-200)",
    provider: "Microsoft",
    providerLogo: "🪟",
    credentialType: "Certification Prep",
    category: "security",
    courseCount: 12,
    duration: "18h 10m",
    level: "Advanced",
    rating: 4.8,
    reviewCount: 7600,
    examCode: "SC-200",
    description: "Learn to mitigate threats using Microsoft Sentinel, Defender, and cloud security tools.",
    skills: ["Security", "SIEM", "Microsoft Sentinel"],
  },

  // AWS
  {
    id: "aws1",
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    provider: "AWS",
    providerLogo: "☁️",
    credentialType: "Certification Prep",
    category: "technology",
    courseCount: 7,
    duration: "9h 45m",
    level: "Beginner",
    rating: 4.9,
    reviewCount: 42100,
    examCode: "CLF-C02",
    description: "Start your AWS journey with foundational cloud knowledge needed for the Cloud Practitioner exam.",
    skills: ["AWS", "Cloud", "EC2", "S3"],
    isFeatured: true,
  },
  {
    id: "aws2",
    title: "AWS Certified Solutions Architect – Associate (SAA-C03)",
    provider: "AWS",
    providerLogo: "☁️",
    credentialType: "Certification Prep",
    category: "technology",
    courseCount: 16,
    duration: "28h 00m",
    level: "Intermediate",
    rating: 4.8,
    reviewCount: 31200,
    examCode: "SAA-C03",
    description: "Design resilient, performant, secure, and cost-optimized AWS architectures.",
    skills: ["AWS", "Architecture", "VPC", "IAM"],
    isFeatured: true,
  },
  {
    id: "aws3",
    title: "AWS Certified Developer – Associate (DVA-C02)",
    provider: "AWS",
    providerLogo: "☁️",
    credentialType: "Certification Prep",
    category: "technology",
    courseCount: 12,
    duration: "19h 30m",
    level: "Intermediate",
    rating: 4.7,
    reviewCount: 14800,
    examCode: "DVA-C02",
    description: "Develop, deploy, and debug cloud-based applications on AWS.",
    skills: ["Lambda", "DynamoDB", "CodePipeline"],
    isNew: true,
  },

  // Google
  {
    id: "gc1",
    title: "Google Project Management Certificate",
    provider: "Google",
    providerLogo: "🔵",
    credentialType: "Professional Certificate",
    category: "business",
    courseCount: 6,
    duration: "6 months",
    level: "Beginner",
    rating: 4.8,
    reviewCount: 55000,
    description: "Earn a Google career certificate in project management. No experience required.",
    skills: ["Project Management", "Agile", "Scrum", "Risk Management"],
    isFeatured: true,
  },
  {
    id: "gc2",
    title: "Google Data Analytics Certificate",
    provider: "Google",
    providerLogo: "🔵",
    credentialType: "Professional Certificate",
    category: "technology",
    courseCount: 8,
    duration: "6 months",
    level: "Beginner",
    rating: 4.9,
    reviewCount: 68000,
    description: "Launch your career in data analytics with this Google-designed certificate program.",
    skills: ["SQL", "R", "Tableau", "Spreadsheets"],
    isFeatured: true,
  },
  {
    id: "gc3",
    title: "Google UX Design Certificate",
    provider: "Google",
    providerLogo: "🔵",
    credentialType: "Professional Certificate",
    category: "creative",
    courseCount: 7,
    duration: "6 months",
    level: "Beginner",
    rating: 4.8,
    reviewCount: 41200,
    description: "Learn UX design foundations, wireframing, prototyping, and user research from Google.",
    skills: ["UX Design", "Figma", "Wireframing", "Usability Testing"],
    isNew: true,
  },

  // CompTIA
  {
    id: "ct1",
    title: "CompTIA Security+ (SY0-701) Cert Prep",
    provider: "CompTIA",
    providerLogo: "🛡️",
    credentialType: "Certification Prep",
    category: "security",
    courseCount: 11,
    duration: "20h 15m",
    level: "Intermediate",
    rating: 4.8,
    reviewCount: 22700,
    examCode: "SY0-701",
    description: "Prepare for the Security+ exam covering threats, attacks, cryptography, and identity management.",
    skills: ["Cybersecurity", "Cryptography", "Network Security"],
    isFeatured: true,
  },
  {
    id: "ct2",
    title: "CompTIA A+ Core 1 & 2 (220-1101/1102)",
    provider: "CompTIA",
    providerLogo: "🛡️",
    credentialType: "Certification Prep",
    category: "technology",
    courseCount: 18,
    duration: "32h 00m",
    level: "Beginner",
    rating: 4.6,
    reviewCount: 16400,
    examCode: "220-1101",
    description: "Start your IT career with the industry-standard CompTIA A+ certification prep.",
    skills: ["Hardware", "Networking", "OS", "Troubleshooting"],
  },
  {
    id: "ct3",
    title: "CompTIA Network+ (N10-009) Cert Prep",
    provider: "CompTIA",
    providerLogo: "🛡️",
    credentialType: "Certification Prep",
    category: "technology",
    courseCount: 9,
    duration: "16h 45m",
    level: "Intermediate",
    rating: 4.7,
    reviewCount: 9800,
    examCode: "N10-009",
    description: "Master networking concepts, infrastructure, and operations for the Network+ exam.",
    skills: ["Networking", "TCP/IP", "DNS", "Switching"],
    isNew: true,
  },

  // PMI
  {
    id: "pmi1",
    title: "Project Management Professional (PMP) Cert Prep",
    provider: "PMI",
    providerLogo: "📊",
    credentialType: "Certification Prep",
    category: "business",
    courseCount: 13,
    duration: "24h 30m",
    level: "Advanced",
    rating: 4.8,
    reviewCount: 28900,
    examCode: "PMP",
    description: "Comprehensive PMP exam preparation covering predictive, agile, and hybrid approaches.",
    skills: ["PMP", "Agile", "Waterfall", "Risk Management"],
    isFeatured: true,
  },
  {
    id: "pmi2",
    title: "PMI Agile Certified Practitioner (PMI-ACP)",
    provider: "PMI",
    providerLogo: "📊",
    credentialType: "Certification Prep",
    category: "business",
    courseCount: 8,
    duration: "14h 00m",
    level: "Intermediate",
    rating: 4.6,
    reviewCount: 8200,
    examCode: "PMI-ACP",
    description: "Prepare for the PMI-ACP exam with deep coverage of Scrum, Kanban, SAFe, and Lean.",
    skills: ["Agile", "Scrum", "Kanban", "SAFe"],
  },

  // Salesforce
  {
    id: "sf1",
    title: "Salesforce Certified Administrator Cert Prep",
    provider: "Salesforce",
    providerLogo: "☁️",
    credentialType: "Certification Prep",
    category: "business",
    courseCount: 10,
    duration: "17h 20m",
    level: "Intermediate",
    rating: 4.7,
    reviewCount: 11300,
    examCode: "ADM 201",
    description: "Prepare to become a Salesforce Certified Administrator with hands-on platform coverage.",
    skills: ["Salesforce", "CRM", "Automation", "Reports"],
  },

  // Meta
  {
    id: "meta1",
    title: "Meta Front-End Developer Professional Certificate",
    provider: "Meta",
    providerLogo: "🔷",
    credentialType: "Professional Certificate",
    category: "technology",
    courseCount: 9,
    duration: "7 months",
    level: "Beginner",
    rating: 4.7,
    reviewCount: 29500,
    description: "Become a front-end developer with this Meta-designed program covering HTML, CSS, React, and more.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    isNew: true,
  },

  // Cisco
  {
    id: "cisco1",
    title: "Cisco CCNA (200-301) Cert Prep",
    provider: "Cisco",
    providerLogo: "🌐",
    credentialType: "Certification Prep",
    category: "technology",
    courseCount: 15,
    duration: "26h 10m",
    level: "Intermediate",
    rating: 4.8,
    reviewCount: 17600,
    examCode: "200-301",
    description: "Prepare for the CCNA exam covering network fundamentals, routing, switching, and security.",
    skills: ["Cisco", "Routing", "Switching", "VLANs"],
  },
];

export const getCertsByProvider = (provider: string) =>
  provider === "all" ? certifications : certifications.filter((c) => c.provider === provider);

export const getCertsByType = (type: string) =>
  type === "all" ? certifications : certifications.filter((c) => c.credentialType === type);