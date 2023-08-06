import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
import Card from 'react-bootstrap/Card';

//Es la card de cada producto
const Item = ({ id, nombre, precio, img, cantidad }) => { //Declarar una constante que asignamos id, name, img, price, stock para crear nuesta card
//Cars del home
    return (
        <Card className='my-5 p-2' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt={nombre} className='m-auto ItemImg' />
            <Card.Body>
                <Card.Title className=''>{nombre}</Card.Title>
                <Card.Text>
                    Precio: ${precio}
                </Card.Text>
                <Card.Text>
                    Stock displonible: {cantidad}
                </Card.Text>
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </Card.Body>
        </Card>
    );

    // return (
    //     <article class='CardItem'>
    //         <header className='Header'>
    //             <h2 className='ItemHeader'>
    //                 {name}
    //             </h2>
    //         </header>
    //         <picture>
    //             <img src={img} alt={name} className='ItemImg' />
    //         </picture>
    //         <section>
    //             <p className='Info'>
    //                 Precio: ${price}
    //             </p>
    //             <p className='Info'>
    //                 Stock displonible: {stock}
    //             </p>
    //         </section>
    //         <footer className='ItemFooter'>
    //             <button className='Option'>Ver detalle</button>
    //             <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
    //         </footer>
    //     </article>

    // )
}

export default Item