import React from 'react';
import cont1 from '../../img/avante.png'


const Contacto = () => {
    return (
        <>
           <div className="row justify-content-end esconder">
      <h2 className="letter_responsive_contact text-right">Contactanos</h2>
    </div>

    <div className="d-flex justify-content-center d-sm-none">
      <h2 className="letter_responsive_contact">Contactanos</h2>
    </div>


    <div className="row">
      <div className="col-xl-8 col-md-12 esconder">
        <img src={cont1} className="rounded float-left" alt="..."/>
      </div>
      <div className="col-xl-4 col-md-6">

        <div className="row justify-content-end">
          <div className="col">
            <div className="card">
              <div className="card-content">
                <div className="card-body cleartfix">
                  <div className="media align-items-stretch">
                    <div className="align-self-center">
                      <i className="fas fa-map-marker-alt fa-2x"></i>
                    </div>
                    <div className="media-body"></div>
                    <div className="right p-2">
                      <p>Urb. Madre Selva 3, Santa Elena, local #3-01. Edificio Avante.
                        Antiguo Cuscatlán, La Libertad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-end">
          <div className="col">
            <div className="card">
              <div className="card-content">
                <div className="card-body cleartfix">
                  <div className="media align-items-stretch">
                    <div className="align-self-center">
                      <i className="fas fa-phone fa-2x"></i>
                    </div>
                    <div className="media-body"></div>
                    <div className="align-self-center">
                      <p>+503 2556 07040</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-end">
          <div className="col">
            <div className="card">
              <div className="card-content">
                <div className="card-body cleartfix">
                  <div className="media align-items-stretch">
                    <div className="align-self-center">
                      <i className="fas fa-envelope fa-2x"></i>
                    </div>
                    <div className="media-body"></div>
                    <div className="align-self-center">
                      <p>info@benscorp.com</p>
                    </div>
                  </div>
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
export default Contacto;