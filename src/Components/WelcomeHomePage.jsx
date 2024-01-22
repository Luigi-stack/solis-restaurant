/* eslint-disable react/no-unescaped-entities */
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';



function WelcomeHomePage() {
    return (
        <>
            <Container fluid className="bg-black text-white p-5 text-center mb-5">
                <h1 className="">Welcome</h1>
                <p className="lh-lg mb-5">
                    Solis, an Italian culinary haven, invites you to a refined dining experience where gastronomy meets artistry. Delight in our meticulously crafted menu, a symphony of authentic flavors celebrating the essence of Italy. Elevate your meal with our curated wine selection, carefully chosen to complement the culinary journey. In an elegant setting, Solis invites you to savor the epitome of Italian indulgence.
                </p>
                <Button variant="outline-light" className="rounded-0 px-5 mb-3">LEARN MORE</Button>
            </Container>

        </>
    )
}

export default WelcomeHomePage;