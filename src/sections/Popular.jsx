import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { products } from "../constants";

function Popular() {
  return (
    <section
      className="w-full max-container mt-20 overflow-hidden"
      id="products"
    >
      {/* Header */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-8 z-20 md:ml-14">
        <h3 className="text-5xl sm:text-6xl font-bold leading-tight mt-4">
          <span className="text-white">Our </span>
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
            Popular
          </span>
          <span className="text-white"> Products</span>
        </h3>
        <p className="mt-6 text-gray-400 text-lg">
          Elevate your audio experience with our stylish, high-quality
          headphones — where comfort, design, and value meet perfectly.
        </p>
      </div>

      {/* Swiper */}
      <div className="mt-14 relative px-6 sm:px-10 lg:px-12 pb-16">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination", //  custom container for dots
          }}
          loop={true}
          spaceBetween={25}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="popular-swiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div
                className="cursor-pointer flex flex-col items-center bg-[#0e0e0e]/90 p-5 rounded-2xl border border-gray-800 hover:border-pink-500/40 
                shadow-[0_0_25px_rgba(236,72,153,0.08)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]
                backdrop-blur-sm"
              >
                <img
                  src={product.imgURL}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-semibold text-white">
                  {product.name}
                </h4>

                {/* Rating */}
                <div className="flex items-center mt-2 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < Math.round(product.rating)
                          ? "text-pink-500"
                          : "text-gray-600"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-gray-400 text-sm ml-1">
                    {product.rating.toFixed(1)}
                  </span>
                </div>

                <p className="text-gray-400 mt-2 text-base font-medium">
                  {product.price}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* External Arrows (slightly out of slider) */}
        <div className="absolute inset-y-0 left-[4px] flex items-center justify-center z-30">
          <button className="cursor-pointer custom-prev text-3xl text-pink-500 hover:text-orange-400 transition-all duration-300">
            ❮
          </button>
        </div>
        <div className="absolute inset-y-0 right-[4px] flex items-center justify-center z-30">
          <button className="cursor-pointer custom-next text-3xl text-pink-500 hover:text-orange-400 transition-all duration-300">
            ❯
          </button>
        </div>

        {/*  Pagination placed outside cards */}
        <div className="custom-pagination flex justify-center mt-10"></div>
      </div>

      {/* Pagination styling */}
      <style jsx>{`
        .custom-pagination .swiper-pagination-bullet {
          background: linear-gradient(90deg, #ec4899, #fb923c);
          opacity: 0.4;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          width: 16px;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
}

export default Popular;
