import React from 'react'
import Footer from '../Footer'
import Image from '../Image'
import Map from '../../assets/images/map.jpg'
import Contact from '../Contact'
import Tour from '../TourModal'


const Home = () => {
  return (
    <> 
      <Tour /> 
      <Contact /> 
      <Image src={Map} alt="map" classNames={"grayscale-min"}/>
      <Footer />
    </>
  )
}

export default Home
