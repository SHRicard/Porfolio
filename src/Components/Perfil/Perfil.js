import React from "react";
import { Link } from "react-router-dom";

import FotoPerfil from "../Img/fotoFondo.jpg";
// import CV from "../../../public/RicardoRamirez.pdf";
import "./Perfil.css";

const Perfil = () => {
  return (
    <>
      <div className="row">
        <div className="col-4 p-0 d-none d-lg-block text-center  foto-perfil ">
          <img src={FotoPerfil} alt="perfil" className="img-fluid " />
          <p className="fs-1 name-text  m-0">Ricardo Ramirez</p>
          <p className="fs-4  text-muted m-0 lh-sm  ">web developer</p>
          <p className="red fs-6 pt-4 text-muted m-0 lh-sm ">Follow me</p>
          <div className="col-12 red-social pb-5">
            <i className="icons bi bi-linkedin mx-2"></i>
            <i className="icons bi bi-github mx-2"></i>
            <i className="icons bi bi-youtube mx-2"></i>
          </div>
          <button
            type="button"
            className="col-6 btn btn-outline-warning btn-sm btn-download m-4"
          >
            <i className="bi bi-cloud-arrow-down-fill ">&nbsp;Ver C.V&nbsp;</i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Perfil;
