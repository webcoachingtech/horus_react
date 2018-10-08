// Componentes do React e de terceiros (em ordem, primeiro os de React, e depois os componentes de terceiros)
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'



// import Routes from './Routes';



// Meus componentes
// import Routes from './components/Routes';

import Footer from './components/Footer';
import Header from './components/Header';
import AtasInside from './components/Atas-Inside';
import Atas from './components/Atas';
import Cases from './components/CasesDeSucesso';
import Historia from './components/Historia';
import Contato from './components/Contato';
import Home from './components/Home';
import Noticias from './components/Noticias';
import QuemSomos from './components/QuemSomos';
import TrabalheConosco from './components/TrabalheConosco';
import Treinamentos from './components/Treinamentos';




// CSS
import './css/styles.css';



class App extends Component {
  render() {
    return (


        <BrowserRouter>

          <div>
            <Header />

            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/atas-inside' component={AtasInside} />
              <Route path='/atas' component={Atas} />
              <Route exact path="/cases" component={Cases} />
              <Route path="/historia" component={Historia} />
              <Route path="/contato" component={Contato} />
              <Route path="/noticias" component={Noticias} />
              <Route path="/quemsomos" component={QuemSomos} />
              <Route path="/trabalhe-conosco" component={TrabalheConosco} />
              <Route exact path="/treinamentos" component={Treinamentos} /> 
            </Switch>

            <Footer />
          </div>
        </BrowserRouter>


    );
  }
}

export default App;
