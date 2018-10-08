// Componentes do React e de terceiros (em ordem, primeiro os de React, e depois os componentes de terceiros)
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Calendario from './Calendario'
import Switch from '@material-ui/core/Switch';
// import ReactDOM from 'react-dom;'


// Assets

import treinamento1 from '../assets/img/treinamentos/1 - Treinamento.jpg';
import treinamento2 from '../assets/img/treinamentos/2 - Treinamento.jpg';
// import treinamento3 from '../assets/img/treinamentos/3 - Treinamento.jpg';
import treinamento4 from '../assets/img/treinamentos/4 - Treinamento.jpg';
import treinamento5 from '../assets/img/treinamentos/5 - Treinamento.jpg';
import treinamento6 from '../assets/img/treinamentos/6 - Treinamento.jpg';
import treinamento7 from '../assets/img/treinamentos/7 - Treinamento.jpg';
import treinamento8 from '../assets/img/treinamentos/8 - Treinamento.jpg';
import treinamento9 from '../assets/img/treinamentos/9 - Treinamento.jpg';
import treinamento10 from '../assets/img/treinamentos/10 - Treinamento.jpg';
import treinamento11 from '../assets/img/treinamentos/11 - Treinamento.jpg';
import treinamento12 from '../assets/img/treinamentos/12 - Treinamento.jpg';

class Treinamentos extends Component {

