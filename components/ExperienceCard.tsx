import exp from 'constants'
import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import { Experience } from '../typings'

type Props = {
    experience: Experience
}

function ExperienceCard({experience}: Props) {
  return (
   <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[320px] md:w-[480px] xl:w-[900px] snap-center bg-[#292929] p-4 mt-32 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <motion.img
    initial={{
        y: -100,
        opacity: 0
    }}
    whileInView={{
        opacity:1,
        y: 0
    }}
    transition={{
        duration:1.2
    }}
    viewport={{
        once: true
    }}
    className='w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center' 
     src={urlFor(experience.companyImage).url()} alt="" />

     <div className='px-0 md:px-10'>
        <h4 className='text-xl font-semibold'>
            {experience?.jobTitle}
        </h4>
        <p className='text-lg'>{experience.company}</p>
     </div>
     <p className='uppercase py-1 text-xs'>{new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()} </p>
     <ul className='list-disc space-y-1 ml-5 text-sm'>
        {experience.points.map((point,i) =>(
            <li key={i}>{point}</li>
        ))}
     </ul>
   </article>
  )
}

export default ExperienceCard