import React, { useRef } from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
import "../index.css";

function Services() {
  const slideRef = useRef(null);

  const pause = () => {
    if (slideRef.current) slideRef.current.style.animationPlayState = "paused";
  };
  const resume = () => {
    if (slideRef.current) slideRef.current.style.animationPlayState = "running";
  };

  // Duplicate services twice for continuous scroll
  const duplicated = [...services, ...services];

  return (
    <section className="relative overflow-hidden py-20">
      <div ref={slideRef} className="animate-slide flex gap-10">
        {duplicated.map((service, i) => (
          <ServiceCard key={i} {...service} pause={pause} resume={resume} />
        ))}
      </div>
    </section>
  );
}

export default Services;

