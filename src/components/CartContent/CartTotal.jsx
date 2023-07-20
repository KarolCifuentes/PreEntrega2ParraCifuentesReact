import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import React from 'react'

const CartTotal = () => {
    const { cart } = useContext(dataContext)

    //total
    const total = cart.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0)
    return <div className="cartTotal">
        <h3>Total: ${total}</h3>
    </div>
}

export default CartTotal