import { useState, useContext } from 'react'
import { cartContext } from '../context/cartContext.js'

function ItemCount({detail}) {
    const [count, setCount] = useState(1)
    const {addToCart} =useContext (cartContext)

    const handleAdd = () => setCount(count + 1)
    const handleSub = () => setCount(count - 1)

    const handleAddToCart = () => addToCart ({...detail, qty: count})
    return (
        <div>
            <p style={{border: "1px solid #ddd",borderRadius: "1px",backgroundColor: "#fff", padding: "2px 6px",}}>{count}</p>
            <button onClick={handleSub}>-</button>
            <button onClick={handleAddToCart}>agregar al carrito</button>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}

export default ItemCount