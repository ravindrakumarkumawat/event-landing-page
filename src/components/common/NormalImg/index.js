import React from 'react'
import './NormalImg.css'

const NormalImg = ({
  alt,
  src,
  classNames
}) => {
  return (
    <div className="image-container">
      <img alt={alt} src={src} className={`responsive-img `+ classNames}/>
    </div>
  )
}

export default NormalImg
