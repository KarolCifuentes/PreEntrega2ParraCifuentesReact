//import Title from '../Title/Title'
import { useState, useEffect } from 'react'
import { getProducts , getProductsByCategory } from '../asyncMock' //Ubicacion del array
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item'

/* Primera entrega
export const ItemListContainer = (props) => {
   
   return (
   <Title greeting={props.texto}/>
   )
}

export default ItemListContainer; */

/*Segunda entrega*/
const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]) //creamos un esta para almacenar los productos Se le asigna el estado a la constante el valor del contador 1

    // console.log("producs actuales: ")
    // console.log(products)

    const { categoryId } = useParams() //useParams toma el parametro de la url y extraemos el categoryId

    console.log('Aqui esta el categoryId')
    console.log(categoryId)

    useEffect(() => { //Declaramos la accion que va a iterar la filtracon 
        const asyncFunc = categoryId ? getProductsByCategory : getProducts //Declarar una constante y asignarle el valor de categoryId

        asyncFunc(categoryId) //La funcion 
            .then(response => {
                setProducts(response) //Almacenamos el array de productos en el estado (setProducts)
                console.log('Aqui esta el response')
                console.log(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId]) //Dependencia

    return (
        <div>
            <h1 style={{color:'red'}}>{greeting}</h1>
            <ItemList products={products}/> {/*Ese eestado va ser pasado products*/}
        </div>
    )

    /*useState(() => { // La promesa se cumple en este get
        getProducts() // Obtener los productos del array products 
            .then(response => { 
                setProducts(response)
            })
            .cath(error => {
                console.error(error)
            })
    }, []) */

    // el estado del producto se pasa al ItemList
    /*return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />  La respuesta se almacena en el estado
        </div>
    )*/

}

export default ItemListContainer;