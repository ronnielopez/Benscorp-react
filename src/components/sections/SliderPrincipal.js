import React, {useState} from 'react';
import img1 from '../../img/Imagen1.png'
import {Carousel, Button} from 'react-bootstrap'

const SliderPrincipal = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <header id="header">
                <Carousel slide={false} 
                fade={false} 
                activeIndex={index} 
                onSelect={handleSelect} 
                controls={false} 
                className='textoModificadoG esconder'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className="text-right textoBlanco">¿Quiénes somos?</h1>
                            <p className="text-right">En Benscorp somos reconocidos por tener una amplia experiencia en el área legal y
                            tributaria.
                            Enfocando nuestros servicios en el análisis y resolución de problemas legales dentro de un contexto
                            comercial
              y financiero, proponiendo soluciones oportunas y acordes a las necesidades de nuestros clientes.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1 className="text-right textoBlanco">¿Quiénes somos 2?</h1>
                            <p className="text-right">En Benscorp somos reconocidos por tener una amplia experiencia en el área legal y
                            tributaria.
                            Enfocando nuestros servicios en el análisis y resolución de problemas legales dentro de un contexto
                            comercial
              y financiero, proponiendo soluciones oportunas y acordes a las necesidades de nuestros clientes.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1 className="text-right textoBlanco">¿Quiénes somos 3?</h1>
                            <p className="text-right">En Benscorp somos reconocidos por tener una amplia experiencia en el área legal y
                            tributaria.
                            Enfocando nuestros servicios en el análisis y resolución de problemas legales dentro de un contexto
                            comercial
              y financiero, proponiendo soluciones oportunas y acordes a las necesidades de nuestros clientes.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <Carousel slide={false} 
                fade={false} 
                activeIndex={index} 
                onSelect={handleSelect} 
                controls={false} 
                className='textoModificadoP d-block d-sm-none'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="textoBlanco">¿Quiénes somos?</h3>
                            <span className='btn btn-secondary '>Saber mas</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-right textoBlanco">¿Quiénes somos 2?</h3>
                            <Button variant='secondary'>Saber mas</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-right textoBlanco">¿Quiénes somos 3?</h3>
                            <Button variant='secondary'>Saber mas</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </header>
        </>
    )

}

export default SliderPrincipal