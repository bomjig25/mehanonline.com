export type ForecastDomain = "Capability" | "Science" | "Economics" | "Geopolitics" | "Institutions" | "Autonomy";

export type Forecast = {
  id: string;
  number: string;
  domain: ForecastDomain;
  horizon: number;
  probability: number;
  previousProbability: number;
  status: "Open" | "Rising" | "Contested";
  title: string;
  proposition: string;
  plainLanguage: string;
  accelerationCase: string[];
  frictionCase: string[];
  hinge: string;
  review: string;
  sources: string[];
};

export const sources = [
  {
    id: "safety-report",
    label: "International AI Safety Report 2026",
    publisher: "International expert writing group",
    href: "https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026",
  },
  {
    id: "ai-index",
    label: "2026 AI Index Report",
    publisher: "Stanford Institute for Human-Centered AI",
    href: "https://hai.stanford.edu/ai-index/2026-ai-index-report",
  },
  {
    id: "metr",
    label: "Task-Completion Time Horizons",
    publisher: "METR",
    href: "https://metr.org/index.html",
  },
  {
    id: "nasa-ai",
    label: "Artificial Intelligence at NASA",
    publisher: "NASA",
    href: "https://www.nasa.gov/artificial-intelligence/",
  },
  {
    id: "nasa-autonomy",
    label: "New Onboard Capability for Autonomous Spacecraft",
    publisher: "NASA Science",
    href: "https://science.nasa.gov/science-research/science-enabling-technology/technology-highlights/new-onboard-capability-to-enable-autonomous-spacecraft-operations/",
  },
] as const;

