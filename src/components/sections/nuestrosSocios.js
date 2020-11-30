import React from 'react';
import perfil1 from '../../img/Rectángulo 38.png'
import perfil2 from '../../img/Rectángulo 39.png'
import perfil3 from '../../img/Rectángulo 40.png'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
   


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

            <div className="gtco-testimonials">
                <OwlCarousel 
                items={3} 
                className='owl-theme' 
                loop='true' 
                nav={false} 
                responsiveClass={true} 
                margin={0} 
                center={true}
                responsive={
                    {0: {
                    items: 1,
                    nav: false
                  },
                  680: {
                    items: 2,
                    nav: false,
                    loop: false
                  },
                  1000: {
                    items: 3,
                    nav: true
                  }}}>

                        <div className="card text-center"><img className="card-img-top" src={perfil1} alt="" />
                            <div className="card-body">
                                <h5 className="line_black">Lic. Juan Carlos Benitez Perla <br />
                                </h5>
                                <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                impedit quo minus id quod maxime placeat ” </p>
                                <div className="justify-content-center">
                                    <p>Nuestras redes</p>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <a className="links" href="mailto:cuenta@deemail.com"><i className="fas fa-envelope"></i></a>
                                    </div>
                                    <div className="col">
                                        <a className="links" href="https://www.linkedin.com/feed/"><i className="fab fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card text-center"><img className="card-img-top" src={perfil3} alt="" />
                            <div className="card-body">
                                <h5 className="line_black">Mgtr. Juan Carlos Benitez Sorto <br />
                                </h5>
                                <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                impedit quo minus id quod maxime placeat ” </p>
                                <div className="justify-content-center">
                                    <p>Nuestras redes</p>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <a className="links" href="mailto:cuenta@deemail.com"><i className="fas fa-envelope"></i></a>
                                    </div>
                                    <div className="col">
                                        <a className="links" href="https://www.linkedin.com/feed/"><i className="fab fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card text-center"><img className="card-img-top" src={perfil2} alt="" />
                            <div className="card-body">
                                <h5 className="line_black">Mgtr. Rodrigo José Benitez Sorto <br />
                                </h5>
                                <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                impedit quo minus id quod maxime placeat ” </p>
                                <div className="justify-content-center">
                                    <p>Nuestras redes</p>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <a className="links" href="mailto:cuenta@deemail.com"><i className="fas fa-envelope"></i></a>
                                    </div>
                                    <div className="col">
                                        <a className="links" href="https://www.linkedin.com/feed/"><i className="fab fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        


                </OwlCarousel>
            </div>
                        
            
        </>
    )
}
export default Socios;