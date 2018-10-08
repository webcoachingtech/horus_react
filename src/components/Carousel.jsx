// Componentes do React e de terceiros (em ordem, primeiro os de React, e depois os componentes de terceiros)

import React, { Component } from 'react';

// Assets - Os assets do carousel podem variar de componene para componente

import home1 from '../assets/img/home/1 - Home.jpg';
import home2 from '../assets/img/home/2 - Home.png';
import home3 from '../assets/img/home/3 - Home.png';



class Carousel extends Component {
  render() {
    return (
      <div className="div-carousel">

        <div id="carouselHome" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselHome" data-slide-to="0" className="active"></li>
            <li data-target="#carouselHome" data-slide-to="1"></li>
            <li data-target="#carouselHome" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className=" w-100" src={home1} alt="First slide" />
            </div>
            <div className="carousel-item ">
              <img className=" w-100" src={home2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className=" w-100" src={home3} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselHome" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon seta-anterior" aria-hidden="true"></span>
            <span className="sr-only r">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselHome" role="button" data-slide="next">
            <span className="carousel-control-next-icon seta-seguinte" aria-hidden="true"></span>
            <span className="sr-only ">Next</span>
          </a>
        </div>
      </div>

    )
  }
}

export default Carousel;