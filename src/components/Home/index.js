import React from 'react'
import Footer from '../Footer'
import Image from '../Image'
import Map from '../../assets/images/map.jpg'

const Home = () => {
  return (
    <>
      <Image src={Map} alt="map" classNames={"grayscale-min"}/>
     <Footer />
    </>
  )
}

export default Home
