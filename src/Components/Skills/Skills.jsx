import React from 'react'
import { FaBootstrap, FaCss3, FaGoogle, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import Appclick from '../../assets/Appclick-removebg-preview.png'
import { SiSololearn } from 'react-icons/si'


const Skills = () => {
  return (
    <div id='Skills' className='p-10 md:p-24'>
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
        </div>
        <div>
          <h1 className='text-2xl md:text-4xl text-white font-bold'>Certification</h1>
        <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <FaGoogle color='#4285f4' size={50}/>
            <span className='text-white'>
              <h2 className='leading-tight'>Google IT Support, Google</h2>
              <p className='text-sm leading-tight font-thin'>Oct 9, 2021</p>
              <ul className='text-sm p-2'>
                <li>Technical Support Fundamentals</li>
                <li>Bits and Bytes of Computer Networking</li>
                <li>Operating Systems and You</li>
                <li>System Administration and IT Infrastructure Services</li>
                <li>IT Security</li>
              </ul>
            </span>
        </div>
        <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <SiSololearn color='#E50914' size={50}/>
            <span className='text-white'>
              <h2 className='leading-tight'>Frontend Development, Sololearn</h2>
              <p className='text-sm leading-tight font-thin'>March 2, 2022</p>
              <ul className='text-sm p-2'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
              </ul>
            </span>
        </div>
        <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <img src={Appclick} alt='appclick-logo'/>
            <span className='text-white'>
              <h2 className='leading-tight'>Software Developer, Appclick ICT Academy</h2>
              <p className='text-sm leading-tight font-thin'>March 25, 2024</p>
              <ul className='text-sm p-2'>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>JQuery</li>
              </ul>
            </span>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Skills