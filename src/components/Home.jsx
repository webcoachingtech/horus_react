// Componentes do React e de terceiros (em ordem, primeiro os de React, e depois os componentes de terceiros)
import React, { Component } from "react";
import Carousel from "./Carousel.jsx";
import CarouselLower from "./Home/Carousel-lower.jsx";

// Meus componentes
import GestaoTempo from "./Home/GestaoTempo";
import GestaoTempoSide from "./Home/GestaoTempoSide";
// Assets

import home2 from "../assets/img/home/2 - Home.png";
// import home3 from "../assets/img/home/3 - Home.png";
// import home4 from "../assets/img/home/4 - Home.png";
// import home5 from "../assets/img/home/5 - Home.png";
// import home6 from "../assets/img/home/6 - Home.png";
import home3 from "../assets/img/home/3 - Home.png";
import home7 from "../assets/img/home/7 - Home.jpg";
import home8 from "../assets/img/home/8 - Home.png";
import home9 from "../assets/img/home/9 - Home.png";
import home10 from "../assets/img/home/10 - Home.png";
import home11 from "../assets/img/home/11 - Home.png";
import home12 from "../assets/img/home/12 - Home.png";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Carousel />

        <div className="conheca-mais">
          <div className="row">
            <section className="col-md-12">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <h1 className="h1-conheca">HORUS TELECOM</h1>
                  <p className="conheca-mais-text">
                    Many desktop publishing packages and web package editors now
                    use Lorem Ipsum as their default model text, and search for
                    "lorem ipsum" will uncover many web sites still in their
                    fancy.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-3">
                  <button className="btn btn-primary btn-horus w-100">
                    CONHEÇA MAIS
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="row  mt-5 mb-5">
          <div className="col-md-12">
            <h1 className="titulo-sections">Treinamentos</h1>
          </div>
        </div>

        <div className="row mb-5">
          <GestaoTempo />

          {/* Gestao tempo Side */}

          <div className="col-md-6">
            <div className="row">
              <GestaoTempoSide />
              <GestaoTempoSide />
              <GestaoTempoSide />
              <GestaoTempoSide />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <CarouselLower />
          </div>
        </div>

        <section className="col-md-12 parceiros mt-2">
          <div className="row ">
            <h2 className="col titulo-sections">Nossos parceiros</h2>
          </div>

          <div className="row mt-5 mb-5">
            <div className="col-md-2 furukawa mt-2">
              <a href="">
                <img src={home7} alt="furukawa" className="img-fluid" />
              </a>
            </div>

            <div className="col-md-2 intelbras mt-2">
              <a href="">
                <img src={home8} alt="intelbras" className="img-fluid" />
              </a>
            </div>

            <div className="col-md-2 siemens mt-2">
              <a href="">
                <img src={home9} alt="siemens" className="img-fluid" />
              </a>
            </div>

            <div className="col-md-2 samsung mt-2">
              <a href="">
                <img src={home10} alt="samsung" className="img-fluid" />
              </a>
            </div>

            <div className="col-md-2 avigilon mt-2">
              <a href="">
                <img src={home11} alt="intelbras" className="img-fluid" />
              </a>
            </div>
            <div className="col-md-2 brother mt-2">
              <a href="">
                <img src={home12} alt="brother" className="img-fluid" />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
