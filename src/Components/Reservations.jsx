/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Reservations() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (

        <>
            <Container className='navbartop mb-5'>
                <Row className='justify-content-center align-items-center'>
                    <Col xs={12} lg={3} className='text-center me-lg-5'>
                        <h2 className='mt-lg-5'>Let's Party</h2>
                        <p className='lh-lg fs-6'>
                            We love all parties, big and small! <br /> For the big ones, 7 to 15 guests or more, Solis offers packages for private parties and events in our Dining Room.
                            <br />
                            Please email us for more information at hello@solis.com <br /> or <br /> Call Us at <br /> 
                            +123 45 - 6789
                        </p>
                    </Col>

                    <Col xs={12} lg={5} className='ms-lg-5'>
                    <h1 className='text-center'>Reserve a Table</h1>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                        className='rounded-0 border border-black'
                                    />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Last name"
                                        className='rounded-0 border border-black'
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>Email </Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Email"
                                        className='rounded-0 border border-black'
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        required
                                        type="numbers"
                                        placeholder="Phone Number"
                                        className='rounded-0 border border-black'
                                    />
                                </Form.Group>
                            </Row>

                            <hr />

                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control
                                        required
                                        type="date"
                                        placeholder="Date"
                                        className='rounded-0 border border-black'
                                    />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Time</Form.Label>
                                    <Form.Control
                                        required
                                        type="time"
                                        placeholder="Time"
                                        className='rounded-0 border border-black'
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>Number of Guests</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="Number of Guests"
                                        max="10"
                                        min="1"
                                        className='rounded-0 border border-black'
                                    />
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                            <Button variant="dark" className='rounded-0' type="submit">Reserve</Button>
                        </Form>
                    </Col>

                </Row>

            </Container>
        </>


    );
}

export default Reservations;