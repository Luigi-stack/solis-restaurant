import { Container, Row, Col } from "react-bootstrap";
import { RiDoubleQuotesL } from "react-icons/ri";


function Review() {
    return (
        <>
            <Container className="testimonial mb-5">
                <h2 className="text-center mb-4">Testimonials</h2>
                <Row>
                    <Col className="mb-2 mx-5">
                        <RiDoubleQuotesL className="fs-1 text-secondary" />
                        <h4 className="text-center">LOVELY RESTAURANT</h4>
                        <p className="text-secondary text-center mb-1">
                            The ambience was great - and the food even better! Simple recipes done well, with top-notch ingredients. Will be back!
                        </p>
                        <span className="text-secondary ">- Dani S.</span>
                    </Col>

                    <Col className="mb-2 mx-5">
                        <RiDoubleQuotesL className="fs-1 text-secondary" />
                        <h4 className="text-center">TRANSPORTED TO ITALY</h4>
                        <p className="text-secondary text-center mb-1">
                            One bite and I felt like I was back in Ialy. Chef Ingrid and her team have outdone themselves!
                        </p>
                        <span className="text-secondary ">- Teddy M.</span>
                    </Col>

                    <Col className="mb-2 mx-5">
                        <RiDoubleQuotesL className="fs-1 text-secondary" />
                        <h4 className="text-center">CULINARY EXCELLENCE</h4>
                        <p className="text-secondary text-center mb-1">
                            Solis: Culinary excellence meets inviting ambiance—an experience of refined dining with a touch of warmth and flair.
                        </p>
                        <span className="text-secondary ">- Carl J.</span>
                    </Col>
                </Row>

            </Container>

        </>
    )
}

export default Review;