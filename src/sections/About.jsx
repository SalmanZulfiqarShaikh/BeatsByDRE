import { useEffect, useRef } from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";
import arrowRight from "../assets/icons/arrow-right.svg";
import messivideo from "../assets/videos/messivideo.mp4";

const About = () => {
  const videoRef = useRef(null);

  // autoplay only when in viewport
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.play().catch(() => {});
        } else {
          videoEl.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  return (
     <motion.section
      //  Framer Motion animation settings
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} // triggers when 30% is visible, also animates on scroll up
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-12 w-full max-container py-20 px-6 md:px-12" >
      {/* TEXT SECTION */}
      <div className="flex flex-1 flex-col md:ml-14 text-left">
        <h2 className="font-palanquin capitalize text-5xl lg:text-6xl font-bold leading-snug">
          We Provide You
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent"> Super </span>
          <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"> Quality </span>
          Sound.
        </h2>

        <p className="mt-6 text-gray-400 text-lg lg:max-w-lg leading-relaxed">
          Designed for those who demand more — our headphones combine precision engineering with signature Beats style.
          Immerse yourself in sound that’s powerful, balanced, and pure.
        </p>

        <p className="mt-4 text-gray-400 text-lg lg:max-w-lg leading-relaxed">
          Experience <span className="text-white font-semibold">comfort, clarity, and control</span> — crafted to move
          with your lifestyle, and tuned to perfection.
        </p>

        <div className="mt-10">
          <Button label="View details" iconURL={arrowRight} />
        </div>
      </div>

      {/* VIDEO SECTION */}
      <div className="flex-1 flex justify-center items-center w-full cursor-pointer">
        <video
          ref={videoRef}
          src={messivideo}
          loop
          muted
          playsInline
          preload="metadata"
          width="100%"
          height="100%"
          className="object-cover w-full h-[550px] sm:h-[650px] rounded-3xl shadow-[0_0_30px_rgba(236,72,153,0.15)]"
          onLoadedMetadata={(e) => {
            const quality = e.target.videoHeight;
            if (quality < 480) e.target.style.display = "none";
          }}
        />
      </div>
    </motion.section>
  );
};

export default About;
