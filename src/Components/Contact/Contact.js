import React from "react";
import ContactAnimation from "../Animation/ContactA/ContactAnimation.js";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="row">
      <div className="col-12 ">
        <div className="container p-3 mb-5">
          <div className="row">
            <div className="col-12 text-center   ">
              <ContactAnimation />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center  pt-2 pb-5">
            <p className="fs-6 text-fff ">
              Tengamos una charla, Me encantaría saber de usted.
              <br /> ¿Quieres ponerte en contacto?
            </p>
            <i className=" bi bi-telephone-fill phone">
              <small className="ricardo fs-1">
                &nbsp;&nbsp;&nbsp;&nbsp;1132716458
              </small>
            </i>
          </div>
          <p className="col-12 text-center text-fff fs-5">
            o sino tambien podes
          </p>
          <div className="col-12 text-center pt-3 pb-5">
            <p className="text-fff pt-2 mt-5 mb-1">
              Enviame un Correo con tus Preguntas !!
            </p>
            <i className="bi bi-envelope-fill mail ">
              <small className="text-fff fs-6 ">
                &nbsp;SH_Ricardo@hotmail.com
              </small>
            </i>
          </div>
          <div className="col-12 text-center pt-5 ">
            <p className="ricardo fs-1">
              Argentina<smal className=" ricardo text-info fs-1"> !!</smal>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
