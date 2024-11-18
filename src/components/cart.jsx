import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { useCart } from '../context/cartContext.js'

function Cart({cart}) {
  const { removeFromCart } = useCart();
  return (
    <Col xs={12} md={6} lg={4}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cart.thumbnail} />
        <Card.Body>
          <Card.Title>{cart.title}</Card.Title>
          <Card.Text>
            {cart.category}
          </Card.Text>
          <Card.Text>
            {cart.qty} x ${cart.price}
          </Card.Text>
           <Button variant="danger" onClick={() =>removeFromCart(cart.id)}>
           Borrar
            </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cart