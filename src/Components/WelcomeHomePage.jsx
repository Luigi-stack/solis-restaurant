/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import CardsHomepage from "./CardsHomepage";
import cardsimg_homepage1 from "../assets/card_homepage/1.png";
import cardsimg_homepage2 from "../assets/card_homepage/2.png";






function WelcomeHomePage() {

    return (
        <>
            <Container fluid className="bg-black text-white p-5 text-center mb-5 navbartop">
                <h1 className="">Welcome</h1>
                <p className="lh-lg mb-5 fs-6">
                    Solis, an Italian culinary haven, invites you to a refined dining experience where gastronomy meets artistry. Delight in our meticulously crafted menu, a symphony of authentic flavors celebrating the essence of Italy. Elevate your meal with our curated wine selection, carefully chosen to complement the culinary journey. In an elegant setting, Solis invites you to savor the epitome of Italian indulgence.
                </p>
                <Button href="/about" variant="outline-light" className="rounded-0 px-5 mb-3">LEARN MORE</Button>
            </Container>

            <Container className="mb-5">
                <Row className="mb-4" data-aos="fade-up" data-aos-duration="3000">
                    <Col xs={12} md={6} className="d-flex justify-content-center mb-3 mb-md-0">
                        <img src={cardsimg_homepage1} alt="restaurant" width={350} className=' d-md-block d-lg-none' />
                        <img src={cardsimg_homepage1} alt="restaurant" width={470} className='d-none d-lg-block ' />

                    </Col>

                    <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                        <CardsHomepage
                            header="Celebrate Together"
                            cardText="Solis, where moments are celebrated effortlessly. Whether it's a business dinner or a joyous occasion, our refined ambiance welcomes every gathering. No excuses needed, just relish the pleasure of coming together."
                            button="LEARN MORE"
                            href="/reservations"
                        />
                    </Col>
                </Row>

                <Row className="mb-5" data-aos="fade-up" data-aos-duration="3000">
                    <Col xs={12} md={6} className="d-flex justify-content-center align-items-center mb-3 mb-md-0">
                        <CardsHomepage
                            header="Menù"
                            cardText="Solis' menu, a culinary masterpiece, features locally sourced ingredients meticulously crafted into a rich tapestry of Italian flavors. Experience a symphony of taste, where tradition meets innovation in every delightful bite."
                            button="MENÙ"
                            href="/menus"
                        />
                    </Col>

                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <img src={cardsimg_homepage2} alt="restaurant" width={350} className='d-md-block d-lg-none' />
                        <img src={cardsimg_homepage2} alt="restaurant" width={470} className='d-none d-lg-block' />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default WelcomeHomePage;