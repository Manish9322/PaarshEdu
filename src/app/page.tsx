import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
// import Courses from "@/components/PopularCourses/Course";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import CoursesPage from "@/components/Courses/Courses";

import StrategiesSection from "@/components/Strategies";

export const metadata: Metadata = {
  title: "Paarsh Edu : Solution for Better Learning.",
  description: "This is a Home for New Learners.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
<<<<<<< HEAD
      <Features />
=======
      {/* <Features /> */}
      <TopCources />
      <CoursesPage />
>>>>>>> c792d54a6b162f74dccd79416755b9c7097b0336
      {/* <Courses/> */}
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <StrategiesSection/>
      {/* <Pricing /> */}
      <Blog />
      <Contact />

    </>
  );
}
