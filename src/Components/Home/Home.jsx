import React from 'react'
import './home.css'
import Picture from '../../assets/my-picture.png'
import whatsapp from '../../assets/whatsapp-logo-3-1.png'
import call from '../../assets/call-icon.png'

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
            <h3 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>Hello I'm Olajumoke</h3>
            <p className='text-sm md:text-2xl tracking-tight'>I'm a Frontend Developer with a passion for creating clean, user-friendly, 
                and accessible web applications. I specialize in, React, CSS, HTML, Javascript, Bootstrap, jQuery, Responsive Design. I enjoy turning problems into simple, beautiful, and friendly interfaces. Whether working on a large-scale web application or 
                a small personal project, I always aim to deliver a seamless user experience.
            </p>
            <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
            duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'><a href="https://wa.me/2348133295240" target="_blank">Contact Me</a>
            </button>
            <div class="whatsapp-float animate__animated animate__pulse animate__infinite	infinite">
                <a href="https://wa.me/2348133295240" target="_blank">
                  <img src={whatsapp} alt="whatsapp-icon"/>
                </a>
          </div>
          <div class="call-float animate__animated animate__pulse animate__infinite	infinite">
            <a href="tel:+2348166784096" target="_blank">
                <img src={call} alt="phone-icon"/>
            </a>
         </div>
        </div>
        <div>
            <img className=' section-img' src={Picture} alt=''/>
        </div>
    </div>
  )
}

export default Home