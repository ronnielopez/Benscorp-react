import React, { useState } from 'react';
import { Card, Carousel, Modal, Button, Form} from 'react-bootstrap';
const Servicio = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <div className="row justify-content-end esconder">
                <h2 className="letter_responsive text-right">Nuestros Servicios</h2>
            </div>
            <div className="d-flex justify-content-center d-sm-none">
                <h2 className="letter_responsive_contact">Nuestros Servicios</h2>
            </div>

            <div className="row esconder">
                {/*--------------- Primera fila --------------*/}
                <div className="col-lg-4 col-md-6">
                    <Card>
                        <Card.Body>
                            <Card.Title className='text-center'><h4>Asesoria fiscal especializada</h4></Card.Title>
                            <Card.Text>
                                La asesoría Fiscal tiene por objeto la optimización de
                                sus impuestos y la detección de nuevas ventajas fiscales aplicables a su negocio. Nuestros asesores
                                buscan obtener el menor impacto fiscal, es por ello por lo que ofrecemos una la siguiente gama de
                                servicios: planeación fiscal estratégica, obtención de incentivos fiscales, asesoría preventiva y
                                correctiva, optimización del pago a contribuciones, revisión del correcto cumplimiento de obligaciones
                                fiscales, consolidación fiscal, entre otros.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center"><a href='#' className='text-muted' onClick={() => setModalShow(true)}>Conoce mas</a></Card.Footer>
                    </Card>
                </div>

                <Modals
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    animation={false}
                />

                <div className="col-lg-4 col-md-6">
                    <Card>
                        <Card.Body>
                            <Card.Title className='text-center'><h4>Constitución e inscripción de empresas</h4></Card.Title>
                            <Card.Text>
                                En Benscorp somos especialistas en el registro
                                e inscripción de empresas o sucursales de empresas extranjeras, especialmente para aquellos inversionistas
                                que estén interesados en realizar actos de comercio en El Salvador, ya sea que estén constituidas en
                                su país de origen y desean crear una sucursal localmente, o bien deseen abrir una empresa desde cero
                                en el país.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center">Conoce mas</Card.Footer>
                    </Card>
                </div>


                <div className="col-lg-4 col-md-6">
                    <Card>
                        <Card.Body>
                            <Card.Title className='text-center'><h4>Asesoramiento legal integral</h4></Card.Title>
                            <Card.Text>
                                Somos capaces de encontrar la mejor solución para ti, no importa
                                si eres un emprendedor, pequeña, mediana o gran empresa, la experiencia de muchos años en el rubro nos
                                permite conocer todos los sectores involucrados en tu modelo de negocios Nuestra ventaja competitiva,
                                nace en la variedad de servicios relacionados ofrecidos, los cuales, posibilitan a nuestros asesores a
                                tener un diagnóstico integral de nuestros clientes, logrando más eficiencia y calidad en la prestación
                                de servicios legales.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center">Conoce mas</Card.Footer>
                    </Card>
                </div>

                {/*--------------- Segunda fila --------------*/}
                <div className="col-lg-4 col-md-6">
                    <Card>
                        <Card.Body>
                            <Card.Title className='text-center'><h4>Servicio de outsourcing contable</h4></Card.Title>
                            <Card.Text>
                                Nuestro equipo de asesores expertos en temas contables brinda una
                                amplia gama de servicios en el ámbito contable, los cuales buscan apoyar en los diferentes temas de control,
                                mantenimiento y resolución de problemas en dicho ámbito. Como Benscorp, buscamos ser tu aliado estratégico y
                                apoyo, permitiéndote enfocarte en la correcta implementación de la estrategia de tu negocio.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center">Conoce mas</Card.Footer>
                    </Card>
                </div>

                <div className="col-lg-4 col-md-6">
                    <Card>
                        <Card.Body>
                            <Card.Title className='text-center'><h4>Estudios de precios de transferencia</h4></Card.Title>
                            <Card.Text>
                                Gracias a nuestro equipo integral de consultores, logramos apoyar a
                                las empresas en el correcto cumplimiento de sus obligaciones en cumplimiento de documentación asociada a
                                transacciones con sujetos relacionados. Esto lo logramos por medio de nuestras alianzas internacionales,
                                las cuales nos permiten realizar estudios de precios de transferencia sumamente detallados y aplicados
                                a las necesidades de nuestros clientes.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center">Conoce mas</Card.Footer>
                    </Card>
                </div>


                <div className="col-lg-4 col-md-6">
                    <Card>
                        <Card.Body>
                            <Card.Title className='text-center'><h4>Análisis estratégicos de negocios</h4></Card.Title>
                            <Card.Text>
                                Con el fin de mejorar, en un mundo globalizado y competitivo como
                                el que vivimos, las empresas debemos de realizar análisis estratégicos de manera recursiva y periódica;
                                muchas veces creemos que tenemos la estratégica ganadora, pero la verdadera pregunta es ¿Por cuánto tiempo?
                                Por lo tanto, nuestro equipo de consultores, especialistas en negocios, busca analizar de manera integral,
                                el planteamiento e implementación de la estrategia, la cual genere las mayores ventajas competitivas para
                                la compañía.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center">Conoce mas</Card.Footer>
                    </Card>
                </div>

                {/*--------------- Tercera fila --------------*/}

                <div className="col-lg-4 col-md-6">
                    <Card>
                        <Card.Body>
                            <Card.Title className='text-center'><h4>Reestructuración empresarial</h4></Card.Title>
                            <Card.Text>
                                El proceso de reorganización de una empresa puede ser ejecutado
                                debido a un número de factores diferentes, como el posicionamiento de la empresa para ser más competitivos,
                                sobrevivir a un clima económico adverso en la actualidad, la corporación o aplomo para moverse en una
                                dirección totalmente nueva. En Benscorp, te asesoramos en todo el proceso de cambio, el cual es una constante
                                en todas las empresas, evaluando los aspectos financieros y fiscales, a fin de que usted puede tomar
                                las mejores decisiones que le permitan alcanzar las metas propuestas para su organización.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center">Conoce mas</Card.Footer>
                    </Card>
                </div>


                <div className="col-lg-4 col-md-6">
                    <Card>
                        <Card.Body>
                            <Card.Title className='text-center'><h4>Servicio de traducción de textos legales</h4></Card.Title>
                            <Card.Text>
                                En el mundo de las traducciones, los textos legales son ciertamente
                                un caso sumamente particular; no solo por su complejidad lingüística, sino también por el contexto en el que
                                se aplican los mismos, dependiendo de las regulaciones existentes en los distintos países. Es por esto, por
                                lo que en Benscorp garantizamos su correcta traducción, asegurando que todas las consideraciones sean
                                plasmadas de manera correcta y concreta, al momento de realizarlas.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center">Conoce mas</Card.Footer>
                    </Card>
                </div>


                <div className="col-lg-4 col-md-6">
                    <Card>
                        <Card.Body>
                            <Card.Title className='text-center'><h4>Gestión de proyectos de innovación</h4></Card.Title>
                            <Card.Text>
                                Un proyecto innovador es un plan estratégico que supone la creación
                                de nuevas ideas, productos o servicios, que conlleven el desarrollo de nuevas metodologías, tecnologías y
                                métodos de trabajo, así como el correcto cambio de paradigmas, o cambio organizacional para tener éxito.
                                En Benscorp, al considerar todos estos factores, somos expertos en la correcta implementación y gestión de
                                dichos proyectos, evitando el sesgo organizacional que podrían tener la utilización de un equipo interno
                                para el mismo, generando resultados por debajo de su potencial de cambio.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center">Conoce mas</Card.Footer>
                    </Card>
                </div>
            </div>



            <div className="row d-block d-sm-none">
                <Carousel slide={false} fade={false} activeIndex={index} onSelect={handleSelect} controls={false} className='indicatorsblack'>
                    {/*Item de slider*/}
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-center'><h6>Gestión de proyectos de innovación</h6></Card.Title>
                                <Card.Text className='letraspequenas'>
                                    Un proyecto innovador es un plan estratégico que supone la creación
                                    de nuevas ideas, productos o servicios, que conlleven el desarrollo de nuevas metodologías, tecnologías y
                                    métodos de trabajo, así como el correcto cambio de paradigmas, o cambio organizacional para tener éxito.
                                    En Benscorp, al considerar todos estos factores, somos expertos en la correcta implementación y gestión de
                                    dichos proyectos, evitando el sesgo organizacional que podrían tener la utilización de un equipo interno
                                    para el mismo, generando resultados por debajo de su potencial de cambio.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted text-center">Conoce mas</Card.Footer>
                        </Card>
                    </Carousel.Item>
                    {/*Item de slider*/}
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-center'><h6>Servicio de traducción de textos legales</h6></Card.Title>
                                <Card.Text className='letraspequenas'>
                                    En el mundo de las traducciones, los textos legales son ciertamente
                                    un caso sumamente particular; no solo por su complejidad lingüística, sino también por el contexto en el que
                                    se aplican los mismos, dependiendo de las regulaciones existentes en los distintos países. Es por esto, por
                                    lo que en Benscorp garantizamos su correcta traducción, asegurando que todas las consideraciones sean
                                    plasmadas de manera correcta y concreta, al momento de realizarlas.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted text-center">Conoce mas</Card.Footer>
                        </Card>
                    </Carousel.Item>
                    {/*Item de slider*/}
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-center'><h6>Reestructuración empresarial</h6></Card.Title>
                                <Card.Text className='letraspequenas'>
                                    El proceso de reorganización de una empresa puede ser ejecutado
                                    debido a un número de factores diferentes, como el posicionamiento de la empresa para ser más competitivos,
                                    sobrevivir a un clima económico adverso en la actualidad, la corporación o aplomo para moverse en una
                                    dirección totalmente nueva. En Benscorp, te asesoramos en todo el proceso de cambio, el cual es una constante
                                    en todas las empresas, evaluando los aspectos financieros y fiscales, a fin de que usted puede tomar
                                    las mejores decisiones que le permitan alcanzar las metas propuestas para su organización.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted text-center">Conoce mas</Card.Footer>
                        </Card>
                    </Carousel.Item>
                    {/*Item de slider*/}
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-center'><h6>Análisis estratégicos de negocios</h6></Card.Title>
                                <Card.Text className='letraspequenas'>
                                    Con el fin de mejorar, en un mundo globalizado y competitivo como
                                    el que vivimos, las empresas debemos de realizar análisis estratégicos de manera recursiva y periódica;
                                    muchas veces creemos que tenemos la estratégica ganadora, pero la verdadera pregunta es ¿Por cuánto tiempo?
                                    Por lo tanto, nuestro equipo de consultores, especialistas en negocios, busca analizar de manera integral,
                                    el planteamiento e implementación de la estrategia, la cual genere las mayores ventajas competitivas para
                                    la compañía.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted text-center">Conoce mas</Card.Footer>
                        </Card>
                    </Carousel.Item>
                    {/*Item de slider*/}
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-center'><h6>Estudios de precios de transferencia</h6></Card.Title>
                                <Card.Text className='letraspequenas'>
                                    Gracias a nuestro equipo integral de consultores, logramos apoyar a
                                    las empresas en el correcto cumplimiento de sus obligaciones en cumplimiento de documentación asociada a
                                    transacciones con sujetos relacionados. Esto lo logramos por medio de nuestras alianzas internacionales,
                                    las cuales nos permiten realizar estudios de precios de transferencia sumamente detallados y aplicados
                                    a las necesidades de nuestros clientes.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted text-center">Conoce mas</Card.Footer>
                        </Card>
                    </Carousel.Item>
                    {/*Item de slider*/}
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-center'><h6>Servicio de outsourcing contable</h6></Card.Title>
                                <Card.Text className='letraspequenas'>
                                    Nuestro equipo de asesores expertos en temas contables brinda una
                                    amplia gama de servicios en el ámbito contable, los cuales buscan apoyar en los diferentes temas de control,
                                    mantenimiento y resolución de problemas en dicho ámbito. Como Benscorp, buscamos ser tu aliado estratégico y
                                    apoyo, permitiéndote enfocarte en la correcta implementación de la estrategia de tu negocio.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted text-center">Conoce mas</Card.Footer>
                        </Card>
                    </Carousel.Item>
                    {/*Item de slider*/}
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-center'><h6>Asesoramiento legal integral</h6></Card.Title>
                                <Card.Text className='letraspequenas'>
                                    Somos capaces de encontrar la mejor solución para ti, no importa
                                    si eres un emprendedor, pequeña, mediana o gran empresa, la experiencia de muchos años en el rubro nos
                                    permite conocer todos los sectores involucrados en tu modelo de negocios Nuestra ventaja competitiva,
                                    nace en la variedad de servicios relacionados ofrecidos, los cuales, posibilitan a nuestros asesores a
                                    tener un diagnóstico integral de nuestros clientes, logrando más eficiencia y calidad en la prestación
                                    de servicios legales.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted text-center">Conoce mas</Card.Footer>
                        </Card>
                    </Carousel.Item>
                    {/*Item de slider*/}
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-center'><h6>Constitución e inscripción de empresas</h6></Card.Title>
                                <Card.Text className='letraspequenas'>
                                    En Benscorp somos especialistas en el registro
                                    e inscripción de empresas o sucursales de empresas extranjeras, especialmente para aquellos inversionistas
                                    que estén interesados en realizar actos de comercio en El Salvador, ya sea que estén constituidas en
                                    su país de origen y desean crear una sucursal localmente, o bien deseen abrir una empresa desde cero
                                    en el país.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted text-center">Conoce mas</Card.Footer>
                        </Card>
                    </Carousel.Item>
                    {/*Item de slider*/}
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-center'><h6>Asesoria fiscal especializada</h6></Card.Title>
                                <Card.Text className='letraspequenas'>
                                    La asesoría Fiscal tiene por objeto la optimización de
                                    sus impuestos y la detección de nuevas ventajas fiscales aplicables a su negocio. Nuestros asesores
                                    buscan obtener el menor impacto fiscal, es por ello por lo que ofrecemos una la siguiente gama de
                                    servicios: planeación fiscal estratégica, obtención de incentivos fiscales, asesoría preventiva y
                                    correctiva, optimización del pago a contribuciones, revisión del correcto cumplimiento de obligaciones
                                    fiscales, consolidación fiscal, entre otros.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted text-center">Conoce mas</Card.Footer>
                        </Card>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

function Modals(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Ponte en contacto con nosotros
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre completo</Form.Label>
                        <Form.Control type="text" placeholder="John Doe" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Correo electronico </Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput3">
                        <Form.Label>Titulo </Form.Label>
                        <Form.Control type="text" placeholder="Titulo" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea4">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={props.onHide}>Close</Button>
                <Button variant='success'>Enviar </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Servicio;