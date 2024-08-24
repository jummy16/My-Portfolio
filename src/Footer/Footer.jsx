import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div id='Contact' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
        <div>
            <h2 className='text-2xl md:text-6xl font-bold'>Contact</h2>
            <h3 className='text-sm  md:text-2xl font-normal'>Feel free to reach out</h3>
        </div>
        <ul className='text-sm md:text-xl'>
            <li className='flex gap-3 items-center'><MdOutlineEmail sixe={20}/>
                <a href='https://mail.google.com/mail/u/0/#all' target="_blank">ogungbeolajumoke@gmail.com</a>
            </li>
            <li className='flex gap-3 items-center'><CiLinkedin size={20}/>
                <a href='https://www.linkedin.com/in/olajumoke-ogungbe-05381519b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank">Olajumoke Ogungbe</a>
            </li>
            <li className='flex gap-3 items-center'><FaGithub size={20}/>
                <a href='https://github.com/jummy16?tab=repositories' target="_blank">jummy16</a>
            </li>
        </ul>
    </div>
  )
}

export default Footer