import React from "react";
import RowLayout from "../Layout/RowLayout";
import BandMember from "../../assets/images/bandmember.jpg"
import './Band.css'
import NormalImg from "../common/NormalImg";
import NormalRow from "../common/NormalRow";
import NormalCol from "../common/NormalCol";

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
        className="band-container band-content band-center band-padding-64 mtb-5"
        id="band"
      >
        <h2 className="wide center">THE BAND</h2>
        <p className="opacity center">
          <i>We love music</i>
        </p>
        <p className="band-justify">
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
        <NormalRow classNames={"justifyEvenly"}>       
          {
            bandImg.map((data) => 
            <div className="band-third">
              <NormalCol> 
                <p>Name</p>              
                <NormalImg alt={data.alt} src={data.imgUrl} classNames={"band-round"}/>
              </NormalCol>
            </div>
            )
          }
          </NormalRow>
        </div>
    </RowLayout>
  );
};

export default Band;
