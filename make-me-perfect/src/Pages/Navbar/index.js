import React from "react";
import ImgRender from "../../Component/ImgRender";
import { Images } from "../../Constants/ImgContainer";

const Navbar = () => {
  return (
    <>
      {/* <!-- Navbar --> */}

      {/* <!-- top-header --> */}
      {/* <!-- /logo -->
        <!--top-nav----> */}
      <div className="top-nav">
        <div className="navigation">
          <div className="logo">
            <h1>
              <a href="##">
                Lets<span>Code</span>Vinay
              </a>
            </h1>
          </div>
          <div className="navigation-right">
            <span className="menu">
              <ImgRender className="img" src={Images.Menu} alt="Menu Icon " />
            </span>
            <nav className="link-effect-3" id="link-effect-3">
              <ul className="nav1 nav nav-wil">
                <li className="active">
                  <a data-hover="Home" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="scroll" data-hover="About" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="scroll" data-hover="Skills" href="#services">
                    Skills
                  </a>
                </li>
                <li>
                  <a className="scroll" data-hover="Experience" href="#work">
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    className="scroll"
                    data-hover="Qualification"
                    href="#qualification"
                  >
                    Qualification
                  </a>
                </li>
                <li>
                  <a className="scroll" data-hover="Portfolio" href="#port">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="scroll" data-hover="Blog" href="#blogs">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="scroll" data-hover="Contact" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            {/* <!-- script-for-menu -->
                    <script>
                       $( "span.menu" ).click(function() {
                         $( "ul.nav1" ).slideToggle( 300, function() {
                         // Animation complete.
                          });
                         });
                    </script>
                <!-- /script-for-menu --> */}
          </div>
          <div className="clearfix"></div>
        </div>
        {/* <!-- /top-header --> */}
      </div>
    </>
  );
};
export default Navbar;
