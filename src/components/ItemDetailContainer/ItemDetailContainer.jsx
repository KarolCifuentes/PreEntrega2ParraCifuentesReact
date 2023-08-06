import React from 'react'
import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

//ItemDetailContainer es la logica para mostrar el estado del detalle del producto
const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null) //Tiene un estado que se asigno a laconstante product

    //const {categoryId} = useParams()
    const { itemId } = useParams()

    useEffect(() => { //Le pasomos el itemId a la funcion getProductById
        getProductById(itemId)//getProductById se en cuentra en el asyncMock
        .then(response => {
            setProduct(response)//La promesa se cumpla y el producto se guarda en el estado product
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    /* useEffect(() => {//useEffect va obtener el id de uno de los productos
        getProductById('1')//getProductsById se encuentra en asyncMock la promesa se cumple y el producto se guarda en la costante product
            .them(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, []) */

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>            
        </div>
    )
}

export default ItemDetailContainer