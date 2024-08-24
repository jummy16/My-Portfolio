import React from 'react'
import image from '../../assets/IMG_5110-removebg-preview.png'
import { IoArrowForward } from 'react-icons/io5'
import './about.css'

const About = () => {
  return (
    <div className='text-white md:flex overflow-hidden items-center  
    md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-2xl md:text-xl font-bold'>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <img className='md:h-80' src={image} alt=''/>
                <ul>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>
                        <span>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>Creating a visual and interactive elements of a website or web application that users see and interact with.</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>
                        <span>
                            <p className='about-section text-sm md:text-md leading-tight'>Ensuring websites are responsive and function seamlessly across different devices and browsers.</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>
                        <span>
                            <p className='about-section text-sm md:text-md leading-tight'>Optimizing website performance to ensure fast loading times and a smooth user experience.</p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About