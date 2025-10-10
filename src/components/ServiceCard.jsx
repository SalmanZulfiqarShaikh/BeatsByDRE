import React from "react";

function ServiceCard({ imgURL, label, subtext, pause, resume }) {
  return (
    <div
      className="flex flex-col items-start sm:w-[350px] w-[300px] flex-shrink-0 p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg hover:shadow-pink-500/30 transition-all duration-300 cursor-pointer"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="flex justify-center items-center w-14 h-14 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full shadow-md">
        <img src={imgURL} alt={label} width={28} height={28} />
      </div>
      <h3 className="mt-6 font-poppins font-semibold text-2xl text-white">
        {label}
      </h3>
      <p className="mt-3 text-base text-slate-400 leading-relaxed">{subtext}</p>
    </div>
  );
}

export default ServiceCard;
