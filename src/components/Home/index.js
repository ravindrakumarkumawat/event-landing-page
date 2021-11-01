import React from 'react'
import Footer from '../Footer'
import Image from '../Image'
import Map from '../../assets/images/map.jpg'
import Contact from '../Contact'
import Tour from '../TourModal'
import Band from '../Band'
import Navbar from '../Navbar'
import './Home.css'


const Home = () => {
  return (
    <> 
      <Navbar />
      <div className="mt3">
      <Band />
      <Tour /> 
      <Contact /> 
      <Image />
      <Footer />
      </div>
    </>
  )
}

export default Home
