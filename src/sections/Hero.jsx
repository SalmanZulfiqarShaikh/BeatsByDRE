import React, { useState } from 'react'
import Button from '../components/Button'
import arrowRight from '../assets/icons/arrow-right.svg'
import { statistics, headphones } from '../constants/index.js'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import Typing from '../components/Typing.jsx'

function Hero() {
  const [bigHP, setBigHP] = useState(headphones[0].bigHP)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section
      id="home"
      className="relative w-full flex xl:flex-row flex-col justify-between items-center 
                 min-h-[80vh] md:min-h-screen gap-10 max-container overflow-hidden"
    >
      {/* MOBILE IMAGE SECTION */}
      <div className="flex flex-col md:hidden justify-center items-center mt-24">
        <img
          src={bigHP}
          alt="headphone"
          width={280}
          className="object-contain drop-shadow-xl"
        />

        {/*  MOBILE THUMBNAILS */}
        <div className="flex gap-4 sm:gap-6 mt-6 justify-center">
          {headphones.map((hp, index) => (
            <img
              key={index}
              src={hp.bigHP}
              alt={`headphone ${index + 1}`}
              onClick={() => setBigHP(hp.bigHP)}
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-4 cursor-pointer transition-all duration-300 ${
                bigHP === hp.bigHP
                  ? 'border-pink-500'
                  : 'border-transparent hover:border-pink-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* LEFT TEXT SECTION */}
      <div className="relative xl:w-2/5 flex md:ml-14 flex-col justify-center items-center md:items-start 
                      w-full max-xl:px-8 pt-16 md:pt-28 z-20 text-center md:text-left">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mt-4">
          <span className="text-white">Next-Level Arrivals</span>
          <br />
          <Typing />
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Now Playing – The Sound of Style
        </p>

        <div className="mt-10 flex justify-center md:justify-start w-full">
          <Button label="Shop Now" iconURL={arrowRight} />
        </div>

        {/*  STATS SECTION */}
        <div
          ref={ref}
          className="flex justify-between items-center w-full mt-16 gap-4 text-xs sm:text-sm 
                     md:text-base lg:text-lg flex-nowrap"
        >
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="flex-1 min-w-[60px] text-center"
            >
              <p className="text-2xl sm:text-3xl md:text-3xl font-semibold">
                {inView ? (
                  <CountUp start={0} end={stat.value} duration={1.9} suffix={stat.suffix} />
                ) : (
                  0
                )}
              </p>
              <p className="text-gray-400 text-sm sm:text-base truncate">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/*  DESKTOP IMAGE SECTION */}
      <div className="hidden md:flex mt-12 relative flex-col items-center">
        <img 
          src={bigHP}
          alt="collection"
          width={540}
          className="relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 mt-6">
          {headphones.map((hp, index) => (
            <img
              key={index}
              src={hp.bigHP}
              alt={`headphone ${index + 1}`}
              onClick={() => setBigHP(hp.bigHP)}
              className={`w-20 h-20 rounded-lg border-4 cursor-pointer transition-all duration-300 ${
                bigHP === hp.bigHP
                  ? 'border-pink-500'
                  : 'border-transparent hover:border-pink-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
