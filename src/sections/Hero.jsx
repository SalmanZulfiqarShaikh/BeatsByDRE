import React from 'react'
import Button from '../components/Button'
import arrowRight from '../assets/icons/arrow-right.svg'
import { statistics } from '../constants/index.js'
import CountUp from 'react-countup'
import { HPhero1 } from '../assets/images/index.js'

function Hero() {
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
        <div className="flex flex-nowrap justify-between items-center w-full mt-16 gap-6">
          {statistics.map((stat, index) => (
            <div key={index} className="flex-1 min-w-0 text-center">
              <p className="text-3xl font-semibold truncate">
                <CountUp start={0} end={stat.value} duration={1.5} suffix={stat.suffix} />
              </p>
              <p className="text-gray-400 truncate">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className='hidden md:block'>
        <img 
          src={HPhero1}
          alt="collection"
          width={540}
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Hero
