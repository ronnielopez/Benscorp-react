import React from 'react';
import Navbar from './components/navbar/Navbar'
import Navbar2 from './components/navbar/Navbar2';
import Socios from './components/sections/nuestrosSocios';
import QuienesSomos from './components/sections/quienesSomos';
import Servicio from './components/sections/servicios';
import Alianzas from './components/sections/alianzas';
import Contacto from './components/sections/contacto';
import SliderPrincipal from './components/sections/SliderPrincipal'
import ModalInicio from './components/modal/modalInicio';
import Noticias from './components/sections/noticias';

function Template() {
  return (
    <>
      {/* Modal de bienvenida*/}
      <ModalInicio />
      {/* Primer navbar donde esta los contactos*/}
      <Navbar />
      {/* El segundo es el menu donde esta la navegacion de la pagina */}
      <Navbar2 />
      {/* Slider principal */}
        <SliderPrincipal />
      
      {/*Section de Noticias*/}
      <section id='noticias'>
      <Noticias />
      </section>
      
      {/*Section de quienes somos*/}
      <section className="shadow mb-5" id='QuienesSomos'>
      <QuienesSomos/>
      </section>
      

      {/*Section de Servicios*/}
      <section id="servicio">
        <Servicio />
      </section>
      
      {/*Section de Servicios*/}
      <section id='nuestrosocios' className='shadow'>
        <Socios/>
      </section>

      <section id='alianza'>
        <Alianzas/>
      </section>
      
      <section id='Contacto'>
        <Contacto/>
      </section>

    </>
  );
}

export default Template;
