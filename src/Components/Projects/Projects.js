import React from "react";
import Modal from "react-modal";
import Pokemon from "../Img/Pokemon.png";
import Country from "../Img/Country.gif";

import Js from "../Img/JavaScript.png";
import Node from "../Img/Node.png";
import Posgres from "../Img/posgres.png";
import ReactPng from "../Img/React.png";
import Redux from "../Img/Redux.png";
import Sequelize from "../Img/sequelize.png";
import ProjectsAnimation from "../Animation/ProjectsA/ProjectsAnimation.js";
import "./Projects.css";

const customStyles = {
  content: {
    top: "58%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

const Projects = () => {
  const [modalIsOpenPokemon, setIsOpenPokemon] = React.useState(false);
  const [modalIsOpenCountry, setIsOpenCountry] = React.useState(false);

  return (
    <div className="row">
      <Modal
        isOpen={modalIsOpenCountry}
        onRequestClose={() => setIsOpenCountry(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container h-modal ">
          <div className="row">
            <button type="button" className="btn btn-success d-md-none">
              <a href="https://www.youtube.com/watch?v=7CCPhBV7s7c&t=116s">
                <i className="ic bi bi-youtube  ">
                  <span className="fs-6 mx-3 h-letr mx-3">
                    Miralo en Yotube
                  </span>
                </i>
              </a>
            </button>
            <div className="d-none d-md-block">
              <div className="ratio ratio-21x9">
                <iframe
                  src="https://www.youtube.com/embed/7CCPhBV7s7c"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col modal-h">
              <p className="fs-6 text-center ">Proyecto Pais</p>
              <span className="fs-6">
                La idea general de la aplicación es poder ver la información de
                los distintos paises utilizando la api externa
                <a href="https://restcountries.com/"> Rest Countries</a> y a
                partir de ella poder realizar las siguiente:
                <ul>
                  <li>Buscar Pais</li>
                  <li>Filtrarlos / Ordenarlos</li>
                  <li>Crear actividades turísticas</li>
                </ul>
              </span>
              <div className="col">
                <div className="col text-center ">
                  <button type="button" className="btn btn-dark ">
                    <a href="https://github.com/SHRicard/ProyectoPaisesV2">
                      <i class="bi bi-github h-git">
                        <span className="fs-5  h-letr mx-2 ">Codigo Funte</span>
                      </i>
                    </a>
                  </button>
                </div>
              </div>
              <span className="d-flex justify-content-center pb-2 fs-4">
                Tecnologias Implementadas
              </span>
              <div className="row pt-2 skill d-flex justify-content-center">
                <div className="js  text-center  pt-1">
                  <img src={Js} alt="NoJavaScript" className="img-fluid" />
                  <small className="d-flex align-items-end ">JavaScript</small>
                </div>
                <div className="Sequelize  text-center pt-2">
                  <img
                    src={Sequelize}
                    alt="NoJavaScript"
                    className="img-fluid"
                  />
                  <small>Sequelize</small>
                </div>
                <div className="Redux  text-center ">
                  <img src={Redux} alt="NoJavaScript" className="img-fluid" />
                  <small>Redux</small>
                </div>
                <div className="ReactPng  text-center pt-2">
                  <img
                    src={ReactPng}
                    alt="NoJavaScript"
                    className="img-fluid"
                  />
                  <small>React</small>
                </div>
                <div className="Posgres  text-center pt-2">
                  <img src={Posgres} alt="NoJavaScript" className="img-fluid" />
                  <small>PosgreSQL</small>
                </div>
                <div className="Node  text-center pt-1">
                  <img src={Node} alt="NoJavaScript" className="img-fluid" />
                  <small>NodeJs</small>
                </div>
                <div className="row d-flex justify-content-center"></div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpenPokemon}
        onRequestClose={() => setIsOpenPokemon(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container h-modal">
          <div className="row">
            <button type="button" className="btn btn-success d-md-none">
              <a href="https://www.youtube.com/watch?v=CtexV2rBa1A&t=7s">
                <i className="ic bi bi-youtube  ">
                  <span className="fs-6 mx-3 h-letr mx-3">
                    Miralo en Yotube
                  </span>
                </i>
              </a>
            </button>
            <div className="d-none d-md-block">
              <div className="ratio ratio-21x9">
                <iframe
                  src="https://www.youtube.com/embed/CtexV2rBa1A"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col modal-h">
              <p className="fs-6 text-center ">Proyecto Pokémon</p>
              <span className="fs-6">
                La idea general de la aplicación es poder ver la información de
                los distintos Pokémon utilizando la api externa
                <a href="https://pokeapi.co/docs/v2"> PokéAPI </a> y a partir de
                ella poder realizar las siguiente:
                <ul>
                  <li>Buscar Pokémon</li>
                  <li>Filtrarlos / Ordenarlos</li>
                  <li>Crear Pokémon</li>
                </ul>
              </span>
              <div className="col">
                <div className="col text-center">
                  <button type="button" className="btn btn-dark ">
                    <a href="https://github.com/SHRicard/POKEBASEYFROND">
                      <i class="bi bi-github h-git">
                        <span className="fs-5  h-letr mx-2 ">Codigo Funte</span>
                      </i>
                    </a>
                  </button>
                </div>
              </div>
              <span className="d-flex justify-content-center pb-2 fs-4">
                Tecnologias Implementadas
              </span>
              <div className="row pt-2 skill d-flex justify-content-center">
                <div className="js  text-center  pt-1">
                  <img src={Js} alt="NoJavaScript" className="img-fluid" />
                  <small className="d-flex align-items-end ">JavaScript</small>
                </div>
                <div className="Sequelize  text-center pt-2">
                  <img
                    src={Sequelize}
                    alt="NoJavaScript"
                    className="img-fluid"
                  />
                  <small>Sequelize</small>
                </div>
                <div className="Redux  text-center ">
                  <img src={Redux} alt="NoJavaScript" className="img-fluid" />
                  <small>Redux</small>
                </div>
                <div className="ReactPng  text-center pt-2">
                  <img
                    src={ReactPng}
                    alt="NoJavaScript"
                    className="img-fluid"
                  />
                  <small>React</small>
                </div>
                <div className="Posgres  text-center pt-2">
                  <img src={Posgres} alt="NoJavaScript" className="img-fluid" />
                  <small>PosgreSQL</small>
                </div>
                <div className="Node  text-center pt-1">
                  <img src={Node} alt="NoJavaScript" className="img-fluid" />
                  <small>NodeJs</small>
                </div>
                <div className="row d-flex justify-content-center"></div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="col-12 ">
        <div className="container p-3 ">
          <div className="row">
            <div className="col-12 text-center   ">
              <ProjectsAnimation />
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        {/* Card start Country*/}
        <div className="col-sm-12 col-md-6  col-lg-6  d-flex justify-content-center pt-4">
          <div className="container-card ">
            <div className="col-12 text-center">
              <img src={Country} alt="noCountry" className="img-fluid" />
            </div>
            <div className="col-12 text-center">
              <p className="text-fff">Api Rest</p>
              <small className="text-fff">Proyecto de Country</small>
            </div>
            <div className="col-12 text-center">
              <button
                type="button"
                className="col-6 btn btn-outline-warning btn-sm mt-4 btn-card"
                onClick={() => setIsOpenCountry(true)}
              >
                <small className="text-fff">Detalle</small>
              </button>
            </div>
          </div>
        </div>
        {/* Card end Country */}
        {/* Card start Pokemon*/}
        <div className="col-sm-12  col-md-6 col-lg-6 d-flex justify-content-center pt-4 ">
          <div className="container-card ">
            <div className="col-12 text-center pt-1">
              <img src={Pokemon} alt="Pokemon" className="img-fluid" />
            </div>
            <div className="col-12 text-center">
              <p className="text-fff">Api Rest</p>
              <small className="text-fff">Proyecto de Pokemon</small>
            </div>
            <div className="col-12 text-center">
              <button
                type="button"
                className="col-6 btn btn-outline-warning btn-sm mt-4 btn-card"
                onClick={() => setIsOpenPokemon(true)}
              >
                <small className="text-fff">Detalle</small>
              </button>
            </div>
          </div>
        </div>
        {/* Card end Pokemon */}
      </div>

      <p className="text-fff text-center pb-3 pt-5 ">
        Esto son Algunos de mis Proyectos <br /> terminados te invito a ingresar
        a <br />
        los detalle de cada App . <br />
        Son Proyecto realizados para el bootcamp de
        <br /> <small className="soy-Henry fs-5"> " SoyHenry "</small>
        <br /> Estan realizado con varias tecnologias, <br />
        los proyectos cuentan con Base de Dato, Back-End y Front-End
      </p>
    </div>
  );
};

export default Projects;
