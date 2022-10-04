import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'

type Props = {
  pageInfo: PageInfo
}

function About({pageInfo}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1.5
    }}
     className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-4 justify-center mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        
       <motion.img className='mt-20 mb-1 p-3 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[400px]'
       initial={{
        x: -200,
        opacity:0
       }} 
       transition={{
        duration:1.2
       }}
        whileInView={{
            opacity: 1,
            x:0
       }}
       viewport={{
        once:true
      }}
       src="https://pps.whatsapp.net/v/t61.24694-24/299448188_381211900755151_6745586857079759047_n.jpg?ccb=11-4&oh=01_AVwQRoLmdR1t-bpx9DSNyoz8VoBquLPpznVYsVIYVduU5g&oe=63434D4B" alt="" />
       <div className='space-y-10 px-2 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background</h4>
        <p className='text-sm'>Currently I am in 4th year(current GPA: 9) of B.Tech in Information Technology. I am pursuing it from Dr.Akhilesh Das Gupta Institute of Technology and Management under GGSIPU. 
I did my schooling from Bal Bharati Public School. My 12th percentage was 95.5 and 10th CGPA was 9.4.

I have experience in Web Development with MERN stack, also I have done open source development in GSSOC`20, GWOC`21, HACKTOBER`21, HACKTOBER`22.

Certifications: Responsive Web Design from FREECODECAMP.org, Full Stack Development from Angela Yu(Udemy), Google Cloud Expert, AWS fundamentals from Coursera, Data Structures and Algorithms in CPP (Coding Ninjas).

I have interests in BlockChain, Indian Geopolitics and Mythology. </p>
       </div>
    </motion.div>
  )
}

export default About