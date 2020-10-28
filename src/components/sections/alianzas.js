import React from 'react';
import al1 from '../../img/alianza_logo/1.png'
import al2 from '../../img/alianza_logo/2.png'
import al3 from '../../img/alianza_logo/3.png'
import al4 from '../../img/alianza_logo/4.png'

const Alianzas = () => {
    return (
        <>
            <div className="row justify-content-end esconder">
                <h2 className="letter_responsive">Alianzas</h2>
            </div>
            <div className="d-flex justify-content-center d-sm-none">
                <h2 className="letter_responsive_contact">Alianzas</h2>
            </div>

            <div className="container">
                <div className="row justify-content-center esconder">
                    <div className="col">
                        <img className="img-fluid" src={al1} alt=""/>
                    </div>
                    <div className="col">
                        <img className="img-fluid" src={al2} alt=""/>
                    </div>
                    <div className="col">
                        <img className="img-fluid" src={al3} alt=""/>
                    </div>
                    <div className="col">
                        <img className="img-fluid" src={al4} alt=""/>
                    </div>
                </div>

                <div className="row d-block d-sm-none">

        <div className="col">
          <div id="alianza_slider" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators indicators justify-content-center">
              <li data-target="#alianza_slider" data-slide-to="0" className="active bg-dark"></li>
              <li data-target="#alianza_slider" data-slide-to="1" className="bg-dark"></li>
              <li data-target="#alianza_slider" data-slide-to="2" className="bg-dark"></li>
              <li data-target="#alianza_slider" data-slide-to="3" className="bg-dark"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="single-service">
                    <img className="img-fluid" src={al1} alt=""/>
                </div>

              </div>

              <div className="carousel-item">
                <div className="single-service">
                    <img className="img-fluid" src={al2} alt=""/>
                </div>
              </div>

              <div className="carousel-item">
                <div className="single-service">
                    <img className="img-fluid" src={al3} alt=""/>
                </div>
              </div>

              <div className="carousel-item">
                <div className="single-service">
                    <img className="img-fluid" src={al4} alt=""/>
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