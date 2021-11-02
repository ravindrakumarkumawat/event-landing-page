import { MenuOutlined, SearchOutlined } from '@ant-design/icons'
import { Menu, Dropdown, Button } from 'antd';
import React from 'react'
import './Navbar.css'
import NormalRow from '../common/NormalRow'
import NormalCol from '../common/NormalCol'
import './Navbar1.css'
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Merchandise
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Extras
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Media
      </a>
    </Menu.Item>
  </Menu>
);
const Navbar = () => {
  const handleActive = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <>
    <NormalRow>
      <NormalCol span={24}>
        <div className="topnav" id="myTopnav">
          <a href="#home" className="active">HOME</a>
          <a href="#band">BAND</a>
          <a href="#tour">TOUR</a>
          <a href="#contact">CONTACT</a>
          <Dropdown overlay={menu} placement="bottomLeft" arrow>
            <a>MORE</a>
          </Dropdown>
          <a href="javascript:void(0);" className="icon" onClick={handleActive}>
          <MenuOutlined />
          </a>
          <a className="icon1">
            <SearchOutlined />
          </a>
        </div>
      </NormalCol>
    </NormalRow>
    </>
  )
}

export default Navbar

// <div className="navbar">
// <div className="navbar-left">
//   <div>
//     <a href="#" className="">HOME</a>
//   </div>
//   <div className="hide">
//     <a href="#band" className="">BAND</a>
//   </div>
//   <div className="hide">
//     <a href="#tour" className="">TOUR</a>
//   </div>
//   <div className="hide">
//     <a href="#contact" className="">CONTACT</a>
//   </div>
// </div>
// <div className="navbar-right">
//   <div className="hide"><SearchOutlined /></div>
//   <div className="bar-menu show"><MenuOutlined /></div>
// </div>
// </div>
