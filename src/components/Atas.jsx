// Componentes do React e de terceiros (em ordem, primeiro os de React, e depois os componentes de terceiros)
import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import { Link } from 'react-router-dom'

class Atas extends Component {

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
        <div className="row justify-content-center">
          <div className="col-md-12">
            <p className=" atas-h1">Atas de registros de preços</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="row">
              <p className="col-md-2 filtro-avançado-title">Filtro Avançado</p>
            </div>

            <p className="col-md-1 local-title">Local</p>
            <ul>
              <li className="item-lista">
                <Switch
                  checked={this.state.checkedA}
                  onChange={this.handleChange('checkedA')}
                  value="checkedA" />Goiânia</li>

              <li className="item-lista">
                <Switch
                  checked={this.state.checkedA}
                  onChange={this.handleChange('checkedA')}
                  value="checkedA" />Brasília</li>

              <li className="item-lista">
                <Switch
                  checked={this.state.checkedA}
                  onChange={this.handleChange('checkedA')}
                  value="checkedA" />Rio Verde</li>

              <li className="item-lista">
                <Switch
                  checked={this.state.checkedA}
                  onChange={this.handleChange('checkedA')}
                  value="checkedA" />Belo Horizonte</li>
            </ul>

            <p className="col-md-2 fabricante-title">Fabricante</p>
            <ul>
              <li className="item-lista">
                <Switch
                  checked={this.state.checkedA}
                  onChange={this.handleChange('checkedA')}
                  value="checkedA" />Siemens</li>
              <li className="item-lista">
                <Switch
                  checked={this.state.checkedA}
                  onChange={this.handleChange('checkedA')}
                  value="checkedA" />Intelbras</li>
              <li className="item-lista">
                <Switch
                  checked={this.state.checkedA}
                  onChange={this.handleChange('checkedA')}
                  value="checkedA" />Intel</li>
              <li className="item-lista">
                <Switch
                  checked={this.state.checkedA}
                  onChange={this.handleChange('checkedA')}
                  value="checkedA" />Multiway</li>
            </ul>

            <p className="col-md-2 solucao-title">Solução</p>

            <ul>
              <li className="item-lista">
                <Switch
                  checked={this.state.checkedA}
                  onChange={this.handleChange('checkedA')}
                  value="checkedA" />Siemens</li>
              <li className="item-lista">
                <Switch
                  checked={this.state.checkedA}
                  onChange={this.handleChange('checkedA')}
                  value="checkedA" />Intelbras</li>
              <li className="item-lista">
                <Switch
                  checked={this.state.checkedA}
                  onChange={this.handleChange('checkedA')}
                  value="checkedA" />Intel</li>
              <li className="item-lista">
                <Switch
                  checked={this.state.checkedA}
                  onChange={this.handleChange('checkedA')}
                  value="checkedA" />Multiway</li>
            </ul>
          </div>


          {/* AQUI COMEÇA A SESSÃO DOS CARTÕES. USAR A FONTE RALEWAY BOLD */}
          <section className="col-md-9 col-sm-12">
            <div className="cards atas-cards">
              {/* PRIMEIRA LINHA DE CARTÕES */}
              <div className="row">
                <div className="col-md-3">
                  <Link to='/atas-inside'>
                    <div className="card-ata-1">
                      <p className="cards-descricao">ABIN - Switches e Roteadores</p>
                      <ul>
                        <li className="card-content">Órgão detentor: AGÊNCIA BRASILEIRA DE INTELIGÊNCIA</li>
                        <li className="card-content">Ata de registro de preços: 32/2017</li>
                        <li className="card-content">Vencimento: 07/12/2018</li>
                        <li className="card-content">Objeto: Cisco</li>
                        <li className="card-content">Ata de Terceiro: AB</li>
                      </ul>
                    </div>
                  </Link>

                </div>


                <div className="col-md-3">
                  <Link to='/atas-inside'>
                    <div className="card-ata-1">
                      <p className="cards-descricao">ABIN - Switches e Roteadores</p>
                      <ul>
                        <li className="card-content">Órgão detentor: AGÊNCIA BRASILEIRA DE INTELIGÊNCIA</li>
                        <li className="card-content">Ata de registro de preços: 32/2017</li>
                        <li className="card-content">Vencimento: 07/12/2018</li>
                        <li className="card-content">Objeto: Cisco</li>
                        <li className="card-content">Ata de Terceiro: AB</li>
                      </ul>
                    </div>
                  </Link>
                </div>


                <div className="col-md-3">
                  <Link to='/atas-inside'>
                    <div className="card-ata-1">
                      <p className="cards-descricao">ABIN - Switches e Roteadores</p>
                      <ul>
                        <li className="card-content">Órgão detentor: AGÊNCIA BRASILEIRA DE INTELIGÊNCIA</li>
                        <li className="card-content">Ata de registro de preços: 32/2017</li>
                        <li className="card-content">Vencimento: 07/12/2018</li>
                        <li className="card-content">Objeto: Cisco</li>
                        <li className="card-content">Ata de Terceiro: AB</li>
                      </ul>
                    </div>
                  </Link>
                </div>
              </div>






