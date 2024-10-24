import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './cartWidget/CartWidget'
import { Link } from 'react-router-dom'

function NavBar(){
    return (
        <Navbar bg="dark" data-bs-theme="dark" sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to='/'>Tienda</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link as={Link} to='/category/fragrances'>Fragancias</Nav.Link>
                    <Nav.Link as={Link} to='/category/furniture'>Muebles</Nav.Link>
                    <Nav.Link as={Link} to='/category/groceries'>Mercado</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar