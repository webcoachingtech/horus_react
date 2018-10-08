// Componentes do React e de terceiros (em ordem, primeiro os de React, e depois os componentes de terceiros)
import React, { Component } from 'react';

// Assets

import contato1 from '../assets/img/Contato/1 - Contato.jpg';
import contato2 from '../assets/img/Contato/2 - Contato.jpg';
import contato3 from '../assets/img/Contato/3 - Contato.jpg';
import contato4 from '../assets/img/Contato/4 - Contato.jpg';
import contato5 from '../assets/img/Contato/5 - Contato.jpg';
import contato6 from '../assets/img/Contato/6 - Contato.jpg';
import contato8 from '../assets/img/Contato/8 - Contato.jpg';



class Contato extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            {/* <div className="banner-top"> */}
              <img src={contato1} alt="Contato" className="img-fluid" />
            {/* </div> */}
          </div>
        </div>

        {/* <SESSÃO DO SITE ONDE FICAM AS UNIDADES DA LOJA */}
        <div className="row">
          <div className="col-md-12">

            <div className="cards-container">
              <div className="row">

                <div className="col-md-3">
                  <div className="cards">
                    <img src={contato2} alt="Brasília" />
                    <p className="sede-info">HORUS BRASÍLIA - MATRIZ</p>

                    <div className="cards-info-div">
                      <ul className="cards-info">
                        <li>SIBS Quadra 1 Conjunto B Lote 15</li>
                        <li>CEP 71736-102</li>
                        <li>Núcleo Bandeirante, Distrito Federal - Brasil</li>
                        <li>Fone:+55 (61) 3486-8000</li>
                        <li>email@email.com.br</li>
                      </ul>
                    </div>
                    <div className="card-maps mt-3 mt-3">
                      <img src={contato6} alt="Maps" className="city-maps" />
                    </div>

                  </div>
                </div>

                <div className="col-md-3">
                  <div className="cards">
                    <img src={contato3} alt="Goiania" />
                    <p className="sede-info">HORUS BRASÍLIA - MATRIZ</p>
                    <div className="cards-info-div">
                      <ul className="cards-info">
                        <li>Av. T-2 nº 1433 Qd. 49 Lote 09</li>
                        <li>CEP 74215005</li>
                        <li>Bairro Setor Bueno, Goiânia - Brasil</li>
                        <li>Fone:+55 (64) 3265-0808</li>
                        <li>email@email.com.br</li>
                      </ul>
                    </div>
                    <div className="card-maps mt-3">
                      <img src={contato6} alt="Maps" className="city-maps" />
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="cards">
                    <img src={contato4} alt="Rio Verde" />
                    <p className="sede-info">HORUS RIO VERDE - MATRIZ</p>
                    <div className="cards-info-div">
                      <ul className="cards-info">
                        <li>Av. Presidente Vargas, Q.M L.2, N 74</li>
                        <li>CEP 75908-420</li>
                        <li>Bairro Jardom Marconal, Rio Verde - GO</li>
                        <li>Fone:+55 (61) 3051-8080</li>
                        <li>email@email.com.br</li>
                      </ul>
                    </div>
                    <div className="card-maps mt-3">
                      <img src={contato6} alt="Maps" className="city-maps" />
                    </div>
                  </div>
                </div>


                <div className="col-md-3">
                  <div className="cards">
                    <img src={contato5} alt="Belo Horizonte" />
                    <p className="sede-info">HORUS BELO HORIZONTE - MATRIZ</p>
                    <div className="cards-info-div">
                      <ul className="cards-info">
                        <li>Romário Garcia</li>
                        <li>Rua Helium 483 A - Nova Floresta</li>
                        <li>Belo Horizonte - MGl</li>
                        <li>CEP 31140 - 280</li>
                        <li>Fone: +55 (31) 3024-7370</li>
                        <li>Fone: +55 (31) 3024-7371</li>
                        <li>Fone: +55 (31) 2555-1576</li>
                      </ul>
                    </div>
                    <div className="card-maps mt-3">
                      <img src={contato6} alt="Maps" className="city-maps" />
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <form>
          <div className="formularios-bottom">
            <p className="titulo-sections">Fale Conosco</p>
            <div className="row">
              <div className="col-md-8 col-sm-12">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="forms-2">
                      <input type="text" className="form-control nome-form" placeholder="Nome" />
                      <input type="text" className="form-control" placeholder="Telefone" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="forms-1">
                      <input type="text" className="form-control email-form" placeholder="E-mail" />
                      <input type="text" className="form-control" placeholder="Empresa" />
                    </div>
                  </div>

                </div>

                <div className="text-area-btn mt-4">
                  <div className="row">
                    <div className="col-md-11 col-sm-12">
                      <textarea className="form-control" rows="3" placeholder="Mensagem"></textarea>
                    </div>
                    <div className="col-md-1 col-sm-2">
                      <button className="btn btn-send ">
                      <i className="far fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <a href="">
                  <img src={contato8} alt="fale-conosco" />
                </a>
              </div>
            </div>
          </div>


        </form>

      </div>

    );
  };
}

export default Contato;