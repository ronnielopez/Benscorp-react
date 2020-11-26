import React,{useState} from 'react';
import al1 from '../../img/alianza_logo/1.png';
import al2 from '../../img/alianza_logo/2.png';
import al3 from '../../img/alianza_logo/3.png';
import al4 from '../../img/alianza_logo/4.png';

import {Carousel} from 'react-bootstrap';


const Alianzas = () => {
  const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <div className="row justify-content-end d-none d-md-block">
                <h2 className="letter_responsive">Alianzas</h2>
            </div>
            <div className="d-flex justify-content-center d-sm-none">
                <h2 className="letter_responsive_contact">Alianzas</h2>
            </div>

            <div className="container">
                <div className="row justify-content-center d-none d-md-flex">
                    <div className="col">
                        <img className="img-fluid" src={al1} alt=""/>
                    </div>
                    <div className="col">
                        <img className="img-fluid" src={al2} alt=""/>
                    </div>
                    <div className="col">
                        <img className="img-fluid" src={al3} alt=""/>
                    </div>
                    <div className="col">
                        <img className="img-fluid" src={al4} alt=""/>
                    </div>
                </div>

                <div className="row d-block d-sm-none">

        <div className="col">
        <Carousel slide={false} fade={false} activeIndex={index} onSelect={handleSelect} controls={false} className='indicatorsblack'>
        <Carousel.Item>
          <img src={al1} className="img-responsive ml-3"/>  
        </Carousel.Item>
        <Carousel.Item>
          <img src={al2} className="img-responsive ml-3"/>  
        </Carousel.Item>
        <Carousel.Item>
          <img src={al3} className="img-responsive ml-3"/>  
        </Carousel.Item>
        <Carousel.Item>
          <img src={al4} className="img-responsive ml-3"/>  
        </Carousel.Item>
        </Carousel>
        </div>
      </div>
            </div>
        </>
    )
}
export default Alianzas;