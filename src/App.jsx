import React from 'react'
import './index.css'
import { Hero, Popular, Services, SpecialOffer,About, Subscribe, Testimonials, Footer } from './sections'
import Nav from './components/Nav'

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Popular />
      <About/>
      <Services />
    </>
  )
}

export default App
