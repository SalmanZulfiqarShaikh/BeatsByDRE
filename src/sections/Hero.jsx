import React from 'react'
import Button from '../components/Button'
import arrowRight from '../assests/icons/arrow-right.svg'
import { statistics } from '../constants/index.js'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
// import HPhero1 from '../assests/images/HPhero1.png'

function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-between items-center min-h-screen gap-10 max-container"
    >
      {/* LEFT TEXT SECTION */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
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

        <div
          ref={ref}
          className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 cursor-pointer transition-opacity duration-700"
        >
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl font-semibold">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={1.5}
                    suffix={stat.suffix}
                  />
                ) : (
                  0
                )}
              </p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="flex justify-center items-center relative xl:w-3/5 w-full">
        <img
          src={HPhero1}
          alt="headphones collection"
          width={610}
          height={500}
          className="object-contain relative z-10 drop-shadow-[0_0_25px_rgba(255,105,180,0.3)]"
        />
      </div>
    </section>
  )
}

export default Hero
