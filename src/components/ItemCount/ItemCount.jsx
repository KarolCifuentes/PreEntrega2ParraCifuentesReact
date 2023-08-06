import React from 'react'
import './ItemCount.css'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemCount = ({ stock, initial, onAdd }) => {

    const [quantity, setQuantity] = useState(initial) // Estado en 1

    const increment = () => { //Incremen del contador
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => { //Decremen del contador
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    //Componente del contador
    return (
        <>
            <div>
                <Row className="justify-content-md-between p-2" md="auto">
                    <Col xs lg="5">
                        <Button variant="danger w-50" size="sm">
                            -
                        </Button>{'decrement'}
                    </Col>
                    <h4 className='Number'>{quantity}</h4>
                    <Col xs lg="5">
                        <Button variant="primary w-50" size="sm">
                            +
                        </Button>{'increment'}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="success" className='Button' onClick={() => onAdd(quantity)} desactivado={!stock}>
                            Agregar
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    );

    // return (
    //     <div className='Counter'>
    //         <div className='Controls'>
    //             <button className='Button' onClick={decrement}> - </button>
    //             <h4 className='Number'>{quantity}</h4>
    //             <button className='Button' onClick={increment}> + </button>
    //         </div>
    //         <div>
    //             <button className='Button' onClick={() => onAdd(quantity)} desactivado={!stock}></button>
    //             {/*Buton para agregar al carrito*/}
    //         </div>
    //     </div>
    // )

}

export default ItemCount