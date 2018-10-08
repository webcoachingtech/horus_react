import React, { Component } from "react";

import home2 from "../../assets/img/home/2 - Home.png";

import "../../css/GestaoTempo.css";

class GestaoTempo extends Component {
  render() {
    const styles = {
      backgroundImage: { home2 }
    };
    return (
      <div className="col-md-6">
        <div className="gestao-tempo">
          <img
            src={home2}
            alt=""
            className="img-fluid gestao-tempo-img w-100"
          />

          <div className="squares">
            <div className="orange-square-contorno">
              <div className="orange-square">
                <p className="orange-square-text">11 Ago</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="gestao-tempo-description">
                <div className="gestao-info">
                  <button className="btn btn-horus ">Gestão de Tempo</button>
                  <p className="gestao-tempo-hr ml-3">60H - Presencial</p>
                </div>
                <p>
                  Many desktop publishing packages and web package editors now
                  use Lorem Ipsum as their default model text, and search for
                  "lorem ipsum" will uncover many web sites still in their
                  fancy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GestaoTempo;
