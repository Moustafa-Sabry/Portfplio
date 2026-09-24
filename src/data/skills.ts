export interface SkillItem {
  id: string;
  name: string;
  category: 'backend' | 'databases' | 'frontend' | 'languages' | 'tools';
  description: string;
  badge?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: 'all' | 'backend' | 'databases' | 'frontend' | 'languages' | 'tools';
  label: string;
  count: number;
}

export const skillCategories: { id: SkillCategory['id']; label: string }[] = [
  { id: 'all', label: 'All Technologies' },
  { id: 'backend', label: 'Backend Architecture' },
  { id: 'databases', label: 'Databases' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'languages', label: 'Programming Languages' },
  { id: 'tools', label: 'Developer Tools' },
];

export const skillsData: SkillItem[] = [
  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    description: 'Asynchronous event-driven runtime used to build non-blocking server applications and microservices.',
    badge: 'Core Runtime',
    highlight: true,
  },
  {
    id: 'expressjs',
    name: 'Express.js',
    category: 'backend',
    description: 'Fast, minimalist web framework for designing RESTful endpoints, custom middleware pipelines, and error handling.',
    badge: 'Core Framework',
    highlight: true,
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    category: 'backend',
    description: 'Enterprise TypeScript backend framework leveraging dependency injection, modular controllers, and decorators.',
    badge: 'Modular API',
    highlight: true,
  },
  {
    id: 'rest-apis',
    name: 'REST APIs',
    category: 'backend',
    description: 'Architecting clean, stateless HTTP interfaces following standard REST conventions, status codes, and pagination.',
    badge: 'Architecture',
    highlight: true,
  },
  {
    id: 'jwt-auth',
    name: 'JWT Authentication',
    category: 'backend',
    description: 'Stateless token issuance, verification, refresh token strategies, and role-based access control (RBAC).',
    badge: 'Security',
    highlight: true,
  },
  {
    id: 'mongoose',
    name: 'Mongoose',
    category: 'backend',
    description: 'Object Data Modeling (ODM) for MongoDB, schema validation, population, hooks, and index optimization.',
    badge: 'ODM',
  },

  // Databases
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'databases',
    description: 'NoSQL document database utilized for flexible, dynamic schemas, indexing, and aggregation pipelines.',
    badge: 'Primary DB',
    highlight: true,
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'databases',
    description: 'Relational database management, relational schema normalization, foreign key constraints, and SQL queries.',
    badge: 'Relational SQL',
  },

  // Frontend
  {
    id: 'angular',
    name: 'Angular',
    category: 'frontend',
    description: 'Component-based SPA framework for responsive interfaces, reactive forms, routing, and RxJS HTTP services.',
    badge: 'SPA Framework',
    highlight: true,
  },
  {
    id: 'typescript-fe',
    name: 'TypeScript',
    category: 'frontend',
    description: 'Static type checking, interfaces, and strict compiler configs across both client and server codebases.',
    badge: 'Type Safety',
    highlight: true,
  },
  {
    id: 'javascript-fe',
    name: 'JavaScript',
    category: 'frontend',
    description: 'Modern ES6+ syntax, asynchronous programming (Promises, async/await), DOM manipulation, and event loops.',
    badge: 'Modern ES6+',
  },
  {
    id: 'html5',
    name: 'HTML5',
    category: 'frontend',
    description: 'Semantic markup structure, accessible forms, meta configurations, and clean document outlines.',
    badge: 'Semantic Web',
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'frontend',
    description: 'Modern Flexbox, CSS Grid layouts, media queries, CSS variables, and fluid responsive styling.',
    badge: 'Responsive UI',
  },

  // Programming Languages
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'languages',
    description: 'Deep familiarity with JavaScript engine mechanics, event loop, closures, prototypes, and asynchronous execution.',
    badge: 'Primary',
    highlight: true,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'languages',
    description: 'Typed superset of JavaScript empowering robust compile-time contract enforcement and maintainable refactors.',
    badge: 'Primary',
    highlight: true,
  },
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    description: 'Core programming constructs, data structures, scripting, and algorithmic problem solving.',
    badge: 'Meta Certified',
  },
  {
    id: 'java',
    name: 'Java',
    category: 'languages',
    description: 'Object-oriented programming principles (OOP), inheritance, interfaces, and algorithms studied in university.',
    badge: 'Academic Core',
  },

  // Tools
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    description: 'Distributed version control, branch management, merge conflicts resolution, and commit hygiene.',
    badge: 'VCS',
    highlight: true,
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'tools',
    description: 'Remote code repositories, pull requests, project tracking, and deployment integrations.',
    badge: 'Collaboration',
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'tools',
    description: 'API endpoint testing, request suites, environment variables, authentication headers, and automated tests.',
    badge: 'API Testing',
    highlight: true,
  },
  {
    id: 'swagger',
    name: 'Swagger (OpenAPI)',
    category: 'tools',
    description: 'Interactive API documentation, OpenAPI specifications, request payload modeling, and schema definitions.',
    badge: 'Documentation',
    highlight: true,
  },
];
