import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function Footerbottom() {
    return (
        <>
            <Container fluid className="bg-black text-white m-0 pb-3 pt-5">
                <p className="text-center fs6">
                    36 E 27TH ST NEW YORK, NY 104533 | PHONE: +123 45 - 6789 | EMAIL: hello@solis.com
                </p>
                <p className='text-secondary text-center mb-1'>© Luigi Iossa 2024</p>
                    <p className='text-center'>
                        <Link to='https://github.com/Luigi-stack/' className='text-secondary'><FaGithub /></Link>
                        <Link to='https://www.linkedin.com/in/luigi-iossa-fullstack-developer/' className='mx-3 text-secondary'><FaLinkedinIn /></Link>
                        <Link to='https://luigi-iossa.netlify.app' className='text-secondary'><CgWebsite /></Link>
                    </p>
            </Container>

        </>
    )
}

export default Footerbottom;