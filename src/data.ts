import { PersonalDetails, SkillGroup, CompetencyItem, CertificationItem } from "./types";

export const personalDetails: PersonalDetails = {
  name: "C. Mugeshkannan",
  degree: "B.E. Computer Science and Engineering",
  college: "Narayanaguru College of Engineering",
  year: "4th Year (Final Year)",
  dob: "27/05/2006",
  phone: "8122590689",
  email: "mugesh270k@gmail.com",
  address: {
    street: "5/45 East Street",
    village: "Keelamudiman",
    taluk: "Ottapidaram",
    district: "Thoothukudi",
    pincode: "628401"
  },
  careerGoal: "To build a successful career in the IT industry and contribute to software development through continuous learning, innovation, and problem-solving.",
  objective: "Design a highly attractive, modern, and professional portfolio that presents the student's profile impressively to IT company recruiters and hiring managers."
};

export const skillsData: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: [
      {
        name: "Python",
        level: 88,
        iconName: "FileCode2",
        description: "Core scripting, automation modules, algorithms, data structures, and standard library implementations."
      },
      {
        name: "C Programming",
        level: 75,
        iconName: "Cpu",
        description: "Strong understanding of memory allocation, pointers, procedural paradigm, and low-level computer architecture."
      },
      {
        name: "Java",
        level: 70,
        iconName: "Coffee",
        description: "Object-oriented programming principles, multi-threading, collections framework, and basic design patterns."
      }
    ]
  },
  {
    category: "Core Computer Science Skills & Web",
    skills: [
      {
        name: "Problem Solving",
        level: 85,
        iconName: "BrainCircuit",
        description: "Solving logical challenges, optimizing time-space complexities, and algorithm design."
      },
      {
        name: "HTML5 & CSS3",
        level: 80,
        iconName: "Globe",
        description: "Building responsive layouts, semantic structure, modern web grids, and style adjustments."
      },
      {
        name: "Database Management (SQL)",
        level: 72,
        iconName: "Database",
        description: "Structured Query Language, schema design, table relationships, and relational database systems."
      }
    ]
  }
];

export const competenciesData: CompetencyItem[] = [
  {
    id: "quick-learning",
    title: "Quick Learning",
    description: "Rapidly grasping rising technologies, syntax patterns, dynamic frameworks, and project architectures.",
    iconName: "Zap",
    exampleScenario: "As a final-year CS student, adapting to the fast-paced evolution of full-stack engineering frameworks, microservices, and specialized packages by analyzing documentation and applying solutions instantly."
  },
  {
    id: "good-communication",
    title: "Good Communication",
    description: "Expressing ideas articulately, presenting technical solutions systematically, and bridging technical and non-technical aspects clearly.",
    iconName: "MessageCircle",
    exampleScenario: "Regularly collaborating on group presentations, college tech-symposium initiatives, and articulating engineering concepts cleanly."
  },
  {
    id: "easy-understanding",
    title: "Easy Understanding",
    description: "Analyzing complex logic, customer specs, or math algorithms, translating them into simplified action-items.",
    iconName: "Compass",
    exampleScenario: "Deconstructing complicated college project briefs, architectural requirements, and algorithms into clean steps for team implementation."
  },
  {
    id: "time-management",
    title: "Time Management",
    description: "Prioritizing engineering tasks, academic loads, coding timelines, and personal skill development effectively.",
    iconName: "Clock",
    exampleScenario: "Thriving under tight schedules to deliver college seminar reports, certification milestones, and software development projects on schedule."
  }
];

export const certificationsData: CertificationItem[] = [
  {
    title: "Python Certification",
    issuer: "Guvi Geek Network Private Limited",
    date: "May 2024",
    skillsLearned: ["Core Python", "Data Structures", "Functional Programming", "File Handling", "Libraries"],
    description: "Earned Python Developer certification through rigorous testing on programming paradigms, algorithmic scripting, logical parsing, and modern object-oriented methodologies in Python."
  }
];
