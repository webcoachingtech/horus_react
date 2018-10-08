// Componentes do React e de terceiros (em ordem, primeiro os de React, e depois os componentes de terceiros)
import React, { Component } from 'react';
import { Link } from "react-router-dom";


// Assets
import logofooter from '../assets/img/Footer/logo-footer.png'

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 p-4">

                            <div className="row">
                                <div className="col-md-2 col-12">
                                    <img src={logofooter} alt="footer" />
                                </div>
                                <div className="col-md-2">
                                    <p className="titulo-menus mb-1">A Horus</p>
                                    <ul>
                                        <li>
                                            <Link to="/cases">Quem Somos</Link>
                                        </li>
                                        <li>
                                            <Link to="/cases">Atuação</Link>
                                        </li>
                                        <li>
                                            <Link to="/cases">Cases de Sucesso</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-2">
                                    <p className="titulo-menus mb-1">Notícias</p>
                                    <ul>
                                        <li>
                                            <Link to='/noticias'>Eventos</Link>
                                        </li>
                                        <li>
                                            <Link to='/noticias'>Lançamentos</Link>
                                        </li>
                                        <li>
                                            <a href="">Premiações</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-2">
                                    <p className="titulo-menus mb-1">Treinamentos</p>
                                    <ul>
                                        <li>
                                            <Link to='/treinamentos'>Horus</Link>
                                        </li>
                                        <li>
                                            <a href="">Parceiros</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-2">
                                    <p className="titulo-menus mb-1">A Horus</p>
                                    <ul>
                                        <li className="li-bold">
                                            <Link to='/trabalhe-conosco'>Trabalhe Conosco</Link>
                                        </li>
                                        <li className="li-bold">
                                            <Link to='/atas'>Atas</Link>
                                        </li>
                                    </ul>
                                </div>


                                <div className="col-md-2 ">
                                    <p className="titulo-menus mb-1">Receba nossas novidades</p>
                                    <form className="form-group" >
                                        <input type="text" placeholder="Nome" className="form-control input-nome" />
                                        <input type="text" placeholder="Email" className="form-control input-email" />
                                        <button className="btn btn-footer w-100" onClick={this.fuiClicado}>Quero Receber</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-12 p-0">
                            <div className="copyright">
                                <p className="text-lg-center copyright-p">Copyright 2018 Horus Telecom. Todos os direitos reservados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Footer;
