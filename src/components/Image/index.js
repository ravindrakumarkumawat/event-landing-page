import React from 'react'
import NormalRow from '../common/NormalRow'
import NormalCol from '../common/NormalCol'
import NormalImg from '../common/NormalImg'
import Map from '../../assets/images/map.jpg'

const Image = () => {
  return (
    <NormalRow>
      <NormalCol span={24}>   
        <NormalImg src={Map} alt="map" classNames={"grayscale-min"} />
      </NormalCol>
    </NormalRow> 
  )
}

export default Image