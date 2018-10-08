// Componentes do React e de terceiros (em ordem, primeiro os de React, e depois os componentes de terceiros)
import React, { Component } from "react";

// CSS
// import '../css/noticias.css';

// Assets
import noticias1 from "../assets/img/Noticias/1 - Noticias.jpg";
import noticias2 from "../assets/img/Noticias/2 - Noticias.jpg";
import noticias3 from "../assets/img/Noticias/3 - Noticias.jpg";
import noticias4 from "../assets/img/Noticias/4 - Noticias.jpg";
import noticias5 from "../assets/img/Noticias/5 - Noticias.jpg";
import noticias6 from "../assets/img/Noticias/6 - Noticias.jpg";
import noticias7 from "../assets/img/Noticias/7 - Noticias.jpg";
import noticias8 from "../assets/img/Noticias/8 - Noticias.jpg";
import noticias9 from "../assets/img/Noticias/9 - Noticias.jpg";
import noticias10 from "../assets/img/Noticias/10 - Noticias.jpg";
import noticias11 from "../assets/img/Noticias/11 - Noticias.jpg";
import noticias12 from "../assets/img/Noticias/12 - Noticias.jpg";

class Noticias extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 mt-2">
            <div className="eventos-sup">
              <p className="titulo-sections">Eventos abertos</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="evento1">
                    <img
                      src={noticias1}
                      alt="evento-1"
                      className="evento-img"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="evento2">
                    <img
                      src={noticias2}
                      alt="evento-2"
                      className="evento-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="side-menu">
            <div className="col-md-2 col-sm-12 col-auto d-block">
              <p className="side-menu-title">Categorias</p>
              <div className="sidebar">
                <div className="row">
                  <ul>
                    <li>Notícias</li>
                    <li>Eventos</li>
                    <li>Lançamentos</li>
                    <li>Premiações</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10">
            <div className="eventos-realizados">
              <p className="titulo-sections">Eventos Realizados</p>
              <div className="row">
                <div className="col-md-4">
                  <a href="">
                    <img
                      src={noticias3}
                      alt="evento realizado 1"
                      className="evento-img"
                    />
                  </a>
                  <div className="row">
                    <div className="col-md-12">
                      <a href="">
                        <i className="fas fa-heart heart" />
                      </a>
                      <a href="">
                        <i className="fab fa-facebook-f face ml-3" />
                      </a>
                      <a href="">
                        <i className="fab fa-twitter twitter ml-3" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <a href="">
                    <img
                      src={noticias4}
                      alt="evento realizado 2"
                      className="evento-img"
                    />
                  </a>
                  <div className="row">
                    <div className="col-md-12">
                      <a href="">
                        <i className="fas fa-heart heart" />
                      </a>
                      <a href="">
                        <i className="fab fa-facebook-f face ml-3" />
                      </a>
                      <a href="">
                        <i className="fab fa-twitter twitter ml-3" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <a href="">
                    <img
                      src={noticias5}
                      alt="evento realizado 3"
                      className="evento-img"
                    />
                  </a>
                  <div className="row">
                    <div className="col-md-12">
                      <a href="">
                        <i className="fas fa-heart heart" />
                      </a>
                      <a href="">
                        <i className="fab fa-facebook-f face ml-3" />
                      </a>
                      <a href="">
                        <i className="fab fa-twitter twitter ml-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="row">
            <div className="col-10">
              <div className="banner-premiacao">
                <img src={noticias6} alt="premiação" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 ">
            <div className="lancamentos primeiro-lancamento">
              <p className="titulo-sections">Lançamentos</p>
              <div className="row">
                <div className="col-md-3 ">
                  <img src={noticias7} alt="Lançamentos" className="h-100" />
                </div>

                <div className="col-md-7">
                  <p className="lancamentos-title">
                    Conheça a nova linha de produtos Furukawa - Data Center.
                  </p>
                  <p className="lancamentos-description">
                    There are many variations of passages of lorem Ipsum
                    avaible, but majority have suffed alteration in some form,
                    by injected humour, or randomised words which don't look
                    even slightly believable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lancamentos">
          <div className="row">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 ">
                  <img src={noticias8} alt="Lançamentos" className="h-100"/>
                </div>
                <div className="col-md-7">
                  <p className="lancamentos-title">
                    Conheça a nova linha de produtos Furukawa - Data Center.
                  </p>
                  <p className="lancamentos-description">
                    There are many variations of passages of lorem Ipsum
                    avaible, but majority have suffed alteration in some form,
                    by injected humour, or randomised words which don't look
                    even slightly believable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lancamentos">
          <div className="row">
            <div className="col-md-10 ">
              <div className="row">
                <div className="col-md-3 ">
                  <img src={noticias9} alt="Lançamentos" className="h-100"/>
                </div>
                <div className="col-md-7">
                  <p className="lancamentos-title">
                    Conheça a nova linha de produtos Furukawa - Data Center.
                  </p>
                  <p className="lancamentos-description">
                    There are many variations of passages of lorem Ipsum
                    avaible, but majority have suffed alteration in some form,
                    by injected humour, or randomised words which don't look
                    even slightly believable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lancamentos">
          <div className="row">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 ">
                  <img src={noticias10} alt="Lançamentos" className="h-100"/>
                </div>
                <div className="col-md-7">
                  <p className="lancamentos-title">
                    Conheça a nova linha de produtos Furukawa - Data Center.
                  </p>
                  <p className="lancamentos-description">
                    There are many variations of passages of lorem Ipsumavaible,
                    but majority have suffed alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lancamentos">
          <div className="row">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 ">
                  <img src={noticias11} alt="Lançamentos" className="h-100"/>
                </div>
                <div className="col-md-7">
                  <p className="lancamentos-title">
                    Conheça a nova linha de produtos Furukawa - Data Center.
                  </p>
                  <p className="lancamentos-description">
                    There are many variations of passages of lorem Ipsum
                    avaible, but majority have suffed alteration in some form,
                    by injected humour, or randomised words which don't look
                    even slightly believable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lancamentos">
          <div className="row">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 ">
                  <img src={noticias12} alt="Lançamentos" className="h-100"/>
                </div>
                <div className="col-md-7">
                  <p className="lancamentos-title">
                    Conheça a nova linha de produtos Furukawa - Data Center.
                  </p>
                  <p className="lancamentos-description">
                    There are many variations of passages of lorem Ipsum
                    avaible, but majority have suffed alteration in some form,
                    by injected humour, or randomised words which don't look
                    even slightly believable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Noticias;
