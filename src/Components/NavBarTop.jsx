import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBarTop() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mt-3 mx-5 border border-dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='border border-0 rounded-0' />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
              <Nav.Link href="#home">Menus</Nav.Link>
              <Nav.Link href="#link">Hours & Location</Nav.Link>
              <Nav.Link href="#link">Reservation</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBarTop;