import React from 'react'
import Footer from '../Footer'
import Image from '../Image'
import Map from '../../assets/images/map.jpg'
import NormalRow from '../common/NormalRow'
import NormalCol from '../common/NormalCol'
import RowLayout from '../Layout/RowLayout'

const Home = () => {
  return (
    <div>
      <NormalRow>
        <NormalCol span={24}>    
          <Image src={Map} alt="map" classNames={"grayscale-min"}/>
        </NormalCol>
      </NormalRow> 
      <RowLayout>
        <Footer />
      </RowLayout>
    </div>
  )
}

export default Home
