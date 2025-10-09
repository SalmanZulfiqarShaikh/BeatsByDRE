import React from 'react'
import arrowRight from '../assets/icons/arrow-right.svg'

function Button({label, iconURL}) {
  return (
    <button
  className="flex justify-center items-center gap-2 px-7 py-4 border border-gray-700 
             font-poppins font-medium text-[16px] text-yellow-400 cursor-pointer 
             transition-all duration-300 rounded-full text-lg 
             hover:border-pink-500 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-orange-400/20 
             hover:shadow-[0_0_20px_rgba(255,99,71,0.2)]">
       {label}
       <img src={iconURL}
        alt="right arrow" 
        className='ml-2 rounded-full w-5 h-5'
        />
    </button>
  )
}

export default Button