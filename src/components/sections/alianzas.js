import React from 'react';
import al1 from '../../img/alianza_logo/1.png'
import al2 from '../../img/alianza_logo/2.png'
import al3 from '../../img/alianza_logo/3.png'
import al4 from '../../img/alianza_logo/4.png'

const Alianzas = () => {
    return (
        <>
            <div class="row justify-content-end esconder">
                <h2 class="letter_responsive">Alianzas</h2>
            </div>
            <div class="d-flex justify-content-center d-sm-none">
                <h2 class="letter_responsive_contact">Alianzas</h2>
            </div>

            <div class="container">
                <div class="row justify-content-center esconder">
                    <div class="col">
                        <img class="img-fluid" src={al1} alt=""/>
                    </div>
                    <div class="col">
                        <img class="img-fluid" src={al2} alt=""/>
                    </div>
                    <div class="col">
                        <img class="img-fluid" src={al3} alt=""/>
                    </div>
                    <div class="col">
                        <img class="img-fluid" src={al4} alt=""/>
                    </div>
                </div>

                <div class="row d-block d-sm-none">

        <div class="col">
          <div id="alianza_slider" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators indicators justify-content-center">
              <li data-target="#alianza_slider" data-slide-to="0" class="active bg-dark"></li>
              <li data-target="#alianza_slider" data-slide-to="1" class="bg-dark"></li>
              <li data-target="#alianza_slider" data-slide-to="2" class="bg-dark"></li>
              <li data-target="#alianza_slider" data-slide-to="3" class="bg-dark"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="single-service">
                    <img class="img-fluid" src={al1} alt=""/>
                </div>

              </div>

              <div class="carousel-item">
                <div class="single-service">
                    <img class="img-fluid" src={al2} alt=""/>
                </div>
              </div>

              <div class="carousel-item">
                <div class="single-service">
                    <img class="img-fluid" src={al3} alt=""/>
                </div>
              </div>

              <div class="carousel-item">
                <div class="single-service">
                    <img class="img-fluid" src={al4} alt=""/>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
            </div>
        </>
    )
}
export default Alianzas;