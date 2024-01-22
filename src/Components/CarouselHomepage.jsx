import Carousel from 'react-bootstrap/Carousel';
import carousel_homepage1 from '../assets/carousel/carousel_homepage1.png';
import carousel_homepage2 from '../assets/carousel/carousel_homepage2.png';
import carousel_homepage3 from '../assets/carousel/carousel_homepage3.png';
import carousel_homepage4 from '../assets/carousel/carousel_homepage4.png';
import carousel_homepage5 from '../assets/carousel/carousel_homepage5.png';


function CarouselHomepage() {
    return (
        <>
            <Carousel fade className='m-5 navbartop'>
                <Carousel.Item>
                    <img className='w-100' src={carousel_homepage1} alt="italian food"  />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='w-100' src={carousel_homepage2} alt="italian food" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='w-100' src={carousel_homepage3} alt="italian food" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='w-100' src={carousel_homepage4} alt="italian food" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='w-100' src={carousel_homepage5} alt="italian food" />
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default CarouselHomepage;