  state = {
    checkedA: true,
    checkedB: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="treinamento-h1">
              <h1 className="titulo-sections">Treinamentos Abertos</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6">
                <img src={treinamento1} alt="treinamento-1" />
                <p className="titulo-menus">Treinamento 1</p>
                <p>Excepeteur sint cupidatat non proident sunt in culpa qui officia</p>
                <p className="titulo-menus treinamentos-dados right">20/08/2018</p>
                <p className="titulo-menus treinamentos-dados left">20 vagas</p>
                <p className="description-bold">SIBS Quadra 1 Conjunto B Lote 15 - Brasília</p>
              </div>

              <div className="col-md-6">
                <img src={treinamento2} alt="treinamento-2" />
                <p className="titulo-menus">Treinamento 2</p>
                <p>Excepeteur sint cupidatat non proident sunt in culpa qui officia</p>
                <p className="titulo-menus treinamentos-dados right">20/08/2018</p>
                <p className="titulo-menus treinamentos-dados left">20 vagas</p>
                <p className="description-bold">SIBS Quadra 1 Conjunto B Lote 15 - Brasília</p>
              </div>
            </div>

            {/* PARTE INFERIOR DA SESSÃO DE TREINAMENTOS */}

            <div className="row">
              <div className="col-md-12">
                <div className="treinamentos-horizontal-scroll">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={treinamento4} alt="treinamento-1" className="treinamento-inferior " />
                    </div>

                    <div className="col-md-2">
                      <img src={treinamento5} alt="treinamento-2" className="treinamento-inferior " />
                    </div>

                    <div className="col-md-2">
                      <img src={treinamento6} alt="treinamento-3" className="treinamento-inferior " />
                    </div>

                    <div className="col-md-2">
                      <img src={treinamento7} alt="treinamento-4" className="treinamento-inferior " />
                    </div>

                    <div className="col-md-2">
                      <img src={treinamento8} alt="treinamento-5" className="treinamento-inferior " />
                    </div>

                    <div className="col-md-2">
                      <img src={treinamento8} alt="treinamento-5" className="treinamento-inferior " />
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <button className="btn btn-horus treinamentos-btn">Veja as fotos dos treinamentos</button>
            </div>
          </div>


          <div className="col-md-3">
            <div className="calendario">
              {/* Aqui, tenho que colocar um calendário (sem ser imagem) */}
              <Calendario />
              <p className="titulo-menus">Categorias</p>
              <ul className="aside-list ml-1">
                <li className="item-lista">
                  <Switch
                    checked={this.state.checkedA}
                    onChange={this.handleChange('checkedA')}
                    value="checkedA" />
                  <Link to='/noticias'>Notícias</Link>

                </li>
                <li className="item-lista">
                  <Switch
                    checked={this.state.checkedA}
                    onChange={this.handleChange('checkedA')}
                    value="checkedA" />
                  <Link to='/'>Eventos</Link>

                </li>
                <li className="item-lista">
                  <Switch
                    checked={this.state.checkedA}
                    onChange={this.handleChange('checkedA')}
                    value="checkedA" />
                  <Link to='/'>Lançamentos</Link>

                </li>
                <li className="item-lista">
                  <Switch
                    checked={this.state.checkedA}
                    onChange={this.handleChange('checkedA')}
                    value="checkedA" />
                  <Link to='/'>Premiações</Link>

                </li>
              </ul>
            </div>
          </div>



        </div>


        {/* PARTE DE OVERFLOW SCROLL EM OUTROS TREINAMENTOS */}

        <div className="row">
          <div className="col-md-9">
            <div className="outros-treinamentos-container">
              <h2 className="titulo-sections">Outros Treinamentos</h2>
              <div className="row">
                <div className="col-md-5 col-sm-12">
                  <a href="">
                    <img src={treinamento9} alt="treinamento-xy" className="treinamentos-scroll imagem-clicavel" />
                  </a>
                </div>
                <div className="col-md-7 col-sm-12">
                  <div className="outros-treinamentos">
                    <a href="" className="titulo-menus outros-treinamentos-title">Treinamento XY</a>
                    <p>And now you morrow as the artwork in your hands, rich in detail, so frail and beautiful</p>
                    <button className="btn btn-data">26/08/2018</button>
                    <button className="btn btn-data">Inscreva-se</button>
                    <p className="description-bold">SIBS Quadra 1 Conjunto B Lote 15 - Brasília</p>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-5 col-sm-12">
                  <a href="">
                    <img src={treinamento10} alt="treinamento-xy" className="treinamentos-scroll imagem-clicavel" />
                  </a>
                </div>
                <div className="col-md-7 col-sm-12">
                  <div className="outros-treinamentos">
                    <a href="" className="titulo-menus outros-treinamentos-title">Treinamento XY</a>
                    <p>And now you morrow as the artwork in your hands, rich in detail, so frail and beautiful</p>
                    <button className="btn btn-data">26/08/2018</button>
                    <button className="btn btn-data">Inscreva-se</button>
                    <p className="description-bold">SIBS Quadra 1 Conjunto B Lote 15 - Brasília</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5 col-sm-12">
                  <a href="">
                    <img src={treinamento11} alt="treinamento-xy" className="treinamentos-scroll imagem-clicavel" />
                  </a>
                </div>
                <div className="col-md-7 col-sm-12">
                  <div className="outros-treinamentos">
                    <a href="" className="titulo-menus outros-treinamentos-title">Treinamento XY</a>
                    <p>And now you morrow as the artwork in your hands, rich in detail, so frail and beautiful</p>
                    <button className="btn btn-data">26/08/2018</button>
                    <button className="btn btn-data">Inscreva-se</button>
                    <p className="description-bold">SIBS Quadra 1 Conjunto B Lote 15 - Brasília</p>
                  </div>
                </div>

              </div>


              <div className="row">
                <div className="col-md-5 col-sm-12">
                  <a href="">
                    <img src={treinamento12} alt="treinamento-xy" className="treinamentos-scroll imagem-clicavel" />
                  </a>
                </div>
                <div className="col-md-7 col-sm-12">
                  <div className="outros-treinamentos">
                    <a href="" className="titulo-menus outros-treinamentos-title">Treinamento XY</a>
                    <p>And now you morrow as the artwork in your hands, rich in detail, so frail and beautiful</p>
                    <button className="btn btn-data">26/08/2018</button>
                    <button className="btn btn-data">Inscreva-se</button>
                    <p className="description-bold">SIBS Quadra 1 Conjunto B Lote 15 - Brasília</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  };
}

export default Treinamentos;
