// Componentes do React e de terceiros (em ordem, primeiro os de React, e depois os componentes de terceiros)
import React, { Component } from 'react';

// CSS
// import '../css/atas-inside.css';

import atasInside1 from '../assets/img/Atas-Inside/1 - Atas-Inside.jpg';

class AtasInside extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 ">

            <div className="inside-card p-3">
              <img className="inside-card-img" src={atasInside1} alt="" />
              <div className="inside-list">
                <a href="">
                  <ul>
                    <li className="inside-description">Switch de Acesso 24 Portas</li>
                    <li className="">Fabricante: Cisco</li>
                    <li className="inside-description li-inferior">Modelo: C1-C2960X-24PD-L</li>
                    <li className="inside-description">Órgão detentor: ABIN - AGÊNCIA BRASILEIRA DE INTELIGÊNCIA</li>
                    <li className="inside-description">Ata nº 32/2017</li>
                  </ul>
                </a>

                <div className="row">
                  <div className="col-md-12">
                    <label className="quantidade-label">Quantidade</label>
                    <div className="form">

                      <input type="number" max="60" className="form-control quantidade col-md-3 d-inline mr-5" />
                      <button className="btn btn-inside ml-0 mb-1">
                        <i className="inside-icon far fa-clipboard"></i>
                      </button>
                    </div>
                    <p className="preco">R$ 15785, 00</p>
                    <p className="max-unidades">Máx: 60 Unidades</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div className="col-md-3 ">

            <div className="inside-card p-3">
              <img className="inside-card-img" src={atasInside1} alt="" />
              <div className="inside-list">
                <a href="">
                  <ul>
                    <li className="inside-description">Switch de Acesso 24 Portas</li>
                    <li className="">Fabricante: Cisco</li>
                    <li className="inside-description li-inferior">Modelo: C1-C2960X-24PD-L</li>
                    <li className="inside-description">Órgão detentor: ABIN - AGÊNCIA BRASILEIRA DE INTELIGÊNCIA</li>
                    <li className="inside-description">Ata nº 32/2017</li>
                  </ul>
                </a>


                <div className="row">
                  <div className="col-md-12">

                    <label className="quantidade-label">Quantidade</label>
                    <div className="form">

                      <input type="number" max="60" className="form-control quantidade col-md-3 d-inline mr-5" />
                      <button className="btn btn-inside ml-0 mb-1">
                        <i className="inside-icon far fa-clipboard"></i>
                      </button>
                    </div>
                    <p className="preco">R$ 15785, 00</p>
                    <p className="max-unidades">Máx: 60 Unidades</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="col-md-3 ">

            <div className="inside-card p-3">
              <img className="inside-card-img" src={atasInside1} alt="" />
              <div className="inside-list">
                <a href="">
                  <ul>
                    <li className="inside-description">Switch de Acesso 24 Portas</li>
                    <li className="">Fabricante: Cisco</li>
                    <li className="inside-description li-inferior">Modelo: C1-C2960X-24PD-L</li>
                    <li className="inside-description">Órgão detentor: ABIN - AGÊNCIA BRASILEIRA DE INTELIGÊNCIA</li>
                    <li className="inside-description">Ata nº 32/2017</li>
                  </ul>
                </a>


                <div className="row">
                  <div className="col-md-12">

                    <label className="quantidade-label">Quantidade</label>
                    <div className="form">

                      <input type="number" max="60" className="form-control quantidade col-md-3 d-inline mr-5" />
                      <button className="btn btn-inside ml-0 mb-1">
                        <i className="inside-icon far fa-clipboard"></i>
                      </button>
                    </div>
                    <p className="preco">R$ 15785, 00</p>
                    <p className="max-unidades">Máx: 60 Unidades</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="col-md-3 ">

            <div className="inside-card p-3">
              <img className="inside-card-img" src={atasInside1} alt="" />
              <div className="inside-list">
                <a href="">
                  <ul>
                    <li className="inside-description">Switch de Acesso 24 Portas</li>
                    <li className="">Fabricante: Cisco</li>
                    <li className="inside-description li-inferior">Modelo: C1-C2960X-24PD-L</li>
                    <li className="inside-description">Órgão detentor: ABIN - AGÊNCIA BRASILEIRA DE INTELIGÊNCIA</li>
                    <li className="inside-description">Ata nº 32/2017</li>
                  </ul>
                </a>


                <div className="row">
                  <div className="col-md-12">

                    <label className="quantidade-label">Quantidade</label>
                    <div className="form">

                      <input type="number" max="60" className="form-control quantidade col-md-3 d-inline mr-5" />
                      <button className="btn btn-inside ml-0 mb-1">
                        <i className="inside-icon far fa-clipboard"></i>
                      </button>
                    </div>
                    <p className="preco">R$ 15785, 00</p>
                    <p className="max-unidades">Máx: 60 Unidades</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    )
  }
}

export default AtasInside;
