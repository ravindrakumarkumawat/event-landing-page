import React from 'react'
import { AmazonOutlined, FacebookOutlined, GoogleOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import RowLayout from '../Layout/RowLayout';

const Footer = () => {
  return (
    <RowLayout>
      <div className="footer">
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
  )
}

export default Footer
