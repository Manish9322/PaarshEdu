"use client"; // If using Next.js 13+ with App Router

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleCourse"; // Corrected Import
import coursesData from "./CourseData"; // Updated variable name for clarity
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Courses = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28 bg-gray-100">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Top Rated Courses"
          paragraph="Explore our top-rated courses and master in-demand skills with expert guidance and hands-on projects!"
          center
        />

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          navigation={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          className="mySwiper"
        >
          {coursesData.map((course) => (
            <SwiperSlide key={course.id}>
              <SingleFeature feature={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Courses;
