// courseData.ts

export interface CourseModule {
  title: string;
  topics?: string[];
  projects?: string[];
}

export interface CourseDetails {
  id: string;
  title: string;
  subtitle: string;
  aboutCourse: string;
  whatYouWillLearn: string[];
  courseIncludes: string[];
  courseModules: CourseModule[];
  courseDetails: {
    targetAudience: string;
    format: string;
    duration: string;
    prerequisites: string;
  };
}

export const courseList: CourseDetails[] = [
  {
    id: "1",
    title: "Next.js and React",
    subtitle: "Master the Art of Full-Stack Development",
    aboutCourse:
      "In today's fast-paced digital landscape, creating dynamic and high-performance web applications is essential. This comprehensive course on Next.js and React is designed for developers who want to leverage these powerful technologies to build modern web applications efficiently.",
    whatYouWillLearn: [
      "Fundamentals of React and its integration with Next.js",
      "Setting up a Next.js project and understanding its file structure",
      "Building reusable components and managing application state",
      "Routing and navigation using Next.js",
      "Fetching and managing data from APIs",
      "Performance optimization with static and dynamic rendering techniques",
      "Enhancing user experience with authentication and error handling",
      "Deploying applications to production using Vercel and other hosting platforms",
    ],
    courseIncludes: [
      "Video Lectures",
      "Hands-on Coding Exercises",
      "Quizzes",
      "Real-World Projects",
      "Access to Course Materials & Resources",
    ],
    courseModules: [
      {
        title: "Introduction to Next.js and React",
        topics: [
          "Overview of React and its ecosystem",
          "Introduction to Next.js and its advantages",
          "Setting up the development environment",
        ],
      },
      {
        title: "Getting Started with Next.js",
        topics: [
          "Initializing a Next.js project",
          "Understanding file structure and conventions",
          "Creating your first Next.js page",
        ],
      },
      {
        title: "Final Project: Real-World Applications",
        projects: [
          "E-commerce Store with Next.js and Stripe",
          "Blog Platform with Markdown and Next.js",
          "Portfolio Website with Dynamic Content",
        ],
      },
    ],
    courseDetails: {
      targetAudience: "Web developers with basic JavaScript and React knowledge",
      format: "Video lectures, coding exercises, quizzes, and projects",
      duration: "Approximately 10 weeks (Flexible Schedule)",
      prerequisites: "Basic understanding of HTML, CSS, and JavaScript",
    },
  },
  {
    id: "2",
    title: "NodeJs MongoDB",
    subtitle: "Master the Art of Full-Stack Development",
    aboutCourse:
      "In today's fast-paced digital landscape, creating dynamic and high-performance web applications is essential. This comprehensive course on Next.js and React is designed for developers who want to leverage these powerful technologies to build modern web applications efficiently.",
    whatYouWillLearn: [
      "Fundamentals of React and its integration with Next.js",
      "Setting up a Next.js project and understanding its file structure",
      "Building reusable components and managing application state",
      "Routing and navigation using Next.js",
      "Fetching and managing data from APIs",
      "Performance optimization with static and dynamic rendering techniques",
      "Enhancing user experience with authentication and error handling",
      "Deploying applications to production using Vercel and other hosting platforms",
    ],
    courseIncludes: [
      "Video Lectures",
      "Hands-on Coding Exercises",
      "Quizzes",
      "Real-World Projects",
      "Access to Course Materials & Resources",
    ],
    courseModules: [
      {
        title: "Introduction to Next.js and React",
        topics: [
          "Overview of React and its ecosystem",
          "Introduction to Next.js and its advantages",
          "Setting up the development environment",
        ],
      },
      {
        title: "Getting Started with Next.js",
        topics: [
          "Initializing a Next.js project",
          "Understanding file structure and conventions",
          "Creating your first Next.js page",
        ],
      },
      {
        title: "Final Project: Real-World Applications",
        projects: [
          "E-commerce Store with Next.js and Stripe",
          "Blog Platform with Markdown and Next.js",
          "Portfolio Website with Dynamic Content",
        ],
      },
    ],
    courseDetails: {
      targetAudience: "Web developers with basic JavaScript and React knowledge",
      format: "Video lectures, coding exercises, quizzes, and projects",
      duration: "Approximately 10 weeks (Flexible Schedule)",
      prerequisites: "Basic understanding of HTML, CSS, and JavaScript",
    },
  },
];


export const instructors = [
  {
    name: "John Doe",
    bio: "Senior Full-Stack Developer with 10+ years of experience.",
    image: "/instructor1.jpg",
  },
  {
    name: "Jane Smith",
    bio: "React and Next.js expert, passionate about teaching.",
    image: "/instructor2.jpg",
  },
  {
    name: "Michael Johnson",
    bio: "Software Engineer and mentor, specializing in web applications.",
    image: "/instructor3.jpg",
  },
];
