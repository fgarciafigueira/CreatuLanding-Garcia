import { cartContext } from "./cartContext"
import { useState } from "react"


function CartProvider ({children}) {
    const [cart, setCart] = useState([])

    const addToCart = (item) => setCart([...cart, item])
    const clearCart = () => setCart([])
    
    const getCantidades = () => {
        const cantidadesOnly = cart.map (product => product.qty)
        const totalCarrito= cantidadesOnly.reduce((acc, current) => acc + current, 0)
        return totalCarrito
    }

    const removeFromCart = (id) => {setCart((prev) => prev.filter((product) => product.id !== id));
      }

    const getTotal = () =>{
        const priceOnly = cart.map (product => product.price*product.qty)
        const total= priceOnly.reduce((acc, current) => acc + current, 0)
        return total
    }
    
    return (
    <cartContext.Provider value={{cart, addToCart, clearCart, getCantidades, removeFromCart, getTotal}}>
        {children}
    </cartContext.Provider>
    )
}

export default CartProvider