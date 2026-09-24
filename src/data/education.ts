export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  graduationYear: string;
  gpa: string;
  gpaScale: string;
  description: string;
  highlights: string[];
}

export const educationData: EducationItem = {
  degree: 'Bachelor of Science',
  field: 'Computer Science',
  institution: 'Modern Academy',
  location: 'Cairo, Egypt',
  period: '2021 – 2025',
  graduationYear: '2025',
  gpa: '3.33',
  gpaScale: '4.0',
  description:
    'Comprehensive Computer Science curriculum covering core computational theory, software design principles, database architecture, and practical engineering.',
  highlights: [
    'Data Structures & Algorithm Design',
    'Relational Database Systems (SQL)',
    'Object-Oriented Programming (Java / C++)',
    'Operating Systems & Networking Basics',
    'Software Engineering & System Analysis',
  ],
};
