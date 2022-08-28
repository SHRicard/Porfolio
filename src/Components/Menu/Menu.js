import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../Img/logo.png";
import Perfil from "../Perfil/Perfil.js";
import FotoPerfil from "../Img/Ricardo.png";
import RicardoRedondo from "../Img/RicardoGif.gif";
import Modal from "react-modal";
import Footer from "../Footer/Footer";

import "./Menu.css";

const modaCv = {
  content: {
    top: "59%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

const Menu = () => {
  const [modalIsOpenCv, setIsOpenCV] = React.useState(false);

  return (
    <div className="container">
      <Modal
        isOpen={modalIsOpenCv}
        onRequestClose={() => setIsOpenCV(false)}
        style={modaCv}
        contentLabel="Example Modal"
      >
        <div className="container">
          <div className="row">
            <div className="col h-cv-color fs-1 text-center text-fff">
              Mi Cv
            </div>
          </div>
        </div>
        <div className="container h-cv-color">
          <div className="row row-cols-auto d-flex justify-content-center">
            <div className="col">
              <iframe
                src="https://drive.google.com/file/d/1RaLVnGO0p0PkYj2sAJYOYqq5HBc5voRu/preview"
                className="cv"
                allow="autoplay"
                title="cv"
              ></iframe>
            </div>
          </div>
        </div>
      </Modal>

      <nav className="navbar sticky-top navbar-expand-lg   navbar-dark pt-4 mt-2">
        <div className="container-fluid ">
          <img src={Logo} alt="Logo" className="p-1 " />
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvasLg"
            aria-controls="navbarOffcanvasLg"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon h-ico"></span>
          </button>
          <div
            className="offcanvas offcanvas-end menu sm w-30"
            tabindex="-1"
            id="navbarOffcanvasLg"
            aria-labelledby="navbarOffcanvasLgLabel "
          >
            {/* Perfeil */}
            <div className="d-lg-none  h-sub-menu  text-center">
              <img src={RicardoRedondo} alt="perfil" className="img-fluid  " />
              <div className="sub-menu">
                <h3 className="d-flex justify-content-center fs-2  mb-1">
                  Ricardo Ramirez
                </h3>

                <p className="fs-6  m-0 text-center text-muted">Web Designer</p>
              </div>
            </div>
            {/* End Perfil */}
            <div className="row">
              <div className="col d-flex  justify-content-lg-end ">
                <div className="offcanvas-body ">
                  <ul className="navbar-nav  text-center ">
                    <li className="nav-item">
                      <Link
                        className="nav-link active fs-6 text"
                        aria-current="page"
                        to="Home"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active fs-6 text" to="Contact">
                        Contact
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active fs-6 text" to="About">
                        About
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link active fs-6 text" to="Projects">
                        Projects
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* sub-menu iconos  */}
            <div className="row  d-lg-none text-center">
              <div>
                <small className="text-muted fs-6 text-fff ">Sigueme en</small>
              </div>
              <div className="col-12 red-social">
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
            {/* sub-menu iconos end */}
            <div className="row p-4 d-lg-none">
              <div className="col  ">
                <button
                  type="button"
                  onClick={() => setIsOpenCV(true)}
                  className="col-12 btn btn-outline-warning btn-sm btn-download"
                >
                  <i class="bi bi-cloud-arrow-down-fill ">&nbsp;Ver&nbsp;C.V</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="row m-0">
        <div className="col-4 p-0 d-none d-lg-block text-center  foto-perfil ">
          <img
            src={FotoPerfil}
            alt="perfil"
            className="img-fluid img-Ricardo "
          />
          <p className="fs-1 name-text pt-4 m-0">Ricardo Ramirez</p>
          <p className="fs-4 web-text text-muted m-0 lh-sm">web developer</p>
          <p className="red fs-6 pt-4 text-muted m-0 lh-sm ">Follow me</p>
          <div className="col-12 red-social pb-5">
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
          <button
            type="button"
            onClick={() => setIsOpenCV(true)}
            className="col-6 btn btn-outline-warning btn-sm btn-download m-4"
          >
            <i class="bi bi-cloud-arrow-down-fill ">&nbsp;Ver &nbsp;C.V</i>
          </button>
        </div>
        <div className="col p-0">
          <section className="fondo-Animado ">
            <Outlet />
          </section>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Menu;
