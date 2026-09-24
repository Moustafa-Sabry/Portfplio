export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  track?: string;
  skillsCovered: string[];
}

export const certificationsData: CertificationItem[] = [
  {
    id: 'meta-backend-intro',
    title: 'Introduction to Back-End Development',
    issuer: 'Meta',
    skillsCovered: [
      'Backend Architecture',
      'Client-Server Model',
      'HTTP Protocols & Status Codes',
      'Web Servers',
    ],
  },
  {
    id: 'meta-databases-intro',
    title: 'Introduction to Databases for Back-End Development',
    issuer: 'Meta',
    skillsCovered: [
      'Relational Databases',
      'SQL Querying',
      'Database Normalization',
      'Data Integrity',
    ],
  },
  {
    id: 'meta-python',
    title: 'Programming in Python',
    issuer: 'Meta',
    skillsCovered: [
      'Python Syntax & Data Structures',
      'Object-Oriented Programming',
      'Algorithms',
      'File Handling & Scripting',
    ],
  },
  {
    id: 'egyfwd-challenger',
    title: 'Foundational Development Challenger Track',
    issuer: 'EGYFWD (Egypt FWD)',
    track: 'Web Development Foundations',
    skillsCovered: [
      'Core Web Standards',
      'Algorithmic Problem Solving',
      'Software Development Fundamentals',
    ],
  },
];
