import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="container  footer ">
      <div className="row">
        <div className="col-12 ">
          <div className="d-none d-md-block d-lg-none text-center">
            <a href="https://www.linkedin.com/in/ricardo-ram%C3%ADrez-24478b219/">
              <i className="icons bi bi-linkedin mx-2"></i>
            </a>
            <a href="https://github.com/SHRicard">
              <i className="icons bi bi-github mx-2"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCdV2tPWPrTtcHuwZ5dWtwJQ">
              <i className="icons bi bi-youtube mx-2"></i>
            </a>
          </div>
        </div>

        <div className="col h-copy  d-flex justify-content-center">
          © 2022 All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
