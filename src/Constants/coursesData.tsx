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
  image: string;
  duration: string;
  language: string;
  certification: string;
  aboutCourse: string;
  whatYouWillLearn: string[];
  courseIncludes: string[];
  prerequisites: string[];
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
    image: "/images/instructor1.jpg",
    duration: "12 weeks",
    language: "English / Hindi / Marathi",
    certification: 'YES',
    aboutCourse:
      "In today's fast-paced digital landscape, creating dynamic and high-performance web applications is essential. This comprehensive course on Next.js and React is designed for developers who want to leverage these powerful technologies to build modern web applications efficiently.In today's fast-paced digital landscape, creating dynamic and high-performance web applications is essential. This comprehensive course on Next.js and React is designed for developers who want to leverage these powerful technologies to build modern web applications efficiently.In today's fast-paced digital landscape, creating dynamic and high-performance web applications is essential. This comprehensive course on Next.js and React is designed for developers who want to leverage these powerful technologies to build modern web applications efficiently.",
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
    prerequisites: [
      "Be determined to learn Motion Graphics using After Effects",
      "Be Ready to create all the projects in the practice activities",
      "No Prior Knowledge in After Effects or Motion Design is required.",
      "After Effects Creative Cloud (CC)"
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
    image: "/images/instructor1.jpg",
    duration: "12 weeks",
    language: "English / Hindi / Marathi",
    certification: 'YES',
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
    prerequisites: [
      "Be determined to learn Motion Graphics using After Effects",
      "Be Ready to create all the projects in the practice activities",
      "No Prior Knowledge in After Effects or Motion Design is required.",
      "After Effects Creative Cloud (CC)"
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
    image: "/images/instructor1.jpg",
    duration: "12 weeks",
    language: "English / Hindi / Marathi ",
    certification: 'YES',
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
    prerequisites: [
      "Be determined to learn Motion Graphics using After Effects",
      "Be Ready to create all the projects in the practice activities",
      "No Prior Knowledge in After Effects or Motion Design is required.",
      "After Effects Creative Cloud (CC)"
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
    id: "3",
    title: "NodeJs MongoDB",
    subtitle: "Master the Art of Full-Stack Development",
    image: "/images/instructor1.jpg",
    duration: "12 weeks",
    language: "English / Hindi / Marathi ",
    certification: 'YES',
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
    prerequisites: [
      "Be determined to learn Motion Graphics using After Effects",
      "Be Ready to create all the projects in the practice activities",
      "No Prior Knowledge in After Effects or Motion Design is required.",
      "After Effects Creative Cloud (CC)"
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
    id: "4",
    title: "NodeJs MongoDB",
    subtitle: "Master the Art of Full-Stack Development",
    image: "/images/instructor1.jpg",
    duration: "12 weeks",
    language: "English / Hindi / Marathi ",
    certification: 'YES',
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
     prerequisites: [
      "Be determined to learn Motion Graphics using After Effects",
      "Be Ready to create all the projects in the practice activities",
      "No Prior Knowledge in After Effects or Motion Design is required.",
      "After Effects Creative Cloud (CC)"
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
    image: "/images/instructor1.jpg",
    experience:"Our instructor is a seasoned professional with over 5+ years of experience in the field. Having trained thousands of students worldwide, they specialize in simplifying complex concepts into easy-to-understand lessons. With a strong background in web development and a passion for teaching, they have worked with top companies and contributed to multiple open-source projects. Their expertise ensures a hands-on, practical learning experience, helping students gain real-world skills and confidence in their careers.",
  },
  {
    name: "Jane Smith",
    bio: "React and Next.js expert, passionate about teaching.",
    image: "/images/instructor1.jpg",
    experience:"Our instructor is a seasoned professional with over 5+ years of experience in the field. Having trained thousands of students worldwide, they specialize in simplifying complex concepts into easy-to-understand lessons. With a strong background in web development and a passion for teaching, they have worked with top companies and contributed to multiple open-source projects. Their expertise ensures a hands-on, practical learning experience, helping students gain real-world skills and confidence in their careers.",

  },
  {
    name: "Michael Johnson",
    bio: "Software Engineer and mentor, specializing in web applications.",
    image: "/images/instructor1.jpg",
    experience:"Our instructor is a seasoned professional with over 5+ years of experience in the field. Having trained thousands of students worldwide, they specialize in simplifying complex concepts into easy-to-understand lessons. With a strong background in web development and a passion for teaching, they have worked with top companies and contributed to multiple open-source projects. Their expertise ensures a hands-on, practical learning experience, helping students gain real-world skills and confidence in their careers.",
  },
];
