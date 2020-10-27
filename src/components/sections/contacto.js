import React from 'react';
import cont1 from '../../img/avante.png'


const Contacto = () => {
    return (
        <>
           <div class="row justify-content-end esconder">
      <h2 class="letter_responsive_contact line_black_reverse text-right">Contactanos</h2>
    </div>

    <div class="d-flex justify-content-center d-sm-none">
      <h2 class="letter_responsive_contact">Contactanos</h2>
    </div>


    <div class="row">
      <div class="col-xl-8 col-md-12 esconder">
        <img src={cont1} class="rounded float-left" alt="..."/>
      </div>
      <div class="col-xl-4 col-md-6">

        <div class="row justify-content-end">
          <div class="col">
            <div class="card">
              <div class="card-content">
                <div class="card-body cleartfix">
                  <div class="media align-items-stretch">
                    <div class="align-self-center">
                      <i class="fas fa-map-marker-alt fa-2x"></i>
                    </div>
                    <div class="media-body"></div>
                    <div class="right p-2">
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

        <div class="row justify-content-end">
          <div class="col">
            <div class="card">
              <div class="card-content">
                <div class="card-body cleartfix">
                  <div class="media align-items-stretch">
                    <div class="align-self-center">
                      <i class="fas fa-phone fa-2x"></i>
                    </div>
                    <div class="media-body"></div>
                    <div class="align-self-center">
                      <p>+503 2556 07040</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-end">
          <div class="col">
            <div class="card">
              <div class="card-content">
                <div class="card-body cleartfix">
                  <div class="media align-items-stretch">
                    <div class="align-self-center">
                      <i class="fas fa-envelope fa-2x"></i>
                    </div>
                    <div class="media-body"></div>
                    <div class="align-self-center">
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