import {Button, Form, Container} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { useCart } from '../context/cartContext.js'
import {createOrder} from '../firebase/db'
import { serverTimestamp } from 'firebase/firestore'
import Swal from 'sweetalert2'


function Cart({cart}) {
  const { removeFromCart, getTotal } = useCart();
  const handleSubmit = async(e) =>{
    e.preventDefault()
    const form= e.target
    const [nombre, email, telefono] = form
    
    const order = {
      buyer: {nombre: nombre.value, email: email.value, telefono: telefono.value},
      items:cart,
      date: serverTimestamp(),
      total:getTotal()
    }

    createOrder(order)
    const docRef = await createOrder({ nombre: "Producto" })
    Swal.fire({
      title: "Tu solicitud fue dada de alta con éxito",
      text: "Tu ID es el: " + docRef.id,
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/" 
      }
    })
  }
  return (
    <>
    <Container>
      <Col xs={12} md={6} lg={4}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cart.thumbnail} />
          <Card.Body>
            <Card.Title>{cart.title}</Card.Title>
            <Card.Text>
              {cart.category}
            </Card.Text>
            <Card.Text>
              {cart.qty} x ${cart.price} = ${cart.price*cart.qty}
            </Card.Text>
            <Button variant="danger" onClick={() =>removeFromCart(cart.id)}>
            Borrar
              </Button>
          </Card.Body>
        </Card>
      </Col>
    </Container>
    
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="nombre" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" placeholder="telefono" required />
        </Form.Group>
        <button>Comprar</button>
      </Form>
    </Container>
    </>
  );
}

export default Cart