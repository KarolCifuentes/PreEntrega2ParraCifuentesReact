import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ItemDetail = ({ id, nombre, precio, img, cantidad, categoria, descripcion }) => {//Declaramos una costante le asignamos id, name.. , description, category
  const [quantityAdded, setQuantityAdded] = useState(0) //Se almacena la cantidad agregada 

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
  }

  //Mostramos contador
  return (
    <Card className='my-5 m-auto p-2' style={{ width: '18rem' }}>
      <Card.Img className='m-auto' variant="top" src={img} alt={nombre} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          Precio:${precio}
        </Card.Text>
        <Card.Text>
          Categoria:${categoria}
        </Card.Text>
        <Card.Text>
          Descripcion:${descripcion}
        </Card.Text>
        {/* <ItemCount initial={1} stock={cantidad} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} /> */}
        {
          quantityAdded > 0 ? (
            <Link to='/cart' className='Option'>Terminar compra</Link> //Funcion que se ejecuta en el contador
          ) : (
            <ItemCount initial={1} stock={cantidad} onAdd={handleOnAdd} /> //onAdd lo que resive el contador 
          )
        }
      </Card.Body>
    </Card>
  );

  /*return (
    <article className='CardItem'>
      <header className='Header'>
        <h2 className='ItemHeader'>
          {nombre}
        </h2>
      </header>
      <picture>
        <img src={img} alt={nombre} className='ItemImg' />
      </picture>
      <section>
        {/* <p className='Info'>
          Categoria:{category}
        </p>
        <p className='Info'>
          Descripcion:{description}
        </p> }
        <p className='Info'>
          Precio:${precio}
        </p>
      </section>
      <footer className='ItemFooter'>
        <ItemCount initial={1} stock={cantidad} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
      </footer>
    </article>
  )*/
}

export default ItemDetail