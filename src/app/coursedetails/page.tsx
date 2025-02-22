"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaAward,
  FaChevronDown,
  FaChevronUp,
  FaClock,
  FaGlobe,
} from "react-icons/fa";
import { courseList, instructors } from "@/Constants/coursesData";
import Image from "next/image";

const BuyCourseCard = () => (
  <div className="sticky right-[6rem] top-[22%] flex min-h-[400px] w-80 flex-col rounded-xl p-6 dark:bg-gray-800 shadow-md dark:text-white">
    <div className="h-[190px] w-[270px]">
      <Image
        src="/images/brands/next.jpg"
        alt="Checkout"
        className="rounded-lg"
        width={500}
        height={300}
      />
    </div>
    <h2 className="mb-4 text-2xl font-bold dark:text-white">Purchase Course</h2>
    <p className="mb-2 text-lg text-gray-700 dark:text-white">
      <span className="font-semibold">Price:</span> $99
    </p>
    <p className="mb-4 text-gray-600 dark:text-white">
      Get lifetime access, course updates, and support.
    </p>
    <button className="w-full rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
      Buy Now
    </button>
  </div>
);

export default function CourseDetailsPage() {
  const params = useSearchParams();
  const router = useRouter();
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [currentInstructor, setCurrentInstructor] = useState(0);
  const id = params.get("id");

  const course = courseList.find((course) => String(course.id) === String(id));
  const relatedCourses = courseList.filter((c) => c.id !== id).slice(0, 3);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const displayedCourses = showAllCourses
    ? relatedCourses
    : relatedCourses.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInstructor((prev) => (prev + 1) % instructors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!course) {
    return <p className="dark:text-white">Loading...</p>;
  }

  return (
    <div className="container relative mx-auto flex flex-col px-4 pt-28 dark:text-white">
      <div className="flex h-[200px] flex-col gap-2 bg-gray-100 px-20 py-12 dark:bg-gray-800">
        <h1 className="mb-2 text-3xl font-bold dark:text-white">
          {course.title}
        </h1>
        <h2 className="mb-4 text-lg text-gray-600 dark:text-white">
          {course.subtitle}
        </h2>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <FaClock className="text-green-900" />
            <span>{course.duration}</span>
          </div>
          <div className="h-5 w-[1px] bg-gray-400"></div>
          <div className="flex items-center gap-2">
            <FaGlobe className="text-blue-700" />
            <span>{course.language}</span>
          </div>
          <div className="h-5 w-[1px] bg-gray-400"></div>
          <div className="flex items-center gap-2">
            <FaAward className="text-yellow-500" />
            <span className="font-bold">Certification :</span>
            <span>{course.certification ? "Yes" : "No"}</span>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-col lg:flex-row">
        <div className="w-full px-20 py-6 lg:w-3/4">
          <h2 className="text-2xl font-bold dark:text-white">About Course</h2>
          <div className="mb-6 py-3">
            <p className="text-gray-700 dark:text-white">
              {course.aboutCourse}
            </p>
          </div>

          <h2 className="mb-2 text-2xl font-bold dark:text-white">
            Course Includes
          </h2>
          <div className="mb-6 rounded-lg bg-gray-100 p-4 shadow dark:bg-gray-800">
            <ul className="flex list-inside list-disc flex-col gap-2 text-gray-700 dark:text-white">
              {course.courseIncludes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              Download Syllabus PDF
            </button>
          </div>

          <h2 className="mb-2 text-2xl font-bold dark:text-white">
            Course Prerequisite
          </h2>
          <div className="mb-6 rounded-lg bg-gray-100 p-4 shadow dark:bg-gray-800">
            <ul className="flex list-inside list-disc flex-col gap-3 text-gray-700 dark:text-white">
              {course.prerequisites.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <h2 className="mb-6 text-2xl font-bold">Our Instructor</h2>
          <div className="mb-6 flex flex-col gap-4  bg-gray-100  dark:bg-gray-800 rounded-lg px-8 py-10 shadow">
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl dark:text-white font-semibold">
                {instructors[currentInstructor].name}
              </h3>
              <p className="mb-6 dark:text-white  text-gray-700">
                {instructors[currentInstructor].bio}
              </p>
              <p className="text-gray-700 dark:text-white">
                {instructors[currentInstructor].experience}
              </p>
            </div>
            <Image
              src={instructors[currentInstructor].image}
              alt={instructors[currentInstructor].name}
              width={500}
              height={250}
              className="mx-auto rounded-full"
            />
          </div>
        </div>
        <div className="absolute -top-24 right-[3.4rem]">
          <BuyCourseCard />
        </div>
        {/* Related Courses (Appears below when scrolling) */}
        <div className="mt-96">
          <h2 className="mb-4 text-2xl font-bold">Related Courses</h2>
          <div className="grid grid-cols-1 gap-6">
            {displayedCourses.map((related) => (
              <div
                key={related.id}
                className="mr-20 w-80 rounded-lg dark:bg-gray-800  p-4 shadow-md"
              >
                <Image
                  src={related.image}
                  alt={related.title}
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
                <h3 className="mt-2 text-lg dark:text-white font-semibold">{related.title}</h3>
                <p className="text-gray-600 text-sm dark:text-white">{related.subtitle}</p>
                <button
                  onClick={() => router.push(`/coursedetails?id=${related.id}`)}
                  className="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                  View Course
                </button>
              </div>
            ))}
          </div>
          {relatedCourses.length > 2 && (
            <button
              onClick={() => setShowAllCourses(!showAllCourses)}
              className="mt-4 w-full text-center text-blue-500 hover:underline"
            >
              {showAllCourses ? "View Less" : "View More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
