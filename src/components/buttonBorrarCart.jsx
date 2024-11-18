import Button from 'react-bootstrap/Button'
import { useCart } from '../context/cartContext.js'
import { FaTrash } from 'react-icons/fa'

function BorrarCart() {
    const { clearCart } = useCart();

    return(
        <div className="d-flex justify-content-end mt-3 me-3">
            <Button variant="outline-danger" onClick={() =>clearCart()}>
            Vaciar Carrito <FaTrash />
            </Button>
        </div>
    )
}
export default BorrarCart