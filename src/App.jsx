import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <GetStarted />
    <Footer />
    </>
  )
}

export default App
