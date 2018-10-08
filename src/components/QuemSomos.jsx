// Componentes do React e de terceiros (em ordem, primeiro os de React, e depois os componentes de terceiros)
import React, { Component } from 'react';

// CSS

// import '../css/quemSomos.css';

// Assets
import quemSomos1 from '../assets/img/quemSomosImg/1 - Quem Somos.jpg';
import quemSomos2 from '../assets/img/quemSomosImg/2 - Quem Somos.png';
import quemSomos3 from '../assets/img/quemSomosImg/3 - Quem Somos.jpg';

class QuemSomos extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-video">
              <a href="">
                <img src={quemSomos1} alt="video-quem-somos-nos" data-lightbox="Quem Somos" data-title="Horus" />
              </a>
            </div>

          </div>
        </div>


        <div className="row">
          <div className="col-md-6">
            <img src={quemSomos2} alt="sobre" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1 className="sobre-texto">Horus Telecom</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500's, whenan unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, but also
              leap into eletronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960's with the release of Letraset sheets containing
              Lorem Ipsum passages, and morerecently with desktop publishing software like Aldus
              Page Maker including versions of Lorem Ipsum.
          </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="time-line-text">
              <p className="titulo-sections">Atuação</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500's, whenan unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries, but also
                leap into eletronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960's with the release of Letraset sheets containing
                Lorem Ipsum passages, and morerecently with desktop publishing software like Aldus
                Page Maker including versions of Lorem Ipsum.
          </p>
              <div className="time-line">
                <img src={quemSomos3} alt="linha do tempo" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        {/* Aqui começa a sessão dos cartões do site. */}

        <div className="row">
          <section className="col-md-12">
            <div className="cards">
              <div className="row justify-content-around">
                <div className="col-md-4">
                  <div className="card-missao">
                    <p className="titulo-cartoes">Missão</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text ever since
                      the 1500's, whenan unknown printer took a galley of type and scrambled it to
              make a type specimen book.</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card-visao">
                    <p className="titulo-cartoes">Visão</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text ever since
                      the 1500's, whenan unknown printer took a galley of type and scrambled it to
              make a type specimen book.</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card-valores">
                    <p className="titulo-cartoes">Valores</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text ever since
                      the 1500's, whenan unknown printer took a galley of type and scrambled it to
              make a type specimen book.</p>
                  </div>
                </div>

              </div>
            </div>

          </section>

        </div>

        <div className="row">
          <section className="col-md-12 cases">
            <div className="row">
              <p className="col-md-3 titulo-sections">Cases de sucesso</p>
            </div>
            <div className="row">
              <div className="col-md-12 ">
                <div className="img-fluid cases-banner">
                  <p className="banner-text">Qualidade e desempenho, resultado satisfatório ao cliente</p>
                  <p className="sub-texto">Conheça aqui os casos de sucesso</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
}

export default QuemSomos;