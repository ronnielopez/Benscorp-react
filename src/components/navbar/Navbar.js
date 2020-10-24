import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="w-100 order-1 order-md-0">
                    <ul className="navbar-nav mr-auto">
                        <div className="row">
                            <div className="col">
                                <li className="nav-item">
                                    <a href="#" className="nav-link letra_menu text-center"><i className="fas fa-phone"></i> +503 2556-0740</a>
                                </li>
                            </div>
                            <div className="col">
                                <li className="nav-item">
                                    <a href="#" className="nav-link letra_menu text-center"><i className="fas fa-envelope"></i> info@benscorp.com</a>
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className="navbar-collapse collapse mx-auto order-0 dual-collapse2">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <h4><i className="fab fa-facebook-square"></i></h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <h4><i className="fab fa-twitter-square"></i></h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <h4><i className="fab fa-linkedin"></i></h4>
                            </a>
                        </li>
                    </ul>

                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 ">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <h2 className="text-right" data-toggle="modal" data-target="#contactmodal">¡Sera un gusto asesorarte!</h2>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar