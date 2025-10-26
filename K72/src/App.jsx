import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import Agence from './assets/pages/Agence'
import Projects from './assets/pages/Projects'

const App = () => {
  return (
    <div className='text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
