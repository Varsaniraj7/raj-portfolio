import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import PortFolio from './Components/PortFolio'
import Footer from './Components/Footer'


export default function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <Services/>
      <PortFolio/>
      <Contact/>
      <Footer/>
    </>
  )
}
