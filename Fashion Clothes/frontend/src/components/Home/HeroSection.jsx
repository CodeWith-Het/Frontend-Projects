import React from "react"
import Girl1 from "../../assets/girl1.png"

const HeroSection = () => {
  return (
    <div className="flex w-full h-[calc(100vh-3rem)] bg-gray-200">
      <div className="w-1/2 flex flex-col justify-center gap-3 px-[6vw]">
        <span className="text-sm text-red-500 font-medium">Floral Basic</span>

        <h1 className="text-6xl font-bold text-black leading-tight">
          Dresses & Shirts
        </h1>

        <p className="text-lg text-gray-500">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>

        <span className="text-sm font-semibold text-black">
          Exclusive Collection
        </span>

        <button className="mt-2 w-fit bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition cursor-pointer">
          Explore Now
        </button>
      </div>
      
      <div className="w-1/2 h-full">
        <img
          src={Girl1}
          alt="girl"
          className="w-full h-full object-cover object-top"
        />
      </div>

    </div>
  )
}

export default HeroSection
