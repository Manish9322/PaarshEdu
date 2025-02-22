'use client';

import CourseCard from "@/components/TopCources/CourseCard";


const courses = [
  {
    title: 'React for Beginners',
    instructor: 'John Doe',
    duration: '6 hours',
    level: 'Beginner',
    image: '/images/brands/next.jpg',
  },
  {
    title: 'Advanced JavaScript',
    instructor: 'Jane Smith',
    duration: '10 hours',
    level: 'Advanced',
    image: '/images/brands/next.jpg',
  },
  {
    title: 'Node.js & Express Crash Course',
    instructor: 'Mike Johnson',
    duration: '8 hours',
    level: 'Intermediate',
    image: '/images/brands/next.jpg',
  },
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto flex flex-col gap-6 mt-20 px-4 py-8">
      <h1 className="text-4xl font-bold text-center leading-relaxed mb-6">What would you like to <span className="text-blue-600">learn?</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            instructor={course.instructor}
            duration={course.duration}
            level={course.level}
            imageUrl={course.image}
          />
        ))}
      </div>
    </div>
  );
}
