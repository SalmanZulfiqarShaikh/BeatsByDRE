import React, { useState } from 'react'
import Button from '../components/Button'
import arrowRight from '../assets/icons/arrow-right.svg'
import { statistics, headphones } from '../constants/index.js'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

function Hero() {
  const [bigHP, setBigHP] = useState(headphones[0].bigHP)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  return (
    <section
      id="home"
      className="relative w-full flex xl:flex-row flex-col justify-between items-center min-h-screen gap-10 max-container overflow-hidden"
    >
      {/* LEFT TEXT SECTION */}
      <div className="relative xl:w-2/5 flex md:ml-14 flex-col justify-center items-start w-full max-xl:px-8 pt-28 z-20">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mt-4">
          <span className="text-white">Next-Level Arrivals</span>
          <br />
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
            Power. Precision. Style.
          </span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Now Playing – The Sound of Style
        </p>

        <div className="mt-10">
          <Button label="Shop Now" iconURL={arrowRight} />
        </div>

        {/* Stats Section */}
        <div
          ref={ref}
          className="flex justify-between items-center w-full mt-16 gap-4 text-xs sm:text-sm md:text-base lg:text-lg flex-nowrap"
        >
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="flex-1 min-w-[60px] text-center"
            >
              <p className="text-2xl sm:text-3xl md:text-3xl font-semibold">
                {inView ? (
                  <CountUp start={0} end={stat.value} duration={0.9} suffix={stat.suffix} />
                ) : (
                  0
                )}
              </p>
              <p className="text-gray-400 text-sm sm:text-base truncate">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className='hidden md:flex mt-12 relative flex-col items-center'>
        {/* Main Headphone Image */}
        <img 
          src={bigHP}
          alt="collection"
          width={540}
          className="relative z-10"
        />

        {/* Thumbnails */}
        <div className='flex sm:gap-6 gap-4 mt-6'>
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
