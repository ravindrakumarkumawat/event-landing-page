import React from 'react'
import NormalRow from '../common/NormalRow'
import NormalCol from '../common/NormalCol'
import './Image.css'

const Image = ({
  src,
  alt,
  classNames,
}) => {
  return (
    <NormalRow>
      <NormalCol span={24}>   
        <div className="image-container">
          <img alt={alt} src={src} className={`responsive-img `+ classNames}/>
        </div>
      </NormalCol>
    </NormalRow> 
  )
}

export default Image