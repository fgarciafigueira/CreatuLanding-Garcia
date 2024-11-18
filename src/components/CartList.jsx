import {Container }from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Cart from './cart'
import BorrarCart from './buttonBorrarCart'
import SubmitForm from './submitForm.jsx'

function CartList ({cart}){
    
    return (
        <>
        <Container style={{minHeight: '100vh', paddingTop:'1rem'}}>
            <BorrarCart />
            <Row xs={1} md={4} className="g-4 align-items-stretch">
              {cart.map(cart => ( <Cart cart={cart} key={cart.id} />
              ) ) }
            </Row>
        </Container>
        <SubmitForm cart={cart}/>
        </>
    )
}

export default CartList