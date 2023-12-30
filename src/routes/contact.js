import React from 'react'
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2'
import FormContent from '../components/FormContent'

const contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT US." text = "Let's connect"/>
      <FormContent />
      <Footer />
    </div>
  )
}

export default contact