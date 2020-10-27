import React from 'react';
import Navbar from './components/navbar/Navbar'
import Navbar2 from './components/navbar/Navbar2';
import Socios from './components/sections/nuestrosSocios';
import QuienesSomos from './components/sections/quienesSomos';
import Servicio from './components/sections/servicios';
import Alianzas from './components/sections/alianzas';
import Contacto from './components/sections/contacto';
import SliderPrincipal from './components/sections/SliderPrincipal'
function Template() {
  return (
    <>
      {/* Primer navbar donde esta los contactos*/}
      <Navbar />
      {/* El segundo es el menu donde esta la navegacion de la pagina */}
      <Navbar2 />
      {/* Slider principal */}
        <SliderPrincipal />
      {/*Section de quienes somos*/}
      <section className="shadow mb-5" id='QuienesSomos'>
      <QuienesSomos/>
      </section>
      {/*Section de Servicios*/}
      <section id="servicio">
        <Servicio />
      </section>

      <section id='nuestrosocios' class="seccion-tarjeta">
        <Socios/>
      </section>

      <section id='alianzas'>
        <Alianzas/>
      </section>
      
      <section id='contacto'>
        <Contacto/>
      </section>

    </>
  );
}

export default Template;
