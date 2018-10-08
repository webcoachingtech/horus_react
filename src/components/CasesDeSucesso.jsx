// Componentes do React e de terceiros (em ordem, primeiro os de React, e depois os componentes de terceiros)
import React, { Component } from 'react';


// Assets
import cases1 from '../assets/img/cases/1 - Cases.jpg';
import cases2 from '../assets/img/cases/2 - Cases.jpg';
import cases3 from '../assets/img/cases/3 - Cases.jpg';
import cases4 from '../assets/img/cases/4 - Cases.jpg';
import cases5 from '../assets/img/cases/5 - Cases.jpg';
import cases6 from '../assets/img/cases/6 - Cases.jpg';
import cases7 from '../assets/img/cases/7 - Cases.jpg';
import cases8 from '../assets/img/cases/8 - Cases.jpg';


class Cases extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="banner-top">
              <img src={cases1} alt="Cases de Sucesso" className="img-fluid"/>
            </div>
          </div>
        </div>

        <div className="linha-titulos">
          <div className="row">
            <div className="col-md-6">
              <h1 className="titulo-sections">Como a CoachingTech conseguiu alcançar a maior cartela de clientes satisfeitos em Brasília com o nosso
                  suporte
                    </h1>
            </div>
            <div className="col-md-6">
              <img src={cases7} alt="coachingtech" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <img src={cases2} alt="cases-de-sucess-1" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="tipos-empresas">
              <div className="row">
                <div className="col-md-4 ">
                  <h2 className="text-center titulo-menus">Tamanho da Empresa</h2>
                  <p className="descricao-sup">Pequena</p>
                </div>

                <div className="col-md-4">
                  <h2 className="text-center titulo-menus">Segmento</h2>
                  <p className="descricao-sup">B2C</p>
                </div>

                <div className="col-md-4">
                  <h2 className="text-center titulo-menus">Objetivo</h2>
                  <p className="descricao-sup">Reestabelecer uma rede estável</p>
                </div>
              </div>
            </div>

            <div className="numeros-estatisticas">
              <div className="row">
                <div className="col-md-4 ">
                  <img src={cases3} alt="120-vezes-mais-estabilidade" className="numeros-estatisticas-img" />
                </div>
                <div className="col-md-4 col-sm-12">
                  <img src={cases4} alt="50%-mais-estabilidade" className="numeros-estatisticas-img" />
                </div>

                <div className="col-md-4 col-sm-12">
                  <img src={cases5} alt="50%-mais-estabilidade" className="numeros-estatisticas-img" />
                </div>
              </div>
            </div>
            <div className="depoimento-div" align="center">
              <div className="row">
                <div className="col-md-12">
                  <cite className="depoimento">
                    "Antes a gente ficava sabendo dos nossos resultados de marketing pelo que as pessoas nos falavam. Mas para uma empresa que
                    precisa mensurar os resultados isso é muito subjetivo. Hoje não cabe mais essa subjetividade,
                    a gente precisa de uma ferramenta que nos fale: você gastou tanto, esse clique custou tanto,
                    tantas pessoas responderam através desse e-mail tantas pessoas compraram."
                            </cite>
                  <p className="autoria">Fabiano Borges, Diretor Executivo </p>
                  <button className="btn btn-historia">Ver esta história</button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="linha-titulos">
          <div className="row">
            <div className="col-md-6">
              <h1 className="titulo-sections">Como a CoachingTech conseguiu alcançar a maior cartela de clientes satisfeitos em Brasília com o nosso
                  suporte
                    </h1>
            </div>
            <div className="col-md-6">
              <img src={cases8} alt="coachingtech" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <img src={cases6} alt="cases-de-sucess-1" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <h2 className="titulo-menus">Tamanho da Empresa</h2>
                <p className="descricao-sup">Pequena</p>
              </div>

              <div className="col-md-4">
                <h2 className="titulo-menus">Segmento</h2>
                <p className="descricao-sup">B2C</p>
              </div>

              <div className="col-md-4">
                <h2 className="titulo-menus">Objetivo</h2>
                <p className="descricao-sup">Reestabelecer uma rede estável</p>
              </div>
            </div>

            <div className="numeros-estatisticas">
              <div className="row">
                <div className="col-md-4">
                  <img src={cases3} alt="120-vezes-mais-estabilidade" className="numeros-estatisticas-img" />
                </div>
                <div className="col-md-4">
                  <img src={cases4} alt="50%-mais-estabilidade" className="numeros-estatisticas-img" />
                </div>

                <div className="col-md-4">
                  <img src={cases5} alt="50%-mais-estabilidade" className="numeros-estatisticas-img" />
                </div>
              </div>
            </div>
            <div className="depoimento-div" align="center">
              <div className="row">
                <div className="col-md-12">
                  <cite className="depoimento">
                    "Antes a gente ficava sabendo dos nossos resultados de marketing pelo que as pessoas nos falavam. Mas para uma empresa que
                    precisa mensurar os resultados isso é muito subjetivo. Hoje não cabe mais essa subjetividade,
                    a gente precisa de uma ferramenta que nos fale: você gastou tanto, esse clique custou tanto,
                    tantas pessoas responderam através desse e-mail tantas pessoas compraram."
                            </cite>
                  <p className="autoria">Fabiano Borges, Diretor Executivo </p>
                  <button className="btn btn-historia">Ver esta história</button>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>

    );
  };
}

export default Cases;