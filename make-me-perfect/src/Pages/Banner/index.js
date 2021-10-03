import React from "react";
import ImgRender from "../../Component/ImgRender";
import { Images } from "../../Component/ImgContainer";

const Banner = () => {
  return (
    <div className="banner-info">
      {/* ------Banner card--- */}
      <div className="col-md-7 header-right">
        <h1>Hi !</h1>
        <h6>FrontEnd Developer</h6>
        <ul className="address">
          <li>
            <ul className="address-text">
              <li>
                <b>NAME</b>
              </li>
              <li>I'M Vinay Maurya</li>
            </ul>
          </li>
          <li>
            <ul className="address-text">
              <li>
                <b>D.O.B</b>
              </li>
              <li>16th June</li>
            </ul>
          </li>
          <li>
            <ul className="address-text">
              <li>
                <b>PHONE </b>
              </li>
              <li>+91 73078 05030</li>
              <li>+91 83608 79949</li>
            </ul>
          </li>
          <li>
            <ul className="address-text">
              <li>
                <b>ADDRESS </b>
              </li>
              <li>#25, st.no: 05, Dhillon Nagar, Lohara, Ludhiana, Punjab</li>
            </ul>
          </li>
          <li>
            <ul className="address-text">
              <li>
                <b>E-MAIL </b>
              </li>
              <li>
                <a href="mailto:vinay.shermauryan@gmail.com">
                  vinay.shermauryan@gmail.com
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="col-md-5 header-left">
        <ImgRender
          className="imageVinay"
          src={Images.VinayImage}
          alt="Vinays Photo"
        />
      </div>
      <div className="clearfix"> </div>
    </div>
  );
};

export default Banner;
