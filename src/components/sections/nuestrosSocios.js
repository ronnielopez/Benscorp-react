import React from 'react';
import perfil1 from '../../img/Rectángulo 38.png'
import perfil2 from '../../img/Rectángulo 39.png'
import perfil3 from '../../img/Rectángulo 40.png'

const Socios = () => {
    return (
        <>
            <div className="row esconder">
                <div className="col-4">
                    <h2 className="letter_responsive_quienes">Nuestros Socios</h2>
                </div>
            </div>
            <div className="d-flex justify-content-center d-sm-none">
                <h2 className="letter_responsive_contact">Nuestros Socios</h2>
            </div>

           
                <div className="container">
                    <div className="wrapper">
                        <div className="tarjeta">
                            <div className="tarjeta-img"></div>
                            <img src={perfil1} alt="Imagen de perfil" className="perfil-img"></img>
                            <h1 className="heading">Lic. Juan Carlos Benitez Perla</h1>
                            <p className="descripcion">
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Ipsa dolor tempore, repellat, aliquid 
                            minima maiores voluptas numquam labore alias maxime at recusandae 
                            ipsum nesciunt eligendi sed eaque. Autem, atque inventore.
                            </p>
                            <ul className="redes-sociales">
                                <li><a href=""><i className="fab fa-linkedin-square"></i></a></li>
                                <li><a href=""><i className="fas fa-envelope"></i></a></li>
                            </ul>
                        </div>

                        <div className="tarjeta">
                            <div className="tarjeta-img"></div>
                            <img src={perfil2} alt="Imagen de perfil" className="perfil-img"></img>
                            <h1 className="heading">Lic. Juan Carlos Benitez Perla</h1>
                            <p className="descripcion">
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Ipsa dolor tempore, repellat, aliquid 
                            minima maiores voluptas numquam labore alias maxime at recusandae 
                            ipsum nesciunt eligendi sed eaque. Autem, atque inventore.
                            </p>
                            <ul className="redes-sociales">
                                <li><a href=""><i className="fab fa-linkedin-square"></i></a></li>
                                <li><a href=""><i className="fas fa-envelope"></i></a></li>
                            </ul>
                        </div>

                        <div className="tarjeta">
                            <div className="tarjeta-img"></div>
                            <img src={perfil3} alt="Imagen de perfil" className="perfil-img"></img>
                            <h1 className="heading">Lic. Juan Carlos Benitez Perla</h1>
                            <p className="descripcion">
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Ipsa dolor tempore, repellat, aliquid 
                            minima maiores voluptas numquam labore alias maxime at recusandae 
                            ipsum nesciunt eligendi sed eaque. Autem, atque inventore.
                            </p>
                            <ul class="redes-sociales">
                                <li><a href=""><i className="fab fa-linkedin-square"></i></a></li>
                                <li><a href=""><i className="fas fa-envelope"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            
        </>
    )
}
export default Socios;