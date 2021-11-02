import { MenuOutlined, SearchOutlined } from '@ant-design/icons'
import React from 'react'
import './Navbar.css'
import NormalRow from '../common/NormalRow'
import NormalCol from '../common/NormalCol'

const Navbar = () => {
  return (
    <>
    <NormalRow>
      <NormalCol span={24}>
        <div className="navbar">
          <div className="navbar-left">
            <div>
              <a href="#" className="">HOME</a>
            </div>
            <div className="hide">
              <a href="#band" className="">BAND</a>
            </div>
            <div className="hide">
              <a href="#tour" className="">TOUR</a>
            </div>
            <div className="hide">
              <a href="#contact" className="">CONTACT</a>
            </div>
          </div>
          <div className="navbar-right">
            <div className="hide"><SearchOutlined /></div>
            <div className="bar-menu show"><MenuOutlined /></div>
          </div>
        </div>
      </NormalCol>
    </NormalRow>
    </>
  )
}

export default Navbar
