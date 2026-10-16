import { Project, ExperienceItem, EducationItem, CertificationItem, FeudQuestion } from '../types';

export const PERSONAL_INFO = {
  name: 'Zainab Mohammed Aloraibi',
  shortName: 'Zainab Aloraibi',
  tagline: 'English Educator, Educational Technologist & Systems Consultant',
  bio: 'Versatile professional with 6 years of English teaching experience, background in consulting, administration, and customer service. Skilled at developing interactive web games, building organizational workflows, and designing tailored language acquisition plans. Fluent in English and Arabic, with technical capabilities in Python, Django, and web development.',
  email: 'Lisamo2732000@gmail.com',
  location: 'Libya',
  skyBgImage: 'bg.jpg',
  familyFeudLiveUrl: 'https://lisamo2732000-lgtm.github.io/speak-up-feud/family-feud-v2-5.html',
  status: 'Open to EdTech, Teaching & Workflow Consulting roles',
  stats: [
    { label: 'Years Teaching English', value: '6', subtext: 'Different ages & proficiencies' },
    { label: 'Students Placement Tested', value: '1,000+', subtext: 'Belgray Univ & Language Center' },
    { label: 'Competition Win', value: '1st', subtext: 'English-learning web platform' },
    { label: 'ASU Course Distinction', value: '100%', subtext: 'Teach English Now! Specialization' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'speak-up-feud',
    title: 'Speak-Up Feud',
    subtitle: 'Interactive Family Feud-Style Speaking Game for Social Clubs',
    category: 'edtech',
    categoryLabel: 'EdTech & Gamified Learning',
    description: 'A web-based speaking practice game inspired by Family Feud, built specifically for English conversation social clubs to eliminate speaking anxiety through friendly team competition.',
    longDescription: 'Engineered a full web-based interactive game for community speaking clubs. Players form teams, buzz in, and guess top survey answers for English conversation prompts, idioms, and situational dialogues. Designed with buzzer mechanics, flip-card reveal animations, and real-time score tracking to turn shy speakers into active participants.',
    tags: ['Interactive Web Game', 'Gamified ESL', 'Django / JavaScript', 'UI/UX Design'],
    image: '/src/assets/images/speak_up_feud_preview_1792159092770.jpg',
    year: '2024',
    featured: true,
    awards: 'Live Game Deployed (v2.5) across speaking clubs',
    liveUrl: 'https://lisamo2732000-lgtm.github.io/speak-up-feud/family-feud-v2-5.html',
    status: 'completed',
    highlights: [
      'Live deployed production game v2.5 with full buzzer & score mechanics',
      'Curated 50+ ESL conversation prompt decks with graded vocabulary points',
      'Significantly increased student participation rate in club speaking sessions',
      'Scannable QR code enabled instant mobile gameplay in classroom environments'
    ],
    demoType: 'interactive-game'
  },
  {
    id: 'competition-winner-platform',
    title: 'FluentFlow Hub (In Progress)',
    subtitle: 'Award-Winning English Learning Platform · Currently in V2 Development',
    category: 'web-dev',
    categoryLabel: 'In Progress · Competition Winner',
    description: 'First-place winning web project combining pedagogical language acquisition theory with an interactive web experience. Currently undergoing complete V2 architectural modernization.',
    longDescription: 'First-place competition winning English learning web project, originally built to integrate oral diagnostic frameworks and adaptive language drills. The system is currently in active development (V2 redesign) to introduce modernized phonetics waveforms, updated lesson progressions, and enhanced real-time speaking exercises.',
    tags: ['In Progress (V2)', 'Python / Django', 'Pedagogical UX', 'Competition Winner'],
    image: '/src/assets/images/learning_platform_showcase_1792159093872.jpg',
    year: 'Active Development',
    featured: true,
    awards: '1st Place Competition Winner (V2 in Progress)',
    status: 'in-progress',
    highlights: [
      'In active development: Upgrading the core interactive curriculum modules',
      'Won 1st place in regional competition for original learning concept',
      'Redesigning oral diagnostic framework tested on over 1,000+ university students',
      'Adding updated daily vocabulary micro-drills and pronunciation feedback'
    ],
    demoType: 'case-study'
  },
  {
    id: 'automated-invoicing-system',
    title: 'AutoInvoice & Payment Archive',
    subtitle: 'Automated Billing Generation & Archiving Workflow System',
    category: 'automation',
    categoryLabel: 'Process Automation & Systems',
    description: 'Python-based automation suite that generates invoices dynamically, archives payments, and organizes contractual records for administrative departments.',
    longDescription: 'Created a centralized system for archiving payments and automated invoice generation during administrative tenure. Eliminated hours of tedious manual data entry by writing custom scripts that pull contract terms, calculate balances, and generate print-ready invoices automatically.',
    tags: ['Python Automation', 'Document Archiving', 'Workflow Engineering', 'Administrative Suite'],
    image: '/src/assets/images/automation_invoicing_system_1792159093563.jpg',
    year: '2023',
    featured: true,
    highlights: [
      'Engineered automated invoice generation pipeline from client records',
      'Built a complete searchable payment archive system with contract auditing',
      'Reduced recurring administrative billing overhead by over 70%',
      'Standardized financial file organization across administrative staff'
    ],
    demoType: 'code-preview'
  },
  {
    id: 'speaking-social-club',
    title: 'The English Speaking Social Club',
    subtitle: 'Community-Driven Conversation Club & Event Series',
    category: 'community',
    categoryLabel: 'Community & Event Planning',
    description: 'Founded, planned, and directed an English-speaking social club dedicated to oral fluency, interactive debates, and cultural exchange.',
    longDescription: 'Spearheaded the formation of a dynamic English speaking club. Designed weekly conversation agendas, prepared all pedagogical materials, facilitated breakout debates, and hosted themed speaking tournaments. Built an encouraging, judgment-free space that boosted learner confidence.',
    tags: ['Event Planning', 'Curriculum Design', 'Public Speaking', 'Community Leadership'],
    image: '/src/assets/images/botanical_banner_illustration_1792159093125.jpg',
    year: '2022 - Present',
    featured: false,
    highlights: [
      'Organized and hosted regular high-engagement speaking workshops and events',
      'Prepared tailored interactive speaking materials, prompts, and debate scenarios',
      'Mentored members on pronunciation, idiom usage, and natural conversational cadence',
      'Connected hundreds of learners seeking practical everyday fluency'
    ],
    demoType: 'case-study'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'English Teacher & Placement Specialist',
    organization: 'Belgray University & Language Center',
    duration: '6 Years (2018 - 2024)',
    type: 'Academic & Language Instruction',
    description: 'Taught English across multiple age groups and proficiency levels with a core focus on communicative fluency and language acquisition.',
    keyResponsibilities: [
      'Conducted oral placement tests for 1,000+ incoming students at Belgray University to determine proficiency tiering.',
      'Administered standardized oral evaluations for students at dedicated English language center.',
      'Conducted individual learning needs analyses and formulated tailored educational roadmaps.',
      'Researched learner pain points to design impactful online courses and conversation circles.'
    ],
    metrics: '1,000+ Oral Evaluations Conducted'
  },
  {
    id: 'exp-2',
    role: 'Online English Tutor',
    organization: 'Preply',
    duration: '2021 - Present',
    type: 'Remote 1-on-1 Tutoring',
    description: 'Delivering personalized online English lessons to global students, utilizing interactive digital tools and custom-tailored curriculum.',
    keyResponsibilities: [
      'Prepare bespoke multimedia lesson plans adapted to each individual learner’s goals.',
      'Coach professionals and students on conversational fluency, vocabulary nuance, and grammar.',
      'Maintain stellar student retention and satisfaction through encouraging feedback loops.'
    ],
    metrics: 'Global Student Roster'
  },
  {
    id: 'exp-3',
    role: 'Educational Consultant & Workflow Architect',
    organization: 'Independent Consulting',
    duration: '2022 - Present',
    type: 'Consulting & Systems',
    description: 'Advising private clients and organizations on English learning methodologies while constructing operational workflow systems.',
    keyResponsibilities: [
      'Formulate structured learning paths for clients pursuing academic and career advancement.',
      'Design organized digital workspaces for files, learner records, and communication pipelines.',
      'Provide strategic counsel on language program implementation.'
    ]
  },
  {
    id: 'exp-4',
    role: 'Administrator & Customer Service Specialist',
    organization: 'Commercial & Institutional Administration',
    duration: '2020 - 2023',
    type: 'Operations & Administration',
    description: 'Oversaw daily administrative records, customer reception, client communication, and financial invoicing automation.',
    keyResponsibilities: [
      'Organized files, client records, and legal contracts; prepared recurring invoices.',
      'Built a complete centralized system for archiving payments and audit tracking.',
      'Wrote automation code to generate invoices automatically, eliminating manual billing overhead.',
      'Welcomed visitors, managed schedules, and handled client inquiries with high etiquette and persuasion.'
    ],
    metrics: 'Automated Invoicing Implemented'
  },
  {
    id: 'exp-5',
    role: 'Teaching Intern',
    organization: 'House of Study',
    duration: '2019 - 2020',
    type: 'Pedagogical Internship',
    description: 'Supported classroom activities, lesson plan drafting, and student engagement monitoring during foundational teaching practice.',
    keyResponsibilities: [
      'Assisted senior educators with material preparation and interactive classroom exercises.',
      'Facilitated small-group reading comprehension and conversational practice circles.'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-1',
    degree: "Master's Degree in Biomedical Science",
    institution: 'University Graduate School',
    year: 'Currently Pursuing',
    status: 'In Progress',
    details: 'Rigorous scientific training emphasizing research methodology, data analysis, biochemical synthesis, and academic literature review.'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Teach English Now! Foundational Principles',
    issuer: 'Arizona State University (Online)',
    date: 'June 2026',
    grade: '100%',
    status: 'Completed with Honors',
    topics: ['Core Language Methodologies', 'Student Motivation', 'Classroom Dynamics']
  },
  {
    id: 'cert-2',
    title: 'Teach English Now! Theories of Second Language Acquisition',
    issuer: 'Arizona State University (Online)',
    date: 'June 2026',
    grade: '100%',
    status: 'Completed with Honors',
    topics: ['SLA Cognitive Models', 'Affective Filter Hypothesis', 'Input Comprehension']
  },
  {
    id: 'cert-3',
    title: 'Teach English Now! Lesson Design and Assessment',
    issuer: 'Arizona State University (Online)',
    date: 'July 2026',
    grade: '96%',
    status: 'Completed with Honors',
    topics: ['Formative Assessment', 'Rubric Construction', 'Curriculum Mapping']
  },
  {
    id: 'cert-4',
    title: 'TESOL International Certification (Part 1)',
    issuer: 'TESOL International Association',
    date: 'In Progress',
    status: 'In Progress',
    topics: ['Global ESL Standards', 'Cross-Cultural Pedagogy', 'Linguistic Systems']
  }
];

export const SKILLS_DATA = {
  technical: [
    { name: 'Python & Django Framework', level: 'Backend & Web' },
    { name: 'Full-Stack Web Development', level: 'HTML5, CSS3, JavaScript' },
    { name: 'Workflow Automation', level: 'Invoice & Data Scripts' },
    { name: 'Document & Payment Archiving', level: 'Database & Records' },
    { name: 'Office Systems & Software', level: 'Word, Excel, PowerPoint' }
  ],
  pedagogical: [
    { name: 'Oral Placement Testing', level: '1,000+ Students Evaluated' },
    { name: 'Curriculum & Needs Analysis', level: 'Custom Learning Plans' },
    { name: 'Gamified Speaking Activities', level: 'Speak-Up Feud Creator' },
    { name: 'Online 1-on-1 Tutoring', level: 'Preply Certified' },
    { name: 'Bilingual Fluency', level: 'English (Fluent) · Arabic (Native)' }
  ],
  administrative: [
    { name: 'Organizational Systems Design', level: 'Operational Workflows' },
    { name: 'Client Relations & Persuasion', level: 'Customer Etiquette' },
    { name: 'Contract & File Management', level: 'Systematic Archival' },
    { name: 'Event & Workshop Planning', level: 'Speaking Club Director' },
    { name: 'Reception & Operations', level: 'Scheduling & Inquiries' }
  ]
};

export const SAMPLE_FEUD_ROUNDS: FeudQuestion[] = [
  {
    id: 1,
    question: 'Name a common English phrase people use when introducing themselves.',
    category: 'Conversational Icebreakers',
    answers: [
      { text: '"Nice to meet you"', points: 38, revealed: false },
      { text: '"How are you doing?"', points: 26, revealed: false },
      { text: '"Pleasure to meet you"', points: 18, revealed: false },
      { text: '"My name is..."', points: 12, revealed: false },
      { text: '"What brings you here?"', points: 6, revealed: false }
    ]
  },
  {
    id: 2,
    question: 'Name an English idiom related to learning or knowledge.',
    category: 'Idioms & Fluency',
    answers: [
      { text: '"Hit the books"', points: 34, revealed: false },
      { text: '"Learn the ropes"', points: 27, revealed: false },
      { text: '"Brainstorm"', points: 19, revealed: false },
      { text: '"Food for thought"', points: 14, revealed: false },
      { text: '"Piece of cake"', points: 6, revealed: false }
    ]
  },
  {
    id: 3,
    question: 'Name an effective way language learners overcome speaking anxiety.',
    category: 'Classroom Pedagogy',
    answers: [
      { text: 'Play speaking games / roleplays', points: 36, revealed: false },
      { text: 'Practice in small groups', points: 29, revealed: false },
      { text: 'Focus on ideas, not perfection', points: 17, revealed: false },
      { text: 'Daily 5-minute self-talk', points: 11, revealed: false },
      { text: 'Listen to native audio podcasts', points: 7, revealed: false }
    ]
  }
];
