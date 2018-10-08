
import React, { Component } from 'react';

// Assets - Os assets do carousel podem variar de componene para componente

import historia1 from '../assets/img/Historia/1 - Historia.jpg';
import historia2 from '../assets/img/Historia/2 - Historia.jpg';
// import historia3 from '../assets/img/Historia/3 - Historia.jpg';
import historia4 from '../assets/img/Historia/4 - Historia.jpg';



class Carousel extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className=" text-center">Cases de sucesso</h1>
        <div className="div-carousel">

          <div id="carouselHome" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselHome" data-slide-to="0" className="active"></li>
              <li data-target="#carouselHome" data-slide-to="1"></li>
              <li data-target="#carouselHome" data-slide-to="2"></li>
            </ol>

            {/* PRIMEIRO SLIDE DO CAROUSEL */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <p className="text-center titulo-sections">Empresa Fícticia Slide 1</p>
                <img src={historia4} alt="" /> {/* Aqui entra um possível vídeo */}
                <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
                <div className="row">
                  <div className="col-md-6">
                    <img className=" w-100" src={historia1} alt="First slide" />
                  </div>

                  <div className="col-md-6">
                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>
                </div>

                <p className="text-center historia-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="row mt-5">

                  <div className="col-md-6">
                    <img className=" w-100" src={historia2} alt="First slide" />
                  </div>

                  <div className="col-md-6">
                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>
                </div>
              </div>

              {/* SEGUNDO SLIDE DO CAROUSEL */}
              <div className="carousel-item">
                <p className="text-center titulo-sections">Empresa Fícticia Slide 2</p>
                <img src={historia4} alt="" /> {/* Aqui entra um possível vídeo */}
                <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
                <div className="row">
                  <div className="col-md-6">
                    <img className=" w-100" src={historia1} alt="First slide" />
                  </div>

                  <div className="col-md-6">
                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>
                </div>

                <p className="text-center historia-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="row mt-5">

                  <div className="col-md-6">
                    <img className=" w-100" src={historia2} alt="First slide" />
                  </div>

                  <div className="col-md-6">
                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>
                </div>
              </div>



              {/* TERCEIRO SLIDE DO CAROUSEL */}
              <div className="carousel-item">
                <p className="text-center titulo-sections">Empresa Fícticia Slide 3</p>
                <img src={historia4} alt="" /> {/* Aqui entra um possível vídeo */}
                <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
                <div className="row">
                  <div className="col-md-6">
                    <img className=" w-100" src={historia1} alt="First slide" />
                  </div>

                  <div className="col-md-6">
                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>
                </div>

                <p className="text-center historia-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="row mt-5">

                  <div className="col-md-6">
                    <img className=" w-100" src={historia2} alt="First slide" />
                  </div>

                  <div className="col-md-6">
                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>
                </div>
              </div>





            </div>

            {/* Abaixo vêm os controles inferiores do carousel */}


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

        <div className="row justify-content-center ">

        </div>
      </div>


    )
  }
}

export default Carousel;