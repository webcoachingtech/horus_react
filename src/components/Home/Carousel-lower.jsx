// Componentes do React e de terceiros (em ordem, primeiro os de React, e depois os componentes de terceiros)

import React, { Component } from 'react';
import Depoimentos from './Depoimentos';
// Assets - Os assets do carousel podem variar de componene para componente



class CarouselLower extends Component {
  render() {
    return (
      <div className="div-carousel mt-5">

        <div id="carouselBase" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselBase" data-slide-to="0" className="active"></li>
            <li data-target="#carouselBase" data-slide-to="1"></li>
            <li data-target="#carouselBase" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Depoimentos />
            </div>
            <div className="carousel-item ">
              <Depoimentos />
            </div>
            <div className="carousel-item">
              <Depoimentos />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselBase" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon seta-anterior" aria-hidden="true"></span>
            <span className="sr-only r">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselBase" role="button" data-slide="next">
            <span className="carousel-control-next-icon seta-seguinte" aria-hidden="true"></span>
            <span className="sr-only ">Next</span>
          </a>
        </div>
      </div>

    )
  }
}

export default CarouselLower;