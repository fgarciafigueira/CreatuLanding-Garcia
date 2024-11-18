import { useCart } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
function CartWidget (){
    const {getCantidades} = useCart()

    return (
        <>
        <Button variant="dark" style={{ borderColor: 'beige' }}  as={Link}
           to={`/cart`} className="d-flex align-items-center gap-2">
           <FaCartShopping />  
           <Badge bg="secondary">{getCantidades()}</Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
        </>
    )
}

export default CartWidget
