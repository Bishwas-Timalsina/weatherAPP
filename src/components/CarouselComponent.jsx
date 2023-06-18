import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const CarouselComponent = () => {
    return (
        <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showThumbs={false}
        >
            <div>
                <h2>Slide 1</h2>
                <p>Content for Slide 1</p>
            </div>
            <div>
                <h2>Slide 2</h2>
                <p>Content for Slide 2</p>
            </div>
            <div>
                <h2>Slide 3</h2>
                <p>Content for Slide 3</p>
            </div>
        </Carousel>
    );
}

export default CarouselComponent