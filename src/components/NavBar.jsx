import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './cartWidget/cartWidget'
import { Link } from 'react-router-dom'

function NavBar(){
    return (
        <Navbar bg="dark" data-bs-theme="dark" sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to='/'>Tienda</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link as={Link} to='/category/guitarras'>Guitarras</Nav.Link>
                    <Nav.Link as={Link} to='/category/bajos'>Bajos</Nav.Link>
                    <Nav.Link as={Link} to='/category/baterias'>Baterias</Nav.Link>
                    <Nav.Link as={Link} to='/category/amplificadores'>Amplificadores</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar