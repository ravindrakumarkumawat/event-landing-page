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
import './Contact.css'

const Contact = () => {
  return (
    <div className="mtb-5">
    <RowLayout>
      <div className="container content padding-64" id="contact">
        <h2 className="wide center">CONTACT</h2>
        <p className="opacity center">
          <i>Fan? Drop a note!</i>
        </p>

        <div className="row padding-32">
          <NormalRow>
            <NormalCol span={12}>
              <div className="large margin-bottom">
                <HomeOutlined /> <span>Chicago, US</span>
                <br />
                <PhoneOutlined /> <span>Phone: +00 151515</span>
                <br />
                <GooglePlusOutlined /> <span>Email: mail@mail.com</span>
                <br />
              </div>
            </NormalCol>
            <NormalCol span={12}>
                <NormalRow classNames={"justifyBetween"}>                  
                  <NormalCol span={49}>
                    <NormalInput 
                      classNames={"input border"}
                      required={true}
                      placeholder={"Name"}
                      name={"Name"}
                    />
                  </NormalCol>
                  <NormalCol span={49}>
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
                  <NormalCol span={24}>                  
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
    </div>
  );
};

export default Contact;
