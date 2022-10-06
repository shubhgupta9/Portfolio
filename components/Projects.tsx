import { motion } from 'framer-motion';
import React from 'react'
import { urlFor } from '../sanity';
import { Project } from '../typings';

type Props = {
  projects: Project[]
}

function Projects({ projects }: Props) {
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
     className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center z-0'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
            {projects?.map((project,i) => (
              <div
              key={project._id}
               className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 xl:w-[860px] h-screen'>
                <motion.img
                  initial={{
                    y: -300,
                    opacity:0
                }}
                whileInView={{
                    y: 0,
                    opacity:1
                }}
                transition={{
                    duration:1.2
                }}
                viewport={{
                  once:true
                }}
                 src={urlFor(project?.image).url()} alt="" />

                <div className='space-y-5 px-0 md:px-10 max-w-7xl'>
                  <h4 className='text-xl font-semibold text-center'>
                   <span className='underline decoration-[#F7AB80]/80'>Case Study {1+i} of {projects.length}: </span>
                   {project.title}
                  </h4>
              <div className='flex items-center space-x-2 justify-center'>
                {project?.technologies.map((technology)=>(
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                  className='h-8 w-8 rounded-full'
                  key={technology._id}
                  src={urlFor(technology.image).url()} alt="" />
                ))}
                </div>                  
                   <p className='text-md text-center md:text-left'>{project?.summary}</p>
                </div>
              </div>
                ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12'>
        </div>
    </motion.div>
  )
}

export default Projects