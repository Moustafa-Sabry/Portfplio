export interface TrainingItem {
  institution: string;
  program: string;
  badge: string;
  hours: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export const trainingData: TrainingItem = {
  institution: 'National Telecommunication Institute (NTI)',
  program: 'MEAN Stack Diploma',
  badge: 'Intensive Practical Program',
  hours: '300+ Hours',
  description:
    'Comprehensive professional diploma providing in-depth practical training across full-stack JavaScript architectures, focusing heavily on backend engineering, RESTful API design, database schemas, and Angular client integration.',
  technologies: [
    'MongoDB',
    'Express.js',
    'Angular',
    'Node.js',
    'REST APIs',
    'JWT Authentication',
    'Access Control',
  ],
  achievements: [
    'Engineered and connected robust REST APIs using Node.js and Express.js with MongoDB backends',
    'Implemented token-based JWT authentication and role-based access control strategies',
    'Architected full-featured e-commerce platform with catalog, cart, and admin operations',
    'Built multiple Angular projects utilizing reusable components, reactive forms, and routing',
    'Developed dynamic UI dashboards and interactive portfolio web applications',
    'Conducted 300+ hours of dedicated hands-on coding, schema design, and API integration',
  ],
};
