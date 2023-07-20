import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import React from 'react'
import "./Products.css"

const Products = () => {
  const { data, cart , setCart } = useContext(dataContext)

  const buyProducts = (product) =>{ //capturo producto
    //console.log("Compra ok")
    console.log(product)
    setCart([...cart, product])//seteo el carrio (copia carrito y producto nuevo)
  }

  //Recorrer la data 
  return data.map((product)=>{
    //card
    return (
      <div className="card" key={product.id}>
        <img src={product.img} alt="img-product-card"/>
        <h3>{product.nombre}</h3>
        <h4>{product.precio}$</h4>
        <button onClick={()=> buyProducts (product)}>Buy</button>
      </div>
      //boton de compra
    )
  }) 
  
}

export default Products
