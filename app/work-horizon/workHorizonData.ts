export type TaskSignal = {
  id: number;
  task: string;
  mode: "Digital" | "Mixed" | "Physical";
  proximity: number;
  friction: number;
};

export type Occupation = {
  slug: string;
  onetCode: string;
  title: string;
  group: string;
  employment: number;
  annualMeanWage: number;
  tasks: TaskSignal[];
};

export const occupations: Occupation[] = [
  {
    slug: "software-developers", onetCode: "15-1252.00", title: "Software Developers", group: "Technology", employment: 1687890, annualMeanWage: 148100,
    tasks: [
      { id: 21662, task: "Analyze user needs and software requirements to determine design feasibility.", mode: "Mixed", proximity: 76, friction: 3 },
      { id: 21669, task: "Develop software testing or validation procedures, programming, or documentation.", mode: "Digital", proximity: 89, friction: 2 },
      { id: 21664, task: "Confer with technical teams to design systems and define constraints and interfaces.", mode: "Mixed", proximity: 59, friction: 4 },
      { id: 21670, task: "Modify software to correct errors, adapt hardware, or improve performance.", mode: "Digital", proximity: 84, friction: 3 },
      { id: 21673, task: "Prepare reports or correspondence on project specifications, activity, or status.", mode: "Digital", proximity: 92, friction: 1 },
    ],
  },
  {
    slug: "accountants-auditors", onetCode: "13-2011.00", title: "Accountants and Auditors", group: "Business", employment: 1449500, annualMeanWage: 94750,
    tasks: [
      { id: 21505, task: "Prepare detailed reports on audit findings.", mode: "Digital", proximity: 91, friction: 2 },
      { id: 21506, task: "Report on asset utilization and audit results and recommend operational changes.", mode: "Mixed", proximity: 72, friction: 3 },
      { id: 21507, task: "Analyze data for deficient controls, duplicated effort, fraud, or non-compliance.", mode: "Digital", proximity: 82, friction: 3 },
      { id: 21508, task: "Inspect account books and accounting systems for accepted procedures and efficiency.", mode: "Digital", proximity: 84, friction: 3 },
      { id: 21510, task: "Confer with company officials about financial and regulatory matters.", mode: "Mixed", proximity: 52, friction: 5 },
    ],
  },
  {
    slug: "lawyers", onetCode: "23-1011.00", title: "Lawyers", group: "Law", employment: 754500, annualMeanWage: 185840,
    tasks: [
      { id: 3774, task: "Interpret laws, rulings, and regulations for individuals and businesses.", mode: "Digital", proximity: 79, friction: 3 },
      { id: 3775, task: "Analyze probable case outcomes using knowledge of legal precedents.", mode: "Digital", proximity: 73, friction: 4 },
      { id: 3778, task: "Gather evidence by interviewing clients and witnesses to establish case facts.", mode: "Mixed", proximity: 44, friction: 5 },
      { id: 3779, task: "Represent clients in court or before government agencies.", mode: "Physical", proximity: 22, friction: 5 },
      { id: 3777, task: "Evaluate findings and develop strategies and arguments for cases.", mode: "Mixed", proximity: 63, friction: 5 },
    ],
  },
  {
    slug: "family-physicians", onetCode: "29-1215.00", title: "Family Medicine Physicians", group: "Healthcare", employment: 107510, annualMeanWage: 255820,
    tasks: [
      { id: 7771, task: "Prescribe or administer treatment, medication, vaccination, and specialized care.", mode: "Physical", proximity: 18, friction: 5 },
      { id: 7772, task: "Order, perform, and interpret tests and records to diagnose patients.", mode: "Mixed", proximity: 49, friction: 5 },
      { id: 7774, task: "Collect, record, and maintain patient histories and examination results.", mode: "Digital", proximity: 85, friction: 3 },
      { id: 7773, task: "Monitor patient conditions and reevaluate treatments as needed.", mode: "Mixed", proximity: 31, friction: 5 },
      { id: 7775, task: "Explain procedures and discuss results or treatments with patients.", mode: "Mixed", proximity: 48, friction: 5 },
    ],
  },
  {
    slug: "secondary-teachers", onetCode: "25-2031.00", title: "Secondary School Teachers", group: "Education", employment: 1065210, annualMeanWage: 76320,
    tasks: [
      { id: 6650, task: "Encourage students to explore opportunities and persevere with challenging tasks.", mode: "Mixed", proximity: 31, friction: 5 },
      { id: 6640, task: "Instruct through lectures, discussions, and demonstrations.", mode: "Mixed", proximity: 43, friction: 4 },
      { id: 6639, task: "Establish and enforce behavioral rules and maintain classroom order.", mode: "Physical", proximity: 12, friction: 5 },
      { id: 6644, task: "Adapt teaching methods and materials to students' varying needs and interests.", mode: "Mixed", proximity: 53, friction: 5 },
      { id: 6642, task: "Prepare, administer, and grade tests and assignments.", mode: "Digital", proximity: 86, friction: 2 },
    ],
  },
  {
    slug: "journalists", onetCode: "27-3023.00", title: "News Analysts, Reporters, and Journalists", group: "Media", employment: 39250, annualMeanWage: 102460,
    tasks: [
      { id: 22623, task: "Write commentaries, columns, or scripts using computers.", mode: "Digital", proximity: 89, friction: 2 },
      { id: 22625, task: "Examine news items to determine topics to address.", mode: "Digital", proximity: 82, friction: 2 },
      { id: 22626, task: "Analyze and interpret news and information from multiple sources.", mode: "Digital", proximity: 78, friction: 3 },
      { id: 22628, task: "Research a story's background to provide complete and accurate information.", mode: "Mixed", proximity: 68, friction: 4 },
      { id: 22629, task: "Arrange interviews with people who can provide information about a story.", mode: "Mixed", proximity: 45, friction: 5 },
    ],
  },
  {
    slug: "medical-scientists", onetCode: "19-1042.00", title: "Medical Scientists", group: "Science", employment: 172340, annualMeanWage: 116840,
    tasks: [
      { id: 7514, task: "Follow strict safety procedures when handling toxic materials.", mode: "Physical", proximity: 15, friction: 5 },
      { id: 7515, task: "Evaluate effects of drugs, gases, pesticides, parasites, and microorganisms.", mode: "Mixed", proximity: 48, friction: 5 },
      { id: 7513, task: "Plan and direct studies of disease, prevention, and treatment.", mode: "Mixed", proximity: 54, friction: 5 },
      { id: 20200, task: "Develop medical research methods, analyze data, and present findings.", mode: "Mixed", proximity: 68, friction: 4 },
      { id: 20201, task: "Write and publish articles in scientific journals.", mode: "Digital", proximity: 84, friction: 3 },
    ],
  },
  {
    slug: "project-managers", onetCode: "13-1082.00", title: "Project Management Specialists", group: "Business", employment: 1066670, annualMeanWage: 110740,
    tasks: [
      { id: 21463, task: "Communicate with stakeholders to determine project requirements and objectives.", mode: "Mixed", proximity: 56, friction: 5 },
      { id: 21464, task: "Confer with project personnel to identify and resolve problems.", mode: "Mixed", proximity: 48, friction: 5 },
      { id: 21465, task: "Create project status presentations for customers or project personnel.", mode: "Digital", proximity: 91, friction: 2 },
      { id: 21466, task: "Develop or update project plans, schedules, funding, and staffing.", mode: "Digital", proximity: 78, friction: 4 },
      { id: 21470, task: "Monitor project milestones and deliverables.", mode: "Digital", proximity: 75, friction: 4 },
    ],
  },
  {
    slug: "customer-service", onetCode: "43-4051.00", title: "Customer Service Representatives", group: "Service", employment: 2595750, annualMeanWage: 46590,
    tasks: [
      { id: 18565, task: "Provide product information, enter orders, or obtain complaint details.", mode: "Mixed", proximity: 88, friction: 3 },
      { id: 2578, task: "Keep records of customer interactions, inquiries, complaints, and actions.", mode: "Digital", proximity: 95, friction: 1 },
      { id: 2580, task: "Check that appropriate changes were made to resolve customer problems.", mode: "Digital", proximity: 82, friction: 3 },
      { id: 2581, task: "Respond to inquiries or notify customers of investigation results or adjustments.", mode: "Digital", proximity: 91, friction: 2 },
      { id: 2582, task: "Refer unresolved customer grievances for further investigation.", mode: "Mixed", proximity: 76, friction: 4 },
    ],
  },
  {
    slug: "electricians", onetCode: "47-2111.00", title: "Electricians", group: "Trades", employment: 757220, annualMeanWage: 71490,
    tasks: [
      { id: 2882, task: "Prepare sketches or follow blueprints while meeting building and safety codes.", mode: "Mixed", proximity: 54, friction: 4 },
      { id: 2888, task: "Place conduit and pull wire through concealed areas to complete circuits.", mode: "Physical", proximity: 8, friction: 5 },
      { id: 2887, task: "Work from ladders, scaffolds, or roofs to install and repair wiring.", mode: "Physical", proximity: 6, friction: 5 },
      { id: 2883, task: "Use power tools, measuring devices, and testing equipment.", mode: "Physical", proximity: 16, friction: 5 },
      { id: 2873, task: "Assemble, install, test, or maintain electrical wiring and equipment.", mode: "Physical", proximity: 11, friction: 5 },
    ],
  },
  {
    slug: "registered-nurses", onetCode: "29-1141.00", title: "Registered Nurses", group: "Healthcare", employment: 3379720, annualMeanWage: 101420,
    tasks: [
      { id: 1841, task: "Record patients' medical information and vital signs.", mode: "Digital", proximity: 78, friction: 3 },
      { id: 20413, task: "Administer medications and monitor reactions or side effects.", mode: "Physical", proximity: 13, friction: 5 },
      { id: 1839, task: "Maintain accurate, detailed reports and records.", mode: "Digital", proximity: 86, friction: 2 },
      { id: 1840, task: "Monitor, record, and report symptoms or changes in patients' conditions.", mode: "Mixed", proximity: 36, friction: 5 },
      { id: 1843, task: "Coordinate with healthcare teams to assess and execute patient care plans.", mode: "Mixed", proximity: 34, friction: 5 },
    ],
  },
  {
    slug: "chief-executives", onetCode: "11-1011.00", title: "Chief Executives", group: "Management", employment: 204350, annualMeanWage: 269630,
    tasks: [
      { id: 8823, task: "Direct or coordinate financial and budget activities.", mode: "Mixed", proximity: 64, friction: 5 },
      { id: 8824, task: "Confer with boards, officials, or staff to coordinate activities or resolve problems.", mode: "Mixed", proximity: 38, friction: 5 },
      { id: 8827, task: "Prepare budgets for approval and program implementation.", mode: "Digital", proximity: 82, friction: 3 },
      { id: 8826, task: "Direct policies and objectives to sustain operations and improve productivity.", mode: "Mixed", proximity: 42, friction: 5 },
      { id: 8825, task: "Analyze operations, performance, cost reduction, and policy change.", mode: "Mixed", proximity: 67, friction: 5 },
    ],
  },
];
