import { ChartNoAxesCombinedIcon, FlaskConicalIcon } from "lucide-react"

import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "lios-terminal",
    title: "LiOS Terminal",
    period: { start: "2025" },
    link: "https://limuriaintelligence.com",
    skills: [
      "Financial Intelligence",
      "Valuation",
      "Portfolio Analytics",
      "Risk Management",
      "Fixed Income",
      "Derivatives",
      "Macro & FX",
      "AI-assisted Research",
      "Product Development",
    ],
    description:
      "End-to-end financial and intelligence analytics platform covering DCF/FCFF/FCFE and comparable valuation, scenario and sensitivity analysis, portfolio/risk analytics, fixed income, derivatives, macro/FX, data integrations and AI-assisted research workflows.",
    icon: <ChartNoAxesCombinedIcon />,
    isExpanded: true,
  },
  {
    id: "nidan-laboratories-valuation",
    title: "Nidan Laboratories Valuation",
    period: { start: "09.2024", end: "09.2024" },
    link: "https://limuriaintelligence.com",
    skills: [
      "Three-statement Model",
      "Financial Forecasting",
      "DCF",
      "Comparable Companies",
      "Sensitivity Analysis",
      "Valuation",
    ],
    description:
      "IIM Sirmaur valuation project: built a three-statement model, five-year projections, DCF, comparable-company valuation and sensitivity analysis.",
    icon: <FlaskConicalIcon />,
  },
]
