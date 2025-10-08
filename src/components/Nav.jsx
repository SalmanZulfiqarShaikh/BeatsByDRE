import React, { useState, useEffect } from 'react'
import '../index.css'
import favicon from '../assets/images/favicon.svg'
import hamburger from '../assets/icons/hamburger.png'
import { navLinks } from '../constants'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setScrolled(true)
      else setScrolled(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`padding-x py-8 fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-[#121418]/70 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img src={favicon} alt="logo" width={45} height={22} className="cursor-pointer" />
        </a>

        {/* Links */}
        <ul className="flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="font-poppins font-normal text-[16px] text-white cursor-pointer 
              transition-all duration-300 hover:text-transparent hover:bg-clip-text 
              hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden 
          text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 
          group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white 
          focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 
          max-lg:hidden cursor-pointer"
        >
          <span
            className="relative px-5 py-2.5 transition-all ease-in duration-75 
            bg-white dark:bg-gray-900 rounded-md 
            group-hover:bg-transparent group-hover:dark:bg-transparent"
          >
            Get in Touch
          </span>
        </button>

        {/* Hamburger (mobile) */}
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hidden max-lg:block cursor-pointer"
        >
          <img src={hamburger} alt="hamburger icon" width={50} height={40} />
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 right-8 bg-[#121418]/90 backdrop-blur-lg p-6 rounded-2xl shadow-lg flex flex-col gap-6 text-white border border-gray-700 max-lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-medium text-lg transition-all hover:opacity-80"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Nav
