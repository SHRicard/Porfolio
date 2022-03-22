import React from "react";
import { Link } from "react-router-dom";

import "./Content.css";
import HomeAnimation from "../Animation/HomeA/HomeAnimation.js";
const Content = () => {
  return (
    <div className="row">
      <div className="col-12 ">
        <div className="container p-3 mb-5">
          <div className="row">
            <div className="col-12    ">
              <HomeAnimation />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12  pt-1 pb-5 text-center ">
            <span className="fs-5 text-fff ">Hola, mi nombre es</span>
            <p className="ricardo m-0 mx-2"> Ricardo Ramirez</p>
            <p className="text-fff m-0 lh-1">
              un joven diseñador loco por el diseño web y móvil.
              <br /> Me encanta el Front-End.
            </p>
            <p className="text-fff pt-5 ">Quiere saber mas sobre Mi</p>
            <Link to="/About">
              <button
                type="button"
                className="col-6  text-fff  btn btn-warning btn-sm  btn-about "
              >
                About me
              </button>
            </Link>
          </div>
          <div className="col-12 text-fff text-center pt-5">
            <p>
              Tenes algo en mente <small className="text-muted fs-4">?</small>
            </p>
            <p>Aqui estoy !! </p>
            <Link to="/Contact">
              <button
                type="button"
                className="col-6 btn btn-outline-warning btn-sm btn-download m-4"
              >
                <i class="bi bi-person-fill">&nbsp;Contactame&nbsp;</i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
