import {Container, Form }from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Cart from './cart'
import { useCart } from '../context/cartContext.js'
import BorrarCart from './buttonBorrarCart'
import {createOrder} from '../firebase/db'
import { serverTimestamp } from 'firebase/firestore'
import Swal from 'sweetalert2'

function CartList ({cart}){
    const { getTotal } = useCart();
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
        <Container style={{minHeight: '100vh', paddingTop:'1rem'}}>
            <BorrarCart />
            <Row xs={1} md={4} className="g-4 align-items-stretch">
              {cart.map(cart => ( <Cart cart={cart} key={cart.id} />
              ) ) }
            </Row>
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
    )
}

export default CartList