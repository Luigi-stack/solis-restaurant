/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from "react-bootstrap";
import aboutus_img1 from '../assets/about/1.png';
import aboutus_img2 from '../assets/about/2.png';
import team1 from '../assets/team/1.png';
import team2 from '../assets/team/2.png';
import team3 from '../assets/team/3.png';
import team4 from '../assets/team/4.png';





function AboutUs() {
    return (
        <>
            <Container className="navbartop mb-5">
                <h1 className="text-center mb-5">About</h1>
                <Row className="mb-4">
                    <Col xs={12} md={6} className="d-flex justify-content-center mb-3 mb-md-0">
                        <img src={aboutus_img1} alt="restaurant" width={350} className=' d-md-block d-lg-none' />
                        <img src={aboutus_img1} alt="restaurant" width={470} className='d-none d-lg-block ' />

                    </Col>

                    <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center">
                        <h2>Our Story</h2>
                        <p className='fs-6 text-center lh-lg'>
                            In the heart of the city, Solis, meaning "sun" in Latin, radiates warmth and charm. This elegant restaurant embodies a culinary experience that is as inviting and delightful as the sun's embrace. From the tasteful decor to the impeccable service, Solis is a haven where traditional Italian values meet sophistication. Just as the sun illuminates, Solis shines as a distinguished destination, offering a curated journey for those seeking a touch of luxury in their dining experience.
                        </p>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center mb-3 mb-md-0">
                        <h2>Our Passion</h2>
                        <p className='fs-6 text-center lh-lg'>
                            Solis is driven by a profound passion for crafting authentic Italian cuisine that tantalizes the taste buds. Each dish is a masterpiece born from a love for traditional flavors and culinary excellence. Our chefs pour their heart and soul into every creation, ensuring that passion is the secret ingredient in every bite. Beyond the delectable menu, Solis is a place where the passion for hospitality transforms dining into an unforgettable experience. It's not just a restaurant; it's a celebration of the love we have for the art of Italian cooking and the joy it brings to our guests.
                        </p>
                    </Col>

                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <img src={aboutus_img2} alt="restaurant" width={350} className='d-md-block d-lg-none' />
                        <img src={aboutus_img2} alt="restaurant" width={470} className='d-none d-lg-block' />
                    </Col>
                </Row>

                <Row>

                    <h2 className="text-center mb-5">Our Team</h2>


                    <Col className="d-flex flex-column align-items-center" xs={6} lg={3}>
                        <img className="mb-3 d-md-block d-lg-none" src={team1} alt="team" width={150} />
                        <img className="mb-3 d-none d-lg-block" src={team1} alt="team" width={200} />

                        <p className="fs-6"><span className="fw-bold">Chef:</span> Samant Grace</p>
                    </Col>

                    <Col className="d-flex flex-column align-items-center" xs={6} lg={3}>
                        <img className="mb-3 d-md-block d-lg-none" src={team2} alt="team" width={150} />
                        <img className="mb-3 d-none d-lg-block" src={team2} alt="team" width={200} />

                        <p className="fs-6"><span className="fw-bold">Sous Chef:</span> Oliver Colombino</p>
                    </Col>

                    <Col className="d-flex flex-column align-items-center" xs={6} lg={3}>
                        <img className="mb-3 d-md-block d-lg-none" src={team3} alt="team" width={150} />
                        <img className="mb-3 d-none d-lg-block" src={team3} alt="team" width={200} />

                        <p className="fs-6"><span className="fw-bold">General Manager:</span> Adrian Tinelli</p>
                    </Col>

                    <Col className="d-flex flex-column align-items-center" xs={6} lg={3}>
                        <img className="mb-3 d-md-block d-lg-none" src={team4} alt="team" width={150} />
                        <img className="mb-3 d-none d-lg-block" src={team4} alt="team" width={200} />

                        <p className="fs-6"><span className="fw-bold">Floor Manager:</span> Ryan Cambeiro</p>
                    </Col>
                </Row>


            </Container>
        </>
    )
}

export default AboutUs;