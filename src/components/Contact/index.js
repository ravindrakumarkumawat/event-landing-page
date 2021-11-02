import {
  GooglePlusOutlined,
  HomeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import React from "react";
import NormalButton from "../common/NormalButton";
import NormalCol from "../common/NormalCol";
import NormalInput from "../common/NormalInput";
import NormalRow from "../common/NormalRow";
import RowLayout from "../Layout/RowLayout";

const Contact = () => {
  return (
    <RowLayout>
      <div className="container content padding-64" id="contact">
        <h2 className="wide center">CONTACT</h2>
        <p className="opacity center">
          <i>Fan? Drop a note!</i>
        </p>

        <div className="row padding-32">
          <NormalRow>
            <NormalCol span={12}>
              <div className="col m6 large margin-bottom">
                <HomeOutlined /> Chicago, US
                <br />
                <PhoneOutlined /> Phone: +00 151515
                <br />
                <GooglePlusOutlined /> Email: mail@mail.com
                <br />
              </div>
            </NormalCol>
            <NormalCol span={12}>
                <NormalRow className="row-padding">                  
                  <NormalCol span={12} className="half">
                    <NormalInput 
                      classNames={"input border"}
                      required={true}
                      placeholder={"Name"}
                      name={"Name"}
                    />
                  </NormalCol>
                  <NormalCol span={12} className="half">
                    <NormalInput 
                      classNames={"input border"}
                      required={true}
                      placeholder={"Email"}
                      name={"Email"}
                    />
                  </NormalCol>
                </NormalRow>
                <NormalRow>
                  <NormalCol span={24}>
                    <NormalInput 
                      classNames={"input border"}
                      required={true}
                      placeholder={"Message"}
                      name={"Message"}
                    />
                  </NormalCol>
                </NormalRow>
                <NormalRow>
                  <NormalCol>
                    <NormalButton name={'SEND'} btntype={"primary"}/>
                    {/*<button className="button black section right" type="submit">
                      SEND
  </button>*/}
                  </NormalCol>
                </NormalRow>              
            </NormalCol>
          </NormalRow>
        </div>
      </div>
    </RowLayout>
  );
};

export default Contact;
