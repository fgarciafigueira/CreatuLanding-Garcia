import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

function EmptyCart () {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh'}}>
            <div className="text-center mt-5">
                <h2>Tu carrito está vacío</h2>
                <p>No tenes productos en tu carrito. Explora la tienda para comprar!</p>
                <Button as={Link} to="/" variant="primary" className="mt-3">
                    Volver a la tienda
                </Button>
    </div>
        </Container>
    )
}

export default EmptyCart
