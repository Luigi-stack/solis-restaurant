import { Container } from "react-bootstrap";

function MapComponent() {

    return (
        <>
        <Container className="text-center mb-5 d-none d-lg-block">
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2784.341948779441!2d-73.95170651259222!3d40.677493385034204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2ssn!4v1706032848913!5m2!1sit!2ssn" width={700} height={350} allowfullscreen></iframe>
        </Container>

        <Container className="text-center mb-5 d-md-block d-lg-none">
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2784.341948779441!2d-73.95170651259222!3d40.677493385034204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2ssn!4v1706032848913!5m2!1sit!2ssn" width={350} height={350} allowfullscreen></iframe>
        </Container>
        </>
    );
}

export default MapComponent;