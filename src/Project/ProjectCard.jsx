import React from 'react'


const ProjectCard = ({image,title, main}) => {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#0c0e29] shadow-xl shadow-slate-900 rounded-2xl'>
        <img className='p-4' src={image} alt=''/>
        <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
            {title}
        </h3>
        <p className='px-4 text-sm md:text-md leading-tight py-2'>{main}</p>
        {/* <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4'>
            <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-0 duration-100 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
                Demo
            </button>
            <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-0 duration-100 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
               <a href='view-source:http://localhost:5174/video/27/GAH_9YWPm0Y'>Source code</a> 
            </button>
        </div> */}
    </div>
    
  )
}

export default ProjectCard