"use client"

import { useState, useEffect } from "react"
import CourseCard from "./CourseCard"
import { Button } from "../ui/button"

const initialCourses = [
  { id: 1, title: "Introduction to React", instructor: "Jane Doe", duration: "8 weeks", level: "Beginner" , imageUrl:"/images/brands/next.jpg" },
  { id: 2, title: "Advanced JavaScript", instructor: "John Smith", duration: "10 weeks", level: "Intermediate", imageUrl:"/images/brands/next.jpg" },
  { id: 3, title: "UI/UX Design Fundamentals", instructor: "Alice Johnson", duration: "6 weeks", level: "Beginner", imageUrl:"/images/brands/next.jpg" },
  { id: 4, title: "Node.js Backend Development", instructor: "Bob Wilson", duration: "12 weeks", level: "Advanced", imageUrl:"/images/brands/next.jpg" },
  { id: 5, title: "Python for Data Science", instructor: "Eva Brown", duration: "9 weeks", level: "Intermediate", imageUrl:"/images/brands/next.jpg" },
  { id: 6, title: "Mobile App Development with React Native", instructor: "Chris Lee", duration: "11 weeks", level: "Intermediate", imageUrl:"/images/brands/next.jpg" },
  { id: 7, title: "Machine Learning Basics", instructor: "David Wang", duration: "10 weeks", level: "Intermediate", imageUrl:"/images/brands/next.jpg" },
  { id: 8, title: "Cybersecurity Fundamentals", instructor: "Sarah Connor", duration: "8 weeks", level: "Beginner", imageUrl:"/images/brands/next.jpg" },
]

const CARD_WIDTH = 350           // Each card's width in pixels
const CARD_GAP = 16              // Gap between cards (16px)
const TRANSITION_DURATION = 500  // Slide transition time in ms
const PAUSE_DURATION = 2000      // Pause time (2 seconds) before sliding

export default function IntervalCarousel() {
  const [coursesList, setCoursesList] = useState(initialCourses)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    let timeoutId

    const slide = () => {
      setCurrentIndex(1)
      timeoutId = setTimeout(() => {
        setCoursesList((prev) => {
          const [first, ...rest] = prev
          return [...rest, first]
        })
        setCurrentIndex(0)
        timeoutId = setTimeout(slide, PAUSE_DURATION)
      }, TRANSITION_DURATION)
    }

    timeoutId = setTimeout(slide, PAUSE_DURATION)
    return () => clearTimeout(timeoutId)
  }, [])

  // Outer container now includes an extra gap on the right.
  const containerWidth = (CARD_WIDTH * 3) + (CARD_GAP * 3)
  // Inner container width includes a gap after every card (including a spacer at the end).
  const innerWidth = (coursesList.length * CARD_WIDTH) + (coursesList.length * CARD_GAP)
  // Slide offset moves by one card width plus gap per slide.
  const slideOffset = currentIndex * (CARD_WIDTH + CARD_GAP)

  return (
    <div className=" mx-auto">
      <div className="flex justify-center flex-col items-center ">
      <h2 className="text-4xl font-bold text-center my-6">Top Rated <span className="text-blue-600">Courses</span></h2>
      {/* <Button className="text-xl font-bold text-center rounded ml-[55rem] mb-6">View All</Button> */}
      </div>
      <div
        className="overflow-hidden mx-auto"
        style={{ width: `${containerWidth}px` }}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(-${slideOffset}px)`,
            transition: currentIndex === 1 ? `transform ${TRANSITION_DURATION}ms ease-in-out` : "none",
            width: `${innerWidth}px`,
          }}
        >
          {coursesList.map((course) => (
            <div
              key={course.id}
              className="flex-shrink-0"
              style={{ width: `${CARD_WIDTH}px`, marginRight: `${CARD_GAP}px` }}
            >
              <CourseCard {...course} />
            </div>
          ))}
          {/* Extra spacer to ensure the last card's border radius is visible */}
          <div className="flex-shrink-0" style={{ width: `${CARD_GAP}px` }} />
        </div>
      </div>
    </div>
  )
}
