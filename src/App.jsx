import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'

function App() {
 

  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  )
}

export default App
