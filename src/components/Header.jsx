// Componentes do React e de terceiros (em ordem, primeiro os de React, e depois os componentes de terceiros)
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// Assets

import logo from '../assets/img/logo horus.png'


class Header extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (

      <div className="container-fluid">

        <nav className="navbar navbar-expand-md navbar-light fixed-top p-0 cabecalho">

          <div className="col-md-4">
            <Link to='/' className="navbar-brand">
              <img src={logo} alt="Horus" />
            </Link>

          </div>
          <div className="col-md-8 col-12 pr-0">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="falso" aria-label="Abrir navegação">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="menus-header mr-5 pr-5">

              <div className="row justify-content-end pr-4">
                <ul className="lista-redes p-0">
                  <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href=""><i className="fab fa-twitter"></i></a></li>
                  <li><a href=""><i className="fab fa-instagram"></i></a></li>
                  <li><button className="btn btn-primary btn-horus">loja online</button></li>
                  <li><button className="btn btn-primary btn-horus">Cadastro</button></li>
                </ul>

              </div>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto lista-redes">

                  <li className="nav-item">
                  <Link to="/quemsomos" className="nav-link">A HORUS</Link>
                  </li>

                  <li className="nav-item">
                  <Link to="/noticias" className="nav-link">NOTICIAS</Link>
                  </li>

                  <li className="nav-item">
                  <Link to="/treinamentos" className="nav-link">TREINAMENTO</Link>
                  </li>

                  <li className="nav-item">
                  <Link to="/atas" className="nav-link">ATAS</Link>
                  </li>

                  <li className="nav-item">
                  <Link to={'/contato'} className="nav-link">CONTATO</Link>
                  </li>
                
                </ul>
              </div>
            </div>
          </div>
        </nav>

      </div>

    );
  }
}

export default Header;