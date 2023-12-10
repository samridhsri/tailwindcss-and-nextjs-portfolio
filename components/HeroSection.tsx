"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Samridh!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I am actually bad at gifting but since you gave me a monster truck. I am going to gift you a monster website hahahahaha
          </p>
          <p>I only have few regrets in life</p>
          <p>- Not meeting you earlier</p>
          <p>- Not going to that Punit Singh thing with you</p>
          <p>- Not able to go to library with you next semester</p>
          <p>- Woh cheesecake saath nahi khaaya</p>
          <p>- Woh Paneer Bhurji roll jab achha tha tab saath nahi khaaya</p>

        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
