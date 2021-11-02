import { MenuOutlined, SearchOutlined } from '@ant-design/icons'
import React from 'react'
import './Navbar.css'
import NormalRow from '../common/NormalRow'
import NormalCol from '../common/NormalCol'
import './Navbar1.css'

const Navbar = () => {
  function myFunction() {
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
  <a href="#home" className="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <MenuOutlined />
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
