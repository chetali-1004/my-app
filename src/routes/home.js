import React from 'react'
import Navbar from "../components/NavBar"
import HeroImg from "../components/HeroImg"
import Footer from "../components/Footer"
const home = () => {
  return (
    <div>
      <Navbar/> 
      <HeroImg />
      <Footer />
    </div>
  )
}

export default home