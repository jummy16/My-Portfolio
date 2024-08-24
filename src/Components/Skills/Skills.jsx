import React from 'react'
import { FaBootstrap, FaCss3, FaGoogle, FaHtml5, FaJs, FaReact } from 'react-icons/fa'


const Skills = () => {
  return (
    <div id='Skill' className='p-10 md:p-24'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Skills and Certifications</h1>
      <div className='flex flex-wrap items-center justify-around'>
        <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
              <FaHtml5 color='#E34F26' size={50}/>
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
              <FaCss3 color='#1572b6' size={50}/>
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
              <FaJs color='#F7DF1E' size={50}/>
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
              <FaReact color='#61DAF9' size={50}/>
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
              <FaBootstrap color='#E34F26' size={50}/>
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
              <FaGoogle color='#E34F26' size={50}/>
          </span>
        </div>
        <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <FaGoogle color='#4285f4' size={50}/>
            <span className='text-white'>
              <h2 className='leading-tight'>Google IT Support</h2>
            </span>
        </div>
      </div>
    </div>
  )
}

export default Skills