import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';


import '../styles/Header.css'

function Header() {

    return (
    <Navbar bg="primary" variant="dark" className="navbar navbar-custom">
      <Container>
        <Navbar.Brand href="#home">Озончик</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Главная</Nav.Link>
            <Nav.Link href="#features">Товары</Nav.Link>
        </Nav>

        <NavDropdown title={<img className='round-img' src='https://pm1.aminoapps.com/6497/1bd6b69e4beacc4d8ac05744e2973295182a72ad_hq.jpg' width='50' height='50'/>} id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Войти</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5"> Еще че то </NavDropdown.Item>
        </NavDropdown>
    
      </Container>
    </Navbar>
  );
}

export default Header