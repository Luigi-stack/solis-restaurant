import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';



function NavBarTop() {
  return (
    <>

      <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-white mt-3 mx-3 border border-2 border-dark">
        <Container>
          <Navbar.Brand href="#home">Solis</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border border-0 rounded-0' />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="ms-auto">
              <Nav.Link href="#home" className='me-4 mt-2'>Menus</Nav.Link>
              <Nav.Link href="#hoursandlocation" className='me-4 mt-2'>Hours & Location</Nav.Link>
              <Nav.Link href="#about" className='me-4 mt-2'>About</Nav.Link>
              <Nav.Link href="#reservation">
                <Button variant="dark" className='rounded-0'>Reservation</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBarTop;