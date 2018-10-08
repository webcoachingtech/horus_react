import React, { Component } from "react";

// Assets
import home2 from "../../assets/img/home/2 - Home.png";

// CSS
import "../../css/GestaoTempoSide.css";

class GestaoTempoSide extends Component {
  render() {
    return (
      <div className="col-md-6 mg-bottom">
        <img src={home2} alt="" className="img-fluid side-img" />

        <div className="quadrados-sup">
          <div className="side-orange-square-contorno">
            <div className="side-orange-square">
              <p className="side-orange-square-text">11 Ago</p>
            </div>
          </div>
        </div>

        <div className="gestao-tempo-side-info">
          <button className="btn btn-img ">Gestão de Tempo</button>
          <p className="side-gestao-tempo-description">
            A little description here...
          </p>
        </div>
      </div>
    );
  }
}

export default GestaoTempoSide;
