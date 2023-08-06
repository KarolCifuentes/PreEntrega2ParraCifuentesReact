import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

//ItemList se encarga de en listar los productos de forma presentada
const ItemList = ({ products }) => { 

  console.log('console.log(products)')
  console.log(products)

  return (
    <div className='d-flex justify-content-evenly ListGroup'>
      {products.map(prod =>
        <Item key={prod.id} {...prod} /> //id={prod.id} {...prod}
      )}
    </div>
  )
}

export default ItemList