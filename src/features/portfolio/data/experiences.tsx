import {
  BriefcaseBusinessIcon,
  LandmarkIcon,
  ScaleIcon,
  WalletCardsIcon,
} from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "thinkthrough-consulting",
    companyName: "Thinkthrough Consulting",
    location: "New Delhi, India",
    positions: [
      {
        id: "consultant",
        title: "Consultant",
        employmentPeriod: { start: "11.2025", end: "08.2026" },
        employmentType: "Consulting",
        icon: <BriefcaseBusinessIcon />,
        description:
          "Supported Flipkart Foundation programmes through consulting and programme work.",
        skills: [
          "Consulting",
          "Research",
          "Programme Analysis",
          "Stakeholder Communication",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "prs-legislative-research",
    companyName: "PRS Legislative Research",
    positions: [
      {
        id: "management-consultant",
        title: "Management Consultant",
        employmentPeriod: { start: "07.2025", end: "08.2025" },
        employmentType: "Consulting",
        icon: <ScaleIcon />,
        skills: [
          "Legislative Research",
          "Public Policy",
          "Policy Analysis",
          "Research",
        ],
      },
    ],
  },
  {
    id: "central-bank-of-india",
    companyName: "Central Bank of India",
    location: "Regional Office, Chennai",
    locationType: "On-site",
    positions: [
      {
        id: "risk-management",
        title: "Risk Management",
        employmentPeriod: { start: "04.2024", end: "05.2024" },
        employmentType: "Internship",
        icon: <LandmarkIcon />,
        description: `- Reviewed 25+ loan reports.
- Identified 4 high-risk accounts.
- Supported credit-monitoring policies and risk review work.`,
        skills: [
          "Credit Risk",
          "Risk Management",
          "Financial Analysis",
          "Banking",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "sma-enterprises",
    companyName: "SMA Enterprises",
    location: "Chennai, India",
    positions: [
      {
        id: "financial-trainee",
        title: "Financial Trainee",
        employmentPeriod: { start: "12.2017", end: "01.2018" },
        employmentType: "Training",
        icon: <WalletCardsIcon />,
        skills: ["Finance", "Accounting", "Financial Analysis"],
      },
    ],
  },
]
