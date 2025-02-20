import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "AI Revolutionizing Everyday Life and Work",
    paragraph:
      "AI enhances automation, healthcare, and productivity, making daily tasks smarter and more efficient.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Rutik Ahire",
      image: "/images/blog/author-02.png",
      designation: "Sr. Data Analyst",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Quantum Computing : The Future of Tech",
    paragraph:
      "Quantum computing promises ultra-fast processing, revolutionizing cryptography, AI, and complex problem-solving.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Rupali Gaikwad",
      image: "/images/blog/author-01.png",
      designation: "QCR",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Blockchain Beyond Cryptocurrency",
    paragraph:
      "Blockchain secures transactions, improves transparency, and finds applications in finance, healthcare, and logistics.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Siddhi Shinde",
      image: "/images/blog/author-01.png",
      designation: "Sr. Blockchain Engineer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
