import React from 'react';
import { Carousel } from 'react-bootstrap';

const SliderCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://cinestar-files.obs.la-south-2.myhuaweicloud.com/banners/1648760177.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://cinestar-files.obs.la-south-2.myhuaweicloud.com/banners/1648825284.jpg"
                    alt="Second slide"
                />
                
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://cinestar-files.obs.la-south-2.myhuaweicloud.com/banners/1649224092.jpg"
                    alt="Third slide"
                />
                
            </Carousel.Item>
        </Carousel>
    )
    
}

export default SliderCarousel;