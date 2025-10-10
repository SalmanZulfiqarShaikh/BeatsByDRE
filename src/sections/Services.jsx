import React, { useRef } from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
import { motion, useInView } from "framer-motion";
import "../index.css";

function Services() {
  const slideRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const pause = () => {
    if (slideRef.current) slideRef.current.style.animationPlayState = "paused";
  };
  const resume = () => {
    if (slideRef.current) slideRef.current.style.animationPlayState = "running";
  };

  const duplicated = [...services, ...services];

  return (
    <motion.section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div ref={slideRef} className="animate-slide flex gap-10">
        {duplicated.map((service, i) => (
          <ServiceCard key={i} {...service} pause={pause} resume={resume} />
        ))}
      </div>
    </motion.section>
  );
}

export default Services;
