import { createContext, useState } from "react";
import Item from "../components/Item/Item";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isIncart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isIncart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
}