              {/* SEGUNDA LINHA DE CARTÕES */}
              <div className="row">
                <div className="col-md-3">
                  <Link to='/atas-inside'>
                    <div className="card-ata-1">
                      <p className="cards-descricao">ABIN - Switches e Roteadores</p>
                      <ul>
                        <li className="card-content">Órgão detentor: AGÊNCIA BRASILEIRA DE INTELIGÊNCIA</li>
                        <li className="card-content">Ata de registro de preços: 32/2017</li>
                        <li className="card-content">Vencimento: 07/12/2018</li>
                        <li className="card-content">Objeto: Cisco</li>
                        <li className="card-content">Ata de Terceiro: AB</li>
                      </ul>
                    </div>
                  </Link>

                </div>


                <div className="col-md-3">
                  <Link to='/atas-inside'>
                    <div className="card-ata-1">
                      <p className="cards-descricao">ABIN - Switches e Roteadores</p>
                      <ul>
                        <li className="card-content">Órgão detentor: AGÊNCIA BRASILEIRA DE INTELIGÊNCIA</li>
                        <li className="card-content">Ata de registro de preços: 32/2017</li>
                        <li className="card-content">Vencimento: 07/12/2018</li>
                        <li className="card-content">Objeto: Cisco</li>
                        <li className="card-content">Ata de Terceiro: AB</li>
                      </ul>
                    </div>
                  </Link>
                </div>


                <div className="col-md-3">
                  <Link to='/atas-inside'>
                    <div className="card-ata-1">
                      <p className="cards-descricao">ABIN - Switches e Roteadores</p>
                      <ul>
                        <li className="card-content">Órgão detentor: AGÊNCIA BRASILEIRA DE INTELIGÊNCIA</li>
                        <li className="card-content">Ata de registro de preços: 32/2017</li>
                        <li className="card-content">Vencimento: 07/12/2018</li>
                        <li className="card-content">Objeto: Cisco</li>
                        <li className="card-content">Ata de Terceiro: AB</li>
                      </ul>
                    </div>
                  </Link>
                </div>
              </div>

              {/* TERCEIRA LINHA DE CARTÕES */}

              <div className="row">
                <div className="col-md-3">
                  <Link to='/atas-inside'>
                    <div className="card-ata-1">
                      <p className="cards-descricao">ABIN - Switches e Roteadores</p>
                      <ul>
                        <li className="card-content">Órgão detentor: AGÊNCIA BRASILEIRA DE INTELIGÊNCIA</li>
                        <li className="card-content">Ata de registro de preços: 32/2017</li>
                        <li className="card-content">Vencimento: 07/12/2018</li>
                        <li className="card-content">Objeto: Cisco</li>
                        <li className="card-content">Ata de Terceiro: AB</li>
                      </ul>
                    </div>
                  </Link>

                </div>


                <div className="col-md-3">
                  <Link to='/atas-inside'>
                    <div className="card-ata-1">
                      <p className="cards-descricao">ABIN - Switches e Roteadores</p>
                      <ul>
                        <li className="card-content">Órgão detentor: AGÊNCIA BRASILEIRA DE INTELIGÊNCIA</li>
                        <li className="card-content">Ata de registro de preços: 32/2017</li>
                        <li className="card-content">Vencimento: 07/12/2018</li>
                        <li className="card-content">Objeto: Cisco</li>
                        <li className="card-content">Ata de Terceiro: AB</li>
                      </ul>
                    </div>
                  </Link>
                </div>


                <div className="col-md-3">
                  <Link to='/atas-inside'>
                    <div className="card-ata-1">
                      <p className="cards-descricao">ABIN - Switches e Roteadores</p>
                      <ul>
                        <li className="card-content">Órgão detentor: AGÊNCIA BRASILEIRA DE INTELIGÊNCIA</li>
                        <li className="card-content">Ata de registro de preços: 32/2017</li>
                        <li className="card-content">Vencimento: 07/12/2018</li>
                        <li className="card-content">Objeto: Cisco</li>
                        <li className="card-content">Ata de Terceiro: AB</li>
                      </ul>
                    </div>
                  </Link>
                </div>
              </div>
            </div>


          </section>

        </div>

      </div>

    );
  };
};

export default Atas;


// NOTA IMPORTANTE SOBRE ESSE COMPONENTE: AQUI, DEVO TROCAR AS IMAGENS DE SWITCHES POR COMPONENTES REAIS DE SWITCHES
// COM INTERAÇÃO E ETC. TENTEI FAZER, MAS O MEU FICOU LIGEIRAMENTE DEFEITUOSO