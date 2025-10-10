import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { reviews } from "../constants";
import TestimonialCard from "../components/TestimonialCard";

function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="relative max-container py-20 px-6 md:px-12 text-center"
    >
      {/* Heading */}
      <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
        What Our{" "}
        <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
          Customers
        </span>{" "}
        Say
      </h3>

      <p className="text-gray-400 text-lg max-w-xl mx-auto mb-16">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with Beats.
      </p>

      {/* Swiper */}
      <div className="relative cursor-pointer">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            480: {slidesPerView: 1},
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.customerName}>
              <TestimonialCard
                imgURL={review.imgURL}
                customerName={review.customerName}
                rating={review.rating}
                feedback={review.feedback}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination flex justify-center mt-10 space-x-2"></div>
      </div>

      {/* Tailwind-style Swiper pagination bullets */}
      <style>
        {`
          .custom-pagination .swiper-pagination-bullet {
            background: linear-gradient(to right, #ec4899, #fb923c);
            opacity: 0.3;
            transition: all 0.3s ease;
            width: 10px;
            height: 10px;
            border-radius: 9999px;
          }
          .custom-pagination .swiper-pagination-bullet-active {
            opacity: 1;
            width: 20px;
          }
        `}
      </style>
    </motion.section>
  );
}

export default Testimonials;