export const forecasts: Forecast[] = [
  {
    id: "week-of-work",
    number: "F-01",
    domain: "Capability",
    horizon: 2028,
    probability: 62,
    previousProbability: 54,
    status: "Rising",
    title: "A week of useful work",
    proposition: "By the end of 2028, a frontier AI agent will reliably complete a bounded software or research task that takes a skilled human one working week.",
    plainLanguage: "The important transition is not a smarter answer. It is a machine that can keep working, recover from mistakes, and finish something substantial.",
    accelerationCase: [
      "Measured autonomous task horizons have increased rapidly across successive frontier systems.",
      "Coding, tool use, and long-context planning are increasingly designed as one integrated workflow.",
    ],
    frictionCase: [
      "Performance remains jagged: long runs compound small errors and evaluation awareness can distort results.",
      "A benchmark task is cleaner than real work involving people, changing requirements, and incomplete information.",
    ],
    hinge: "Independent evaluations showing at least 80% success on unfamiliar, week-scale tasks with no human rescue.",
    review: "September 2026",
    sources: ["metr", "safety-report"],
  },
  {
    id: "research-result",
    number: "F-02",
    domain: "Science",
    horizon: 2029,
    probability: 48,
    previousProbability: 45,
    status: "Contested",
    title: "An AI-originated scientific result",
    proposition: "By the end of 2029, an AI-led system will originate and experimentally validate a consequential scientific result with humans serving primarily as reviewers and operators.",
    plainLanguage: "AI already assists science. The unresolved threshold is whether it can choose a valuable question and drive the evidentiary chain to a result.",
    accelerationCase: [
      "Frontier systems increasingly perform strongly on advanced scientific and mathematical evaluations.",
      "Automated laboratories can connect hypothesis generation, experiment selection, and analysis.",
    ],
    frictionCase: [
      "Scientific importance is not captured by exam performance or fluent explanations.",
      "Physical experiments remain slow, expensive, domain-specific, and dependent on tacit knowledge.",
    ],
    hinge: "A replicated result whose novelty, experimental design, and interpretation are independently attributed primarily to the AI system.",
    review: "October 2026",
    sources: ["ai-index", "safety-report"],
  },
  {
    id: "cost-collapse",
    number: "F-03",
    domain: "Economics",
    horizon: 2028,
    probability: 76,
    previousProbability: 70,
    status: "Rising",
    title: "A tenfold cost collapse",
    proposition: "By the end of 2028, a fixed basket of useful frontier-level cognitive tasks will cost at least 90% less to perform than it did in 2026.",
    plainLanguage: "Capability matters, but price determines diffusion. Intelligence becomes socially transformative when millions can afford to use it repeatedly.",
    accelerationCase: [
      "Model efficiency, specialized hardware, competition, and smaller capable systems all push unit costs down.",
      "The U.S.–China capability gap has narrowed, increasing competitive pressure across ecosystems.",
    ],
    frictionCase: [
      "The cost of the most difficult reasoning can rise when systems use more test-time computation.",
      "Energy, memory, data-center construction, and chip supply impose physical costs that software cannot erase.",
    ],
    hinge: "A reproducible task basket priced at equivalent quality across providers, rather than nominal token prices alone.",
    review: "December 2026",
    sources: ["ai-index"],
  },
  {
    id: "frontier-parity",
    number: "F-04",
    domain: "Geopolitics",
    horizon: 2027,
    probability: 71,
    previousProbability: 64,
    status: "Rising",
    title: "A permanently multipolar frontier",
    proposition: "Through 2027, no single country will retain an uncontested, durable lead across reasoning, agents, multimodality, cost, and open-model adoption.",
    plainLanguage: "The frontier may stop looking like one winner and start looking like several ecosystems trading advantages across different dimensions.",
    accelerationCase: [
      "American and Chinese models have traded the lead, while open systems diffuse techniques quickly.",
      "Distribution, energy, robotics, patents, and deployment scale create different forms of advantage.",
    ],
    frictionCase: [
      "Advanced chips, capital, cloud capacity, and research talent remain highly concentrated.",
      "A decisive architectural or hardware breakthrough could restore a clear lead.",
    ],
    hinge: "A consistent twelve-month lead by one ecosystem across a declared multi-dimensional comparison, not a single benchmark.",
    review: "November 2026",
    sources: ["ai-index"],
  },
  {
    id: "institutional-lag",
    number: "F-05",
    domain: "Institutions",
    horizon: 2030,
    probability: 83,
    previousProbability: 81,
    status: "Open",
    title: "The clock-speed gap widens",
    proposition: "By 2030, at least one major profession will experience AI capability and adoption changing materially faster than its licensing, liability, or accreditation system can adapt.",
    plainLanguage: "Machines update continuously. Institutions move through hearings, budgets, court cases, and professional consensus. The mismatch is itself a forecastable force.",
    accelerationCase: [
      "AI use has diffused rapidly across organizations, education, and professional workflows.",
      "General-purpose systems can be deployed broadly before sector-specific evidence is mature.",
    ],
    frictionCase: [
      "Adoption is not the same as trusted substitution; liability and workflow integration can slow real change.",
      "Professions may absorb AI incrementally rather than experience a visible institutional break.",
    ],
    hinge: "A documented gap between widespread task substitution and the rules governing who remains accountable for that work.",
    review: "January 2027",
    sources: ["ai-index", "safety-report"],
  },
  {
    id: "machine-delegation",
    number: "F-06",
    domain: "Autonomy",
    horizon: 2030,
    probability: 68,
    previousProbability: 63,
    status: "Open",
    title: "Delegation beyond communication",
    proposition: "By 2030, a public scientific mission will routinely delegate a consequential sequence of observation and response decisions to an onboard AI system because human instruction arrives too late.",
    plainLanguage: "In deep space, autonomy is not merely convenient. Distance turns delayed communication into a physical limit on human control.",
    accelerationCase: [
      "NASA already uses autonomous driving extensively on Mars and is developing event-driven onboard operations.",
      "Transient science targets and multi-spacecraft missions reward decisions made where the data is produced.",
    ],
    frictionCase: [
      "Mission assurance strongly favors predictable, extensively tested systems over general-purpose autonomy.",
      "Consequential decisions may remain constrained to narrow, pre-authorized envelopes.",
    ],
    hinge: "An operational mission report documenting repeated AI-selected actions that materially change the science plan without prior ground approval.",
    review: "February 2027",
    sources: ["nasa-ai", "nasa-autonomy"],
  },
];
