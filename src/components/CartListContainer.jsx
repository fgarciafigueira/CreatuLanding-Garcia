import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CartList from './CartList'
import { useCart } from '../context/cartContext';
import EmptyCart from "./EmptyCart";

function CartListContainer (){
    const {cart} = useCart()
    return (
          <>
            {cart.length > 0 ? <CartList cart={cart} /> : <EmptyCart />}
          </>
    )
}

export default CartListContainer