import React, { Component } from 'react';


import '../../css/depoimentos.css'

// import depoimento1 from '../assets/img/Depoimento/..';

class Depoimentos extends Component {
  render() {
    return (
      <div className="container-fluid pb-5">
        <div className="row justify-content-center ">
          <div className="col-md-12">
            <div className="depoimento-background">
              <div className="row justify-content-center">
                <div className="circulo-depoimento mt-5 p-5">

                </div>
              </div>


              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="depoimento-content mb-5">
                    <p className="depoimento-text">Many desktop publishing packages and web package editors now use Lorem Ipsum as their default
                  model text, and search for "lorem ipsum" will uncover many web sites still in their fancy.</p>
                    <cite className="">Wanderson Miranda</cite>
                  </div>
                </div>

              </div>
            </div>



          </div>
        </div>
      </div>




    );
  }
}

export default Depoimentos;