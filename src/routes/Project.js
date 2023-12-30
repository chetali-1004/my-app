import React from 'react'
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from '../components/work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project