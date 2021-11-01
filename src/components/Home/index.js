import React from 'react'
import Footer from '../Footer'
import Image from '../Image'
import Map from '../../assets/images/map.jpg'
import Contact from '../Contact'
import Tour from '../TourModal'
import Band from '../Band'


const Home = () => {
  return (
    <> 
      <Band />
      <Tour /> 
      <Contact /> 
      <Image />
      <Footer />
    </>
  )
}

export default Home
