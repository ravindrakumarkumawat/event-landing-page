import {
  GooglePlusOutlined,
  HomeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import NormalButton from "../common/NormalButton";
import NormalCol from "../common/NormalCol";
import NormalInput from "../common/NormalInput";
import NormalRow from "../common/NormalRow";
import RowLayout from "../Layout/RowLayout";
import './Contact.css'

const Contact = () => {
  const [contact, setContact] = useState({})

  const onChange = (e) => {
    console.log(e.target.name, e.target.value)
    setContact({
      ...contact,
      [e.target.name]:e.target.value
    })
  }

  const showAlert = () => {
    alert(JSON.stringify(contact))
    setContact({})
  }
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
                      value={contact.name || ''}
                      classNames={"input border"}
                      required={true}
                      placeholder={"Name"}
                      name={"name"}
                      onChange={onChange}
                    />
                  </NormalCol>
                  <NormalCol span={49}>
                    <NormalInput 
                      value={contact.email || ''}
                      classNames={"input border"}
                      required={true}
                      placeholder={"Email"}
                      name={"email"}
                      onChange={onChange}
                    />
                  </NormalCol>
                </NormalRow>
                <NormalRow>
                  <NormalCol span={24}>
                    <NormalInput 
                      value={contact.message || ''}
                      classNames={"input border"}
                      required={true}
                      placeholder={"Message"}
                      name={"message"}
                      onChange={onChange}
                    />
                  </NormalCol>
                </NormalRow>
                <NormalRow>
                  <NormalCol span={24}>                  
                      <NormalButton name={'SEND'} btntype={"primary"} handleAction={showAlert}/>
                    
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
