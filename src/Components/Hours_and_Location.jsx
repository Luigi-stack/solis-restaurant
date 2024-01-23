import { Container } from "react-bootstrap";
import MapComponent from "./MapComponent";

function Hours_and_Location() {

    return (

        <>
            <Container className='navbartop text-center mb-5'>
                <h1>Hours & Location</h1>

                <h5>Brunch</h5>
                <p>Saturday + Sunday: 11 a.m. - 2:30 p.m.</p>

                <h5>Dinner</h5>
                <p>Sunday: 5 - 9 p.m. <br />
                    Monday - Thursday: 5 - 10 p.m. <br />
                    Friday + Saturday: 5 - 11 p.m.
                </p>

                <h5>Happy Hour</h5>
                <p>Monday - Friday: 5 - 7 p.m.</p>
            </Container>

            <MapComponent />
        </>

    )

}

export default Hours_and_Location;