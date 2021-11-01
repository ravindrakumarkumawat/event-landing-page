import React from 'react'
import { Carousel } from 'antd';
import Chicago from '../../assets/images/chicago.jpg'
import La from '../../assets/images/la.jpg'
import Ny from '../../assets/images/ny.jpg'
import NewYork from '../../assets/images/newyork.jpg'
import Paris from '../../assets/images/paris.jpg'
import Sanfran from '../../assets/images/sanfran.jpg'
import NormalImg from '../common/NormalImg';
import './AntdCarousel.css'

const bandImg = [
  {
    imgUrl: La,
    alt: "Los Angeles",
    title: "Los Angeles",
    subtitle: "We had the best time playing at Venice Beach!"
  },
  {
    imgUrl: Chicago,
    alt: "Chicago",
    title: "Chicago",
    subtitle: "Thank you, Chicago - A night we won't forget."
  },
  {
    imgUrl: Ny,
    alt: "New York",
    title: "New York",
    subtitle: "The atmosphere in New York is lorem ipsum."
  }
]

const AntdCarousel = () => {
return(
  <Carousel autoplay dots={false}>
    {
      bandImg.map((d) => 
      <div className="container w90">
        <NormalImg src={d.imgUrl} alt={d.alt}/>
        <div className="content">
        <h3>{d.title}</h3>
        <p><b>{d.subtitle}</b></p>
        </div>
      </div>
      )
    }
  </Carousel>
  )
}

export default AntdCarousel