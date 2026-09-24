export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'Backend API';
  stackBadge: string;
  technologies: string[];
  description: string;
  features: string[];
  architectureNotes?: string[];
  deployment?: string[];
  // Configurable URLs - leave empty string if not published yet to avoid broken links
  githubUrl: string;
  liveUrl: string;
  previewType: 'ecommerce' | 'hotel' | 'food-api' | 'portfolio';
  endpoints?: {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    path: string;
    description: string;
  }[];
}

export const projectsData: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    tagline: 'Full-stack MEAN shopping ecosystem with admin operations & secure authentication',
    category: 'Full-Stack',
    stackBadge: 'MEAN Stack',
    technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    description:
      'Built a full-stack e-commerce platform with Angular frontend, product pages, filtering, cart functionality, and an admin dashboard. Integrated the frontend with Express/MongoDB APIs and implemented JWT authentication.',
    features: [
      'Product management & catalog inventory',
      'Dynamic shopping cart & checkout flow',
      'Multi-parameter search & category filters',
      'Admin dashboard for managing orders and listings',
      'JWT-based user authentication & authorization',
      'Clean RESTful API endpoints connecting client and database',
    ],
    architectureNotes: [
      'Stateless JWT session authentication stored securely',
      'Angular reactive forms with client-side validation',
      'Modular Express route controllers with Mongoose query operators',
    ],
    githubUrl: '', // Add repository URL when available
    liveUrl: '', // Add deployed demo URL when available
    previewType: 'ecommerce',
    endpoints: [
      { method: 'POST', path: '/api/v1/auth/login', description: 'User login & JWT issuance' },
      { method: 'GET', path: '/api/v1/products', description: 'Filtered & paginated catalog' },
      { method: 'POST', path: '/api/v1/cart/items', description: 'Add/update items in cart' },
      { method: 'POST', path: '/api/v1/admin/products', description: 'Admin inventory management' },
    ],
  },
  {
    id: 'hotel-management-system',
    title: 'Hotel Management System API',
    tagline: 'Enterprise-style modular NestJS REST API with role-based authorization & Swagger',
    category: 'Backend API',
    stackBadge: 'NestJS / MongoDB',
    technologies: [
      'NestJS',
      'TypeScript',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Swagger',
      'Postman',
    ],
    description:
      'Developed a modular hotel management REST API with authentication, role-based authorization, validation, and structured MongoDB schemas.',
    features: [
      'User management & profile workflows',
      'Room availability tracking & management',
      'Reservation & booking state engine',
      'Promotional offers & discount modules',
      'Customer reviews & ratings collection',
      'Personal user favourites list',
      'Hotel amenities & facilities catalog',
      'Role-based authorization (Admin / Staff / Guest)',
      'JWT authentication with NestJS Passport guards',
      'Interactive Swagger (OpenAPI) API documentation',
    ],
    architectureNotes: [
      'Domain-driven NestJS modules (AuthModule, RoomsModule, BookingsModule)',
      'Class-validator DTOs for strict request schema enforcement',
      'Mongoose schema indexes for fast availability queries',
    ],
    githubUrl: '', // Add repository URL when available
    liveUrl: '', // Add deployed demo URL when available
    previewType: 'hotel',
    endpoints: [
      { method: 'POST', path: '/api/v1/auth/register', description: 'User sign up with role assignment' },
      { method: 'GET', path: '/api/v1/rooms/available', description: 'Query availability with date filters' },
      { method: 'POST', path: '/api/v1/bookings', description: 'Create booking (Protected Guard)' },
      { method: 'GET', path: '/api/v1/docs', description: 'Swagger interactive documentation' },
    ],
  },
  {
    id: 'food-management-api',
    title: 'Food Management REST API',
    tagline: 'Secure RESTful backend featuring Joi validation, password hashing & OTP verification',
    category: 'Backend API',
    stackBadge: 'Node.js / Express.js',
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Joi',
      'Vercel',
      'MongoDB Atlas',
    ],
    description:
      'Developed a RESTful food management API with secure authentication, role-based authorization, validation, password hashing, and OTP-based email verification.',
    features: [
      'Comprehensive user management & profile state',
      'Recipe creation, updates, and culinary data',
      'Hierarchical category categorization',
      'User favourite recipe bookmarking',
      'JWT authentication with bearer tokens',
      'Role-based access control (Admin / Creator / User)',
      'Joi schema validation on incoming payloads',
      'One-time password (OTP) email verification flow',
      'Bcrypt password hashing & security hygiene',
    ],
    deployment: ['Vercel', 'MongoDB Atlas'],
    architectureNotes: [
      'Deployed on Vercel serverless environment with MongoDB Atlas cloud cluster',
      'Multi-step OTP lifecycle with expiration timers',
      'Centralized Express error handling middleware',
    ],
    githubUrl: '', // Add repository URL when available
    liveUrl: '', // Add deployed demo URL when available
    previewType: 'food-api',
    endpoints: [
      { method: 'POST', path: '/api/v1/auth/signup', description: 'Register & dispatch email OTP' },
      { method: 'POST', path: '/api/v1/auth/verify-otp', description: 'Verify one-time code & activate user' },
      { method: 'GET', path: '/api/v1/recipes', description: 'Browse and filter recipes' },
      { method: 'POST', path: '/api/v1/recipes/favourite', description: 'Save recipe to favourites' },
    ],
  },
  {
    id: 'portfolio-website',
    title: 'MEAN Stack Portfolio Website',
    tagline: 'Dynamic responsive portfolio powered by an Express.js & MongoDB content API',
    category: 'Full-Stack',
    stackBadge: 'MEAN Stack',
    technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB'],
    description:
      'Built a responsive Angular portfolio using reusable components and a clean UI structure, supported by a RESTful backend using Express.js and MongoDB for dynamic content.',
    features: [
      'Modular Angular component architecture',
      'Clean, organized, responsive layout structure',
      'Dynamic content delivery via RESTful backend',
      'Express.js and MongoDB data layer integration',
      'Separation of concerns between client and server',
    ],
    architectureNotes: [
      'Reusable UI components with Input/Output data bindings',
      'Angular HTTP client services consuming REST endpoints',
      'MongoDB collections storing profile and project data',
    ],
    githubUrl: '', // Add repository URL when available
    liveUrl: '', // Add deployed demo URL when available
    previewType: 'portfolio',
    endpoints: [
      { method: 'GET', path: '/api/v1/portfolio/meta', description: 'Dynamic profile metadata' },
      { method: 'GET', path: '/api/v1/portfolio/projects', description: 'Structured project list' },
    ],
  },
];
