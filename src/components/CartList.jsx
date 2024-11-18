import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Cart from './cart'
import BorrarCart from './buttonBorrarCart'

function CartList ({cart}){
    return (
        <Container style={{minHeight: '100vh', paddingTop:'1rem'}}>
            <BorrarCart />
            <Row xs={1} md={4} className="g-4 align-items-stretch">
              {cart.map(cart => ( <Cart cart={cart} key={cart.id} />
              ) ) }
            </Row>
        </Container>
    )
}

export default CartList