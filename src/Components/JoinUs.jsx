import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


function JoinUs() {

    return (

        <>
            <Container className="join_us text-white d-flex flex-column justify-content-center align-items-center mb-5" >
                <h2>Join Us for Dinner</h2>
                <Button variant="dark" className='rounded-0 font-monospace'>RESERVATIONS</Button>
            </Container>

        </>

    )

}

export default JoinUs;