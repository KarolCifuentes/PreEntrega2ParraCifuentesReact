import React from 'react'
import Title from '../Title/Title'

export const ItemListContainer = (props) => {
    return (
        <Title greeting={props.texto}/>
    )
}

export default ItemListContainer;