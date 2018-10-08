// Componentes do React e de terceiros (em ordem, primeiro os de React, e depois os componentes de terceiros)
import React, { Component } from 'react';


// Assets
import trabalhe1 from '../assets/img/Trabalhe Conosco/1 - Trabalhe.png';
import trabalhe2 from '../assets/img/Trabalhe Conosco/2 - Trabalhe.jpg';



class Trabalhe extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/* <BANNER DA IMAGEM DE TRABALHE CONOSCO */}
        <div className="row">
          
            <div className="banner-top">
            <div className="col-md-12 col-sm-12">
            <img src={trabalhe1} alt="Trabalhe Conosco" />
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
            <h1 className="titulo">Nossa empresa, nossa casa</h1>
            <p className="nossa-empresa-p">Many desktop publishing packages and web page editors now use Lorem Ipsum as thier default model text, and a search
              for 'lorem ipsum' will uncover many web sites still in their fancy. It is a long estabilished fact that a reader
              will be distracted by readable content of a page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making
              it look like readable english.
          </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-12 col-sm-12 col-lg-6 col-xl-4">
            <div className="img-batida-de-maos">
              <img src={trabalhe2} alt="pessoas-batendo-as-maos" />
            </div>
          </div>
        </div>


        {/* ABA DE VAGAS ABERTAS */}
        <div className="row">

          <div className="col-md-12">
            <p className="titulo-sections">Vagas abertas</p>
            <div className="row">
              <div className="col-md-3">
                <p className="vaga-title">Filial</p>
                <ul className="vaga-lista">
                  <a href="">
                    <li className="vaga">Analista de Redes</li>
                  </a>
                  <a href="">
                    <li className="vaga">Analista de Redes</li>
                  </a>
                  <a href="">
                    <li className="vaga">Analista de Redes</li>
                  </a>
                  <a href="">
                    <li className="vaga">Analista de Redes</li>
                  </a>
                </ul>
              </div>

              <div className="col-md-3">
                <p className="vaga-title">Filial</p>
                <ul className="vaga-lista">
                  <a href="">
                    <li className="vaga">Analista de Redes</li>
                  </a>
                  <a href="">
                    <li className="vaga">Analista de Redes</li>
                  </a>
                  <a href="">
                    <li className="vaga">Analista de Redes</li>
                  </a>
                  <a href="">
                    <li className="vaga">Analista de Redes</li>
                  </a>
                </ul>
              </div>

              <div className="col-md-3">
                <p className="vaga-title">Filial</p>
                <ul className="vaga-lista">
                  <a href="">
                    <li className="vaga">Analista de Redes</li>
                  </a>
                  <a href="">
                    <li className="vaga">Analista de Redes</li>
                  </a>
                  <a href="">
                    <li className="vaga">Analista de Redes</li>
                  </a>
                  <a href="">
                    <li className="vaga">Analista de Redes</li>
                  </a>
                </ul>
              </div>

              <div className="col-md-3">
                <p className="vaga-title">Filial</p>
                <ul className="vaga-lista">
                  <a href="">
                    <li className="vaga">Analista de Redes</li>
                  </a>
                  <a href="">
                    <li className="vaga">Analista de Redes</li>
                  </a>
                  <a href="">
                    <li className="vaga">Analista de Redes</li>
                  </a>
                  <a href="">
                    <li className="vaga">Analista de Redes</li>
                  </a>
                </ul>
              </div>


            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <p className="titulo">Não encontrou a vaga que procurava?</p>

            <div className="col-md-12">
              <div className="forms-2">
                <input type="text" className="form-control nome-form" placeholder="Nome" />
                <input type="text" className="form-control fone-form" placeholder="Telefone" />
              </div>
              <div className="vaga-ficha">
                <p>Analista de Redes</p>
              </div>
            </div>

            <div className=" col-md-12 col-sm-12">
              <textarea className="form-control carta-form" rows="3" placeholder="Carta de apresentação"></textarea>
            </div>

            <div className="col-md-12">
              <div className="files-send">

                <input type="button" className="btn send-btn" value="Escolher Arquivo" />
                <p className="col-md-6 files-send-p">Nenhum arquivo selecionado</p>
              </div>


              <div className="row justify-content-center">
                <div className="col-md-4">
                  <button className="btn btn-horus">Enviar Curriculo</button>
                </div>
              </div>



            </div>
          </div>

        </div>

      </div>

    );
  };
}

export default Trabalhe;