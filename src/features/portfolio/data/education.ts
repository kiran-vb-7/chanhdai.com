import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "iim-sirmaur",
    school: "Indian Institute of Management Sirmaur",
    degree: "Master of Business Administration",
    fieldOfStudy: "Finance (Major) & Strategy (Minor)",
    period: { start: "2023", end: "2025" },
    description:
      "MBA focused on finance and strategy, with coursework including Derivatives & Risk Management, Investment Analysis & Portfolio Management, Corporate Valuation, M&A and Private Equity/Venture Capital.",
    skills: [
      "Corporate Valuation",
      "Financial Modelling",
      "Derivatives & Risk Management",
      "Portfolio Management",
      "M&A",
      "Private Equity",
      "Strategy",
    ],
    isExpanded: true,
  },
  {
    id: "loyola-college-chennai",
    school: "Loyola College Chennai, University of Madras",
    degree: "Bachelor of Commerce",
    fieldOfStudy: "Corporate Secretaryship",
    period: { start: "2015", end: "2018" },
    skills: ["Accounting", "Corporate Finance", "Commerce"],
  },
]
