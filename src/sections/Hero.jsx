import React from 'react'

function Hero() {
  return (
    <>
      <section
        id="home"
        className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
      >
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>

           <p>
            Vibe with the Future
           </p>

    <h1>
            <span>Next-Level Arrivals</span>

            <br />

            <span>
              Power. Precision. Style.
            </span>
    </h1>

    <p>
      Now Playing – The Sound of Style
    </p>

        </div>

      </section>
    </>
  )
}

export default Hero