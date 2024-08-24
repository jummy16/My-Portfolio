import React from 'react'
import ProjectCard from './ProjectCard'
import yt from '../assets/yt.png'
import e_commerce from '../assets/e-commerce.png'
import wedding from '../assets/wedding.png'

const Project = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
          <ProjectCard
                image={e_commerce}
               title="E-Commerce Site"
                main="This is a E-Commerce site where you can buy and sell your product and the site 
                  is created using Javascript and some other library"/>
          <ProjectCard
              image= {yt}
              title="Youtube Clone"
              main="This is a fully functional youtube clone created using Vite React"/>
          <ProjectCard
              image={wedding}
              title="Wedding Website"
              main="A wedding website sample built with HTML, CSS and other library"/>
        </div>
    </div>
  )
}

export default Project