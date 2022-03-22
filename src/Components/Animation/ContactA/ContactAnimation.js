import React from "react";
import "./ContactAnimation.css";
const ContactAnimation = () => {
  return (
    <div className="container   fw-bold " data-text="Home">
      <div className="row d-flex justify-content-center">
        <div className="col-auto d-flex justify-content-center   home-animation">
          <div
            className="col-auto fs-6 d-flex justify-content-center align-items-center
            code
"
          >
            <small className="d-none d-md-block">{"<code>"}</small>
          </div>
          &nbsp;Contact&nbsp;
          <div
            className="col-auto fs-6 d-flex justify-content-center align-items-center code
"
          >
            <small className="d-none d-md-block">{"<code/>"}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAnimation;
