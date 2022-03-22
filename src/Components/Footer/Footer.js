import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="container  footer ">
      <div className="row">
        <div className="col-12 ">
          <div className="d-none d-md-block d-lg-none text-center">
            <i className="icons bi bi-linkedin col-2 mx-2"></i>
            <i className="icons bi bi-github col-2 mx-2"></i>
            <i className="icons bi bi-youtube col-2 mx-2"></i>
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
