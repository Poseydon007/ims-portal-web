// Education & Learning — Static data for topics and resources
// Resources will be populated as actual content is uploaded

export type ResourceType = "video" | "pdf" | "manual" | "guide" | "checklist";

export interface EducationResource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  url?: string;           // Link to video, PDF, or external resource
  thumbnailUrl?: string;  // For videos: thumbnail image
  duration?: string;      // For videos: e.g. "12 min"
  pages?: number;         // For PDFs/manuals
  fileSize?: string;      // e.g. "2.4 MB"
  available: boolean;     // false = coming soon
  tags?: string[];
}

export interface EducationTopic {
  slug: string;
  code: string;
  name: string;
  description: string;
  icon: string;           // emoji icon
  color: string;          // accent color class
  resourceCount: number;
  resources: EducationResource[];
}

export const educationTopics: EducationTopic[] = [
  {
    slug: "hse",
    code: "HSE",
    name: "Health, Safety & Environment",
    description: "Safety procedures, hazard identification, emergency response, and environmental compliance for all site personnel.",
    icon: "🦺",
    color: "#C49A28",
    resourceCount: 0,
    resources: [
      {
        id: "hse-001",
        title: "Near Miss Reporting — How & Why",
        description: "Step-by-step guide on identifying, documenting, and submitting near miss incidents using the IMS portal.",
        type: "video",
        available: false,
        duration: "8 min",
        tags: ["near miss", "reporting", "HSE"],
      },
      {
        id: "hse-001-guide",
        title: "Near Miss Reporting — Full Guide",
        description: "Why near misses matter, the psychology of not reporting, how to submit via the IMS portal, and what happens after. Story-driven, field-worker language.",
        type: "guide",
        available: true,
        url: "/NearMissReporting.html",
        tags: ["near miss", "reporting", "HSE", "portal"],
      },
      {
        id: "hse-002",
        title: "Job Hazard Analysis (JHA) — Field Guide",
        description: "Practical walkthrough for completing a JHA before starting high-risk tasks on site. Includes risk matrix, hazard categories, controls hierarchy, and a worked drilling example.",
        type: "guide",
        available: true,
        url: "/JHAGuide.html",
        tags: ["JHA", "hazard", "risk assessment"],
      },
      {
        id: "hse-003",
        title: "Emergency Response Procedures",
        description: "Emergency contacts, evacuation routes, muster points, and first response actions for all site emergencies. Covers fire, medical, chemical spill, and KSA-specific hazards.",
        type: "manual",
        available: true,
        url: "/EmergencyResponseManual.html",
        tags: ["emergency", "evacuation", "first aid"],
      },
      {
        id: "hse-004",
        title: "Personal Protective Equipment (PPE) Guide",
        description: "Correct selection, use, inspection, and storage of PPE for 12 task types. Covers all 8 PPE categories with field-worker language and a quick reference card.",
        type: "guide",
        available: true,
        url: "/PPEGuide.html",
        tags: ["PPE", "equipment", "safety"],
      },
    ],
  },
  {
    slug: "ims",
    code: "IMS",
    name: "Integrated Management System",
    description: "Understanding the IMS framework, ISO standards, document control, and how the portal works.",
    icon: "📋",
    color: "#081C2E",
    resourceCount: 0,
    resources: [
      {
        id: "ims-001",
        title: "IMS Playbook — Introduction for New Employees",
        description: "Overview of the True East IMS framework, its purpose, and how it applies to daily work.",
        type: "video",
        available: true,
        url: "https://1drv.ms/v/c/3fc547dccdd2997a/IQA5rBpfSLEMTZ3rcEn9wyKDASOPvQcEsMO94xlGLoaPvVM?e=oftyYC",
        thumbnailUrl: "/thumbnails/ims-playbook-thumb.jpg",
        duration: "5 min",
        tags: ["IMS", "orientation", "ISO"],
      },
      {
        id: "ims-002",
        title: "How to Use the IMS Document Portal",
        description: "Complete user guide covering what the portal is, how to sign in, navigate, read documents, submit forms, track approvals, and use the Education section. Includes role permissions, admin functions, and a full FAQ.",
        type: "manual",
        available: true,
        url: "/IMSPortalTutorial.html",
        tags: ["portal", "tutorial", "documents", "guide"],
      },
      {
        id: "ims-003",
        title: "Document Control Explained",
        description: "Why document control matters, how revisions work, and what controlled vs. uncontrolled copies mean.",
        type: "guide",
        available: true,
        url: "/DocumentControlExplained.html",
        tags: ["document control", "revision", "ISO 9001"],
      },
      {
        id: "ims-004",
        title: "DTD System — Instructions Manual",
        description: "Complete reference guide for the True East Day-to-Day Document (DTD) numbering and registration system. Covers code structure, how to register a document, the document lifecycle, all 16 type codes, 18 department codes, golden rules, and FAQ.",
        type: "manual",
        available: true,
        url: "/DTDInstructionsManual.html",
        tags: ["DTD", "document control", "registration", "numbering"],
      },
      {
        id: "ims-005",
        title: "DTD System — Training Manual",
        description: "5-module instructor-led training guide for the DTD system. Includes exercises, real-world scenarios, a post-training quiz, and trainer notes. Use for onboarding sessions and staff inductions.",
        type: "manual",
        available: true,
        url: "/DTDTrainingManual.html",
        tags: ["DTD", "training", "onboarding", "quiz"],
      },
    ],
  },
  {
    slug: "operations",
    code: "OPS",
    name: "Operations & Procedures",
    description: "Standard operating procedures, work instructions, and operational best practices for site activities.",
    icon: "⚙️",
    color: "#2E5E81",
    resourceCount: 0,
    resources: [
      {
        id: "ops-001",
        title: "Site Induction — New Employee Orientation",
        description: "Mandatory orientation covering site rules, access control, communication protocols, and key contacts.",
        type: "video",
        available: false,
        duration: "20 min",
        tags: ["induction", "orientation", "new employee"],
      },
      {
        id: "ops-002",
        title: "Permit to Work System",
        description: "How the permit to work system operates, who can issue permits, and what activities require them.",
        type: "manual",
        available: false,
        pages: 18,
        tags: ["permit", "PTW", "operations"],
      },
    ],
  },
  {
    slug: "equipment",
    code: "EQP",
    name: "Equipment & Machinery",
    description: "Operation manuals, inspection checklists, and maintenance guides for site equipment and machinery.",
    icon: "🔧",
    color: "#5C3D2E",
    resourceCount: 0,
    resources: [
      {
        id: "eqp-001",
        title: "Pre-Start Equipment Inspection",
        description: "Daily pre-start checklist and inspection procedure for mobile plant and heavy equipment.",
        type: "checklist",
        available: false,
        tags: ["inspection", "equipment", "pre-start"],
      },
    ],
  },
  {
    slug: "regulatory",
    code: "REG",
    name: "Regulatory & Compliance",
    description: "KSA mining regulations, MHRSD requirements, environmental permits, and compliance obligations.",
    icon: "⚖️",
    color: "#3D5A3E",
    resourceCount: 0,
    resources: [
      {
        id: "reg-001",
        title: "KSA Mining Investment Law — Key Points",
        description: "Summary of the key obligations under the Saudi Mining Investment Law relevant to site operations.",
        type: "guide",
        available: false,
        tags: ["KSA", "mining law", "compliance"],
      },
      {
        id: "reg-002",
        title: "MHRSD OHS Regulations Overview",
        description: "Overview of occupational health and safety obligations under MHRSD regulations for mining operations.",
        type: "pdf",
        available: false,
        pages: 8,
        tags: ["MHRSD", "OHS", "regulations"],
      },
    ],
  },
];

export const RESOURCE_TYPE_LABELS: Record<ResourceType, string> = {
  video: "Video",
  pdf: "PDF",
  manual: "Manual",
  guide: "Guide",
  checklist: "Checklist",
};

export const RESOURCE_TYPE_COLORS: Record<ResourceType, { bg: string; text: string }> = {
  video: { bg: "#fef3c7", text: "#92400e" },
  pdf: { bg: "#fee2e2", text: "#991b1b" },
  manual: { bg: "#e0e7ff", text: "#3730a3" },
  guide: { bg: "#d1fae5", text: "#065f46" },
  checklist: { bg: "#f3e8ff", text: "#6b21a8" },
};
