import React from 'react'
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'

const about = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="I'm a friendly frontend developer"/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default about