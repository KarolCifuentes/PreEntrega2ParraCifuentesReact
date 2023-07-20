import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from './CartElements';
import CartTotal from './CartTotal';
import React from 'react'

export const CartContent = () => {
  
  const { cart } = useContext(dataContext) 
  //condicion

  return cart.length > 0 ?(
    <>
      <CartElements />
      <CartTotal />
    </>
  ): (
    <h2 className="cart-message-center">Tu carrito esta basio</h2>
  )
}

export default CartContent;