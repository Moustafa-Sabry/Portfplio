export interface ProfileData {
  name: string;
  shortName: string;
  location: string;
  title: string;
  secondaryTitle: string;
  headline: string;
  shortDescription: string;
  heroDescription: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  cvUrl: string;
  education: {
    degree: string;
    university: string;
    location: string;
    period: string;
    graduationYear: string;
    gpa: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Moustafa Mohamed Sabry",
  shortName: "Moustafa Sabry",
  location: "Cairo, Egypt",
  title: "Backend & Full-Stack Developer",
  secondaryTitle: "Backend Developer | Full-Stack Web Developer",
  headline: "Building Reliable Backends & Modern Web Experiences.",
  shortDescription:
    "Computer Science graduate with strong experience in backend and full-stack web development, specializing in Node.js, Express.js, MongoDB, and RESTful APIs. Experienced in building secure applications using JWT authentication and integrating Angular frontends.",
  heroDescription:
    "Computer Science graduate focused on building secure, maintainable web applications and RESTful APIs using Node.js, Express.js, MongoDB, and modern web technologies.",
  email: "moustafasabry2002@gmail.com",
  // Configurable URLs - update with your actual profile handles
  githubUrl: "https://github.com/",
  linkedinUrl: "https://linkedin.com/in/",
  cvUrl: "#cv-preview",
  education: {
    degree: "Bachelor of Science in Computer Science",
    university: "Modern Academy",
    location: "Cairo, Egypt",
    period: "2021 – 2025",
    graduationYear: "2025",
    gpa: "3.33 / 4.0",
  },
  stats: [
    {
      value: "300+",
      label: "Training Hours",
      description: "NTI MEAN Stack Diploma",
    },
    {
      value: "20+",
      label: "REST APIs Built",
      description: "Tested & Documented Endpoints",
    },
    {
      value: "150+",
      label: "Problems Solved",
      description: "LeetCode, Codeforces, HackerRank",
    },
    {
      value: "4",
      label: "Featured Projects",
      description: "Production-ready Web Architectures",
    },
  ],
};
