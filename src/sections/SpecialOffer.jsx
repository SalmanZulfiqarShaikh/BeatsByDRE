import React from 'react';
import { billie } from '../assets/images';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import arrowRight from "../assets/icons/arrow-right.svg";

const emptyIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E";

function SpecialOffer() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
      className="flex justify-between items-center max-lg:flex-col-reverse gap-12 w-full max-container py-20 px-6 md:px-12"
    >
      {/* Picture Area */}
      <div className="flex-shrink-0 shadow-[0_0_30px_rgba(236,72,153,0.15)] rounded-2xl overflow-hidden hover:shadow-pink-500/30 transition-all duration-300">
        <img
          src={billie}
          alt="Billie Eilish Advertisement"
          width={580}
          height={630}
          className="object-cover rounded-2xl"
        />
      </div>

      {/* Text Area */}
      <div className="flex flex-col gap-6 w-full lg:max-w-lg text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="block">Special</span>
          <span className="block bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
            Offer
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Discover the latest Beats innovations with exclusive offers and unmatched quality. Every selection exceeds expectations, making your shopping experience truly extraordinary.
        </p>

        {/* Buttons: wrap on small screens */}
        <div className="flex flex-wrap gap-4 sm:gap-7 mt-10">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn More" iconURL={emptyIcon} />
        </div>
      </div>
    </motion.section>
  );
}

export default SpecialOffer;
