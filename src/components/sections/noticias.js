import React, { useState, useEffect } from 'react';
import { db } from '../../services/firebase';
import { Carousel } from 'react-bootstrap';

const Noticias = () => {

    const [news, setNews] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    useEffect(() => {
        const unsuscribe = db.collection('noticias').orderBy('creado', 'desc').onSnapshot(snapshot => {
            let newsData = []
            snapshot.docs.map(doc => {

                var ids = doc.id
                var data = doc.data()

                newsData.push({
                    id: ids,
                    nombre: data.nombre,
                    fecha: data.fecha,
                    imagen: data.imagen,
                    descripcion: data.descripcion
                })


            })
            setNews(newsData)
            setLoading(false)
        })

        return () => unsuscribe()

    }, [])

    return (
        <>
            <div className="banner-sec">
                <div className="container">
                    <div className="row">
                    <div className="col-md-9 top-slider">
                            <Carousel slide={false}
                                fade={false}
                                activeIndex={index}
                                onSelect={handleSelect}
                                controls={false}
                                indicators={false}
                                pause={false}
                                interval={50000}
                            >
                                {news.map((element) =>
                                    <Carousel.Item key={element.id}>
                                        <img
                                            className="d-block w-100"
                                            src={'assets/img/' + element.imagen}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h4>{element.nombre}</h4>
                                            <p>{element.descripcion}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                                }
                            </Carousel>
                        </div>
                        
                        <div className='col-md-3'>
                            {

                                isLoading ?

                                    <div className="d-flex justify-content-center mt-5">
                                        <div className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>

                                    :

                                    news.map((element , index) =>
                                    <>
                                            <div className="card" onClick={()=>setIndex(index)} key={index}>
                                                <div className="card-img-overlay"> <span className="badge badge-pill bg-azul text-white">Noticia</span> </div>
                                                <div className="card-body">
                                                    <div className="news-title">
                                                        <h2 className=" title-small"><a href="#">{element.nombre}</a></h2>
                                                    </div>
                                                    <p className="card-text"><small className="text-time"><em>{element.fecha.toDate().toDateString()}</em></small></p>
                                                </div>
                                            </div>
                                        </>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Noticias