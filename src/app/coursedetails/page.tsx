"use client";

import {   useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {  courseList, instructors } from "@/Constants/coursesData";
import Image from "next/image";

const BuyCourseCard = () => (
  <div className="bg-gray-50 p-6 rounded-xl shadow-md absolute w-80 min-h-[400px] top-[22%] right-[6rem] flex flex-col">
     <div className="h-[190px]  w-[270px]">
     <Image src="/images/brands/next.jpg" alt="Checkout"  className="rounded-lg" width={500} height={300} />
     </div>
    <h2 className="text-2xl font-bold mb-4">Purchase Course</h2>
    <p className="text-lg text-gray-700 mb-2">
      <span className="font-semibold">Price:</span> $99
    </p>
    <p className="text-gray-600 mb-4">
      Get lifetime access, course updates, and support.
    </p>
    <button className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
      Buy Now
    </button>
  </div>
);

export default function CourseDetailsPage() {
  const params = useSearchParams(); // Get course ID from URLParams(); // Get course ID from URL
  
  const router = useRouter();
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [currentInstructor, setCurrentInstructor] = useState(0);
 const id = params.get("id");
  // Find the course by ID
  const course = courseList.find((course) => String(course.id) === String(id));

  // useEffect(() => {
  //   if (!course) {
  //     router.push("/"); // Redirect if course is not found
  //   }
  // }, [course, router]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInstructor((prev) => (prev + 1) % instructors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleModule = (title: string) => {
    setExpandedModule((prev) => (prev === title ? null : title));
  };

  if (!course) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto pt-28 px-4 flex flex-col">
      <div className="bg-gray-100 h-[200px] flex flex-col gap-2 py-12 px-20">
        <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
        <h2 className="text-lg text-gray-600 mb-4">{course.subtitle}</h2>
      </div>

      <div className="w-full lg:w-3/4 bg-white px-20 py-6">
        <h2 className="text-2xl font-bold">About Course</h2>
        <div className="py-3 mb-6">
          <p className="text-gray-700">{course.aboutCourse}</p>
        </div>

        <div className="bg-gray-100 flex flex-col gap-2 p-4 rounded-lg shadow mb-6">
          <p className="text-gray-700"><strong>Target Audience:</strong> {course.courseDetails.targetAudience}</p>
          <p className="text-gray-700"><strong>Format:</strong> {course.courseDetails.format}</p>
          <p className="text-gray-700"><strong>Duration:</strong> {course.courseDetails.duration}</p>
          <p className="text-gray-700"><strong>Prerequisites:</strong> {course.courseDetails.prerequisites}</p>
        </div>

        <h2 className="text-2xl font-bold mb-2">Course Includes</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow mb-6">
          <ul className="list-disc flex flex-col gap-2 list-inside text-gray-700">
            {course.courseIncludes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-2">Comprehensive Course Modules</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow mb-6">
          {course.courseModules.map((module, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleModule(module.title)}
                className="w-full flex justify-between items-center text-lg font-semibold border-b border-gray-200 p-3 hover:bg-gray-300 transition"
              >
                {module.title}
                {expandedModule === module.title ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {expandedModule === module.title && (
                <div className="bg-white p-3 mt-2 rounded-lg">
                  <ul className="list-disc list-inside text-gray-700">
                    {module.topics?.map((topic, idx) => (
                      <li key={idx}>{topic}</li>
                    ))}
                    {module.projects?.map((project, idx) => (
                      <li key={idx}>{project}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Our Instructor</h2>
        <div className="bg-gray-100 p-8 rounded-lg shadow mb-6 flex flex-col gap-4">
          <div className="flex items-center justify-center gap-4">
            <Image
              src={instructors[currentInstructor].image}
              alt={instructors[currentInstructor].name}
              width={160}
              height={160}
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{instructors[currentInstructor].name}</h3>
            <p className="text-gray-700">{instructors[currentInstructor].bio}</p>
          </div>
        </div>

        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back
        </button>
      </div>

      <BuyCourseCard />
    </div>
  );
}
