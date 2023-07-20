import React from 'react'

export const Title = (props) => {
    console.log(props)
  return (
    <h1>{props.greeting}</h1>
  )
}

export default Title;