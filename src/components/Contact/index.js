import React from "react";
import NormalCol from "../common/NormalCol";
import NormalRow from "../common/NormalRow";
import RowLayout from "../Layout/RowLayout";

const Contact = () => {
  return (
    <RowLayout>
      <div
        className="container content padding-64"
        id="contact"
      >
        <h2 className="wide center">CONTACT</h2>
        <p className="opacity center">
          <i>Fan? Drop a note!</i>
        </p>


        <div className="row padding-32">
          <NormalRow>
            <NormalCol span={12}>
            <div className="col m6 large margin-bottom">
            <i className="fa fa-map-marker" style={{width:"30px"}}></i> Chicago, US
            <br />
            <i className="fa fa-phone" style={{width:"30px"}}></i> Phone: +00 151515
            <br />
            <i className="fa fa-envelope" style={{width:"30px"}}>
              {" "}
            </i>{" "}
            Email: mail@mail.com
            <br />
          </div>
            </NormalCol>
            <NormalCol span={12}>
            
          <div className="col m6">
          <form action="/action_page.php" target="_blank">
            <div className="row-padding" style={{margin:"0 -16px 8px -16px"}}>
              <div className="half">
                <input
                  className="input border"
                  type="text"
                  placeholder="Name"
                  required
                  name="Name"
                />
              </div>
              <div className="half">
                <input
                  className="input border"
                  type="text"
                  placeholder="Email"
                  required
                  name="Email"
                />
              </div>
            </div>
            <input
              className="input border"
              type="text"
              placeholder="Message"
              required
              name="Message"
            />
            <button
              className="button black section right"
              type="submit"
            >
              SEND
            </button>
          </form>
        </div>
            </NormalCol>
          </NormalRow>         
        </div>


      </div>
    </RowLayout>
  );
};

export default Contact;
