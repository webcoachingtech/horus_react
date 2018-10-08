// Componentes do React e de terceiros (em ordem, primeiro os de React, e depois os componentes de terceiros)
import React, { Component } from 'react';
import Carousel from './CarouselHistoria';


class Historia extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Carousel />

      </div>
    )
  }
}

export default Historia;