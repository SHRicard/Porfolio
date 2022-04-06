import React from "react";
import Modal from "react-modal";

import AboutMe from "../Img/about.jpg";
import Js from "../Img/JavaScript.png";
import Node from "../Img/Node.png";
import Posgres from "../Img/posgres.png";
import ReactPng from "../Img/React.png";
import Redux from "../Img/Redux.png";
import Sequelize from "../Img/sequelize.png";
import AboutAnimation from "../Animation/AboutA/AboutAnimation.js";
import bootstrap from "../Img/Bootstrap.png";
import Css from "../Img/Css.png";
import Html from "../Img/Html.png";
import "./About.css";

const customStyles = {
  content: {
    top: "59%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

const About = () => {
  const [modalIsOpenCertificado, setIsOpenCertificado] = React.useState(false);

  return (
    <div className="row">
      <Modal
        isOpen={modalIsOpenCertificado}
        onRequestClose={() => setIsOpenCertificado(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container">
          <div className="row">
            <div className="col fs-1  text-center text-Certificado p-3">
              Mi Certificado
            </div>
          </div>
        </div>
        <div className="container h-modal-diploma">
          <div className="row row-cols-auto d-flex justify-content-center">
            <div className="col">
              <iframe
                className="diploma"
                src="https://drive.google.com/file/d/1Jkuyni8KgKYy5UGUjK01EvdZ9KBf_7x6/preview"
                allow="autoplay"
                title="Diploma"
              ></iframe>
            </div>
            <div className="col">
              <iframe
                className="diploma"
                src="https://drive.google.com/file/d/1mHYxfE6LxwmALVkotIJKYrbJNIO9Yswh/preview"
                allow="autoplay"
                title="Diploma"
              ></iframe>
            </div>
            <div className="col">
              <iframe
                className="diploma"
                src="https://drive.google.com/file/d/1X_C7fPFu7j_eVP-HLAtve20aXgpgAa9X/preview"
                allow="autoplay"
                title="Diploma"
              ></iframe>
            </div>
            <div className="col">
              <iframe
                className="diploma"
                src="https://drive.google.com/file/d/1A1eC6xXjqbp-fH6dPp22FvGP0aB2a0aG/preview"
                allow="autoplay"
                title="Diploma"
              ></iframe>
            </div>
            <div className="col">
              <iframe
                className="diploma"
                src="https://drive.google.com/file/d/1KCUXl4Pz37k6-nAS_qTvi0FleJ3vl6lv/preview"
                allow="autoplay"
                title="Diploma"
              ></iframe>
            </div>
          </div>
        </div>
      </Modal>

      <div className="col-12 p-3 mb-5">
        <div className="">
          <AboutAnimation />
        </div>
      </div>
      <div className="col-12    text-center p-4 ">
        <span className="text-fff text-center">
          Soy una persona que encontró su verdadera vocación,
          <br />
          comencé realizando el bootcamp de
          <span className="soy-Henry fs-6 "> Soy Henry</span>
          <br />
          y luego para poder expandir
          <br />
          mas mis conocimiento adquirir una membresía en la plataforma
          <span className="Platzi fs-6"> Platzi</span>
          <br />
          Me emociona aprender y estoy en constante capacitación.
        </span>

        <p className="text-fff ">Quiere saber mas de mis Estudios?</p>
        <button
          type="button"
          onClick={() => setIsOpenCertificado(true)}
          className="btn btn-outline-warning   btn-download col-6 text-fff mt-4 "
        >
          Ver mi Certificado
        </button>
      </div>
      <div className="col-12 d-flex justify-content-center pt-4">
        <p className="ricardo fs-1">Conocimientos</p>
      </div>
      <div className=" row justify-content-center p-0 m-0 pt-2">
        <div className="col-auto js  text-center text-fff">
          <img src={Js} alt="NoJavaScript" className="img-fluid" />
          <small>JavaScript</small>
        </div>
        <div className="col-auto Sequelize  text-fff text-center pt-2">
          <img src={Sequelize} alt="NoJavaScript" className="img-fluid" />
          <small>Sequelize</small>
        </div>
        <div className="col-auto Redux text-fff text-center  ">
          <div className="col-12">
            <img src={Redux} alt="NoJavaScript" className="img-fluid" />
          </div>
          <small>Redux</small>
        </div>
        <div className="col-auto ReactPng text-fff text-center pt-2">
          <img src={ReactPng} alt="NoJavaScript" className="img-fluid" />
          <small>React</small>
        </div>
        <div className="col-auto Posgres text-fff text-center pt-2">
          <img src={Posgres} alt="NoJavaScript" className="img-fluid" />
          <small>PosgreSQL</small>
        </div>
        <div className="col-auto Node  text-fff text-center pt-1">
          <img src={Node} alt="NoJavaScript" className="img-fluid" />
          <small>NodeJs</small>
        </div>
        <div className="col-auto Css  text-center text-fff pt-1">
          <div className="col-12">
            <img src={Css} alt="NoJavaScript" className="img-fluid" />
          </div>
          <small>Css</small>
        </div>
        <div className="col-auto Html  text-center text-fff">
          <div className="col12">
            <img src={Html} alt="NoJavaScript" className="img-fluid" />
          </div>
          <small>Html</small>
        </div>
        <div className="col-auto Html  text-center text-fff pt-2">
          <div className="col-12">
            <img src={bootstrap} alt="NoJavaScript" className="img-fluid" />
          </div>
          <small>bootstrap</small>
        </div>
      </div>
    </div>
  );
};

export default About;
