import React, {useState} from 'react';
import img1 from '../../img/sliderPrincipal/sliderPrincipal.jpeg'
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
                className='textoModificadoG'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src={img1}
                            alt="First slide"
                            
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-100 "
                            src={img1}
                            alt="Second slide"
                        />

                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src={img1}
                            alt="Third slide"
                            
                        />

                       
                    </Carousel.Item>
                </Carousel>

                
            </header>
        </>
    )

}

export default SliderPrincipal