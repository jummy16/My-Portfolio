import React from 'react'
import { IoArrowForward } from 'react-icons/io5'
import yatice from "../../assets/yatice-logo.png"
import cognifyz from "../../assets/cognifyz-logo.jfif"

const Experience = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center  
    md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h1 className='text-2xl md:text-xl font-bold'>Experience</h1>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <ul>
                    <div className='flex gap-3 py-4'>
                        <img className='md:h-10 sm: h-10' src={cognifyz} alt='logo'/>
                        <span>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer Intern @ Cognifyz Technologies</h1>
                            <p className='about-section text-sm md:text-md leading-tight'>Jan 2025 - Feb 2025</p><br/>
                            <p className='text-sm md:text-md leading-tight'>Worked with HTML,CSS,Javascript,Bootstrap to develop web pages.</p><br/>
                            <p className='text-sm md:text-md leading-tight'>Designed and styled with interfaces using Bootstrap</p><br/>
                            <p className='text-sm md:text-md leading-tight'>Collaborated with senior developers to deliver high-quality software projects within deadlines.</p><br/>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <img className='md:h-10 sm: h-10' src={yatice} alt='logo'/>
                        <span>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer @ YATICE</h1>
                            <p>Oct 2024 - Jan 2025</p><br/>
                            <p className='text-sm md:text-md leading-tight'>Built and maintained responsive web applications using Vue.js.</p><br/>
                            <p className='text-sm md:text-md leading-tight'>Designed and implemented modern UI components, ensuring consistency and accessibility.</p><br/>
                            <p className='text-sm md:text-md leading-tight'>Collaborated with cross-functional teams, leveraging Git/GitHub for version control and streamlined workflows.</p><br/>
                            <p className='text-sm md:text-md leading-tight'>Optimized application performance, resulting in faster load times and improved user satisfaction.</p><br/>
                        </span>
                    </div>
                    {/* <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>
                        <span>
                            <p className='about-section text-sm md:text-md leading-tight'>Optimizing website performance to ensure fast loading times and a smooth user experience.</p>
                        </span>
                    </div> */}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Experience