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
    const aumentar = (index)=>{
        setIndex(index+1);
    }

    useEffect(() => {
        const unsuscribe = db.collection('noticias').orderBy('creado', 'desc').onSnapshot(snapshot => {
            let newsData = []
            snapshot.docs.map(doc => {

                var ids = doc.id
                var data = doc.data()

                newsData.push({
                    id: ids,
                    nombre: data.nombre,
                    creado: data.creado,
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
            <div className='row'>
                <div className='col-8'>
            <Carousel slide={false}
                fade={false}
                onSelect={handleSelect}
                activeIndex={index}
                controls={false}>
                {
                    isLoading ?

                        <div className="d-flex justify-content-center mt-5">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>

                        :

                        news.map((element) =>

                            <Carousel.Item key={element.id}>
                                <img
                                    className="d-block w-100"
                                    src="https://www.blogdelfotografo.com/wp-content/uploads/2020/04/fotografo-paisajes.jpg"
                                />
                                <Carousel.Caption>
                                    <h3>{element.nombre}</h3>
                                    <p onClick={()=>aumentar(index)}>{ element.descripcion}</p>

                                </Carousel.Caption>
                            </Carousel.Item>

                        )
                }
            </Carousel>
            </div>
            <div className='col-4'>
                
                </div> 
            </div>
        </>
    );
}

export default Noticias