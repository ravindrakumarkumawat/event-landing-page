import React from 'react'
import { AmazonOutlined, FacebookOutlined, GoogleOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import RowLayout from '../Layout/RowLayout'
import './Footer.css'

const Footer = () => {
  return (
    <div className="bg-grey">
      <RowLayout>
        <div className="footer mtb-5">
          <div className="icons-list">
            <FacebookOutlined />
            <InstagramOutlined />
            <GoogleOutlined />  
            <TwitterOutlined />
            <AmazonOutlined />
            <LinkedinOutlined />
          </div>
          <div>
            <p>Powered by <a href="#" target="_blank">w3.css</a></p>
          </div>
        </div>
      </RowLayout>
    </div>
  )
}

export default Footer
