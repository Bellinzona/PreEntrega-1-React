import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidgetComponent } from './cartWidgetComponent/cartWidget';

function NavbarComponente() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Tienda Mateo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Productos</Nav.Link>
            <Nav.Link href="#action2">Donde Encontrarnos</Nav.Link>
            <NavDropdown title="Categoria" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                Peliculas
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action5">
                Series
              </NavDropdown.Item>
            </NavDropdown>


            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Que pelicula quieres..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>

      <CartWidgetComponent></CartWidgetComponent>
  
    </Navbar>
  );
}

export default NavbarComponente;