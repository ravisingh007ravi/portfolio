import React from 'react'
import Navbar from './components/Navbar/'
import Hero from './components/Hero'
import Tech from './components/Tech'
import Exp from './components/Expe'

export default function App() {
  return (
    <div className='bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 h-screen'>
      <Navbar />   
      <Hero/>
      <Tech/>
      {/* <Exp/> */}
    </div>
  )
}
