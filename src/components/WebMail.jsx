import React, { Component } from 'react';

class WebMail extends Component {
  render() {
    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Olá, eu sou o WebMailzito!</h1>
            <iframe width="100%" height="100%" src="https://www.terra.com.br/" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
      </div>

    );
  }
}

export default WebMail;