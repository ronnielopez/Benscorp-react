import React, {useState} from 'react';
import img1 from '../../img/Imagen1.png'
import {Carousel} from 'react-bootstrap'

const SliderPrincipal = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <header id="header">
                <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5 className="text-right display-4">¿Quiénes somos?</h5>
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
                            <h5 className="text-right display-4">¿Quiénes somos 2?</h5>
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
                            <h5 className="text-right display-4">¿Quiénes somos 3?</h5>
                            <p className="text-right">En Benscorp somos reconocidos por tener una amplia experiencia en el área legal y
                            tributaria.
                            Enfocando nuestros servicios en el análisis y resolución de problemas legales dentro de un contexto
                            comercial
              y financiero, proponiendo soluciones oportunas y acordes a las necesidades de nuestros clientes.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </header>
        </>
    )

}

export default SliderPrincipal