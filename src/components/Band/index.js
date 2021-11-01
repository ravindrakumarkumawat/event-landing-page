import React from "react";
import RowLayout from "../Layout/RowLayout";
import BandMember from "../../assets/images/bandmember.jpg"
import './Band.css'
import NormalImg from "../common/NormalImg";

const bandImg = [{
  imgUrl: BandMember,
  alt: "Random Name"
},{
  imgUrl: BandMember,
  alt: "Random Name"
},{
  imgUrl: BandMember,
  alt: "Random Name"
}]

const Band = () => {
  return (
    <RowLayout>
      <div
        className="w3-container w3-content w3-center w3-padding-64"
        id="band"
        style={{ border: "1px solid red"}}
      >
        <h2 className="w3-wide">THE BAND</h2>
        <p className="w3-opacity">
          <i>We love music</i>
        </p>
        <p className="w3-justify">
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <div className="w3-row w3-padding-32">
          {
            bandImg.map((data) => 
            <div className="w3-third">
              <p>Name</p>
              <NormalImg alt={data.alt} src={data.imgUrl} classNames={"w3-round w3-margin-bottom"}/>
            </div>)
          }
          </div>
        </div>
    </RowLayout>
  );
};

export default Band;
