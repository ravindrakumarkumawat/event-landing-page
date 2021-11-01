import React from 'react'
import './Image.css'

const Image = ({
  src,
  alt,
  classNames,
}) => {
  return (
    <div className="image-container">
      <img alt={alt} src={src} className={`responsive-img `+ classNames}/>
    </div>
  )
}

export default Image