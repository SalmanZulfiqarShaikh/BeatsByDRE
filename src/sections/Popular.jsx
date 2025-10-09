import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { products } from "../constants";

function Popular() {
  return (
    <section className="w-full max-container mt-20">
      {/* Header */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-8 z-20">
        <h3 className="text-5xl sm:text-6xl font-bold leading-tight mt-4">
          <span className="text-white">Our </span>
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
            Popular
          </span>
          <span className="text-white"> Products</span>
        </h3>
        <p className="mt-6 text-gray-400 text-lg">
          Elevate your audio experience with our stylish, high-quality
          headphones—where comfort, design, and value meet perfectly.
        </p>
      </div>
      {/* Swiper */}
      <div className="mt-10 relative px-16">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <img
                  src={product.imgURL}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded-lg mb-3"
                />
                <h4 className="text-base font-semibold text-white">{product.name}</h4>
                <p className="text-gray-400 mt-1 text-sm">{product.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            background: transparent;
            color: rgb(236, 72, 153);
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            color: rgb(251, 146, 60);
          }
          .swiper-button-next {
            right: -50px;
          }
          .swiper-button-prev {
            left: -50px;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 30px;
            font-weight: bold;
          }
          .swiper-pagination-bullet {
            background: rgb(156, 163, 175);
          }
          .swiper-pagination-bullet-active {
            background: rgb(236, 72, 153);
          }
        `}</style>
      </div>
    </section>
  );
}

export default Popular;