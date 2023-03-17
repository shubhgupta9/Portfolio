import Link from 'next/link'
import React from 'react'
import { Cursor,Typewriter, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'

type Props = {
  pageInfo: PageInfo
}
// src={urlFor(skill?.image).url()}
function Hero({pageInfo}: Props) {
    const [text,count] = useTypewriter({
        words: ["Hi, My name is Shubh Gupta;","I am a Web Developer;", "<I love to solve problems/>"],
        loop: true,
        delaySpeed: 1000,
    })
  return (
    <div className='h-screen flex flex-col space-y-0 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img 
        className='realtive rounded-full h-32 w-32 mx-auto object-cover'
         src={urlFor(pageInfo?.heroImage).url()}/>
         {/* src="https://pps.whatsapp.net/v/t61.24694-24/299448188_381211900755151_6745586857079759047_n.jpg?ccb=11-4&oh=01_AVwQRoLmdR1t-bpx9DSNyoz8VoBquLPpznVYsVIYVduU5g&oe=63434D4B" alt="" /> */}
         <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>IT Undergrad</h2>
        <h1 className='text-xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5'>
        <Link href="#about">
         <button className='heroButton'>About</button>
        </Link>
          <Link href="#experience">
         <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
         <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
         <button className='heroButton'>Projects</button>
          </Link>
          
         
        </div>

        </div>
    </div>
  )
}

export default Hero